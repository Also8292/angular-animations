import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('sidebareEffect', [
      state('initial', style({
        left: '-20%'
      })),
      state('final', style({
        left: '0'
      })),
      transition('final=>initial', animate('500ms')),
      transition('initial=>final', animate('500ms'))
    ]),
  ]
})
export class SidebarComponent {

  constructor() { }

  currentState = 'initial';

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  hideMenu() {
    if(this.currentState == 'final') {
      this.currentState = 'initial';
    }
  }
}
