import { Diet } from "@models/MealsByDate";
import { Meal } from "@models/Meal";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: { meals: Meal[]; dietStatus: string };
      register: undefined;
      feedback: { status: string };
      details: { meal: Meal; status: string };
      update: { meal: Meal };
    }
  }
}
