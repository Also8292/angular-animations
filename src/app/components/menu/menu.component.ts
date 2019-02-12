import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
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
export class MenuComponent {

  constructor(public sidebar: SidebarComponent) { }
  // currentState = 'initial';

  // sidebar: SidebarComponent;


  // sidebar.currentState = 'final';


  changeState() {
    this.sidebar.currentState = "initial";
  }

}
