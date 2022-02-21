import { DataModel, addModel, removeModel } from "../apps/DataManager.js";

test("addModel", () => {
    // 新規作成時はID=0になる
    var modelArray = []
    modelArray = addModel(modelArray)
    expect(modelArray.length).toBe(1);
    var model = modelArray.slice(-1)[0]
    expect(model.id).toBe(0);
    expect(model.getName()).toBe("Model 0");

    // 続けて作成した時はIDは次の値(=1)になる
    modelArray = addModel(modelArray)
    expect(modelArray.length).toBe(2);
    var model = modelArray.slice(-1)[0]
    expect(model.id).toBe(1);

    // 歯抜けでIDが登録されていても最後のModelのIDに続く値が設定される
    var modelArray = [new DataModel(1), new DataModel(5)]
    modelArray = addModel(modelArray)
    expect(modelArray.length).toBe(3);
    var model = modelArray.slice(-1)[0]
    expect(model.id).toBe(6);

    // IDが昇順で並んでいなくても最後のModelのIDに続く値が設定される
    var modelArray = [new DataModel(100), new DataModel(110), new DataModel(3)]
    modelArray = addModel(modelArray)
    expect(modelArray.length).toBe(4);
    var model = modelArray.slice(-1)[0]
    expect(model.id).toBe(4);
});

test("removeModel", () => {
    var modelArray = [new DataModel(1), new DataModel(2), new DataModel(3)]
    modelArray = removeModel(modelArray, new DataModel(2))
    expect(modelArray.length).toBe(2);
    expect(modelArray[0].id).toBe(1);
    expect(modelArray[1].id).toBe(3);

    // 存在しないModelを指定したときは何も削除されない
    modelArray = removeModel(modelArray, new DataModel(100))
    expect(modelArray.length).toBe(2);
    expect(modelArray[0].id).toBe(1);
    expect(modelArray[1].id).toBe(3);

    // Arrayが空の時は何も削除されない
    modelArray = removeModel([], new DataModel(100))
    expect(modelArray.length).toBe(0);
});
