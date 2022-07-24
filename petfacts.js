var getDogFactsButton = document.querySelector (".btn")
var queryUrl = "https://dog.ceo/api/breeds/image/random";
function getRandomDogPic(){
fetch(queryUrl).then (function (response){
    console.log(response)
})

}
