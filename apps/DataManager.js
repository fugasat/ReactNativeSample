export class DataModel {
    constructor(id) {
        this.id = id
    }

    getName() {
        return "Model " + this.id
    }
}

export const addModel = (modelArray) => {
    let id
    console.log(`modelArray length : ${modelArray.length}`)
    if (modelArray.length == 0) {
        id = 0
    } else {
        id = modelArray.slice(-1)[0].id + 1
    }
    let newModel = new DataModel(id)
    console.log(`new model : ${newModel.getName()}`)
    return [...modelArray, newModel]
}

export const removeModel = (modelArray, removeModel) => {
    return modelArray.filter(model => model.id !== removeModel.id);
}
