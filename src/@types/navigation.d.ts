import { Diet } from "@models/MealsByDate";
import { Meal } from "@models/Meal";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: { meals: Meal[] };
      register: undefined;
      feedback: { type: Diet };
      details: { meal: Meal };
      update: { meal: Meal };
    }
  }
}
