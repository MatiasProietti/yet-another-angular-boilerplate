import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserSessionService {
  constructor() {}

  public isAuthenticated(): boolean {
    return !!(localStorage.getItem("token") || sessionStorage.getItem("token"));
  }
}
