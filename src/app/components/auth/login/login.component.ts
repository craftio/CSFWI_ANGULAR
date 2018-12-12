import { Component, OnInit } from '@angular/core';
import {EmailValidator, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // EmailValidator(/^.+@.+\..+$/i)
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  ngOnSubmit() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.authService.login(email, password);
  }
}
