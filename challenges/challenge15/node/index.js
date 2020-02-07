'use strict';

class Node{
  constructor(value, left=null, right=null){ //whenevr i create a new node the value of left and right is null and the value is wtv got passed in
    this.value= value;
    this.left= left;
    this.right= right;
  }
}
module.exports= Node;