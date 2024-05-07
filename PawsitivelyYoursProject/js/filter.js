//Import information from the Animal class
import Animal, { AnimalTypeArray, AnimalGenderArray, adoptableAnimalsArray, BirdAgeCategory, BirdAgeCategoryArray, CatAgeCategory, CatAgeCategoryArray, DogAgeCategory, DogAgeCategoryArray, FerretAgeCategory, FerretAgeCategoryArray,RabbitAgeCategory, RabbitAgeCategoryArray} from "./animal.mjs";

//a counter variable
var i = 0;

//an array of filtered animals to be displayed
var filteredAnimals;

//The filter for animal type - default is all animal types
var AnimalTypeFilter = "Any";

//The filter for animal gender - default is all animal genders
var AnimalGenderFilter = "Any";

//The filter for animal age - default is all ages
var AnimalAgeFilter = "Any"

// The HTMl element that displays when no animals are found 
var zeroResultsText = document.getElementById("zeroResultsText");

// Create select options for animal type
function DisplayAnimalTypes()
{
    //Store the select animal type formm
    var selectAnimalTypeForm = document.getElementById("selectAnimalTypeForm");


    //allow every value in the const to be displayed for selection
    AnimalTypeArray.forEach(currentType =>
    {
        //stores the current animal type option
        var currentType;

        //create a new option for the document
        selectAnimalTypeForm.appendChild(new Option(`${currentType}`));
    });
}

// Create select options for the animal gender
function DisplayAnimalGenders()
{
    //Store the select animal gender formm
    var selectAnimalGenderForm = document.getElementById("selectAnimalGenderForm");

    //allow every value in the const to be displayed for selection
    AnimalGenderArray.forEach(currentGender =>
    {
        //stores the current gender option
        var currentGender;

        //create a new option for the document
        selectAnimalGenderForm.appendChild(new Option(`${currentGender}`));
    });
}

// Create select options for age based on animal type
function DisplayAnimalAges(array)
{
    //Store the select animal type form
    var selectAnimalAgeForm = document.getElementById("selectAnimalAgeForm");

    // if the animal is exotic, make the form select hidden
    if(AnimalTypeFilter == "Exotic" || AnimalTypeFilter == "Any")
    {
        if(selectAnimalAgeForm.classList.contains('active'))
        {
            selectAnimalAgeForm.classList.remove('active');
        }

        if(!selectAnimalAgeForm.classList.contains('hidden'))
        {
            selectAnimalAgeForm.classList.add('hidden');
        }

        AnimalAgeFilter = "Any";
    }

    //Otherwise, make it active and populate the options
    else
    {
        if(selectAnimalAgeForm.classList.contains('hidden'))
        {
            selectAnimalAgeForm.classList.remove('hidden');
            selectAnimalAgeForm.classList.add('active');
        }

        // Add a default option
        selectAnimalAgeForm.appendChild(new Option("Select Animal Age", "Any", true));
    
        //allow every value in the const to be displayed for selection
        array.forEach(currentAge =>
        {
            //stores the current animal age option
            var currentAge;

            //create a new option for the document
            selectAnimalAgeForm.appendChild(new Option(`${currentAge}`));
        });
    }

        
}

//Populate the animal gender options for the select filter
DisplayAnimalGenders();

//Populate the animal types for the filter selection
DisplayAnimalTypes();

//filter by animal type
function filterByAnimalType(type)
{
    //if we have no filtered animals yet (this is our first filter parameter)
    if(filteredAnimals.length == 0)
    {
        //add the animals to the array of filtered animals
        for (i=0; i < adoptableAnimalsArray.length; i++)
        {
            var animal = adoptableAnimalsArray[i];

            if(animal.animalType == type)
            {
                filteredAnimals.push(animal);
            }
        }
    }

    //this is NOT our first filter parameter
    else
    {
        //make a temporary storage home for the filtered animals
        var newFilteredAnimals = [];

        //Go through the animals in the filtered animal array
        for (i=0; i < filteredAnimals.length; i++)
        {
            //if it is indeed the requested animal type filter
            if(filteredAnimals[i].animalType == type)
            {
                //add it to our new filtered array of animals
                newFilteredAnimals.push(filteredAnimals[i]);
            }
        }

        //set the value of the filteredAnimals array to the new filtered array
        filteredAnimals = newFilteredAnimals;
    }
}

