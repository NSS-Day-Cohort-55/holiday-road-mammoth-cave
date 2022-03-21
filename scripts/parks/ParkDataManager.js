import { settings } from '../Settings.js'

// Since settings is an object, you can use dot notation or square bracket notation to access the properties.
// settings.npsKey
// pulls the full object of parks and all the info and keys
export const getParks = () => {

    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}`)
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        // console.log(parsedResponse.data[0].fullName)


        // example of rendering fullName of each park
        // console.log(parsedResponse.data.map(dataObj=> dataObj.fullName))
        return parsedResponse;
    })
}

//names of all the parks going to html
const showParks = (name) => {
    const parkElement = document.querySelector(".parks")
    // getParks.find(name)
        parkElement.innerHTML = getParks(name)
    }

showParks()