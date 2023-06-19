let shopTex = document.getElementsByClassName("carsine")[0];

let clicked = false;

bars.onclick = function () {
  bars.style.color = "red";
  setTimeout(() => (bars.style.color = "white"), 150);

  if (clicked) {
    shopTex.style.width = "0%";
    shopTex.style.height = "0%";
    shopTex.style.padding = "0px";
  } else {
    shopTex.style.width = "80%";
    shopTex.style.height = "80%";
    shopTex.style.padding = "30px";
  }

  clicked = !clicked;
};

let cartCount = 0;

function updateCounter() {
  counter.textContent = cartCount.toString();
}

function ADD1() {
  let row = document.createElement("div");
  shopTex.appendChild(row);
  row.setAttribute("class", "carsine_item");

  let image1 = document.getElementsByClassName("product_image")[0];
  let image1Clone = image1.cloneNode(true);
  let name1 = document.getElementsByClassName("item_name")[0].innerHTML;
  let price1 = document.getElementsByClassName("item_price")[0].innerHTML;

  let image1Block = document.createElement("div");
  row.appendChild(image1Block);
  image1Block.setAttribute("class", "style1");
  image1Block.appendChild(image1Clone);

  let name1Block = document.createElement("div");
  row.appendChild(name1Block);
  name1Block.innerHTML = name1;
  name1Block.setAttribute("class", "style1");

  let price1Block = document.createElement("div");
  row.appendChild(price1Block);
  price1Block.innerHTML = price1;
  price1Block.setAttribute("class", "style1");

  let del1BtnTex = document.createElement("div");
  row.appendChild(del1BtnTex);
  del1BtnTex.setAttribute("class", "style1");

  cartCount++;
  updateCartCounter();

  let del1Btn = document.createElement("button");
  del1BtnTex.appendChild(del1Btn);
  del1Btn.setAttribute("class", "style1");
  del1Btn.innerHTML = "X";
  del1Btn.style.fontSize = "20px";
  del1Btn.style.background = "red";
  del1Btn.style.border = "none";
  del1Btn.style.outline = "none";
  del1Btn.style.cursor = "pointer";

  del1Btn.addEventListener("click", deleteCarsineRow);

  function deleteCarsineRow() {
    shopTex.removeChild(row);

    if (cartCount > 0) {
      cartCount--;
      updateCartCounter();
    }
  }

  clear.addEventListener("click", clearCarsine);

  function clearCarsine() {
    shopTex.removeChild(row);

    cartCount = 0;
    counter.textContent = cartCount;
  }
}

function ADD2() {
  let row = document.createElement("div");
  shopTex.appendChild(row);
  row.setAttribute("class", "carsine_item");

  let image2 = document.getElementsByClassName("product_image")[1];
  let image2Clone = image2.cloneNode(true);
  let name2 = document.getElementsByClassName("item_name")[1].innerHTML;
  let price2 = document.getElementsByClassName("item_price")[1].innerHTML;

  let image2Block = document.createElement("div");
  row.appendChild(image2Block);
  image2Block.setAttribute("class", "style1");
  image2Block.appendChild(image2Clone);

  let name2Block = document.createElement("div");
  row.appendChild(name2Block);
  name2Block.innerHTML = name2;
  name2Block.setAttribute("class", "style1");

  let price2Block = document.createElement("div");
  row.appendChild(price2Block);
  price2Block.innerHTML = price2;
  price2Block.setAttribute("class", "style1");

  cartCount++;
  updateCartCounter();

  let del2BtnTex = document.createElement("div");
  row.appendChild(del2BtnTex);
  del2BtnTex.setAttribute("class", "style1");

  let del2Btn = document.createElement("button");
  del2BtnTex.appendChild(del2Btn);
  del2Btn.setAttribute("class", "style1");
  del2Btn.innerHTML = "X";
  del2Btn.style.fontSize = "20px";
  del2Btn.style.background = "red";
  del2Btn.style.border = "none";
  del2Btn.style.outline = "none";
  del2Btn.style.cursor = "pointer";

  del2Btn.addEventListener("click", deleteCarsineRow);

  function deleteCarsineRow() {
    shopTex.removeChild(row);

    if (cartCount > 0) {
      cartCount--;
      updateCartCounter();
    }
  }

  clear.addEventListener("click", clearCarsine);

  function clearCarsine() {
    shopTex.removeChild(row);

    cartCount = 0;
    counter.textContent = cartCount;
  }
}

