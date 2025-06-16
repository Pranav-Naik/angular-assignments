import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedData {
  userObject: User = {};
  private sharedDataSource: any = new BehaviorSubject (this.userObject);
  sharedData = this.sharedDataSource.asObservable();
  constructor() {
  }
  changeData(data: any) {
    this.sharedDataSource.next(data);
  }
}
