import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { KeyboardHelper } from 'src/app/shared/helpers/keyboard.helper';
import { SendConfirmSMSRequest, UserRequest } from 'src/swagger/models';
import { AccountService } from 'src/swagger/services';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss'],
})
export class RegisterLoginComponent implements OnDestroy {

  public user: UserRequest;
  public form: FormGroup;
  public keyboardHelper = KeyboardHelper;
  public sendSmsModel: SendConfirmSMSRequest;

  constructor(private accountService: AccountService) {

    this.form = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
      ]),
    });
    this.keyboardHelper.BeginListen();

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

  ngOnDestroy(): void {
    this.keyboardHelper.EndListener();
  }
}
