//const language = localStorage.getItem("draaglang")
function changeLanguage(e, langPassed) {
  e.preventDefault();
  localStorage.setItem(langStorageName, langPassed);
  window.location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
  buildTopNavbar();
  buildBottomNavbar();
  buildFooter();
});

const buildTopNavbar = () => {
  let bar = document.getElementById("topBarArea");
  if (bar) {
    bar.innerHTML =
      '<div class="top-bar-area bg-dark text-light inc-pad" dir='+ (language === 'en' ? "ltr" : "rtl") +'>' +
      '<div class="container-fluid">' +
      '    <div class="row align-center">' +
      '        <div class="col-lg-9">' +
      '            <div class="flex-item ' + (language === 'en' ? "left" : "right") +'">' +
      "                <p data-i18n='topBarText'>" +
      "                    That's right, we only sell 100% organic" +
      "                </p>" +
      "                <ul>" +
      "                    <li data-i18n='topBarAddress'>" +
      '                        <i class="fas fa-map-marker-alt"></i> California, TX 70240' +
      "                    </li>" +
      "                    <li class='mx-3'>" +
      '                        <i class="fas fa-envelope-open"></i> Info@gmail.com' +
      "                    </li>" +
      "                </ul>" +
      "            </div>" +
      "        </div>" +
      '        <div class="col-lg-3 text-' + (language === 'en' ? "right" : "left") + '">' +
      '            <div class="social">' +
      "                <ul>" +
      "                    <li class='mx-3 px-0'>" +
      '                        <a href="#">' +
      '                            <i class="fab fa-facebook-f"></i>' +
      "                        </a>" +
      "                    </li>" +
      "                    <li class='mx-3 px-0'>" +
      '                        <a href="#">' +
      '                            <i class="fab fa-twitter"></i>' +
      "                        </a>" +
      "                    </li>" +
      "                    <li class='mx-3 px-0'>" +
      '                        <a href="#">' +
      '                            <i class="fab fa-youtube"></i>' +
      "                        </a>" +
      "                    </li>" +
      "                    <li class='mx-3 px-0'>" +
      '                        <a href="#">' +
      '                            <i class="fab fa-linkedin-in"></i>' +
      "                        </a>" +
      "                    </li>" +
      "                </ul>" +
      "            </div>" +
      "        </div>" +
      "    </div>" +
      "</div>" +
      "</div>";
  }
};

