import { Component, ViewEncapsulation, OnInit, ApplicationRef, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NavController } from '@ionic/angular';
import { BaseComponent } from 'src/app/shared/base.component';
import { AuthHelper } from 'src/app/shared/helpers/auth.helper';
import { RoomHelper } from 'src/app/shared/helpers/room.helper';
import { RoomResponse, GetRoomDataRequest } from 'src/swagger/models';
import { RoomService } from 'src/swagger/services';


@Component({
  selector: 'app-rooms-dashboard',
  templateUrl: './room-dashboard.component.html',
  styleUrls: ['./room-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RoomsDashboardComponent extends BaseComponent {

  public rooms: RoomResponse[];

  constructor(
    public keyboard: Keyboard, public AppR: ApplicationRef, public router: Router, public cd: ChangeDetectorRef,
    public roomService: RoomService, public navController: NavController, public authHelper: AuthHelper, private roomHelper: RoomHelper
  ) {
    super(keyboard, AppR, router, navController);
    this.rooms = new Array<RoomResponse>();
  }

  ionViewWillEnter() {
    this.rooms = new Array<RoomResponse>();
    this.getRoomsData(null);
  }

  public getRoomsData(event) {
    const request = {
      skipCount: this.rooms.length,
      userId: this.authHelper.getUser().id
    } as GetRoomDataRequest;

    this.roomService.RoomGetUserRooms(request).subscribe((result: RoomResponse[]) => {
      console.log(result);
      this.rooms = [...this.rooms, ...result];
      this.rooms.forEach(x => {
        this.colors.push(this.getRandomColor());
      });
      if (event) {
        event.target.complete();
      }
    }, err => {
      console.log(err);
    });
  }

  public joinRoom(room: RoomResponse) {
    this.roomHelper.setRoom(room);
    this.redirectToRoom();
  }

}
