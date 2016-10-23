import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class = "row">
    <div class = "col-sm-3">
      <div class="container">
        <h1>Food-tracker</h1>
        <food-list
          [childFoodList]="masterFoodList"
          (clickSender)="showDetails($event)"
         ></food-list>
        </div>
      </div>
      <div class = "col-sm-3">
        <div class="container">
          <edit-food
            [childSelectedFood]="selectedFood"
            (doneClickedSender)="finishedEditing()"
          ></edit-food><br>
          </div>
          <div class="container">
          <new-food
            (newFoodSender)= "addFood($event)"
          ></new-food>
          </div>
        </div>
  </div>
  `
})

export class AppComponent {
  public masterFoodList: Food[] =  [
    new Food("burger", "it was a double-double", 750),
    new Food("eggs", "microwaved hot eggs", 250),
    new Food("salad", "crispy and low cal", 100),
    new Food("bagel", "pest and ham", 200),
  ];
  selectedFood: Food = null;
  showDetails(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }
  finishedEditing() {
    this.selectedFood = null;
  }
  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }
}
