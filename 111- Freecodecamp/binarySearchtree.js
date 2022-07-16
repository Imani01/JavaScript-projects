'use strict';
/* Binary Search Trees */

// All data points are called nodes Topmost is the Root Node
// Parent Node have Child nodes
// Leaf nodes have no children

class Node {
    constructor (data, left = null, right = null) { // set with default values
        this.data = data;
        this.left = left;
        this.right = right;
    }
};

class BST { // class Binary Search Tree 
    // call the constructor if it's the first item in the tree
    constructor () {
        this.root = 50;
    }
    add (data) {
        const node = this.root;
        if (node === null) //check if the root is null
        {
            this.root = new Node(data);
            return;
        } else { // if not null the value can either be added to the left or to the right (conditions);
            const searchTree = function (node) { // recursive function
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data); // passes in the data

                    } else if(node.left !== null) {
                        return searchTree(node.left);
                    } else {
                        return null;
                    };

                } else if (data > node.data) { // data is greater than the one in the  node
                    if (node.right === null) {
                        node.right = new Node(data);
                    } else if(node.right !== null){
                        return searchTree(node.right);
                    } else {
                        return null;
                    };
                    
                } else { // data === node.data
                    return null;
                };
            };
            return searchTree(node);
        }
    } 
};
