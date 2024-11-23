function main2() {
  var basicElem = document.querySelector(".counter p");
  var seniorElem = document.querySelectorAll(".counter p")[1];
  var totalelem = document.querySelector("h3 span");

  var basicNum = 1;
  var seniorNum = 1;
  const basicCost = 20;
  const seniorCost = 10;

  changeBasicCount(basicNum);
  changeSeniorCount(seniorNum);

  function changeBasicCount(count) {
    if (count < 0) {
      return;
    }
    basicNum = count;
    basicElem.innerText = basicNum;
    totalelem.innerHTML =
      "&euro;" + (basicNum * basicCost + seniorNum * seniorCost);
  }

  function changeSeniorCount(count) {
    if (count < 0) {
      return;
    }
    seniorNum = count;
    seniorElem.innerText = seniorNum;
    totalelem.innerHTML =
      "&euro;" + (basicNum * basicCost + seniorNum * seniorCost);
  }
  function plus() {
    changeBasicCount(basicNum + 1);
  }

  function minus() {
    changeBasicCount(basicNum - 1);
  }
  function plus1() {
    changeSeniorCount(seniorNum + 1);
  }

  function minus1() {
    changeSeniorCount(seniorNum - 1);
  }
  const [minusBtn, plusBtn, minus1Btn, plus1Btn] =
    document.querySelectorAll(".counter button");

  minusBtn.onclick = minus;
  plusBtn.onclick = plus;
  minus1Btn.onclick = minus1;
  plus1Btn.onclick = plus1;
}

main2();
