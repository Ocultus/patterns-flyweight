import {Tree} from "./Tree";
import {TreeFactory} from "./TreeFactory";
import {TreeType} from "./TreeType";

const factory: TreeFactory = new TreeFactory([
    {"x": 2, "y": 4},
    {"x": 12, "y": 40},
    {"x": 32, "y": 14},
    {"x": 6, "y": 1}
    ])

function addTreeToDatabase(state: any, factory: TreeFactory,  treeType:TreeType) {
    const tree : Tree = factory.getTree(state)
    console.log('Add tree to db')
    tree.printState(treeType)
}

addTreeToDatabase({"x": 20, "y": 40}, factory, new TreeType('tree', 'red', 'leaf'))

factory.listTree()
