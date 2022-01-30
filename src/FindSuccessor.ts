// This is an input class. Do not edit.
export class BinaryTree {
    value: number;
    left: BinaryTree | null;
    right: BinaryTree | null;
    parent: BinaryTree | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

export function findSuccessor(tree: BinaryTree, node: BinaryTree) {
    // Write your code here.
    if (node.right !== null) {
        return getLeftMostChild(node.right);
    }
    return getRightMostParent(node);
}

function getLeftMostChild(node: BinaryTree) {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}

function getRightMostParent(node: BinaryTree) {
    while (node.parent !== null) {
        if (node.parent.right === node) {
            node = node.parent;
        } else {
            return node.parent;
        }
    }
    return null;
}

