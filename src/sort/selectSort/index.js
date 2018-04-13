// @flow
import * as utils from '../../utils';

const selectSort = <T>(items: Array<T>, comparator: (T, T) => boolean) => {
    for (let i = 0; i < items.length; i += 1) {
        for (let j = i + 1; j < items.length; j += 1) {
            if (comparator(items[i], items[j])) {
                utils.swap(items, i, j);
            }
        }
    }
};

export default selectSort;
