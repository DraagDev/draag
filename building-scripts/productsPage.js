const products = [
    {
        'name': {
            en:"Chicken",
            ar: "فراخ"
        },
        'description': {
            en:"Best chicken in the farm",
            ar:"احلا فراخ",
        },
        'price': {
            en:"500 EGP",
            ar:"500 جم",
        },
        'img': "assets/img/800x600.png"
    },
    {
        'name': {
            en:"Chicken2",
            ar: "2فراخ"
        },
        'description': {
            en:"2Best chicken in the farm",
            ar:"2احلا فراخ",
        },
        'price': {
            en:"500 EGP",
            ar:"500 جم",
        },
        'img': "assets/img/800x600.png"
    },
    {
        'name': {
            en:"Chicken",
            ar: "فراخ"
        },
        'description': {
            en:"Best chicken in the farm",
            ar:"احلا فراخ",
        },
        'price': {
            en:"500 EGP",
            ar:"500 جم",
        },
        'img': "assets/img/800x600.png"
    },
    {
        'name': {
            en:"Chicken",
            ar: "فراخ"
        },
        'description': {
            en:"Best chicken in the farm",
            ar:"احلا فراخ",
        },
        'price': {
            en:"500 EGP",
            ar:"500 جم",
        },
        'img': "assets/img/800x600.png"
    },
    {
        'name': {
            en:"Chicken",
            ar: "فراخ"
        },
        'description': {
            en:"Best chicken in the farm",
            ar:"احلا فراخ",
        },
        'price': {
            en:"500 EGP",
            ar:"500 جم",
        },
        'img': "assets/img/800x600.png"
    },
    {
        'name': {
            en:"Chicken",
            ar: "فراخ"
        },
        'description': {
            en:"Best chicken in the farm",
            ar:"احلا فراخ",
        },
        'price': {
            en:"500 EGP",
            ar:"500 جم",
        },
        'img': "assets/img/800x600.png"
    },
    {
        'name': {
            en:"Chicken",
            ar: "فراخ"
        },
        'description': {
            en:"Best chicken in the farm",
            ar:"احلا فراخ",
        },
        'price': {
            en:"500 EGP",
            ar:"500 جم",
        },
        'img': "assets/img/800x600.png"
    },
    {
        'name': {
            en:"Chicken",
            ar: "فراخ"
        },
        'description': {
            en:"Best chicken in the farm",
            ar:"احلا فراخ",
        },
        'price': {
            en:"500 EGP",
            ar:"500 جم",
        },
        'img': "assets/img/800x600.png"
    },
    {
        'name': {
            en:"Chicken",
            ar: "فراخ"
        },
        'description': {
            en:"Best chicken in the farm",
            ar:"احلا فراخ",
        },
        'price': {
            en:"500 EGP",
            ar:"500 جم",
        },
        'img': "assets/img/800x600.png"
    },
    {
        'name': {
            en:"Chicken",
            ar: "فراخ"
        },
        'description': {
            en:"Best chicken in the farm",
            ar:"احلا فراخ",
        },
        'price': {
            en:"500 EGP",
            ar:"500 جم",
        },
        'img': "assets/img/800x600.png"
    },
    {
        'name': {
            en:"Chicken",
            ar: "فراخ"
        },
        'description': {
            en:"Best chicken in the farm",
            ar:"احلا فراخ",
        },
        'price': {
            en:"500 EGP",
            ar:"500 جم",
        },
        'img': "assets/img/800x600.png"
    },
    {
        'name': {
            en:"Chicken",
            ar: "فراخ"
        },
        'description': {
            en:"Best chicken in the farm",
            ar:"احلا فراخ",
        },
        'price': {
            en:"500 EGP",
            ar:"500 جم",
        },
        'img': "assets/img/800x600.png"
    },
]

document.addEventListener("DOMContentLoaded", () => {
    buildHeader();
    buildProducts();
});
  
const buildHeader = () =>{
    let element = document.getElementById("productsHeader");
    if (element) {
      element.innerHTML =
      '<div class="breadcrumb-area text-center shadow dark bg-fixed text-light" style="background-image: url(assets/img/2440x1578.png);">'+
      '<div class="container">'+
      '    <div class="row">'+
      '        <div class="col-lg-8 offset-lg-2">'+
      '            <h1 data-i18n="products">Products</h1>'+
      '<style>   '+
      (language==="en" ? "" : '.breadcrumb-area .breadcrumb li::after {   right: 0px; }') +
     '</style>'+
      '            <ul class="breadcrumb" '+(language==="en" ? "dir='ltr'" : "dir='rtl'")+'>'+
      '               <li><a href="/" ><i class="fas fa-home"></i> <span data-i18n="home">Home</span></a></li>'+
      '               <li class="active" data-i18n="products">Products</li>'+
      '           </ul>'+
      '        </div>'+
      '    </div>'+
      ' </div>'+
      '</div>'
    }

}


const buildProducts = () =>{
    let productsContainer = document.getElementById("productsContainer");
    if (productsContainer) {
        products.forEach((item, index)=>{

        productsContainer.innerHTML +=
            '<div class="single-item col-lg-4 col-md-6 '+(language==="en" ? "" : 'text-right"')+'" key="product-"' + index + '>'+
            '    <div class="item">'+
            '        <div class="thumb">'+
            '            <img src="assets/img/800x600.png" alt="Thumb">'+
            '           <div class="date" '+(language==="en" ? "" : 'style="right:unset;left:30px;"')+'>'+item.price[language]+'</div>'+
            '       </div>'+
            '       <div class="info">'+
            '           <h4>'+
            '               '+item.name[language]+''+
            //'               <a href="#">Chicken</a>'+
            '           </h4>'+
            '           <p>'+
            '               '+item.description[language]+''+
            '           </p>'+
            
            '       </div>'+
            '   </div>'+
            '</div>'
        })
}
}