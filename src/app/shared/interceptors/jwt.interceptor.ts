import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "@environments/environment";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith(environment.apiUrl)) {
      const token = localStorage.getItem("token") || sessionStorage.getItem("token");
      if (token) {
        request = request.clone({
          url: request.url,
          headers: request.headers.append("Authorization", `Bearer ${token}`),
        });
      }
    }
    return next.handle(request);
  }
}

//@todo: add refresh/access token logic
