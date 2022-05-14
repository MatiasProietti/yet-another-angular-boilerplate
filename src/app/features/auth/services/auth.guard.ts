import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { UserSessionService } from "@app/shared/modules/notification/services/user-session.service";
import { Observable } from "rxjs";
import { AUTH_ROUTES } from "../constants/auth.consts";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private userSessionSrv: UserSessionService, private router: Router) {}

  public canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userSessionSrv.isAuthenticated();
  }
  public canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (childRoute.data["requiredState"] === "login") {
      if (!this.userSessionSrv.isAuthenticated()) {
        void this.router.navigate([AUTH_ROUTES.BASE, AUTH_ROUTES.LOGIN]);
        return false;
      }

      return true;
    } else if (childRoute.data["requiredState"] === "logout") {
      if (this.userSessionSrv.isAuthenticated()) {
        void this.router.navigateByUrl("");
        return false;
      }

      return true;
    } else return false;
  }
}
//@todo: replace "login" and "logout" with constants
