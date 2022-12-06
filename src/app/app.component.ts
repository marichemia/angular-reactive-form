import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;

  constructor(private fb: FormBuilder) {

  }
  userInfo = this.fb.group({
    firstName: ['', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(15)
    ]],
    lastName: ['', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(15)
    ]],
    phoneNumber: ['', [
      Validators.required,
      Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
    ]],
    email: ['', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    ]],
    github: ['', [
      Validators.required,
      Validators.pattern('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})')
    ]],
    workExperience: this.fb.array([
      this.fb.control('')
    ])
  });

  onSubmit() {
    console.log(this.userInfo.value)
    this.userInfo.reset();
  }

  get workExperience() {
    return this.userInfo.get('workExperience') as FormArray;
  }
  addWorkExperience() {
    this.workExperience.push(this.fb.control(''));
  }
  removeWorkExperience(i: number) {
    this.workExperience.removeAt(i);
  }
}
