
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
        
     renderEatery.innerHTML  = `<select class="eaterySelectBox" name="eatery_Select">
        <option selected disabled hidden >Select an Eatery</option>
        ${eateryApi.map((eatery) => `<option value="${eatery.id}--${eatery.businessName}">${eatery.businessName}</option>`)   }
        </select>
        `
    })
}