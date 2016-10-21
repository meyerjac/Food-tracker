import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Food tracker</h1>
    <div *ngFor="let currentFood of foods">
      <h2>{{ currentFood.name }}</h2>
      <h3>details: {{ currentFood.details }}</h3>
      <h3>calories: {{ currentFood.calories }}</h3><br>
      <button (click)="showDetails(currentFood)">Edit</button>
    </div>
      <div *ngIf="selectedFood">
        <div class = "foodDescription">
        <h1>Edit Food</h1>
        <label>Enter Food Description:</label>
        <input [(ngModel)]="selectedFood.details">
      </div>
      <div>
        <label>Enter calories:</label>
        <input [(ngModel)]="selectedFood.calories">
      </div>
      <div>
        <label>Enter Food ID:</label>
        <input [(ngModel)]="selectedFood.calories">
        <button class = "btn-success" (click)="finishedEditing()">Done</button>
      </div>
    </div>
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
  selectedFood: Food = this.foods[null];
  showDetails(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }

  finishedEditing() {
    this.selectedFood = null
  }
}

export class Food {
  constructor(public name: string, public details: string, public calories: number) { }
}
