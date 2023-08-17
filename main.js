// let tableBody = document.querySelector("tbody");
// function buildPicsTable() {
  // getElementsByTagName returns an ARRAY of elements (even if there is just one)
  // let tableBodyArray = document.getElementsByTagName("tbody");
  // console.log('tableBodyArray :>> ', tableBodyArray);
//   console.log(tableBody);

//   for (let i = 0; i < pics.length; i++) {
//     const row = document.createElement("tr");
//     //creating
//     const tags = document.createElement("td");
//     tags.innerText = pics[i].tags;

//     const likes = document.createElement("td");
//     likes.innerText = pics[i].likes;

//     const imageWidth = document.createElement("td");
//     imageWidth.innerText = pics[i].imageWidth;

//     row.appendChild(tags);
//     row.appendChild(likes);
//     row.appendChild(imageWidth);
//     tableBody.appendChild(row);
    // tableBodyArray[0].appendChild(row)
//   }
// }
// buildPicsTable();

const getData = () => {
  fetch("https://pixabay.com/api/?key=38816654-eccc30260c20a5ca45fecc085")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((result) => {
        // console.log(result);
      const pics = result.hits;
    //   console.log(result);
      buildCards(pics);
      console.log("result", result);
      return result;
    });
    
};
getData();


//we are building a card from Bootstrap library ourselves
function buildCards(pics) {
  const cardsContainer = document.querySelector(".row");
  // const cardsContainer = document.getElementById("cards-container");
//   console.log(cardsContainer);
console.log(pics.hits);

  for (let i = 0; i < pics.length; i++) {
    // console.log(pics.hits);
    //card div
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card col-sm-12 col-md-6 col-lg-2 ");
    cardDiv.setAttribute("style", "width: 18rem;");
    // so we created it above and now let's put it in our html
    cardsContainer.appendChild(cardDiv);

    //now the image// we create a variable
    const image = document.createElement("img");
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
    cardBody.appendChild(h5);

    //adding p tag
    const p = document.createElement("p");
    p.classList.add("card-text");
    p.innerText = pics[i].tags;
    cardBody.appendChild(p);
  }
  
}

// buildCards();

// function addEventListener() {
//     const regularButton = document.getElementById("regular-button");
//     regularButton.addEventListener("click", function2 () {

//     }
// }

// addEventListener();
