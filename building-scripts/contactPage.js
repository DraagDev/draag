document.addEventListener("DOMContentLoaded", () => {
    buildHeader();
    buildContent();
    inserGoogleMap()
});
  
const buildHeader = () =>{
    let element = document.getElementById("contactUsHeader");
    if (element) {
      element.innerHTML =
      '<div class="breadcrumb-area text-center shadow dark bg-fixed text-light" style="background-image: url(assets/img/2440x1578.png);">'+
      '<div class="container">'+
      '    <div class="row">'+
      '        <div class="col-lg-8 offset-lg-2">'+
      '            <h1 data-i18n="contact">Contact Us</h1>'+
      '<style>   '+
      (language==="en" ? "" : '.breadcrumb-area .breadcrumb li::after {   right: 0px; }') +
     '</style>'+
      '            <ul class="breadcrumb" '+(language==="en" ? "dir='ltr'" : "dir='rtl'")+'>'+
      '               <li><a href="#" ><i class="fas fa-home"></i> <span data-i18n="home">Home</span></a></li>'+
      '               <li class="active" data-i18n="contact">Contact</li>'+
      '           </ul>'+
      '        </div>'+
      '    </div>'+
      ' </div>'+
      '</div>'
    }

}
const buildContent = () =>{
    let element = document.getElementById("contactInfoContainer");
    
    if (element) {
      element.innerHTML =
        '<div class="container-full '+(language==="en" ? "text-left" : "text-right")+'" '+ (language==="en" ? "dir='ltr'" : "dir='rtl'") +'>'+
        '   <div class="contact-items">'+
        '        <div class="row align-center">'+
        '            <div class="col-lg-3 contact-info">'+
        '                <ul>'+
        '                     <li>'+
        '                         <h4 data-i18n="ourLocation">Our Location</h4>'+
        '                       <span data-i18n="ourLocationContent">22 Baker Street,<br> London, United Kingdom,<br> W1U 3BW</span>'+
        '                   </li>'+
        '                   <li>'+
        '                       <h4 data-i18n="phone">Phone</h4>'+
        '                       <span>+44-20-7328-4499 <br>+99-34-8878-9989</span>'+
        '                   </li>'+
        '                   <li>'+
        '                       <h4 data-i18n="email">Email</h4>'+
        '                       <span>info@yourdomain.com<br>admin@yourdomain.com</span>'+
        '                   </li>'+
        '               </ul>'+
        '           </div>'+
        '           <div class="col-lg-5">'+
        '               <div class="form-content">'+
        '                   <h2 data-i18n="leaveAMessage">Leave a message</h2>'+
        '                   <form action="../assets/mail/contact.php" method="POST" class="contact-form">'+
        '                       <div class="row">'+
        '                           <div class="col-lg-6">'+
        '                               <div class="form-group">'+
        '                                   <input class="form-control" id="name" name="name" placeholder="'+(language==="en" ? "Name" : "الاسم")+'" type="text">'+
        '                                   <span class="alert-error"></span>'+
        '                               </div>'+
        '                           </div>'+
        '                           <div class="col-lg-6">'+
        '                               <div class="form-group">'+
        '                                   <input class="form-control" id="email" name="email" placeholder="'+(language==="en" ? "Email*" : "البريد الالكترونى*")+'" type="email">'+
        '                                   <span class="alert-error"></span>'+
        '                               </div>'+
        '                           </div>'+
        '                       </div>'+
        '                       <div class="row">'+
        '                           <div class="col-lg-12">'+
        '                               <div class="form-group">'+
        '                                   <input class="form-control" id="phone" name="phone" placeholder="'+(language==="en" ? "Phone" : "الهاتف")+'" type="text">'+
        '                                   <span class="alert-error"></span>'+
        '                               </div>'+
        '                           </div>'+
        '                       </div>'+
        '                       <div class="row">'+
        '                           <div class="col-lg-12">'+
        '                               <div class="form-group comments">'+
        '                                   <textarea class="form-control" id="comments" name="comments" placeholder="'+(language==="en" ? "Please describe what you need." : "يرجى وصف ما تحتاجه.")+'"></textarea>'+
        '                               </div>'+
        '                          </div>'+
        '                       </div>'+
        '                       <div class="row">'+
        '                           <div class="col-lg-12">'+
        '                               <button type="submit" name="submit" id="submit" data-i18n="sendNow">'+
        '                                   Send Now'+
        '                               </button>'+
        '                           </div>'+
        '                       </div>'+
        '                       <!-- Alert Message -->'+
        '                       <div class="col-md-12 alert-notification">'+
        '                           <div id="message" class="alert-msg"></div>'+
        '                       </div>'+
        '                   </form>'+
        '               </div>'+
        '           </div>'+
        '       </div>'+
        '   </div>'+
        '</div>'
    }
}

const inserGoogleMap = () => {
  let element = document.getElementById("googleMapContainer");
  if (element) {
    element.innerHTML =
    '<iframe style="border:0; '+(language==="en" ? "right:0;" : "left:0;")+'" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110690.10655185032!2d31.410495226243157!3d29.891203733310746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145827cabfb4ddfd%3A0xac1979302da39ec8!2sEl%20Yasmeen%20Hotel!5e0!3m2!1sen!2seg!4v1683478599721!5m2!1sen!2seg" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  }
}