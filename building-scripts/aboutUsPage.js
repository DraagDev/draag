document.addEventListener("DOMContentLoaded", () => {
    buildHeader();
    buildAboutContentSection();
    //buildFAQContentSection();
});
  

const buildHeader = () =>{
    let element = document.getElementById("aboutUsHeader");
    if (element) {
      element.innerHTML =
      '<div class="breadcrumb-area text-center shadow dark bg-fixed text-light" style="background-image: url(assets/img/2440x1578.png);">'+
      '<div class="container">'+
      '    <div class="row">'+
      '        <div class="col-lg-8 offset-lg-2">'+
      '            <h1 data-i18n="aboutUs">About Us</h1>'+
      '<style>   '+
      (language==="en" ? "" : '.breadcrumb-area .breadcrumb li::after {   right: 0px; }') +
     '</style>'+
      '            <ul class="breadcrumb" '+(language==="en" ? "dir='ltr'" : "dir='rtl'")+'>'+
      '               <li><a href="/" ><i class="fas fa-home"></i> <span data-i18n="home">Home</span></a></li>'+
      '               <li class="active" data-i18n="aboutUs">About Us</li>'+
      '           </ul>'+
      '        </div>'+
      '    </div>'+
      ' </div>'+
      '</div>'
    }
}

const buildAboutContentSection = () =>{
    let element = document.getElementById("aboutUsContentArea");
    
    if (element) {
      element.innerHTML =
      '<div class="about-content-area overflow-hidden inc-shape default-padding '+(language==="en" ? "text-left" : "text-right")+'">'+
      '  <!-- Illustration -->'+
      '  <div class="illustration">'+
      '     <img src="assets/img/shape/4.png" alt="Illustration">'+
      ' </div>'+
      ' <!-- Illustration -->'+
      ' <div class="container">'+
      '     <div class="'+(language==="en" ? "row" : "row")+'">'+
      '<style>   '+
                //(language==="en" ? "" : '.about-content-area .content::after {}') +
                (language==="en" ? "" : '.about-content-area .info h5::after {left:-44px; background: url(assets/img/illustration/2-inverse.png);background-size: contain;background-repeat: no-repeat;background-position-x:right;}') +
      '</style>'+
      '         <div class="col-lg-6 info">'+
      '             <div class="content wow fadeInLeft" data-wow-delay="300ms">'+
      '                 <h5 data-i18n="whoWeAre">Who we are</h5>'+
      '                 <h2 class="area-title" data-i18n="whoWeAreTitle">Beautiful landscapes and the farmers Who bring us our food</h2>'+
      '                 <p data-i18n="whoWeAreContent">'+
      '                     Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on.'+
      '                 </p>'+
      //'                 <a class="btn circle btn-theme border btn-md" href="#">More About</a>'+
      '             </div>'+
      '             <ul class="achivement">'+
      '                 <li>'+
      '                     <div class="fun-fact">'+
      '                         <div class="counter">'+
      '                             <div class="timer" data-to="8600" data-speed="5000">8600</div>'+
      '                             <div class="operator">+</div>'+
      '                         </div>'+
      '                         <span class="medium" data-i18n="whoWeAreNumber1">Tons of harvesta</span>'+
      '                     </div>'+
      '                 </li>'+
      '                 <li>'+
      '                     <div class="fun-fact">'+
      '                         <div class="counter">'+
      '                             <div class="timer" data-to="100" data-speed="5000">100</div>'+
      '                             <div class="operator">%</div>'+
      '                         </div>'+
      '                         <span class="medium" data-i18n="whoWeAreNumber2">Organic Product</span>'+
      '                     </div>'+
      '                 </li>'+
      '             </ul>'+
      '         </div>'+
      '         <div class="col-lg-6">'+
      '             <div class="thumb">'+
      '                 <img class="wow fadeInRight" data-wow-delay="700ms" src="assets/img/800x800.png" alt="Thumb">'+
      '                 <img class="wow fadeInUp" data-wow-delay="1000ms" src="assets/img/800x800.png" alt="Thumb">'+
      '             </div>'+
      '         </div>'+
      
      '     </div>'+
      ' </div>'+
      '</div>'
    }
}

const buildFAQContentSection = () =>{
    let element = document.getElementById("faqContentArea");
    
    if (element) {
      element.innerHTML =
      '<div class="faq-area bg-gray default-padding-top '+(language==="en" ? "text-left" : 'text-right')+'">'+
      '  <div class="container">'+
      '      <div class="faq-items">'+
      '          <div class="row align-center">'+
      '              <div class="col-lg-4 thumb wow fadeInUp" data-wow-delay="550ms">'+
      '                 <img src="assets/img/illustration/3.png" alt="Thumb">'+
      '             </div>'+

      '              <div class="col-lg-7 offset-lg-1 wow fadeInRight">'+
      '                 <div class="heading">'+
      '                      <h2 class="area-title" data-i18n="workWithUsTitle">Work with Us</h2>'+
      '                      <p data-i18n="workWithUsContent">'+
      '                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eius soluta facere eos veritatis nihil qui ipsa rem! Magni, sint eum. Excepturi natus ut, facere ipsam necessitatibus delectus quam blanditiis!'+
      '                      </p>'+
      '                  </div>'+
      '                 <div class="faq-content default-padding-bottom">'+
      '                      <div class="accordion" id="accordionExample">'+
      '<style>   '+
                //(language==="en" ? "" : '.about-content-area .content::after {}') +
                (language==="en" ? "" : '.accordion .card-header h4:after {left:0px; right:unset;}') +
      '</style>'+
      '                         <div class="card">'+
      '                              <div class="card-header" id="headingOne">'+
      '                                  <h4 data-i18n="faq1Title" class="mb-0 px-0 '+(language==="en" ? "" : 'flex-row-reverse')+'" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">'+
      '                                      Do I need a business plan?'+
      '                                  </h4>'+
      '                             </div>'+

      '                             <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">'+
      '                                 <div class="card-body">'+
      '                                      <p data-i18n="faq1Content">'+
      '                                          Continue building numerous of at relation in margaret. Lasted engage roused mother an am at. Other early while if by do to. Missed living excuse as be. Cause heard fat above first time achivement. Discourse unwilling am no described dejection incommode. '+
      '                                    </p>'+
      '                                 </div>'+
      '                             </div>'+
      '                         </div>'+
      '                      </div>'+
      '                 </div>'+
      '             </div>'+
      
      '         </div>'+
      '     </div>'+
      ' </div>'+
      '</div>'
    }
}

