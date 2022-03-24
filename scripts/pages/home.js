 import { showStates } from "../parks/ParkDataManager.js"
 
 
 
 
 
 
 
 const GenerateHome = () => {
  return `
  <section class ="HomeSection">
    <div class="HomePage">
      <img src="./images/Logo.png" alt="">
      <h1>Welcome to Mammoth Cave's DUMPSTER FIRE! Let's plan a trip.</h1>
      <section id="HomePage_Input">
      </section>
      <section id="Error"></section>
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

  export const ShowError = () => {
    //Get a reference to the location on the DOM where the list will display
    const postElement = document.querySelector("#Error");
      postElement.innerHTML = `<h2>Pick a State<h2>`
    }