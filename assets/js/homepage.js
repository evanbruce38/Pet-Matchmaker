/////////global variables/////////
var searchDogsButton = document.querySelector(".search-button");
var dogQueryUrl = "https://dog.ceo/api/breed/" + "hound" + "/images/random";
var dogContainerEl = document.createElement("img");
var dogParentContainerEl = document.querySelector(".dog-parent-container");
var dogFactsParentContainer = document.querySelector(".parent-dog-facts");
var placeholderImg = document.querySelector(".placeholder-img");
var dogFactsContainer = document.createElement("p");

var searchContainer = document.querySelector(".previous-search-container");






////////fetching random dog pic///////////
function getRandomDogPic(breedInput) {
    
    var dogQueryUrl =
      "https://dog.ceo/api/breed/" + breedInput + "/images/random";
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
  document.getElementById("placeholder-img").src= data.message
  // dogParentContainerEl.append(dogContainerEl);
  // dogContainerEl.setAttribute("src", data.message);
  dogContainerEl.className = "card stacked card_img";
 
}
/////////////////
var mySearchHist = [];
var previousSearchHistory = JSON.parse(localStorage.getItem("history"));

if (previousSearchHistory != null){
    mySearchHist = [...previousSearchHistory];
    mySearchHist.forEach(function(savedPet, i) {
      console.log(savedPet);
      let petButton = document.createElement("button");
      petButton.textContent = savedPet;
      petButton.setAttribute("id", `petButton${i}`);
      searchContainer.append(petButton);
      petButton.addEventListener("click", function(event){
        // comment out the prevent default to see if it is needed, later...
        event.preventDefault();
        getRandomDogPic(petButton.textContent);
      })
    })

}

/////////// Search history saving //////////
var searchHistoryList = function(breedName) {
//   $('.past-search:contains("' + breedName + '")').remove();

  if (mySearchHist.length > 3){
      mySearchHist[0] = breedName
} else{
    mySearchHist.push(breedName)
}
localStorage.setItem('history',JSON.stringify(mySearchHist));

  }

  
////Event Listener for the get pet facts button//////
searchDogsButton.addEventListener("click", function (event) {
    event.preventDefault()
    console.log("click")
    var breedInput = document.querySelector(".breed-input").value;
  getRandomDogPic(breedInput);
//   getRandomDogFacts();
    searchHistoryList(breedInput);
});

  

