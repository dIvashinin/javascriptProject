const fetchButton = document.getElementById("fetchButton");
const dropdown = document.getElementById("dropdown");

fetchButton.addEventListener("click", () =>{
    const selectedOption = dropdown.value;
    const fetchURL = `https://pixabay.com/api/?key=38816654-eccc30260c20a5ca45fecc085&${selectedOption}`;

    fetch(fetchURL)
    .then((response) => {
        return response.json();
      })
    .then((result) => {
        const pics = result.hits;
        buildCards(pics);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
});

//we are building a card from Bootstrap library ourselves
function buildCards(pics) {
  
    const cardsContainer = document.querySelector(".row");
    // cardsContainer.innerHTML = "";
    // cardDivContent.innerHTML = "";
    // const cardsContainer = document.getElementById("cards-container");
    console.log(cardsContainer);
  // console.log(pics.hits);
  
    for (let i = 0; i < pics.length; i++) {
      // console.log(pics.hits);
      //card div
      const cardDiv = document.createElement("div");
      cardDiv.setAttribute("class", "col-sm-12 col-md-4 col-lg-3 col-xxl-2 ");
      // cardDiv.setAttribute("style", "width: 18rem;");
      // so we created it above and now let's put it in our html
      cardsContainer.appendChild(cardDiv);
  
      //now the image// we create a variable
      const image = document.createElement("img");
      // img.innerHTML="";
      //set source// mind the syntax!
      // result.hits[i]
      image.setAttribute("src", pics[i].webformatURL);
      //alternatively we will see tags
      image.setAttribute("alt", pics[i].tags);
      //we add bootstrap class
      image.setAttribute("class", "card-img-top");
      
      //and our image goes in this cardDiv we made before
      cardDiv.appendChild(image);
  
      //now making the body of a card
      const cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");
      cardDiv.appendChild(cardBody);
  
      //card header
      const h5 = document.createElement("h5");
      //another way of adding a class to a variable
      h5.classList.add("card-title");
      h5.innerText = pics[i].downloads;
      // cardBody.appendChild(h5);
  
      //adding p tag
      const p = document.createElement("p");
      p.classList.add("card-text");
      p.innerText = pics[i].tags;
      cardBody.appendChild(p);
    }
    
  }