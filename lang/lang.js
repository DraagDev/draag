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
        'contact': "Contact Us",
        'blogs': "Blogs",
        'slogan': 'World-class quality, delivered worldwide',
        'topBarText': 'That\'s right, we only sell 100% organic',
        'footerText': "Founded in 1987, draag food security started with a simple yet passionate idea: to provide the best quality turkey products.",
        'usefulLinks': "Useful Links",
        'address': "Address",
        'addressContent': "Zefta, Gharbia Governorate, Egypt",
        'ourLocation': "Our Location",
        'email': "Email",
        'phone': "Phone",
        'sendNow': "Send Now",
        'whoWeAre': "Who we are",
        'whoWeAreTitle': "Pioneers Of Quality Turkey Products",
        'whoWeAreContent': "Founded in 1987, draag food security started with a simple yet passionate idea: to provide the best quality turkey products from a breed imported from France. Today, our team of 100 dedicated professionals carries forward this legacy, ensuring each turkey product meets the stringent quality and safety standards our customers have come to expect.",
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
        'viewMore':"View More",
        'ourClients':"Our Clients",
        'ourPartners':"Our Partners",
        'since':"Since",
        'productionCapacityPerDay':"Production Capacity Per Day",
        'herdNumberPerYear':"Herd Number Per Year",
        'numberOfWorkers':"Number Of Workers",
        'allYouNeedToKnow':"All You Need To Know About-Us",
        'qualityStandards': "Quality Standards",
        'iso': "Iso 22000:2018",
        'foodSafety': "Food safety management system",
        'complianceReq': "HAACP Certificate of compliance to the requirements of halal slaughter",
        'marketLeader': "Market Leader",
        'marketLeaderContent': "We are a family-owned and operated business that has been in the turkey industry for over 35 years. We are passionate about turkey and all our products are processed using state-of-the-art technology.",
        'ourFarm': "Our Farm",
        'ourFarmContent': "Our farm is located in a beautiful rural area with plenty of space for our turkeys to roam free. We use only the highest quality feed and water, and we provide our turkeys with plenty of fresh air and sunshine. We also have a state-of-the-art veterinary clinic on-site to ensure that our turkeys are always healthy.",
        'contactInfo': "Contact Info",
        'ourVision': "Our Vision",
        'ourVisionContent': "We aspire to be a global leader in the turkey industry, renowned for our unwavering commitment to quality, integrity, and innovation. By prioritizing the welfare of our turkeys and the satisfaction of our customers, we aim to contribute positively to communities and the environment, while setting new standards of excellence in our industry.",
        'ourMission': "Our Mission",
        'ourMissionContent': "Delivering consistently high-quality, hormone and chemical-free turkey products, while upholding food safety standards and fostering community trust.",
        'leaveAMessage1': "Let\'s talk turkey! Have a question or feedback?",
        'leaveAMessage2': "We\'d love to hear from you.",
        "productsPageStatment":"From our farm to you, Explore our range of quality turkey products",
        'ourProducts': "Our Products",
        'wholeTurkey': "Whole Turkey",
        'turkeyBreast': "Turkey Breast",
        'ourTeam': "Our Team",
        'ourProcess': "Our Process",
        'watchVideo': "Watch Video"

    },
    
    'ar':{
        'home': 'الرئيسية',
        'aboutUs': "معلومات عنا",
        'products': "المنتجات",
        'contact': "التواصل",
        'blogs': "المدونات",
        'slogan': 'جودة عالمية المستوى، تُوصل لجميع أنحاء العالم',
        'topBarText': 'هذا صحيح ، نحن نبيع عضويًا بنسبة 100٪ فقط',
        'footerText': 'تأسست دراج للامن الغذائي في عام 1987 بفكرة بسيطة ولكنها مليئة بالشغف و هو توفير أفضل منتجات الديك الرومي',
        'usefulLinks': "روابط مفيدة",
        'address': "العنوان",
        'addressContent': "زفتى، محافظة الغربية، مصر",
        'ourLocation': "موقعنا",
        'email': "البريد إلالكتروني",
        'phone': "الهاتف",
        'sendNow': "ارسل الان",
        'whoWeAre': "من نحن",
        'whoWeAreTitle': 'رواد انتاج الديوك الرومي في مصر',
        'whoWeAreContent': 'تأسست دراج للامن الغذائي في عام 1987 بفكرة بسيطة ولكنها مليئة بالشغف و هو توفير أفضل منتجات الديك الرومي من سلالات مستوردة من فرنسا. اليوم، يحمل فريقنا المكون من 100 عامل متفانٍ هذه الخبرة للوصول أن كل منتج من منتجات الديك الرومي يلبي معايير  للجودة والسلامة التي يتوقعها عملاؤنا',
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
        'viewMore':"عرض المزيد",
        'ourClients':"عملائنا",
        'ourPartners':"شركاؤنا",
        'since':"منذ",
        'productionCapacityPerDay':"السعة الإنتاجية في اليوم",
        'herdNumberPerYear':"عدد القطيع في السنة",
        'numberOfWorkers':"عدد العمال",
        'allYouNeedToKnow':"كل ما تحتاج معرفته عنَّا",
        'qualityStandards': "معايير الجودة",
        'iso': "آيزو 22000:2018",
        'foodSafety': "نظام إدارة سلامة الأغذية مع تطبيق مبادئ تحليل المخاطر ونقاط الرقابة الحرجة",
        'complianceReq': "(HACCP) شهادة الامتثال لمتطلبات ذبح الحلال",
        'marketLeader': "رواد السوق",
        'marketLeaderContent': "نحن عبارة عن عمل عائلي يديره ويشغله أفراد العائلة متخصصون في تربية الديك الرومى، حيث يمتد خبرتنا لأكثر من 35 عامًا في هذا المجال. نحن شغوفون للديك الرومى ويتم معالجة جميع منتجاتنا باستخدام أحدث التقنيات في هذا المجال.",
        'ourFarm': "مزرعتنا",
        'ourFarmContent': "تقع مزرعتنا في منطقة ريفية جميلة واسعة مع الكثير من المساحة للسماح للديك الرومي بالتجول بحرية. نستخدم فقط الأعلاف والمياه عالية الجودة ونوفر للديك الرومي الهواء العليل وضوء الشمس الطبيعي. كما أن لدينا عيادة بيطرية حديثة في الموقع لضمان صحة الديك الرومي في جميع الأوقات",
        'contactInfo': "معلومات الاتصال",
        'ourVision': "رؤيتنا",
        'ourVisionContent': "نطمح إلى أن نكون شركة رائدة عالمياً في صناعة الديك الرومي، معروفين بالتزامنا الدائم بالجودة، والنزاهة، والابتكار. من خلال تركيزنا على رفاهية الديوك الرومي بمزارعنا ورضا عملائنا، نهدف إلى المساهمة بشكل إيجابي في المجتمعات والبيئة، بينما نضع معايير جديدة للتميز في صناعتنا",
        'ourMission': "مهمتنا",
        'ourMissionContent': "تقديم منتجات الديك الرومي عالية الجودة وخالية من الهرمونات والكيماويات بشكل مستمر، مع الحفاظ على معايير سلامة الغذاء وتعزيز الثقة في المجتمع",
        'leaveAMessage1': "في حالة وجود اسألة او اي مقترحات يسعدنا ان نتواصل معكم",
        "productsPageStatment":"من مزارعنا اليك اكتشف جودة منتجات الديك الرومي الخاصة بنا",
        'ourProducts': "منتجاتنا",
        'wholeTurkey': "ديك رومى كامل",
        'turkeyBreast': "صدر الديك الرومي",
        'ourTeam': "فريقنا",
        'ourProcess': "عمليتنا",
        'watchVideo': "شاهد الفيديو"
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