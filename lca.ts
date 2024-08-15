class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode,
): TreeNode | null {
  let ans: TreeNode | null = null;

  function recurseTree(
    currNode: TreeNode | null,
    p: TreeNode,
    q: TreeNode,
  ): boolean {
    // if reached the end of a branch, return false
    if (currNode === null) return false;

    // if the answer is already found, skip further recursion
    if (ans !== null) return false;

    // recurse through left side of tree
    let left: number = recurseTree(currNode.left, p, q) ? 1 : 0;
    // recurse through the right side of tree
    let right: number = recurseTree(currNode.right, p, q) ? 1 : 0;

    let mid: number = currNode === p || currNode === q ? 1 : 0;

    // If any two of the three flags (left, right, mid) are true, we've found the LCA
    if (mid + left + right >= 2) {
      ans = currNode;
    }

    // return true if any of the three bool values is true
    return mid + left + right > 0;
  }

  recurseTree(root, p, q);
  return ans;
}

// Helper function to build a tree from an array
function buildTree(
  nodes: (number | null)[],
  index: number = 0,
): TreeNode | null {
  if (index >= nodes.length || nodes[index] === null) return null;
  const root = new TreeNode(nodes[index]);
  root.left = buildTree(nodes, 2 * index + 1);
  root.right = buildTree(nodes, 2 * index + 2);
  return root;
}

// Example usage
const rootArray = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
const pVal = 5;
const qVal = 4;

const root = buildTree(rootArray);
const p = findNode(root, pVal);
const q = findNode(root, qVal);

if (p === null || q === null) {
  console.log(`Either p (${pVal}) or q (${qVal}) does not exist in the tree`);
} else {
  const lca = lowestCommonAncestor(root, p, q);
  if (lca !== null) {
    console.log(`Lowest Common Ancestor: ${lca.val}`);
  } else {
    console.log("Lowest Common Ancestor not found");
  }
}

// Function to find a node with a given value in the tree
function findNode(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) return null;
  if (root.val === val) return root;
  return findNode(root.left, val) || findNode(root.right, val);
}
