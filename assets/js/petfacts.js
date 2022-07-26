/////////global variables/////////
var getPetFactsButton = document.querySelector (".btn")
var dogQueryUrl = "https://dog.ceo/api/breeds/image/random";
var dogContainerEl = document.createElement("img")
var dogParentContainerEl = document.querySelector(".dog-parent-container");
var dogFactsParentContainer = document.querySelector(".parent-dog-facts");
var dogFactsContainer = document.createElement("p")

// var catApiKey = "806b4584-de1a-4111-93e7-df9074e55aba";
// var catQueryUrl = "https://api.thecatapi.com/v1/images?api_key=" + catApiKey;
var catContainerEl = document.createElement("img");
var catParentContainerEl = document.querySelector(".cat-parent-container");

//////Event Listener for the get pet facts button//////
getPetFactsButton.addEventListener("click", function(){
// getRandomDogPic();
getRandomDogFacts();
})



//////////fetching random dog pic///////////
// function getRandomDogPic(){
// fetch(dogQueryUrl).then(function (response) {
// //   console.log(response);
//   if (response.ok) {
//     response.json().then(function (data) {
//     //   console.log(data);

//       displayRandomDogPic(data);
//     });
//   }
// });
// }
// /////////////display random dog pic//////////
// function displayRandomDogPic(data){
//     // console.log(data.message)
//     dogParentContainerEl.appendChild(dogContainerEl);
//     dogContainerEl.setAttribute('src', data.message)
//     dogContainerEl.className = "card stacked card_img"
// }

///

//////fetching random dog fact//////////////
function getRandomDogFacts(){
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(
        "http://dog-api.kinduff.com/api/facts")}`).then(function (response) {
      console.log(response);
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);

          displayRandomDogFacts(data);
        });
      }
    });
}
/////////displaying random cat pic////////////
function displayRandomDogFacts(data){
  // console.log(data.message)
  dogFactsParentContainer.append(dogFactsContainer);
  dogFactsContainer.innerHTML = "<p>" + data.contents + "</p>"
  
}