//filter by gender
function filterByAnimalGender(gender)
{
     //if we have no filtered animals yet (this is our first filter parameter)
     if(filteredAnimals.length == 0)
     {
         //add the animals with the chosen gender to the array of filtered animals
        for (i=0; i < adoptableAnimalsArray.length; i++)
        {
            var animal = adoptableAnimalsArray[i];

            if(animal.animalGender == gender)
            {
                filteredAnimals.push(animal);
            }
        }
     }
 
     //this is NOT our first filter parameter
     else
     {
         //make a temporary storage home for the filtered animals
         var newFilteredAnimals = [];
 
         //Go through the animals in the filtered animal array
         for (i=0; i < filteredAnimals.length; i++)
         {
             //if it is indeed the requested animal gender filter
             if(filteredAnimals[i].animalGender == gender)
             {
                 //add it to our new filtered array of animals
                 newFilteredAnimals.push(filteredAnimals[i]);
             }
         }
 
         //set the value of the filteredAnimals array to the new filtered array
         filteredAnimals = newFilteredAnimals;
     }
}

//filter by age
function filterByAnimalAge(age)
{
     //if we have no filtered animals yet (this is our first filter parameter)
     if(filteredAnimals.length == 0)
     {
         //add the animals with the chosen age category to the array of filtered animals
        for (i=0; i < adoptableAnimalsArray.length; i++)
        {
            var animal = adoptableAnimalsArray[i];

            if(animal.animalAgeCategory == age)
            {
                filteredAnimals.push(animal);
            }
        }
     }
 
     //this is NOT our first filter parameter
     else
     {
         //make a temporary storage home for the filtered animals
         var newFilteredAnimals = [];
 
         //Go through the animals in the filtered animal array
         for (i=0; i < filteredAnimals.length; i++)
         {
             //if it is indeed the requested animal age category filter
             if(filteredAnimals[i].animalAgeCategory == age)
             {
                 //add it to our new filtered array of animals
                 newFilteredAnimals.push(filteredAnimals[i]);
             }
         }
 
         //set the value of the filteredAnimals array to the new filtered array
         filteredAnimals = newFilteredAnimals;
     }
}

//when the user selects an animalType in the select form, filter by animalType selected
$('#selectAnimalTypeForm').on('change', function SelectAnimalType()
{
    //The selected animal type to filter by
    var selectedOption = $('#selectAnimalTypeForm option:selected');

    // reset the select age form
    var selectAnimalAgeForm = document.getElementById('selectAnimalAgeForm');

    selectAnimalAgeForm.querySelectorAll('#selectAnimalAgeForm option').forEach(option => option.remove());

    //using that information, assign the right animal type
    switch(selectedOption[0].value)
    {
        case "Bird":
            //add the bird type to the filter
            AnimalTypeFilter = "Bird"
            DisplayAnimalAges(BirdAgeCategoryArray);

            break;

        case "Cat":
            //add the cat type to the filter
            AnimalTypeFilter = "Cat"
            DisplayAnimalAges(CatAgeCategoryArray);
            break;

        case "Dog":
           //add the dog type to the filter
           AnimalTypeFilter = "Dog"
           DisplayAnimalAges(DogAgeCategoryArray);
            break
        
        case "Exotic":
            //add the exotic type to the filter
            AnimalTypeFilter = "Exotic"
            DisplayAnimalAges("Any");
            break;

        case "Ferret":
            //add the ferret type to the filter
            AnimalTypeFilter = "Ferret"
            DisplayAnimalAges(FerretAgeCategoryArray);
            break;

        case "Rabbit":
            //add the rabbit type to the filter
            AnimalTypeFilter = "Rabbit"
            DisplayAnimalAges(RabbitAgeCategoryArray);
            break;

        case "Any":
            //add all animal types to the filter
            AnimalTypeFilter = "Any";
            DisplayAnimalAges("Any");
            break;
    }
});

