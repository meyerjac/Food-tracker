import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';

@Pipe({
  name: "calories",
  pure: false
})
export class CaloriesPipe implements PipeTransform {
  transform(input: Food[], calorieCount) {
    var output: Food[] = [];
    if(calorieCount === "all") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].calories >= 0) {
        output.push(input[i]);
      }
    }
    return output;
  } else if (calorieCount === "low") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].calories < 300) {
        output.push(input[i]);
      }
    }
      return output;
  } else if (calorieCount === "high") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].calories >= 300) {
      output.push(input[i]);
    }
  }
    return output;
} else {
      return output;
  }
}
}
