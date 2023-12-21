type QueueNode<T> = {
    value: T,
    next: QueueNode<T>,
} | null


export class Queue<T> {

    private head: QueueNode<T> = null
    private tail: QueueNode<T> = null
    size: number = 0

    constructor() {}

    push(value: T): void {
        if(!this.head || !this.tail) {
            this.head = { value, next: null }
            this.tail = this.head
            this.size += 1
            return;
        }

        let currentNode = this.tail

        const node = { value, next: null }
        currentNode.next = node
        this.tail = currentNode.next

        this.size += 1
    }

    pop(): T | null {
        if(!this.head) {
            return null
        }

        if(!this.head.next) {
            const result = this.head.value
            this.head = null
            this.size -= 1
            return result
        }

        const result = this.head.value
        this.head = this.head.next
        this.size -= 1
        return result
    }
}