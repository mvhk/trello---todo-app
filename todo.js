var ul = document.getElementById("list");
var li;
var addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);
var removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItems);

function addItem() {
  console.log("add button clicked");
}
function removeItems() {
  li = ul.children;
  console.log(li);
  for (let index = 0; index < li.length; index++) {
    if (li[index].children[0].checked) {
      ul.removeChild(li[index]);
    }
  }
}
