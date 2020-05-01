class TreeNode:
    def __init__(self, val, left=None, right=None):
        self.value = val
        self.leftChild = left
        self.rightChild = right     

node = TreeNode(1)
node2= TreeNode(10)
root = TreeNode(5, node, node2)        

def search(value, node):
    if node is None or node.value == value:
        return node 

    elif value < node.value:
        return search(value, node.leftChild)

    else:
        return search(value, rightNode)        


def insert(value, node):
    if value < node.value:
        if node.leftChild is None:
            node.leftChild = TreeNode(value)
        else:
            insert(value, node.leftChild)

    elif value > node.value:
        if node.rightChild is None:
            node.rightChild = TreeNode(value)
        else:
            insert(value, node.rightChild)                