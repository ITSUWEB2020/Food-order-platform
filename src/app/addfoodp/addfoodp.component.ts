import { Component, OnInit } from '@angular/core';
import {Dish} from '../models/user.model';
import {DishService} from '../services/food.service';

@Component({
  selector: 'app-addfoodp',
  templateUrl: './addfoodp.component.html',
  styleUrls: ['./addfoodp.component.css']
})
export class AddfoodpComponent implements OnInit {

  public formSubmited: boolean;
  public dish: Dish;
  editedUser: Dish;
  users: Array<Dish>;
  isNewRecord: boolean;
  statusMessage: string;
  private editTemplate: any;
  private readOnlyTemplate: any;
  private serv: any;

  constructor(private service: DishService) {
    this.users = new Array<Dish>();
  }

  ngOnInit(): void {
    this.formSubmited = false;
    this.dish = {
      id: 1,
      description: '',
      name: '',
      price: 1
    };
    this.loadUsers();
  }


  private loadUsers() {
    this.serv.getUsers().subscribe((data: Dish[]) => {
      this.users = data;
    });
  }

  // добавление пользователя
  addUser() {
    this.editedUser = new Dish(0, '  ', ' ');
    this.users.push(this.editedUser);
    this.isNewRecord = true;
  }

  // редактирование пользователя
  editDish(user: Dish) {
    this.editedUser = new Dish(user.id, user.name, user.description);
  }

  // загружаем один из двух шаблонов
  loadTemplate(user: Dish) {
    if (this.editedUser && this.editedUser.id === user.id) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  // сохраняем пользователя
  saveUser() {
    if (this.isNewRecord) {
      // добавляем пользователя
      this.serv.createUser(this.editedUser).subscribe(data => {
        this.statusMessage = 'Данные успешно добавлены',
          this.loadUsers();
      });
      this.isNewRecord = false;
    }
    this.editedUser = null;
  }
  deleteUser(user: Dish) {
    this.serv.deleteUser(user.id).subscribe(data => {
      this.statusMessage = 'Данные успешно удалены',
        this.loadUsers();
    });
  }

}
