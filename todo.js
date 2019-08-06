var ul = document.getElementById("list");
var li;

var addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItems);

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearItems);

// add the todo typed in the input
function addItem() {
  console.log("add button clicked");
}

// to remove checked todos
function removeItems() {
  li = ul.children;
  for (let index = 0; index < li.length; index++) {
    if (li[index].children[0].checked) {
      ul.removeChild(li[index]);
    }
  }
}

// to clear all elements
function clearItems() {
  li = ul.children;
  for (let index = 0; index < li.length; index++) {
    while (li[index]) {
      ul.removeChild(li[index]);
    }
  }
}
