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

const preorder = <T>(root: Node<T> | null) => {

    //This is the edge case where we handle the empty input.
    if (!root) return -1;

    /*
    Because we need a starting point, we can store the root node in the stack 
    so that we can access the left and right nodes later.
    */
    const stack: Array<Node<T>> | null = new Array();
    stack.push(root);

    /*
    This loop runs until the stack is empty, which takes O(n) time.
   We push each element into the newly created stack after looping through each element.
    */
    while (stack.length) {

        const curr = stack[stack.length - 1];
        console.log(curr.data);
        stack.pop();

        /*
        Because stacks adhere to the FILO principle, 
        we must insert the right before the left because trees are always searched from left to right.
        */
        if (curr.right) {
            stack.push(curr.right);
        }

        if (curr.left) {
            stack.push(curr.left);
        }

    }
}

const root: Node<number> | null = new Node<number>(1);
root.left = new Node<number>(2);
root.left.left = new Node<number>(4);
root.left.right = new Node<number>(5);

root.right = new Node<number>(3);
root.right.left = new Node<number>(6);
root.right.right = new Node<number>(7);

preorder(root)
export { };


// Time Complexity  O(n), Since we traversing through all the node
//Space Complexity O(n), Since we create a stack 