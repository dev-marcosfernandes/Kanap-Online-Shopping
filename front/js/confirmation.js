// gestion du numéro de commande 
let url = new URL(window.location);
document.getElementById("orderId").innerHTML = url.searchParams.get("orderId");