const GenerateItenerary = () => {
  return `
  <section class="ItenerariesSection">
  <div class="ItenerariesPage">
    <img src="./images/Logo.png" alt="">
    <h1>Saved Iteneraries</h1>
    <div class="ItenerariesSaved">
      <section class="IteneraryCard">
        <p>Itenerary 1</p>
      </section>
      <section class="IteneraryCard">
        <p>Itenerary 1</p>
      </section>
      <section class="IteneraryCard">
        <p>Itenerary 1</p>
      </section>
    </div>
    <section class="Iteneraries_Buttons">
      <button id="Iteneraries_New">New</button>
      <button id="Iteneraries_Reset">Reset</button>
      <button id="Iteneraries_Reset">Delete</button>
    </section>
  </div>
</section>
`
}

 const RemoveItenerary = () => {
  return `

  `
}

export const ShowItenerary = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".Iteneraries");
		postElement.innerHTML = GenerateItenerary();
	}

export const ClearItenerary = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".Iteneraries");
		postElement.innerHTML = RemoveItenerary();
	}
