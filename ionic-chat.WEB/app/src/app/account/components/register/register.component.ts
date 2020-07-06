import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public isKeyboardActive: boolean;

  constructor(private keyboard: Keyboard) {
    this.keyboard.onKeyboardShow().subscribe(result => {
      this.isKeyboardActive = true;
    });
    this.keyboard.onKeyboardHide().subscribe(result => {
      this.isKeyboardActive = false;
    });
  }

  ngOnInit() { }

  onSignUpClick() {

  }

  onNextStepClick() {

  }
}
