/////////global variables/////////
var searchDogsButton = document.querySelector(".search-button");
var dogQueryUrl = "https://dog.ceo/api/breed/" + "hound" + "/images/random";
var dogContainerEl = document.createElement("img");
var dogParentContainerEl = document.querySelector(".dog-parent-container");
var dogFactsParentContainer = document.querySelector(".parent-dog-facts");
var placeholderImg = document.querySelector(".placeholder-img");
var dogFactsContainer = document.createElement("p");

var searchContainer = document.querySelector(".previous-search-container");




////Event Listener for the get pet facts button//////
searchDogsButton.addEventListener("click", function (event) {
    event.preventDefault()
    console.log("click")
    var breedInput = document.querySelector(".breed-input").value;
  getRandomDogPic(breedInput);
//   getRandomDogFacts();
    searchHistoryList(breedInput);
});

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
  dogParentContainerEl.append(dogContainerEl);
  dogContainerEl.setAttribute("src", data.message);
  dogContainerEl.className = "card stacked card_img";
 
}
/////////////////
var mySearchHist = []
var previousSearchHistory = JSON.parse(localStorage.getItem("history"))
if (previousSearchHistory != null){
    mySearchHist= previousSearchHistory
    
    searchContainer.append(previousSearchHistory)
   document.createElement("button");
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

  


  

