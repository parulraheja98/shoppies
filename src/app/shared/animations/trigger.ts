import { transition, trigger, useAnimation } from "@angular/animations";
import * as animations from "./animations";

/**
 * swing the element when it first enters or leaves the DOM
 */
export const swingInAndOut = trigger("swingInAndOut", [
  transition(":enter", useAnimation(animations.swingIn)),
  transition(":leave", useAnimation(animations.swingOut)),
]);
