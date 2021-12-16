export const VALIDATORS_ERRORS = [
  { name: "controlsMatch", text: "`${_displayName} must match`" },
  { name: "required", text: "`${_displayName} is required`" },
  { name: "minlength", text: "`${_displayName} must contain at least ${ctrl.errors.minlength.requiredLength} characters`" },
  { name: "maxlength", text: "`${_displayName} must contain below ${ctrl.errors.maxlength.requiredLength} characters`" },
  { name: "email", text: "`${_displayName} must be a valid email address`" },
];
