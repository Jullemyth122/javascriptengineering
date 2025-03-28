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

    removeAllDuplicates(node) {

        let curr = node;
        let upload = new LinkedList();

        while (curr && curr.next) {
            upload.prepend(curr.value);
            if (curr.value === curr.next.value) {
                curr.next = curr.next.next;
            } else {
                curr = curr.next;
            }
        }

        // curr = node;
        // console.log(curr,node)
        return upload.head;

    }

    targetLoop(k) {
        if (!this.head || k <= 0) return; // nothing to do

        let tail = this.head;
        let size = 1;
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

        tail.next = recursion(this.head, k);
    }

    removeLoop(head = this.head) {
        let set = new Set();    
        let prev = null;
        while (head != null) {
            if(set.has(head)) {
                console.log(head);
                prev.next = null;
                return;   
            }
            set.add(head);
            prev = head;
            head = head.next;
        }

        
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


    // Pairwise elements in linedlist most likely 
    // have b , a in every pair wherein example...
    // a b c d e f, wherein (a,b), (c,d), (e,f)

    // Now if it doesn't have any pair, in the last line then just do 
    // nothing...

    Pairwise(node) {

        // this.head
        // this.heah.next for swap.
        // this.head.next.next for 2-steps
        let curr = node;

        while(curr != null && curr.next != null) {
            
            let temp1 = curr.next.value;
            curr.next.value = curr.value;
            curr.value = temp1;


            curr = curr.next.next;
        }

        console.log(node);

        return node;
    }

    SortALinkedList(node = this.head) {
        // Sort A given the linked list of 0's, 1's and 2's

        let set = new Set();
        let cnt = [0,0,0]; //
        // let cnt = [[0, 1],[0, 2],[0, 3]]; //
        let curr = node;

        while(curr != null) {
            console.log(curr.value);
            if(0 == curr.value) {
                // cnt[0][0] += 1;
                cnt[0] += 1;
            } 
            else if(1 == curr.value) {
                // cnt[1][0] += 1;
                cnt[1] += 1;
            }
            else if(2 == curr.value) {
                // cnt[2][0] += 1;
                cnt[2] += 1;
            }
            curr = curr.next;
        } 

        curr = node;

        let total = cnt[0] + cnt[1] + cnt[2]
        for(let i = 0; i < total; i++) {
            if (cnt[0] > 0) {
                curr.value = 0;
                cnt[0] -= 1;
            } else {
                if (cnt[1] > 0) {
                    curr.value = 1;
                    cnt[1] -= 1;
                } else {
                    if (cnt[2] > 0) {
                        curr.value = 2;
                        cnt[2] -= 1;
                    }
                }

            }

            curr = curr.next;
        }

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

    SortALinkedList3(head) {
        if (!head || !head.next)
            return head;

        // Create three dummy nodes to point to beginning of
        // three linked lists. These dummy nodes are created to avoid null checks.
        let zeroD = new Node(0);
        let oneD = new Node(0);
        let twoD = new Node(0);

        // Initialize current pointers for three lists
        let zero = zeroD, one = oneD, two = twoD;

        // Traverse list
        let curr = head;
        while (curr) {
            if (curr.value === 0) {

                // If the value of current node is 0,
                // append it to pointer zero and update zero
                zero.next = curr;
                zero = zero.next;
            }
            else if (curr.value === 1) {

                // If the value of current node is 1,
                // append it to pointer one and update one
                one.next = curr;
                one = one.next;
            }
            else {

                // If the value of current node is 2,
                // append it to pointer two and update two
                two.next = curr;
                two = two.next;
            }
            curr = curr.next;
        }

        // Combine the three lists
        zero.next = (oneD.next) ? (oneD.next) : (twoD.next);
        one.next = twoD.next;
        two.next = null;

        // Updated head
        head = zeroD.next;

        return head;
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

let link = new LinkedList();
let link2 = new LinkedList();
let link3 = new LinkedList();
let link4 = new LinkedList();

link3.prepend(6, false);
link3.prepend(3, false);
link3.prepend(9, false);
link3.prepend(11, false);
link3.prepend(0, false);
link3.prepend(6, false);
link3.prepend(11, false);
link3.prepend(7, false);
link3.prepend(11, false);
link3.prepend(44, false);
link3.prepend(77, false);
link3.prepend(58, false);
link3.prepend(40, false);

link2.prepend(10, false);
link2.prepend(3, false);
link2.prepend(10, false);
link2.prepend(5, false);
link2.prepend(8, false);
link2.prepend(17, false);
link2.prepend(11, false);
link2.prepend(15, false);
link2.prepend(1, false);


link.prepend(3, false);
link.prepend(9, false);
link.prepend(18, false);
link.prepend(21, false);

link4.prepend(1,false);
link4.prepend(0,false);
link4.prepend(2,false);
link4.prepend(0,false);
link4.prepend(5,false);
link4.prepend(8,false);
link4.prepend(6,false);
link4.prepend(2,false);
link4.prepend(6,false);
link4.prepend(5,false);
link4.prepend(9,false);
link4.prepend(2,false);
link4.prepend(8,false);
link4.prepend(1,false);
link4.prepend(1,false);

// link2.targetLoop(6);

// link2.detectorLoop();

// link2.removeLoop();

// link.printNode1()
// link.NodeDeleteM_N(link.head, 2, 1)

// let result1 = link2.MergeLinkedtoLinked(link.head, link2.head);

// link.printNode2(result1[0]);
// link.printNode2(result1[1]);

// let result2 = link3.MergeLinkedtoLinked(result1[0], link3.head);

// link.printNode2(result1[0]);

// link.removeAllDuplicates(result1[1]);
// link.printNode2(link.removeAllDuplicates(result1[1]));
// link.printNode2(result1[1]);

// link3.printNode2(result2[0]);
// link3.printNode2(result2[1]);

// let result3 = link3.Pairwise(result2[0])
// link3.printNode2(result3);

// link4.SortALinkedList();
link4.SortALinkedList2();
link4.printNode1();