//Binary Search Tree

// from root node the value of node to the right will always incrse
// from root node the value of node to the left will decrese


//                101
//              /    \
//             /      \
//            33      105
//           / \       /\
//          /   \     /  \
//         9    37   104  144



class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        let currentNode = this.root;
        if (currentNode === null) {
            return false;
        }
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                return currentNode;
            }
        }
        return false;
    }

    removeByAnkit(value) {
        if (this.root != null) {
            return false;
        }

        let currentNode = this.root;
        let parentNode = null;

        while (currentNode) {
            if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            }
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            }
            if (value == currentNode.value) {

                if (currentNode.right == null) {

                    if (parentNode == null) {
                        this.root = currentNode.left;
                    }
                    else if (currentNode.value < parentNode.value) {
                        parentNode.left = currentNode.left;
                    }
                    else if (currentNode.value > parentNode.value) {
                        parentNode.right = currentNode.left;
                    }

                }
                else if (currentNode.left == null) {

                    if (parentNode == null) {
                        this.root = currentNode.right;
                    }
                    else if (currentNode.value < parentNode.value) {
                        parentNode.left = currentNode.right;
                    }
                    else if (currentNode.value > parentNode.value) {
                        parentNode.right = currentNode.right;
                    }



                }



            }


        }
    }




    removeByTuter(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                //We have a match, get to work!

                //Option 1: No right child: 
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {

                        //if parent > current value, make current left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;

                            //if parent < current value, make left child a right child of parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }

                    //Option 2: Right child which doesnt have a left child
                } else if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if (parentNode === null) {
                        this.root = currentNode.right;
                    } else {

                        //if parent > current, make right child of the left the parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;

                            //if parent < current, make right child a right child of the parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }

                    //Option 3: Right child that has a left child
                } else {

                    //find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }

}

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

const bst = new BST();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);
bst.remove(20);
console.log(JSON.stringify(traverse(bst.root)));

// console.log(bst.lookup(6))