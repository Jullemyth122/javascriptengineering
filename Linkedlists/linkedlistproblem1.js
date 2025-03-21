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

    rotate(head = this.head) {
                               
    }


    printNode1(node = this.head, level = 0, prefix1 = "") {
        if (node != null) {
            console.log(" ".repeat(level*4)+ node.value + prefix1 );
            if (node.next) {
                this.printNode1(node.next, level+1, "---> ", );
            }
        }
    }
}


let link = new LinkedList();

link.prepend(13);
link.prepend(21);
link.prepend(33);
link.prepend(11);
link.prepend(18);
link.prepend(55);
link.prepend(41);
link.prepend(25);
// link.prepend(27);

link.printNode1();


// console.log(link.head)
// console.log(link.tail)
// link.getMid(link.head)