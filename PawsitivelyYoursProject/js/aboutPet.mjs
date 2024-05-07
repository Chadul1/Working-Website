import {adoptableAnimalsArray} from "../js/animal.mjs";

//places information into both the about page, and the adoption form page.
function CreateSelectedAnimalPage() {

    console.log('Placing Animal Info <3');

    // url stuff
    const urlParams = new URLSearchParams(window.location.search);

    //gets the animal id from the url
    var animalID = parseInt(urlParams.get('animalID'));

    console.log(animalID);

    adoptableAnimalsArray.forEach(animal => {
            if (animal.animalAdoptionID == animalID) {
                
                //places data
                document.getElementById('animalName').textContent = animal.animalName;
                document.getElementById('animalBreed').textContent = 'Breed: ' + animal.animalBreed;
                document.getElementById('animalAge').textContent = 'Age: ' + animal.animalAge;
                document.getElementById('animalGender').textContent = 'Gender: ' + animal.animalGender;
                document.getElementById('animalImg').src = `../media/animals/${animal.animalType}/${animal.animalImageID}.jpg`;
                document.getElementById('animalDescription').textContent = animal.animalDescription;

            }});
}


CreateSelectedAnimalPage();