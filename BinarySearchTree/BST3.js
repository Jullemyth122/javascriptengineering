class Node { 
    constructor(data, left = null, right = null) {
        this.data = data;
        this.right = right;
        this.left = left;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }


    add(data) {
        const node = this.root
        if (node == null) {
            this.root = new Node(data);
            return ;
        } else {
            const searchTree = (node) => {
                if (data <= node.data) {
                    if (node.left == null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left != null) {
                        return searchTree(node.left);
                    }
                } else if (data >= node.data) {
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

    findLowest() {
        const currentData = this.root;

        while(currentData.left != null) {
            currentData = currentData.left;
        }

        return currentData;
    }

    findHighest() {
        const currentData = this.root;

        while(currentData.right != null) {
            currentData = currentData.right;
        }

        return currentData;
    }
    
    findTargetAndHeightAndNode(target) {
        let currentData = this.root;
        let height = 0;
        let node = "";

        while (currentData !== null) {
            if (currentData.data === target) {

                if(height === 0) {
                    return [currentData, height, "Parent Node"]
                }
                
                return [currentData, height, node];
            }
            if (target < currentData.data) {
                currentData = currentData.left;
                node += "left :";
            } else {
                currentData = currentData.right;
                node += "right :";

            }
            height += 1;
        }

        return null; 
    }

    findWidthTree() {
        if (!this.root) return 0;
        
        let minHD = Infinity, maxHD = -Infinity;
        let queue = [{ node: this.root, hd: 0 }];
        
        while (queue.length) {
            let { node, hd } = queue.shift();

            // Update the boundaries.
            minHD = Math.min(minHD, hd);
            maxHD = Math.max(maxHD, hd);
            
            if (node.left)  queue.push({ node: node.left,  hd: hd - 1 });
            if (node.right) queue.push({ node: node.right, hd: hd + 1 });
        }
        
        return ["Max horizontal trees from subtrees",maxHD - minHD + 1];
    }

    findHeightTree(node = this.root) {

        if (node === null) {
            return -1;
        }


        let leftHeight = this.findHeightTree(node.left);
        let rightHeight = this.findHeightTree(node.right);
        
        return Math.max(leftHeight, rightHeight) + 1;       

    }

    swapNodes(root, value1, value2) {
        function findNodeAndParent(node, value) {
            let parent = null;
            let current = node;
            while (current !== null && current.data !== value) {
                parent = current;
                current = value < current.data ? current.left : current.right;
            }
            return { node: current, parent };
        }
        
        function isAncestor(ancestor, node) {
            if (ancestor == null) return false;
            if (ancestor === node) return true;
            return isAncestor(ancestor.left, node) || isAncestor(ancestor.right, node);
        }
        
        const { node: node1, parent: parent1 } = findNodeAndParent(root, value1);
        const { node: node2, parent: parent2 } = findNodeAndParent(root, value2);
        
        if (!node1 || !node2) {
            console.error("One of the target nodes was not found.");
            return root;
        }
        
        // Check for ancestor/descendant relationship.
        if (isAncestor(node1, node2) || isAncestor(node2, node1)) {
            console.error("Swapping nodes when one is an ancestor of the other is not supported in this implementation.");
            return root;
        }
        
        if (parent1) {
            if (parent1.left === node1) {
                parent1.left = node2;
            } else {
                parent1.right = node2;
            }
        } else {
            // node1 was the root.
            root = node2;
        }
        
        if (parent2) {
            if (parent2.left === node2) {
                parent2.left = node1;
            } else {
                parent2.right = node1;
            }
        } else {
            // node2 was the root.
            root = node1;
        }
        

        return root;
    }




    printTree(node = this.root, level = 0, prefix = "") {
        if (node !== null) {
            // console.log(level,prefix, node.data)
            console.log(" ".repeat(level * 4) + prefix + node.data);
            if (node.left || node.right) {
                this.printTree(node.left, level+1, "L--- ");
                this.printTree(node.right, level+1, "R--- ");
            }
        }
    }




}


const tree = new BinarySearchTree();

let parents = tree.add(50);

let child = tree.add(61);
tree.add(31);
tree.add(15);
tree.add(16);
tree.add(51);
tree.add(76);
tree.add(73);
tree.add(78);
tree.add(20);
// tree.add(52);
// tree.add(53);
// tree.add(54);
// tree.add(55);
// tree.add(56);
// tree.add(57);
// tree.add(58);



// console.log(tree.printTree());
// console.log(tree.findTargetAndHeightAndNode(20))
// console.log("Max height of the tree from subtrees", tree.findHeightTree())
console.log(tree.printTree());
// console.log(tree.findWidthTree());
// console.log(tree.findExchangeBruteForce([16,61]))
// tree.root = tree.swapNodes(tree.root, 73, 16);
// tree.root = tree.swapNodes(tree.root, 16, 61);
tree.root = tree.swapNodes(tree.root, 76, 16);
console.log("'Brute Force Exchange'")
console.log(tree.printTree());

