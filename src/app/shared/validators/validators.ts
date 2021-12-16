import { AbstractControl, ValidationErrors, ValidatorFn, Validators as angularValidators } from "@angular/forms";

export class Validators extends angularValidators {
  /**
   * @description
   * Validator that requires the first control's value to match the second control's value.
   *
   * @usageNotes
   *
   * ## Can only be used with controls that belong to the same formGroup.
   *
   * ### Validate that the control `password` matches the control `confirmPassword` (using FormBuilder)
   *
   * ```typescript
   * const form = formBuilder.group({
   *    password: ['password'],
   *    confirmPassword: ['12345678', Validators.controlsMatch('password', 'confirmPassword')]
   * });
   *
   * console.log(form.password.errors); // {passwordMatch: true}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `passwordMatch` property if the validation check fails, otherwise `null`.
   *
   * @see `updateValueAndValidity()`
   *
   */
  static controlsMatch(controlName: string, matchControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.parent?.get(controlName)?.value === control.parent?.get(matchControlName)?.value ? null : { passwordMatch: true };
    };
  }
}
