# Invert binary tree

This is a test to implement a linked list reverse function.

We have the `BinaryTree` class where it represents a tree like this:
```
tree =         1
            /     \
          2        3
        /   \     /  \
       4     5   6    7
      / \
     8   9

```
```bash
# On the test console will be represented on that format
1
  2
    4
      8
      9
    5
  3
    6
    7
```

## The chalenge

The chalange is to implement a function inside the `index.js` file, that invert the tree.
The param received on the `invertBinaryTree` function is the first element of the tree.
The expected output is:
```
tree =         1
            /     \
          3        2
        /   \     /  \
       7     6   5    4
                     / \
                    9   8

```

```bash
# On the test console, the response will be represented on that format
1
  3
    7
    6
  2
    5
    4
      9
      8
```


## Rules

- You are not alowed to change the `BinaryTree.js` and `spec.js` files.
- Just change the `index.js` file with your implementation
- To test if everything is working, run `yarn test src/linked-list/spec.js`

Good look