class Node<N>{
    public data: N;
    public left: Node<N> | null;
    public right: Node<N> | null;

    constructor(data: N) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const postorder = <T>(root: Node<T> | null) => {
    if (!root) return -1;
    //Two arrays are created which costs O(n) + O (n) time complexity
    const stack_1: Array<Node<T>> | null = new Array();
    const stack_2: Array<T> | null = new Array();

    let curr: Node<T> | null = root;
    stack_1.push(root);
  //This loop runs until stack is empty which takes O(n) time complexity
    //Since we loop through each element, then we push them into the newly created stack
    while (stack_1.length) {

         curr  = stack_1[stack_1.length-1];
         stack_1.pop();
         stack_2.push(curr.data);

        if (curr.left) {
            stack_1.push(curr.left);
        }
        if(curr.right){

            stack_1.push(curr.right);
        }
    }

    // This loop also works for order of O(N)
    while(stack_2.length){
        console.log(stack_2[stack_2.length-1]);
        stack_2.pop();
    }


}

const root: Node<number> | null = new Node<number>(1);
root.left = new Node<number>(2);
root.left.left = new Node<number>(4);
root.left.right = new Node<number>(5);

root.right = new Node<number>(3);
root.right.left = new Node<number>(6);
root.right.right = new Node<number>(7);

postorder(root)
export { }


// Time Complexity  = O (n) +  O(n) => O (n), Since we traversing through all the node
//Space Complexity = O(n) + O (n) => O(n), Since we create a stack 