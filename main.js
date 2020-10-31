var shopCart = new Array();

var item1 = ["Arroz", 2, "R$80"],
  item2 = ["Feijão", 5, "R$40"],
  item3 = ["Pão", 15, "R$10"],
  item4 = ["Fermento", 4, "R$20"],
  item5 = ["Aveia", 4, "R$20"],
  item6 = ["Presunto", "500g", "R$10"],
  item7 = ["Mussarela", "250g", "R$10"],
  item8 = ["Waffer", 4, "R$10"],
  item9 = ["Manteiga", 2, "R$10"],
  item10 = ["Bombom", 4, "R$15"],
  item11 = ["Tomate", "1kg", "R$10"],
  item12 = ["Brócolis", "1kg", "R$10"],
  item13 = ["Chocolate", "250g", "R$7"],
  item14 = ["Bolo", 2, "R$40"],
  item15 = ["Açúcar", 10, "R$30"],
  item16 = ["Chá", 1, "R$5"],
  item17 = ["Peito de frango", "1kg", "R$20"],
  item18 = ["Fini", 2, "R$10"],
  item19 = ["Leite", 12, "R$25"],
  item20 = ["Ovo", 16, "R$10"];


shopCart.push(item1);
shopCart.push(item2);
shopCart.push(item3);
shopCart.push(item4);
shopCart.push(item5);
shopCart.push(item6);
shopCart.push(item7);
shopCart.push(item8);
shopCart.push(item9);
shopCart.push(item10);
shopCart.push(item11);
shopCart.push(item12);
shopCart.push(item13);
shopCart.push(item14);
shopCart.push(item15);
shopCart.push(item16);
shopCart.push(item17);
shopCart.push(item18);
shopCart.push(item19);
shopCart.push(item20);


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
  var lengItem = 0;

  while (lengItem < cartLeng) {
    var index = shopCart[lengItem][0]
      .indexOf(itemSearch);
    console.log(index +" "+lengItem);
    
    if (index >= 0) {
      printItem.innerHTML = shopCart[lengItem][0];
      printAmount.innerHTML = shopCart[lengItem][1];
      printPrice.innerHTML = shopCart[lengItem][2];
      tryCount = 0;
      break;
    }
    lengItem++;
  }
  if (lengItem == cartLeng) {
    alert("Desculpe, mas não encontramos o item pesquisado. 😔");
    tryCount++;
    
    if (tryCount == 3) {
      alert("Tente pesquisar com a primeira letra maiúscula.");
      tryCount = 0;
    }
  } 
}