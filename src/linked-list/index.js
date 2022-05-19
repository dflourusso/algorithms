const reverseLinkedListImplementation = (current, previous = undefined) => {
  const tmpNext = current.next
  current.next = previous
  if (!tmpNext) return current
  return reverseLinkedListImplementation(tmpNext, current)
}

const reverseLinkedList = (head) => {
  return reverseLinkedListImplementation(head)
}

module.exports = reverseLinkedList
