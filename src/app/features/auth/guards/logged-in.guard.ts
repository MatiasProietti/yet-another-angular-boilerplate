import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, UrlTree } from "@angular/router";
import { UserSessionService } from "@app/shared/services/user-session.service";
import { Observable } from "rxjs";

/**
 * @description Guard that stops the navigation if the user is NOT logged in.
 *
 * @class LoggedInGuard
 * @implements {CanLoad}
 */
@Injectable({
  providedIn: "root",
})
export class LoggedInGuard implements CanLoad {
  constructor(private userSessionSrv: UserSessionService) {}

  canLoad(_route: Route, _segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userSessionSrv.isAuthenticated();
  }
}
