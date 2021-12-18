import { Component } from "@angular/core";
import { FieldGroup } from "@app/shared/models/fieldGroup";
import { FormValue } from "@app/shared/models/formValue";

@Component({
  selector: "app-confirm-email",
  templateUrl: "./confirm-email.component.html",
  styleUrls: ["./confirm-email.component.scss"],
})
export class ConfirmEmailComponent {
  public fieldGroup = new FieldGroup([]);
  constructor() {}

  public onSubmit($event: FormValue): void {
    console.log($event);
  }
}
