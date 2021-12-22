import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "@environments/environment";

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //@todo: improve this simple workaround, need to intercept only api calls
    if (!request.url.startsWith("/assets")) {
      request = request.clone({
        url: `${environment.apiUrl}${request.url}`,
      });
    }
    return next.handle(request);
  }
}
