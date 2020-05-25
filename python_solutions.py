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

        #Python3
        