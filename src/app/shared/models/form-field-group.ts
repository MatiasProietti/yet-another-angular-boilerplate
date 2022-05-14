import { ValidationErrors } from "@angular/forms";

export interface IFormField {
  name: string;
  type: string;
  displayName: string;
  autocomplete?: string;
  icon?: string;
  validators?: ValidationErrors[];
  defaultValue?: string;
  hidden?: boolean;
}

export class FormFieldGroup {
  fields: IFormField[];

  constructor(fields: IFormField[]) {
    this.fields = fields;
  }

  public toFormBuilder(): { [key: string]: [unknown, ValidationErrors[] | undefined] } {
    const mappedFields: { [key: string]: [unknown, ValidationErrors[] | undefined] } = {};

    this.fields.forEach((field) => {
      return (mappedFields[field.name] = [field.defaultValue, field.validators]);
    });

    return mappedFields;
  }
}
