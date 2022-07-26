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
    var breedInput = document.querySelector(".breed-input").value;
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


/////////// Search history saving //////////
var searchHistoryList = function(breedName) {
  $('.past-search:contains("' + breedName + '")').remove();

  // create entry with breed name
  var searchHistoryEntry = $("<p>");
  searchHistoryEntry.addClass("past-search");
  searchHistoryEntry.text(breedName);

  // create container for entry
  var searchEntryContainer = $("<div>");
  searchEntryContainer.addClass("past-search-container");

  // append entry to container
  searchEntryContainer.append(searchHistoryEntry);

  // append entry container to search history container
  var searchHistoryContainerEl = $("#search-history-container");
  searchHistoryContainerEl.append(searchEntryContainer);

  if (savedSearches.length > 0){
      // update savedSearches array with previously saved searches
      var previousSavedSearches = localStorage.getItem("savedSearches");
      savedSearches = JSON.parse(previousSavedSearches);
  }

  // add breed name to array of saved searches
  savedSearches.push(breedName);
  localStorage.setItem("savedSearches", JSON.stringify(savedSearches));

  // reset search input
  $("#search-input").val("");

};

// load saved search history entries into search history container
var loadSearchHistory = function() {
  // get saved search history
  var savedSearchHistory = localStorage.getItem("savedSearches");

  // return false if there is no previous saved searches
  if (!savedSearchHistory) {
      return false;
  }

  // turn saved search history string into array
  savedSearchHistory = JSON.parse(savedSearchHistory);

  // go through savedSearchHistory array and make entry for each item in the list
  for (var i = 0; i < savedSearchHistory.length; i++) {
      searchHistoryList(savedSearchHistory[i]);
  }
};

