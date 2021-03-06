// @flow
import * as utils from '../../utils';
import quickSort from '.';

describe('quickSort()', () => {
    it('min -> max Array<number>', () => {
        const items = [78, 96, 39, 77, 68, 37, 8, 3, 39, 37];
        const comparator = (a: number, b: number) => a > b;
        expect(utils.isSorted(items, comparator)).toBeFalsy();
        quickSort(items, 0, items.length, comparator);
        expect(utils.isSorted(items, comparator)).toBeTruthy();
        expect(items).toEqual([3, 8, 37, 37, 39, 39, 68, 77, 78, 96]);
    });

    it('max -> min Array<number>', () => {
        const items = [78, 96, 39, 77, 68, 37, 8, 3, 39, 37];
        const comparator = (a: number, b: number) => a < b;
        expect(utils.isSorted(items, comparator)).toBeFalsy();
        quickSort(items, 0, items.length, comparator);
        expect(utils.isSorted(items, comparator)).toBeTruthy();
        expect(items).toEqual([96, 78, 77, 68, 39, 39, 37, 37, 8, 3]);
    });

    it('sort complex items Array<{val: number}>', () => {
        const items = [
            { val: 78 },
            { val: 96 },
            { val: 39 },
            { val: 77 },
            { val: 68 },
            { val: 37 },
            { val: 8 },
            { val: 3 },
            { val: 39 },
            { val: 37 },
        ];
        const comparator = (a: { val: number }, b: { val: number }) => a.val > b.val;
        expect(utils.isSorted(items, comparator)).toBeFalsy();
        quickSort(items, 0, items.length, comparator);
        expect(utils.isSorted(items, comparator)).toBeTruthy();
    });
});
