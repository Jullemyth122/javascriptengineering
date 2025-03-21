class Node {
    constructor(data, x_ = null, y_ = null, z_ = null) {
        this.data = data;
        this.x_ = x_;
        this.y_ = y_;
        this.z_ = z_;

    }

}

class BST {
    constructor() {
        this.root = null
    }

    add(data) {
        const node = new this.root;

        if (node == null) {
            this.root = new Node(data);
            return
        } else {
            const searchTree = function(node) {

                if(node.x_ && node.y != null ) {
                    if (data > node.x_ && data > node.y_) {
                        if (node.z_ == null) {
                            node.z_ = new Node(data);
                            return;
                        } 
                        if(node.z_ != null) {
                            return searchTree(node.z_);
                        }
                    }
                    // return searchTree()
                } 
                
                if (data < node.data) {
                    if(node.x_ == null) {
                        node.x_ = new Node(data);
                        return;
                    }
                    if(node.x_ != null) {
                        return searchTree(node.x_);
                    }
                } 
                else if ( data > node.data) {
                    if(node.y_ == null) {
                        node.y_ = new Node(data);
                        return;
                    }
                    if(node.y_ != null) {
                        return searchTree(node.y_);
                    }
                } else {
                    return null;
                }

                // else if ( node.z_ == null ) {
                //     node.z_ = new Node(data);
                //     return node;

                // }

            }

            return searchTree(node);
        }
    }

    printTree(node = this.root, level = 0, prefix = "") {
        if (node !== null) {
            console.log(" ".repeat(level * 4) + prefix + node.data);
            if (node.x_ || node.y_ || node.z_) {
                this.printTree(node.x_, level+1, "X--- ");
                this.printTree(node.y_, level+1, "Y--- ");
                this.printTree(node.z_, level+1, "Y--- ");
            }
        }
    }

}


const bst = new BST();

bst.add(10);
bst.add(3);
bst.add(7);
// bst.add(9);
// bst.add(11);
// bst.add(10);
// bst.add(13);
// bst.add(7);
// bst.add(8);
// bst.add(1);
// bst.add(0);

// bst.remove(4)


console.log(bst.printTree);

// console.log(bst.findMax());
// console.log(bst.findMax());
// console.log(bst.isPresent(4));
// console.log(bst.isPresent(7));
// console.log(bst.root);