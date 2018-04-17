// @flow
import * as binaryTree from '.';

describe('binary tree', () => {
    it('insert()', () => {
        const arr = [96, 78, 39, 77, 100, 68, 37, 8, 3, 39, 37];
        const tree = arr.reduce((reducer, val) => {
            binaryTree.insert(reducer, { key: val }, (a, b) => a > b);
            return reducer;
        }, {});
        expect(tree).toBe({});
    });
});
