import { Component } from "@angular/core";
import { FieldGroup } from "@app/shared/models/field-group";
import { FormValue } from "@app/shared/models/form-value";
import { Validators } from "@app/shared/validators/validators";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-resend-email",
  templateUrl: "./resend-email.component.html",
  styleUrls: ["./resend-email.component.scss"],
})
export class ResendEmailComponent {
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

  constructor(private authSrv: AuthService) {}

  public onSubmit($event: FormValue): void {
    this.authSrv.resendEmail($event["email"] as string).subscribe(() => {
      alert("email re-sent");
    });
  }
}
