import { Component, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { KeyboardHelper } from 'src/app/shared/helpers/keyboard.helper';
import { PipeHelper } from 'src/app/shared/helpers/pipe-helper';
import { SendConfirmSMSRequest, UserRequest } from 'src/swagger/models';
import { Platform } from '@ionic/angular';

declare let cordova: any;

@Component({
  selector: 'app-register-phone',
  templateUrl: './register-phone.component.html',
  styleUrls: ['./register-phone.component.scss'],
})
export class RegisterPhoneComponent implements OnDestroy {

  @Output() changedPhone: EventEmitter<SendConfirmSMSRequest>;
  public form: FormGroup;
  public keyboardHelper = KeyboardHelper;
  public pipeHelper = PipeHelper;
  public sendSmsModel: SendConfirmSMSRequest;
  public code: string;
  public phoneNumber: string;
  constructor(platform: Platform) {
    this.changedPhone = new EventEmitter();
    this.sendSmsModel = {
      phoneNumber: ''
    } as UserRequest;

    this.form = new FormGroup({
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[+][0-9]{3} [0-9]{2} [0-9]{3} [0-9]{4}.|[+][0-9]{3} [0-9]{2} [0-9]{3} [0-9]{4}')
      ]),
    });
    this.keyboardHelper.BeginListen();
    platform.ready().then(() => {
    cordova.plugins.PhoneData.getData((result: string) => {
      this.sendSmsModel.phoneNumber = PipeHelper.phoneMask(result, '');
    }, err => {
      console.log(err);
    });
  });
  }

  onNextStepClick() {
    this.changedPhone.emit(this.sendSmsModel);
  }

  ngOnDestroy(): void {
    this.keyboardHelper.EndListener();
  }
}
