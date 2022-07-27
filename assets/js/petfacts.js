/////////global variables/////////
var getPetFactsButton = document.querySelector(".btn");
var dogQueryUrl = "https://dog.ceo/api/breeds/image/random";
var dogContainerEl = document.createElement("img");
var dogParentContainerEl = document.querySelector(".dog-parent-container");
var dogFactsParentContainer = document.querySelector(".parent-dog-facts");
var dogFactsContainer = document.createElement("p");

var catContainerEl = document.createElement("img");
var catParentContainerEl = document.querySelector(".cat-parent-container");

//////////fetching random dog fact//////////////////
// function getRandomDogFacts(){
//     fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(
//         "http://dog-api.kinduff.com/api/facts")}`).then(function (response) {
//       if (response.ok) {
//         response.json().then(function (data) {
//           console.log(data);
//           var temp = JSON.parse(data.contents);
//           console.log(temp);
//           displayRandomDogFacts(temp.facts[0]);
//         });
//       }
//     });
// }
//////////fetching random dog fact//////////////////
function getRandomDogFacts() {
  fetch("https://dog-api.kinduff.com/api/facts", {mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin':'*'
  }}).then(function (response) {
    console.log(response);
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        var temp = JSON.parse(data.contents);
        console.log(temp);
        displayRandomDogFacts(temp.facts[0]);
      });
    }
  });
}
////////////displaying random dog fact///////////////
function displayRandomDogFacts(data) {
  // console.log(data.message)
  dogFactsParentContainer.append(dogFactsContainer);
  dogFactsContainer.innerHTML = "<p>" + data + "</p>";
}

//////Event Listener for the get pet facts button//////
getPetFactsButton.addEventListener("click", getRandomDogFacts);
