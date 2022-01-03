import { animate, style, transition, trigger, AnimationTriggerMetadata } from "@angular/animations";

export const notificationAnimation: {
  readonly animationState: AnimationTriggerMetadata;
} = {
  /** Animation that shows and hides a notification. */
  animationState: trigger("notificationAnimation", [
    transition(":enter", [
      style({ opacity: 0, transform: "scale(0.8)" }),
      animate("150ms cubic-bezier(0, 0, 0.2, 1)", style({ opacity: 1, transform: "scale(1)" })),
    ]),
    transition(":leave", [
      style({ opacity: 1, transform: "scale(1)" }),
      animate("75ms cubic-bezier(0.4, 0.0, 1, 1)", style({ opacity: 0 })),
    ]),
  ]),
};
