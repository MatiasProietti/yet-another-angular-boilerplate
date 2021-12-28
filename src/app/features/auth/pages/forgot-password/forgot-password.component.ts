import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FieldGroup } from "@app/shared/models/field-group";
import { FormValue } from "@app/shared/models/form-value";
import { Validators } from "@app/shared/validators/validators";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent {
  public fieldGroup = new FieldGroup([
    {
      name: "email",
      displayName: "Email",
      type: "text",
      icon: "mail",
      autocomplete: "email",
      validators: [Validators.required, Validators.email],
    },
  ]);
  constructor(private authSrv: AuthService, private router: Router) {}

  public onSubmit($event: FormValue): void {
    this.authSrv.forgotPassword($event["email"] as string).subscribe(() => {
      void this.router.navigateByUrl("/auth/login");
    });
  }
}
