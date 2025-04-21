class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }


    isEmpty() {
        if(this.head == null) return true
        return false
    }

    prepend(data) {
        const node = new Node(data)
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next       = this.head;
            this.head.prev  = node;
            this.head = node; 
        }
        this.size++;
    }

    append(data) {
        const node = new Node(data)
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {

            this.tail.next = node;
            node.prev      = this.tail
            this.tail      = node; 
        }

        this.size++;
    }

    insert(data, idx) {

        if(idx < 0 || idx > this.size) return "Out of bounds"
        if(idx == 0) {
            this.prepend(data)
        } else if ( idx == this.size ) {
            this.append(data)
        } else {
            const newNode = new Node(data);
            
            console.log(this.size)

            let curr = this.head;

            for(let i = 0; i < idx - 1; i++) {
                curr = curr.next;
            }

            newNode.prev = curr;
            newNode.next = curr.next;

            curr.next.prev = newNode;
            curr.next = newNode


            this.size++;

        }
        
    }

    delNode(idx) {
        if(idx < 0 || idx > this.size) return "Out of bounds"


        // console.log(idx)
        if(idx == 0) {
            const node = this.head;
            // node.prev = 
            
            // this.head = node.next;
            // this.head.prev = node.prev
            // this.size--;

            // Delete head
            this.head = node.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                // List is now empty
                this.tail = null;
            }
            this.size--;


        } else if(idx == this.size) {
            const node = this.tail;
            
            // this.tail = node.prev;
            // this.tail.next = node.next;
            // this.size--;

            this.tail = node.prev;
            if (this.tail) {
                this.tail.next = null;
            } else {
                // List is now empty
                this.head = null;
            }
            this.size--;
            
        } else {

            let curr = this.head;

            for(let i = 0; i < idx; i++) {
                curr = curr.next;
            }

            curr.prev.next = curr.next;
            curr.next.prev = curr.prev;

            // Deleted item got no linked
            curr.next = null;
            curr.prev = null;

            // console.log(curr, this.head);

            this.size--;

            
        }
        
        // console.log(this.head, this.tail)

    }

    isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    fillMissingPrimes() {

        
        let curr = this.head;

        while(curr.next) {
            let nextNode = curr.next;
            let gap = nextNode.data - curr.data;

            if (gap > 1) {
                for (let x = curr.data + 1; x < nextNode.data; x++) {
                    if (this.isPrime(x)) {
                    const newNode = new Node(x);

                    newNode.prev = curr;
                    newNode.next = curr.next;

                    curr.next.prev = newNode;
                    curr.next = newNode;

                    this.size++;
                    curr = newNode; // move curr to the newly inserted node
                    }
                }
            }

            curr = nextNode;
        }
        

    }

    functionPrimeGenerate(limit) {
        if(limit < 2) return [];

        let sieve = Array.from({ length: limit + 1 }, () => true)

        sieve[0] = false;
        sieve[1] = false;

        for(let i = 2; i * i <= limit; i++) {
            // console.log(i, sieve[i])
            if(sieve[i]) {
                // console.log(i,"---")

                // Collects all multiplication tables that is not close or equal to the limit.
                for(let j = i*i; j <= limit ; j+=i ) {
                    // console.log(j)
                    sieve[j] = false;
                }
            }
        }

        let primes = []
        for(let i = 0; i < sieve.length; i++) {
            if(sieve[i] == true) {
                primes.push(i)
            }
        }

        
        const maxPrime = Math.max(...primes);

        for (let i = 0; i < 10; i++) {

            // Filter indices of elements that are NOT the largest
            const candidates = primes
                .map((val, idx) => (val !== maxPrime ? idx : -1))
                .filter(idx => idx !== -1);

            if (candidates.length === 0) break; // nothing left to delete

            // Pick a random index from candidates
            const randomIndex = candidates[Math.floor(Math.random() * candidates.length)];

            // Remove that element
            const j = primes.splice(randomIndex, 1);
            // console.log(j)

        }


        for(let j of primes) {
            this.append(j)        
        }
        console.log(primes)
        // return primes

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

// linkedlist.append(50)
// linkedlist.append(3)
// linkedlist.append(1)

// linkedlist.insert(22, 1)


linkedlist.functionPrimeGenerate(50)

// linkedlist.printNode()

linkedlist.fillMissingPrimes()

linkedlist.printNode()

// linkedlist.delNode(linkedlist.size)
// linkedlist.delNode(linkedlist.size)
// linkedlist.delNode(0)
// linkedlist.delNode(3)
linkedlist.delNode(2)
linkedlist.delNode(3)
linkedlist.delNode(4)
// linkedlist.delNode(1)

linkedlist.printNode()
