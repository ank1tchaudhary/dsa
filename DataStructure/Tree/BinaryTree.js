// Binery Tree can have
// 1. each node can have either 0,1 or 2 child nodes
// 2. each child can have only one parent

// Perfect Binary Tree[More efficient]
// the node has either 0 or 2 children with each parent node
// bottom layer of tree is completly filled
// No of nodes on each level doubles as we move down the tree
// No. of nodes on the last level = to the sum of no of nodes on alll the other level + 1
// calculate no of nodes on each leavel : 2^n , where n>=0


// Full Binary Tree
// the node has either 0 or 2 children with each parent node


//calculate no of nodes : (2^h - 1),   where h>=1
// log nodes = height(steps) , i.e. log 100 = 2, 10^2 = 100

//Balanced Binary Tree
//lookup : O(log N)
//insert : O(log N)
//delete : O(log N)

// divide and concur


//Unbalanced Binary Tree
//lookup : O(n)
//insert : O(n)
//delete : O(n)





