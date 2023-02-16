import { Meal } from "@models/Meal";

export function calcSequence(meals: Meal[]) {
  let sequence = 0;
  let bestSequence = 0;

  meals.map((meal) => {
    if (meal.status === "inTheDiet") {
      sequence += 1;
    } else {
      sequence = 0;
    }

    if (sequence > bestSequence) {
      bestSequence = sequence;
    }
  });

  return bestSequence;
}
