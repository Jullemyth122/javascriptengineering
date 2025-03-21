class Node {
    constructor(value) {
        this.value = value
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        if (this.head == null) return true;
        return false;
    }

    getSize() {
        return this.size;
    }


    // O(1) because you directing to the head instantly input at a constant time.
    prepend(value) {
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

    append(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;

    }

    insert(value,index) {
        if (index < 0 || index > this.size) {
            return false; // Invalid index
        }
        if (index === 0) {
            this.prepend(value);
        return true;
        }
        if (index === this.size) {
            this.append(value);
        return true;
        }   
        const node = new Node(value);
        let current = this.head;

        for(let i = 0; i < index - 1; i++) {
            current = current.next
        }
        node.next = current.next;
        node.prev = current;
        current.next.prev = node;
        current.next = node;

        this.size++;
    }


    delIndex(index) {
        // Check if index is out of bounds
        if (index < 0 || index >= this.size) {
            console.log("Out of bounds");
            return;
        }
        
        // Deleting the first node (head)
        if (index === 0) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                // List is now empty; update tail accordingly
                this.tail = null;
            }
        }
        // Deleting the last node (tail)
        else if (index === this.size - 1) {
            this.tail = this.tail.prev;
            if (this.tail) {
                this.tail.next = null;
            } else {
                // List is now empty; update head accordingly
                this.head = null;
            }
        }

        // Deleting a node in between of head/s and tail/s
        else {
            let current = this.head;
            // Traverse to the node at the specified index
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            // Update pointers of the neighboring nodes
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        
        this.size--;
    }


    search(data) {
        if(this.size < 0) {
            return console.log("Empty search data");
        }
        
    }

    printNode1(node = this.head, level = 0, prefix1 = "", prefix2 = "") {
        if (node != null) {
            console.log(" ".repeat(level*4)+ prefix2 + node.value + prefix1 );
            if (node.next) {
                this.printNode1(node.next, level+1, "---> ", " <---");
            }
        }
    }

}

let link = new DoublyLinkedList();

link.append(10)
link.append(20)
link.append(25)
link.insert(3, 2)
link.insert(15, 1)
link.insert(22, 4)

// link.delIndex(0)
// link.delIndex(0)
// link.delIndex(0)
link.printNode1()