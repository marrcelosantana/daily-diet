import AsyncStorage from "@react-native-async-storage/async-storage";

export async function clearStorage() {
  try {
    return await AsyncStorage.clear();
  } catch (error) {
    throw error;
  }
}
