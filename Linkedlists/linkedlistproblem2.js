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

    targetLoop(k) {
        if (!this.head || k <= 0) return; // nothing to do

        let tail = this.head;
        let size = 1;
        let j = 17;
        while(tail.next) {
            tail = tail.next;
            size++;
        }

        k = k % size;
        if (k === 0) return; // no rotation needed

        const recursion = (head, k) => {
            if(k > 1) {
                // console.log(head);
                k--;
                return recursion(head.next, k);
            } else {
                return head.next;
            }
        }


        // tail.next = this.head.next.next.next;
        tail.next = recursion(this.head, k);

        // while(j > 0) {
        //     tail = tail.next;
        //     console.log(tail);
        //     j--;
        // }

    }

    detectorLoop(head = this.head) {
        let set = new Set();

        while(head !== null) {
            if(set.has(head)) {
                for(let i = 0; i < set.size; i++) {
                    // console.log(set.)
                    const arrayFromSet = [...set];
                    if (arrayFromSet[i] == head) {
                        return console.log(`Index Detect Loop ${i}`,true);
                    }
                }
            } 

            set.add(head);
            head = head.next;

        } 
        return console.log(`No Loop Detected`,false);
    }

    // Delete Nodes after M nodes of a linkedlist
    NodeDeleteM_N(head, m, n) {

        if (m > this.size || n > this.size || m + n > this.size) { 
            return console.log("Out of Bounds");
        }

        // M is the steps and N is the next step that will be deleted
        let curr = head;
        let count = 0;
        let size = this.size;
        const n_constant = n

        // console.log(m % (count + 1))

        // const recursion = (head, n) => {
        //     if(n > 0) {
        //         // console.log(head);
        //         n--;
        //         return recursion(head.next, n);
        //     } else {
        //         return head.next;
        //     }
        // }

        // this.head = recursion(this.head, m, n, count)

        while(size) {
            n = n_constant
            count += 1;

            // console.log(curr,"--- 1");
            if (count % m == 0) {
                // console.log(curr)
                while(n > 0)     {
                    curr.next = curr.next.next;
                    // console.log(curr,"--- 2");
                    n--;
                }
                // console.log(curr);
                // curr.next = 
                // console.log("Out", m, count);    

            }

            if(curr.next == null) {
                break;
            }
            curr = curr.next;
            size--;

        }
    }

    MergeLinkedtoLinked(node1 , node2) {

        let n1 = node1.head;
        let n2 = node2.head;

        let newLink1 = new LinkedList();
        let newLink2 = new LinkedList();

        let limit = 0;
        let curr1 = n1;
        let curr2 = n2;
    
        while(curr1.next) {
            if(limit > 3) {
                limit = 3;
                break;
            }
            curr1 = curr1.next;
            limit +=1;
        }
        
        while(curr2.next) {
            if(limit > 3) {
                limit = 3;
                break;
            }
            curr2 = curr2.next;
            limit +=1;
        }

        curr1 = n1;
        curr2 = n2;

        for (let i = 0; i < limit; i++) {

            newLink1.append(curr1.value);
            newLink1.append(curr2.value);


            if(curr1.next) {
                curr1 = curr1.next;
            }
            if(curr2.next) {
                curr2 = curr2.next;
            }

        }

        let size1 = node1.size - (limit);
        let size2 = node2.size - (limit);
        
        while( size1 > size2 ? size1 : size2 ) {

            if (size1 > 0) {
                newLink2.append(curr1.value);

                if (curr1.next) {
                    curr1 = curr1.next;
                }
            } 
            if (size2 > 0) {
                newLink2.append(curr2.value);

                if(curr2.next) {
                    curr2 = curr2.next;
                }

            }
            

            size1--; size2--;
        }

        return [newLink1,newLink2]
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

}

let link = new LinkedList();
let link2 = new LinkedList();

link.prepend(3, false);
link.prepend(10, false);
link.prepend(5, false);
link.prepend(8, false);
link.prepend(17, true);
link.prepend(11, false);
link.prepend(15, false);
// link.prepend(21, false);
// link.prepend(1, false);

// link2.prepend(21, false);
// link2.prepend(25, false);
link2.prepend(18, false);
link2.prepend(7, false);
link2.prepend(9, false);

// link.targetLoop(4);

// link.detectorLoop();
link.printNode1()
// link.NodeDeleteM_N(link.head, 2, 1)

let result1 = link2.MergeLinkedtoLinked(link2, link)[0];
let result2 = link2.MergeLinkedtoLinked(link2, link)[1];

result1.printNode1();
result2.printNode1();