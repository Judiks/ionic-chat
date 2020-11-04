import { ApplicationRef, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { } from '@ionic-native/contacts/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NavController } from '@ionic/angular';
import { BaseComponent } from 'src/app/shared/base.component';
import { ContactResponse } from 'src/swagger/models';
import { ContactService } from 'src/swagger/services';

@Component({
  selector: 'app-rooms-contacts',
  templateUrl: './room-contacts.component.html',
  styleUrls: ['./room-contacts.component.scss'],
})
export class RoomContactsComponent extends BaseComponent implements OnInit {

  public contacts: ContactResponse[];
  constructor(
    public keyboard: Keyboard, public AppR: ApplicationRef, public router: Router, public cd: ChangeDetectorRef,
    private contactService: ContactService, public navController: NavController
  ) {
    super(keyboard, AppR, router, cd, navController);
    this.contacts = new Array<ContactResponse>();
  }

  ngOnInit() {

  }

}
