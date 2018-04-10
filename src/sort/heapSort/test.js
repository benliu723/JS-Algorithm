// @flow
import { heapSort, reverseHeapSort } from '.';

describe('heap sort', () => {
    it('min -> max order', () => {
        const arr = [78, 96, 39, 77, 68, 37, 8, 3, 39, 37];
        heapSort(arr, (a, b) => a > b);
        expect(arr).toEqual([3, 8, 37, 37, 39, 39, 68, 77, 78, 96]);
    });
    it('max -> min order', () => {
        const arr = [78, 96, 39, 77, 68, 37, 8, 3, 39, 37];
        reverseHeapSort(arr, (a, b) => a < b);
        expect(arr).toEqual([96, 78, 77, 68, 39, 39, 37, 37, 8, 3]);
    });
});
