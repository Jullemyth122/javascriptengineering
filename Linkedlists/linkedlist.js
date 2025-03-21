class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        // this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }


    // O(1) because you directing to the head instantly input at a constant time.
    prepend(value) {
        const node = new Node(value);

        if(this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.size++;

    }
    
    // O(n) because you are indexing in each node for null before proceeding..
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

    insert(value,index) {
        if(index < 0 || index > this.size) {
            return
        }

        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);

            let prev = this.head;

            for(let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
        }
        
        this.size++;
    }

    delIndex(index) {
        if(this.size < 0) {
            return console.log("Out of bounds");
        }
        if(index < 0 || index > this.size) {
            return console.log("Out of Bounds");
        }
        if (index === 0) {
            this.head = this.head.next;
            this.size--;
        } else {

            let previous = null;
            let current = this.head;


            for(let i = 0; i < index; i++) {
                // Last node that was targeted..
                previous = current;
                current = current.next;

            }

            previous.next = current.next;
            current.next = null;

            this.size--;


        }
    }

    delIndexSteps(count, steps) {

        if(this.size < 0) {
            return console.log("Out of bounds");
        }
        if(count * steps < 0 || count * steps > this.size) {
            return console.log("Out of Bounds");
        }
        if (steps === 0) {
            while (count > 0 && this.size > 0) {
                this.head = this.head.next;
                this.size--;
                count--;
                
            }
        } else {

            for (let i = 0; i < count; i++) {
                // If list has become empty during deletions, break out.
                if (this.size === 0) {
                    console.log("List is empty");
                    break;
                }
                
                // Calculate the intended index using your logic,
                // then adjust it to be within bounds using modulo.
                let targetIndex = (steps * (i + 1)) % this.size;
                
                // In case targetIndex is 0, that means deleting the head.
                if (targetIndex === 0) {
                    const nodeToDelete = this.head;
                    this.head = nodeToDelete.next;
                    nodeToDelete.next = null;
                    this.size--;
                } else {
                    let previous = null;
                    let current = this.head;
                    // Move to the targetIndex-th node
                    for (let j = 0; j < targetIndex; j++) {
                        previous = current;
                        current = current.next;
                    }
                    // Delete the target node
                    previous.next = current.next;
                    current.next = null;
                    this.size--;
                }
            }
        }
    }

    searchLinkList(value) {
        if(this.isEmpty()) {
            return -1
        }

        let i = 0;
        let curr = this.head;

        while(curr) {
            if(curr.value === value) {
                return i
            }
            curr = curr.next
            i++;
        }

        return -1

    }

    // prev = null, curr = 10(this.head), next = 20(curr.next), curr.next = null(10), prev = curr(this.head); curr = next(20)
    // next = 25(curr.next), curr.next = curr(this.head), prev = curr, curr = next(25); if end this.head = curr; 
    // 
    reverse() {
        let prev = null 
        let curr = this.head

        while(curr) {
            // Carries the next current value
            let next = curr.next;

            // this one reverses the arrow on the opposite side of where
            // the previous value is was placed. 
            curr.next = prev

            // this basically caries the head until in the end of the loop.
            prev = curr;

            
            curr = next;
        }


        this.head = prev
    }
 
    printNode1(node = this.head, level = 0, prefix = "") {
        if (node != null) {
            console.log(" ".repeat(level*4) + prefix + node.value);
            if (node.next) {
                this.printNode1(node.next, level+1, "---> ");
            }
        }
    }

    printNode() {
        if (this.isEmpty()) {
            console.log("List Empty");
        }
        else {
            let curr = this.head;
            let listValues = '';

            while (curr) {
                listValues += `${curr.value} `;
                curr = curr.next;
            }

            console.log(listValues);
        }
    }
}

const link = new LinkedList();

// link.prepend(11);
// link.prepend(21);
// link.prepend(50);
// link.printNode();

// link.prepend(100);
// link.printNode();
// link.printNode1();

link.append(10)
link.append(20)
link.append(25)
// link.append(18)
// link.append(55)
// link.append(12)
// link.append(7)
// link.append(23)
// link.append(25)
// link.append(11)
// link.insert(35,3)

link.printNode1(); 

// link.delIndex(0)
// link.delIndex(0)
// link.delIndex(0)
// link.delIndex(0)
// link.delIndex(0)
// link.delIndex(0)
// link.delIndex(0)

// link.delIndex(2)

// how many count of steps and step number.
// link.delIndexSteps(5, 2);


// link.printNode1();
link.reverse();
link.printNode1();
link.reverse();
link.printNode1();
