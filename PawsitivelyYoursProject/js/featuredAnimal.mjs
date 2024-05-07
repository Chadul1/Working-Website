import {adoptableAnimalsArray} from "./animal.mjs";


function createLearnMoreButton(animal) {
    
    var button = document.createElement("button");
    
    //button classes
    button.className = "btn btn-primary card-button pinkGradientButton";

    button.textContent = "Learn more about " + animal.animalName;
    console.log("../html/aboutPet.html?animalID=" + animal.animalAdoptionID);   

    button.onclick = function() {

        //link to the adoption forms
        window.location.href = "../html/aboutPet.html?animalID=" + animal.animalAdoptionID;
    };
    
    // return button
    return button;
}

//Sets the featured animal on the home page
function MakeFeaturedAnimal(){
    var featuredAnimalID = getRandomInt(1, adoptableAnimalsArray.length)

    adoptableAnimalsArray.forEach(animal => {
        if (animal.animalAdoptionID == featuredAnimalID) {
            
            document.getElementById('featuredAnimalName').textContent = animal.animalName;
            document.getElementById('featuredAnimalImg').src = `../media/animals/${animal.animalType}/${animal.animalImageID}.jpg`;
            document.getElementById('featuredAnimalDescription').textContent = animal.animalDescription;
            
        //make button
        var adoptMeButton = createLearnMoreButton(animal);

    //Puts the button on the page
    var learnMoreButtonDiv = document.getElementById("learnMoreButtonDiv");
    if (learnMoreButtonDiv) {
        learnMoreButtonDiv.appendChild(adoptMeButton);
    }

        }});
}

//get a random number
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


MakeFeaturedAnimal();