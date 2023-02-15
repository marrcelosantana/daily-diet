import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { Meal } from "@models/Meal";
import { getAllMeals } from "./getAllMeals";

export async function createMeal(newMeal: Meal) {
  try {
    const storageMeals = await getAllMeals();
    const storage = JSON.stringify([...storageMeals, newMeal]);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
