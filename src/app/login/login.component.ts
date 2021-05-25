import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {Login} from '../models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  invalidLogin = false;

  constructor(private router: Router,
              private loginservice: AuthenticationService) {
  }

  ngOnInit() {
  }

  autent() {
    (this.loginservice.authenticate(this.email, this.password).subscribe(
        data => {
          this.router.navigate(['/homepage']);
          this.invalidLogin = false;
        },
        error => {
          this.invalidLogin = true;

        }
      )
    );

  }
}
