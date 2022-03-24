
  export const eateryDetail = (eateryObject) => {
  const eateryDetailsHtml = document.querySelector(".Planner_Details_Eatery")
    eateryDetailsHtml.innerHTML = `
    <h3> ${eateryObject.businessName}</h3>
    <p>Description: ${eateryObject.description}</p>
    <p>Location: ${eateryObject.city}, ${eateryObject.state}</p>
    `;
  }
  
  
