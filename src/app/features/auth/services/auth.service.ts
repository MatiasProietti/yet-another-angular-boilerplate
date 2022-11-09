import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Observable, tap } from 'rxjs';
import { AuthRepositoryService } from './auth-repository.service';

@Injectable()
export class AuthService {
  constructor(private repoSrv: AuthRepositoryService) {}

  public login(username: string, password: string, remember?: boolean): Observable<{ token: string }> {
    const res = this.repoSrv.login({ username, password }).pipe(
      tap((answer) => {
        this.saveToken(answer.token, remember);
      })
    );
    return res;
  }

  public register<T>(username: string, email: string, password: string): Observable<T> {
    return this.repoSrv.register({ username, email, password });
  }

  public forgotPassword<T>(email: string): Observable<T> {
    return this.repoSrv.forgotPassword({ email });
  }

  public resetPassword<T>(password: string, token: string): Observable<T> {
    return this.repoSrv.resetPassword({ password, token });
  }

  public changePassword<T>(oldPassword: string, newPassword: string): Observable<T> {
    const res = this.repoSrv.changePassword<T>({ old_password: oldPassword, new_password: newPassword }).pipe(
      tap(() => {
        this.removeToken();
      })
    );

    return res;
  }

  public confirmEmail<T>(id: number, hash: string, expires: string, signature: string): Observable<T> {
    return this.repoSrv.confirmEmail({ id, hash, expires, signature });
  }

  public resendEmail<T>(email: string): Observable<T> {
    return this.repoSrv.resendEmail({ email });
  }

  public logout(): void {
    this.removeToken();
  }

  private removeToken(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('decodedToken');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('decodedToken');
  }

  private saveToken(token: string, remember?: boolean): void {
    if (remember) {
      localStorage.setItem('token', token);
      localStorage.setItem('decodedToken', JSON.stringify(jwt_decode(token)));
    } else {
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('decodedToken', JSON.stringify(jwt_decode(token)));
    }
  }
}

// @todo: remove <T> and add proper models
