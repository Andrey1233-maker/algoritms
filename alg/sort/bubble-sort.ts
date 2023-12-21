
export function bubbleSort<T>(originArray: Array<T>, cmp: (a: T, b: T) => number) {
    const array = [...originArray]

    let d = true

    const swapElem = (index1: number, index2: number) => {
        console.log(array[index1], array[index2])

        const t = array[index1]
        array[index1] = array[index2]
        array[index2] = t
        console.log(array[index1], array[index2])
    }

    for(let i = 1; i < array.length && d; i ++) {
        d = false
        for(let j = 0; j < array.length - i; j++) {
            if(cmp(array[j], array[j + 1]) < 0) {
                swapElem(j, j + 1)
                d = true
            }
        }
    }

    return array
}