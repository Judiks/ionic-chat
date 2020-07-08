import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export let InjectorInstance: Injector;

@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    AccountRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
  ]
})
export class AccountModule {
  constructor(private injector: Injector) {
    InjectorInstance = this.injector;
  }
 }
