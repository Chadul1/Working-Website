'use strict';

const formValidation = {
    init: function() {
        this.initializeFieldValues();
        this.attachEventListeners();
    }, 

    initializeFieldValues: function() {
        //Empty.
    },

    //Attaches the doc elements to use in JS.
    attachEventListeners: function() {
        document.getElementById("phoneNumItem").addEventListener('keydown', this.integerKeyPress.bind(this));
        document.getElementById("phoneNumItem").addEventListener('keydown', this.formatPhone.bind(this));
        document.getElementById("submit").addEventListener('click', this.validateForm.bind(this));
    },

    // Ensures only integer input for specific fields
    integerKeyPress: function(e) {
        if (!/^(-?\d*)$/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "ArrowLeft" && e.key !== "ArrowRight") {
            e.preventDefault();
        }
	},

    // Automatically adds the "-" in set places to make formatting easy.
    formatPhone: function(event){
        if (event.key != 'Backspace' && (event.target.value.length === 1 || event.target.value.length === 5 || event.target.value.length === 9)) {
            event.target.value += '-';   
        }
    },

    //Checks the validity of the phone number including the international call number. gives a required format as well.
    validPhoneNumber: function(input) {
        var phoneNum = document.getElementById("phoneNumItem");
            if(phoneNum.value.length == 14){
            phoneNum.setCustomValidity('');
            return true;
            } else {
            phoneNum.setCustomValidity('Please enter a valid format, ex: 1-234-567-7890.');
            return false;
        }
    },
    //Checks if the form is valid by looking at the phone validity.
    validateForm: function() {
        const isPhoneValid = this.validPhoneNumber();
        if(isPhoneValid == true){
            return true;
        } else {
            return false;
        }
    }
};
//loads the function upon the form being submitted.
document.addEventListener('DOMContentLoaded', function() {
    formValidation.init();
    document.getElementById("submit").addEventListener('submit', function(event) {
        event.preventDefault();
        formValidation.validateForm();
    })
})