import { ApplicationRef, ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Platform } from '@ionic/angular';
import { BaseComponent } from 'src/app/shared/base.component';
import { PipeHelper } from 'src/app/shared/helpers/pipe.helper';
import { RegisterRequest, SendConfirmSMSRequest, UserResponse } from 'src/swagger/models';
import { AuthService } from 'src/swagger/services/auth.service';

declare let cordova: any;
declare let SMSRetriever: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent extends BaseComponent {
  public user: RegisterRequest;
  public form: FormGroup;
  public pipeHelper = PipeHelper;
  public sendSmsModel: SendConfirmSMSRequest;
  public code = '';
  public smsCode = '';
  public codeSended = false;
  public isVerify = false;
  public phoneRequestCompleat = false;

  constructor(
    private platform: Platform, private accountService: AuthService, public keyboard: Keyboard,
    public AppR: ApplicationRef, public router: Router, public cd: ChangeDetectorRef
  ) {
    super(keyboard, AppR, router, cd);
    this.router.events.subscribe(e => e instanceof NavigationEnd && this.cd.detectChanges());
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
        Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')
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
    } as RegisterRequest;

    this.executePlugins();
  }

  executePlugins() {
    this.platform.ready().then(() => {
      // get phone number
      cordova.plugins.PhoneData.getData((result: string) => {
        this.sendSmsModel.phoneNumber = PipeHelper.phoneMask(result, '');
        this.user.phoneNumber = this.sendSmsModel.phoneNumber;
        this.phoneRequestCompleat = true;
        this.refresh();
      },
        (err) => {
          this.phoneRequestCompleat = true;
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
    // send sms with verification code
    this.accountService.AuthSendRegisterSMS(this.sendSmsModel).subscribe((code: string) => {
      this.code = code;
      this.codeSended = true;

      // start scan incoming sms
      SMSRetriever.startWatch((message) => {
        if (message.match(/\d{6}/g)) {
          this.smsCode = message.match(/\d{6}/)[0];
          this.refresh();
          document.getElementById('smsCode').focus();
        }

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
    if (!this.user.userName) {
      return;
    }
    const subscription = this.accountService.AuthCheckUserName(this.user.userName).subscribe((result: boolean) => {
      if (!result) {
        this.form.controls.userName.setErrors({ incorrect: true });
      } else {
        this.form.controls.userName.setErrors(null);
      }
      this.refresh();
      subscription.unsubscribe();
    });
  }

  checkEmail() {
    if (!this.user.email) {
      return;
    }
    const subscription = this.accountService.AuthCheckUserEmail(this.user.email).subscribe((result: boolean) => {
      if (!result) {
        this.form.controls.email.setErrors({ incorrect: true });
      } else {
        this.form.controls.email.setErrors(null);
      }
      this.refresh();
      subscription.unsubscribe();
    });
  }

  onCheckSmsCode() {
    if (this.smsCode === this.code) {
      this.isVerify = true;
    } else {
      this.form.controls.code.setErrors({ incorrect: true });
    }
    this.refresh();
  }

  public checkPassword() {
    if (this.user.password === this.user.confirmPassword) {
      this.form.controls.password.setErrors(null);
      this.form.controls.confirmPassword.setErrors(null);
    } else {
      this.form.controls.password.setErrors({ incorrect: true });
      this.form.controls.confirmPassword.setErrors({ incorrect: true });
    }
    this.refresh();
  }
  onSignUpClick() {
    this.accountService.AuthRegister(this.user).subscribe((user: UserResponse) => {
      this.redirectToLogin();
    });
  }
}
