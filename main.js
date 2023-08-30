// function that builds table and fills it with pics from api
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

// const getData = () => {
//   fetch("https://pixabay.com/api/?key=38816654-eccc30260c20a5ca45fecc085")
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((result) => {
//         // console.log(result);
//         //here important to be in a right directory for ex. inside of hits in my case
//       const pics = result.hits;
//     //   console.log(result);
//       buildCards(pics);
//       console.log("result", result);
//       return result;
//     });

// };
// getData();

const fetchPicsDefault = () => {
  // creating a default fetch function
  // const url = "https://pixabay.com/api/?key=38816654-eccc30260c20a5ca45fecc085&category=music&per_page=30&page=5";
  // by default i set filter view horizontal and color blue and editor's choice
  const url =
    "https://pixabay.com/api/?key=38816654-eccc30260c20a5ca45fecc085&per_page=40&editors_choice=true&colors=blue&orientation=horizontal";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      // console.log('result :>> ', result);
      const pics = result.hits;
      // controller(pics);
      // createDropdown(pics);
      buildCardsDefault(pics);
    });
};

fetchPicsDefault();

//we are building a card from Bootstrap library ourselves
function buildCardsDefault(pics) {
  const cardsContainer = document.querySelector(".row");
  // cardsContainer.innerHTML = "";
  // cardDivContent.innerHTML = "";
  // const cardsContainer = document.getElementById("cards-container");
  // console.log(cardsContainer);
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
    // image.classList.add('image-card');
    // const downloadIcon = document.createElement('i');
    // downloadIcon.classList.add('download-icon', 'fa','fa-download');
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
    // cardDiv.appendChild(downloadIcon);

    //now making the body of a card
    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    cardDiv.appendChild(cardBody);

    //card header
    const h5 = document.createElement("h5");
    //another way of adding a class to a variable
    // h5.classList.add("card-title");
    h5.innerText = pics[i].downloads;
    // cardBody.appendChild(h5);
    // console.log("pics[i] :>> ", pics[i]);

    //adding p tag
    const p = document.createElement("p");
    // p.classList.add("card-text");
    p.innerText = pics[i].tags;
    cardBody.appendChild(p);

    // const downloadLink = document.createElement("a");
    // downloadLink.href = pics[i].largeImageURL;
    // downloadLink.download="photo.jpg";
    // downloadLink.textContent = "download";

    // h5.appendChild(downloadLink);
  };
};

// buildCardsDefault();

// function from W3Schools read more--read less
function showText() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "read less";
    moreText.style.display = "inline";
  };
};

//from here we control all our functions
// function controller (pics) {
//inside we have all the functions we gonna need
// instead of calling them in different places
//easier to debug

//get the data

//create dropdown
// createDropdown(pics);
// setEventListeners(pics);

//build cards with images
// buildCards(pics);

//set event listener
//create filter functions
// }

// const setEventListeners = (pics) => {
//   const picDropdown = document.querySelector("#imageDropdown");
//   picDropdown.addEventListener("change", () => {
//   // console.log('dropdown selected :>> ');

//   //here goes our filter function
//   filterByDropdown(pics);

//   });
//   };

//Vector

// const setEventListeners = () => {
//   console.log('picsVector :>> ', picsVector);
// const picDropdown = document.getElementById("vectorDrop");
// console.log('picDropdown :>> ', picDropdown);
// picDropdown.addEventListener("click", () => {
//   console.log('dropdown selected :>> ');

//here goes our filter function
// fetchPicsVector();
// setEventListeners(picsVector);
// cardDivContent.innerHTML = "";
// buildCards(picsVector);
// filterByDropdown(picsVector);

// });
// };

// const filterByDropdown = (picsVector) => {
//   // get dropdown value
//   const picDropdown = document.getElementById("vectorDrop");
//   //we need to access to the value of the array:
//   const picDropdownValue = picDropdown.value;
//   console.log('picDropdownValue :>> ', picDropdownValue);
//   // console.log('pics in filt by dropdown:>> ', picsVector);
//   console.log("filtering by dropdown");

//   const filteredArray = picsVector.filter((pic) => {
//     console.log('pic :>> ', pic);
//     return picDropdownValue === pic.type;
//   });
//   console.log('filteredArray :>> ', filteredArray);
//   cardDivContent.innerHTML = "";
//   buildCards(picsVector);
// };

//filter by dropdown

// const filterByDropdown = (pics) => {
//   // get dropdown value
//   const picDropdown = document.querySelector("#imageDropdown");
//   //we need to access to the value of the array:
//   const picDropdownValue = picDropdown.value;
//   console.log('picDropdownValue :>> ', picDropdownValue);
//   console.log('pics in filt by dropdown:>> ', pics);
//   console.log("filtering by dropdown");

//   const filteredArray = pics.filter((pic) => {
//     console.log('pic :>> ', pic);
//     return picDropdownValue === pic.type;
//   });
//   console.log('filteredArray :>> ', filteredArray);
//   buildCards(pics);
// };

//this main function is in the end - like the most important one
// fetchPics();
