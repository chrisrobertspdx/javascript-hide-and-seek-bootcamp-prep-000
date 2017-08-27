function test() {
  console.log("hello world");
}

function getFirstSelector(selector) {
  console.log( document.querySelector(selector) )
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild2() {
  const lis = document.querySelectorAll('div#nested div');
  console.log(lis.length);
  var nodes = [];
  for (let i = 0; i < lis.length; i++) {
    nodes.push(lis[i])
  }
  var curr = nodes.shift();
  while (nodes.length > 1) {
    if (curr.children.length > 0) {
      for (let c = 0; c < curr.children.length; c++) {
        nodes.push(curr.children[c])
      }
      curr = nodes.shift();
    }
  }
  console.log(curr);
  return curr

}

function deepestChild() {
  const lis = document.querySelectorAll('div#grand-node div');
  console.log(lis.length);
  var node = lis[0];
  while (node.children.length > 0) {
    node = node.children[0]
  }
  console.log(node);
  return node

}
