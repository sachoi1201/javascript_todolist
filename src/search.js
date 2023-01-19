var Search = function () {};

Search.prototype = {
  show: function () {},
  filtering: function () {},
};

/*
1. save 시점에 로컬스토리지에서 가져와서 리스트로 저장 itemArray = []
2. input 할 때 filtering 함수 발생
2-1. filtering : itemArray와 input.value의 값을 비교해서 적절한 값을 return
*/
