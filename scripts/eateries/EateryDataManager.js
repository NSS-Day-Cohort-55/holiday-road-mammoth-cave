
let eateryApi = [];

export const useEateries = () => {
  return [...eateryApi]
}

export const loadEatery = () => {
    return fetch("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
    .then((eateryArray) => {
      eateryApi  = eateryArray
      return eateryArray
  })

}

export const eateryHtml = () => {
    const renderEatery = document.querySelector(".Planner_Selectors_Eatery")
    loadEatery()
    .then( (eateryApi) => {
        
     renderEatery.innerHTML  = ` <h1>Eatery</h1> <select class="eaterySelectBox">
        ${eateryApi.map((eatery) => `<option value=${eatery.id}>${eatery.businessName}</option>`)   }
        </select>
        `
        console.log(eateryApi)
       
    })
}