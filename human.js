class Human {
    _name;
    _gender;
    _weight;
    _speech;

    constructor(name, gender, weight) {
        this._name = name;
        this._gender = gender;
        this._weight = weight;
        this._speech = `${this._name} says: Hello. My name is ${this._name}. I am a ${this._gender}.`;
    }

    isMale() {
        return this._gender.toLowerCase() === 'male';
    }

    checkApple(apple) {
        return !apple.isEmpty();
    }

    eatApple(apple) {
        if (this.checkApple(apple)) {
            document.write(`${this._name} eats apple.<br>`);
            apple.decrease();
            this.weight += 1;
        }
    }

    talk() {
        document.write(`${this._speech}<br>`)
    }


    get speech() {
        return this._speech;
    }

    set speech(value) {
        this._speech = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }
}