'use strict';

const BinaryTree = require('../fizz-buzz-tree.js');
const Node = require('../index.js');

describe('Making the binary tree', ()=>{
  let tree = null;

  beforeAll(() =>{
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    four.right = six;
    four.left = seven;
        
    tree = new BinaryTree(one); //because ones a root node
  });
  it('inOrder()', ()=>{
    // console.log(tree.inOrder());
    let expectedArray2 =  [2, 1, 7, 4, 6, 3, 5];
    let inOrder = tree.inOrder(); 
    expect(inOrder).toEqual(expectedArray2);
  });
});