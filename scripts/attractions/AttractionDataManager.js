let attractionApi = "http://holidayroad.nss.team/bizarreries";

export const fetchAttraction = () => {
  return fetch("http://holidayroad.nss.team/bizarreries").then((response) =>
    response.json()
  );
  // staged data to be used on line 16
  // .then(parsedResponse => {
  //     // do something with response here
  //     return console.log(parsedResponse)
  // })
};

export const AttractionHtml = () => {
    const renderAttraction = document.querySelector(".Planner_Selectors_Bazar")
    fetchAttraction()
    .then( 
      (attractionApi) => {
     renderAttraction.innerHTML  = `<select id="selectedAttraction" >
        <option selected disabled hidden >Select an Attraction</option>
        ${attractionApi.map((attraction) => `<option value="${attraction.id}--${attraction.name}">${attraction.name}</option>`)  }
        </select>
        `
    })
}
export const AttractionDetail = (attractionValue ) => {
    const renderDetails = document.querySelector(".Planner_Details_Bazar")

   fetchAttraction()
   .then ( (bArray) => {
        bArray.find( (bObj) =>  {          
           if (bObj.id === parseInt(attractionValue)) {
               renderDetails.innerHTML =` 
               <h3> ${bObj.name}<html> </h3>
               <div>
               ${bObj.description}
               </div>
               <p>
               Souvenirs: ${bObj.ameneties.souvenirs === true ? 'Yes' : 'No'}
               </p>
               <p>
               Restrooms: ${bObj.ameneties.restrooms === true ? 'Yes' : 'No'}
               </p>
                `;
      }
    });
  });
};

const mainContainer = document.querySelector(".Holiday-Road");

mainContainer.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.id === "selectedAttraction") {
    // Get what the user typed into the form fields
    const attractionD = document.querySelector("#selectedAttraction").value;
    console.log(attractionD);
    AttractionDetail(attractionD);
  }
});




