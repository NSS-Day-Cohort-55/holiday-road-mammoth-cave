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
        
     renderAttraction.innerHTML  = ` <h1>Bizarre</h1> <select id="selectedAttraction" >
        <option selected disabled hidden >Select an Attraction</option>
        ${attractionApi.map((attraction) => `<option value=${attraction.id}>${attraction.name}</option>`)   }
        </select>
        `
        console.log(attractionApi)
         })
}

export const AttractionDetail = (attractionValue ) => {
    const renderDetails = document.querySelector(".Planner_Details_Bazar")
   fetchAttraction()
   .then ( (bArray) => {
        bArray.find( (bObj) =>  {
           if (bObj.id === parseInt(attractionValue)) {
               renderDetails.innerHTML =` 
               <div>
               Description: ${bObj.description}  
               </div>
               <div>
               Souvenirs: ${bObj.ameneties.souvenirs} 
               </div>
               <div>
               Restrooms: ${bObj.ameneties.restrooms}
               </div>
                `
           }
        }) 
   })
}

const mainContainer = document.querySelector(".Holiday-Road")

mainContainer.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "selectedAttraction") {
        // Get what the user typed into the form fields
        const attractionD = document.querySelector("#selectedAttraction").value
         console.log(attractionD)
       AttractionDetail(attractionD)
}})

