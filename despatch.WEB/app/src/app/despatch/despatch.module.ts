import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
import { IonicModule } from '@ionic/angular';
import { DownloadApkComponent } from './componnents/download-apk/download-apk.component';
import { DespatchRoutingModule } from './despatch-routing.module';
import { DespatchComponent } from './despatch.component';


@NgModule({
  declarations: [
    DespatchComponent,
    DownloadApkComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    DespatchRoutingModule,
  ],
  providers: [
    Device
  ]
})
export class DespatchModule { }
