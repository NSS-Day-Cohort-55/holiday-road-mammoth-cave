import { ShowHome, ClearHome  } from "./pages/home.js";
import { ShowPlanner, ClearPlanner } from "./pages/planner.js";
import { ShowItenerary, ClearItenerary } from "./pages/Itenerary.js";


const applicationElement = document.querySelector(".Holiday-Road");

ShowHome()

applicationElement.addEventListener("click", event => {
	if (event.target.id === "Plan_Trip"){
    ClearHome()
    ShowPlanner()
    window.scrollTo(0, 250);
	}
})

applicationElement.addEventListener("click", event => {
	if (event.target.id === "Planner_Iteneraries"){
    ClearPlanner()
    ShowItenerary()
    window.scrollTo(0, 250);
	}
})

applicationElement.addEventListener("click", event => {
	if (event.target.id === "Iteneraries_New"){
    ClearItenerary()
    ShowPlanner()
    window.scrollTo(0, 250);
	}
})

applicationElement.addEventListener("click", event => {
	if (event.target.id === "Iteneraries_Reset"){
    ClearItenerary()
    ShowHome()
    window.scrollTo(0, 250);
	}
})

applicationElement.addEventListener("click", event => {
	if (event.target.id === "Planner_State"){
    ClearPlanner()
    ShowHome()
    window.scrollTo(0, 250);
	}
})

