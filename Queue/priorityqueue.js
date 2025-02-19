class PriorityQueue {
    constructor(collection) {
        this.collection = collection;
    }

    printCollection() {
        console.log(this.collection);
    }

    enqueue(value) {
        if(this.isEmpty()) {
            this.collection.push(value);
        }
        else {
            var added = false;
            for (var i = 0; i < this.collection.length; i++) {
                if(value[1] < this.collection[i][1]) {
                    this.collection.splice(i,0, value);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.collection.push(value);
            }
        }
    }

    dequeue() {
        var value = this.collection.shift();
        // console.log(value);
        // console.log(this.collection);
        return value[0];
    } 

    // Prints the front of the queue
    front() {
        return this.collection[0];
    }

    // Return the length of the queue
    size() {
        return this.collection.length;
    }

    // Prints if the queue is empty
    isEmpty() {
        return this.collection.length === 0;
    }

}



var collection = [];

let q = new PriorityQueue(collection);


q.enqueue(['ab', 6]);
q.enqueue(['bc',2]);
q.enqueue(['da',1]);
q.enqueue(['cd',11]);

q.printCollection();
console.log(q.front());
q.printCollection();
q.dequeue();
console.log(q.front());

