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

    MergeLinkedtoLinked(node1, node2) {
        // 21, 18, 9, 3
        let temp1 = node1;

        // 15,11,17,8,5,10,3,10
        let temp2 = node2;

        while (temp1 != null && temp2 != null) {
            
            // console.log(temp1,temp2, "----")

            let m1 = temp1.next; 
            let m2 = temp2.next;

            temp2.next = temp1.next;
            
            temp1.next = temp2;
            // console.log(m1,m2, "////")

            temp1 = m1;
            temp2 = m2;

            
        }

        // console.log(node1.head,temp2);

        return [node1, temp2];
    }

    SortALinkedList2(node = this.head) {
        // Sort A given the linked list of 0's, 1's and 2's

        let ctn = []; //
        
        for(let i = 0; i < this.size; i++) {
            ctn.push(0)
        }
        // let cnt = [[0, 1],[0, 2],[0, 3]]; //
        let curr = node;

        while(curr != null) {
            ctn[curr.value] += 1;
            curr = curr.next; 
        } 

        curr = node;
        let idx = 0;

        while(curr != null) {

            if(ctn[idx] == 0){
                idx += 1;
            } else {

                curr.value = idx;
                ctn[idx] -= 1; 
                curr = curr.next;
            }

            // curr = curr.next;
        }


    }

    MergeTwoSortedLinkedList(node1, node2) {
        let l1 = node1.head;
        let l2 = node2.head;

        let dummy = { value: 0, next:null }

        let tail = dummy;

        while (l1 && l2) {

            // Checks which two nodes which 
            // are higher value then proceeds to
            // next node of which node is lower.

            if(l1.value <= l2.value) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next; 
            }
            
            tail = tail.next;
            // console.log(tail, l1, l2);

        }

        tail.next = l1 || l2;

        return dummy.next;

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

    printNode2(node, level = 0, prefix1 = "--->") {
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

let link1 = new LinkedList();
let link2 = new LinkedList();

link1.prepend(40);
link1.prepend(15);
link1.prepend(10);
link1.prepend(5);

link2.prepend(20);
link2.prepend(3);
link2.prepend(2);

link1.printNode1();
link2.printNode1();


let result = link2.MergeTwoSortedLinkedList(link1, link2);

link2.printNode2(result);

