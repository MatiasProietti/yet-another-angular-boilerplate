import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { VALIDATORS_ERRORS } from "../constants/validators-errors";

@Injectable({
  providedIn: "root",
})
export class MatErrorService {
  constructor() {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public getErrorMessage(ctrl: AbstractControl | null, _displayName: string): string {
    if (!ctrl) return "";
    const error = VALIDATORS_ERRORS.find((error) => ctrl.hasError(error.name));

    if (!error) return "";

    // this method can be improved. Using eval doesn't seem very intuitive.
    return eval(error.text) as string;
  }
}
