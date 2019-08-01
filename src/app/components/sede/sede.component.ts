import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.scss'],
  providers: [UserService]
})
export class SedeComponent implements OnInit {
  public identity;
  constructor(private _userService: UserService) {     
    this.identity =  this._userService.getIdentity();
  }
  ngOnInit() {
  }


  
}