//when the user selects an animal gender in the select form, filter by animal gender selected
$('#selectAnimalGenderForm').on('change', function SelectAnimalGender()
{
    //The selected animal gender to filter by
    var selectedOption = $('#selectAnimalGenderForm option:selected');

    //using that information, assign the right animal gender
    switch(selectedOption[0].value)
    {
        case "Female":
            //the selected option was for female
            AnimalGenderFilter = "Female";
            break;

        case "Male":
            //the selected option was for male
            AnimalGenderFilter = "Male";
            break;

        case "Any":
            //The selected option was for any gender
            AnimalGenderFilter = "Any";
            break;
    }
});

//when the user selects an animal age in the select form, filter by animal age selected
$('#selectAnimalAgeForm').on('change', function SelectAnimalAge()
{
    //The selected animal age to filter by
    var selectedOption = $('#selectAnimalAgeForm option:selected');

    //depending on the animal's type, determine the selected age category
    switch(AnimalTypeFilter)
    {
        case "Bird":
            switch(selectedOption[0].value)
            {
                case BirdAgeCategory.Juvenile:
                    AnimalAgeFilter = BirdAgeCategory.Juvenile;
                    break;

                case BirdAgeCategory.Adult:
                    AnimalAgeFilter = BirdAgeCategory.Adult;
                    break;

                case "Any":
                    AnimalAgeFilter = "Any";
                    break;
            }

            break;

        case "Cat":
            switch(selectedOption[0].value)
            {
                case CatAgeCategory.Kitten:
                    AnimalAgeFilter = CatAgeCategory.Kitten;
                    break;

                case CatAgeCategory.YoungAdult:
                    AnimalAgeFilter = CatAgeCategory.YoungAdult;
                    break;

                case CatAgeCategory.Adult:
                    AnimalAgeFilter = CatAgeCategory.Adult;
                    break;

                case CatAgeCategory.Senior:
                    AnimalAgeFilter = CatAgeCategory.Senior;
                    break;
                     
                case "Any":
                    AnimalAgeFilter = "Any";
                    break;
            }

            break;

        case "Dog":
            switch(selectedOption[0].value)
            {
                case DogAgeCategory.Puppy:
                    AnimalAgeFilter = DogAgeCategory.Puppy;
                    break;

                case DogAgeCategory.YoungAdult:
                    AnimalAgeFilter = DogAgeCategory.YoungAdult;
                    break;

                case DogAgeCategory.Adult:
                    AnimalAgeFilter = DogAgeCategory.Adult;
                    break;

                case DogAgeCategory.Senior:
                AnimalAgeFilter = DogAgeCategory.Senior;
                break;

                case "Any":
                    AnimalAgeFilter = "Any";
                    break;
            }

            break;

        case "Ferret":
            switch(selectedOption[0].value)
            {
                case FerretAgeCategory.YoungAdult:
                    AnimalAgeFilter = FerretAgeCategory.YoungAdult;
                    break;

                case FerretAgeCategory.Adult:
                    AnimalAgeFilter = FerretAgeCategory.Adult;
                    break;

                case FerretAgeCategory.Senior:
                    AnimalAgeFilter = FerretAgeCategory.Senior;
                    break;

                case "Any":
                    AnimalAgeFilter = "Any";
                    break;
            }

            break;

        case "Rabbit":
            switch(selectedOption[0].value)
            {
                case RabbitAgeCategory.YoungAdult:
                    AnimalAgeFilter = RabbitAgeCategory.YoungAdult;
                    break;

                case RabbitAgeCategory.Adult:
                    AnimalAgeFilter = RabbitAgeCategory.Adult;
                    break;
                
                case RabbitAgeCategory.Senior:
                    AnimalAgeFilter = RabbitAgeCategory.Senior;
                    break;

                case "Any":
                    AnimalAgeFilter = "Any";
                    break;


            }

            break;

        case "Exotic":
            AnimalAgeFilter = "Any";
            break;

        case "Any":
            AnimalAgeFilter = "Any";
            break;
    }
});

