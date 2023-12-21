import { IList } from "./list-interface";

type ListNode<T> = {
    value: T,
    next: ListNode<T>,
    prev: ListNode<T>,
} | null;

export class DLList<T> implements IList<T> {

    private head: ListNode<T> = null
    private tail: ListNode<T> = null

    size: number = 0

    constructor () {}

    push(value: T): void {
        if (!this.head || !this.tail) {
            this.head = { value, next: null, prev: null }
            this.tail = this.head
            this.size += 1

            return;
        }

        this.tail.next = { value, next: null, prev: this.tail }
        this.tail = this.tail?.next

        this.size += 1
    }
    
    at(index: number): T {
        if(!this.head || this.size <= index) {
            throw new Error('Out of range')
        }

        let currentNode
        if (index < this.size - index) {
            currentNode = this.head
            for (let i = 0; i < index; i += 1){
                if (!currentNode) throw new Error('Out of range')

                currentNode = currentNode.next
            }
        } else {
            currentNode = this.tail
            for (let i = this.size - 1; i > index; i -= 1){
                if (!currentNode) throw new Error('Out of range')

                currentNode = currentNode.prev
            }
        }
        if (!currentNode) throw new Error('Out of range')

        return currentNode.value
    }

    pushAfter(value: T, index: number) {
        if(!this.head || this.size <= index) {
            throw new Error('Out of range')
        }

        let currentNode
        if (index < this.size - index) {
            currentNode = this.head
            for (let i = 0; i < index; i += 1){
                if (!currentNode) throw new Error('Out of range')

                currentNode = currentNode.next
            }
        } else {
            currentNode = this.tail
            for (let i = this.size - 1; i > index; i -= 1){
                if (!currentNode) throw new Error('Out of range')

                currentNode = currentNode.prev
            }
        }
        if (!currentNode) throw new Error('Out of range')

        const node = { value, next: currentNode.next, prev: currentNode }
        currentNode.next = node
        if(node.next) {
            node.next.prev = node
        }
        this.size += 1
    }

    removeAt(index: number) {
        if (!this.head || this.size <= index) {
            throw new Error('Out of range')
        }

        if (index === 0) { 
            this.head = this.head.next
            return
        }

        let currentNode
        if (index < this.size - index) {
            currentNode = this.head
            for (let i = 0; i < index; i += 1){
                if (!currentNode) throw new Error('Out of range')

                currentNode = currentNode.next
            }
        } else {
            currentNode = this.tail
            for (let i = this.size - 1; i > index; i -= 1){
                if (!currentNode) throw new Error('Out of range')

                currentNode = currentNode.prev
            }
        }

        if(!currentNode?.next) {
            throw new Error('Out of range')
        }

        currentNode.next = currentNode.next?.next
        if (currentNode.next) {
            currentNode.next.prev = currentNode
        }
        this.size -= 1
    }
    
}