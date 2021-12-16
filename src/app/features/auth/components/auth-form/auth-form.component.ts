import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { FieldGroup } from "@app/shared/models/fieldGroup";
import { FormValue } from "@app/shared/models/formValue";
import { MatErrorService } from "@app/shared/services/mat-error-service";
import { Validators } from "@app/shared/validators/validators";
import { take } from "rxjs";

@Component({
  selector: "app-auth-form",
  templateUrl: "./auth-form.component.html",
  styleUrls: ["./auth-form.component.scss"],
})
export class AuthFormComponent implements OnInit {
  @Input() fieldGroup!: FieldGroup;
  @Input() rememberMe = false;
  @Input() termsOfService = false;
  @Input() integration = false;
  @Input() btnText = "";

  // submit is a reserved word
  @Output() formSubmit = new EventEmitter<FormValue>();

  public form!: FormGroup;
  public revealPassword = false;

  constructor(public matErrorSrv: MatErrorService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const mappedFields = this.fieldGroup.toFormBuilder();

    if (this.termsOfService) mappedFields["termsOfService"] = [false, [Validators.requiredTrue]];

    if (this.rememberMe) mappedFields["rememberMe"] = [false, []];

    this.form = this.formBuilder.group(mappedFields);

    if (this.form.get("password") && this.form.get("confirmPassword"))
      this.form.get("password")?.valueChanges.subscribe(() => this.form.get("confirmPassword")?.updateValueAndValidity());

    /** workaround for browser autofill
     * the form doesn't update the value and validity when filled by the browser
     * (depending on the browser) the first value of the subscription might be a null or incomplete value
     * Tested with Chrome and Firefox
     */
    this.form.valueChanges.pipe(take(2)).subscribe((value) => {
      console.log(value);
      this.form.markAllAsTouched();
    });
  }

  public toggleRevealPassword(): void {
    this.revealPassword = !this.revealPassword;
  }

  public onSubmit(): void {
    if (this.form.invalid) return;
    this.formSubmit.emit(this.form.value as FormValue);
  }
}
