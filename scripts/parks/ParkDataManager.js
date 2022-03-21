import { settings } from '../Settings.js'

// Since settings is an object, you can use dot notation or square bracket notation to access the properties.
// settings.npsKey
// pulls the full object of parks and all the info and keys
let parksApi=`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}`

export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}`)
    .then(response => response.json())
}

// //names of all the parks going to html in dropdown
export const showParks = () => {
    const renderParks= document.querySelector(".parks")
        getParks()
        .then( (parksApi) => {
            renderParks.innerHTML = ` <select>
             ${parksApi.data.map((dataObj)=>`<option> ${dataObj.fullName}</option>`)    }
             </select>`
            })
        }
