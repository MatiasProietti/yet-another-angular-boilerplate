import { Component } from "@angular/core";
import { FieldGroup } from "@app/shared/models/fieldGroup";
import { FormValue } from "@app/shared/models/formValue";
import { Validators } from "@app/shared/validators/validators";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  public fieldGroup = new FieldGroup([
    {
      name: "username",
      displayName: "Username",
      type: "text",
      icon: "account_box",
      autocomplete: "username",
      validators: [Validators.required, Validators.minLength(4), Validators.maxLength(128)],
    },
    {
      name: "email",
      displayName: "Email",
      type: "text",
      icon: "mail",
      autocomplete: "email",
      validators: [Validators.required, Validators.email],
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

  constructor() {}

  public onSubmit($event: FormValue): void {
    console.log($event);
  }
}
