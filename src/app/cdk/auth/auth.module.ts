import { ModuleWithProviders, NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { API_URL } from './providers/api-url.provider';
import { TokenExpirationInterceptor } from './interceptors/token-expiration.interceptor';


@NgModule({})
export class AuthModule {

    public static forRoot(apiUrl: string): ModuleWithProviders<AuthModule> {
        return {
            ngModule: AuthModule,
            providers: [
                AuthService,
                {
                    provide: API_URL,
                    useValue: apiUrl,
                    multi: true,
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: TokenExpirationInterceptor,
                    deps: [AuthService],
                },
            ],
        };
    }

}
