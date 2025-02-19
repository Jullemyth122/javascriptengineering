class Stacks {
    constructor(word) {
        // First example
        this.word = word;
        this.letters = [];
        this.rwords = "";

        // Second example
        this.count = 0;
        this.storage = {};
        
    }
    stack(value) {
        // First Example
        // for (let index = 0; index < word.length; index++) {
        //     const element = word[index];
        //     this.letters.push(element);
        // } 
        
        // return this.letters
        
        // Second Example
        this.storage[this.count] = value;
        this.count++;



    }

    pop() {
        // First example
        // for (let index = 0; index < word.length; index++) {
        //     this.rwords += this.letters.pop();
            
        // }
        // return this.rwords
    
        // Second Example

        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;

    }

    // Second Example
    size() {
        return this.count;
    }
    
    peek() {
        // Second Exmaple;
        return this.storage[this.count-1];
    }

    length() {

    }

}

// First Example
// const word = "jetskies"

// const newStack = new Stacks(word);

// console.log(newStack.stack())
// console.log(newStack.pop())

// Second Example
var myStack = new Stacks();

myStack.stack(1);
myStack.stack(2);
myStack.stack(4);

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

myStack.stack("freeCoders")
console.log(myStack.size());
console.log(myStack.peek());