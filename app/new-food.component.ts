import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <h1>New Task</h1>
  <div>
    <label>Enter Food Name:</label>
    <input #newName>
  </div>
   <div>
     <label>Enter Food Details:</label>
     <input #newDetails>
   </div>
   <div>
     <label>Enter food Calories:</label>
     <input #newCalories>
     <button class ="btn-sm btn-info" click = "addClicked(newName.value, newDetails.value, newCalories.value); newName.value='';
     newdetails.value=''; newCalories.value='';
     ">Add!</button>
   </div>
  `
})

export class NewFooderComponent {
  @Output() newFoodSender = new EventEmitter();
  addClicked(name: string, details: string, calories: number) {
    var newFoodToAdd: Food = new Food(name, details, calories);
      this.newFoodSender.emit(newFoodToAdd);
  }
}
