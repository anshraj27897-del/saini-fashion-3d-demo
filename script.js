// PRODUCT DATA
const products = [
{
id:1,
name:"Premium Cotton Shirt",
price:999,
originalPrice:1499,
image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600",
images:[
"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600",
"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
"https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600"
]
},

{
id:2,
name:"Casual T-Shirt",
price:599,
originalPrice:999,
image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
images:[
"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
"https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600",
"https://images.unsplash.com/photo-1583743814966-8936f37f4f3f?w=600"
]
},

{
id:3,
name:"Blue Jeans",
price:1199,
originalPrice:1799,
image:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
images:[
"https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600",
"https://images.unsplash.com/photo-1516826957135-700dedea698c?w=600"
]
},

{
id:4,
name:"Sports Shoes",
price:1999,
originalPrice:2999,
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
images:[
"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
"https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=600",
"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600"
]
},

{
id:5,
name:"Stylish Hoodie",
price:1499,
originalPrice:1999,
image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
images:[
"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600"
]
},

{
id:6,
name:"Formal Pants",
price:899,
originalPrice:1299,
image:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600",
images:[
"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600",
"https://images.unsplash.com/photo-1506629905607-d405c7d3b1d3?w=600",
"https://images.unsplash.com/photo-1506629905607-d405c7d3b1d3?w=600"
]
}
];



/* ============================
LOAD PRODUCTS ON HOME PAGE
============================ */

const grid = document.getElementById("productsGrid");

if(grid){

products.forEach(product =>{

const card = document.createElement("div");

card.classList.add("product-card");

card.innerHTML = `
<img src="${product.image}" class="product-image">
<div class="product-info">
<h3 class="product-name">${product.name}</h3>
<div>
<span class="product-price">₹${product.price}</span>
<span class="original-price">₹${product.originalPrice}</span>
</div>
</div>
`;

card.onclick = () =>{

window.location.href=`product.html?id=${product.id}`;

};

grid.appendChild(card);

});

}



/* ============================
PRODUCT DETAIL PAGE
============================ */

const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

if(productId){

const product = products.find(p => p.id == productId);

if(product){

document.getElementById("productTitle").innerText = product.name;

document.getElementById("productPrice").innerText = "₹"+product.price;

document.getElementById("originalPrice").innerText = "₹"+product.originalPrice;

const mainImg = document.getElementById("mainProductImage");

mainImg.src = product.images[0];

const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb,index)=>{

thumb.src = product.images[index];

thumb.dataset.img = product.images[index];

thumb.onclick = ()=>{

mainImg.src = thumb.dataset.img;

};

});



/* WHATSAPP ORDER */

document.getElementById("whatsappBtn").onclick = ()=>{

const size = document.getElementById("sizeSelect").value;

const msg = `Hello, I want to order: ${product.name} Size: ${size}`;

window.open(`https://wa.me/918107053133?text=${encodeURIComponent(msg)}`);

};

}

}



/* ============================
HERO SLIDER
============================ */

let slideIndex = 0;

const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");

function showSlide(index){

slides.forEach(s => s.classList.remove("active"));

dots.forEach(d => d.classList.remove("active"));

slides[index].classList.add("active");

dots[index].classList.add("active");

}

if(slides.length>0){

setInterval(()=>{

slideIndex++;

if(slideIndex>=slides.length){

slideIndex=0;

}

showSlide(slideIndex);

},4000);

}



/* BUTTON NAVIGATION */

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

if(nextBtn){

nextBtn.onclick = ()=>{

slideIndex++;

if(slideIndex>=slides.length){

slideIndex=0;

}

showSlide(slideIndex);

};

}

if(prevBtn){

prevBtn.onclick = ()=>{

slideIndex--;

if(slideIndex<0){

slideIndex=slides.length-1;

}

showSlide(slideIndex);

};

}
