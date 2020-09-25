import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
  ]
})
export class AccountModule {
}
