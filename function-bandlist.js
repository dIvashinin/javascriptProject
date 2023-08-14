// function listBands(bandList) {
//     let myUl = document.getElementById("bandlist");
//     // myUl.innerHTML = null;
//     let listElementsToCreate = bandList.length;
  
//     for (let i = 0; i < bandList.length; i++) {
//       let myLiElement = document.createElement("li");
//       myLiElement.innerHTML = bandList[i];
//       myUl.appendChild(myLiElement);
//     }
//   }
//   let myBandList = [
//     "Dire Straits",
//     "Kansas",
//     "Steely Dan",
//     "BandName",
//     "Beatles",
//   ];
//   listBands(myBandList);
















//selecting the element body//// 
const body = document.body
//now we are gonna append elements to body///
//add string to page//
body.append ('Hello World')
//normally we add other elements to page// like div//
//so we create div here
const div = document.createElement('div')
//2 ways of adding text to div
div.innerText = 'Hello World in a div'
//or so:
// div.textContent = 'Hello World2 in a div'
//style
div.innerHTML='<strong> Hello World strong</strong>'


//and add it to our page here// it's empty now
body.append(div)

const button = document.createElement('button')
button.innerText = 'submit'
body.append(button)


//removing elements//

const div2 = document.querySelector('div2')