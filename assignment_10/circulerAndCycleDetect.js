/*

  * General Node Structure

*/

class Nodes {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/*

    This is where all the methods where written

*/
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert method just insert the node behind the previous node, It's just like a queue
  // The last inserted node where the head pointer will be pointing

  insert(data) {
    let node = new Nodes(data);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  //This prints the node, Just starting from the head pointer
  // each time node.next is assigned to the current, so when it reaches the last node, node.next will be null,
  // hence the loop breaks
  // The optional node as arument is only usefull if we required to reverse the linked list

  print() {
    let current = this.head;
    if (current) {
      while (current) {
        console.log(current.data);
        current = current.next;
      }
      return 'Printing completed successfully'
    } 
    return 'Error: There is no linked list available.';
  }

  getHead() {
    return this.head;
  }

  convertCirculer() {
    if (this.head === null) {
      return 'Error : There is no linked list available.';
    } else if (this.head.next === null) {
      return 'Error: Only one node is present, conversion failed';
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = this.head;

      this.head = current;
    }
    return 'Conversion from linear to circular has been completed successfully';
  }

  detectCycle() {
    if (this.head === null) {
        return 'Error : There is no linked list available.';
    } else {
      let tortoise = this.head;
      let hare = this.head;

      while (tortoise && hare && hare.next) {
        tortoise = tortoise.next;
        hare = hare.next.next;

        if (tortoise == hare) {
    
            return 'Cycle detected successfully';
        }
      }

     
    }
    return 'No cyle detected';
  }
}

const obj = new LinkedList();

obj.insert(10);
obj.insert(20);
obj.insert(30);
obj.insert(40);
obj.insert(50);
obj.insert(60);
obj.insert(70);
obj.insert(80);
obj.insert(90);
obj.insert(100);

const result = obj.convertCirculer();
console.log(result)

//Please uncomment this line to print the linked list
// obj.print();

const cycle = obj.detectCycle();
console.log(cycle)


/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%-- Time and Space Complexity --%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

/*

    Time Complexity for insertion = O (1)
    Space Complexity for insertion = O (n) --> Number of node increase with number of data

    Time Complexity for circular linked list = O (n) --> Since we iterate till the last node
    Space Complexity for circular linked list = O (1)

    Time Complexity for detectingCycle = O (n) --> Since we iterate through all node in the linked list
    Space Complexity for detectingCycle = O (1)


*/ 