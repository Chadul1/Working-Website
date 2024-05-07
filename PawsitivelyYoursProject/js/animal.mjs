//import the animal data from the JSON file
import adoptableAnimalsDataArray from "../json/animal.json" assert { type: 'json' };

//The constant representing the animal types
export const AnimalType =
{
    Bird: "Bird",
    Cat: "Cat",
    Dog: "Dog",
    Exotic: "Exotic",
    Ferret: "Ferret",
    Rabbit: "Rabbit",
}

// The animal Types as an array of values
export const AnimalTypeArray = [`${AnimalType.Bird}`, `${AnimalType.Cat}`, `${AnimalType.Dog}`, `${AnimalType.Exotic}`, `${AnimalType.Ferret}`, `${AnimalType.Rabbit}`];

//the constant representing the animal's gender
export const AnimalGender =
{
    Female: "Female",
    Male: "Male",
}

//The animal genders as an array of values
export const AnimalGenderArray = [`${AnimalGender.Female}`, `${AnimalGender.Male}`];

//The bird age category const
export const BirdAgeCategory =
{
    Juvenile: "Under 5 years",
    Adult: "Over 5 years"
}

//The bird age values as an array 
export const BirdAgeCategoryArray = [`${BirdAgeCategory.Juvenile}`, `${BirdAgeCategory.Adult}`];

//The const for cat age categories
export const CatAgeCategory =
{
    Kitten: "Under 1 year",
    YoungAdult: "Between 1 and 6 years",
    Adult: "Between 6 and 10 years",
    Senior: "Over 10 years"

}

// The cat age category values as an array
export const CatAgeCategoryArray = [`${CatAgeCategory.Kitten}`, `${CatAgeCategory.YoungAdult}`, `${CatAgeCategory.Adult}`, `${CatAgeCategory.
Senior}`];

// The const dog age categorys
export const DogAgeCategory =
{
    Puppy: "Under 1 year",
    YoungAdult: "Between 1 and 3 years",
    Adult: "Between 3 and 6 years",
    Senior: "Over 6 years"
}

//The dog age categories as an array
export const DogAgeCategoryArray = [`${DogAgeCategory.Puppy}`, `${DogAgeCategory.YoungAdult}`, `${DogAgeCategory.Adult}`, `${DogAgeCategory.Senior}`];

// The const for ferret age categories
export const FerretAgeCategory =
{
    YoungAdult: "Under 1 year",
    Adult: "Between 1 and 5 years",
    Senior: "Over 5 years"
}

// The ferret age category consts as an array
export const FerretAgeCategoryArray = [`${FerretAgeCategory.YoungAdult}`, `${FerretAgeCategory.Adult}`, `${FerretAgeCategory.Senior}`];

// The const for rabbit age categories
export const RabbitAgeCategory =
{
    YoungAdult: "Under 2 years",
    Adult: "Between 2 and 7 years",
    Senior: "Over 7 years"
}

//The const rabbit age categories as an array
export const RabbitAgeCategoryArray = [`${RabbitAgeCategory.YoungAdult}`, `${RabbitAgeCategory.Adult}`, `${RabbitAgeCategory.Senior}`];

//tracks the number of animals that have been initialized overall and in each type for seamless animalID assignment
export var animalCounter = 0;
export var birdCounter = 0;
export var catCounter = 0
export var dogCounter = 0;
export var exoticCounter = 0;
export var ferretCounter = 0;
export var rabbitCounter = 0;

//Contains a list of all the adoptable animals for the center
export var adoptableAnimalsArray = [];

//The class representing an Animal
export default class Animal
{
    //The field for the animal's adoption ID
    animalAdoptionID = 0;

    //The field for the animal's image ID
    animalImageID = "";

    // The field for the animal's age category
    animalAgeCategory = "Any";

