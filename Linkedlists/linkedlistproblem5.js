class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
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

    prepend(value, status) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
            // this.tail = node;
        } else {

            node.next = this.head;
            
            // Doubly linked list
            // this.head.prev = node;
            // this.head.next = node;
            this.head = node;

        }
        this.size++;
    }    

    append(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }

        this.size++;

    }

    // divideNodesModulo(node = this.head) {
    deleteNodesEvery2Steps(node = this.head) {

        // Check if the list is empty or has only one node.
        if (!node) return;
        if (!node.next) {
            node = null;
            return;
        }
        
        node = node.next;

        // console.log(node);
        let curr = node;
        
        while (curr && curr.next) {

            // Delete the node next by the second next node.
            curr.next = curr.next.next;

            // Moves to the every 2 step of nodes.
            curr = curr.next.next;
            
            console.log(curr);
        }
        

    }

    HighestNodePairWise(head) {

        // If the list is empty, return null.
        if (!head) return null;
        // If there is only one node, that node is the highest.
        if (!head.next) return head;

        while (head && head.next) {
            let dummy = { value: -Infinity, next: null };

            let tail = dummy;
            let current = head;
            
            while (current) {
                let winner = current; // assume current node wins by default
                
                if (current.next) {
                    // Compare with its pair.

                    if (current.next.value > current.value) {
                        winner = current.next;
                    }

                    // Move past the pair.
                    current = current.next.next;
                } else {

                    // Only if there is an odd.
                    current = current.next;
                }
                
                tail.next = winner;
                tail = tail.next;

                tail.next = null;
            }
            
            head = dummy.next;
        }
        
        //head is the highest node.
        return head;
    }


    printNode(node = this.head, level = 0, prefix = "--->") {
        if(node.next != null) {
            console.log(" ".repeat(level * 4) + node.value + prefix );

            this.printNode(node.next, level + 1, prefix = "--->")
        } else if (node.next == null) {
            console.log(" ".repeat(level * 4) + node.value + "---> null" );

        }
    }

    printNode2(node = this.head, level = 0, prefix = "--->") {
        if(node.next != null) {

            // console.log( node.value % 2,node.value % node.next.value);
            
            if(node.value % 2 == 0) {
                const t = node.value % node.next.value;
                console.log(" ".repeat(level * 4) + t + prefix );
            } else {
                console.log(" ".repeat(level * 4) + node.value + prefix );

            }

            this.printNode2(node.next, level + 1, prefix = "--->")
        } else if (node.next == null) {
            console.log(" ".repeat(level * 4) + node.value + "---> null" );

        }
    }

}

let link1 = new LinkedList();
let link2 = new LinkedList();

link1.append(40);
link1.append(15);
link1.append(27);
link1.append(8);
link1.append(37);
link1.append(1);
link1.append(4);
link1.append(16);
link1.append(50);
link1.append(23);
// link1.append(25);

// link2.append(23);

// link1.printNode()
// link1.printNode2()
link1.printNode()

// link1.deleteNodesEvery2Steps()
console.log(link1.HighestNodePairWise(link1.head))

// link1.printNode()




