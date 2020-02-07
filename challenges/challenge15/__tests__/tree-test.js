'use strict';

const BinaryTree = require('../tree.js');
const Node = require('../node/index.js');

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
        
    tree = new BinaryTree(one); //because its a root node
  });
  it('preOrder()', ()=>{ // function
    //    console.log(tree.preOrder());
    let expectedArray1 = [1, 2, 3, 4, 7, 6, 5];
    let preOrder = tree.preOrder(); //initiolization
    expect(preOrder).toEqual(expectedArray1); //assertion

  });
  it('inOrder()', ()=>{
    // console.log(tree.inOrder());
    let expectedArray2 =  [2, 1, 7, 4, 6, 3, 5];
    let inOrder = tree.inOrder(); 
    expect(inOrder).toEqual(expectedArray2);
              
          
  });
  it('postOrder()', () => {
    // console.log(tree.preOrder());
    let expectedArray3 =  [2, 7, 6, 4, 5, 3, 1];
    let postOrder = tree.postOrder();
    expect(postOrder).toEqual(expectedArray3);
              
          
  });

});