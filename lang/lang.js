const langStorageName = "draaglang"

var language = localStorage.getItem(langStorageName)

if(!localStorage.getItem(langStorageName)){
    localStorage.setItem(langStorageName,"en")
    language = "en"
}

var translations = {
    'en':{
        'home': 'Home',
        'aboutUs': "About Us",
        'products': "Products",
        'contact': "Contact",
        'blogs': "Blogs",
        'topBarText': 'That\'s right, we only sell 100% organic'
    },
    
    'ar':{
        'home': 'الرئيسية',
        'aboutUs': "معلومات عنا",
        'products': "المنتجات",
        'contact': "التواصل",
        'blogs': "المدونات",
        'topBarText': 'هذا صحيح ، نحن نبيع عضويًا بنسبة 100٪ فقط'
    }
}

const setLanguage = () =>{
    if(language === "ar"){
        const elements = document.querySelectorAll("[data-i18n]")
        console.log(elements)
        elements.forEach((element)=>{
            console.log(element)
            const translationKey = element.getAttribute("data-i18n")
            element.textContent = translations[language][translationKey]
        })
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setLanguage()
})