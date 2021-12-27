import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FieldGroup } from "@app/shared/models/fieldGroup";
import { FormValue } from "@app/shared/models/formValue";
import { Validators } from "@app/shared/validators/validators";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"],
})
export class ChangePasswordComponent {
  public fieldGroup = new FieldGroup([
    {
      name: "oldPassword",
      displayName: "Current Password",
      type: "password",
      icon: "vpn_key",
      autocomplete: "current-password",
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(128)],
    },
    {
      name: "newPassword",
      displayName: "New Password",
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
      validators: [Validators.controlsMatch("newPassword", "confirmPassword"), Validators.required],
    },
  ]);
  constructor(private authSrv: AuthService, private router: Router) {}

  public onSubmit($event: FormValue): void {
    this.authSrv.changePassword($event["oldPassword"] as string, $event["newPassword"] as string).subscribe(() => {
      alert("password changed!");
      void this.router.navigateByUrl("/auth/login");
    });
  }
}

//@todo: add default username from accountSrv
