import { ApplicationRef, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NavController } from '@ionic/angular';
import { BaseComponent } from 'src/app/shared/base.component';
import { AuthHelper } from 'src/app/shared/helpers/auth.helper';
import { LoginRequest, LoginResponse } from 'src/swagger/models';
import { AuthService } from 'src/swagger/services/auth.service';

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
    public authService: AuthService, public authHelper: AuthHelper, public navController: NavController
  ) {
    super(keyboard, AppR, router, navController);
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
    this.authService.AuthLogin(this.loginRequest).subscribe((result: LoginResponse) => {
      this.authHelper.setUserOnLogin(result);
      this.redirectToRooms();
    }, err => {
      console.log(err);
    });

  }

}
