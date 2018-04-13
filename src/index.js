// @flow
import * as heap from './ds/heap';
import heapSort from './sort/heapSort';
import mergeSort from './sort/mergeSort';
import quickSort from './sort/quickSort';
import insertSort from './sort/insertSort';
import selectSort from './sort/selectSort';
import bubbleSort from './sort/bubbleSort';

export default {
    ds: {
        heap,
    },
    sort: {
        heapSort,
        quickSort,
        mergeSort,
        insertSort,
        selectSort,
        bubbleSort,
    },
};
