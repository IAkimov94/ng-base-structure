import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';

import { map } from 'rxjs';

import { AuthService } from '../services/auth.service';


export const IsAuthorized: CanActivateFn | CanMatchFn = () => {
    return inject(AuthService).isAuthorized$
        .pipe(
            map((isAuthorized) => {
                return isAuthorized ?? inject(Router).createUrlTree(['/login']);
            }),
        );
};

export const IsNotAuthorized: CanActivateFn | CanMatchFn = () => {
    return inject(AuthService).isAuthorized$
        .pipe(
            map((isAuthorized) => {
                return !isAuthorized ?? inject(Router).createUrlTree(['/']);
            }),
        );
};
