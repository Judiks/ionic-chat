import { Component, OnInit } from '@angular/core';
import { RoomRequest } from 'src/swagger/models';
import { RoomService } from 'src/swagger/services';

@Component({
  selector: 'app-room-creating',
  templateUrl: './room-creating.component.html',
  styleUrls: ['./room-creating.component.scss'],
})
export class RoomCreatingComponent implements OnInit {

  public roomRequest: RoomRequest;
  constructor(private roomService: RoomService) {
    this.roomRequest = {} as RoomRequest;
   }

  ngOnInit() {}

}
