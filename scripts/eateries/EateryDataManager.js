
 

let eateryApi = "http://holidayroad.nss.team/eateries"

export const loadEatery = () => {
    return fetch("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
   
}

export const eateryHtml = () => {
    const renderEatery = document.querySelector(".Planner_Selectors_Eatery")
    loadEatery()
    .then( (eateryApi) => {
        
     renderEatery.innerHTML  = `<select >
        <option>Select an Eatery</option>
        ${eateryApi.map((eatery) => `<option>${eatery.businessName}</option>`)   }
        </select>
        `
        
       
    })
}