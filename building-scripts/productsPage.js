const products = [
    {
        'name': {
            en:"Whole Turkey",
            ar: "الديك الرومي الكامل"
        },
        'description': {
            en:"Premium, tender whole turkeys; hygienically processed and air-chilled",
            ar:"ديك رومي كامل عالي الجودة، يتم معالجته وفقًا لأعلى معايير النظافة ويتم تبريده بالهواء للحفاظ على الطعم الطازج",
        },
        /*'price': {
            en:"500 EGP",
            ar:"500 جم",
        },*/
        'img': "assets/img/800x600.png"
    },
    {
        'name': {
            en:"Turkey Breast",
            ar: "صدر الديك الرومي"
        },
        'description': {
            en:"Lean, boneless, skinless; versatile for grilling, baking, or sandwiches",
            ar:"صدر الديك الرومي خالي من العظام والجلد ومنزوع الدهون، مثالي للشواء، الخبز، أو تقطيعه للسندويشات",
        },
        'img': "assets/img/800x600.png"
    },
    {
        'name': {
            en:"Turkey Drumsticks",
            ar: "دبوس الديك الرومي"
        },
        'description': {
            en:"Juicy dark meat; ideal for roasting, smoking, or slow-cooking",
            ar:"أرجل الديك الرومي العصيرية والطرية مثالية للشواء، التدخين، أو الطبخ البطيء",
        },
        'img': "assets/img/800x600.png"
    },
    {
        'name': {
            en:"Turkey Thighs",
            ar: "فخذ الديك الرومي"
        },
        'description': {
            en:"Succulent, bone-in, skin-on; perfect for roasting, braising, or stews",
            ar:"فخذ الديك الرومي مع العظم والجلد مثالي للشواء، الحساء، أو الطبخ البطيء",
        },
        'img': "assets/img/800x600.png"
    },
    {
        'name': {
            en:"Turkey Wings",
            ar: "أجنحة الديك الرومي"
        },
        'description': {
            en:"Meaty, flavorful white meat; suitable for grilling, baking, or slow-cooking",
            ar:"أجنحة الديك الرومي اللذيذة والممتلئة مثالية للشواء، الخبز، أو الطبخ البطيء و تشكل اختيار ممتاز للمقبلات في المطاعم",
        },
        'img': "assets/img/800x600.png"
    },
    {
        'name': {
            en:"Turkey Necks",
            ar: "أعناق الديك الرومي"
        },
        'description': {
            en:"Tasty, nutritious choice; perfect for stocks, broths, or slow-cooked meals",
            ar:"أعناق الديك الرومي طيبة وغذائية مثالية لصنع المرق أو الحساء أو الطبخ البطيء و لها العديد من الاستخدامات في الصناعات الغذائية",
        },
        'img': "assets/img/800x600.png"
    },
    {
        'name': {
            en:"Turkey Giblets",
            ar: "أحشاء الديك الرومي"
        },
        'description': {
            en:"Nutrient-dense organ meats; ideal for gravy, stuffing",
            ar:"أحشاء الديك الرومي، التي تشمل القلب والكبد و القوانص ، تقدم خيارًا لذيذًا وغنيًا بالعناصر الغذائية لأولئك الذين يقدرون النكهات الفريدة لأعضاء الجسم الداخلية",
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
            if(index === 2){
                if(window.location.pathname==="/" ||window.location.pathname==="/index.html"){
                    products.length = index +1; //break
                }
            }
        productsContainer.innerHTML +=
            '<div class="single-item col-lg-4 col-md-6 '+(language==="en" ? "" : 'text-right"')+'" key="product-"' + index + '>'+
            '    <div class="item">'+
            '        <div class="thumb">'+
            '            <img src="assets/img/800x600.png" alt="Thumb">'+
            //'           <div class="date" '+(language==="en" ? "" : 'style="right:unset;left:30px;"')+'>'+item.price[language]+'</div>'+
            '           <div class="date" '+(language==="en" ? "" : 'style="right:unset;left:30px;"')+'>'+item.name[language]+'</div>'+
            '       </div>'+
            '       <div class="info">'+
           /* '           <h4>'+
            '               '+item.name[language]+''+
            //'               <a href="#">Chicken</a>'+
            '           </h4>'+*/
            '           <p style="height:90px;">'+
            '               '+item.description[language]+''+
            '           </p>'+
            
            '       </div>'+
            '   </div>'+
            '</div>'
        })
}
}