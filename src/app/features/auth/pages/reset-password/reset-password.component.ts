import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FieldGroup } from "@app/shared/models/field-group";
import { FormValue } from "@app/shared/models/form-value";
import { Validators } from "@app/shared/validators/validators";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent {
  public token = "";
  public fieldGroup = new FieldGroup([
    //fake username input needed to trigger chrome's password suggestion
    {
      name: "username",
      displayName: "Username",
      type: "text",
      icon: "account_box",
      autocomplete: "username",
      hidden: true,
    },
    {
      name: "password",
      displayName: "Password",
      type: "password",
      icon: "vpn_key",
      autocomplete: "new-password",
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(128)],
    },
    {
      name: "confirmPassword",
      displayName: "Confirm Password",
      type: "password",
      icon: "vpn_key",
      autocomplete: "new-password",
      validators: [Validators.controlsMatch("password", "confirmPassword"), Validators.required],
    },
  ]);
  constructor(private activatedRoute: ActivatedRoute, private authSrv: AuthService, private router: Router) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.token = params["token"] as string;
    });
  }

  public onSubmit($event: FormValue): void {
    this.authSrv.resetPassword($event["password"] as string, this.token).subscribe(() => {
      void this.router.navigateByUrl("auth/login");
    });
  }
}
