class Node {
    constructor(data) {
        this.data = data
        this.children = []
    }

    addChild(child) {
        const node = child instanceof Node ? child : new Node(child)
        this.children.push(node);
        return node;
    }

    randomNodesAddChild(child) {

    }

    removeChild(predicated) {
        this.children = this.children.filter((child) => !predicated(child))
    }

    printChild(node = this.children, prefix = "--->") {
                
        // console.log(node);
        let temp = ""
        node.forEach((child, i) => {
            temp = temp  + child.data + prefix 
        })

        console.log(temp)
    }

    find(predicate, depth = 0) {
        if(predicate(this)) return {  node: this, depth } ;
        for(const child of this.children) {
        
            const found = child.find(predicate, depth + 1);
            
            if(found) return found;
        }

        return null;
    }

    findTwo(predicate1) {
        
    }

}


class GenericTree {
    constructor(rootValue) {
        this.root = new Node(rootValue)
    }

    add(data, parentPredicate = node => node == this.root) {
        const parent = this.root.find(parentPredicate).node;
        if(!parent) throw new Error("Parent Node Not Found");
        
        return parent.addChild(data);
        // this.root.addChild(data)
    }

    addRandom(data) {

    }


    find(predicate) {
        // let depth = 0
        return this.root.find(predicate);
    }
    // remove(predicate) {

    //     this.children
    // }


}

const root = new Node(100);

const firstChild = root.addChild(new Node(55));
const secondChild = root.addChild(new Node(22));
const thirdChild = root.addChild(new Node(77));

firstChild.addChild( new Node(13) );
secondChild.addChild( new Node(18) );
firstChild.addChild( new Node(19) );
firstChild.addChild( new Node(7) );
secondChild.addChild( new Node(1) );
thirdChild.addChild( new Node(99) );

root.children[0].printChild();
root.children[1].printChild();
root.children[2].printChild();

console.log("------")
let tree = new GenericTree(100);
// let tree1 = tree.roo
tree.add(23);
tree.add(53).addChild(6).addChild(33);
tree.add(47).addChild(13).addChild(17);
tree.add(77).addChild(22);
tree.add(37).addChild(53).addChild(211).addChild(19);

let target = 18

console.log(target, tree.find(node => node.data == target) ? tree.find(node => node.data == target) : "No found target"  )

// tree.root.printChild();
