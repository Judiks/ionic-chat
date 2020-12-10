import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/swagger/services/auth.service';
import { RoomDto } from '../dto/room.dto';

@Injectable({
    providedIn: 'root'
})
export class RoomHelper {
    private currentUser: BehaviorSubject<RoomDto>;
    public user: Observable<RoomDto>;

    constructor(public authService: AuthService, private router: Router) {
        this.currentUser = new BehaviorSubject<RoomDto>(JSON.parse(localStorage.getItem('current-room')));
        this.user = this.currentUser.asObservable();
    }

    public setRoom(model: RoomDto) {
        localStorage.setItem('current-room', JSON.stringify(model));
        this.currentUser.next(model);
    }


    public getRoom(): RoomDto {
        return this.currentUser.value;
    }
}

