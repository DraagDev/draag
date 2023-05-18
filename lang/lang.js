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
        'topBarText': 'That\'s right, we only sell 100% organic',
        'footerText': "Happen active county. Winding for the morning am shyness evident to poor. Garrets because elderly new to the point.",
        'usefulLinks': "Useful Links",
        'address': "Address",
        'addressContent': "Qanbash Al Hamraa, Biba, Beni Suef Governorate",
        'email': "Email",
        'phone': "Phone",
        'sendNow': "Send Now",
        'whoWeAre': "Who we are",
        'whoWeAreTitle': "Beautiful landscapes and the farmers Who bring us our food",
        'whoWeAreContent': "Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on.",
        'whoWeAreNumber1': "Tons of harvesta",
        'whoWeAreNumber2': "Organic Product",
        'workWithUsTitle': "Work with Us",
        'workWithUsContent': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eius soluta facere eos veritatis nihil qui ipsa rem! Magni, sint eum. Excepturi natus ut, facere ipsam necessitatibus delectus quam blanditiis!",
        'faq1Title': "Do I need a business plan?",
        'faq1Content': "Continue building numerous of at relation in margaret. Lasted engage roused mother an am at. Other early while if by do to. Missed living excuse as be. Cause heard fat above first time achivement. Discourse unwilling am no described dejection incommode. ",
        'ourGalleryTitle1': "Our Gallery",
        'ourGalleryTitle2': "Latest projects showcase",
        'naturalProducts': "Natural Products",
        'viewAll':"View All",
    },
    
    'ar':{
        'home': 'الرئيسية',
        'aboutUs': "معلومات عنا",
        'products': "المنتجات",
        'contact': "التواصل",
        'blogs': "المدونات",
        'topBarText': 'هذا صحيح ، نحن نبيع عضويًا بنسبة 100٪ فقط',
        'footerText': 'هذا صحيح ، نحن نبيع عضويًا بنسبة 100٪ فقط',
        'usefulLinks': "روابط مفيدة",
        'address': "العنوان",
        'addressContent': "قنبش الحمراء، ببا، محافظة بني سويف",
        'email': "البريد إلالكتروني",
        'phone': "الهاتف",
        'sendNow': "ارسل الان",
        'whoWeAre': "من نحن",
        'whoWeAreTitle': 'هذا صحيح ، نحن نبيع عضويًا بنسبة 100٪ فقط',
        'whoWeAreContent': 'هذا صحيح ، نحن نبيع عضويًا بنسبة 100٪ فقط',
        'whoWeAreNumber1': "طن من الحصاد",
        'whoWeAreNumber2': "منتج عضوي",
        'workWithUsTitle': "اعمل معنا",
        'workWithUsContent': 'هذا صحيح ، نحن نبيع عضويًا بنسبة 100٪ فقط',
        'faq1Title': "هل أحتاج إلى خطة عمل؟",
        'faq1Content': "تواصل بناء العديد من العلاقة في مارغريت. واستمر إشراك الأم المستيقظة وأنا في. أخرى في وقت مبكر عندما تفعل ذلك. عذر المعيشة ضائع كما يكون. سبب سمع الدهون فوق الإنجاز أول مرة. الخطاب غير راغب لست مكتئبا موصوفا.",
        'ourGalleryTitle1': "معرضنا",
        'ourGalleryTitle2': "عرض أحدث المشاريع",
        'naturalProducts': "منتجات طبيعية",
        'viewAll':"عرض الكل",

    }
}

const setLanguage = () =>{
    //if(language === "ar"){
        const elements = document.querySelectorAll("[data-i18n]")
        elements.forEach((element)=>{
            const translationKey = element.getAttribute("data-i18n")
            element.textContent = translations[language][translationKey]
        })
    //}
}

document.addEventListener("DOMContentLoaded", () => {
    setLanguage()
})