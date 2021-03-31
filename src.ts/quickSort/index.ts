import { swap } from '../utils';

export const partition = <T>(
    list: Array<T>,
    start: number,
    end: number,
    comparator: (item1: T, item2: T) => boolean
): number => {
    const pivot = start;
    let i = start;
    let j = i + 1;
    while (j <= end) {
        if (comparator(list[pivot], list[j])) {
            i += 1;
            swap(list, i, j);
        }
        j += 1;
    }
    swap(list, pivot, i);
    return i;
};

const quickSort = <T>(
    list: Array<T>,
    start: number,
    end: number,
    comparator: (item1: T, item2: T) => boolean
): void => {
    if (start < end) {
        const p = partition(list, start, end, comparator);
        quickSort(list, start, p, comparator);
        quickSort(list, p + 1, end, comparator);
    }
};

export default quickSort;
