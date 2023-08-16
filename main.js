let tableBody = document.querySelector("tbody");
function buildPicsTable() {
    // getElementsByTagName returns an ARRAY of elements (even if there is just one)
    // let tableBodyArray = document.getElementsByTagName("tbody");
    // console.log('tableBodyArray :>> ', tableBodyArray);
    console.log(tableBody);
    
    for (let i = 0; i < pics.length; i++) {
        const row = document.createElement ("tr");
        //creating
        const tags = document.createElement('td'); 
        tags.innerText = pics[i].tags;

        const likes = document.createElement('td');
        likes.innerText = pics[i].likes;

        const imageWidth = document.createElement('td');
        imageWidth.innerText = pics[i].imageWidth;
        

        row.appendChild(tags);
        row.appendChild(likes);
        row.appendChild(imageWidth);
        tableBody.appendChild(row);
        // tableBodyArray[0].appendChild(row)
    }
}
// buildPicsTable();

//we are building a card from Bootstrap library ourselves
function buildCards(){
    const cardsContainer = document.querySelector(".row");
    // const cardsContainer = document.getElementById("cards-container");
    console.log(cardsContainer);

    for (let i = 0; i < pics.length; i++) {
        console.log(pics[i]);
        //card div
        const cardDiv = document.createElement("div")
        cardDiv.setAttribute("class", "card col-sm-12 col-md-6 col-lg-2 ")
        cardDiv.setAttribute("style", "width: 18rem;")
        // so we created it above and now let's put it in our html
        cardsContainer.appendChild(cardDiv);

        //now the image// we create a variable
        const image=document.createElement("img");
        //set source// mind the syntax!
        image.setAttribute("src", pics[i].previewURL);
        //alternatively we will see tags
        image.setAttribute("alt", pics[i].tags);
        //we add bootstrap class
        image.setAttribute("class", "card-img-top");
        //and our image goes in this cardDiv we made before
        cardDiv.appendChild(image);

        //now making the body of a card
        const cardBody=document.createElement("div");
        cardBody.setAttribute("class", "card-body");
        cardDiv.appendChild(cardBody);

        //card header
        const h5 = document.createElement("h5");
        //another way of adding a class to a variable
        h5.classList.add("card-title");
        h5.innerText = pics[i].downloads;
        cardBody.appendChild(h5);

        //adding p tag
        const p =document.createElement("p");
        p.classList.add("card-text");
        p.innerText=pics[i].tags;
        cardBody.appendChild(p);
    }
}

buildCards();