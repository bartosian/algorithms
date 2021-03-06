class TreeNode {
    constructor(value, leftNode=null, rightNode=null) {
        this.value = value;
        this.left = leftNode;
        this.right = rightNode;
    }
}

let treeNode1 = new TreeNode(1);
let treeNode2 = new TreeNode(10);
let root = new TreeNode(5, treeNode1, treeNode2);

function search(value, node) {
    if(!node || node.value === value) {
        return node;
    } else if(node.value < value) {
        return search(value, node.rightNode);
    } else {
        return search(value, leftNode);
    }
}

function insert(value, node) {
    if(value < node.value) {
        if(!node.leftNode) {
            node.leftNode = new TreeNode(value);
        } else {
            insert(value, leftNode);
        }
    } else if(value > node.value) {
        if(!node.rightNode) {
            node.rightNode = new TreeNode(value);
        } else {
            insert(value, node.rightNode);
        }
    }
}