const invertBinaryTree = (tree) => {
  if (!tree) return
  const tmpLeft = tree.left
  tree.left = tree.right
  tree.right = tmpLeft
  
  invertBinaryTree(tree.left)
  invertBinaryTree(tree.right)

  return tree  
}

module.exports = invertBinaryTree
