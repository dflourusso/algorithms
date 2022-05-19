const BinaryTree = require("./BinaryTree")
const invertBinaryTree = require("./index")


const tree = new BinaryTree(
  1,
  new BinaryTree(
    2,
    new BinaryTree(
      4,
      new BinaryTree(8),
      new BinaryTree(9),
    ),
    new BinaryTree(5),
  ),
  new BinaryTree(
    3,
    new BinaryTree(6),
    new BinaryTree(7),
  ),
)

const expectedTree = new BinaryTree(
  1,
  new BinaryTree(
    3,
    new BinaryTree(7),
    new BinaryTree(6),
  ),
  new BinaryTree(
    2,
    new BinaryTree(5),
    new BinaryTree(
      4,
      new BinaryTree(9),
      new BinaryTree(8),
    ),
  ),
)

it('Should be true', () => {
  const result = invertBinaryTree(tree)


  expect(result).toMatchObject(expectedTree)
})