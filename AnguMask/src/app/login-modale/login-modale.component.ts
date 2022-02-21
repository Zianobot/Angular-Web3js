import { LoginService } from './../services/login.service';
import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
//import { DOCUMENT } from '@angular/common';


declare const window: any;


@Component({
  selector: 'app-login-modale',
  templateUrl: './login-modale.component.html',
  styleUrls: ['./login-modale.component.css']
})
export class LoginModaleComponent implements OnInit {
  //dichiaro una variabile booleana che torna true se Metamask è installato
  metamaskInstalled: boolean = window.ethereum;

  constructor(private address: LoginService
    //, @Inject(DOCUMENT) private document: Document
    ) { }

  ngOnInit(): void {
  }

  async loginWithMetamask() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    .catch( (e:any) => {
         console.error(e.messagge);
         return;
    })
    if(!accounts) { return; }
    
    this.address.userAddress.next(accounts[0]);
    this.address.isUserLoggedIn.next(true);
  }

  goToMetamaskUrl(): void {
    //this.document.location.href = 'https://metamask.io/download/'; 
    window.open("https://metamask.io/download/");
  }

}

