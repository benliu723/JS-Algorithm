// @flow
import countSort from '.';

describe('countSort()', () => {
    it('min -> max', () => {
        const items = [78, 96, 39, 77, 68, 37, 8, 3, 39, 37];
        const sortedItems = countSort(items);
        expect(sortedItems).toEqual([3, 8, 37, 37, 39, 39, 68, 77, 78, 96]);
    });
});
