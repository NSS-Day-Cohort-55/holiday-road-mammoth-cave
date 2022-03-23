import { settings } from '../Settings.js'



// Since settings is an object, you can use dot notation or square bracket notation to access the properties.
// settings.npsKey
// pulls the full object of parks and all the info and keys
let parksApi = `https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}`
let statesApi = "https://gist.github.com/DakotaLambert/112f2a451ab34f18be1de2c8be8655ff"

export const getParks = (stateCode, parkID) => {
    if(stateCode != null){
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}&stateCode=${stateCode}`)
    .then(response => response.json())}
        if(parkID != null){
            return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}&stateCode=${stateCode}&id=${parkID}`)
            .then(response => response.json())}
    }


export const getStates = () => {
    return fetch("https://gist.githubusercontent.com/DakotaLambert/112f2a451ab34f18be1de2c8be8655ff/raw/7cebd30fc8f64bd818f2d3d60e054256e0b7b332/US_States.json")
        .then(response => response.json())
}

// //names of all the parks going to html in dropdown
export const showParks = (stateCode) => {
    const renderParks = document.querySelector(".Planner_Selectors_Park")
    getParks(stateCode)
        .then((parksApi) => {
            renderParks.innerHTML = ` <select class="parkSelector">
            <option selected disabled hidden>Select a Park</option>
             ${parksApi.data.map((dataObj)=>
                `<option value = "${dataObj.id}--${dataObj.fullName}"> ${dataObj.fullName}</option>`)}

                </select> `
        })
}


export const showStates = () => {
    const renderStates = document.querySelector("#HomePage_Input")
    getStates()
        .then((statesApi) => {
            renderStates.innerHTML += ` <select value=${statesApi.states[0].abbreviation} class="stateSelector">
            <option>Select a State</option>
             ${statesApi.states.map((dataObj)=>`
             <option value= "${dataObj.abbreviation}--${dataObj.name}--${dataObj.id}"> ${dataObj.name}</option>`)    }
             </select>
             <button id="Plan_Trip">Plan a Trip</button>`
        })
}

const mainContainer = document.querySelector(".Holiday-Road")

mainContainer.addEventListener("change", changeEvent => {
    if (changeEvent.target.className === "parkSelector") {
         // Get what the user typed into the form fields
         const parkD = document.querySelector(".parkSelector").value.split("--")
         let selectedState = document.querySelector(".parkSelector").value
                // .value.split("--");
         console.log(selectedState)
         getParks(selectedState)
         .then( (parksApi) => {
             parksApi.data.find( singlePark=> {
                  if(singlePark.id === parkD[0]){
                       // console.log(singlePark)
                       parkDetail(singlePark)
                  }     
             })
      
              
})}})
        




export const parkDetail = (parkObject) => {
    console.log(parkObject)
    const parkDetailHtml = document.querySelector(".Planner_Details_Park")
    parkDetailHtml.innerHTML = `
    <p>Description: ${parkObject.description}</p>
    <p>Location: ${parkObject.addresses[0].city}, ${parkObject.states.slice(0, 2)}</p>`
}
