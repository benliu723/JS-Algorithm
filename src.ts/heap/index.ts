import { swap } from '../utils';

export default class Heap<T> {
    heapSize: number;
    list: Array<T>;
    comparator: (item1: T, item2: T) => boolean;

    constructor(list: Array<T>, comparator: (item1: T, item2: T) => boolean) {
        this.heapSize = list.length;
        this.list = list;
        this.comparator = comparator;
        this.buildHeap();
    }
    static left(i: number) {
        return i * 2 + 1;
    }
    static right(i: number) {
        return (i + 1) * 2;
    }
    static parent(i: number) {
        return Math.ceil(i / 2) - 1;
    }
    heapify(i: number) {
        const left = Heap.left(i);
        const right = Heap.right(i);
        let largest = i;
        if (
            i < this.heapSize &&
            this.comparator(this.list[left], this.list[i])
        ) {
            largest = left;
        }
        if (
            i < this.heapSize &&
            this.comparator(this.list[right], this.list[i])
        ) {
            largest = right;
        }
        if (i !== largest) {
            swap(this.list, i, largest);
            this.heapify(largest);
        }
    }
    buildHeap() {
        this.heapSize = this.list.length;
        for (let i = this.heapSize / 2 - 1; i >= 0; i--) {
            this.heapify(i);
        }
    }

    static isHeap<K>(
        list: Array<K>,
        comparator: (item1: K, item2: K) => boolean
    ): boolean {
        let flag = true;
        const i = 0;
        while (i > list.length / 2) {
            const left = Heap.left(i);
            const right = Heap.left(i);
            if (
                comparator(list[left], list[i]) ||
                comparator(list[right], list[i])
            ) {
                flag = false;
                break;
            }
        }
        return flag;
    }

    static buildMinHeap<K>(list: Array<K>, iteratees: string): Heap<K> {
        return new Heap(
            list,
            (item1, item2) => item1[iteratees] < item2[iteratees]
        );
    }

    static buildMaxHeap<K>(list: Array<K>, iteratees: string): Heap<K> {
        return new Heap(
            list,
            (item1, item2) => item1[iteratees] > item2[iteratees]
        );
    }

    static heapSort<T>(
        list: Array<T>,
        iteratees: string,
        orders: Array<'asc' | 'desc'>
    ): Array<T> {
        let comparator;
        if (orders.includes('desc')) {
            // 构建小根堆
            comparator = (item1: T, item2: T) =>
                item1[iteratees] < item2[iteratees];
        } else {
            // 构建大根堆
            comparator = (item1: T, item2: T) =>
                item1[iteratees] > item2[iteratees];
        }
        const heap = new Heap(list, comparator);
        while (heap.heapSize > 0) {
            swap(heap.list, 0, heap.heapSize - 1);
            heap.heapSize = heap.heapSize - 1;
            heap.heapify(0);
        }
        return heap.list;
    }
}
