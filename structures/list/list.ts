import { IList } from "./list-interface";

type ListNode<T> = {
    value: T,
    next: ListNode<T>,
} | null;

export class List<T> implements IList<T> {

    private head: ListNode<T> = null
    size: number = 0

    constructor () {}

    push(value: T): void {
        if (!this.head) {
            this.head = { value, next: null }
            return;
        }

        let currentNode = this.head
        while(currentNode.next) {
            currentNode = currentNode.next
        }

        currentNode.next = { value, next: null }
        this.size += 1
    }
    
    at(index: number): T {
        if(!this.head || this.size <= index) {
            throw new Error('Out of range')
        }

        let currentNode = this.head
        for(let i = 0; i < index; i += 1) {
            if(!currentNode.next) {
                throw new Error('Out of range')
            }

            currentNode = currentNode.next
        }

        return currentNode.value
    }

    pushAfter(value: T, index: number) {
        if(!this.head || this.size <= index) {
            throw new Error('Out of range')
        }

        let currentNode = this.head
        for(let i = 0; i < index; i += 1) {
            if(!currentNode.next) {
                throw new Error('Out of range')
            }

            currentNode = currentNode.next
        }

        const node = { value, next: currentNode.next }
        currentNode.next = node
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
        for (let i = 0; i < index - 1; i += 1) {
            if(!currentNode.next) {
                throw new Error('Out of range')
            }
            currentNode = currentNode.next
        }

        if(!currentNode.next) {
            throw new Error('Out of range')
        }

        currentNode.next = currentNode.next?.next
        this.size -= 1
    }
    
}