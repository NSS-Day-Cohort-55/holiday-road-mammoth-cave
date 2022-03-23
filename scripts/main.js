import { AttractionHtml } from "./attractions/AttractionDataManager.js";
import { ShowHome, ClearHome, ShowError } from "./pages/home.js";
import { ShowPlanner, ClearPlanner } from "./pages/planner.js";
import { ShowItenerary, ClearItenerary } from "./pages/Itenerary.js";
import { showWeather } from "./weather/WeatherDataManager.js";
import { loadEatery, eateryHtml, useEateries } from "./eateries/EateryDataManager.js";
import { getParks, showParks, showStates } from "./parks/ParkDataManager.js"
import {eateryDetail} from "./eateries/Eatery.js"
import { parkDetail } from "./parks/ParkDataManager.js";






const applicationElement = document.querySelector(".Holiday-Road");

ShowHome();

showStates();

applicationElement.addEventListener("click", (event) => {
  const selectedPark = document.querySelector(".parkSelector").value;
  if (event.target.className === "parkSelector") {
    let getParkID = document.getElementsByClassName("parkID")
    console.log(getParkID)
    return getParkID
  }
})


// Listen for a click on the eatery detail button
applicationElement.addEventListener("click", event => {
  // console.log(event)
  if (event.target.className.startsWith("eaterySelectBox")) {
    const boxSelector = document.querySelector(".eaterySelectBox").value
    // Find the eatery onject based on the selected value
    const singleEateryObject = useEateries().find(oneEateryObject => {
      if (parseInt(boxSelector) === oneEateryObject.id) {
        console.log(oneEateryObject)
        eateryDetail(oneEateryObject)
      }
    })
  }
})




applicationElement.addEventListener("click", event => {
  
  if (event.target.id === "Plan_Trip") {
      const selectedState = document.querySelector(".stateSelector").value.split("--");
        ClearHome();
        ShowPlanner(selectedState[1]);
        showParks(selectedState[0]);
        
        eateryHtml();
        AttractionHtml();
        showWeather(36.16784, -86.77816);
        window.scrollTo({
            top: 250,
            left: 0,
            behavior: "smooth",
        });
    }
});


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

