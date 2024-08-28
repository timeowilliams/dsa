/* 
Problem #: 104. Maximum Depth of Binary Tree
Time Complexity: O(N)
Space Complexity: O(H), the height of the tree
*/

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function maxDepth(root: TreeNode | null): number {
  let maxDepth = 0;

  if (!root) return 0;

  const testDepth = (tree, currDepth) => {
    if (!tree) return;
    console.log("curr node val", tree.val, "curr depth", currDepth);
    maxDepth = Math.max(currDepth, maxDepth);
    if (tree?.left) testDepth(tree.left, currDepth + 1);
    if (tree?.right) testDepth(tree.right, currDepth + 1);
  };

  // separete function to iterate
  let maxLeft = testDepth(root?.left ? root.left : null, 1);
  let maxRight = testDepth(root?.right ? root.right : null, 1);

  return maxDepth + 1;
}
