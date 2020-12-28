import {TreeType} from "./TreeType";

export class Tree{
    private x: number
    private y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    public printState(treeType: TreeType): void {
        const sharedState = JSON.stringify(this.x + " " + this.y)
        const uniqueState = JSON.stringify(treeType)
        console.log(`Tree: Display shared (${sharedState}) and unique (${uniqueState}) state`)
    }

}
