import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { KeyboardHelper } from 'src/app/shared/helpers/keyboard.helper';

@Component({
  selector: 'app-register-code',
  templateUrl: './register-code.component.html',
  styleUrls: ['./register-code.component.scss'],
})
export class RegisterCodeComponent implements OnDestroy {

  @Input() code: string;
  @Output() isVerify: EventEmitter<boolean>;
  public form: FormGroup;
  public keyboardHelper = KeyboardHelper;
  public smsCode: string;

  constructor() {
    this.isVerify = new EventEmitter();
    this.form = new FormGroup({
      code: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.minLength(6)
      ]),
    });
    this.keyboardHelper.BeginListen();
  }

  onCheckSmsCode() {
    if (this.code === this.smsCode) {
      this.isVerify.emit(true);
    }
  }

  getMessage() {

  }

  ngOnDestroy(): void {
    this.keyboardHelper.EndListener();
  }
}
