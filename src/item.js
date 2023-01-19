var Item = function (content, check) {
  this.$item = document.createElement("div");
  this.$item.classList.add("item");

  this.$check = document.createElement("button");
  this.$check.classList.add("check");
  this.$check.textContent = check;
  check === "Checked" ? this.$check.classList.add("checked") : null;

  this.$content = document.createElement("h2");
  this.$content.textContent = content;

  this.$underline = document.createElement("div");
  this.$underline.classList.add("underline");
  this.$content.appendChild(this.$underline);

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
    this.line();
    this.scroll();
  },
  scroll: function () {
    this.$item.scrollIntoView({ behavior: "smooth", block: "center" });
  },
  line: function () {
    this.$underline.style.visibility =
      this.$check.textContent === "Check" ? "hidden" : "visible";
  },
  event: function () {
    this.$check.addEventListener(
      "click",
      function () {
        if (this.$check.textContent === "Check") {
          this.$check.textContent = "Checked";
          this.$check.classList.add("checked");
          // this.$content.style.opacity = "0.2";
        } else {
          this.$check.textContent = "Check";
          this.$check.classList.remove("checked");
          // this.$content.style.opacity = "1";
        }
        this.line();
      }.bind(this)
    );

    this.$delete.addEventListener(
      "click",
      function () {
        this.$item.remove();
      }.bind(this)
    );

    $save.addEventListener("click", function () {
      localStorage.clear();
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

      itemArray.length = 0;
      for (var j = 0; j < localStorage.length; j++) {
        var _key = localStorage.key(j);
        if (_key === "number") {
          continue;
        }
        var _value = localStorage.getItem(_key);
        var _content = _value.split(",")[0];
        itemArray.push(_content);
      }
      console.log(itemArray);
      // currentItemNumber = localStorage.length;
    });

    $clear.addEventListener("click", function () {
      var Items = document.querySelectorAll(".item");
      for (var i = 0; i < Items.length; i++) {
        Items[i].remove();
      }
    });
  },
  render: function () {
    this.add();
    this.event();
  },
};
