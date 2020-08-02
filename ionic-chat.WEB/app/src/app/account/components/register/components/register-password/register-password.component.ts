import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { KeyboardHelper } from 'src/app/shared/helpers/keyboard.helper';
import { SendConfirmSMSRequest } from 'src/swagger/models';
import { AccountService } from 'src/swagger/services';

@Component({
  selector: 'app-register-password',
  templateUrl: './register-password.component.html',
  styleUrls: ['./register-password.component.scss'],
})
export class RegisterPasswordComponent implements OnDestroy {

  public form: FormGroup;
  public keyboardHelper = KeyboardHelper;
  public sendSmsModel: SendConfirmSMSRequest;


  constructor(private accountService: AccountService) {

    this.form = new FormGroup({
      password: new FormControl('', [
        Validators.required,
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
      ]),
    });
    this.keyboardHelper.BeginListen();
  }


  onNextStepClick() {

  }

  ngOnDestroy(): void {
    this.keyboardHelper.EndListener();
  }
}
