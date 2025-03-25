class Node {
    constructor(value) {
        this.value = value
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        // this.tail = null;
        this.size = 0;
    }


    isEmpty() {
        if (this.head == null) return true;
        return false;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {

            node.next = this.head;
            
            // Doubly linked list
            this.head.prev = node;
            // this.head.next = node;
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
            this.tail.prev = node;
            this.tail = node;

        }
        this.size++;
    }

    getMid(head) {

        let curr1 = head;
        let curr2 = head;
        let ct = 0;

        while(curr1) {
            curr1 = curr1.next;
            ct += 1;
        }

        if (ct % 2 == 0) {
            ct = Math.ceil(ct / 2);
        } else {
            ct = Math.ceil(ct / 2) - 1;
        }

        while(ct) {
            curr2 = curr2.next;
            ct--;
        }

        // console.log(ct);
        return console.log(curr2);
    }

    getMidDelete(head = this.head) {

        let curr1 = head;
        let curr2 = head;
        let ct = 0;
        let rc = 0;

        while(curr1) {
            curr1 = curr1.next;
            ct += 1;
        }
        rc = ct;
        ct = Math.floor(ct / 2);

        // if (ct % 2 == 0) {
        //     ct = Math.ceil(ct / 2);
        // } else {
        //     ct = Math.ceil(ct / 2) - 1;
        // }
        
        while(ct) {

            if(ct == 1) {
                curr2.next = curr2.next.next;
            } else {
                curr2 = curr2.next;
            }
            ct--;
        }   

    }

    removeAllDuplicates() {



        const callBack = (curr) => {
            if (curr && curr.next && curr.value === curr.next.value) {
                return callBack(curr.next);
            } else {
                return curr;
            }
        }        

        this.head = callBack(this.head);
        let curr = this.head;


        while (curr.next) {

            const loopHole = callBack(curr.next);

            if (loopHole != undefined) {
                curr.next = loopHole;
            }   

            // curr = callBack(curr.next) != undefined && callBack(curr.next);
            // if(curr?.value == curr.next?.value) {
            //     curr.next = curr.next.next;
            //     console.log("Duplicates Detected", curr.value, curr.next.value)
            // } else {
            //     console.log("pass")
            // }

            curr = curr.next;
        }

        return this.head;
        // console.log(curr);

    }

    reverse(head = this.head) {
        if(this.getSize() == 1) {
            return this.head
        } 

        // let prev = null;
        // let curr1 = head;

        const origHead = this.head;
        // this.tail.next = null;
        // this.tail.prev = null;
        // Doubly linked list
        let temp = null;
        let curr1 = head;

        while(curr1) {

            // let next = curr1.next;
            // curr1.next = prev;
            // prev = curr1;
            // curr1 = next;

            // doubly linked list

            temp = curr1.prev;

            curr1.prev = curr1.next;

            curr1.next = temp;

            curr1 = curr1.prev;
        }


        // doubly linked list
        if(temp) {
            this.head = temp.prev;     
        }
        this.tail = origHead;

        // this.head = prev;

    }

    // Singly LinkedList
    rotateLeft(k) {
        if (!this.head || k <= 0) return; // nothing to do

        // 1. Compute the length and get the tail
        let tail = this.head;
        let size = 1;
        while (tail.next) {
            tail = tail.next;
            size++;
        }

        // 2. Compute effective rotations (if k is larger than size)
        k = k % size;
        if (k === 0) return; // no rotation needed

        // 3. Make the list circular
        tail.next = this.head;

        // 4. Traverse to the new tail (the kth node from the beginning)
        let newTail = this.head;
        for (let i = 0; i < k - 1; i++) {
            newTail = newTail.next;
        }

        console.log(newTail.next);
        
        // newTail.next = new Node(newTail.value + 1);

        // New head is next of newTail
        let newHead = newTail.next;

        // 5. Break the circle and update head pointer
        newTail.next = null;
        this.head = newHead;

    }

    rotateRight(k) {
        if (!this.head || k <= 0) return; // nothing to do

        // 1. Compute the length and get the tail.
        let tail = this.head;
        let size = 1;
        while (tail.next) {
            tail = tail.next;
            size++;
        }

        // 2. Compute effective rotations.
        k = k % size;
        if (k === 0) return;

        // 3. Make the list circular.
        tail.next = this.head;
        // If using a doubly linked list, update head.prev too:
        this.head.prev = tail;

        // 4. Find the new tail: it's at position (size - k - 1) from the beginning.
        let newTail = this.head;
        for (let i = 0; i < size - k - 1; i++) {
            newTail = newTail.next;
        }
        // 5. The new head is next of the new tail.
        let newHead = newTail.next;

        // 6. Break the circle.
        newTail.next = null;
        if (newHead) {
            newHead.prev = null;
        }

        // 7. Update head and tail pointers.
        this.head = newHead;
        this.tail = newTail;
    }

    circleInsertion(value,idx) {
        if (!this.head || idx <= 0) return; // nothing to do

        let tail = this.head;
        let size = 1;
        while(tail.next) {
            tail = tail.next;
            size++;
        }


        // 2. Compute effective rotations (if k is larger than size)
        idx = idx % size;
        const node = new Node(value);
        if (idx === 0) {
            node.next = this.head;
            this.head = node;
        } else {            
            let curr = this.head;

            for (let i = 0; i < idx - 1 ; i++) {
                curr = curr.next;
            }

            node.next = curr.next;
            curr.next = node;

        } 
        tail.next = null;
        // this.head = node;
        this.size++;

    }   



    printNode1(node = this.head, level = 0, prefix1 = "--->") {
        // console.log(node.next);
        if (node.next != null) {
            // console.log(node.next);
            if(level > 0) {
                console.log(" ".repeat(level*4) + node.value + prefix1 );
            } else {
                console.log(" ".repeat(level*4) + node.value + prefix1  );
            } 
            
            if (node.next == null) {
                this.printNode1(node, level+1, "---> null", );
            } else if (node.next) {
                this.printNode1(node.next, level+1, "---> ", );
            } 
        } 
        else if (node.next == null) {
            console.log(" ".repeat(level*4) + node.value + '----> null'  );
        }
    }

    printReverse(node = this.tail, level = 0, prefix1 = "null<----") {
        if (node != null) {
            if(level > 0) {
                console.log(" ".repeat(level*4 + 5) + prefix1 + node.value );
            } else {
                console.log(" ".repeat(level*4) + prefix1 + node.value );
            }
            if (node.prev) {
                this.printReverse(node.prev, level+1, "<---- ", );
            }
        }
    }

    printList(node) {
        let result = '';
        while (node !== null) {
            result += node.data + ' ';
            node = node.next;
        }
        console.log(result.trim());
    }
        
}


let link = new LinkedList();



link.prepend(3);
link.prepend(4);
link.prepend(5);
link.prepend(6);
link.prepend(7);
link.prepend(8);
link.prepend(9);


// link.printNode1();

// console.log( 7 % 5);

// console.log(link.rotate(link.head,5));
// link.rotateRight(8)
// link.rotateLeft(7)
// link.printNode1();
// link.printReverse();

// link.circleInsertion(12,9);

link.printNode1();

link.removeAllDuplicates()

// link.printReverse();

// // link.getMid(link.head)
// link.getMidDelete(link.head)
// link.getMidDelete(link.head)

link.printNode1();

// console.log(lin)
// console.log(link.tail)
// link.getMid(link.head)