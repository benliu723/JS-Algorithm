// @flow
const insertSort = <T>(
    items: Array<T>,
    start: number,
    end: number,
    comparator: (T, T) => boolean
) => {
    if (start < end) {
        for (let i = start + 1; i < end; i += 1) {
            const key = items[i];
            let j = i - 1;
            while (j >= start && comparator(items[j], key)) {
                items[j + 1] = items[j]; // eslint-disable-line no-param-reassign
                j -= 1;
            }
            items[j + 1] = key; // eslint-disable-line no-param-reassign
        }
    }
};

export default insertSort;
