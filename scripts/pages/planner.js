import { showParks } from "../parks/ParkDataManager.js"
import { eateryHtml } from "../eateries/EateryDataManager.js"
import { AttractionHtml } from "../attractions/AttractionDataManager.js"
import { showWeather } from "../weather/WeatherDataManager.js"


const GeneratePlanner = (park) => {
  
  return `
  <section class="Planner_Section">
  
  <div class="Planner_Page">
      <img src="./images/Logo.png" alt="">
      <h1>Let's plan your trip to ${park}!</h1>
      <section class="Planner_Selectors">
        <div class="Planner_Selectors_Park">Parks</div>
        <div class="Planner_Selectors_Bazar"></div>
        <div class="Planner_Selectors_Eatery">Eateries</div>
      </section>
      <section class="Planner_Details">
        <section class="Planner_Details_Park">Park Details</section>
        <section class="Planner_Details_Bazar">Bazar Details</section>
        <section class="Planner_Details_Eatery">Eatery Details</section>
      </section>
      <section class="Weather_Page"></section>
      <section class="Planner_Buttons">
        <button id="Planner_State">State Selection</button>
        <button>Save Itenerary</button>
        <button id="Planner_Iteneraries">Itenerary List</button>
      </section>
    </div>
  </section>
`
}

const RemovePlanner = () => {
  return `

  `
}





export const ShowPlanner = (park) => {
  //Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".Planner");
  postElement.innerHTML = GeneratePlanner(park);
}


export const ClearPlanner = () => {
    //Get a reference to the location on the DOM where the list will display
    const postElement = document.querySelector(".Planner");
      postElement.innerHTML = RemovePlanner();
    }

export const createPlannerPage = () => {
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

