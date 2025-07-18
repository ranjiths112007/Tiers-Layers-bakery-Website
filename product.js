const params = new URLSearchParams(window.location.search);
const cakeId = params.get("id");

const cakes = {
  cake1: {
    name: "Chocolate Fantasy",
    price: 499,
    desc: "Rich chocolate sponge cake topped with creamy frosting and chocolate chips.",
    img: "https://imgcdn.floweraura.com/rich-chocolate-fantasy-cake-casd2043-A_0.jpg"
  },
  cake2: {
    name: "Strawberry Cream",
    price: 449,
    desc: "Soft vanilla layers filled with fresh strawberry cream and real fruit toppings.",
    img: "https://bakefromscratch.com/wp-content/uploads/2022/02/Cream-Cake460JB1x1v2.jpg"
  },
  cake3: {
    name: "Vanilla Delight",
    price: 399,
    desc: "Classic vanilla cake made with love and topped with silky smooth whipped cream.",
    img: "https://shreemsweetsandbakery.com/wp-content/uploads/2021/04/Creamy-Vanilla-Delight-600x600.jpg"
  },
  cake4: {
    name: "Black Forest",
    price: 599,
    desc: "German-style black forest cake with whipped cream and cherries. A timeless classic!",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17q1nyARsGHcMdQ45f68V5i2MRPmYv7KBDA&s"
  },
  cake5: {
    name: "Red Velvet",
    price: 699,
    desc: "Luxurious red velvet cake with smooth cream cheese frosting and heart shape charm.",
    img: "https://assets.giftalove.com/resources/common/giftimages/productimage2/tempting-heart-shaped-red-velvet-cake.jpg"
  },
  cake6: {
    name: "Pineapple Burst",
    price: 379,
    desc: "Juicy pineapple cake with real chunks and soft whipped topping. Super refreshing!",
    img: "https://img.thecdn.in/330116/images-2024-11-27T225526562-1732728349327.jpeg?width=600&format=webp"
  },
  cake7: {
    name: "Choco Truffle",
    price: 599,
    desc: "Dense layers of chocolate cake filled and covered in rich choco ganache.",
    img: "https://5.imimg.com/data5/ANDROID/Default/2020/10/WT/CE/CO/71456222/product-jpeg-500x500.jpeg"
  },
  cake8: {
    name: "Butterscotch Dream",
    price: 429,
    desc: "Caramel and butterscotch lovers’ dream! Creamy, crunchy, and perfectly sweet.",
    img: "https://thomsonline.in/wp-content/uploads/2019/08/BUTTERSCOTCH-CAKE-3-750x500.jpg"
  },
  cake9: {
    name: "Fruit Overload",
    price: 499,
    desc: "Loaded with fresh seasonal fruits, this cake is a fruity explosion in every bite.",
    img: "https://cakestry15.com/cdn/shop/files/fruity-bliss-3kg-mix-fruit-cake.webp?v=1746776748"
  },
  cake10: {
    name: "Coffee Crave",
    price: 549,
    desc: "Perfect for coffee lovers — coffee-flavored cake with creamy frosting layers.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrRiM6zcgjt4CVS8X243MsJodTFEk1V71uQ&s"
  },
  cake11: {
    name: "Mango Magic",
    price: 489,
    desc: "Luscious mango pulp layered between vanilla sponge and mango cream topping.",
    img: "https://cdn.igp.com/f_auto,q_auto,t_pnopt19prodlp/products/p-premium-mango-cake-half-kg--281389-m.jpg"
  },
  cake12: {
    name: "Caramel Crunch",
    price: 529,
    desc: "Salted caramel crunch cake with layers of chocolate and creamy caramel glaze.",
    img: "https://www.pastrywishes.com/wp-content/uploads/2023/05/chocolate-salted-caramel-cake1.jpg.webp"
  }
};

const cake = cakes[cakeId];

if (cake) {
  document.getElementById("cake-name").textContent = cake.name;
  document.getElementById("cake-price").textContent = `Price: ₹${cake.price}`;
  document.getElementById("cake-desc").textContent = cake.desc;
  document.getElementById("cake-img").src = cake.img;
  document.getElementById("cake-img").alt = cake.name;
} else {
  document.querySelector(".product-section").innerHTML = `
    <h2 style="text-align:center; color:#c94c4c;">Cake not found 😢</h2>
    <p style="text-align:center;"><a href="menu.html">← Back to Menu</a></p>
  `;
}
