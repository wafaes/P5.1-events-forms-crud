import {listOfPets} from "./listOfPets.js";

document.addEventListener("DOMContentLoaded", function(){
  const name = document.getElementById("name");
  const description = document.getElementById("description");
  const imageurl = document.getElementById("imageurl");
  const bday = document.getElementById("bday");
  const price = document.getElementById("price");
  const code = document.getElementById("code");
  const sold = document.getElementById("sold");
 

    const editContainer = document.getElementById("editContainer");
    const editForm = document.getElementById("editForm");
    const editName = document.getElementById("editName");
    const editDescription = document.getElementById("editDescription");
    const editImg = document.getElementById("editImg");
    const editBday = document.getElementById("editBday");
    const editPrice = document.getElementById("editPrice");
    const editSold = document.getElementById("editSold");
    const editCode = document.getElementById("editCode");  

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

        /* copiao */
        const seePetsButton = document.getElementById("see-pets");
        const petListContainer = document.querySelector(
          ".row.justify-content-center.align-items-center.pet-list"
        );


    function validateForm(){
        let isValid = true;

        if (!checkEmptyInputs(name)) {
          markFieldAsNotValid(name, "Name cannot be empty");
          isValid = false;
        } else {
          markFieldAsValid(name);
        }
    
        if (!checkEmptyInputs(description)) {
          markFieldAsNotValid(description, "Description cannot be empty");
          isValid = false;
        } else {
          markFieldAsValid(description);
        }
    
        let urlIsValid = true;
    
        if (!checkEmptyInputs(imageurl)) {
          markFieldAsNotValid(imageurl, "URL cannot be empty");
          isValid = false;
          imageurl = false;
        } else {
          markFieldAsValid(imageurl);
        }
    
        if (imageurl && !checkImageUrl(imageurl.value)) {
          markFieldAsNotValid(
            imageurl,
            "Image URL must be a valid .jpg, .jpeg, .png, or .gif file"
          );
          isValid = false;
        } else {
          markFieldAsValid(imageurl);
        }
    
        let birthdayIsValid = true;
    
        if (!checkEmptyInputs(bday)) {
          markFieldAsNotValid(bday, "Pet birthday cannot be empty");
          isValid = false;
          bdayIsValid = false;
        } else {
          markFieldAsValid(bday);
        }
    
        if (bdayIsValid && !checkFuture(bday.value)) {
          markFieldAsNotValid(bday, "Your pet cannot be from the future");
          isValid = false;
        } else {
          markFieldAsValid(bday);
        }
    
        if (isNaN(price.value) || price.value <= 0) {
          markFieldAsNotValid(price, "Pet price must be a positive number");
          isValid = false;
        } else {
          markFieldAsValid(price);
        }
    
        if (!checkEmptyInputs(code)) {
          markFieldAsNotValid(code, "Petcode input cannot be empty");
          isValid = false;
        } else {
          markFieldAsValid(code);
        }
    
        if (!checkCodePet(code)) {
          markFieldAsNotValid(
            code,
            "Petcode needs to be formed by three leters and three numbers"
          );
          isValid = false;
        } else {
          markFieldAsValid(code);
        }
        return isValid;
    }


function checkEmptyInputs(input) {
  return input.value.trim().length > 0;
}


function checkImageUrl(url) {
  const imagePattern = /\.(jpg|jpeg|png|gif)$/i;
  return imagePattern.test(trimmedUrl);
}



function checkFuture(birthdate) {
  const bir = new Date(birthdate);
  const today = new Date();
  if (bir.getFullYear() > today.getFullYear()) {
    return false;
  } else if (bir.getFullYear() === today.getFullYear()) {
    if (bir.getMonth() > today.getMonth()) {
      return false;
    } else if (bir.getMonth() === today.getMonth()) {
      if (bir.getDate() > today.getDate()) {
        return false;
      }
    }
  }
  return true;
}



function checkCodePet(code) {
  const codePattern = /^[A-Za-z]{3}\d{3}$/; //Check notes because I won't remember how to do this in 2 days
  return codePattern.test(code.value);
}

function markFieldAsNotValid(element, message) {
  const errorMessage = element.parentNode.querySelector(".error-message");
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
  element.classList.add("is-not-valid-field");
}

function markFieldAsValid(element) {
  const errorMessage = element.parentNode.querySelector(".error-message");
  errorMessage.style.display = "none";
  element.classList.remove("is-not-valid-field");
}


function renderPets(petList) {
  const div = document.querySelector(
    ".row.justify-content-center.align-items-center.pet-list"
  ); 
  div.innerHTML = "";
  petList.forEach((pet) => {
    const petItemContainer = document.createElement("div");
    petItemContainer.classList.add("col-12", "col-md-6", "col-lg-3", "mb-4");

    const petItem = document.createElement("div");
    petItem.classList.add("card", "mt-2", "h-100");
    petItem.innerHTML = `<img class="card-img-top" src="${
      pet.imageUrl
    }" alt="Title" />
      <div class="card-body">
          <h4 class="card-title">Name: ${pet.name}</h4>
          <p class="card-text" style="font-weight: bold;">Description: <span> ${
            pet.description
          } </span></p>
          <p class="card-text" style="font-weight: bold;">Price: <span> ${
            pet.price
          } €  </span></p>
          <p class="card-text" style="font-weight: bold;">Birthday: <span> ${
            pet.birthday
          } </span></p>
          <p class="card-text" style="font-weight: bold;">Code: <span> ${
            pet.code
          } </span> </p>
          <p class="card-text" style="font-weight: bold;">Does this pet have an owner? : <span> ${
            pet.sold
              ? "Yes! It has an owner"
              : "Now they got an owner!"
          }</span></p>
          <button class="btn btn-warning mt-2" data-pet-code="${
            
            pet.code
          }">Delete Pet</button>
          <button class="btn btn-primary mt-2" data-code="${
            pet.code
          }">Edit Pet</button>
      </div>
    `;
    petItemContainer.appendChild(petItem);
    div.appendChild(petItemContainer);
  });


  const editButtons = div.querySelectorAll("button.btn-info");
  editButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const code = event.target.getAttribute("data-code");
      const petToEdit = petListInstance
        .readPets()
        .find((pet) => pet.code === code);

      editName.value = petToEdit.name;
      editDescription.value = petToEdit.description;
      editImg.value = petToEdit.imageUrl;
      editBday.value = petToEdit.birthday;
      editPrice.value = petToEdit.price;
      editSold.checked = petToEdit.sold;
      editCode.value = petToEdit.code;

      editContainer.style.display = "block";
    });
  });
}

  editForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const updatedPet = {
    name: editName.value,
    description: editDescription.value,
    imageurl: editImg.value,
    bday: editBirth.value,
    price: parseFloat(editPrice.value),
    code: editCode.value,
    sold: editSold.checked,
  };
  petListInstance.editPet(updatedPet);
  renderPets(petListInstance.readPets());
});


seePetsButton.addEventListener("click", (event) => {
  petListContainer.style.display = "inline-flex"; //This over here took me like 2 hours MAAAAAAAAAAAAAAAAAAAAAAAN
  renderPets(petListInstance.readPets());
});

function deletePet(code) {
  console.log("Deleting pet with code:", code);
  petListInstance.deletePet(code);
  
}

petForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validateForm()) {
    const newPet = {
      name: name.value,
      description: description.value,
      imageurl: imageurl.value,
      bday: bday.value,
      price: parseFloat(price.value),
      code: code.value,
      sold: sold.checked,
    }; 

    petListInstance.addPet(newPet);
    console.log("Pet added succesfully");
    
    console.log(petListInstance);
  } else {
    console.log("Form is not valid.");
  }
});
  //xxxzxcdhfjdnjdnkcxkc
   
});
