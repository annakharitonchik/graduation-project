function main4() {
  var num1 = document.querySelectorAll(".counter p")[1];
  var num = document.querySelector(".counter p");
  var money = document.querySelector(".first");
  var money1 = document.querySelector(".second");
  var sum = document.querySelector(".sum");

  var basicCount = 1;
  var seniorCount = 1;

  var basicCost = 20;
  var seniorCost = 10;

  changeBasicCount(basicCount);
  changeSeniorCount(seniorCount);

  function changeBasicCount(count) {
    if (count < 0) {
      return;
    }

    basicCount = count;

    num.innerText = count;
    basic.innerText = count;
    money.innerHTML = moneyString(count * basicCost);
    sum.innerHTML = moneyString(seniorCount * seniorCost + count * basicCost);
  }

  function changeSeniorCount(count) {
    if (count < 0) {
      return;
    }

    seniorCount = count;

    num1.innerText = count;
    senior.innerText = count;
    money1.innerHTML = moneyString(count * seniorCost);
    sum.innerHTML = moneyString(count * seniorCost + basicCount * basicCost);
  }

  function moneyString(money) {
    return `${money} &euro;`;
  }

  function plus() {
    changeBasicCount(basicCount + 1);
  }

  function minus() {
    changeBasicCount(basicCount - 1);
  }
  function plus1() {
    changeSeniorCount(seniorCount + 1);
  }

  function minus1() {
    changeSeniorCount(seniorCount - 1);
  }

  const [minusBtn, plusBtn, minus1Btn, plus1Btn] =
    document.querySelectorAll(".r button");

  minusBtn.onclick = minus;
  plusBtn.onclick = plus;
  minus1Btn.onclick = minus1;
  plus1Btn.onclick = plus1;
}

main4();
