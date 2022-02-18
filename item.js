export default class Item {
    constructor(id) {
        this.id = id
    }

    getName() {
        return "item:" + this.id
    }
}