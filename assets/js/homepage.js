/////////global variables/////////
var searchDogsButton = document.querySelector(".search-button");
var dogQueryUrl = "https://dog.ceo/api/breed/" + "hound" + "/images/random";
var dogContainerEl = document.createElement("img");
var dogParentContainerEl = document.querySelector(".dog-parent-container");
var dogFactsParentContainer = document.querySelector(".parent-dog-facts");
var placeholderImg = document.querySelector(".placeholder-img");
var dogFactsContainer = document.createElement("p");
var breedInput = document.querySelector(".breed-input").value



////Event Listener for the get pet facts button//////
searchDogsButton.addEventListener("click", function (event) {
    event.preventDefault()
    console.log("click")
  getRandomDogPic();
//   getRandomDogFacts();
});

////////fetching random dog pic///////////
function getRandomDogPic() {
  fetch(dogQueryUrl).then(function (response) {
      console.log(response);
    if (response.ok) {
      response.json().then(function (data) {
          console.log(data);

        displayRandomDogPic(data);
      });
    }
  });
}
// /////////////display random dog pic//////////
function displayRandomDogPic(data) {
  // console.log(data.message)
//   dogParentContainerEl.replace();
  dogParentContainerEl.append(dogContainerEl);
  dogContainerEl.setAttribute("src", data.message);
  dogContainerEl.className = "card stacked card_img";
}


//////get the breed input/////
// function breedInput = 