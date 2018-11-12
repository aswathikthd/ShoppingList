import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Grilled Chicken','This is simply a grilled chicken','https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
    new Recipe('Breakfast Pizza','This is simply a pizza','https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_1280.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
