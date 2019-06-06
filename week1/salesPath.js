/**
input : rootNode 
output : sum of path element (low)
lets think of a graph

Obviously iterating through all paths again and again is not a good solution, since its wasteful in terms of time and memory. But intuitively if we find a solution that uses previous calculations somehow. This hints that the solution should involve recursion in some manner.

First we notice that if the root is also a leaf, the best Sales Path, is simply the value in the node itself. This is the base case for the solution. If the root has children, then the minimal Sales Path is also a minimal path from the root’s child. Thus, if we already know the minimal cost for the root’s children, then the minimal cost for the root is simply the minimum of the values for its children plus the value stored in the root itself. A solution to this question, using these facts is given below:
*/

function getCheapestCost(root, totalCost = 0, result = Infinity) {
  totalCost += root.cost;
  if (root.children.length === 0) return totalCost;
  root.children.forEach(child => {
    result = Math.min(result, getCheapestCost(child, totalCost, result));
  });
  return result;
}

const node0 = new Node(0);
const node1 = new Node(5);
const node2 = new Node(3);
const node3 = new Node(6);
const node4 = new Node(4);
const node5 = new Node(2);
const node6 = new Node(0);
const node7 = new Node(1);
const node8 = new Node(5);
const node9 = new Node(1);
const node10 = new Node(10);
const node11 = new Node(1);

node0.children.push(node1, node2, node3);
node1.children.push(node4);
node2.children.push(node5, node6);
node3.children.push(node7, node8);
node5.children.push(node9);
node6.children.push(node10);
node9.children.push(node11);

/******************************************
 * Use the helper code below to implement *
 * and test your function above           *
 ******************************************/

// Constructor to create a new Node
function Node(cost) {
  this.cost = cost;
  this.children = [];
}

console.log(getCheapestCost(node0));
