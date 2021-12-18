import { Component } from "@angular/core";
import { FieldGroup } from "@app/shared/models/fieldGroup";
import { FormValue } from "@app/shared/models/formValue";
import { Validators } from "@app/shared/validators/validators";

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

  constructor() {}

  public onSubmit($event: FormValue): void {
    console.log($event);
  }
}
