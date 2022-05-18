const LinkedList = require("./LinkedList")
const reverseLinkedList = require("./index")

const stringArray = 'abcdefghijk'.split('').reverse()
const linkedList = stringArray.reduce((last, current) => new LinkedList(current, last), undefined)

it('Should be true', () => {
  const result = reverseLinkedList(linkedList)?.toString()
  const expected = stringArray.join(' -> ').concat(' -> None')

  expect(result).toBe(expected)
})