import { AttractionHtml } from "../attractions/AttractionDataManager.js"
import { showParks } from "../parks/ParkDataManager.js"

const GeneratePlanner = () => {
  return `
  <section class="Planner_Section">
    <div class="Planner_Page">
      <h1>Plan an Itenerary...or else.</h1>
      <section class="Planner_Selectors">
        <div class="Planner_Selectors_Park">Parks</div>
        <div class="Planner_Selectors_Bazar"></div>
        <div class="Planner_Selectors_Eatery">Eateries</div>
      </section>
      <section class="Planner_Itenerary">
        <section class="Planner_Itenerary_Park">Selected Park</section>
        <section class="Planner_Itenerary_Bazar">Selected Bazar</section>
        <section class="Planner_Itenerary_Eatery">Selected Eatery</section>
      </section>
      <section class="Planner_Details">
        <section class="Planner_Details_Park">Park Details</section>
        <section class="Planner_Details_Bazar">Bazar Details</section>
        <section class="Planner_Details_Eatery">Eatery Details</section>
      </section>
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

export const ShowPlanner = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".Planner");
		postElement.innerHTML = GeneratePlanner();
	}

export const ClearPlanner = () => {
    //Get a reference to the location on the DOM where the list will display
    const postElement = document.querySelector(".Planner");
      postElement.innerHTML = RemovePlanner();
    }
