import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PipeHelper } from 'src/app/shared/helpers/pipe-helper';
import { SendConfirmSMSRequest, UserRequest } from 'src/swagger/models';
import { AccountService } from 'src/swagger/services';
import { BaseComponent } from 'src/app/shared/base.component';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Platform } from '@ionic/angular';

declare let cordova: any;
declare let firebase: any;
declare let SMSRetriever: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent extends BaseComponent {

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

  constructor(private platform: Platform, private accountService: AccountService, public keyboard: Keyboard) {
    super(keyboard);
    this.form = new FormGroup({
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[+][0-9]{3} [0-9]{2} [0-9]{3} [0-9]{4}.|[+][0-9]{3} [0-9]{2} [0-9]{3} [0-9]{4}')
      ]),
      code: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.minLength(6)
      ]),
      userName: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
      ]),
    });

    this.sendSmsModel = {
      phoneNumber: '',
      hash: ''
    } as SendConfirmSMSRequest;

    this.user = {
      password: '',
      userName: '',
      phoneNumber: '',
      confirmPassword: '',
      email: '',
      role: 0
    };

    this.onPlugins();
  }

  onPlugins() {
    this.platform.ready().then(() => {
      // get phone number
      cordova.plugins.PhoneData.getData((result: string) => {
        this.sendSmsModel.phoneNumber = PipeHelper.phoneMask(result, '');
      },
        (err) => {
          console.log(err);
        });
      // get app hash
      SMSRetriever.getHashString((hash) => {
        this.sendSmsModel.hash = hash;
      },
        (err) => {
          console.log(err);
        });
    });
  }

  onSendSms() {
    debugger
    this.sendSmsModel.phoneNumber = this.smsCode;

    // send sms with verification code
    this.accountService.AccountSendRegisterSMS(this.sendSmsModel).subscribe((code: string) => {
      this.code = code;
      this.codeSended = true;

      // start scan incoming sms
      SMSRetriever.startWatch((msg) => {
        document.addEventListener('onSMSArrive', (args: any) => {
          console.log(args.message);
        });
      },
        (err) => {
          console.log(err);
        });
    },
      (err) => {
        console.log(err);
      });
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

  onNextStepClick() {

  }

  onCheckSmsCode() {

  }
}
