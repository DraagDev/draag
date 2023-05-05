const langStorageName = "draaglang"

var language = localStorage.getItem(langStorageName)

if(!localStorage.getItem(langStorageName)){
    localStorage.setItem(langStorageName,"en")
    language = "en"
}

var translations = {
    'en':{
        'home': 'Home',
        'aboutUs': "About Us"
    },
    
    'ar':{
        'home': 'الرئيسية',
        'aboutUs': "معلومات عنا"
    }
}

const setLanguage = () =>{
    if(language === "ar"){
        const elements = document.querySelectorAll("[data-i18n]")
        elements.forEach((element)=>{
            const translationKey = element.getAttribute("data-i18n")
            element.textContent = translations[language][translationKey]
        })
    }
}


setLanguage()