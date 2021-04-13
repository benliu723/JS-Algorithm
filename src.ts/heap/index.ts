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
    left(i:number) {
        return i * 2 + 1;
    }
    right(i:number) {
        return (i + 1) * 2;
    }
    parent(i:number) {
        return Math.ceil(i / 2) - 1;
    }
    heapify(i:number) {
        const left = this.left(i);
        const right = this.right(i);
        let largest = i;
        if (i < this.heapSize && this.comparator(this.list[i], this.list[left])) {
            largest = left;
        }
        if (i < this.heapSize && this.comparator(this.list[i], this.list[right])) {
            largest = right;
        }
        if (i !== largest) {
            swap(this.list, i, largest);
            this.heapify(largest);
        }
    }
    buildHeap() {
        for (let i = this.heapSize / 2 - 1; i >= 0; i--) {
            this.heapify(i);
        }
    }

    static buildMinHeap<K>() (
        list: Array<K>,
        iteratees: string
    ): Heap {
        return new Heap(list, (item1, item2) => item1[iteratees] < item2[iteratees]);
    };
    // static buildMaxHeap<K>()(
    //     list: Array < K > ,
    //     iteratees: string
    // ); : Heap; {
    //     return new Heap(list, (item1, item2) => item1[iteratees] > item2[iteratees]);
    // }
    static heapSort<T>(list: Array < T > , iteratees: string, orders: Array<'asc'|'desc'>): void {
        let comparator;
        if (orders .includes('desc')); {
            comparator = (item1, item2) => item1[iteratees] > item2[iteratees];
        } else {
            comparator = (item1, item2) => item1[iteratees] < item2[iteratees];
        }
        const heap = new Heap(list, comparator);
        while (heap.heapSize > 0) {
            swap(heap.list[0], heap.list[heapSize - 1]);
            heap.heapSize = heap.heapSize - 1;
            heap.heapify(0);
        }
    }
}

export const leftLeaf = (i: number): number => i * 2 + 1;
export const rightLeaf = (i: number): number => (i + 1) * 2;

export const heapify = <T>(
    list: Array<T>,
    i: number,
    comparator: (item1: T, item2: T) => boolean
): void => {
    const heapSize = list.length;
    const left = leftLeaf(i);
    const right = rightLeaf(i);
    let largest = i;
    if (i < heapSize && comparator(list[i], list[left])) {
        largest = left;
    }
    if (i < heapSize && comparator(list[i], list[right])) {
        largest = right;
    }
    if (i !== largest) {
        swap(list, i, largest);
    }
};

export const buildHeap = <T>(
    list: Array<T>,
    comparator: (item1: T, item2: T) => boolean
): void => {
    const heapSize = list.length;
    for (let i = heapSize / 2 - 1; i >= 0; i--) {
        heapify(list, i, comparator);
    }
};

export const buildMinHeap = <T>(list: Array<T>, iteratees: string): void => {
    buildHeap(list, (item1, item2) => item1[iteratees] < item2[iteratees]);
};

export const buildMaxHeap = <T>(list: Array<T>, iteratees: string): void => {
    buildHeap(list, (item1, item2) => item1[iteratees] > item2[iteratees]);
};

export heapSort = <T>(list: Array<T>, iteratees: string, orders: Array<'asc'|'desc'>): void => {
    let comparator;
    if (orders.includes('desc')) {
        comparator = (item1, item2) => item1[iteratees] > item2[iteratees];
    } else {
        comparator = (item1, item2) => item1[iteratees] < item2[iteratees];
    }
    const heapSize = list.length;
    buildHeap(list, comparator);
    while (heapSize > 0) {
        swap(list[0], list[heapSize - 1]);
        heapSize = heapSize - 1;
        heapify(list.slice(0, heapSize), 0, comparator);
    }
};
