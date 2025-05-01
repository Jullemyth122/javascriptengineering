// ---------------------------------
// 1) A minimal doubly-linked list
// ---------------------------------
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  
  // O(1) append to tail
  append(data) {
    const node = new Node(data);
    if (!this.head) this.head = this.tail = node;
    else {
      node.prev      = this.tail;
      this.tail.next = node;
      this.tail      = node;
    }
    this.size++;
    return node;
  }
  
  // O(1) insert AFTER a known node
  insertAfter(node, data) {
    const newNode = new Node(data);
    newNode.prev = node;
    newNode.next = node.next;
    if (node.next) node.next.prev = newNode;
    else            this.tail       = newNode;
    node.next = newNode;
    this.size++;
    return newNode;
  }
}

// ---------------------------------
// 2) Benchmark harness
// ---------------------------------
function benchmarkInsertAtMiddle(N) {
  // --- SETUP LINKED LIST ---
  const ll = new LinkedList();
  // pre-populate so size is >> 0 and “middle” makes sense
  for (let i = 0; i < N; i++) {
    // keep appending at tail (O(1))
    ll.append(i);
  }
  
  // pick the “middle” node reference once:
  let mid = ll.head;
  for (let i = 0; i < Math.floor(N/2); i++) {
    mid = mid.next;
  }
  
  // --- LINKED LIST INSERT BENCHMARK ---
  console.time('LinkedList.insertAfter 100k');
  for (let i = 0; i < 100000; i++) {
    // this is pure O(1) pointer relink
    mid = ll.insertAfter(mid, -i);
  }
  console.timeEnd('LinkedList.insertAfter 100k');

  // --- SETUP ARRAY ---
  const arr = [];
  for (let i = 0; i < N; i++) {
    arr.push(i);
  }

  // pick middle index once:
  const midIndex = Math.floor(arr.length/2);

  // --- ARRAY INSERT BENCHMARK ---
  console.time('Array.splice middle 100k');
  for (let i = 0; i < 100000; i++) {
    // O(n) shift each time!
    arr.splice(midIndex, 0, -i);
  }
  console.timeEnd('Array.splice middle 100k');
}

// run it
benchmarkInsertAtMiddle(200000);
