import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class MatErrorService {
  /**
   * @description Returns the error message for the first error found in the ctrl.
   * @remarks If no error is found then it returns an empty string
   * @param {(AbstractControl | null)} ctrl
   * @param {string} displayName
   * @returns {*}  {string}
   */
  public getErrorMessage(ctrl: AbstractControl | null, displayName: string): string {
    if (!ctrl) return '';

    let errorText = '';

    // This could be moved to a constants file for easier visualization but can't find a way that doesn't add complexity due to the variables in the errorText.

    if (ctrl.hasError('controlsMatch')) {
      errorText = `${displayName} must match`;
    } else if (ctrl.hasError('required')) {
      errorText = `${displayName} is required`;
    } else if (ctrl.hasError('minlength')) {
      errorText = `${displayName} must contain at least ${ctrl.getError('minlength').requiredLength} characters`;
    } else if (ctrl.hasError('maxlength')) {
      errorText = `${displayName} must contain below ${ctrl.getError('maxlength').requiredLength} characters`;
    } else if (ctrl.hasError('email')) {
      errorText = `${displayName} must be a valid email address`;
    }

    return errorText;
  }
}
