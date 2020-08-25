import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SendConfirmSMSRequest } from 'src/swagger/models';
import { AccountService } from 'src/swagger/services';
import { BaseComponent } from 'src/app/shared/base.component';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-register-password',
  templateUrl: './register-password.component.html',
  styleUrls: ['./register-password.component.scss'],
})
export class RegisterPasswordComponent extends BaseComponent {

  public form: FormGroup;
  public sendSmsModel: SendConfirmSMSRequest;


  constructor(private accountService: AccountService, public keyboard: Keyboard) {
    super(keyboard);
    this.form = new FormGroup({
      password: new FormControl('', [
        Validators.required,
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
      ]),
    });

  }


  onNextStepClick() {

  }

}
