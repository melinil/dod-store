import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email=''
  password=''
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      if(this.authService.login(this.email, this.password)){
        this.router.navigate(['/home'])
      }else{
        console.log("Error")
      }
    }
  }
}
