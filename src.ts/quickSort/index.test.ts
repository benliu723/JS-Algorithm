import * as utils from '../utils';
import quickSort from '.';

describe('quickSort', () => {
    it('sort: asc', () => {
        const list = utils.random(10, 10);
        const comparator = (a: number, b: number) => a > b;
        expect(utils.isSorted(list, comparator)).toBeFalsy();
        quickSort(list, 0, list.length - 1, comparator);
        expect(utils.isSorted(list, comparator)).toBeTruthy();
    });

    it('sort complex list', () => {
        const list = [
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
        const comparator = (a: { val: number }, b: { val: number }) =>
            a.val > b.val;
        expect(utils.isSorted(list, comparator)).toBeFalsy();
        quickSort(list, 0, list.length - 1, comparator);
        console.log(list);
        expect(utils.isSorted(list, comparator)).toBeTruthy();
    });
});
