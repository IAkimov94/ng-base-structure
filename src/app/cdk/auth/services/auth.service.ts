import { Inject, Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { API_URL } from '../providers/api-url.provider';
import { IResponseWithToken } from '../interfaces/response-with-token.interface';


@Injectable()
export class AuthService {

    private readonly _isAuth$ = new BehaviorSubject<boolean>(false);

    constructor(
        private readonly _httpClient: HttpClient,
        @Inject(API_URL)
        private readonly _apiUrl: string,
    ) {}

    public get isAuthorized$(): Observable<boolean> {
        return this._isAuth$.asObservable();
    }

    public get isAuthorized(): boolean {
        return this._isAuth$.value;
    }

    public signUp(): Observable<unknown> {
        const url = `${this._apiUrl}/signup`;

        return of(true)
            .pipe(
                tap(() => this._isAuth$.next(true)),
            );
    }

    public login(): Observable<IResponseWithToken> {
        const url = `${this._apiUrl}/login`;

        return of<IResponseWithToken>({ token: 'true' })
            .pipe(
                tap(() => this._isAuth$.next(true)),
            );
    }

    public logout(): Observable<unknown> {
        const url = `${this._apiUrl}/logout`;

        return of(true)
            .pipe(
                tap(() => this._isAuth$.next(false)),
            );
    }

    public refresh(): Observable<IResponseWithToken> {
        const url = `${this._apiUrl}/refresh`;

        return of<IResponseWithToken>({ token: 'true' })
            .pipe(
                tap({
                    next: () => this._isAuth$.next(true),
                    error: () => this._isAuth$.next(false),
                }),
            );
    }

}
