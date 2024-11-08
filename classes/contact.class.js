// let contact = [];

// class Contact extends Person {
//     Alter;
//     Augenfarbe;

//     constructor(firstNameParam, lastNameParam, ageParam, eyeColorParam) {
//         super(firstNameParam, lastNameParam);
//         this.Alter = ageParam;
//         this.Augenfarbe =  eyeColorParam;
//     }

//     showFullName() {
//         console.log(`Das ist der ${this.Vorname} ${this.Nachname} und er ist ${this.Alter} Jahre jung.`);
//     }
// }

// function addContact(ageParam, eyeColorParam) {
//     let myFriends = new Contact(ageParam, eyeColorParam)
//     contact.push(myFriends);
// }

// addContact('Peter', 'Meier', 33, 'Blau')

// let contacts = [];

// // die class Contact bedient sich aus der "Mutter"-class Person
// class Contact extends Person {
//   Alter;
//   Adresse;
//   Stadt;

//   constructor(firstNameParam, lastNameParam, ageParam, adressParam, cityParam) {
//     super(firstNameParam, lastNameParam);
//     this.Alter = ageParam;
//     this.Adresse = adressParam;
//     this.Stadt = cityParam;
//   }

//   showFullName() {
//     console.log(
//       `Das ist der ${this.Vorname} ${this.Nachname} aus ${this.Stadt}`
//     );
//   }
// }

// function addContact(firstNameParam, lastNameParam, ageParam, adressParam, cityParam)
// {
//   let myContact = new Contact( firstNameParam, lastNameParam, ageParam, adressParam, cityParam);
//   contacts.push(myContact);
//   console.log(myContact);
//   myContact.showFullName();
//   //   debugger;
// }

// addContact("Gabriel", "Mali", 33, "Spielstraße", "Rodgau");
// addContact("Peter", "Maffay", 22, "Maffayweg", "Bebra");



let contacts = [];

class Contact extends Person {
    vorname;
    nachname;
    alter;
    ort;

    constructor(firstNameParam, lastNameParam, ageParam, adressParam) {
        super(firstNameParam, lastNameParam, ageParam, adressParam);
        this.alter = ageParam;
        this.ort = adressParam;
    }

    showFullName() {
        console.log(`Das ist ${this.vorname} ${this.nachname} aus ${this.ort}. Er/Sie ist ${this.alter} Jahre jung.`);
    }
}

function addContact(firstNameParam, lastNameParam, ageParam, adressParam) {
    let myContact = new Contact(firstNameParam, lastNameParam, ageParam, adressParam);
    contacts.push(myContact);
}

addContact('Peter', 'Maier', 22, 'Berlin');
addContact('Maria', 'Hammer', 40, 'Hamburg');