// @flow
import alg from '.';

describe('algorithm object', () => {
    it('check properties', () => {
        expect(alg.ds.heap).not.toBeUndefined();
        expect(alg.sort.heapSort).not.toBeUndefined();
    });
});
