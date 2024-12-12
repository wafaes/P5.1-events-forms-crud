export class listOfPets{
    constructor(){
        this.pets = [];
    }


addPet(pet) {
    this.pets.push(pet);
}

deletePet(codePet){
    this.pets = this.pets.filter((pet) => pet.code !== codePet);
}

readPets(){
    return this.pets;
}

editPet(updatedPet){
    const petIndex = this.pets.findIndex((pet) => pet.code === updatedPet.code);
    if (petIndex !== -1){
        this.pets[petIndex] = updatedPet;
    }
}
}