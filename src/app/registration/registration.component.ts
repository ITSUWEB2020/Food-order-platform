import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';
import { UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public user: User;
  loading = false;
  statusMessage: string;
  public  formSubmited: boolean;
  constructor(  private router: Router,
                private userService: UserService,
                private http: HttpClient,
         ) { }

  ngOnInit() {
    this.formSubmited = false;
    this.user = {
      username: '',
      email: '',
      phone: '+',
      password: '',
      balance: 0,
      role: 'CUSTOMER'
    };
  }
   registration(){
     this.loading = true;
     this.userService.create(this.user)
       .subscribe(
         data => {
           this.statusMessage = 'Registration successful';
           this.router.navigate(['/login']);
         },
         error => {
           this.statusMessage = 'error';
           this.loading = false;
         });
   }
}
