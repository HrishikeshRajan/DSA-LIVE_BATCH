/**
    Question

    Lowest Common Ancestor of a Binary Search Tree

    Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes
    in the BST.
    According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between
    two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a
    node to be a descendant of itself).”
    Examples:
    Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
    Output: 6
    Explanation: The LCA of nodes 2 and 8 is 6.

 */


//Class Node
class TreeNode {
    left: TreeNode | null;
    right: TreeNode | null;
    val: number;

    constructor(value: number) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

//Function to create new node
const createTreeNode = (value: number) => {
    return new TreeNode(value);
}



//Function to find common ancestor
const findCommonAncestor = (root:TreeNode | null, p:TreeNode, q:TreeNode) => {
  
    if(!root) return null;

    //Copying the root node
     let curr = root.val;

     /**
     * If root node value is lesser than both p node and q node value then move to right
       subtree else move to the left subtree
     */
     if(curr < p.val && curr < q.val){
        return findCommonAncestor(root.right,p,q)
     }else if(curr > p.val && curr > q.val){
        return findCommonAncestor(root.left,p,q)
     }else{
        //This case work when there is no left and right node 
        return root;
     }
    
}


const root = createTreeNode(6);
root.left = createTreeNode(2);

root.left.left = createTreeNode(0);
root.left.right = createTreeNode(4);
root.left.right.left = createTreeNode(3);
root.left.right.right = createTreeNode(5);

root.right = createTreeNode(8);
root.right.left = createTreeNode(7);
root.right.right = createTreeNode(9);

const result = findCommonAncestor(root,2,9)
console.log(result?.val);

/**
 * Time Complexity = O(h), where is the height of the tree
 * Space Complexity  = O(1)
 * 
 */


export { };
