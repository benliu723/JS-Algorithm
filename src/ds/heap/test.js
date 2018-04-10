// @flow
import * as utils from '../../utils';
import { MaxHeap, MinHeap } from '.';

describe('heap', () => {
    it('build max heap', () => {
        const heap = new MaxHeap(utils.random(10, 100));
        heap.build();
        expect(heap.isHeap()).toBeTruthy();
    });
    it('build min heap', () => {
        const heap = new MinHeap(utils.random(10, 100));
        heap.build();
        expect(heap.isHeap()).toBeTruthy();
    });
    it('append a value', () => {
        const maxHeap = new MaxHeap([96, 78, 39, 77, 68, 37, 8, 3, 39, 37]);
        maxHeap.build();
        maxHeap.append(100);
        expect(maxHeap.items).toEqual([100, 96, 39, 77, 78, 37, 8, 3, 39, 37, 68]);

        const minHeap = new MinHeap([3, 37, 8, 39, 68, 37, 39, 77, 96, 78]);
        minHeap.build();
        minHeap.append(5);
        expect(minHeap.items).toEqual([3, 5, 8, 39, 37, 37, 39, 77, 96, 78, 68]);
    });
    it('isHeap', () => {
        const heap = new MaxHeap([96, 78, 39, 77, 100, 68, 37, 8, 3, 39, 37]);
        expect(heap.isHeap()).toBeFalsy();
        heap.build();
        expect(heap.isHeap()).toBeTruthy();
    });
    it('increase key', () => {
        const items = [96, 78, 39, 77, 68, 37, 8, 3, 39, 37];
        const heap = new MaxHeap(items);
        heap.build();
        heap.increaseKey(5, 100);
        expect(heap.items).toEqual([100, 78, 96, 77, 68, 39, 8, 3, 39, 37]);
    });
    it('max related functions', () => {
        const items = [96, 78, 39, 77, 68, 37, 8, 3, 39, 37];
        const heap = new MaxHeap(items);
        heap.build();
        expect(heap.maximum()).toEqual(96);
        expect(heap.heapSize).toEqual(items.length);
        expect(heap.extractMax()).toEqual(96);
        expect(heap.heapSize).toEqual(items.length - 1);
    });

    it('decrease key', () => {
        const items = [3, 37, 8, 39, 68, 37, 39, 77, 96, 78];
        const heap = new MinHeap(items);
        heap.build();
        heap.decreaseKey(5, 1);
        expect(heap.items).toEqual([1, 37, 3, 39, 68, 8, 39, 77, 96, 78]);
    });
    it('mix related functions', () => {
        const items = [3, 37, 8, 39, 68, 37, 39, 77, 96, 78];
        const heap = new MinHeap(items);
        heap.build();
        expect(heap.minimum()).toEqual(3);
        expect(heap.heapSize).toEqual(items.length);
        expect(heap.extractMin()).toEqual(3);
        expect(heap.heapSize).toEqual(items.length - 1);
    });
});
