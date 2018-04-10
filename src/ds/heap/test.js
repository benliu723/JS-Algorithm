// @flow
import * as utils from '../../utils';
import { MaxHeap, MinHeap } from '.';

describe('heap', () => {
    it('build max heap', () => {
        const heap = new MaxHeap(utils.random(10, 100), (a, b) => a > b);
        heap.build();
        expect(heap.isHeap()).toBeTruthy();
    });
    it('build min heap', () => {
        const heap = new MinHeap(utils.random(10, 100), (a, b) => a < b);
        heap.build();
        expect(heap.isHeap()).toBeTruthy();
    });
    it('append a value', () => {
        const maxHeap = new MaxHeap(
            [96, 78, 39, 77, 68, 37, 8, 3, 39, 37],
            (a, b) => a > b
        );
        maxHeap.build();
        maxHeap.append(100);
        expect(maxHeap.items).toEqual([100, 96, 39, 77, 78, 37, 8, 3, 39, 37, 68]);

        const minHeap = new MinHeap(
            [3, 37, 8, 39, 68, 37, 39, 77, 96, 78],
            (a, b) => a < b
        );
        minHeap.build();
        minHeap.append(5);
        expect(minHeap.items).toEqual([3, 5, 8, 39, 37, 37, 39, 77, 96, 78, 68]);
    });
    it('isHeap', () => {
        const heap = new MaxHeap(
            [96, 78, 39, 77, 100, 68, 37, 8, 3, 39, 37],
            (a, b) => a > b
        );
        expect(heap.isHeap()).toBeFalsy();
        heap.build();
        expect(heap.isHeap()).toBeTruthy();
    });
    it('increase key', () => {
        const items = [96, 78, 39, 77, 68, 37, 8, 3, 39, 37];
        const heap = new MaxHeap(items, (a, b) => a > b);
        heap.build();
        heap.increaseKey(5, 100);
        expect(heap.items).toEqual([100, 78, 96, 77, 68, 39, 8, 3, 39, 37]);
    });
    it('max related functions', () => {
        const items = [96, 78, 39, 77, 68, 37, 8, 3, 39, 37];
        const heap = new MaxHeap(items, (a, b) => a > b);
        heap.build();
        expect(heap.maximum()).toEqual(96);
        expect(heap.heapSize).toEqual(items.length);
        expect(heap.extractMax()).toEqual(96);
        expect(heap.heapSize).toEqual(items.length - 1);
    });
    it('decrease key', () => {
        const items = [3, 37, 8, 39, 68, 37, 39, 77, 96, 78];
        const heap = new MinHeap(items, (a, b) => a < b);
        heap.build();
        heap.decreaseKey(5, 1);
        expect(heap.items).toEqual([1, 37, 3, 39, 68, 8, 39, 77, 96, 78]);
    });
    it('mix related functions', () => {
        const items = [3, 37, 8, 39, 68, 37, 39, 77, 96, 78];
        const heap = new MinHeap(items, (a, b) => a < b);
        heap.build();
        expect(heap.minimum()).toEqual(3);
        expect(heap.heapSize).toEqual(items.length);
        expect(heap.extractMin()).toEqual(3);
        expect(heap.heapSize).toEqual(items.length - 1);
    });

    it('heap with complex data structure', () => {
        const items = [
            { val: 96 },
            { val: 78 },
            { val: 39 },
            { val: 77 },
            { val: 100 },
            { val: 37 },
            { val: 8 },
            { val: 3 },
            { val: 39 },
            { val: 37 },
        ];
        const heap = new MaxHeap(items, (a, b) => a.val > b.val);
        heap.build();
        expect(heap.items).toEqual([
            { val: 100 },
            { val: 96 },
            { val: 39 },
            { val: 77 },
            { val: 78 },
            { val: 37 },
            { val: 8 },
            { val: 3 },
            { val: 39 },
            { val: 37 },
        ]);
    });
});
