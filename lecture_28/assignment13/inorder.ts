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


const inorder = <T>(root: Node<T> | null) => {
        //This is the edge case where we handle the empty input.
    if (!root) return -1;
    const stack: Array<Node<T>> | null = new Array();

    let curr: Node<T> | null = root;

    while (stack.length || curr != null) {

        //Here we keep on pushing the left node into the stack
        if (curr) {
            stack.push(curr);
            curr = curr.left;
        } else {
            // When the left become null, then it takes the node from the stack and look for the existance of right node
            const temp: Node<T> | null = stack[stack.length - 1];
            console.log(temp.data);
            stack.pop();
            curr = temp.right;
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

inorder(root)
export { }

// Time Complexity  O(n), Since we traversing through all the node
//Space Complexity O(n), Since we create a stack 