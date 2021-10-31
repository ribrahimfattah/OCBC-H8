import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-login-reactive-form',
  templateUrl: './login-reactive-form.component.html',
  styleUrls: ['./login-reactive-form.component.css']
})
export class LoginReactiveFormComponent implements OnInit {

  // constructor() { }

  loginData = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('[a-zA-Z0-9 ]*'),
      CustomValidators.patterValidatorNumeric(),
      CustomValidators.patterValidatorUpperCase(),
      CustomValidators.patterValidatorLowerCase(),
      CustomValidators.patterValidatorSymbol(),
      // CustomValidators.patternValidator(/\d/, { hasNumber: true }),
      // CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
      // CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
      // CustomValidators.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, { hasSpecialCharacters: true })
    ])
  })

  errors = []
  isSubmitted = false

  get username() {
    return this.loginData.get('username')
  }

  get password() {
    return this.loginData.get('password')
  }

  // validateForm() {
  //   if (this.username?.errors) {

  //   }
  // }

  handleLoginForm() {
    if (!this.username?.errors && !this.password?.errors) {
      alert("Welcome!")
    }
    this.isSubmitted = true
    // this.validateForm()
    // console.log(this.loginData.get('username'))
    // console.log(this.loginData.get('password'))
  }

  handleIsSubmittedState() {
    if (this.isSubmitted === true) {
      this.isSubmitted = false
    }
    console.log(this.isSubmitted)
  }

  ngOnInit(): void {
  }
}
