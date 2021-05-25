import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '../models/user.model';
import {Observable} from 'rxjs';


@Injectable()


export class UserService {
  private url = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>('/api/users');
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id);
  }

  create(user: User): Observable<any>  {
    return this.http.post(this.url + '/registration', user);
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id);

  }

}
export class DishService{
  }
