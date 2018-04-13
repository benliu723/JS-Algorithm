// @flow
const countSort = (items: Array<number>) => {
    const counter = items.reduce((counterArr, val) => {
        if (typeof counterArr[val] === 'number') {
            counterArr[val] += 1; // eslint-disable-line
        } else counterArr[val] = 1; // eslint-disable-line
        return counterArr;
    }, []);
    for (let i = 0; i < counter.length; i += 1) {
        counter[i] = counter[i] || 0;
        if (i > 0) {
            counter[i] += counter[i - 1];
        }
    }
    return items.reduce((sortedItems, val) => {
        sortedItems[counter[val] - 1] = val; // eslint-disable-line
        counter[val] -= 1;
        return sortedItems;
    }, []);
};

export default countSort;
