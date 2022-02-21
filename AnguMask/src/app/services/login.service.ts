import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  ///userAddress: string = '';
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public userAddress: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
   }

/** 
  setAddress(data: BehaviorSubject<string>) {
    this.userAddress = data; 
  }

  getAddress() {
    return this.userAddress;
  }
*/

}
