class LinkedList {
  constructor(value, next) {
    this.value = value
    if(next) this.next = next
  }

  toString() {
    return `${this.value} -> ${this.next ? this.next.toString() : 'None'}`
  }
}

module.exports = LinkedList