import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
      <h1>FoodTracker</h1>
      <h3 (click)="doSomething(currentFood)" *ngFor="let currentFood of foods">{{ currentFood.name }}</h3>
    </div>
  `
})

export class AppComponent {
  public foods: Food[] =  [
    new Food("burger", "it was a double-double", 750),
    new Food("eggs", "microwaved hot eggs", 250),
    new Food("salad", "crispy and low cal", 100),
    new Food("bagel", "pest and ham", 200),
  ];
  doSomething(clickedFood: Food) {
    if (clickedFood.calories >= 225) {
      alert("this is a high colorie food")
    } else {
      alert("this is a low calorie food!")
    }
  }
}

  export class Food {
    constructor(public name: string, public details: string, public calories: number) { }
  }
