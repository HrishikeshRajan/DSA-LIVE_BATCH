
class Node{

    constructor(data){
        this.data = data;
        this.next=null;
    }
}


class LinkedList {

    constructor(){
        this.head = null;
    }


    insertAtFront(data){
        if(!this.head){
            this.head = new Node(data);
        }else{
            //if already exist create new node again
            const node = new Node(data);
            //copy and paste the address of starting node from head pointer
             node.next = this.head;
             //update the head pointer with new node address
             this.head = node;
        }
       
      
    }

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

    printHead(){
        return this.head;
    }


    // Here we used three pointers count0, count1 and count2
    sort(){
        let curr = this.head;

        let count0 =0;
        let count1 = 0;
        let count2 = 0;

        //This loop counts how many items for each
        while(curr){

            if(curr.data === 0){
                count0++;
            }else if(curr.data === 1){
                count1++
            }else{
                count2++;
            }

            curr =curr.next;
        }


        let temp =this.head;

        //This loop fill the new linked list with same elements based of the counter values
        while(temp){
            if(count0>0){
                temp.data = 0;
                count0--;
            }else if(count1 >0){
                temp.data = 1
                count1--;
            }else{
                temp.data = 2;
                count2--;
            }

            temp = temp.next;
        }

        return this.head;

    }
    
}

const obj = new LinkedList()
obj.insertAtFront(2);
obj.insertAtFront(1)
obj.insertAtFront(2)
obj.insertAtFront(0)
obj.insertAtFront(1)
obj.insertAtFront(0);


const sort = obj.sort();
obj.print(sort)




/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%-- Time and Space Complexity --%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

/*

    Time Complexity for insertion = O (1)
    Space Complexity for insertion = O (n) --> Number of node increase with number of data

    Time Complexity for sort linked list = O (n) --> Since we iterate till the last node
    Space Complexity for circular linked list = O (n) --> Since we created new linked list


*/ 