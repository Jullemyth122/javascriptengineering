class Node {
  constructor(value) {
    this.value = value;
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
    
    // Append a new node to the end of the list
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }
  
  // Sets the value of the node at the given index to null (without breaking connections)
    nullifyValueAt(index) {
        if (index < 0 || index >= this.size) {
            console.log("Invalid index for nullification");
            return;
        }
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === index) {
                current.value = null;
                return;
            }
            current = current.next;
            count++;
        }
    }
  
    // Prints the list in order.
    // The format prints a "null" at the beginning (to show the start pointer),
    // followed by each node's value (which can also be null).
    printList() {
        let output = "null";
        let current = this.head;
        while (current) {
            output += " <- " + (current.value === null ? "null" : current.value);
            current = current.next;
        }
        console.log(output);
    }
}

// ----- Example Usage ----- //
const dll = new DoublyLinkedList();
[1, 3, 11, 15, 7, 8, 20].forEach(val => dll.append(val));

console.log("Original list:");
dll.printList(); 
// Expected output: null <- 1 <- 3 <- 11 <- 15 <- 7 <- 8 <- 20

// Set the node with value 11 (at index 2) and node with value 7 (at index 4) to null.
dll.nullifyValueAt(2); 
dll.nullifyValueAt(4);

console.log("\nAfter nullifying specific node values:");
dll.printList(); 
// Expected output: null <- 1 <- 3 <- null <- 15 <- null <- 8 <- 20
