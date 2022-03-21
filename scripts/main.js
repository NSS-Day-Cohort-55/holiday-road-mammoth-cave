import { ShowHome, ClearHome  } from "./pages/home.js";
import { ShowPlanner, ClearPlanner } from "./pages/planner.js";
import { ShowItenerary, ClearItenerary } from "./pages/Itenerary.js";
import { showWeather } from "./weather/WeatherDataManager.js";
import { makeEateryList } from "./eateries/EateryList.js";
import { loadEatery } from "./eateries/EateryDataManager.js";
import { getParks, showParks, showStates } from "./parks/ParkDataManager.js"

const showEateryList = () => {
    loadEatery()
    .then(eateryArray =>{
        console.log("Eatery Array", eateryArray)

        makeEateryList(eateryArray)
    })
}

showEateryList()


const applicationElement = document.querySelector(".Holiday-Road");

ShowHome()
showWeather(36.16784, -86.77816)
showStates()


applicationElement.addEventListener("click", event => {
	if (event.target.id === "Plan_Trip"){
    ClearHome()
    ShowPlanner()
    showParks()
    loadEatery()
    window.scrollTo({
        top: 250,
        left: 0,
        behavior: 'smooth'
      });
    }
})

applicationElement.addEventListener("click", event => {
	if (event.target.id === "Planner_Iteneraries"){
    ClearPlanner()
    ShowItenerary()
    window.scrollTo({
        top: 250,
        left: 0,
        behavior: 'smooth'
      });
    }
})

applicationElement.addEventListener("click", event => {
	if (event.target.id === "Iteneraries_New"){
    ClearItenerary()
    ShowPlanner()
    showParks()
    loadEatery()
    window.scrollTo({
        top: 250,
        left: 0,
        behavior: 'smooth'
      });
    }
})

applicationElement.addEventListener("click", event => {
	if (event.target.id === "Iteneraries_Reset"){
    ClearItenerary()
    ShowHome()
    showStates()
    window.scrollTo({
        top: 250,
        left: 0,
        behavior: 'smooth'
      });
    }
})

applicationElement.addEventListener("click", event => {
	if (event.target.id === "Planner_State"){
    ClearPlanner()
    ShowHome()
    showStates()
    window.scrollTo({
        top: 250,
        left: 0,
        behavior: 'smooth'
      });
    }
})

