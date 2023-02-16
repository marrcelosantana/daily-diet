import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getAllMeals } from "./getAllMeals";

export async function removeMeal(id: string) {
  try {
    const storage = await getAllMeals();

    const filtered = storage.filter((item) => item.id !== id);

    const meals = JSON.stringify(filtered);
    await AsyncStorage.setItem(MEAL_COLLECTION, meals);
  } catch (error) {
    throw error;
  }
}
