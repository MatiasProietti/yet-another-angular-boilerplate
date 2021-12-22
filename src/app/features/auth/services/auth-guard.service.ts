import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private authSrv: AuthService, private router: Router) {}

  public canActivate(): boolean {
    return this.authSrv.isAuthenticated();
  }
  //@todo: replace "login" and "logout" with constants
  //@todo: replace routes with constants
  public canActivateChild(childRoute: ActivatedRouteSnapshot): boolean {
    if (childRoute.data["requiredState"] === "login") {
      if (!this.authSrv.isAuthenticated()) {
        void this.router.navigateByUrl("/auth/login").then(() => false);
        return false;
      }

      return true;
    } else if (childRoute.data["requiredState"] === "logout") {
      if (this.authSrv.isAuthenticated()) {
        void this.router.navigateByUrl("");
        return false;
      }

      return true;
    } else return false;
  }
}
