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
        iter = node.right;
    }
    return iter;
};

export const minium = <T>(node: Node<T>) => {
    let iter = node;
    while (iter.left) {
        iter = node.left;
    }
    return iter;
};

export const inorderTreeWalk = <T>(node?: Node<T>, items: Array<Node<T>>) => {
    if (node === undefined) {
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
    if (node === undefined) {
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
    while (iter !== undefined) {
        parent = iter;
        if (comparator(iter.key, node.key)) {
            iter = iter.left;
        } else iter = iter.right;
    }
    node.parent = parent; // eslint-disable-line
    if (parent === undefined) {
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

export const deleteNode = <T>(tree: BinaryTree<T>, node: Node<T>) => {
    if (node.left === undefined) {
        transplant(tree, node, node.right);
    } else if (node.right === undefined) {
        transplant(tree, node, node.left);
    } else {
        const preSuccussor = minium(node.right);
        if (preSuccussor.parent !== node) {
            transplant(tree, preSuccussor, preSuccussor.right);
            preSuccussor.right = node.right;
            preSuccussor.right.parent = preSuccussor;
        }
        transplant(tree, node, preSuccussor);
        preSuccussor.left = node.left;
        preSuccussor.left.parent = preSuccussor;
    }
};
