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
const buildHelper = (inorder: number[], preorder: number[], inS: number, inE: number, preS: number, preE: number): Node<number> | null => {

    if (inS > inE) return null;
    const rootData = preorder[preS];
    const index = inorder.indexOf(rootData);

    let inorderLeftStart = inS;
    let inorderLeftEnd = index - 1;
    let preorderLeftStart = preS + 1;
    let preorderLeftEnd = inorderLeftEnd - inorderLeftStart + preorderLeftStart;
    let inorderRightStart = index + 1;
    let inorderRightEnd = inE;
    let preorderRightStart = preorderLeftEnd + 1;
    let preorderRightEnd = preE;

    const node: Node<number> | null = new Node<number>(rootData);
    //On the each function call, we reduce the space and fragment the array into single unit that can be store in a node
    node.left = buildHelper(inorder, preorder, inorderLeftStart, inorderLeftEnd, preorderLeftStart, preorderLeftEnd);
    node.right = buildHelper(inorder, preorder, inorderRightStart, inorderRightEnd, preorderRightStart, preorderRightEnd);
    return node;
}

const buildTree = (inorder: number[], preorder: number[], length:number) => {

    return buildHelper(inorder, preorder, 0, length - 1, 0, length - 1);
}

const inorder = [4, 2, 5, 1, 8, 6, 9, 3, 7];
const preorder = [1, 2, 4, 5, 3, 6, 8, 9, 7];
const result = buildTree(inorder, preorder, inorder.length);
console.log(result)
const post = postorder(result);
//Time Complexity is O(n), Since we go through each element in the array
//Space Complexity is O(n), Since space increases with increases in the number of input;

export { }

