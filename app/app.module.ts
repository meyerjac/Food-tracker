import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NewFoodComponent } from './new-food.component';
import { AppComponent }   from './app.component';
import { FoodListComponent } from './food-list.component';
import { EditFoodComponent } from './edit-food.component';
import { CaloriesPipe } from './calories.pipe';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FoodListComponent,
    EditFoodComponent,
    NewFoodComponent,
    CaloriesPipe,
    ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
