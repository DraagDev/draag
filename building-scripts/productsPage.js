const products = [
    {
        'name': {
            en:"Whole Turkey",
            ar: "الديك الرومي الكامل"
        },
        'description': {
            en:"Premium, tender whole turkeys; hygienically processed and air-chilled.",
            ar:"ديك رومي كامل عالي الجودة، يتم معالجته وفقًا لأعلى معايير النظافة ويتم تبريده بالهواء للحفاظ على الطعم الطازج",
        },
        /*'price': {
            en:"500 EGP",
            ar:"500 جم",
        },*/
        'img': "assets/img/products/whole turkey.png"
    },
    {
        'name': {
            en:"Turkey Breast",
            ar: "صدر الديك الرومي"
        },
        'description': {
            en:"Turkey breasts are widely used in the deli industry for making turkey roast They're also processed into ground turkey, turkey sausages, and turkey bacon and smoked turkey breasts.",
            ar:"تستخدم صدور الديك الرومي على نطاق واسع في صناعة المخابز لصنع لحم ديك رومي مشوى. كما يتم تجهيزها أيضًا لتصنيع لحم ديك رومي مفروم وسجق الديك الرومي وشرائح الديك الرومي المدخنة",
        },
        'img': "assets/img/products/Turkey Breast.png"
    },
    {
        'name': {
            en:"Turkey Drumsticks",
            ar: "دبوس الديك الرومي"
        },
        'description': {
            en:"Turkey drumsticks are a popular choice for barbecue and grilling in the foodservice industry due to their size and rich flavor. They are often smoked or roasted and served in restaurants or at special events.",
            ar:"هي خيار شائع للشواء والشوي في صناعة الطعام بسبب حجمها ونكهتها الغنية. عادة ما تُدخن أو تُحمص وتُقدم في المطاعم أو في المناسبات الخاصة",
        },
        'img': "assets/img/products/Turkey Drumsticks.png"
    },
    {
        'name': {
            en:"Turkey Thighs",
            ar: "فخذ الديك الرومي"
        },
        'description': {
            en:"Dark meat Succulent, bone-in, skin-on; perfect for roasting, braising, or stews or grilling.",
            ar:"فخذ الديك الرومي مع العظم والجلد مثالي للشواء، الحساء، أو الطبخ البطيء",
        },
        'img': "assets/img/products/Turkey Thighs.png"
    },
    {
        'name': {
            en:"Turkey Wings",
            ar: "أجنحة الديك الرومي"
        },
        'description': {
            en:"Turkey wings are typically used in foodservice for barbecued or baked wings. They can also be smoked or used to create broths and stocks.",
            ar:" تُستخدم أجنحة الديك الرومي عادة في صناعة الطعام للأجنحة المشوية أو المحمصة. يمكن أيضًا أن يتم تدخينها أو استخدامها لصنع المرق",
        },
        'img': "assets/img/products/Turkey Wings.png"
    },
    {
        'name': {
            en:"Turkey Necks",
            ar: "أعناق الديك الرومي"
        },
        'description': {
            en:"Turkey necks are used in the food industry primarily for making stocks, broths, and soups due to their high flavor contribution.",
            ar:"تُستخدم أعناق الديك الرومي في صناعة الطعام أساسًا لصنع المرق والحساء بسبب مساهمتها العالية في النكهة. كما أنها خيار شائع لصناعة الطعام الخاص",
        },
        'img': "assets/img/products/Turkey Necks.png"
    },
    {
        'name': {
            en:"Turkey Liver",
            ar: "كبد الديك الرومي"
        },
        'description': {
            en:"Turkey liver is a sought-after product in the production of pâtés and spreads. It's also used in the food industry, providing a rich source of nutrients . In the culinary world, it is used for making sauces or gravy.",
            ar:"يُستخدم كبد الديك الرومي في العديد من الصناعات الغذائية حيث يوفر مصدرًا غنيًا بالعناصر الغذائية و الفيتامينات",
        },
        'img': "assets/img/products/turkey liver.png"
    },
    {
        'name': {
            en:"Turkey Shish",
            ar: "شيش الديك الرومى"
        },
        'description': {
            en:"These are used in foodservice for grilling, roasting, or making turkey ham. They can also be processed into ground turkey.",
            ar:"تُستخدم في صناعة الطعام للشواء و كما يمكن معالجتها إلى لحم ديك رومي مفروم",
        },
        'img': "assets/img/products/turkey shish.png"
    },
    {
        'name': {
            en:"Turkey Heart",
            ar: "قلب الديك الرومى"
        },
        'description': {
            en:"Turkey hearts are used in pet food manufacturing due to their high protein and nutrient content. In human food production, they are often used in sausages or prepared as a delicacy in certain cuisines.",
            ar:"القلوب من الديك الرومي تُستخدم في العديد من الصناعات الغذائية لمحتواها العالي من البروتين و غالبًا ما يتم استخدامها في النقانق أو تحضيرها كطبق شهي في بعض المطابخ",
        },
        'img': "assets/img/products/turkey heart.png"
    },
    {
        'name': {
            en:"Turkey Gizzard",
            ar: "قوانص الديك الرومي"
        },
        'description': {
            en:" Turkey gizzards are used as an ingredient in certain types of sausages. In many world cuisines, gizzards are considered a delicacy and are used in a variety of dishes from stews to stir-fries.",
            ar:"تُستخدم في الصناعات الغذائية وأيضًا كمكون في بعض أنواع النقانق. في العديد من المطابخ العالمية، يُعتبر القوانص طبقًا شهيًا ويُستخدم في مجموعة متنوعة من الأطباق، من الحساء إلى الأطباق المقلية",
        },
        'img': "assets/img/products/Turkey Gizzard.png"
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
      '<div class="breadcrumb-area text-center shadow dark bg-fixed text-light" style="background-image: url(assets/img/backgrounds/products.png);">'+
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
            '<div class="wow fadeInUp single-item col-xl-4 col-md-6 '+(language==="en" ? "text-left" : 'text-right"')+'" key="product-"' + index + '>'+
            '    <div class="item">'+
            '        <div class="thumb">'+
            '            <img src="'+item.img+'" alt="Thumb">'+
            //'           <div class="date" '+(language==="en" ? "" : 'style="right:unset;left:30px;"')+'>'+item.price[language]+'</div>'+
            '           <div class="date" '+(language==="en" ? "" : 'style="right:unset;left:30px;"')+'>'+item.name[language]+'</div>'+
            '       </div>'+
            '       <div class="info mt-0">'+
           /* '           <h4>'+
            '               '+item.name[language]+''+
            //'               <a href="#">Chicken</a>'+
            '           </h4>'+*/
            '           <p style="height:'+(language === "ar" ? '100px;' : '190px;')+'">'+
            '               '+item.description[language]+''+
            '           </p>'+
            
            '       </div>'+
            '   </div>'+
            '</div>'
            if(index === 2){
                if(window.location.pathname.endsWith("/") ||window.location.pathname.endsWith("/index.html")){
                    let viewAllBtnContainer = document.getElementById("viewAllBtnContainer");
                    viewAllBtnContainer.innerHTML += '<a class="btn circle btn-theme effect btn-md" href="/products.html">'+(language==="ar"?'<i class="fas fa-angle-left"></i>' : "")+ ' <span data-i18n="viewAll">View All </span>'+(language==="en"?'<i class="fas fa-angle-right"></i>' : "")+'</a>'
                    products.length = index ; //break
                }
            }
        })

}
}

