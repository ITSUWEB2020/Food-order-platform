import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Dish} from '../models/user.model';


@Injectable()
export class DishService{

  private url = '/';
  constructor(private http: HttpClient){ }

  getDish(){
    return this.http.get(this.url);
  }

  createDish(dish: Dish){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url, JSON.stringify(dish), {headers: myHeaders});
  }
  deleteDish(id: number){
    return this.http.delete(this.url + '/' + id);
  }
}
