// @flow
import * as utils from '../../utils';

const bubbleSort = <T>(items: Array<T>, comparator: (T, T) => boolean) => {
    for (let i = 0; i < items.length - 1; i += 1) {
        for (let j = items.length - 1; j >= i; j -= 1) {
            if (comparator(items[j - 1], items[j])) {
                utils.swap(items, j - 1, j);
            }
        }
    }
};

export default bubbleSort;