function ADD3() {
  let row = document.createElement("div");
  shopTex.appendChild(row);
  row.setAttribute("class", "carsine_item");

  let image3 = document.getElementsByClassName("product_image")[2];
  let image3Clone = image3.cloneNode(true);
  let name3 = document.getElementsByClassName("item_name")[2].innerHTML;
  let price3 = document.getElementsByClassName("item_price")[2].innerHTML;

  let image3Block = document.createElement("div");
  row.appendChild(image3Block);
  image3Block.setAttribute("class", "style1");
  image3Block.appendChild(image3Clone);

  let name3Block = document.createElement("div");
  row.appendChild(name3Block);
  name3Block.innerHTML = name3;
  name3Block.setAttribute("class", "style1");

  let price3Block = document.createElement("div");
  row.appendChild(price3Block);
  price3Block.innerHTML = price3;
  price3Block.setAttribute("class", "style1");

  let del3BtnTex = document.createElement("div");
  row.appendChild(del3BtnTex);
  del3BtnTex.setAttribute("class", "style1");

  cartCount++;
  updateCartCounter();

  let del3Btn = document.createElement("button");
  del3BtnTex.appendChild(del3Btn);
  del3Btn.setAttribute("class", "style1");
  del3Btn.innerHTML = "X";
  del3Btn.style.fontSize = "20px";
  del3Btn.style.background = "red";
  del3Btn.style.border = "none";
  del3Btn.style.outline = "none";
  del3Btn.style.cursor = "pointer";

  del3Btn.addEventListener("click", deleteCarsineRow);

  function deleteCarsineRow() {
    shopTex.removeChild(row);

    if (cartCount > 0) {
      cartCount--;
      updateCartCounter();
    }
  }

  clear.addEventListener("click", clearCarsine);

  function clearCarsine() {
    shopTex.removeChild(row);

    cartCount = 0;
    counter.textContent = cartCount;
  }
}

function ADD4() {
  let row = document.createElement("div");
  shopTex.appendChild(row);
  row.setAttribute("class", "carsine_item");

  let image4 = document.getElementsByClassName("product_image")[3];
  let image4Clone = image4.cloneNode(true);
  let name4 = document.getElementsByClassName("item_name")[3].innerHTML;
  let price4 = document.getElementsByClassName("item_price")[3].innerHTML;

  let image4Block = document.createElement("div");
  row.appendChild(image4Block);
  image4Block.setAttribute("class", "style1");
  image4Block.appendChild(image4Clone);

  let name4Block = document.createElement("div");
  row.appendChild(name4Block);
  name4Block.innerHTML = name4;
  name4Block.setAttribute("class", "style1");

  let price4Block = document.createElement("div");
  row.appendChild(price4Block);
  price4Block.innerHTML = price4;
  price4Block.setAttribute("class", "style1");

  let del4BtnTex = document.createElement("div");
  row.appendChild(del4BtnTex);
  del4BtnTex.setAttribute("class", "style1");

  cartCount++;
  updateCartCounter();

  let del4Btn = document.createElement("button");
  del4BtnTex.appendChild(del4Btn);
  del4Btn.setAttribute("class", "style1");
  del4Btn.innerHTML = "X";
  del4Btn.style.fontSize = "20px";
  del4Btn.style.background = "red";
  del4Btn.style.border = "none";
  del4Btn.style.outline = "none";
  del4Btn.style.cursor = "pointer";

  del4Btn.addEventListener("click", deleteCarsineRow);

  function deleteCarsineRow() {
    shopTex.removeChild(row);

    if (cartCount > 0) {
      cartCount--;
      updateCartCounter();
    }
  }
  clear.addEventListener("click", clearCarsine);

  function clearCarsine() {
    shopTex.removeChild(row);

    cartCount = 0;
    counter.textContent = cartCount;
  }
}
