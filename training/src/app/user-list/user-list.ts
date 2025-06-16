import { Component, OnInit, inject } from '@angular/core';
import { SharedData } from '../shared-data';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList implements OnInit {
  private sharedDataServive = inject(SharedData)
  newSharedData: any;
  ngOnInit(): void {
    this.sharedDataServive.sharedData.subscribe((data: any) => {
      console.log(data)
      this.newSharedData = data;
    })
  }

}
