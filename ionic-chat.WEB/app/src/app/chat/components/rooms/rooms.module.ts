import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomRegisterComponent } from './rooms.component';
import { RoomRegisterRoutingModule } from './rooms-routing.module';
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
    IonicModule.forRoot(),
    RoomRegisterRoutingModule
  ]
})
export class RoomRegisterModule { }
