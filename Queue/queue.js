class Queue {
    constructor (collection) {
        this.collection = collection;
    }

    // shows the queue
    print() {
        console.log(this.collection);
    }

    // Add another element of the queue
    enqueue(element) {
        this.collection.push(element);
    }

    dequeue() {
        return this.collection.shift();
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

let queue = new Queue(collection);


queue.enqueue('ab');
queue.enqueue('bc');
queue.enqueue('cd');

queue.print();
queue.dequeue();
console.log(queue.front());
queue.print();