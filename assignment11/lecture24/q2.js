class Stack{

    constructor(){
        this.stack = [];
        this.size =0;
    }



    push(data){
        this.stack[this.size] = data;
        this.size++;
    }

    pop(){
        this.size--;
        return this.stack.pop();
    }

    peek(){
        return this.stack[0]
    }

    isEmpty(){
        return this.size > 0? false:true;
    }

}

class StackTemp{

    constructor(){
        this.stack = [];
        this.size =0;
    }



    push(data){
        this.stack[this.size] = data;
        this.size++;
    }

    pop(){
        this.size--;
        return this.stack.pop();
    }

    peek(){
        return this.stack[0]
    }

    isEmpty(){
        return this.size > 0? false:true;
    }

}


class Queue{
    constructor(){
        this.stack = new Stack();
        this.tempStack = new StackTemp();
    }

    //The queue enqueue method used here push data into a queue using an stack.push process.
    // The time Complexity for this is O(1)
    enQueue(data){
        this.stack.push(data);
    }

        /* 
The deQueue method behaves similarly to the pop process in a stack. The logic is that we pop the stack n-1 times, or until the second last element is copied to the temporary queue.
After removing the last element from the main queue separately, we copy back all the elements by repeating the push process.
   
Time Complexity = O(n). Because both run parallely
*/

    deQueue(){

        let counter = 0;

         let num = this.stack.size;
        while(counter<num-1){
            const item = this.stack.pop()
            this.tempStack.push(item)
            counter++;
        }
       const item =  this.stack.pop();

        let counter2 = 0;
        let num2 = this.tempStack.size;
        while(counter2<num2){
            const item = this.tempStack.pop()
            this.stack.push(item)
            counter2++;
        }


     return item;

    }


    peek(){
      return this.stack.peek();
    }

    isEmpty(){
        return this.stack.isEmpty();
    }

}


const queue = new Queue();

queue.enQueue(10)
queue.enQueue(20)
queue.enQueue(30)
queue.enQueue(40)
queue.enQueue(50)
queue.enQueue(60)


queue.deQueue()

queue.p