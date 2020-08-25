import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/base.component';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-register-code',
  templateUrl: './register-code.component.html',
  styleUrls: ['./register-code.component.scss'],
})
export class RegisterCodeComponent extends BaseComponent {

  @Input() code: string;
  @Output() isVerify: EventEmitter<boolean>;
  public form: FormGroup;
  public smsCode: string;

  constructor(public keyboard: Keyboard) {
    super(keyboard);
    this.isVerify = new EventEmitter();
    this.form = new FormGroup({
      code: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.minLength(6)
      ]),
    });
  }

  onCheckSmsCode() {
    if (this.code === this.smsCode) {
      this.isVerify.emit(true);
    }
  }

  getMessage() {

  }
}
