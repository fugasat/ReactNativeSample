import DataManager, { DataModel, createModel } from "../data_manager.js";

test("createModel", () => {
    // 新規作成時はID=0になる
    var modelArray = []
    var model = createModel(modelArray)
    expect(model.id).toBe(0);
    expect(model.getName()).toBe("model:0");
    modelArray = [...modelArray, model] // Reactの手法に沿った形式でmodelを追加

    // 続けて作成した時はIDは次の値(=1)になる
    model = createModel(modelArray)
    expect(model.id).toBe(1);
    expect(model.getName()).toBe("model:1");

    // 歯抜けでIDが登録されていても最後のModelのIDに続く値が設定される
    var modelArray = [new DataModel(1), new DataModel(5)]
    model = createModel(modelArray)
    expect(model.id).toBe(6);
    expect(model.getName()).toBe("model:6");

    // IDが昇順で並んでいなくても最後のModelのIDに続く値が設定される
    var modelArray = [new DataModel(100), new DataModel(110), new DataModel(3)]
    model = createModel(modelArray)
    expect(model.id).toBe(4);
    expect(model.getName()).toBe("model:4");
});


test("model", () => {
    var manager = new DataManager()
    manager.addModel()
    expect(manager.modelArray.length).toBe(1);
    expect(manager.modelArray[0].id).toBe(0);
    expect(manager.modelArray[0].getName()).toBe("model:0");

    manager.addModel()
    expect(manager.modelArray.length).toBe(2);
    expect(manager.modelArray[1].id).toBe(1);
    expect(manager.modelArray[1].getName()).toBe("model:1");

    manager.removeModel(0)
    expect(manager.modelArray.length).toBe(1);
    expect(manager.modelArray[0].id).toBe(1);
    expect(manager.modelArray[0].getName()).toBe("model:1");

    manager.addModel()
    expect(manager.modelArray.length).toBe(2);
    expect(manager.modelArray[1].id).toBe(2);
    expect(manager.modelArray[1].getName()).toBe("model:2");
});

test("constructor", () => {
    var manager = new DataManager([new DataModel(0), new DataModel(1), new DataModel(3)])
    expect(manager.modelArray.length).toBe(3);
    expect(manager.modelArray[0].id).toBe(0);
    expect(manager.modelArray[0].getName()).toBe("model:0");
    expect(manager.modelArray[1].id).toBe(1);
    expect(manager.modelArray[1].getName()).toBe("model:1");
    expect(manager.modelArray[2].id).toBe(3);
    expect(manager.modelArray[2].getName()).toBe("model:3");
});
