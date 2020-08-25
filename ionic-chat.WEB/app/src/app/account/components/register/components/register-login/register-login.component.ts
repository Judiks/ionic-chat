import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SendConfirmSMSRequest, UserRequest } from 'src/swagger/models';
import { AccountService } from 'src/swagger/services';
import { BaseComponent } from 'src/app/shared/base.component';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss'],
})
export class RegisterLoginComponent extends BaseComponent {

  public user: UserRequest;
  public form: FormGroup;
  public sendSmsModel: SendConfirmSMSRequest;

  constructor(private accountService: AccountService, public keyboard: Keyboard) {
    super(keyboard);
    this.form = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
      ]),
    });

  }

  onNextStepClick() {

  }


  checkUserName() {
    this.accountService.AccountCheckUserName(this.user.userName).subscribe(result => {
      if (!result) {
        this.form.controls.userName.setErrors({ incorrect: true });
      }
      return result;
    });
    return false;
  }

  checkEmail() {
    this.accountService.AccountCheckUserEmail(this.user.userName).subscribe(result => {
      if (!result) {
        this.form.controls.email.setErrors({ incorrect: true });
      }
      return result;
    });
    return false;
  }

}
