// @flow
import { MaxHeap, MinHeap } from '../../ds/heap';
import * as utils from '../../utils';

export const heapSort = (items: Array<number>) => {
    const heap = new MaxHeap(items);
    heap.build();
    let i = heap.heapSize - 1;
    while (i > 0) {
        utils.swap(heap.items, 0, i);
        heap.heapSize -= 1;
        heap.heapify(0);
        i -= 1;
    }
};

export const reverseHeapSort = (items: Array<number>) => {
    const heap = new MinHeap(items);
    heap.build();
    let i = heap.heapSize - 1;
    while (i > 0) {
        utils.swap(heap.items, 0, i);
        heap.heapSize -= 1;
        heap.heapify(0);
        i -= 1;
    }
};
