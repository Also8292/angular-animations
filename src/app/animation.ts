import { trigger, state, style, transition, animate } from '@angular/animations';

export const Animations = {
    sidebareEffect: trigger('sidebareEffect', [
        state('out', style({
          left: '*'
        })),
        state('in', style({
          left: '0'
        })),
        transition('in=>out', animate('500ms')),
        transition('out=>in', animate('500ms'))
    ]),

    sidebarEntrance: trigger('sidebarEntrance', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('1s', style({ opacity: 1 })),
        ]),
        transition(':leave', [
          animate('1s', style({ opacity: 0 }))
        ])
    ])
}