import { Component, OnInit, OnDestroy } from '@angular/core';
import { KeyboardHelper } from 'src/app/shared/helpers/keyboard.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {

  public keyboardHelper = KeyboardHelper;

  constructor() {
    this.keyboardHelper.BeginListen();
  }



  ngOnInit() {
  }

  onSignInClick() {
    console.log('in here');

  }

  ngOnDestroy(): void {
    this.keyboardHelper.EndListener();
  }
}
