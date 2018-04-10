// @flow
import * as utils from '../../utils';

class Heap {
    heapSize: number;
    parent: number => number;
    left: number => number;
    right: number => number;
    items: Array<number>;
    comparator: (number, number) => boolean;
    isHeap: () => boolean;
    constructor(items: Array<number>) {
        this.heapSize = items.length;
        this.items = items;
    }
    parent = (i: number): number => Math.floor((i + 1) / 2) - 1;
    left = (i: number): number => 2 * i + 1;
    right = (i: number): number => 2 * i + 2;
    heapify = (i: number) => {
        const { left, right, items, heapSize, comparator, heapify } = this;
        let largest = i;
        const l = left(i);
        const r = right(i);
        if (l < heapSize && comparator(l, largest)) {
            largest = l;
        }
        if (r < heapSize && comparator(r, largest)) {
            largest = r;
        }
        if (i !== largest) {
            utils.swap(items, i, largest);
            heapify(largest);
        }
    };
    build = () => {
        const { heapSize, heapify } = this;
        for (let i = Math.floor(heapSize / 2 - 1); i >= 0; i -= 1) {
            heapify(i);
        }
    };
    isHeap = () => {
        const { items, comparator, parent } = this;
        let i = items.length - 1;
        while (i >= 0 && parent(i) >= 0) {
            if (comparator(i, parent(i))) {
                return false;
            }
            i -= 1;
        }
        return true;
    };
    shift = () => {
        const { items, heapify } = this;
        utils.swap(items, 0, this.heapSize - 1);
        this.heapSize -= 1;
        heapify(0);
        return this.items[this.heapSize];
    };
}

class MaxHeap extends Heap {
    extractMax: () => number;
    increaseKey: (number, number) => void;
    append: number => void;
    maximum: () => number;
    comparator = (i: number, j: number) => {
        const { items } = this;
        return items[i] > items[j];
    };
    maximum = () => this.items[0];
    extractMax = () => this.shift();
    increaseKey = (i: number, key: number) => {
        const { parent, comparator, items } = this;
        items[i] = key;
        let cursor = i;
        while (parent(cursor) >= 0 && comparator(cursor, parent(cursor))) {
            utils.swap(items, cursor, parent(cursor));
            cursor = parent(cursor);
        }
    };
    append = (key: number) => {
        const { items, increaseKey } = this;
        this.heapSize += 1;
        items.push(-Infinity);
        increaseKey(this.heapSize - 1, key);
    };
}

class MinHeap extends Heap {
    extractMin: () => number;
    minimum: () => number;
    decreaseKey: (number, number) => void;
    append: number => void;
    comparator = (i: number, j: number) => {
        const { items } = this;
        return items[i] < items[j];
    };
    minimum = () => this.items[0];
    extractMin = () => this.shift();
    decreaseKey = (i: number, key: number) => {
        const { parent, comparator, items } = this;
        items[i] = key;
        let cursor = i;
        while (parent(cursor) >= 0 && comparator(cursor, parent(cursor))) {
            utils.swap(items, cursor, parent(cursor));
            cursor = parent(cursor);
        }
    };
    append = (key: number) => {
        const { items, decreaseKey } = this;
        this.heapSize += 1;
        items.push(Infinity);
        decreaseKey(this.heapSize - 1, key);
    };
}

export { MaxHeap, MinHeap, Heap };
