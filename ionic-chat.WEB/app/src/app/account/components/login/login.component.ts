import { PlatformLocation } from '@angular/common';
import { ApplicationRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { BaseComponent } from 'src/app/shared/base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseComponent {

  constructor(
    public keyboard: Keyboard, public AppR: ApplicationRef, public location: PlatformLocation,
  ) {
    super(keyboard, AppR, location);
  }

  onSignInClick() {
    console.log('in here');

  }
}
