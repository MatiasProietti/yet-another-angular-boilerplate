import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendError } from '@app/shared/models/backend-error';
import { FormFieldGroup } from '@app/shared/models/form-field-group';
import { NotificationType } from '@app/shared/modules/notification/constants/notification-type';
import { NotificationService } from '@app/shared/modules/notification/services/notification.service';
import { AUTH_ROUTES } from '../../constants/auth.constants';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-confirm-email',
  templateUrl: './auth-confirm-email.page.html',
  styleUrls: ['./auth-confirm-email.page.scss'],
})
export class AuthConfirmEmailPage {
  public loading = false;
  public fieldGroup = new FormFieldGroup([]);
  public id = 0;
  public hash = '';
  public expires = '';
  public signature = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private authSrv: AuthService,
    private router: Router,
    private notificationSrv: NotificationService
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.id = params['id'] as number;
      this.hash = params['hash'] as string;
      this.expires = params['expires'] as string;
      this.signature = params['signature'] as string;
    });
  }

  public onSubmit(): void {
    this.loading = true;
    if (!this.id || !this.hash || !this.expires || !this.signature) return;

    this.authSrv
      .confirmEmail(this.id, this.hash, this.expires, this.signature)
      .subscribe({
        next: () => {
          this.notificationSrv.add({ type: NotificationType.SUCCESS, title: 'Email confirmed successfully' });
          void this.router.navigate([AUTH_ROUTES.BASE, AUTH_ROUTES.LOGIN]);
        },
        error: (error: BackendError) => this.notificationSrv.add({ type: NotificationType.ERROR, title: error.message }),
      })
      .add(() => (this.loading = false));
  }
}
