import {
  style,
  animate,
  trigger,
  transition,
  AnimationTriggerMetadata,
  state,
} from '@angular/animations';

export const RollAnimation: AnimationTriggerMetadata = trigger(
  'rollAnimation',
  [
    transition('void => *', [
      style({ opacity: 0 }),
      animate(2000, style({ opacity: 1 })),
    ]),
  ]
);
