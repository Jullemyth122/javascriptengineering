class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }

}

class LinkedList { 
    constructor() {
        this.head = null;
        this.tail = null
        this.size = 0;
    }

    isEmpty() {
        if (this.head == null) return true;
        return false;
    }

    append(data) {
        const node = new Node(data)

        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {

            this.tail.next = node;
            node.prev       = this.tail;
            this.tail       = node;


            // let prev = this.head;
            // while(prev.next) {
            //     prev = prev.next;
            // }
            // prev.next = node;
        }

        this.size++;

    }


    prepend(data) {
        const node = new Node(data)

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next      = this.head;
            this.head.prev = node;
            this.head      = node;

        }
    }

    sublinkedlistSum(target) {
        let start = this.head;
        let end = this.head;

        let sum = 0;
        let found = -1;


        while(end) {
            sum += end.data;

            while( sum > target && start != end ) {
                sum -= start.data;
                start = start.next
            }

            if(sum == target) {
                return [start, end]
            }

            // sum = 0;
            end = end.next
        }

        return [found]
    }

    sublinkedlistSumReverse(target) {
        let end = this.tail;
        let start = this.tail;

        let sum = 0;
        let found = -1;


        while(start) {
            sum += start.data;


            while( sum > target && end != start ) {
                sum -= end.data;
                end = end.prev
            }

            if(sum == target) {
                return [start, end]
            }

            // sum = 0;
            start = start.prev
        }

        return [found]        
    }


    findMissingValues() {

        let missing = []

        if(!this.head.next && !this.head) return missing;

        let prev = this.head;
        let curr = this.head.next; 

        while(curr) {
            const gap = curr.data - prev.data;

            if(gap > 1) {
                for(let x = prev.data + 1; x < curr.data; x++ ) {
                    missing.push(x);
                }
            }
            prev = curr;
            curr = curr.next;
        }
        
        return missing

    }    


    fillMissingValues() {
        let curr = this.head;

        while(curr.next) {
            let nextNode = curr.next;
            let gap = nextNode.data - curr.data;

            if (gap > 1 ) {
                for(let x = curr.data + 1; x < nextNode.data; x++) {
                    const newNode = new Node(x);

                    newNode.prev = curr;
                    newNode.next = curr.next;

                    curr.next.prev = newNode;
                    curr.next = newNode

                    this.size++;
                    curr = newNode;

                }
            }

            curr = nextNode;
        }
    }


    printNode(node = this.head, level = 0 ,prefix = "---> ") {

        if (node.next != null) {

            if(level > 0) {
                console.log(" ".repeat(level*4) + node.data + prefix );
            } else {
                console.log(" ".repeat(level*4) + node.data + prefix  );
            } 
            
            if (node.next == null) {
                this.printNode(node, level+1, "---> null", );
            } else if (node.next) {
                this.printNode(node.next, level+1, "---> ", );
            } 
        } 
        else if (node.next == null) {
            console.log(" ".repeat(level*4) + node.data + '----> null'  );
        }
    }

}


let linkedlist = new LinkedList();

linkedlist.append(1)
linkedlist.append(2)
linkedlist.append(3)
linkedlist.append(4)
linkedlist.append(5)
linkedlist.append(6)
linkedlist.append(7)
linkedlist.append(8)
linkedlist.append(9)
linkedlist.append(10)
linkedlist.append(19)

console.log(linkedlist.sublinkedlistSum(18))
// linkedlist.printNode()

console.log(linkedlist.sublinkedlistSumReverse(18))
// linkedlist.sublinkedlistSumReverse(18)

linkedlist.printNode()

console.log(`Missing Values in Range ${linkedlist.findMissingValues()}`)

linkedlist.fillMissingValues()

linkedlist.printNode()
