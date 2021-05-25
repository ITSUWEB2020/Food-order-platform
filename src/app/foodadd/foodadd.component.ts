import { Component, OnInit } from '@angular/core';
import {Dish} from '../models/user.model';
import {DishService} from '../services/food.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-foodadd',
  templateUrl: './foodadd.component.html',
  styleUrls: ['./foodadd.component.css']
})
export class FoodaddComponent implements OnInit {
  ngOnInit(): void {
  }


}
