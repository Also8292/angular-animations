import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('sidebareEffect', [
      state('initial', style({
        left: '-100%'
      })),
      state('final', style({
        left: '0'
      })),
      transition('final=>initial', animate('500ms')),
      transition('initial=>final', animate('500ms'))
    ]),
    trigger('sidebarEntrance', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class MenuComponent {

  constructor() {
    console.log(window.innerWidth);

  }

  currentState = 'initial';

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}
