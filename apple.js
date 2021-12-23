class Apple {
    _weight;
    _name;

    constructor() {
        this._weight = 10;
        this._name = 'Apple';
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get weight() {
        return this._weight;
    }



    decrease() {
        this._weight -= 1;
    }

    isEmpty() {
        return this._weight <= 0;
    }
}