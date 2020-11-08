import { ApplicationRef, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NavController } from '@ionic/angular';
import { BaseComponent } from 'src/app/shared/base.component';
import { RoomResponse } from 'src/swagger/models/room-response';
import { RoomService } from 'src/swagger/services';

@Component({
  selector: 'app-rooms-dashboard',
  templateUrl: './room-dashboard.component.html',
  styleUrls: ['./room-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RoomsDashboardComponent extends BaseComponent implements OnInit {

  public rooms: RoomResponse[];

  constructor(
    public keyboard: Keyboard, public AppR: ApplicationRef, public router: Router, public cd: ChangeDetectorRef,
    public roomService: RoomService, public navController: NavController
  ) {
    super(keyboard, AppR, router, navController);
    this.rooms = new Array<RoomResponse>();
  }

  ngOnInit() {
    this.getData();
  }

  public getData() {
    this.roomService.RoomGetUserRooms().subscribe((result: RoomResponse[]) => {
      this.rooms = result;
    });
  }

}
