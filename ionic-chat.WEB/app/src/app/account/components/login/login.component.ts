import { ApplicationRef, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { BaseComponent } from 'src/app/shared/base.component';
import { AuthHelper } from 'src/app/shared/helpers/auth-helper';
import { LoginRequest } from 'src/swagger/models';
import { AccountService } from 'src/swagger/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent extends BaseComponent {

  public loginRequest: LoginRequest;
  public form: FormGroup;

  constructor(
    public keyboard: Keyboard, public AppR: ApplicationRef, public router: Router, public cd: ChangeDetectorRef,
    public accountService: AccountService, public authHelper: AuthHelper
  ) {
    super(keyboard, AppR, router, cd);
    this.form = new FormGroup({
      login: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    });

    this.loginRequest = {
      password: null,
      login: null
    } as LoginRequest;
  }

  onSignInClick() {
    this.accountService.AccountLogin(this.loginRequest).subscribe(model => {
      this.authHelper.setUserOnLogin(model);
      this.redirectToRooms();
    }, err => {
      console.log(err);
    });

  }

}
