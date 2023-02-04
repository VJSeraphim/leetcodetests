/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    if(root === null) return 0

    let result = 0

    const findNode = (root, max, min) => {
        if(root === null) {
            result = Math.max(result, max - min)
            return
        }

        max = Math.max(max, root.val)
        min = Math.min(min, root.val)

        findNode(root.right, max, min)
        findNode(root.left, max, min)
    }

    findNode(root, root.val, root.val)

    return result
};