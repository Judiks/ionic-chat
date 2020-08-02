import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { KeyboardHelper } from 'src/app/shared/helpers/keyboard.helper';
import { PipeHelper } from 'src/app/shared/helpers/pipe-helper';
import { SendConfirmSMSRequest, UserRequest } from 'src/swagger/models';
import { AccountService } from 'src/swagger/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent implements OnInit, OnDestroy {

  public isKeyboardActive: boolean;
  public user: UserRequest;
  public form: FormGroup;
  public keyboardHelper = KeyboardHelper;
  public pipeHelper = PipeHelper;
  public sendSmsModel: SendConfirmSMSRequest;
  public code: string;
  public smsCode: string;
  public isVerify: boolean;
  public step1: boolean;
  public step2: boolean;

  constructor(private accountService: AccountService) {
    this.code = '';
    this.smsCode = '';
    this.isVerify = false;
    this.step1 = false;
    this.step2 = false;
    this.sendSmsModel = {
      phoneNumber: ''
    } as UserRequest;

    this.keyboardHelper.BeginListen();
    this.user = {
      password: '',
      userName: '',
      phoneNumber: '',
      confirmPassword: '',
      email: '',
      role: 0
    };
  }

  ngOnInit() {
    console.log('app is runing');
  }

  onPhoneChange(model: SendConfirmSMSRequest) {
    this.accountService.AccountSendRegisterSMS(model).subscribe((code: string) => {
      this.code = code;
    });
  }

  ngOnDestroy(): void {
    this.keyboardHelper.EndListener();
  }
}
