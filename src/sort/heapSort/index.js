// @flow
import Heap from '../../ds/heap';
import * as utils from '../../utils';

const heapSort = <T>(items: Array<T>, comp: (T, T) => boolean) => {
    const heap = new Heap(items, comp);
    heap.build();
    let i = heap.heapSize - 1;
    while (i > 0) {
        utils.swap(heap.items, 0, i);
        heap.heapSize -= 1;
        heap.heapify(0);
        i -= 1;
    }
};

export default heapSort;
