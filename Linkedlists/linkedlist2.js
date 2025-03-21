class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        if (value instanceof Node) {
            // Recursively process the rest of the chain first.
            if (value.next) {
                this.prepend(value.next);
            }
            // Then insert the current node.
            const node = new Node(value.value);
            node.next = this.head;
            this.head = node;
            this.size++;
            return;
        }

        const node = new Node(value);
        
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else { 
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    removeFromFront() {
        if(this.isEmpty()) {
            return null
        } else {
            this.head = this.head.next;
            this.size--;
            // return value;
        }
    }

    removeFromEnd() {
        if(this.isEmpty()) {
            return null
        } 
        const value = this.tail.value;
        if(this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = this.head;

            while(prev.next != this.tail) {
                prev = prev.next;
            }

            prev.next = null;
            this.tail = prev;
        }
    }

    printNode1(node = this.head, level = 0, prefix = "") {
        if (node != null) {
            console.log(" ".repeat(level*4) + prefix + node.value);
            if (node.next) {
                this.printNode1(node.next, level+1, "---> ");
            }
        }

    }

}


const link1 = new LinkedList();

link1.prepend(11);
link1.prepend(21);
link1.prepend(50);
link1.prepend(19);
link1.prepend(33);
link1.prepend(20);

link1.printNode1(); 

link1.removeFromFront();
link1.removeFromEnd();
// link1.removeFromFront();

link1.printNode1(); 


// const link2 = new LinkedList();

// // link2.head = link1.head;

// link2.printNode1();

// link2.prepend(link1.head)
// link2.prepend(18)
// link2.prepend(55)

// link2.printNode1();

// const link3 = new LinkedList();

// link3.prepend(link2.head)
// link3.prepend(33)
// link3.prepend(28)


// link3.printNode1();
