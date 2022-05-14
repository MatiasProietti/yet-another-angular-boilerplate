import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class AuthRepositoryService {
  constructor(private httpClient: HttpClient) {}

  public login<T = { token: string }>(data: { username: string; password: string }): Observable<T> {
    return this.httpClient.post<T>(`${environment.apiUrl}/auth/login`, data);
  }

  public register<T>(data: { username: string; email: string; password: string }): Observable<T> {
    return this.httpClient.post<T>(`${environment.apiUrl}/auth/register`, data);
  }

  public forgotPassword<T>(data: { email: string }): Observable<T> {
    return this.httpClient.post<T>(`${environment.apiUrl}/auth/forgot-password`, data);
  }

  public resetPassword<T>(data: { password: string; token: string }): Observable<T> {
    return this.httpClient.post<T>(`${environment.apiUrl}/auth/reset-password/${data.token}`, { password: data.password });
  }

  public changePassword<T>(data: { old_password: string; new_password: string }): Observable<T> {
    return this.httpClient.post<T>(`${environment.apiUrl}/auth/change-password`, data);
  }

  public confirmEmail<T>(data: { id: number; hash: string; expires: string; signature: string }): Observable<T> {
    return this.httpClient.post<T>(
      `${environment.apiUrl}/auth/confirm-email/${data.id}/${data.hash}?expires=${data.expires}&signature=${data.signature}`,
      {}
    );
  }

  public resendEmail<T>(data: { email: string }): Observable<T> {
    return this.httpClient.post<T>(`${environment.apiUrl}/auth/resend-email`, data);
  }
}

// @todo: remove <T> and add typing
