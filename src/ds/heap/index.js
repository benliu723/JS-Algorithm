// @flow
import * as utils from '../../utils';

type Heap = {
    items: Array<number>,
    heapSize: number,
};

export const parent = (i: number): number => Math.floor((i + 1) / 2) - 1;
export const left = (i: number): number => 2 * i + 1;
export const right = (i: number): number => 2 * i + 2;

export const maxHeapify = (heap: Heap, i: number) => {
    const l = left(i);
    const r = right(i);
    let largest = i;
    const { items } = heap;
    if (l < heap.heapSize && items[l] > items[i]) {
        largest = l;
    }
    if (r < heap.heapSize && items[r] > items[largest]) {
        largest = r;
    }
    if (i !== largest) {
        utils.swap(items, i, largest);
        maxHeapify(heap, largest);
    }
};

export const minHeapify = (heap: Heap, i: number) => {
    const l = left(i);
    const r = right(i);
    let largest = i;
    const { items } = heap;
    if (l < heap.heapSize && items[l] < items[i]) {
        largest = l;
    }
    if (r < heap.heapSize && items[r] < items[largest]) {
        largest = r;
    }
    if (i !== largest) {
        utils.swap(items, i, largest);
        minHeapify(heap, largest);
    }
};

export const buildMaxHeap = (items: Array<number>) => {
    const heap = { heapSize: items.length, items };
    for (let i = heap.heapSize / 2 - 1; i >= 0; i -= 1) {
        maxHeapify(heap, i);
    }
    return heap;
};

export const buildMinHeap = (items: Array<number>) => {
    const heap = { heapSize: items.length, items };
    for (let i = heap.heapSize / 2 - 1; i >= 0; i -= 1) {
        minHeapify(heap, i);
    }
    return heap;
};

export const isMaxHeap = (arr: Array<number>): boolean => {
    let i = arr.length - 1;
    while (i >= 0) {
        if (arr[parent(i)] < arr[i]) return false;
        i -= 1;
    }
    return true;
};

export const isMinHeap = (arr: Array<number>): boolean => {
    let i = arr.length - 1;
    while (i >= 0) {
        if (arr[parent(i)] > arr[i]) return false;
        i -= 1;
    }
    return true;
};
