import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { UserSessionService } from '@app/shared/services/user-session.service';
import { Observable } from 'rxjs';

/**
 * @description Guard that stops the navigation if the user is logged in
 *
 * @class LoggedOutGuard
 * @implements {CanLoad}
 */
@Injectable({
  providedIn: 'root',
})
export class LoggedOutGuard implements CanLoad, CanActivate {
  constructor(private userSessionSrv: UserSessionService) {}

  canLoad(_route: Route, _segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !this.userSessionSrv.isAuthenticated();
  }

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return !this.userSessionSrv.isAuthenticated();
  }
}
