var getDogFactsButton = document.querySelector (".btn")
var queryUrl = "https://dog.ceo/api/breeds/image/random";


//////////fetching random dog pic///////////
function getRandomDogPic(){
fetch(queryUrl).then (function (response){
    console.log(response)
    if (response.ok){
        response.json().then(function(data){
            console.log(data)
        })
    }
})

}
getRandomDogPic();