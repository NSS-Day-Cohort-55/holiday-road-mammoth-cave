let attractionApi = "http://holidayroad.nss.team/bizarreries"

export const fetchAttraction = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
    .then(response => response.json())
    // staged data to be used on line 16
    // .then(parsedResponse => {
    //     // do something with response here
    //     return console.log(parsedResponse)
    // })
}

export const AttractionHtml = () => {
    const renderAttraction = document.querySelector(".Planner_Selectors_Bazar")
    fetchAttraction()
    .then( (attractionApi) => {
        
     renderAttraction.innerHTML  = `<select>
        <option>Select an Attraction</option>
        ${attractionApi.map((attraction) => `<option>${attraction.name}</option>`)   }
        </select>
        `
        console.log(attractionApi)
       
    })
}

