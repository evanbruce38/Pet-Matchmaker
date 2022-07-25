/////////global variables/////////
var getDogFactsButton = document.querySelector (".btn")
var queryUrl = "https://dog.ceo/api/breeds/image/random";
var dogContainerEl = document.createElement("img")
var parentContainerEl = document.querySelector(".parent-container");

getDogFactsButton.addEventListener("click", function(){
getRandomDogPic();
})



//////////fetching random dog pic///////////
function getRandomDogPic(){
fetch(queryUrl).then (function (response){
    console.log(response)
    if (response.ok){
        response.json().then(function(data){
            console.log(data)

            displayRandomDogPic(data)
        })
    }
})

}


/////////////display random dog pic//////////
function displayRandomDogPic(data){
    console.log(data.message)
    parentContainerEl.appendChild(dogContainerEl);
    dogContainerEl.setAttribute('src', data.message)
    dogContainerEl.className = "card stacked card_img"

    
  console.log(dogContainerEl)
}