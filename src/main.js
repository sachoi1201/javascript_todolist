var $todo = document.querySelector("#todo");
var $todoInput = document.querySelector(".todo__input");
var $todoItems = document.querySelector(".todo__items");
var $todoSearch = document.querySelector(".todo__search");
var $save = document.querySelector(".save");
var $clear = document.querySelector(".todo__alldelete");
var itemNumber = getLocalStorage() || 0;
var currentItemNumber = localStorage.length;
var inputState = false;
var itemArray = [];
var inputElement = new Input();
inputElement.render();

function getLocalStorage() {
  itemNumber = Number(localStorage.getItem("number"));
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (key === "number") {
      continue;
    }
    var value = localStorage.getItem(key);
    var content = value.split(",")[0];
    var checkState = value.split(",")[1];

    var itemElement = new Item(content, checkState);
    itemElement.render();
  }
  return itemNumber;
}
function filtering(value) {
  console.log(itemArray);
  for (var i = 0; i < itemArray.length; i++) {
    if (itemArray[i].includes(value)) {
      console.log(itemArray[i]);
    }
  }
}
