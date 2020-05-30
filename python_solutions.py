def insert(self, val):
    if self.root == None:
        self.root = Node(val)

    root = self.root
    while True:
        if val > root.info:
            if root.right:
                root = root.right
            else:
                root.right = Node(val)
                break
        elif val < root.info:
            if root.left:
                root = root.left
            else:
                root.left = Node(val)
                break
        else:
            break                 

def lca(root, v1, v2):
    if root is None:
        return None

    data = root.info

    if v1 > data and v2 > data:
        return lca(root.right, v1, v2)
    if v1 < data and v2 < data:
        return lca(root.left, v1, v2)
    return root            