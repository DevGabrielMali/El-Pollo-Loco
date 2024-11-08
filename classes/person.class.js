class Person {
    //diese informationen will ich immer haben. Das sind die Grunddaten in meiner "Mutter"-class
    Vorname;
    Nachname;

    constructor(firstNameParam, lastNameParam) {
        this.Vorname = firstNameParam;
        this.Nachname = lastNameParam;
    }
    showFullName() {
        console.log(`Das ist ${this.Vorname} ${this.Nachname} aus ${this.ort}. Er/Sie ist ${this.alter} Jahre jung.`);
    }
}

