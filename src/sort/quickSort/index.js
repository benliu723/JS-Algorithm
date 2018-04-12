// @flow
import * as utils from '../../utils';

const partition = <T>(
    items: Array<T>,
    start: number,
    end: number,
    comparator: (T, T) => boolean
): number => {
    const pivot = items[start];
    let i = start;
    let j = i + 1;
    while (j < end) {
        if (comparator(pivot, items[j])) {
            i += 1;
            utils.swap(items, i, j);
        }
        j += 1;
    }
    utils.swap(items, start, i);
    return i;
};

const quickSort = <T>(
    items: Array<T>,
    start: number,
    end: number,
    comparator: (T, T) => boolean
): void => {
    if (start < end) {
        const p = partition(items, start, end, comparator);
        quickSort(items, start, p, comparator);
        quickSort(items, p + 1, end, comparator);
    }
};

export default quickSort;
