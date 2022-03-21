 import { showStates } from "../parks/ParkDataManager.js"
 
 
 
 
 
 
 
 const GenerateHome = () => {
  return `
  <section class ="HomeSection">
    <div class="HomePage">
      <h2>Edgy Logo Here</h2>
      <h1>You'll never travel without mammoth again...or else</h1>
      <section id="HomePage_Input">
        <input type="text">
        <button id="Plan_Trip">Plan a Trip</button>
      </section>
    </div>
    </section>
  `
}

 const RemoveHome = () => {
  return `

  `
}

export const ShowHome = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".Home");
		postElement.innerHTML = GenerateHome();
	}

export const ClearHome = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".Home");
		postElement.innerHTML = RemoveHome();
	}
