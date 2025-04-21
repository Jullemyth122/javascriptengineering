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

            // this.tail.next = node;
            // this.tail.prev = node;
            // this.tail = node;

            let prev = this.head;
            while(prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }

        this.size++;

    }

    prepend(data) {
        const node = new Node(data)

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {

            // Doubly linked list
            // this.head.prev = node;

            node.next = this.head

            this.head = node;

        }
    }

    hasIntersection(link1, link2) {
        if(link1.intersection(link2)) {
            const t = link1.intersection(link2)
            if(t.size > 0) {
                // console.log(t)
                return link1.intersection(link2)
            }
        }
    }

    venDiagram(node = this.head) {

        let curr1 = node;
        let ven_count = 0;
        
        while(curr1.next != null) {
            let curr2 = node;

            while(curr2.next != null) {
                let nigga = this.hasIntersection(curr1.data, curr2.next.data)
                if(nigga) {
                    console.log(curr1.data, curr2.next.data,nigga)
                    ven_count += 1
                }

                curr2 = curr2.next
            }
            node = node.next;
            curr1 = curr1.next;
        }

        // while(curr.next != null) {

        //     let nigga = this.hasIntersection(curr.data, curr.next.data)
        //     // console.log(nigga) 
        //     if(nigga) {
        //         ven_count += 1
        //     }
        //     curr = curr.next
        // }

        if(ven_count > 0) {
            return console.log(ven_count)
        }
        

        return false
    }

    buildIntersections() {
        const elementMap = new Map()
        const indexToNode = [];
        let node = this.head, idx = 0;
        while(node) {
            indexToNode[idx] = node;

            for(let x of node.data) {
                if(!elementMap.has(x)){
                    elementMap.set(x, [])
                };
                elementMap.get(x).push(idx)
            }

            node = node.next;
            idx++;
        }

        const intersections = new Map() 

        for(const [x, listIdxs] of elementMap.entries()) {
            // console.log(x, listIdxs)
            for (let a = 0; a < listIdxs.length; a++) {
                for (let b = a + 1; b < listIdxs.length; b++) {
                    const key = `${listIdxs[a]},${listIdxs[b]}`;
                    console.log(key)
                    if (!intersections.has(key)) intersections.set(key, new Set());
                    intersections.get(key).add(x);
                }
            }   
        }

        console.log(intersections)
        console.log(elementMap)

        const result = [];
        for (const [key, shared] of intersections.entries()) {
            const [i, j] = key.split(',').map(Number);
            result.push({
                nodeA: indexToNode[i],
                nodeB: indexToNode[j],
                sharedElements: shared
            });
        }

        return console.log(result, result.length);

    }

    printSets(node = this.head, level = 0 ,prefix = "---> ") {
        // console.log(node.data.values())
        // for(let value of node.data.values()) {
        //     console.log(value);
        // }
        let str = "";
        if (node.next != null) {
            // console.log(node.next);
            for(let value of node.data.values()) {
                str += value + " ";
            }
            if(level > 0) {
                console.log(" ".repeat(level*4) + str + prefix );
            } else {
                console.log(" ".repeat(level*4) + str + prefix  );
            } 
            
            if (node.next == null) {
                this.printSets(node, level+1, "---> null", );
            } else if (node.next) {
                this.printSets(node.next, level+1, "---> ", );
            } 
        } 
        else if (node.next == null) {
            for(let value of node.data.values()) {
                str += value + " ";
            }
            console.log(" ".repeat(level*4) + str + '----> null'  );
        }
    }

    
}


let linkedlist = new LinkedList();

// linkedlist.head = new Node( new Set([1, 10, 16]) )
linkedlist.prepend(new Set([1, 10, 16, 19]))
linkedlist.prepend(new Set([17, 19, 13, 21]))
linkedlist.prepend(new Set([21, 7, 6, 19]))
linkedlist.prepend(new Set([99, 3, 21, 19]))
linkedlist.prepend(new Set([18, 19, 2, ]))
linkedlist.prepend(new Set([99, 1, 100, 19 ,17]))
linkedlist.prepend(new Set([]))

// console.log(linkedlist.head)

linkedlist.printSets()

// linkedlist.venDiagram()
linkedlist.buildIntersections()