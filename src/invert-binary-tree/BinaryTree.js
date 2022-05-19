class BinaryTree {
  constructor(value, left, right) {
    this.value = value
    if (left) this.left = left
    if (right) this.right = right
  }
}

module.exports = BinaryTree