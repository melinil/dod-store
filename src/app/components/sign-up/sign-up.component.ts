import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  signupForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      //с трети параметър може да се добави къстъм валидатор http://medium.com/@mubeennaeem247/custom-directive-for-email-validation-in-angular-182fe6294640
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    })
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('User Data: ', this.signupForm.value)
    }
  }
}
