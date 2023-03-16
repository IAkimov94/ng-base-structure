import {
    BehaviorSubject,
    catchError,
    filter,
    Observable,
    switchMap,
    tap,
    throwError,
} from 'rxjs';

import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';

import { AuthService } from '../services/auth.service';


export class TokenExpirationInterceptor implements HttpInterceptor {

    private readonly _tokenRefreshed$ = new BehaviorSubject<boolean>(true);

    constructor(
        private readonly _authService: AuthService,
    ) {}

    public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(req)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401) {
                        const request$ = this._tokenRefreshed$.value
                            ? this._refreshToken()
                            : this._waitTokenRefresh();

                        return  request$
                            .pipe(
                                switchMap(() => {
                                    return next.handle(req);
                                }),
                            );
                    }

                    return throwError(() => error);
                }),
            );
    }

    private _waitTokenRefresh(): Observable<unknown> {
        return this._tokenRefreshed$
            .pipe(
                filter((tokenRefreshed) => !!tokenRefreshed),
            );
    }

    private _refreshToken(): Observable<unknown> {
        this._tokenRefreshed$.next(false);

        return this._authService.refresh()
            .pipe(
                tap(() => {
                    this._tokenRefreshed$.next(true);
                }),
            );
    }

}
