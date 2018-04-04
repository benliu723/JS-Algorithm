// @flow
import {
    buildMaxHeap,
    buildMinHeap,
    maxHeapify,
    minHeapify,
} from '../../dataStructures/heap';
import * as utils from '../../utils';

export const heapSort = (arr: Array<number>) => {
    const heap = buildMaxHeap(arr);
    let i = heap.heapSize - 1;
    while (i > 0) {
        utils.swap(arr, 0, i);
        heap.heapSize -= 1;
        maxHeapify(heap, 0);
        i -= 1;
    }
};

export const reverseHeapSort = (arr: Array<number>) => {
    const heap = buildMinHeap(arr);
    let i = heap.heapSize - 1;
    while (i > 0) {
        utils.swap(arr, 0, i);
        heap.heapSize -= 1;
        minHeapify(heap, 0);
        i -= 1;
    }
};
