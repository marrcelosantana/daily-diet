import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { Meal } from "@models/Meal";

export async function getOneMeal(id: string) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals: Meal[] = storage ? JSON.parse(storage) : [];
    const meal = meals.find((meal) => meal.id === id);
    return meal;
  } catch (error) {
    throw error;
  }
}
