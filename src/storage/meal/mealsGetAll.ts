import { MealsByDate } from "@models/MealsByDate";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const data: MealsByDate[] = storage ? JSON.parse(storage) : [];
    return data;
  } catch (error) {
    throw error;
  }
}
