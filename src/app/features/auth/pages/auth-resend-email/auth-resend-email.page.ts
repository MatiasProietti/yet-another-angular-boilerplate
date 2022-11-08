import { Component } from '@angular/core';
import { BackendError } from '@app/shared/models/backend-error';
import { FormFieldGroup } from '@app/shared/models/form-field-group';
import { FormValue } from '@app/shared/models/form-value';
import { NotificationType } from '@app/shared/modules/notification/constants/notification-type';
import { NotificationService } from '@app/shared/modules/notification/services/notification.service';
import { Validators } from '@app/shared/validators/validators';
import { AUTH_ROUTES } from '../../constants/auth.constants';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-resend-email',
  templateUrl: './auth-resend-email.page.html',
  styleUrls: ['./auth-resend-email.page.scss'],
})
export class AuthResendEmailPage {
  public readonly loginUrl = `/${AUTH_ROUTES.BASE}/${AUTH_ROUTES.LOGIN}`;
  public loading = false;
  public fieldGroup = new FormFieldGroup([
    {
      name: 'email',
      displayName: 'Email',
      type: 'text',
      icon: 'mail',
      autocomplete: 'email',
      validators: [Validators.required, Validators.email],
    },
  ]);

  constructor(private authSrv: AuthService, private notificationSrv: NotificationService) {}

  public onSubmit($event: FormValue): void {
    this.loading = true;
    this.authSrv
      .resendEmail($event['email'] as string)
      .subscribe({
        next: () => {
          this.notificationSrv.add({ type: NotificationType.SUCCESS, title: 'Verification email sent successfully' });
        },
        error: (error: BackendError) => this.notificationSrv.add({ type: NotificationType.ERROR, title: error.message }),
      })
      .add(() => (this.loading = false));
  }
}