const buildBottomNavbar = () => {
  let bar = document.getElementById("bottomBarArea");
  if (bar) {
    bar.innerHTML =
      '<nav class="navbar navbar-default navbar-sticky bootsnav">' +
      '   <div class="container-fluid">' +
      /*'        <div class="attr-nav inc-border">' +
      "            <ul>" +
      '               <li class="side-menu"><a href="#"><i class="fa fa-bars"></i></a></li>' +
      "            </ul>" +
      "        </div> " +*/
      '        <div class="navbar-header" style="float:'+ (language==="en" ? "left" : "right") + ';">' +
      '            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">' +
      '                <i class="fa fa-bars"></i>' +
      "            </button>" +
      '            <a class="navbar-brand mx-0 px-0" href="index.html">' +
      '                <img src="assets/img/logo.png" class="logo" alt="Logo">' +
      "            </a>" +
      "       </div>" +
      "        <!-- End Header Navigation -->" +
      "       <!-- Collect the nav links, forms, and other content for toggling -->" +
      '        <div class="collapse navbar-collapse" id="navbar-menu">' +
      '            <ul class="nav navbar-nav navbar-center d-flex justify-content-center '+ (language==="en" ? "flex-row" : "flex-row-reverse") + '" data-in="fadeInDown" data-out="fadeOutUp">' +
      '               <li><a href="index.html" data-i18n="home">Home</a></li>' +
      '               <li><a href="products.html" data-i18n="products">Products</a></li>' +
      /*'                <li class="dropdown">' +
      '                   <a href="#" class="dropdown-toggle lang" data-toggle="dropdown" data-i18n="home">Home</a>' +
      '                   <ul class="dropdown-menu">' +
      '                       <li><a href="index.html">Home Version One</a></li>' +
      '                       <li><a href="index-2.html">Home Version Two</a></li>' +
      '                       <li><a href="index-3.html">Home Version Three</a></li>' +
      "                   </ul>" +
      "               </li>" +*/
      /*'               <li class="dropdown">' +
      '                   <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Pages</a>' +
      '                   <ul class="dropdown-menu">' +
      '                       <li><a href="services.html">Services</a></li>' +
      '                       <li><a href="team.html">Farmers</a></li>' +
      '                       <li><a href="contact.html">Get in Touch</a></li>' +
      '                       <li><a href="404.html">Error Page</a></li>' +
      "                   </ul>" +
      "               </li>" +*/
      //'               <li><a href="gallery.html">Gallery</a></li>' +
      //'               <li><a href="blog-2-colum.html" data-i18n="blogs">Blogs</a></li>' +
      /*'               <li class="dropdown">' +
      '                   <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Blog</a>' +
      '                   <ul class="dropdown-menu">' +
      '                       <li><a href="blog-standard.html">Blog Standard</a></li>' +
      '                       <li><a href="blog-with-sidebar.html">Blog With Sidebar</a></li>' +
      '                       <li><a href="blog-2-colum.html">Blog Grid Two Colum</a></li>' +
      '                       <li><a href="blog-3-colum.html">Blog Grid Three Colum</a></li>' +
      '                       <li><a href="blog-single.html">Blog Single</a></li>' +
      '                       <li><a href="blog-single-with-sidebar.html">Blog Single With Sidebar</a></li>' +
      "                   </ul>" +
      "               </li>" +*/
      '               <li><a href="about-us.html" data-i18n="aboutUs">About Us</a></li>' +
      '               <li><a href="contact.html" data-i18n="contact">Contact</a></li>' +
      (language === "ar"
        ? '               <li><a href="/" style="text-decoration:underline;" onclick="changeLanguage(event, \'en\')" key="en"><i class="fa fa-globe" aria-hidden="true"></i> English</a></li>'
        : '               <li><a href="#" style="text-decoration:underline;" onclick="changeLanguage(event, \'ar\')" key="ar">العربية <i class="fa fa-globe" aria-hidden="true"></i></a></li>') +
      "           </ul>" +
      "       </div>" +
      "   </div>" +
      "   <!-- Start Side Menu -->" +
      /*'   <div class="side">' +
      '       <a href="#" class="close-side"><i class="ti-close"></i></a>' +
      '       <div class="widget">' +
      '           <h4 class="title">Get in touch</h4>' +
      "           <p>" +
      "               Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means few blind." +
      "           </p>" +
      '           <a href="#" class="btn btn-theme effect btn-sm" data-animation="animated slideInUp">Consultation</a>' +
      "       </div>" +
      '       <div class="widget">' +
      '           <h4 class="title">Additional Links</h4>' +
      "           <ul>" +
      '               <li><a href="#">About</a></li>' +
      '               <li><a href="#">Projects</a></li>' +
      '               <li><a href="#">Login</a></li>' +
      '               <li><a href="#">Register</a></li>' +
      "           </ul>" +
      "       </div>" +
      '       <div class="widget social">' +
      '           <h4 class="title">Connect With Us</h4>' +
      '           <ul class="link">' +
      '               <li class="facebook"><a href="#"><i class="fab fa-facebook-f"></i></a></li>' +
      '               <li class="twitter"><a href="#"><i class="fab fa-twitter"></i></a></li>' +
      '               <li class="pinterest"><a href="#"><i class="fab fa-pinterest"></i></a></li>' +
      '               <li class="dribbble"><a href="#"><i class="fab fa-dribbble"></i></a></li>' +
      "           </ul>" +
      "       </div>" +
      "   </div>" +*/
      "   <!-- End Side Menu -->" +
      "</nav>";
  }
};

