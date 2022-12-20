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
    return true;
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
      return "Printing completed successfully";
    }
    return "Error: There is no linked list available.";
  }

  //Reverse logic
  // We have three pointer, pre , curr, next
  reverse() {
    let pre = null;
    let curr = this.head;
    let next = null;

    if (this.head === null) {
      return "Error : There is no linked list available.";
    } else if (this.head.next === null) {
      return `Error: Only one node is present, reversing failed`;
    } else {
      while (curr) {
        // In this step we assign next with next node, so that even the link breaks, still we can
        // reconnect the broken link with this
        next = curr.next;

        //Here is the reversing part, the first node is now pointing to the null
        // Consider that now, there are only one node exist in the chain, since the link is broken
        //So now we need to reconnect the chain
        curr.next = pre;

        //So we update the pre postion to the current node position
        pre = curr;

        // this is similar like increment opertion in loops, current now point to the first node of the
        // rest of the broken chain
        curr = next;
        //Now the process repeats
      }
      //Here we assign the head point with pre to update the head pointer with new start location
      this.head = pre;
    }
  }
}

const obj = new LinkedList();

obj.insert(10);
// obj.insert(20);
// obj.insert(30);
// obj.insert(40);

const nodes = obj.reverse();
console.log(nodes)

const show = obj.print();
console.log(show)


/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%-- Time and Space Complexity --%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

/*

    Time Complexity for insertion = O (1)
    Space Complexity for insertion = O (n) --> Number of node increase with number of data

     Time Complexity for reversing linked list = O (n) --> Since we iterate through all node in the linked list
    Space Complexity for reversing linked list = O (1)




*/ 