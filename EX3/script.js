let products = [
    {Name: "Computador", category: "Eletrónicos", price:800};
    {Name: "Telemovél", category: "Eletrónicos", price:500};
    {Name: "Teclado", category: "Acessório", price:80};
    
];

let myList = document.getElementById('productList');

for(i = 0; i < products.length; i++) {

    let product= products [i];

    let listItem = document.createElement("li");

    listItem.textContent = product.Name + " (" + product.category + "):  " + product.price + "€";
   
    myList.appendChild(listItem);
}
