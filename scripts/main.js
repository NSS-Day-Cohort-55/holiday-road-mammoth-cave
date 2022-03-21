import { useStoredEateries, fetchEateries  } from "./eateries/EateryDataManager.js";
import { makeEateryList } from "./eateries/EateryList.js";

makeEateryList()
useStoredEateries()
fetchEateries()