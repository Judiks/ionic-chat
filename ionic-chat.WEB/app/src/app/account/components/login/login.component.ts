import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base.component';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseComponent{

  constructor(public keyboard: Keyboard) {
    super(keyboard);
  }

  onSignInClick() {
    console.log('in here');

  }
}
