import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendError } from '@app/shared/models/backend-error';
import { FormFieldGroup } from '@app/shared/models/form-field-group';
import { FormValue } from '@app/shared/models/form-value';
import { NotificationType } from '@app/shared/modules/notification/constants/notification-type';
import { NotificationService } from '@app/shared/modules/notification/services/notification.service';
import { Validators } from '@app/shared/validators/validators';
import { AUTH_ROUTES } from '../../constants/auth.constants';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-reset-password',
  templateUrl: './auth-reset-password.page.html',
  styleUrls: ['./auth-reset-password.page.scss'],
})
export class AuthResetPasswordPage {
  public loading = false;
  public token = '';
  public fieldGroup = new FormFieldGroup([
    //fake username input needed to trigger chrome's password suggestion
    {
      name: 'username',
      displayName: 'Username',
      type: 'text',
      icon: 'account_box',
      autocomplete: 'username',
      hidden: true,
    },
    {
      name: 'password',
      displayName: 'Password',
      type: 'password',
      icon: 'vpn_key',
      autocomplete: 'new-password',
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(128)],
    },
    {
      name: 'confirmPassword',
      displayName: 'Confirm Password',
      type: 'password',
      icon: 'vpn_key',
      autocomplete: 'new-password',
      validators: [Validators.controlsMatch('password', 'confirmPassword'), Validators.required],
    },
  ]);
  constructor(
    private activatedRoute: ActivatedRoute,
    private authSrv: AuthService,
    private router: Router,
    private notificationSrv: NotificationService
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.token = params['token'] as string;
    });
  }

  public onSubmit($event: FormValue): void {
    this.loading = true;
    this.authSrv
      .resetPassword($event['password'] as string, this.token)
      .subscribe({
        next: () => {
          this.notificationSrv.add(NotificationType.SUCCESS, 'Password changed successfully');
          void this.router.navigate([AUTH_ROUTES.BASE, AUTH_ROUTES.LOGIN]);
        },
        error: (error: BackendError) => this.notificationSrv.add(NotificationType.ERROR, error.message),
      })
      .add(() => (this.loading = false));
  }
}
