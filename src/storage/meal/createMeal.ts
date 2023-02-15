import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";

import { MealsByDate } from "@models/MealsByDate";
import { Meal } from "@models/Meal";

import { formatDate } from "@utils/formatDate";
import { getAllMeals } from "./getAllMeals";

export async function createMeal(newMeal: Meal) {
  try {
    const storage = await getAllMeals();

    const mealByDate = storage.find(
      (data) => data.title === formatDate(newMeal.date, "date")
    );

    if (mealByDate) {
      mealByDate.meals = [...mealByDate.meals, newMeal];
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storage));
    } else {
      const newData: MealsByDate = {
        title: formatDate(newMeal.date, "date"),
        meals: [newMeal],
      };

      const updatedData = [...storage, newData];
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedData));
    }
  } catch (error) {
    throw error;
  }
}
