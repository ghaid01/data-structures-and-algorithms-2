'use strict';

class BinaryTree{
  constructor(root= null){ // setting the initial value(es6)
    this.root= root;

  }

  preOrder(){ 
    let results = [];
    let _walkThrough = (node) => {//often is a recursive function(calling this function inside of the function)
      results.push(node.value);
      if(node.left) _walkThrough(node.left);
      if(node.right) _walkThrough(node.right);
    };
    _walkThrough(this.root);
    return results;

  }
  inOrder(){
    let results = [];
    let _walkThrough = (node) =>{
      if(node.left) _walkThrough(node.left);
      results.push(node.value);
      if(node.right) _walkThrough(node.right);
    };
    _walkThrough(this.root);
    return results;

  }
  postOrder(){
    let results = [];
    let _walkThrough = (node) => {
      if(node.left) _walkThrough(node.left);
      if(node.right) _walkThrough(node.right);
      results.push(node.value);
    };
    _walkThrough(this.root);
    return results;

  }

}
module.exports = BinaryTree;