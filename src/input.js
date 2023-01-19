var itemArray = [];
var Input = function () {
  this.$input = document.createElement("input");
  this.$input.placeholder = "Item";
  this.value = "";
};

Input.prototype = {
  make: function () {
    $todoInput.appendChild(this.$input);
  },
  event: function () {
    this.$input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        if (this.value === "") {
          return;
        }
        var itemElement = new Item(this.value, "Check");
        itemElement.render();
        this.value = "";
        this.focus();

        $todoSearch.style.display = "none";
      }
    });
    this.$input.addEventListener("input", function () {
      filtering(this.value);
    });
  },
  render: function () {
    this.make();
    this.event();
  },
};
