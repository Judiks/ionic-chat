import { Component, OnInit } from '@angular/core';
import { AuthHelper } from 'src/app/shared/helpers/auth.helper';
import { RoomHelper } from 'src/app/shared/helpers/room.helper';
import { GetRoomContactsRequest, GetRoomContactsResponse, RoomResponse, SendConfirmSMSRequest, SendInvitationSmsRequest } from 'src/swagger/models';
import { AuthService, RoomService } from 'src/swagger/services';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent {
  public isActiveRoom: boolean;
  public isAutoGrow: boolean;
  public room: RoomResponse;
  constructor(public roomHelper: RoomHelper, public authService: AuthService,
              public roomService: RoomService) {
    this.room = {} as RoomResponse;
    this.isAutoGrow = true;
    this.isActiveRoom = false;
  }

  ionViewWillEnter() {
    this.initData();
  }

  private initData() {
    const result = this.roomHelper.getRoom();
    this.room = JSON.parse(JSON.stringify(result)) as RoomResponse;
    const request: GetRoomContactsRequest = {
      roomId: this.room.id
    };
    this.roomService.RoomGetRoomContacts(request).subscribe((response: GetRoomContactsResponse) => {
      this.room.contacts = response.contacts;
    });

  }

  public checkCols(event): void {
    if (event.target.clientHeight > 130) {
      this.isAutoGrow = false;
    }
  }

  public getTextareaPlaceholder(): string {
    if (this.isActiveRoom) {
      return 'Message';
    } else {
      return 'User is inactive';
    }
  }

  public sendInvitationSMS() {
    const request: SendInvitationSmsRequest = {
      contactId: this.room.contacts[0].id
    };
    this.authService.AuthSendInvitationSMS(request).subscribe();
  }
}
