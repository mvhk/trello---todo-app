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
  var input = document.getElementById("input");
  var item = input.value;

  // creating a textnode
  var textnode = document.createTextNode(item);

  // if empty input we will create a new para and alert the user to enter a todo
  if (item == "") {
    var newPara = document.createElement("p");
    newPara.textContent = "Enter a todo";
    document.getElementById("para").appendChild(newPara);
  }
  // if not empty then we need to create new todo
  else {
    // create li
    li = document.createElement("li");
    // create checkbox
    var checkbox = document.createElement("input");
    // set the checkbox type
    checkbox.type = "checkbox";
    // setting the id to the created li
    checkbox.setAttribute("id", "check");

    // create label
    var label = document.createElement("label");

    // adding the above label, checkbox , textnode to webpage
    li.appendChild(checkbox);
    label.appendChild(textnode);
    li.appendChild(label);
    ul.insertBefore(li, ul.childNodes[0]);
    // adding the timeout for the visual feel
    setTimeout(() => {
      li.className = "visual";
    }, 2);
    // clearing the input after the input
    input.value = "";
  }
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
