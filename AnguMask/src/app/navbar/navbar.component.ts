import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  addressConnected: string = '';
  isConnected: boolean = false;

  constructor(private shared:LoginService) {
    
        // Subscribe here, this will automatically update 
        // "isUserLoggedIn" whenever a change to the subject is made.
    this.shared.isUserLoggedIn.subscribe( value => {
      this.isConnected = value;
    }),
    this.shared.userAddress.subscribe( value => {
      this.addressConnected = value;
    })
   }

  ngOnInit(): void {
  
  }
  
}


