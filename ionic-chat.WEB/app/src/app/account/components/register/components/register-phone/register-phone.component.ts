import { Component, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PipeHelper } from 'src/app/shared/helpers/pipe-helper';
import { SendConfirmSMSRequest, UserRequest } from 'src/swagger/models';
import { Platform } from '@ionic/angular';
import { BaseComponent } from 'src/app/shared/base.component';
import { Keyboard } from '@ionic-native/keyboard/ngx';

declare let cordova: any;

@Component({
  selector: 'app-register-phone',
  templateUrl: './register-phone.component.html',
  styleUrls: ['./register-phone.component.scss'],
})
export class RegisterPhoneComponent extends BaseComponent {

  @Output() changedPhone: EventEmitter<SendConfirmSMSRequest>;
  public form: FormGroup;
  public pipeHelper = PipeHelper;
  public sendSmsModel: SendConfirmSMSRequest;
  public code: string;
  public phoneNumber: string;

  constructor(private platform: Platform, public keyboard: Keyboard) {
    super(keyboard);
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

}
