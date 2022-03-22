// let apiEateries = [];

// export const useEateries = () => {
//   return [...apiEateries]
// }

// export const loadEatery = () => {

//     return fetch("http://holidayroad.nss.team/eateries")
//     .then(response => response.json())
//     .then((eateryArray) => {
//         apiEateries = eateryArray
//         return eateryArray
//     })
// };

 

let eateryApi = "http://holidayroad.nss.team/eateries"

export const loadEatery = () => {
    return fetch("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
    // staged data to be used on line 16
    // .then(parsedResponse => {
    //     // do something with response here
    //     return console.log(parsedResponse)
    // })
}

export const eateryHtml = () => {
    const renderEatery = document.querySelector(".Planner_Selectors_Eatery")
    loadEatery()
    .then( (eateryApi) => {
        
     renderEatery.innerHTML  = ` <h1>Eatery</h1> <select >
        ${eateryApi.map((eatery) => `<option>${eatery.businessName}</option>`)   }
        </select>
        `
        console.log(eateryApi)
       
    })
}