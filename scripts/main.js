import { AttractionHtml } from "./attractions/AttractionDataManager.js";
import { ShowHome, ClearHome, ShowError  } from "./pages/home.js";
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
showStates()




applicationElement.addEventListener("click", event => {
    const selectedState = document.querySelector(".stateSelector").value;
    if (selectedState === "Select a State" && event.target.id === "Plan_Trip"){
      ShowError()
    }
    else if (event.target.id === "Plan_Trip"){
    ClearHome()
    ShowPlanner(selectedState)
    showParks(selectedState)
    loadEatery()
    AttractionHtml()
    showWeather(36.16784, -86.77816)
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
    AttractionHtml()
    showWeather(36.16784, -86.77816)
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

