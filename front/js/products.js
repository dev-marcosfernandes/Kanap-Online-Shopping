  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const Id = urlParams.get('id');
  let imgItem = document.getElementsByClassName("item__img")[0];
  let titleItem = document.getElementById("title");
  let priceItem = document.getElementById("price");
  let descriptionItem = document.getElementById("description");
  let colorsItem = document.getElementById("colors");
  let quantityEl = document.getElementById("quantity");
  let addToCart = document.getElementById("addToCart");
 
  // Function pour rendre visible les canapés choisis dans la page produit

  fetch("http://localhost:3000/api/products/"+Id)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(product) {
    console.log(product);
    imgItem.innerHTML += `<img src="${product.imageUrl}" />`
    titleItem.innerHTML += `${product.name}`
    priceItem.innerHTML += `${product.price}`
    descriptionItem.innerHTML += `${product.description}`
    product.colors.forEach(element => {
      colorsItem.innerHTML += `<option value="${element}">${element}</option>`
    });

    // Ajouter un produit dans le panier 

    quantityEl.addEventListener("keydown", function(e){
      e.preventDefault();
    alert("Vous ne pouvez pas saisir une quantité manuellement")
    })

   addToCart.addEventListener("click", function(){
    let objJSON = {};
     objJSON.id = product._id;
     objJSON.color = colorsItem.value;
     objJSON.quantity = parseInt(quantityEl.value);
     let cart = JSON.parse(localStorage.getItem("cart"));
      if(cart != null){
        let index = -1
      for(i=0;i<cart.length;i++){
        if(cart[i].id==product._id && cart[i].color==colorsItem.value){
          index=i;
          break;
        };
      };
      if(index!=-1){
         let cartIndex = cart[index]
         cartIndex.quantity += parseInt(quantityEl.value)
         cart[index] = cartIndex
      } else{
           cart.push(objJSON)
      }
      } else {
        cart = []
        cart.push(objJSON)
      };
        localStorage.setItem("cart", JSON.stringify(cart));
        JSON.parse(localStorage.getItem("cart"));    
   });
  });







  
 

 
 






  










// Storage.prototype.setObj = function(key, obj) {
//     return this.setItem(key, JSON.stringify(obj))
//   } 
//   Storage.prototype.getObj = function(key) {
//     return JSON.parse(this.getItem(key))
//   }
  
//   //gestion de l'url
//   let queryString = window.location.search;
//   let urlParams = new URLSearchParams(queryString);
//   let productId = urlParams.get('id');

// let cardsFetch = function () {
//     fetch("http://localhost:3000/api/products/"+productId)
//     .then((response) => response.json())
//     .then((product) => {
  
//     console.log(product);


//    // ajout des cards sur la page produit 
//     document.getElementsByClassName("item__img")[0].innerHTML = 
//     '<img src="'+product.imageUrl+'" alt="Photographie d\'un canapé">';
//     document.getElementById("title").innerHTML = product.name;
//     document.getElementById("price").innerHTML = product.price;
//     document.getElementById("description").innerHTML = product.description;
    

//  //fonction pour la gestion du panier en local storage
//     function ItemPanier(productId, quantity, color){
//     if(!localStorage.getObj("panier")){
//         localStorage.setObj("panier",[]);
//     }
//     let panier= localStorage.getObj("panier");
// //vérifie l'id de l'url pour enregistré le bon produit avec le bonne id (Gerer la quantité)
//     if(quantity=>1){
//     let quantityColor= false
//     for (let i=0; i<panier.length; i++){
//     if(panier[i].id === productId){
//     quantityColor = i;
//  }
//     }
//     //Gestion de la couleur et sa quantité
//     if(quantityColor!==false){
//     if(panier[quantityColor].color === color){
//     panier[quantityColor].quantity = parseInt(panier[quantityColor].quantity) + parseInt(quantity);
//     }
//     else{
//     panier.push({"id":productId,"quantity":quantity,"color":color});
//   }
//     }
//      }
//       localStorage.setObj("panier",panier);
//     }

    // //envoie les différentes couleurs des canapés
    // if(product!==false){
    //   for (let j=0; j<product.colors.length; j++){
    //     document.getElementById("colors").innerHTML+=
    //     '<option value="'+product.colors[j]+'">'+product.colors[j]+'</option>';
    //   }
    //   // buton au clic redirectionne à la pag panier 
    //    document.getElementById("addToCart").addEventListener("click", event=>{
    //     ItemPanier(product._id, document.getElementById("quantity").value, document.getElementById("colors").value);
    //     window.location = "./cart.html"
    //   });
      
    // }else{
    //     // gère la redirection si produit inexistant
    //     window.location = "./index.html"
    //   }
 

//     });
// };
    
// cardsFetch();
