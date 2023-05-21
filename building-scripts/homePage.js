document.addEventListener("DOMContentLoaded", () => {
    buildTopNavbar();
    buildBottomNavbar();
    buildFooter();
    ourClientsTranslation();
    translationsStyle();
});


const translationsStyle = () =>{
    let whoWeAreHomeStyle = document.getElementById("whoWeAreHomeStyle");
    if(language === "ar"){

        if (whoWeAreHomeStyle) {
            whoWeAreHomeStyle.innerHTML ='<style>   '+
            (language==="en" ? "" : '.about-area .info h5::after {left:-44px; background: url(assets/img/illustration/2-inverse.png);background-size: contain;background-repeat: no-repeat;background-position-x:right;}') +
            (language==="en" ? "" : '.about-area .info {text-align:right;}') +
            '</style>'
        }
        
        let homePageNumbersContainer = document.getElementById("homePageNumbersContainer");
        if (homePageNumbersContainer) {
            homePageNumbersContainer.classList += " flex-row-reverse"
        }
    }
}
const ourClientsTranslation = () =>{
  
    let element = document.getElementById("ourClients");
    if (element) {
        let logosContainer = document.getElementById("ourClientsLogoContainer");
        let clientsLogosIndicatorsContainer = document.getElementById("clientsLogosIndicatorsContainer");
        let clientsLogosIndicators = document.getElementById("clientsLogosIndicators");
        if(language === "ar"){
            element.dir = 'rtl'
            logosContainer.style = "border-left:none; border-right: 1px solid rgba(255, 255, 255, 0.4);padding-left: none;padding-right: 50px;"
            let tesimonialsContainerStyle = document.getElementById("tesimonialsContainerStyle")
            tesimonialsContainerStyle.innerHTML ='<style>   '+
                (language==="en" ? "" : '.testimonials-area .tesimonials-content::after {right:0px; left:unset;}') +
            '</style>'
        }
        if(window.innerWidth <= 1024){
            clientsLogosIndicatorsContainer.style = "overflow-x: scroll;"
            logosContainer.style = "border:none; padding: 0px; margin-left:20px; margin-right:20px;"
        }

    
        if(window.innerWidth < 780){
            logosContainer.style = "border:none; padding: 0px; margin-left:0px; margin-right:0px;"
            clientsLogosIndicators.style = "width:120%;"
        }
        if(window.innerWidth < 500){
            clientsLogosIndicators.style = "width:180%;"

        }
    }
  }