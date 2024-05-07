//Reference:
    //[inserting HTML via JS] https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

//import the array of adoptable animals
import {adoptableAnimalsArray} from "../js/animal.mjs";

//store the element we want to use as a positional reference
var container = document.getElementById("pageContainer");

//for each animal in the array of adoptable animals
function createCards()
{
    adoptableAnimalsArray.forEach(animal => 
    {
        //the template for an animal card, tailored to each animal's fields
        var animalCardHTML =
        `<!-- An animal card that holds animal information -->
        <div class="active card col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 ${animal.animalType} ${animal.animalGender}" id="${animal.animalAdoptionID}">
            <img class="card-img-top" src="../media/animals/${animal.animalType}/${animal.animalImageID}.jpg">
            <div class="card-body" id="${animal.animalAdoptionID}">
                <h5 class="card-title">${animal.animalName}</h5>
                <ul class="card-list">
                    <li>Breed: ${animal.animalBreed}</li>
                    <li>Gender: ${animal.animalGender}</li>
                    <li>Age: ${animal.animalAge}</li>
                    <li>${animal.animalTraits}
                </ul>
                <button class="card-button" onclick="window.location.href='../html/aboutPet.html?animalID=${animal.animalAdoptionID}'">Learn More</button>
            </div>
        </div>
        `;

        //insert the card after the pageHeader element
        container.insertAdjacentHTML("beforeend", animalCardHTML);
    });
}

//Create the animal cards
createCards();