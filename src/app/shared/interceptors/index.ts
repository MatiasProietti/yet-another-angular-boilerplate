import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { UrlInterceptor } from "./url.interceptor";

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [{ provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true }];
