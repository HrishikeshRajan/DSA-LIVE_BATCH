class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtFront(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      //if already exist create new node again
      const node = new Node(data);
      //copy and paste the address of starting node from head pointer
      node.next = this.head;
      //update the head pointer with new node address
      this.head = node;
    }
  }

  print(head) {
    let current = head||this.head;
    if (current) {
      while (current) {
        console.log(current.data);
        current = current.next;
      }
      return "Printing completed successfully";
    }
    return "Error: There is no linked list available.";
  }

  printHead() {
    return this.head;
  }

  deleteNodeOnPos(position) {
    if(position<1){
        return 'Inavalid option'
      }
       const dummyNode = new Node(0);

        dummyNode.next = this.head;

    let hare = dummyNode;
    let tortoise = dummyNode;
    
    //Here the hare pointer first move to position + 1th index
    for (let i = 1; i <= position + 1; i++) {
      hare = hare.next;
    }

    //Here the tortoise start from the starting index
    /* when the hare pointer reaches the end, the tortoise pointer will be in the position just before the
      specified position. So by doing tortoise.next.next will skip the postion where we want to delete and
      over write the next.next node address with the next node address stored in tortoise.next
      */
    while (hare) {
      hare = hare.next;
      tortoise = tortoise.next;
    }

    tortoise.next = tortoise.next.next;
   return dummyNode.next;
  }
}

const obj = new LinkedList();
obj.insertAtFront(9);
obj.insertAtFront(8);
obj.insertAtFront(7);
obj.insertAtFront(6);
obj.insertAtFront(5);
obj.insertAtFront(4);
obj.insertAtFront(3);
obj.insertAtFront(2);
obj.insertAtFront(1);

const result = obj.deleteNodeOnPos(1);
obj.print(result);

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%-- Time and Space Complexity --%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

/*

    Time Complexity for insertion = O (1)
    Space Complexity for insertion = O (n) --> Number of node increase with number of data

    Time Complexity for Delete nth node from linked list = O (n) --> Since we iterate till the last node
    Space Complexity for  Delete nth node from linked list  = O (1)



*/
