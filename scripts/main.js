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

applicationElement.addEventListener("click", (event)=> {
  if (event.target.className === "parkSelector"){
       const selectedPark = document.querySelector(".parkSelector").value;
       let getParkID= document.getElementsByClassName("parkID")
        console.log(getParkID)
        return getParkID
    }
})


// Listen for a click on the eatery detail button
applicationElement.addEventListener("click", event => {
  // console.log(event)
  if (event.target.className.startsWith("eaterySelectBox")) {
    const boxSelector = document.querySelector(".eaterySelectBox").value.split("--")
      // Find the eatery onject based on the selected value
      useEateries().find(oneEateryObject => {
          if (parseInt(boxSelector[0]) === oneEateryObject.id) {
               console.log(oneEateryObject)
               eateryDetail(oneEateryObject)
          } 
         })
        }})




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

export const createTrip = postObj => {
  return fetch("http://localhost:8088/trips", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(postObj)
  })
      .then(response => response.json())
}

applicationElement.addEventListener("click", event => {
  event.preventDefault()
  if (event.target.id === "Save_Plan") {
    //collect the input values into an object to post to the DB
    const park = document.querySelector(".parkSelector").value.split("--")
    const attraction = document.querySelector("#selectedAttraction").value.split("--")
    const eatery = document.querySelector(".eaterySelectBox").value.split("--")
    //we have not created a user yet - for now, we will hard code `1`.
    //we can add the current time as well

    const tripObject = {
      park: park[1],
      attraction: attraction[1],
      eatery: eatery[1],
      userId: 1,
      timestamp: Date.now()
    }
    
    createTrip(tripObject)
    console.log(tripObject)
  }
})
