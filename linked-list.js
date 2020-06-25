class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  display() {
    if (this.head === null) {
      return null;
    }
    if (this.head.next === null) {
      return this.head.value;
    }
    let tempNode = this.head;
    while (tempNode.next !== null) {
      console.log(tempNode.value);
      tempNode = tempNode.next;
    }
    console.log(tempNode.value);
  }
  size() {
    let count = 0;
    if (this.head === null) {
      return count;
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        count++;
        tempNode = tempNode.next;
      }
      count++;
      return count;
    }
  }

  insertBefore(item, key) {
    if (this.head === null) {
      this.insertFirst(item);
    } //check if there is one node in the linklist
    else if (this.head.next === null) {
      const newNode = new _Node(item);
      const tempNode = this.head;
      this.head = newNode;
      this.head.next = tempNode;
    } else {
      let currNode = this.head;
      let previousNode = this.head;

      while (currNode !== null && currNode.value !== key) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      const newNode = new _Node(item);
      previousNode.next = newNode;
      newNode.next = currNode;
    }
  }

  //insertAfter
  insertAfter(item, key) {
    if (this.head === null) {
      this.insertFirst(item);
    } else if (this.head.next === null) {
      const newNode = new _Node(item);
      this.head.next = newNode;
    }
  }
  //end

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
             and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }
}

//Apollo, Boomer, Helo, Husker, Starbuck

const main = () => {
  const SLL = new LinkedList();
  SLL.insertLast("Apollo");
  // SLL.insertLast('Boomer')
  // SLL.insertLast('Helo')
  // SLL.insertLast('Husker')
  // SLL.insertLast('Starbuck')
  SLL.display();
  console.log("---------------------------");
  //SLL.insertBefore('Tauhida', 'Husker')
  SLL.insertAfter("Tauhida");
  SLL.display();
  // console.log(SLL)
  console.log("---------------------------");
  // SLL.remove('Husker')
  // SLL.display()
  // console.log(SLL.size())
};

main();
