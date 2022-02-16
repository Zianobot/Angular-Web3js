import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isConnected: boolean = false;
  address: string = 'avax1pyjf6zurg5lv3xtwau63a78fd2zna5yfdfhuv3'
  constructor() { }

  ngOnInit(): void {
  }
  connect() {
    this.isConnected = !this.isConnected;
  }
}
