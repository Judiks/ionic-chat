import { ApplicationRef, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { } from '@ionic-native/contacts/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { BaseComponent } from 'src/app/shared/base.component';
import { ContactService } from 'src/swagger/services';

@Component({
  selector: 'app-rooms-contacts',
  templateUrl: './room-contacts.component.html',
  styleUrls: ['./room-contacts.component.scss'],
})
export class RoomsContactsComponent extends BaseComponent implements OnInit {

  constructor(
    public keyboard: Keyboard, public AppR: ApplicationRef, public router: Router, public cd: ChangeDetectorRef,
    private contactService: ContactService
  ) {
    super(keyboard, AppR, router, cd);
  }

  ngOnInit() {

  }

}