    //Initializes an Animal object
    constructor(animalType, animalName, animalAge, animalBreed, animalColor, animalGender, animalTraits, animalDescription)
    {
        //Increment the animal counter by 1
        animalCounter++;

        //Set the animal's adoptionID to the overall animal counter value
        this.animalAdoptionID = animalCounter;

        //Set the animal's name field to the provided name
        this.animalName = animalName;

        //Set the animal's age field to the provided age
        this.animalAge = animalAge;

        //Set the animal's breed field to the provided breed
        this.animalBreed = animalBreed;

        //Set the animal's color field to the provided color
        this.animalColor = animalColor;

        //Set the animal's type field to the appropriate animalType const value, increment the type counter, and set the animal's imageID to the type and type counter values:
        switch(animalType)
        {
            //'tis a bird
            case "Bird":

                //assign the animal type
                this.animalType = AnimalType.Bird;

                //increment the bird count
                birdCounter++;

                //assign the image id
                this.animalImageID = `bird${birdCounter}`;

                //determine the age category
                if(this.animalAge < 5)
                {
                    this.animalAgeCategory = BirdAgeCategory.Juvenile;
                }

                if(this.animalAge >= 5)
                {
                    this.animalAgeCategory = BirdAgeCategory.Adult;
                }

                break;

            //'tis a cat
            case "Cat":

                //assign the animal type
                this.animalType = AnimalType.Cat;

                //increment the cat count
                catCounter++;

                //assign the image id
                this.animalImageID = `cat${catCounter}`;

                //determine the age category
                if(this.animalAge < 1)
                {
                    this.animalAgeCategory = CatAgeCategory.Kitten;
                }

                if(this.animalAge >= 1 && this.animalAge < 6)
                {
                    this.animalAgeCategory = CatAgeCategory.YoungAdult;
                }

                if(this.animalAge >= 6 && this.animalAge < 10)
                {
                    this.animalAgeCategory = CatAgeCategory.Adult;
                }

                if(this.animalAge >= 10)
                {
                    this.animalAgeCategory = CatAgeCategory.Senior;
                }


                break;

            //'tis a dog
            case "Dog":

                //Assign the animal type
                this.animalType = AnimalType.Dog;

                //add to the counter of dogs
                dogCounter++;

                //assign an image id 
                this.animalImageID = `dog${dogCounter}`;

                //determine the age category
                if(this.animalAge < 1)
                {
                    this.animalAgeCategory = DogAgeCategory.Puppy;
                }

                if(this.animalAge >= 1 && this.animalAge < 3)
                {
                    this.animalAgeCategory = DogAgeCategory.YoungAdult;
                }

                if(this.animalAge >= 3 && this.animalAge < 6)
                {
                    this.animalAgeCategory = DogAgeCategory.Adult;
                }

                if(this.animalAge >= 6)
                {
                    this.animalAgeCategory = DogAgeCategory.Senior;
                }

                break;

            //'tis an exotic animal
            case "Exotic":

                //assign the animal type
                this.animalType = AnimalType.Exotic;

                //increment the exotic counter
                exoticCounter++;

                //assign the image id
                this.animalImageID = `exotic${exoticCounter}`;

                //No age category is assigned because exotic is such a wide variety of animals

                break;

            //'tis a ferret
            case "Ferret":

                //assign the animal type
                this.animalType = AnimalType.Ferret;

                //increment the ferret counter
                ferretCounter++;

                //assign the image id
                this.animalImageID = `ferret${ferretCounter}`;

                //determine the age category
                if(this.animalAge < 1)
                {
                    this.animalAgeCategory = FerretAgeCategory.YoungAdult;
                }

                if(this.animalAge >= 1 && this.animalAge < 5)
                {
                    this.animalAgeCategory = FerretAgeCategory.Adult;
                }

                if(this.animalAge >= 5)
                {
                    this.animalAgeCategory = FerretAgeCategory.Senior;
                }

                break;

            //'tis a rabbit
            case "Rabbit":

                //assign the animal typ
                this.animalType = AnimalType.Rabbit;

                //increment the rabbit count
                rabbitCounter++;

                //assign the image id
                this.animalImageID = `rabbit${rabbitCounter}`;

                //determine the age category
                if(this.animalAge < 2)
                {
                    this.animalAgeCategory = RabbitAgeCategory.YoungAdult;
                }

                if(this.animalAge >= 2 && this.animalAge < 7)
                {
                    this.animalAgeCategory = RabbitAgeCategory.Adult;
                }

                if(this.animalAge >= 7)
                {
                    this.animalAgeCategory = RabbitAgeCategory.Senior;
                }

                break;
        }

        //Set the animal's gender to the appropriate value
        switch(animalGender)
        {
            case "Male":
                this.animalGender = AnimalGender.Male;
                break;
            case "Female":
                this.animalGender = AnimalGender.Female;
        }

        //Set the animal's trait field to the provided information
        this.animalTraits = animalTraits;

        //Set the animal's description to the provided information
        this.animalDescription = animalDescription;

        //Add the animal to the list of adoptable animals
        adoptableAnimalsArray.push(this);
    }
}

//The method to transform JSON Data into animals up for adoption
function transformAnimalData()
{
    //for every animal in the json file array, instantiate the animal it will be added to the list of adoptable animals in the constructor
    adoptableAnimalsDataArray.adoptableAnimalsDataArray.forEach(animal =>
        {
            new Animal(animal.animalType, animal.animalName, animal.animalAge, animal.animalBreed, animal.animalColor, animal.animalGender, animal.animalTraits, animal.animalDescription);
        });
}

//Instantiate the animals from the JSON data
transformAnimalData();

 //Show the list of adoptable animals in the console for debugging purposes
console.log("Adoptable Animals:");
console.log(adoptableAnimalsArray);