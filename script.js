function openProduct(name,price,image){

document.getElementById("popup").style.display="flex"

document.getElementById("productName").innerText=name

document.getElementById("productPrice").innerText=price

document.getElementById("productImage").src=image

document.getElementById("whatsappLink").href=

"https://wa.me/918107053133?text=I want to buy "+name

}

function closeProduct(){

document.getElementById("popup").style.display="none"

}
