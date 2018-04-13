// @flow
import bubbleSort from '.';

describe('bubbleSort()', () => {
    it('min -> max', () => {
        const items = [78, 96, 39, 77, 68, 37, 8, 3, 39, 37];
        bubbleSort(items, (a, b) => a > b);
        expect(items).toEqual([3, 8, 37, 37, 39, 39, 68, 77, 78, 96]);
    });
    it('max -> min', () => {
        const items = [78, 96, 39, 77, 68, 37, 8, 3, 39, 37];
        const comparator = (a: number, b: number) => a < b;
        bubbleSort(items, comparator);
        expect(items).toEqual([96, 78, 77, 68, 39, 39, 37, 37, 8, 3]);
    });
});
