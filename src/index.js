// @flow
import * as heap from './ds/heap';
import heapSort from './sort/heapSort';
import mergeSort from './sort/mergeSort';
import quickSort from './sort/quickSort';

export default {
    ds: {
        heap,
    },
    sort: {
        heapSort,
        quickSort,
        mergeSort,
    },
};
