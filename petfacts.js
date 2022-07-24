var getDogFactsButton = document.querySelector (".btn")
var queryUrl = "https://dog.ceo/api/breeds/image/random";
var dogContainerEl = document.querySelector(".dog-container")
var parentContainerEl = document.querySelector(".parent-container");


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
getRandomDogPic();

function displayRandomDogPic(data){
    console.log(data.message)
    dogContainerEl.innerHTML = 
    "<p>" + "Something" + "</p>"

    parentContainerEl.append(dogContainerEl);
//   console.log(dogContainerEl)
}