/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {

    const leafCompare = (root) => {
        const nodes = [root]
        const leafs = []
        
        while(nodes.length) {
            const node = nodes.pop()
            if(!node.left && !node.right) leafs.push(node.val)
            if(node.right) nodes.push(node.right)
            if(node.left) nodes.push(node.left)
        }

        return leafs.join(' ')
    }

    return leafCompare(root1) === leafCompare(root2)
};