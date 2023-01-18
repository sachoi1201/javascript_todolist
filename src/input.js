var Input = function () {
  this.$input = document.createElement("input");
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
        var itemElement = new Item(this.value);
        itemElement.render();
        this.value = "";
        this.focus();
      }
    });
  },
  render: function () {
    this.make();
    this.event();
  },
};
