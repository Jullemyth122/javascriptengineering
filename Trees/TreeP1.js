class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(child) {
        const node = child instanceof Node ? child : new Node(child); 
        this.children.push(node)
        return node;
    }

    removeChild(predicated) {
        this.children = this.children.filter((child) => !predicated(child));
    }

    find(predicate) {
        if (predicate(this)) return this;
        for (const child of this.children) {
            const found = child.find(predicate);
            if (found) return found;
        }
        return null;
    }

    // traverse the subtree in pre-order, calling fn(node) on each
    traverse(fn) {
        fn(this);
            for (const child of this.children) {
            child.traverse(fn);
        }
    }

}


class GenericTree {
    constructor(rootValue) {
        this.root = new Node(rootValue)
    }

    add(value, parentPredicate = node => node == this.root) {
        const parent = this.root.find(parentPredicate);
        if(!parent) throw new Error("Parent not found");
        return parent.addChild(value);
    }


    remove(predicate) {
        // remove matching nodes anywhere in the tree (except the root)
        this.root.traverse(node => {
            node.removeChild(predicate);
        });
    }

    find(predicate) {
        return this.root.find(predicate);
    }

    traverse(fn) {
        this.root.traverse(fn);
    }

    printTree(node = this.root, prefix = "", isTail = true, depth = 0) {
        // decide whether (and which) branch glyph to show
        const pointer = depth === 0
        ? ""               // root: no branch glyph
        : (isTail ? "└─ " : "├─ ");

        console.log(prefix + pointer + node.value);

        // build the prefix for *my* children:
        //  ├─ has a continuing │   above it, so keep “│   ”
        //  └─ is last, so keep only spaces “    ”
        const childPrefix = prefix + (isTail ? "    " : "│   ");

        node.children.forEach((child, i) => {
            const last = i === node.children.length - 1;
            this.printTree(child, childPrefix, last, depth + 1);
        });
    }

}


const tree = new GenericTree(25);
const n25 = tree.root
const n24 = tree.add(24);
n24.addChild(36)
n24.addChild(11)
n24.addChild(15)

// const n15 = tree.add(100, node => node.value == 25 );
const n15 = tree.add(100, node => node.value == 15);// └─100

n15.addChild(66);
n15.addChild(77);
n15.addChild(92);

const n36 = tree.add(37, node => node.value == 36)
n36.addChild("Please")
n36.addChild("Ohmyghad")
n36.addChild("Daddy")

// tree.remove(node => node.value === 100);
// n24.removeChild(child => child.value == 100)

// tree.traverse(node => console.log(node.value));
tree.printTree();


