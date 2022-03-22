import { settings } from '../Settings.js'


// Since settings is an object, you can use dot notation or square bracket notation to access the properties.
// settings.npsKey
// pulls the full object of parks and all the info and keys
let parksApi=`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}`
let statesApi="https://gist.github.com/DakotaLambert/112f2a451ab34f18be1de2c8be8655ff"

export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}`)
    .then(response => response.json())
}

export const getStates = () => {
    return fetch("https://gist.githubusercontent.com/DakotaLambert/112f2a451ab34f18be1de2c8be8655ff/raw/7cebd30fc8f64bd818f2d3d60e054256e0b7b332/US_States.json")
    .then(response => response.json())
}

// //names of all the parks going to html in dropdown
export const showParks = () => {
    const renderParks= document.querySelector(".Planner_Selectors_Park")
        getParks()
        .then( (parksApi) => {
            renderParks.innerHTML = ` <select>
            <option>Select a Park</option>
             ${parksApi.data.map((dataObj)=>`<option> ${dataObj.fullName}</option>`)    }
             </select>`
            })
        }

export const showStates = () => {
    const renderStates= document.querySelector("#HomePage_Input")
        getStates()
        .then( (statesApi) => {
            renderStates.innerHTML += ` <select>
            <option>Select a State</option>
             ${statesApi.states.map((dataObj)=>`<option> ${dataObj.name}</option>`)    }
             </select>
             <button id="Plan_Trip">Plan a Trip</button>`
            })
        }
