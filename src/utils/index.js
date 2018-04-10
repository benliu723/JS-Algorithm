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
