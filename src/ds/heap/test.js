// @flow
import * as utils from '../../utils';
import Heap from '.';

describe('heap', () => {
    it('build max heap', () => {
        const heap = new Heap(utils.random(10, 100), (a, b) => a > b);
        heap.build();
        expect(heap.isHeap()).toBeTruthy();
    });
    it('build min heap', () => {
        const heap = new Heap(utils.random(10, 100), (a, b) => a < b);
        heap.build();
        expect(heap.isHeap()).toBeTruthy();
    });

    it('isHeap', () => {
        const heap = new Heap(
            [96, 78, 39, 77, 100, 68, 37, 8, 3, 39, 37],
            (a, b) => a > b
        );
        expect(heap.isHeap()).toBeFalsy();
        heap.build();
        expect(heap.isHeap()).toBeTruthy();
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
        const heap = new Heap(items, (a, b) => a.val > b.val);
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
