// @flow

type Node<T> = {
    parent?: Node<T>,
    left?: Node<T>,
    right?: Node<T>,
    key: T,
};

type BinaryTree<T> = { root?: Node<T> };

export const maxmium = <T>(node: Node<T>) => {
    let iter = node;
    while (iter.right) {
        iter = iter.right;
    }
    return iter;
};

export const minium = <T>(node: Node<T>): Node<T> => {
    let iter = node;
    while (iter.left) {
        iter = iter.left;
    }
    return iter;
};

export const inorderTreeWalk = <T>(node?: Node<T>, items: Array<Node<T>>) => {
    if (!node) {
        return;
    }
    inorderTreeWalk(node.left, items);
    items.push(node);
    inorderTreeWalk(node.right, items);
};

export const preorderTreeWalk = <T>(node?: Node<T>, items: Array<Node<T>>) => {
    if (node === undefined) {
        return;
    }
    items.push(node);
    preorderTreeWalk(node.left, items);
    preorderTreeWalk(node.right, items);
};

export const postOrderTreeWalk = <T>(node?: Node<T>, items: Array<Node<T>>) => {
    if (!node) {
        return;
    }
    postOrderTreeWalk(node.left, items);
    postOrderTreeWalk(node.right, items);
    items.push(node);
};

export const insert = <T>(
    tree: BinaryTree<T>,
    node: Node<T>,
    comparator: (T, T) => boolean
) => {
    let iter = tree.root;
    let parent;
    while (iter) {
        parent = iter;
        if (comparator(iter.key, node.key)) {
            iter = iter.left;
        } else iter = iter.right;
    }
    node.parent = parent; // eslint-disable-line
    if (!parent) {
        tree.root = node; // eslint-disable-line
    } else if (comparator(parent.key, node.key)) {
        parent.left = node;
    } else parent.right = node;
};

export const transplant = <T>(tree: BinaryTree<T>, u: Node<T>, v?: Node<T>) => {
    if (!u.parent) {
        tree.root = v; // eslint-disable-line
    } else if (u.parent.left === u) {
        u.parent.left = v; // eslint-disable-line
    } else {
        u.parent.right = v; // eslint-disable-line
    }
    if (v) {
        v.parent = u.parent; // eslint-disable-line
    }
};

export const search = <T>(tree: BinaryTree<T>, key: T, comparator: (T, T) => boolean) => {
    let iter = tree.root;
    while (iter) {
        if (key === iter.key) {
            break;
        } else if (comparator(key, iter.key)) {
            iter = iter.right;
        } else {
            iter = iter.left;
        }
    }
    if (iter) return iter;
    return undefined;
};

export const preSuccussor = () => {};
export const successor = () => {};

export const deleteNode = <T>(tree: BinaryTree<T>, node: Node<T>) => {
    const { left, right } = node;
    if (left === undefined) {
        transplant(tree, node, right);
    } else if (right === undefined) {
        transplant(tree, node, left);
    } else {
        const preSucc = minium(right);
        if (preSucc.parent !== node) {
            transplant(tree, preSucc, preSucc.right);
            preSucc.right = right;
            right.parent = preSucc;
        }
        transplant(tree, node, preSucc);
        preSucc.left = left;
        left.parent = preSucc;
    }
};

export const create = <T>(
    items: Array<T>,
    comparator: (T, T) => boolean
): BinaryTree<T> =>
    items.reduce((reducer, val) => {
        insert(reducer, { key: val }, comparator);
        return reducer;
    }, {});

export const isBST = () => {};
