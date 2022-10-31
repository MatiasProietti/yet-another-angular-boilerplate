import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserSessionService {
  /**
   * @description Returns {true} if the user is logged in (has a token set in localStorage / sessionStorage)
   * @returns {*}  {boolean}
   */
  public isAuthenticated(): boolean {
    return !!(localStorage.getItem('token') || sessionStorage.getItem('token'));
  }
}
