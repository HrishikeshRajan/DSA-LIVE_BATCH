class Queue{

    constructor(){
        this.queue = [];
        this.size = 0;
    }



    enQueue(data){
        this.queue[this.size] = data;
        this.size++;
    }


    deQueue(){
        this.size--;
        return this.queue.shift();

    }

    peek(){
        return this.queue[this.size-1];
    }
    isEmpty(){
        return (this.size > 0? false: true);
    }

}


class Queue2{

    constructor(){
        this.queue = [];
        this.size = 0;
    }



    enQueue(data){
        this.queue[this.size] = data;
        this.size++;
    }


    deQueue(){
        this.size--;
        return this.queue.shift();

    }

    peek(){
        return this.queue[this.size-1];
    }

  
   
}





class Stack{


    constructor(){
        this.queue1 = new Queue();
        this.queue2 = new Queue2();
    }

    //The stack push method used here pushes data into a queue using an enQueue process.
    // The time Complexity for this is O(1)
    push(data){

         this.queue1.enQueue(data);
    }

    /* 
The pop method behaves similarly to the deQueue process in a queue. The logic is that we dequeue the queue n-1 times, or until the second last element is copied to the temporary queue.
After removing the last element from the main queue separately, we copy back all the elements by repeating the enqueue process.
   
Time Complexity = O(n). Because both run parallely
*/

    pop(){

        let counter = 0;

        let num = this.queue1.size;

        while(counter< num-1){
           const item =  this.queue1.deQueue();
           this.queue2.enQueue(item);
           counter++;         

        }
        const item = this.queue1.deQueue();

        let counter2 =0;

        let num2 = this.queue2.size;
        while(counter2< num2){
            const item =  this.queue2.deQueue();
            this.queue1.enQueue(item);
            counter2++;     
        }

        return item;

    }   

    //This just return the top element
    top(){
     return this.queue1.peek();
    }

    print(){
        console.log(this.queue1);
    }


    //This just check the queue is empty 
   isEmpty(){
    return this.queue1.isEmpty();
   }

}



const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);


stack.pop()

stack.print()

const num = stack.isEmpty()
console.log(num)



// Time Complexity 

