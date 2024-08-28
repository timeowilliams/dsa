/*
Problem: 226. Invert Binary Tree
Time Complexity: 
Space Complexity:
*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
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

export function invertTree(root: TreeNode | null): TreeNode | null {
  const left = root?.left;
  const right = root?.right;
  if (left || right) {
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
  }

  if (left?.left || left?.right) {
    invertTree(left);
  }
  if (right?.left || right?.right) {
    invertTree(right);
  }

  return root;
}
