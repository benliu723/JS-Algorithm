export const swap = <T>(list: Array<T>, i: number, j: number) => {
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
};

export const random = (len: number, factor: number): Array<number> => {
    return Array(len)
        .fill(1)
        .map(() => Math.round(Math.random() * factor));
};

export const isSorted = <T>(
    list: Array<T>,
    comparator: (item1: T, item2: T) => boolean
): boolean => {
    let flag = true;
    let i = 0;
    while (i < list.length - 1) {
        if (comparator(list[i], list[i + 1])) {
            flag = false;
            break;
        }
        i += 1;
    }
    return flag;
};
