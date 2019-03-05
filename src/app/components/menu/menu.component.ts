import { Component, ViewChild, Output } from '@angular/core';
import { Animations } from 'src/app/animation';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    Animations.sidebareEffect,
    Animations.sidebarEntrance
  ]
})
export class MenuComponent {

  constructor() { }

  currentState = 'out';

  changeState() {
    this.currentState = this.currentState === 'out' ? 'in' : 'out';
    // console.log(this.currentState);
  }

  test() {
    console.log("HELLO ALSO");
    
  }
}
