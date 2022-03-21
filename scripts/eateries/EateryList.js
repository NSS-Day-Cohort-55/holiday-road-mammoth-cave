import { eatery } from "./Eatery.js"

export const makeEateryList = (eateryArray) =>{
  eateryList(eateryArray)
};

const eateryList = (allEateries) =>{
  const eateryElement = document.querySelector(".allEateries");
    let HTMLArray = allEateries.map(oneEatery => {
        return eatery(oneEatery);
    })
    eateryElement.innerHTML += HTMLArray.join("");
}