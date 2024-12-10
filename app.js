document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("petForm");
    const name = this.documentElement("name");
    const description = this.documentElement("description");
    const imageurl = this.documentElement("imageurl");//!!! alo mejor no está bien
    const bday = this.documentElement("bday");
    const price = this.documentElement("price");
    const petcode = this.documentElement("petcode");
    const sold = this.documentElement("sold");


    /*function addPet(namee, description, imageurl, birthdate, price, petcode, sold); {
        const newPet = {
            name: namee,
            description: description,
            imageurl: imageurl,
            birthdate: birthdate,
            price: price,
            petcode: petcode,
            sold: sold
        };
        this.pets.push(newPet);
    }*/



    function validateForm(){
        let isValid = true;
        

        if (!isValidName(namee.value)) {
            markFieldAsNotValid(namee);
            isValid = false;
          } else {
            markFieldAsValid(namee);
          }
        

        if (!isValidPassword(description.value)) {
            markFieldAsNotValid(description);
            isValid = false;
          } else {
            markFieldAsValid(description);
          }



        if (!isValidImage(image.value)) {
            markFieldAsNotValid(image);
            isValid = false;
          } else {
            markFieldAsValid(image);
          }


        
        if (!isValidName(bday.value)) {
            markFieldAsNotValid(bday);
            isValid = false;
          } else {
            markFieldAsValid(bday);
          }


        if (!isValidName(price.value)) {
            markFieldAsNotValid(price);
            isValid = false;
          } else {
            markFieldAsValid(price);
          }


        if (!isValidName(petcode.value)) {
            markFieldAsNotValid(petcode);
            isValid = false;
          } else {
            markFieldAsValid(petcode);
          }


        if (!isValidName(sold.value)) {
            markFieldAsNotValid(sold);
            isValid = false;
          } else {
            markFieldAsValid(sold);
          }


        return isValid;

    }



    function isValidName(){ //must be completed 
        let textInputs = document.querySelectorAll('input[type="text"]');
            if (input.value.trim() === "") {  // Check if the input is empty
                markFieldAsNotValid(nameInput, "Dog's name is rquired");
                return false;  // Return false to prevent form submission      
    }
    return true;  // If all fields are filled, return true
    }

    function isValidDescription(){
        let descriptionInput = document.querySelector('input[name="description"]');
        if(descriptionInput.value.trim()== ""){
            markFieldAsNotValid(descriptionInput, "Description is required");
            return false;
        }
        return true;
    }

    function isValidImage(){//must be completed ; valid ; .jpg .jpeg .png .gif
        let imageInput = document.querySelector('input[name="imageurl"]');
        let imageUrl = imageInput.value.trim();
        let validImageExtensions = /\.(jpg|jpeg|png|gif)$/i;
        if (!validImageExtensions.test(imageUrl)) {
            markFieldAsNotValid(imageInput, "Image URL must be a valid image file (.jpg, .jpeg, .png, .gif).");
            return false;
        }
        return true;
    }

    function isValidDate(){//must be completed ; not future
        let dateInput = document.querySelector('input[name="bday"]');
        let birthdate = new Date(dateInput.value);
        let today = new Date();
        if (birthdate > today) {
            markFieldAsNotValid(dateInput, "This pet hasn't born yet 😨.");
            return false;
        }
        return true;
    }

    function isValidPrice(){//must be completed  ; grater than 0
        let priceInput = document.querySelector('input[name="price"]');
        let price = parseFloat(priceInput.value);
        if (isNaN(price) || price <= 0) {
            markFieldAsNotValid(priceInput, "Is this pet free?? Correct the prize!!.");
            return false;
        }
        return true;
    }

    function isValidPetCode(){//must be completed ; ABC123 format
        let petCodeInput = document.querySelector('input[name="petcode"]');
        let petCode = petCodeInput.value.trim();
        let petCodePattern = /^[A-Z]{3}\d{3}$/; // ABC123 format
        if (!petCodePattern.test(petCode)) {
            markFieldAsNotValid(petCodeInput, "Pet code must be in the format ABC123.");
            return false;
        }
        return true;
    }

    function isSold(){
        const acceptCheckbox = document.querySelector('input[name="accept"]');
        // No validation required for the checkbox; it's optional.
        return true;
    }


    function markFieldAsValid(element) {
        element.parentNode.classList.remove("is-not-valid-field");
      }


    function markFieldAsNotValid(element, message="Invalid field. Insert a valid value"){
        let errorMessageElement = element.parentNode.querySelector(".error-message");
        if (errorMessageElement) {
            errorMessageElement.textContent = message;
        }
        element.classList.add("is-not-valid-field");  // Add a class to style invalid fields (you can define this class in CSS)
        /*if(message){
            element.parseNode.querySelector(".error-message").textContent = message;
        }
            element.parseNode.classList.add("is-not-valid-field");*/
    }
    
   

});