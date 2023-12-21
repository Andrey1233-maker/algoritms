
export class HashTable {

    private table: Array<string | null>
    size: number

    constructor (size: number) {
        this.table = new Array<string | null>(size)
        this.size = size
    }

    insert(value: string) {
        let key = this.hashFuntion(value)
        console.log(this.table[1])
        while (this.table[key] !== value && this.table[key]) {
            key += 1
        }

        this.table[key] = value
    }

    remove(value: string) {
        let key = this.hashFuntion(value)

        while (this.table[key] !== value && this.table[key]) {
            key += 1
        }

        this.table[key] = null
    }

    find(value: string) {
        let key = this.hashFuntion(value)

        while (this.table[key] !== value && this.table[key]) {
            key += 1
        }

        return this.table[key] === value
    }

    private hashFuntion(value: string): number {
        const charArray = [...value]
        let key = 0
        for(const char of charArray) {
            key += Number(char[0])
            key *= Number(char[0])

            key /= this.size
        }

        return key
    }
}