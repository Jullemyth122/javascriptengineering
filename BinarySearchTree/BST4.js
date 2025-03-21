class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }   

    add(data) {
        let node = this.root;
        if (node == null) {
            this.root = new Node(data)
        } else {
            const searchTree = (node) => {
                if ( data < node.data ) {
                    if (node.left == null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left != null) {
                        return searchTree(node.left);
                    }
                } else if ( data > node.data ) {
                    if (node.right == null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right != null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            }

            return searchTree(node);
        }
    }

    ClimbNode(target, node = this.root) {
        let result1 = new Array();
        let currentData = node;

        while (currentData !== null) {
            result1.unshift(currentData.data);

            if (currentData.data === target) {
                return result1;
            }
            if (target < currentData.data) {
                currentData = currentData.left;
            } else {
                currentData = currentData.right;
            }
            // height += 1;
        }

        return result1
    }

    bridgeNodes(target1, target2) {
        // Get the upward paths (from the target up to the root).
        // ClimbNode returns an array with the target first and then its ancestors.
        const upwardPath = this.ClimbNode(target1);   // e.g., [10, 20, 37]
        const upwardPath2 = this.ClimbNode(target2);    // e.g., [35, 40, 37]

        // Reverse the second path so it goes from the root downward.
        const downwardPath = [...upwardPath2].reverse(); // e.g., [37, 40, 35]

        // Remove the first element from downwardPath (the common node) to avoid duplication.
        downwardPath.shift(); // removes 37 in our example

        // Combine the upward path (from target1) with the downward path (to target2).
        return upwardPath.concat(downwardPath);
    }



    printTree(node = this.root, level = 0, prefix = "") {
        if (node !== null) {
            console.log(" ".repeat(level * 4) + prefix + node.data);
            if (node.left || node.right) {
                this.printTree(node.left, level + 1, "L--- ");
                this.printTree(node.right, level + 1, "R--- ");
            }
        }
    }


}


const tree = new BST();

const arrays = [10,17,35,51,11,19, 71, 34, 32, 38, 44,55];


function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

let parents = tree.add(37);

let child = tree.add(20);
tree.add(40);

// shuffle(arrays)

arrays.forEach((elem,i) => {
    tree.add(elem);
})

console.log(tree);
console.log(tree.ClimbNode( arrays[0] ))
console.log(tree.bridgeNodes( 55, 19 ))

tree.printTree();