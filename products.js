const products = [
    {
        'name': "Chicken",
        'description': "Best chicken in the farm",
        'price': "500 EGP",
        'img': "assets/img/800x600.png"
    },
    {
        'name': "Chicken2",
        'description': "Best chicken in the farm",
        'price': "700 EGP",
        'img': "assets/img/800x600.png"
    }
]


document.addEventListener("DOMContentLoaded", () => {
    buildProducts();
});

const buildProducts = () =>{
    let productsContainer = document.getElementById("productsContainer");
    if (productsContainer) {
        products.forEach((item, index)=>{

        productsContainer.innerHTML +=
            '<div class="single-item col-lg-4 col-md-6" key="product-"' + index + '>'+
            '    <div class="item">'+
            '        <div class="thumb">'+
            '            <img src="assets/img/800x600.png" alt="Thumb">'+
            '           <div class="date">'+item.price+'</div>'+
            '       </div>'+
            '       <div class="info">'+
            '           <h4>'+
            '               '+item.name+''+
            //'               <a href="#">Chicken</a>'+
            '           </h4>'+
            '           <p>'+
            '               '+item.description+''+
            '           </p>'+
            
            '       </div>'+
            '   </div>'+
            '</div>'
        })
}
}