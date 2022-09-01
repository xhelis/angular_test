import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    });
  }

  createUser() {

    if (this.loginForm.invalid) {
      return;
    }
    Swal.fire({
      title: 'Wait a minute, please',
      didOpen: () => {
        Swal.showLoading();
      }
    });
    const { userName, email, password } = this.loginForm.value;
    this.authService.createUser(userName, email, password).then(credentials => {
      Swal.close();
      this.router.navigate(['/']);
    }).catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.message
      });
    });
  }

}
