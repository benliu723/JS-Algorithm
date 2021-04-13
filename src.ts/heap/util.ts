import { leftLeaf, rightLeaf } from '.';

const isHeap = <T>(list: Array<T>, comparator: (item1:T, item2: T) => boolean):boolean {
    const heapSize = list.length;
    let flag = true;
    for (let i = 0; i < heapSize / 2 - 1; i++) {
        const left = leftLeaf(i);
        const right = rightLeaf(i);
        if (comparator(list[i], list[left])) {
            flag = false;
            break;
        }
        if (comparator(list[i], list[right])) {
            flag = false;
            break;
        }
    }
    return flag;
};

export const isMinHeap = <T>(list: Array<T>, iteratees: string): boolean => isHeap(list, (item1, item2) => item1[iteratees] < item2[iteratees]);
export const isMaxHeap = <T>(list: Array<T>, iteratees: string): boolean => isHeap(list, (item1, item2) => item1[iteratees] > item2[iteratees]);
