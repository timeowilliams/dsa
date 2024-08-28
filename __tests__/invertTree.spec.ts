import { expect, test, describe } from "vitest";
import { invertTree, TreeNode } from "../solutions/invertTree";

describe("226. Invert Binary Tree", () => {
  test("Inverts a binary tree", () => {
    const tree = new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(7, new TreeNode(6), new TreeNode(9)),
    );

    const invertedTree = new TreeNode(
      4,
      new TreeNode(7, new TreeNode(9), new TreeNode(6)),
      new TreeNode(2, new TreeNode(3), new TreeNode(1)),
    );

    expect(invertTree(tree)).toEqual(invertedTree);
  });

  test("Inverts a simple binary tree", () => {
    const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    const invertedTree = new TreeNode(2, new TreeNode(3), new TreeNode(1));

    expect(invertTree(tree)).toEqual(invertedTree);
  });

  test("Inverts a tree with one node", () => {
    const tree = new TreeNode(1);
    expect(invertTree(tree)).toEqual(tree);
  });

  test("Handles null input", () => {
    expect(invertTree(null)).toBeNull();
  });
});
