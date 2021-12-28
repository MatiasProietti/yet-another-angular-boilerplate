import { Component } from "@angular/core";
import { FieldGroup } from "@app/shared/models/field-group";
import { FormValue } from "@app/shared/models/form-value";
import { Validators } from "@app/shared/validators/validators";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-auth-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  public fieldGroup = new FieldGroup([
    {
      name: "username",
      displayName: "Username",
      type: "text",
      icon: "account_box",
      autocomplete: "username",
      validators: [Validators.required],
    },
    {
      name: "password",
      displayName: "Password",
      type: "password",
      icon: "vpn_key",
      autocomplete: "current-password",
      validators: [Validators.required],
    },
  ]);
  constructor(private authSrv: AuthService) {}

  public onSubmit($event: FormValue): void {
    this.authSrv.login($event["username"] as string, $event["password"] as string, $event["rememberMe"] as boolean).subscribe(() => {
      alert("logged in!");
    });
  }
}
