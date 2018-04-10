// @flow
import { MaxHeap, MinHeap } from '../../ds/heap';
import * as utils from '../../utils';

export const heapSort = <T>(items: Array<T>, comp: (T, T) => boolean) => {
    const heap = new MaxHeap(items, comp);
    heap.build();
    let i = heap.heapSize - 1;
    while (i > 0) {
        utils.swap(heap.items, 0, i);
        heap.heapSize -= 1;
        heap.heapify(0);
        i -= 1;
    }
};

export const reverseHeapSort = <T>(items: Array<T>, comp: (T, T) => boolean) => {
    const heap = new MinHeap(items, comp);
    heap.build();
    let i = heap.heapSize - 1;
    while (i > 0) {
        utils.swap(heap.items, 0, i);
        heap.heapSize -= 1;
        heap.heapify(0);
        i -= 1;
    }
};
