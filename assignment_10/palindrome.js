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

  getHead() {
    return this.head;
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
    }

    return pre;
  }

  //Here compare the data  of original linked list and reversed linked list in a linear way
  isPalindrome(head, rHead) {
    let curr1 = head;
    let curr2 = rHead;
    if (head && !rHead) {
      return true;
    }

    if (curr1.data !== curr2.data) {
      return false;
    }

    //Updating both linked lists
    curr1 = curr1.next;
    curr2 = curr2.next;

    return true;
  }
}

//Automated function for bulk data insertion
function insertData(obj, nums) {
  for (let i = 0; i < nums.length; i++) {
    obj.insert(nums[i]);
  }
}

function checkPalindrome(nums) {
  const obj = new LinkedList();

  insertData(obj, nums);

  const head = obj.getHead();
  const nodes = obj.reverse();

  let result;

  if (typeof nodes !== "string") {
    result = obj.isPalindrome(head, nodes);
  } else {
    result = obj.isPalindrome(head, null);
  }
  return result;
}

const nums = [10, 20, 30, 20, 10];
console.log(checkPalindrome(nums));

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%-- Time and Space Complexity --%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

/*

    Time Complexity for insertion = O (1)
    Space Complexity for insertion = O (n) --> Number of node increase with number of data


    Time Complexity for reversing linked list = O (n) --> Since we iterate through all node in the linked list
    Space Complexity for reversing linked list = O (1)

    Time Complexity for palindrome  = O (n) --> Since we iterate through all node of both linked lists
    Space Complexity for reversing linked list = O (1)

*/
