/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { BackendError } from "../models/backend-error";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMsg: BackendError = {
          code: (error.error?.code as number) || error.status,
          message: (error.error?.message as string) || error.statusText,
        };
        return throwError(() => errorMsg);
      })
    );
  }
}

//@todo?: map errors using constants
