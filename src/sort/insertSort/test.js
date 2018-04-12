// @flow
import insertSort from '.';

describe('insertSort()', () => {
    it('min -> max', () => {
        const arr = [78, 96, 39, 77, 68, 37, 8, 3, 39, 37];
        insertSort(arr, 0, arr.length, (a, b) => a > b);
        expect(arr).toEqual([3, 8, 37, 37, 39, 39, 68, 77, 78, 96]);
    });
    it('max -> min', () => {
        const arr = [78, 96, 39, 77, 68, 37, 8, 3, 39, 37];
        insertSort(arr, 0, arr.length, (a, b) => a < b);
        expect(arr).toEqual([96, 78, 77, 68, 39, 39, 37, 37, 8, 3]);
    });
    it('[]', () => {
        const arr = [];
        insertSort(arr, 0, arr.length, (a, b) => a < b);
        expect(arr).toEqual([]);
    });
});
