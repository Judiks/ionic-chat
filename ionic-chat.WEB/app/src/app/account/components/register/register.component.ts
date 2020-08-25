import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PipeHelper } from 'src/app/shared/helpers/pipe-helper';
import { SendConfirmSMSRequest, UserRequest } from 'src/swagger/models';
import { AccountService } from 'src/swagger/services';
import { BaseComponent } from 'src/app/shared/base.component';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent extends BaseComponent implements OnInit {

  public isKeyboardActive = false;
  public user: UserRequest;
  public form: FormGroup;
  public pipeHelper = PipeHelper;
  public sendSmsModel: SendConfirmSMSRequest;
  public code = '';
  public smsCode = '';
  public codeSended = false;
  public isVerify = false;
  public step1 = false;
  public step2 = false;

  constructor(private accountService: AccountService, public keyboard: Keyboard) {
    super(keyboard);
    this.sendSmsModel = {
      phoneNumber: ''
    } as UserRequest;

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
      this.codeSended = true;
    });
  }

}
