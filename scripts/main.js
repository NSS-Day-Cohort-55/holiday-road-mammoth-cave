import { AttractionHtml } from "./attractions/AttractionDataManager.js";
<<<<<<< HEAD
import { ShowHome, ClearHome, ShowError  } from "./pages/home.js";
=======
import { ShowHome, ClearHome } from "./pages/home.js";
>>>>>>> main
import { ShowPlanner, ClearPlanner } from "./pages/planner.js";
import { ShowItenerary, ClearItenerary } from "./pages/Itenerary.js";
import { showWeather } from "./weather/WeatherDataManager.js";
import { loadEatery, eateryHtml } from "./eateries/EateryDataManager.js";
import { getParks, showParks, showStates } from "./parks/ParkDataManager.js";


const applicationElement = document.querySelector(".Holiday-Road");

ShowHome();
showWeather(36.16784, -86.77816);
showStates();

<<<<<<< HEAD
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
    // const selectedPark = document.querySelector(".parkSelector").value;
	if (event.target.id === "Plan_Trip"){
        ClearHome()
        ShowPlanner(selectedState)
        showParks(selectedState)
        eateryHtml()
    AttractionHtml()
    showWeather(36.16784, -86.77816)
    window.scrollTo({
        top: 250,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
})
=======
applicationElement.addEventListener("click", (event)=> {
    const selectedPark = document.querySelector(".parkSelector").value;
    if (event.target.className === "parkSelector"){
       let getParkID= document.getElementsByClassName("parkID")
        console.log(getParkID)
        return getParkID
    }
})

applicationElement.addEventListener("click", (event) => {
    const selectedState = document.querySelector(".stateSelector").value;
    if (event.target.id === "Plan_Trip") {
        ClearHome();
        ShowPlanner(selectedState);
        showParks(selectedState);
        
        eateryHtml();
        AttractionHtml();
        window.scrollTo({
            top: 250,
            left: 0,
            behavior: "smooth",
        });
    }
});
>>>>>>> main



applicationElement.addEventListener("click", (event) => {
  if (event.target.id === "Planner_Iteneraries") {
    ClearPlanner();
    ShowItenerary();
    window.scrollTo({
      top: 250,
      left: 0,
      behavior: "smooth",
    });
  }
});

applicationElement.addEventListener("click", (event) => {
  if (event.target.id === "Iteneraries_New") {
    ClearItenerary();
    ShowPlanner();
    showParks();
    eateryHtml();
    AttractionHtml();
    window.scrollTo({
      top: 250,
      left: 0,
      behavior: "smooth",
    });
  }
});

applicationElement.addEventListener("click", (event) => {
  if (event.target.id === "Iteneraries_Reset") {
    ClearItenerary();
    ShowHome();
    showStates();
    window.scrollTo({
      top: 250,
      left: 0,
      behavior: "smooth",
    });
  }
});

applicationElement.addEventListener("click", (event) => {
  if (event.target.id === "Planner_State") {
    ClearPlanner();
    ShowHome();
    showStates();
    window.scrollTo({
      top: 250,
      left: 0,
      behavior: "smooth",
    });
  }
});
