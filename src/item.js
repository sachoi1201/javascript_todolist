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
    itemNumber += 1;
    var $btnElement = document.createElement("div");
    $btnElement.classList.add("btn");
    $btnElement.appendChild(this.$check);
    $btnElement.appendChild(this.$delete);

    this.$item.appendChild(this.$content);
    this.$item.appendChild($btnElement);
    this.$item.setAttribute("key", itemNumber);
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

    $save.addEventListener("click", function () {
      window.localStorage.clear();
      var allItems = document.querySelectorAll(".item");
      for (var i = 0; i < allItems.length; i++) {
        var key = allItems[i].getAttribute("key");
        var content = allItems[i].childNodes[0].textContent;
        var checkState = allItems[i].childNodes[1].childNodes[0].textContent;
        var arr = [];
        arr.push(content, checkState);
        localStorage.setItem(key, arr);
      }
      localStorage.setItem("number", itemNumber);
    });
  },
  render: function () {
    this.add();
    this.event();
  },
};
