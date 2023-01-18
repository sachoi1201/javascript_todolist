var Item = function (content) {
  this.$item = document.createElement("div");
  this.$item.classList.add("item");

  this.$check = document.createElement("button");
  this.$check.classList.add("check");
  this.$check.textContent = "Check";

  this.$content = document.createElement("h2");
  this.$content.textContent = content;

  this.$delete = document.createElement("button");
  this.$delete.classList.add("delete");
  this.$delete.textContent = "Delete";
};

Item.prototype = {
  add: function () {
    var $btnElement = document.createElement("div");
    $btnElement.classList.add("btn");
    $btnElement.appendChild(this.$check);
    $btnElement.appendChild(this.$delete);

    this.$item.appendChild(this.$content);
    this.$item.appendChild($btnElement);
    $todoItems.appendChild(this.$item);
    this.scroll();
  },
  scroll: function () {
    this.$item.scrollIntoView({ behavior: "smooth", block: "center" });
  },
  event: function () {
    this.$check.addEventListener(
      "click",
      function () {
        if (this.$check.textContent === "Check") {
          this.$check.textContent = "Checked";
          this.$check.classList.add("checked");
          this.$content.style.opacity = "0.2";
        } else {
          this.$check.textContent = "Check";
          this.$check.classList.remove("checked");
          this.$content.style.opacity = "1";
        }
      }.bind(this)
    );

    this.$delete.addEventListener(
      "click",
      function () {
        this.$item.remove();
      }.bind(this)
    );
  },
  render: function () {
    this.add();
    this.event();
  },
};
