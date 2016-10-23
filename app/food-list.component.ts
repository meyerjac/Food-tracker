import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <div *ngFor="let currentFood of childFoodList">
      <h3>{{ currentFood.name }}</h3>
      <li> {{ currentFood.details }}</li>
      <li> {{ currentFood.calories }}</li>
      <button class ="btn-sm btn-info"(click)="editButtonHasBeenClicked(currentFood)">Edit</button>
    </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit)
  }
}
