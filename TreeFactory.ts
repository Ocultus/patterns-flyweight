import {Tree} from "./Tree";

export class TreeFactory{
    private trees: {[key: string]:Tree} = <any>{}
    constructor(initialsTree: any[]) {
        for(const state of initialsTree) {
            this.trees[this.getKey(state)] = new Tree(state.x, state.y)
        }
    }

    private getKey(state: any): string{
        return state.x + " " + state.y
    }

    public getTree(sharedState): Tree{
        const key = this.getKey(sharedState);
        if(!(key in this.trees)){
            console.log('TreeFactory: Сan`t find a tree, creating new one')
            this.trees[key] = new Tree(sharedState.x, sharedState.y)
        }
        console.log('TreeFactory: Reusing existing flyweight.')
        return this.trees[key]

    }

    public listTree(): void {
        console.log(`TreeFactory: I have ${Object.keys(this.trees).length} objects:`)
        Object.keys(this.trees).forEach(value => console.log(value))
    }
}
