
  export const eateryDetail = (eateryObject) => {
  const eateryDetailsHtml = document.querySelector(".Planner_Details_Eatery")
    eateryDetailsHtml.innerHTML = `
    <h3> ${eateryObject.businessName}</h3>
    <p>${eateryObject.description}</p>
    <p>${eateryObject.city}, ${eateryObject.state}</p>
    `;
  }
  
  
