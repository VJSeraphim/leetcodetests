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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    if(root == null) return 0

    let result = 0
    if(low <= root.val) {
        result += root.val + rangeSumBST(root.left, low, high)
    } 
    if (high >= root.val) {
        result += root.val + rangeSumBST(root.right, low, high)
    }

    return result - root.val
    
};