export const eatery = (eateryObject) => {
    return `
    <div>
    
              <option value="${eateryObject.businessName}"> ${eateryObject.businessName}</option>  
              
          </div>
          `;
  }
  
  export const eateryDetail = (eateryObject) => {
    let ameneties = ""
    for (const property in eateryObject.ameneties){
      ameneties += `<p>${property}: ${eateryObject.ameneties[property]}</p>`
    }
    return `
    <div>
    <aside>
    <p>Description: ${eateryObject.description}</p>
    <p>Ameneties: ${ameneties}</p>
    <p>Location: ${eateryObject.city}, ${eateryObject.state}</p>
    </aside>
    </div>
    `;
  }

