import { MEAL_COLLECTION } from "@storage/storageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealsGetAll } from "./mealsGetAll";
import { Meal } from "@models/Meal";

export async function mealCreate(newMeal: Meal) {
  try {
    const storageMeals = await mealsGetAll();
    const storage = JSON.stringify([...storageMeals, newMeal]);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
