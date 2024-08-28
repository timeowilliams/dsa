import { expect, test, describe } from "vitest";
import { maxDepth, TreeNode } from "../solutions/maxDepth";

describe("Problem #: 104. Maximum Depth of Binary Tree", () => {
  test("Depth to be 3", () => {
    const tree = new TreeNode(
      3,
      new TreeNode(9, new TreeNode(20), new TreeNode(null)),
      new TreeNode(null, new TreeNode(15), new TreeNode(7)),
    );

    expect(maxDepth(tree)).toBe(3);
  });
});
