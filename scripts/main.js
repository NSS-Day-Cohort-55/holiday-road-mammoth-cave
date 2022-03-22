import { AttractionHtml } from "./attractions/AttractionDataManager.js";
import { ShowHome, ClearHome, ShowError  } from "./pages/home.js";
import { ShowPlanner, ClearPlanner } from "./pages/planner.js";
import { ShowItenerary, ClearItenerary } from "./pages/Itenerary.js";
import { showWeather } from "./weather/WeatherDataManager.js";
import { loadEatery, eateryHtml } from "./eateries/EateryDataManager.js";
// import { loadEatery } from "./eateries/EateryDataManager.js";
import { getParks, showParks, showStates } from "./parks/ParkDataManager.js"

// const showEateryList = () => {
//     loadEatery()
//     .then(eateryArray =>{
//         console.log("Eatery Array", eateryArray)

//         makeEateryList(eateryArray)
//     })
// }





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

applicationElement.addEventListener("click", event => {
  event.preventDefault()
  if (event.target.id === "newPost__submit") {
    //collect the input values into an object to post to the DB
    const title = document.querySelector("input[name='postTitle']").value
    const url = document.querySelector("input[name='postURL']").value
    const description = document.querySelector("textarea[name='postDescription']").value
    //we have not created a user yet - for now, we will hard code `1`.
    //we can add the current time as well
    const postObject = {
      title: title,
      imageURL: url,
      description: description,
      userId: 1,
      timestamp: Date.now()
    }

  }
})


const parkSelector = applicationElement(".parkSelector")
const detailsPark = applicationElement(".Planner_Details_Park")

detailsPark.innerHtml = parkSelector.value;


