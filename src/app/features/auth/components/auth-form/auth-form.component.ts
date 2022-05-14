import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormFieldGroup } from "@app/shared/models/form-field-group";
import { FormValue } from "@app/shared/models/form-value";
import { MatErrorService } from "@app/shared/services/mat-error.service";
import { Validators } from "@app/shared/validators/validators";
import { AUTH_ROUTES } from "../../constants/auth.consts";

@Component({
  selector: "app-auth-form",
  templateUrl: "./auth-form.component.html",
  styleUrls: ["./auth-form.component.scss"],
})
export class AuthFormComponent implements OnInit, OnChanges {
  @Input() fieldGroup!: FormFieldGroup;
  @Input() rememberMe = false;
  @Input() termsOfService = false;
  @Input() integration = false;
  @Input() btnText = "";
  @Input() loading = false;
  // submit is a reserved word
  @Output() formSubmit = new EventEmitter<FormValue>();

  public form!: FormGroup;
  public revealPassword = false;
  public readonly forgotPasswordUrl = `/${AUTH_ROUTES.BASE}/${AUTH_ROUTES.FORGOT_PASSWORD}`;

  constructor(public matErrorSrv: MatErrorService, private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.mapFields();
    this.listenPasswordChanges();
  }

  private mapFields(): void {
    const mappedFields = this.fieldGroup.toFormBuilder();

    if (this.termsOfService) mappedFields["termsOfService"] = [false, [Validators.requiredTrue]];

    if (this.rememberMe) mappedFields["rememberMe"] = [false, []];

    this.form = this.formBuilder.group(mappedFields);
  }

  private listenPasswordChanges(): void {
    if (this.form.get("password") && this.form.get("confirmPassword"))
      this.form.get("password")?.valueChanges.subscribe(() => this.form.get("confirmPassword")?.updateValueAndValidity());
  }

  public ngOnChanges(): void {
    if (!this.form) return;
    if (this.loading === true) {
      this.form.disable();
    } else this.form.enable();
  }

  public toggleRevealPassword(): void {
    this.revealPassword = !this.revealPassword;
  }

  public onSubmit(): void {
    // In some cases the errors are not shown when checking the validity of the form
    // this method will trigger the validity check
    this.form.markAllAsTouched();

    if (this.form.invalid) return;
    this.formSubmit.emit(this.form.value as FormValue);
  }
}
