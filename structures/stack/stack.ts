type StackNode<T> = {
    value: T,
    next: StackNode<T>,
} | null


export class Stack<T> {

    private head: StackNode<T> = null
    size: number = 0

    constructor() {}

    push(value: T): void {
        if(!this.head) {
            this.head = { value, next: null }
            this.size += 1
            return
        }

        let currentNode = this.head
        while(currentNode.next) {
            currentNode = currentNode.next
        }

        currentNode.next = { value, next: null }
        this.size += 1
    }

    pop(): T | null {
        if(!this.head) {
            return null
        }

        const result = this.head.value
        this.head = this.head.next
        this.size -= 1
        return result
    }
}