//when the user wants to apply the selected filters
$('#applyFiltersButton').on('click', function filterAnimals()
{
    //Reset the array of filtered animals
    filteredAnimals = [];

    //make all the animal cards hidden
    for(i=0; i < adoptableAnimalsArray.length; i++)
    {
        //the current animal's card
        var animalCard = document.getElementById(`${adoptableAnimalsArray[i].animalAdoptionID}`);

        //if the animal is active
        if(animalCard.classList.contains('active'))
        {
            //make it hidden
            animalCard.classList.remove('active');
            animalCard.classList.add('hidden');
        }
    }

    //The variable that determines if we are going to filter by animal type
    var filterByType = false;

    //The variable that determines if we are going to filter by animal gender
    var filterByGender = false;

    //The variable that determines if we are going to filter by animal age
    var filterByAge = false;

    //If the filter selected for animal type is not all types, we are filtering by animal type
    if(AnimalTypeFilter !== "Any")
    {
        filterByType = true;
    }

    //If the filter selected for animal gender is not all genders, we are filtering by animal gender
    if(AnimalGenderFilter !== "Any")
    {
        filterByGender = true;
    }

    //If a filter for age is selected AND we are filtering by type (age is type dependant), filter by age
    if(AnimalAgeFilter !== "Any")
    {
        if(filterByType == true)
        {
            filterByAge = true;
        }
    }

    //if we are only filtering by animalType
    if(filterByType == true && filterByGender == false && filterByAge == false)
    {
        //filter the animals by Animal Type
        filterByAnimalType(AnimalTypeFilter);
    }

    //if we are only filtering by animal gender
    if(filterByType == false && filterByGender == true && filterByAge == false)
    {
        //filter the animals by gender
        filterByAnimalGender(AnimalGenderFilter);
    }

    //if we are filtering by animal gender and animal type
    if(filterByType == true && filterByGender == true && filterByAge == false)
    {
        //Filter by animal type
        filterByAnimalType(AnimalTypeFilter);

        //then filter by animal gender
        filterByAnimalGender(AnimalGenderFilter);
    }

    // if we are filtering by animal type and age
    if(filterByType == true && filterByGender == false && filterByAge == true)
    {
        // Filter by animal type
        filterByAnimalType(AnimalTypeFilter);

        //then, filter by age
        filterByAnimalAge(AnimalAgeFilter);
    }

    // if we are filtering by animal type, gender, and age
    if(filterByType == true && filterByGender == true && filterByAge == true)
    {
        //Filter by animaltype
        filterByAnimalType(AnimalTypeFilter);

        //then filter by animal gender
        filterByAnimalGender(AnimalGenderFilter);

        //then, filter by age
        filterByAnimalAge(AnimalAgeFilter);
    }

    //if we are not filtering by anything
    if(filterByType == false && filterByGender == false && filterByAge == false)
    {
        //Add all the animals that are adoptable to the filtered Animals array
        for(i=0; i < adoptableAnimalsArray.length; i++)
        {
            filteredAnimals.push(adoptableAnimalsArray[i]);
        }
    }

    //make all the animal cards in the filtered animal array active
    for(i=0; i < filteredAnimals.length; i++)
    {
        //the current animal's card
        var animalCard = document.getElementById(`${filteredAnimals[i].animalAdoptionID}`);

        //if the animal is hidden
        if(animalCard.classList.contains('hidden'))
        {
            //make it active
            animalCard.classList.remove('hidden');
            animalCard.classList.add('active');
        }
    }

    //If the filter results have no results, show the text that tells the user that
    if(filteredAnimals.length == 0)
    {
        zeroResultsText.classList.remove('hidden');
        zeroResultsText.classList.add('active');
    }
    
    else
    {
        // make sure the text for no animal results is hidden
        if(zeroResultsText.classList.contains('active'))
        {
            zeroResultsText.classList.remove('active');
            zeroResultsText.classList.add('hidden');
        }
    }
});