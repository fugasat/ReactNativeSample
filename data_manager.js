export class DataModel {
    constructor(id) {
        this.id = id
    }

    getName() {
        return "Model " + this.id
    }
}
export default class DataManager {
    // constructor() {
    //     this.itemArray = []
    // }

    constructor(modelArray) {
        if (modelArray) {
            this.modelArray = modelArray
        } else {
            this.modelArray = []
        }
    }

    addModel() {
        let id
        if (this.modelArray.length == 0) {
            id = 0
        } else {
            id = this.modelArray.slice(-1)[0].id + 1
        }
        this.modelArray.push(new DataModel(id))
    }

    removeModel(index) {
        if (this.modelArray.length > index) {
            this.modelArray.splice(index, 1)
        }
    }
}

export const createModel = (modelArray) => {
    let id
    console.log(`modelArray length : ${modelArray.length}`)
    if (modelArray.length == 0) {
        id = 0
    } else {
        id = modelArray.slice(-1)[0].id + 1
    }
    let newModel = new DataModel(id)
    console.log(`new model : ${newModel.getName()}`)
    return newModel
  }

