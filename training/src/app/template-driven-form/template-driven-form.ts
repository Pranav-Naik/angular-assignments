import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { SharedData } from '../shared-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-driven-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.scss'
})
export class TemplateDrivenForm {
  userObject: User = {};
private sharedDataService = inject(SharedData)
constructor(private router: Router) {}
  onSubmit() {
    console.log(this.userObject);
    this.sharedDataService.changeData(this.userObject);
    this.router.navigate(['user-list']);
  }
}
