class Person {
    //diese informationen will ich immer haben. Das sind die Grunddaten in meiner "Mutter"-class
    vorname;
    nachname;

    constructor(firstNameParam, lastNameParam) {
        this.vorname = firstNameParam;
        this.nachname = lastNameParam;
    }
    showFullName() {
        console.log(`Das ist ${this.vorname} ${this.nachname} aus ${this.ort}. Er/Sie ist ${this.alter} Jahre jung.`);
    }
}

