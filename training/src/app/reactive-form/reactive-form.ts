import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../user';
import { SharedData } from '../shared-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss'
})
export class ReactiveForm {
  userObject: User = {};

 reactiveFrom: FormGroup;
 private sharedDataService = inject(SharedData)
 constructor(private router : Router) {
  this.reactiveFrom = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      isChecked: new FormControl(),
      mobileNumber: new FormControl('')
  });
 }
  onSubmit() {
    console.log(this.reactiveFrom.value);
    this.reactiveFrom.patchValue({isChecked: false});
    this.sharedDataService.changeData(this.reactiveFrom.value);
    this.router.navigate(['user-list']);
  }
}
