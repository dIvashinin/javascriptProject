// const fetchButton = document.getElementById("fetchButton");
const dropdown = document.getElementsByClassName("dropdown-content");
// const link = document.querySelectorAll("a");
console.log("dropdown :>> ", dropdown);

// console.log('link :>> ', link);
// console.log('dropdown.value :>> ', dropdown.value);
// console.log('fetchButton :>> ', fetchButton);

const myFetch = (url)=> {
      fetch(url)
    .then((response) => {
        console.log(response);
      return response.json();
    })
    .then((result) => {
      const pics = result.hits;
      buildCards(pics);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

// const constructUrl = (values) => {
//     let newUrl = '';
//     return newUrl;
// }

function addEventListenerToDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);

    dropdown.addEventListener("change", (event) => {
        const selectedValue = event.target.value;
        
    })
}


//if i try to do a function on all dropdown elemets, it won't let me
dropdown[1].addEventListener ("change", () => {
    // console.log('event.target :>> ', event.target.value);
  // const selectedOption = dropdown.dataset.value;
//   const selectedOption = "vector";
 const myDropDown = document.querySelector('#dropdown');
//  const selectedOption = myDropDown.children.dataset.value;
 const selectedOption = myDropDown.value;
 console.log("selectedOption",selectedOption);
//   console.log("selectedOption :>> ", selectedOption);
  const fetchURL = `https://pixabay.com/api/?key=38816654-eccc30260c20a5ca45fecc085&image_type=${selectedOption}`;
  console.log(fetchURL);
  myFetch(fetchURL);

});

//we are building a card from Bootstrap library ourselves
function buildCards(pics) {
  const cardsContainer = document.querySelector(".row");
  cardsContainer.innerHTML = "";
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