const buildFooter = () => {
  let bar = document.getElementById("footerArea");
  if (bar) {
    bar.innerHTML =
      "<!-- Fixed Shape -->" +
      '  <div class="fixed-shape">' +
      '        <img src="assets/img/shape/2.png" alt="Shape">' +
      "    </div>" +
      "    <!-- Fixed Shape -->" +
      '   <div class="container">' +
      '       <div class="f-items default-padding">' +
      '           <div class="row">' +
      "               <!-- Single Itme -->" +
      '               <div class="col-lg-4 col-md-6 item">' +
      '                   <div class="f-item about">' +
      '                       <img src="assets/img/logo-light.png" alt="Logo">' +
      "                       <p>" +
      "                           Happen active county. Winding for the morning am shyness evident to poor. Garrets because elderly new to the point." +
      "                       </p>" +
      '                       <form action="#">' +
      '                           <input type="email" placeholder="Your Email" class="form-control" name="email">' +
      '                           <button type="submit"> Subscribe</button>  ' +
      "                       </form>" +
      "                   </div>" +
      "               </div>" +
      "               <!-- End Single Itme -->" +
      "               <!-- Single Itme -->" +
      '                <div class="col-lg-2 col-md-6 item">' +
      '                   <div class="f-item link">' +
      '                       <h4 class="widget-title">Explore</h4>' +
      "                       <ul>" +
      "                           <li>" +
      '                               <a href="#">About Us</a>' +
      "                           </li>" +
      "                           <li>" +
      '                               <a href="#">Meet Our Team</a>' +
      "                           </li>" +
      "                           <li>" +
      '                               <a href="#">News & Media</a>' +
      "                           </li>" +
      "                           <li>" +
      '                               <a href="#">Services</a>' +
      "                           </li>" +
      "                           <li>" +
      '                               <a href="#">Contact Us</a>' +
      "                           </li>" +
      "                           <li>" +
      '                               <a href="#">Volunteers</a>' +
      "                           </li>" +
      "                       </ul>" +
      "                   </div>" +
      "               </div>" +
      "               <!-- End Single Itme -->" +
      "                <!-- Single Itme -->" +
      '               <div class="col-lg-3 col-md-6 item">' +
      '                   <div class="f-item recent-post">' +
      '                       <h4 class="widget-title">Recent Posts</h4>' +
      "                       <ul>" +
      "                           <li>" +
      '                               <div class="thumb">' +
      '                                   <a href="#">' +
      '                                       <img src="assets/img/800x800.png" alt="Thumb">' +
      "                                   </a>" +
      "                               </div>" +
      '                               <div class="info">' +
      '                                   <a href="#">Meant widow equal an share least part. </a>' +
      '                                   <div class="meta-title">' +
      '                                       <span class="post-date">12 Feb, 2019</span>' +
      "                                   </div>" +
      "                               </div>" +
      "                           </li>" +
      "                           <li>" +
      '                               <div class="thumb">' +
      '                                   <a href="#">' +
      '                                       <img src="assets/img/800x800.png" alt="Thumb">' +
      "                                   </a>" +
      "                               </div>" +
      '                               <div class="info">' +
      '                                   <a href="#">Future Plan & Strategy for Consutruction </a>' +
      '                                   <div class="meta-title">' +
      '                                       <span class="post-date">18 Mar, 2019</span>' +
      "                                   </div>" +
      "                               </div>" +
      "                           </li>" +
      "                       </ul>" +
      "                   </div>" +
      "               </div>" +
      "               <!-- End Single Itme -->" +
      "               <!-- Single Itme -->" +
      '               <div class="col-lg-3 col-md-6 item">' +
      '                   <div class="f-item">' +
      '                       <h4 class="widget-title">Contact Info</h4>' +
      '                       <div class="address">' +
      "                           <ul>" +
      "                               <li>" +
      "                                   <strong>Address: </strong>" +
      "                                    5919 Trussville Crossings Pkwy, Birmingham AL 35235" +
      "                                </li>" +
      "                                <li>" +
      "                                    <strong>Email: </strong>" +
      '                                    <a href="mailto:info@validtheme.com">info@validtheme.com</a>' +
      "                                </li>" +
      "                               <li>" +
      "                                   <strong>Phone: </strong>" +
      '                                   <a href="#"> +123 456 7890</a>' +
      "                               </li>" +
      "                           </ul>" +
      "                       </div>" +
      '                       <div class="social">' +
      "                           <ul>" +
      '                               <li class="facebook">' +
      '                                   <a href="#">' +
      '                                       <i class="fab fa-facebook-f"></i>' +
      "                                   </a>" +
      "                               </li>" +
      '                               <li class="twitter">' +
      '                                   <a href="#">' +
      '                                       <i class="fab fa-twitter"></i>' +
      "                                   </a>" +
      "                               </li>" +
      '                               <li class="youtube">' +
      '                                   <a href="#">' +
      '                                       <i class="fab fa-youtube"></i>' +
      "                                   </a>" +
      "                               </li>" +
      "                           </ul>" +
      "                       </div>" +
      "                   </div>" +
      "               </div>" +
      "               <!-- Single Itme -->" +
      "           </div>" +
      "       </div>" +
      "   </div>" +
      "   <!-- Start Footer Bottom -->" +
      '   <div class="footer-bottom">' +
      '       <div class="container">' +
      '           <div class="row">' +
      '               <div class="col-md-12">' +
      '                   <p class="text-center">Copyright &copy;  2023. <a href="/">Draag</a></p>' +
      "               </div>" +
      /*'               <div class="col-md-6 text-right link">'+
        '                   <ul>'+
        '                       <li>'+
        '                           <a href="#">Terms</a>'+
        '                       </li>'+
        '                       <li>'+
        '                           <a href="#">Privacy</a>'+
        '                       </li>'+
        '                       <li>'+
        '                           <a href="#">Support</a>'+
        '                       </li>'+
        '                   </ul>'+
        '               </div>'+*/
      "           </div>" +
      "       </div>" +
      "   </div>" +
      "   <!-- End Footer Bottom -->";
  }
};
