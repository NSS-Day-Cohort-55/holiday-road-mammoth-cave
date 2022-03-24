const GenerateItenerary = () => {
  
  return `
  <section class="ItenerariesSection">
  <div class="ItenerariesPage">
    <img src="./images/Logo.png" alt="">
    <h1>Saved Iteneraries</h1>
    <div class="ItenerariesSaved">
    </div>
    <section class="Iteneraries_Buttons">
      <button id="Iteneraries_Reset">Reset</button>
    </section>
  </div>
</section>
`
}

 const RemoveItenerary = () => {
  return `

  `
}

let postCollection = []

const getPosts = () => {
  return fetch("http://localhost:8088/trips")
    .then(response => response.json())
    .then(parsedResponse => {
      postCollection = parsedResponse
      return parsedResponse;
    })
}

export const trip = (tripObject) => {
  return `
  <section class="IteneraryCard">
    <p>${tripObject.park}</p>
    <p>${tripObject.attraction}</p>
    <p>${tripObject.eatery}</p>
  </section>
  `
}

const PostList = (allTrips) => {
	let postHTML = "";
		//Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
		for (const tripObject of allTrips) {
			//what is a postObject?
			postHTML += trip(tripObject)
		}
		return postHTML;
	
}

const showPostList = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".ItenerariesSaved");
	getPosts().then((allPosts) => {
		postElement.innerHTML = PostList(allPosts);
	})
}

export const ShowItenerary = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".Iteneraries");
		postElement.innerHTML = GenerateItenerary();
    showPostList()
	}

export const ClearItenerary = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".Iteneraries");
		postElement.innerHTML = RemoveItenerary();
	}
