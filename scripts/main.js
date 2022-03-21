import { AttractionHtml } from "./attractions/AttractionDataManager.js";
import { ShowHome, ClearHome  } from "./pages/home.js";
import { ShowPlanner, ClearPlanner } from "./pages/planner.js";
import { ShowItenerary, ClearItenerary } from "./pages/Itenerary.js";
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
	if (event.target.id === "Plan_Trip"){
    ClearHome()
    ShowPlanner()
    AttractionHtml()
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
    window.scrollTo({
        top: 250,
        left: 0,
        behavior: 'smooth'
      });
    }
})

