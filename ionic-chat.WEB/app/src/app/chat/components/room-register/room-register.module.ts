import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomRegisterComponent } from './room-register.component';
import { RoomRegisterRoutingModule } from './room-register-routing.module';
import { RoomDashboardComponent } from './components/room-dashboard/room-dashboard.component';
import { RoomComponent } from './components/room/room.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    RoomRegisterComponent,
    RoomComponent,
    RoomDashboardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RoomRegisterRoutingModule
  ]
})
export class RoomRegisterModule { }
