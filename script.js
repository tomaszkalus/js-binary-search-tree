class Node{
    constructor(){
        this.value = null;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(array){
        this.array = prepareArray(array);
        this.root = buildTree(array);
    }

}

function prepareArray(array){
    const sorted_arr = array.sort(function(a, b){return a - b;  });
    const unique_arr = sorted_arr.filter((item, pos, arr) => {
        return (!pos || item != arr[pos - 1]);
    });
    return unique_arr;
}

function buildTree(array){
    if(array.length === 1){
        return null;
    }
    const mid = Math.floor(array.length / 2);
    const root = new Node();
    root.value = array[mid];
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    root.left = buildTree(left);
    root.right = buildTree(right);
    return root;
}

function insert(root, value){
    if(root === null){
        const node = new Node();
        node.value = value;
        return node;
    }
    else{
        if(root.value === value){return root;}
        else if(root.value < value){insert(root.right, value);}
        else{insert(root.left, value);}
    }
    return root;

}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  };

const arr = [1,3,3,3,3,4,6,73,9,12,6,43,68,7,8];
const prepared_arr = prepareArray(arr);
console.log(prepared_arr);

let tree = buildTree(prepared_arr);

console.log(tree);
prettyPrint(tree);

tree2 = insert(tree, 2137);
prettyPrint(tree2);


