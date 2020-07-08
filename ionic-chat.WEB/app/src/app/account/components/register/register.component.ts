import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { KeyboardHelper } from 'src/app/shared/helpers/keyboard.helper';
import { PipeHelper } from 'src/app/shared/helpers/pipe-helper';
import { UserRequest, SendConfirmSMSRequest } from 'src/swagger/models';
import { AccountService } from 'src/swagger/services';
import { strict } from 'assert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {

  public isKeyboardActive: boolean;
  public form: FormGroup;
  public keyboardHelper = KeyboardHelper;
  public pipeHelper = PipeHelper;
  public sendSmsModel: SendConfirmSMSRequest;

  constructor(private accountService: AccountService) {
    this.sendSmsModel = {} as UserRequest;
    this.form = new FormGroup({
      phone: new FormControl('', [
        Validators.required,
      ])
    });
    this.keyboardHelper.BeginListen();
  }

  ngOnInit() {
  }

  onNextStepClick() {
    this.accountService.AccountSendRegisterSMS(this.sendSmsModel).subscribe((result : string) => {
      console.log(result);
    });
  }

  ngOnDestroy(): void {
    this.keyboardHelper.EndListener();
  }
}
