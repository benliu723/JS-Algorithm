// @flow
export const swap = <T>(items: Array<T>, i: number, j: number) => {
    /* eslint-disable no-param-reassign */
    const temp = items[i];
    items[i] = items[j];
    items[j] = temp;
    /* eslint-enable no-param-reassign */
};

export const random = (len: number, factor: number): Array<number> =>
    Array(len)
        .fill()
        .map(() => Math.round(Math.random() * factor));

export const isSorted = <T>(items: Array<T>, comparator: (T, T) => boolean): boolean => {
    let flag = true;
    let i = 0;
    while (i < items.length - 1) {
        if (comparator(items[i], items[i + 1])) {
            flag = false;
            break;
        }
        i += 1;
    }
    return flag;
};
