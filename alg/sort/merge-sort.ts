import { Queue } from "../../structures/queue"
import { Stack } from "../../structures/stack"

type SortInterval = { left: number, right: number }

function merge(left: number[], right: number[]) {
    let arr: number[] = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            const value = left.shift()
            if (value) { arr.push(value) }
        } else {
            const value = right.shift()
            if (value) { arr.push(value) }
        }
    }
    
    return [ ...arr, ...left, ...right ]
}

export function mergeSort(originArray: number[]): number[] {

    const array = [...originArray]
    const half = array.length / 2
    
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }

  