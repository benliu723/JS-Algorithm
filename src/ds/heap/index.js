// @flow
import * as utils from '../../utils';

class Heap<T> {
    heapSize: number;
    items: Array<T>;
    comparator: (T, T) => boolean;
    constructor(items: Array<T>, comp: (T, T) => boolean) {
        this.heapSize = items.length;
        this.items = items;
        this.comparator = comp;
    }
    parent = (i: number): number => Math.floor((i + 1) / 2) - 1;
    left = (i: number): number => 2 * i + 1;
    right = (i: number): number => 2 * i + 2;
    heapify = (i: number) => {
        const { left, right, items, heapSize, comparator, heapify } = this;
        let largest = i;
        const l = left(i);
        const r = right(i);
        if (l < heapSize && comparator(items[l], items[largest])) {
            largest = l;
        }
        if (r < heapSize && comparator(items[r], items[largest])) {
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
    isHeap = (): boolean => {
        const { items, comparator, parent } = this;
        let i = items.length - 1;
        while (i >= 0 && parent(i) >= 0) {
            if (comparator(items[i], items[parent(i)])) {
                return false;
            }
            i -= 1;
        }
        return true;
    };
    shift = (): T => {
        const { items, heapify } = this;
        utils.swap(items, 0, this.heapSize - 1);
        this.heapSize -= 1;
        heapify(0);
        return this.items[this.heapSize];
    };
}

class MaxHeap<T> extends Heap<T> {
    maximum = () => this.items[0];
    extractMax = () => this.shift();
    increaseKey = (i: number, key: T) => {
        const { parent, comparator, items } = this;
        items[i] = key;
        let cursor = i;
        while (parent(cursor) >= 0 && comparator(items[cursor], items[parent(cursor)])) {
            utils.swap(items, cursor, parent(cursor));
            cursor = parent(cursor);
        }
    };
    append = (key: T) => {
        const { items, increaseKey } = this;
        this.heapSize += 1;
        items.push(key);
        // $FlowFixMe
        increaseKey(this.heapSize - 1, key);
    };
}

class MinHeap<T> extends Heap<T> {
    minimum = (): T => this.items[0];
    extractMin = () => this.shift();
    decreaseKey = (i: number, key: T): void => {
        const { parent, comparator, items } = this;
        items[i] = key;
        let cursor = i;
        while (parent(cursor) >= 0 && comparator(items[cursor], items[parent(cursor)])) {
            utils.swap(items, cursor, parent(cursor));
            cursor = parent(cursor);
        }
    };
    append = (key: T) => {
        const { items, decreaseKey } = this;
        this.heapSize += 1;
        items.push(key);
        // $FlowFixMe
        decreaseKey(this.heapSize - 1, key);
    };
}

export { MaxHeap, MinHeap, Heap };
