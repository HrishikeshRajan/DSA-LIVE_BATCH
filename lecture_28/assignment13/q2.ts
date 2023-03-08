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
console.log(result);
//Time Complexity is O(n), Since we go through each element in the array
//Space Complexity is O(n), Since space increases with increases in the number of input;

export { }

