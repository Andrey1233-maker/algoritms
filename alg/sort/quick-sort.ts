import { Queue } from "../../structures/queue"

type SortInterval = { left: number, right: number }

export const 
quickSort = (originArray: number[]) => {

    const array = [...originArray]

    const swapElem = (index1: number, index2: number) => {

        const t = array[index1]
        array[index1] = array[index2]
        array[index2] = t
    }

    const partial = (left: number, right: number) => {
        let cLeft = left
        let cRight = right

        const centerValue = array[Math.ceil((left + right) / 2)]
        while(left <= right) {
            while(array[cLeft] < centerValue && cLeft < right) {
                cLeft++
            }
            while(array[cRight] >= centerValue && cRight > left) {
                cRight--
            }
            if(cLeft >= cRight) {
                break
            }
            swapElem(cLeft, cRight)

            if(cLeft > left) cLeft--
            if(cRight < right) cRight++
        }

        return cRight
    }

    const queue = new Queue<SortInterval>()

    queue.push({left: 0, right: array.length - 1})

    while(queue.size > 0) {
        let currentInt = queue.pop()
        if(!currentInt) {
            throw new Error('Out of range')
        }
        if(currentInt?.right - currentInt?.left === 1) {
            if(array[currentInt?.right] < array[currentInt?.left]) {
                swapElem(currentInt.right, currentInt.left)
            }
            continue
        }
        if(currentInt?.left < currentInt?.right) {
            const q = partial(currentInt.left, currentInt.right)

            queue.push({ left: currentInt.left, right: q})
            queue.push({ left: q + 1, right: currentInt.right})
        }
    }

    return array
}