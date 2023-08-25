// const fetchButton = document.getElementById("fetchButton");
//here is the trouble: i am accessing all of them, not the one
// const dropdown = document.getElementsByClassName("dropdown-content");
const dropdown1 = document.getElementById("dropdown1");
// const dropdown1Value = dropdown1.value;
const dropdown2 = document.getElementById("dropdown2");
const radio = document.getElementById("radio_colors");
const goButton = document.getElementById("goColors");
const searchButton = document.getElementById("search");
// const link = document.querySelectorAll("a");
console.log("dropdown1 :>> ", dropdown1);
// console.log('dropdown1Value :>> ', dropdown1Value);
// console.log('typeof dropdown1Value :>> ', typeof dropdown1Value);
console.log("dropdown2 :>> ", dropdown2);
console.log('radio-colors :>> ', radio_colors);
console.log('goButton :>> ', goButton);

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

// function addEventListenerToDropdown(dropdownId) {
//     const dropdown = document.getElementById(dropdownId);
//     dropdown.addEventListener("change", (event) => {
//         const selectedValue = event.target.value;
//     })
// }

searchButton.addEventListener ("change", (event) =>{
    console.log('event :>> ', event.target.value);
    const searchBar = event.target.value;
    console.log('searchbar :>> ', searchBar);
    const fetchURL = `https://pixabay.com/api/?key=38816654-eccc30260c20a5ca45fecc085&q=${searchBar}`;
  
  console.log(fetchURL);
  myFetch(fetchURL);
});

//if i try to do a function on all dropdown elemets, it won't let me
dropdown1.addEventListener ("change", (event) => {
    console.log('event.target :>> ', event);
//   // const selectedOption = dropdown.dataset.value;
// //   const selectedOption = "vector";
 const myDropDown = document.getElementById("dropdown1");
//  const selectedOption = myDropDown.children.dataset.value;
 const selectedOption = myDropDown.value;
 console.log("selectedOption",selectedOption);
// //   console.log("selectedOption :>> ", selectedOption);
  const fetchURL = `https://pixabay.com/api/?key=38816654-eccc30260c20a5ca45fecc085&image_type=${selectedOption}`;
  
  console.log(fetchURL);
  myFetch(fetchURL);
});

dropdown2.addEventListener ("change", (event) => {
    console.log('event.target :>> ', event.target.value);
//   // const selectedOption = dropdown.dataset.value;
// //   const selectedOption = "vector";
 const myDropDown = document.getElementById("dropdown2");
//  const selectedOption = myDropDown.children.dataset.value;
 const selectedOption = myDropDown.value;
 console.log("selectedOption",selectedOption);
// //   console.log("selectedOption :>> ", selectedOption);
  const fetchURL = `https://pixabay.com/api/?key=38816654-eccc30260c20a5ca45fecc085&category=${selectedOption}`;
  
  console.log(fetchURL);
  myFetch(fetchURL);
});

// function fetchURL () {

// }


//we are building a card from Bootstrap library ourselves
function buildCards(pics) {
  const cardsContainer = document.querySelector(".row");
  //this is how we clear all the pics before the next search
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

// need to do 2 functions: one is going to display something by default, the 2nd will act after i press/choose/filter anything
