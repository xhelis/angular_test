import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    UserName: new FormControl(),
    emailv: new FormControl(),
    Password: new FormControl()
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  createUser() {

    if (this.loginForm.invalid) {
      return;
    }

    const { userName, email, password } = this.loginForm.value;
    console.log('==============createUser======================================================');
    console.log(this.loginForm);
    console.log(this.loginForm.valid);
    console.log(this.loginForm.value);
    console.log('====================================================================');
    this.authService.createUser(userName, email, password).then(credentials => {
      console.log('===================credentials=================================================');
      console.log(credentials);
      console.log('====================================================================');
      this.router.navigate(['/']);
    }).catch(err => {
      console.log('===========err=========================================================');
      console.log(err);
      console.log('====================================================================');
    })


  }

}
