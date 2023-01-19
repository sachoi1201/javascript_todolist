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
        // currentItemNumber = localStorage.length;
        // $todoSearch.innerHTML = "";
        // $todoSearch.style.display = "none";
        // inputState = false;
      }
    });
    this.$input.addEventListener("input", function () {
      filtering(this.value);
    });
    // this.$input.addEventListener("input",function(){
    //   // filtering();
    //   // if(inputState){
    //   //     for(var j=0;j<currentItemNumber;j++){
    //   //         var _value = localStorage.getItem(localStorage.key(j)).split(',')[0];
    //   //         if(_value.includes(this.value) || _value === this.value){
    //   //             var h3 = document.createElement('h3');
    //   //             h3.textContent = _value;
    //   //             $todoSearch.appendChild(h3);
    //   //         }
    //   //     }
    //   //     return;
    //   // }
    //   // if(currentItemNumber === 1){
    //   //     return;
    //   // }
    //   // inputState = true;
    //   // $todoSearch.style.display = "block";
    //   // for(var i=0;i<currentItemNumber;i++){
    //   //     var key = localStorage.key(i);
    //   //     if(key === "number"){
    //   //         continue;
    //   //     }
    //   //     var value = localStorage.getItem(key);
    //   //     var content = value.split(',')[0];
    //   //     // var h3 = document.createElement('h3');
    //   //     // h3.textContent = content;
    //   //     // $todoSearch.appendChild(h3);
    //   // }
    // });
  },
  render: function () {
    this.make();
    this.event();
  },
};
