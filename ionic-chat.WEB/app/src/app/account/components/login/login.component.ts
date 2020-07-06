import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public isKeyboardActive: boolean;

  constructor(private keyboard: Keyboard) {
    this.keyboard.onKeyboardShow().subscribe(result => {
      this.isKeyboardActive = true;
    });
    this.keyboard.onKeyboardHide().subscribe(result => {
      this.isKeyboardActive = false;
    });
  }

  ngOnInit() {
  }

  onSignInClick() {
    console.log('in here');

  }
}
