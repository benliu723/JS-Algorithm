// @flow

const merge = <T>(
    items: Array<T>,
    p: number,
    q: number,
    r: number,
    comparator: (T, T) => boolean
) => {
    const left = items.slice(p, q);
    const right = items.slice(q, r + 1);
    let k = p;
    let i = 0;
    let j = 0;
    while (k <= r && i < left.length && j < right.length) {
        if (comparator(left[i], right[j])) {
            items[k] = right[j]; // eslint-disable-line no-param-reassign
            j += 1;
        } else {
            items[k] = left[i]; // eslint-disable-line no-param-reassign
            i += 1;
        }
        k += 1;
    }
    while (i < left.length) {
        items[k] = left[i]; // eslint-disable-line no-param-reassign
        i += 1;
        k += 1;
    }
    while (j < right.length) {
        items[k] = right[j]; // eslint-disable-line no-param-reassign
        j += 1;
        k += 1;
    }
};

const mergeSort = <T>(
    items: Array<T>,
    p: number,
    q: number,
    comparator: (T, T) => boolean
) => {
    if (p < q) {
        const m = Math.floor((p + q) / 2);
        mergeSort(items, p, m, comparator);
        mergeSort(items, m + 1, q, comparator);
        merge(items, p, m + 1, q, comparator);
    }
};

export default mergeSort;
