var shopCart = new Array();

var itemIndex = 0;

function addItem() {
  shopCart[itemIndex] = [];

  var itemName = prompt("Item:");
  var itemAmount = prompt("Quantidade:");
  var itemPrice = prompt("Preço:");

  if ((itemName || itemAmount || itemPrice) == "")
    shopCart.pop();
  else if ((itemName || itemAmount || itemPrice) == null)
    shopCart.pop();
  else {
    shopCart[itemIndex].push(itemName, itemAmount, "R$"+itemPrice);
    itemIndex++;
  }
}

var printItem = document
    .querySelector("#item");
var printAmount = document
    .querySelector("#amount");
var printPrice = document
    .querySelector("#price");

var tryCount = 0;

function searchItem(item) {
  var itemSearch = prompt("Procure por um item na lista de compras:");
  var cartLeng = shopCart.length;
  var itemLeng = 0;

  while (itemLeng < cartLeng) {
    var index = shopCart[itemLeng][0]
      .indexOf(itemSearch);
    
    if (index >= 0) {
      printItem.innerHTML = shopCart[itemLeng][0];
      printAmount.innerHTML = shopCart[itemLeng][1];
      printPrice.innerHTML = shopCart[itemLeng][2];
      
      tryCount = 0;
      break;
    }
    itemLeng++;
  }
  if (itemLeng == cartLeng) {
    alert("Desculpe, mas não encontramos o item pesquisado. 😔");
    tryCount++;
    
    if (tryCount == 3) {
      alert("Lembre-se de adicionar algum item antes de procurar.");
      tryCount = 0;
    }
  } 
}