import { Component } from "@angular/core";
import { FieldGroup } from "@app/shared/models/fieldGroup";
import { FormValue } from "@app/shared/models/formValue";
import { Validators } from "@app/shared/validators/validators";

@Component({
  selector: "app-auth-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  public revealPassword = false;
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
  constructor() {}

  public onSubmit($event: FormValue): void {
    console.log($event);
  }
}
