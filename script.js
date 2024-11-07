let contacts = [];

// Das hier beschreibt wie ein Objekt aussehen soll.
// Vorlage
// Schablone
class Contact {
  Vorname;
  Nachname;
  Alter;
  Adresse;
}

function addContact(firstName, lastName, age, adress) {
  let myContact = new Contact();
  myContact["Vorname"] = firstName;
  myContact["Nachname"] = lastName;
  myContact["Alter"] = age;
  myContact["Adresse"] = adress;
  contacts.push(myContact);
  //   debugger;
}

addContact("Gabriel", "Mali", 33, "Spielstraße");
addContact("Peter", "Maffay", 22, "Maffayweg");

let zoo = [];

class Zebra {
  Größe;
  Alter;
}

function addZebra(size, age) {
  let newZebra = new Zebra();
  newZebra["Größe"] = size;
  newZebra["Alter"] = age;
  zoo.push(newZebra);
}

addZebra("2,20m", "7 Years");
// console.log(zoo);


//


// let cars = [];

// class Car {
//   brand;
//   model;
//   hp;

//   constructor(brand, model, hp){
//     this.brand = brand;
//     this.model = model;
//     this.hp = hp;
//     console.log('You got a new connection, G!');
    
//   }
// }

// function addCars(brand, model, hp) {
//   let newCars = new Car(brand, model, hp);
//   cars.push(newCars);
// //   console.log(newCars);
// }

// addCars("BMW", "540i e39", 286);
// addCars("BMW", "530d e39", 193);
// addCars("BMW", "M3 e46", 343);








let cars = [];

// class bedeutet soviel wie "Anleitung"
class Car {
    // eigenschaften die wir zwingend benötigen/haben wollen
    brand;
    series;
    hp;

    // der constructor ist sowas wie ein klugscheisser der genau weiß wie das zu erledigen ist. er merkt sich die infos und gibt sie weiter
    constructor(brandParam, seriesParam, hpParam){
        this.brand = brandParam;
        this.series = seriesParam;
        this.hp = hpParam;
    }
}

function addCars(brandParam, seriesParam, hpParam){
    let newCars = new Car(brandParam, seriesParam, hpParam)
    cars.push(newCars)
    console.log(newCars);
}

addCars('BMW', '530D', 193)
addCars('Benz', 'S600', 500)









let schuhe = [];

class eigenschaften {
    material;
    farbe;

    constructor(material, farbe) {
        this.material = material;
        this.farbe = farbe;
    }
}

function addShoes(material, farbe) {
    let myDeichmann = new eigenschaften(material, farbe);
    schuhe.push(myDeichmann);
    console.log(myDeichmann);
}

addShoes('leder', 'AllBlackEverythaaaang')