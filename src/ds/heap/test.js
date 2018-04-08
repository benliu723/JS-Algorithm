// @flow
import * as utils from '../../utils';
import {
    buildMaxHeap,
    buildMinHeap,
    maxHeapify,
    minHeapify,
    isMaxHeap,
    isMinHeap,
    left,
    right,
    parent,
} from '.';

describe('heap', () => {
    it('isMaxHeap', () => {
        expect(isMaxHeap([10, 5, 6, 3, 4, 2, 1])).toBeTruthy();
        expect(isMaxHeap([10, 5, 6, 6, 4, 2, 1])).toBeFalsy();
        expect(isMaxHeap([78, 96, 39, 77, 68, 37, 8, 3, 39, 37])).toBeFalsy();
    });
    it('isMinHeap', () => {
        expect(isMinHeap([3, 7, 10, 40, 62, 92, 55, 65, 51, 71])).toBeTruthy();
        expect(isMinHeap([3, 40, 10, 7, 62, 92, 55, 65, 51, 71])).toBeFalsy();
    });
    it('left', () => {
        expect(left(3)).toBe(7);
        expect(left(2)).toBe(5);
    });
    it('right', () => {
        expect(right(6)).toBe(14);
        expect(right(2)).toBe(6);
    });
    it('parent', () => {
        expect(parent(0)).toBe(-1);
        expect(parent(10)).toBe(4);
    });
    it('adjust max heap', () => {
        const heap = {
            items: [10, 20, 4, 3, 12],
            heapSize: 5,
        };
        maxHeapify(heap, 0);
        expect(heap.items).toEqual([20, 12, 4, 3, 10]);
    });
    it('adjust min heap', () => {
        const heap = {
            items: [10, 20, 4, 3, 12],
            heapSize: 5,
        };
        minHeapify(heap, 0);
        expect(heap.items).toEqual([4, 20, 10, 3, 12]);
    });
    it('build max heap', () => {
        const arr = utils.random(10, 100);
        buildMaxHeap(arr);
        expect(isMaxHeap(arr)).toBeTruthy();
    });
    it('build min heap', () => {
        const arr = utils.random(10, 100);
        buildMinHeap(arr);
        expect(isMinHeap(arr)).toBeTruthy();
    });
});
