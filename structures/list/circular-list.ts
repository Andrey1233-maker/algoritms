import { IList } from "./list-interface";

type ListNode<T> = {
    value: T,
    next: ListNode<T>,
    prev: ListNode<T>,
};

export class CircularList<T> implements IList<T> {

    private head: ListNode<T> | null = null
    size: number = 0

    constructor () {}

    push(value: T): void {
        if (!this.head) {
            const node:{value: T, next: any, prev: any} = { value, next: null, prev: null } 
            node.next = node
            node.prev = node

            this.head = node
            this.size += 1
            return;
        }

        const node = { value, next: this.head, prev: this.head.prev }

        this.head.prev.next = node
        this.head.prev = node
        this.size += 1
    }
    
    at(index: number): T {
        if (!this.head || this.size <= index) {
            throw Error('Out of range')
        }

        let currentNode = this.head
        if (index < this.size - index) {
            for (let i = 0; i < index; i += 1){
                currentNode = currentNode.next
            }
            return currentNode.value
        } else {
            for (let i = this.size; i > index; i -= 1){
                currentNode = currentNode.prev
            }
            return currentNode.value
        }
    }

    pushAfter(value: T, index: number) {
        if(!this.head || this.size <= index) {
            throw new Error('Out of range')
        }

        let currentNode = this.head
        if (index < this.size - index) {
            for (let i = 0; i < index; i += 1){
                currentNode = currentNode.next
            }
        } else {
            for (let i = this.size; i > index; i -= 1){
                currentNode = currentNode.prev
            }
        }

        const node = { value, next: currentNode.next, prev: currentNode }
        currentNode.next = node
        node.next.prev = node
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

        let currentNode = this.head
        if (index < this.size - index) {
            for (let i = 0; i < index; i += 1){
                currentNode = currentNode.next
            }
        } else {
            for (let i = this.size; i > index; i -= 1){
                currentNode = currentNode.prev
            }
        }
        const next = currentNode.next
        const prev = currentNode.prev

        next.prev = prev
        prev.next = next

        this.size -= 1
    }
}