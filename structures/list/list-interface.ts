export interface IList<T> {
    size: number
    
    at: (index: number) => T
    push: (value: T) => void
    pushAfter: (value: T, index: number) => void
    removeAt: (index: number) => void 
}