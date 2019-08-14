import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  vf: FormGroup;
  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router, private fb: FormBuilder) {
    this.vf = fb.group({
      emailFormEx: [this.credentials.email, [Validators.required, Validators.email]],
      passwordFormEx: [this.credentials.password, [Validators.required,Validators.minLength(8)]]
    });
  
  }

  // login() {
  //   this.auth.login(this.credentials).subscribe(() => {
  //     this.router.navigateByUrl('/add-faculty');
  //   }, (err) => {
  //     console.error(err);
  //   }); 
  // }
}
