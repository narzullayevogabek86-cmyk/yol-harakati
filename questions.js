// Xom ma'lumotlar 123 ta bilet va har birida 10 ta savol formatida saqlanadi.
// Fayl oxirida ular imtihon formati uchun 62 ta biletga birlashtiriladi (61x20 + 1x3).
// Har bir savol quyidagi formatda:
// {
//     question: "Savol matni",
//     answers: ["Variant 1", "Variant 2", "Variant 3", "Variant 4"],
//     correct: 0, // To'g'ri javob indexi (0-3)
//     image: null // Agar rasm bo'lsa, rasm URL yoki null
// }

const QUESTIONS = [];

// 123 ta xom bilet uchun bo'sh shablon yaratish
for (let ticketNum = 1; ticketNum <= 123; ticketNum++) {
    const ticket = {
        ticketNumber: ticketNum,
        questions: []
    };

    // Har bir biletga 10 ta bo'sh savol qo'shish
    for (let qNum = 1; qNum <= 10; qNum++) {
        ticket.questions.push({
            question: `Bilet ${ticketNum}, Savol ${qNum} - (Savolni bu yerga kiriting)`,
            answers: [
                "Variant A - (Javobni kiriting)",
                "Variant B - (Javobni kiriting)",
                "Variant C - (Javobni kiriting)",
                "Variant D - (Javobni kiriting)"
            ],
            correct: 0, // To'g'ri javob indexi (0, 1, 2 yoki 3)
            image: null // Agar savol uchun rasm kerak bo'lsa, bu yerga URL kiriting
        });
    }

    QUESTIONS.push(ticket);
}

// BILET 1 - Savollar
QUESTIONS[0].questions[0] = {
    question: "Qaysi avtomobil uchun bu belgilarning ta'sir oralig'ida to'xtashga ruxsat etiladi?",
    answers: [
        "Qizilga",
        "Ikkala avtomobilga",
        "Hech qaysi biriga",
        "«Nogironlar taniqlik belgisi bo'lgan sariq avtomobilga"
    ],
    correct: 3,
    image: "images/1.jpg"
};

QUESTIONS[0].questions[1] = {
    question: "Qaysi yo'naltirgichlar bo'ylab harakatlanishga ruxsat etiladi?",
    answers: [
        "Faqat «A» yo'nalish bo'ylab",
        "Faqat «B» yo'nalish bo'ylab",
        "Faqat «B» yo'nalish bo'ylab",
        "Faqat «A» va «Г» yo'nalishlar bo'ylab",
        "Faqat «Г» yo'nalish bo'ylab"
    ],
    correct: 3,
    image: "images/2.jpg"
};

QUESTIONS[0].questions[2] = {
    question: "Tibbiyot qutichasi va o't o'chirqichi bo'lmagan qanday transport vositalaridan foydalanish taqiqlanadi?",
    answers: [
        "Faqat M1 toifali transport vositasi",
        "Faqat M2, M3, N1 toifali transport vositasi",
        "Faqat N2, N3 toifali transport vositasi",
        "Barcha yuqorida ko'rsatilgan toifalar"
    ],
    correct: 3,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[0].questions[3] = {
    question: "Chorrahadan birinchi bo'lib o'tadi:",
    answers: [
        "Qizil avtomobil",
        "Ko'k avtomobil",
        "Sariq avtomobil",
        "Yashil avtomobil"
    ],
    correct: 3,
    image: "images/4.jpg"
};

QUESTIONS[0].questions[4] = {
    question: "Harakatlanish taqiqlangan:",
    answers: [
        "Qizil va oq avtomobillarga",
        "Ko'k, yashil va oq avtomobillarga",
        "Oq, ko'k va sariq avtomobillarga"
    ],
    correct: 1,
    image: "images/5.jpg"
};

QUESTIONS[0].questions[5] = {
    question: "Qaysi transport vositasining haydovchisi chorrahadan birinchi bo'lib o'tadi?",
    answers: [
        "Avtomobil va avtobus haydovchisi",
        "Tramvay haydovchisi"
    ],
    correct: 0,
    image: "images/6.jpg"
};

QUESTIONS[0].questions[6] = {
    question: "Shu joyda to'xtab turishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 0,
    image: "images/7.jpg"
};

QUESTIONS[0].questions[7] = {
    question: "Haydovchi harakatlanishni boshlashdan oldin qanday amallarni bajarishi kerak?",
    answers: [
        "Transport vositasining sozligini va to'la jihozlanganligini tekshirish",
        "Harakatlanish boshlash xavfsiz bo'lishiga va harakatning boshqa ishtirokchilariga xalaqit bermasligi ishonch hosil qilish",
        "Tegishli yo'nalishidagi burilishning yo'niq ko'rsatkichi bilan ishora berishi",
        "Sanab o'tilgan barcha harakatlarni bajarishi"
    ],
    correct: 1,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[0].questions[8] = {
    question: "Umurtqa pog'onasining ko'krak sohasi shikastlangan jabrlanuvchini transportda qanday tashish kerak?",
    answers: [
        "Qattiq taxtada orqasi bilan yotgan holda",
        "Yumshoq toshlamada orqasi bilan yotgan holda",
        "Qattiq taxtada yoni bilan yotgan holda"
    ],
    correct: 0,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[0].questions[9] = {
    question: "Bunday taniqlik belgisi bilan belgilanadigan transport vositasi:",
    answers: [
        "O'g'ir vazinli va yirik o'lchamli yuklarni tashuvchi",
        "Uzunligi yoki bilan yoki yuksiz 20 metrdan ortiq bo'lgan transport vositasi",
        "Furgon yukxonasida odamlarni tashuvchi"
    ],
    correct: 1,
    image: "images/10.jpg"
};

// 1-bilet tugadi! Keyingi biletlarni ham shu formatda davom ettiring...

// 2-bilet (11-20 savollar)
QUESTIONS[1].questions[0] = {
    question: "Yoqilgan zarg'aldoq rangli yalt-yalt etuvchi chiroq-mayoqcha harakatlanish uchun imtiyoz beradimi?",
    answers: [
        "Ha",
        "Yo'q"
    ],
    correct: 1,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[1].questions[1] = {
    question: "Quyidagi belgilar qaysi yo'nalishlarda harakatlanishga ruxsat beradi?",
    answers: [
        "Faqat chapga",
        "Faqat to'g'riga",
        "Faqat o'ngga",
        "To'g'riga, o'ngga va qayrilib olishga"
    ],
    correct: 3,
    image: "images/12.png"
};

QUESTIONS[1].questions[2] = {
    question: "Mazkur chiziq nima haqida ogohlantiradi?",
    answers: [
        "Transport vositalarining majburiy to'xtash joyiga yaqinlashayotganligini",
        "«To'xtamasdan harakatlanish taqiqlangan» belgisi bilan birga qo'llanilganda, haydovchini «To'xtash» chizig'iga yaqinlashayotganligini",
        "Transport vositasi piyodalarga yo'l berishi kerak bo'lgan joyni ko'rsatadi"
    ],
    correct: 1,
    image: "images/13.png"
};

QUESTIONS[1].questions[3] = {
    question: "Avtomagistralda quyidagilar taqiqlanadi:",
    answers: [
        "Qayrilib olish va ajratuvchi mintaqaning texnologik uzilish joylariga kirish",
        "Orqaga harakatlanish",
        "«To'xtab turish joyi» yoki «Dam olish joyi» belgilari bo'lgan maxsus maydonchalardan tashqari joyda to'xtash",
        "Yuqoridagi barcha holatlarda"
    ],
    correct: 3,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[1].questions[4] = {
    question: "Qaysi transport vositasi haydovchisi to'g'riga harakatlanish huquqiga ega?",
    answers: [
        "Avtobus va mototsikl haydovchilari",
        "Yengil va yuk avtomobillari haydovchilari",
        "Yengil avtomobil haydovchisi"
    ],
    correct: 2,
    image: "images/15.png"
};

QUESTIONS[1].questions[5] = {
    question: "Qaysi transport vositasining haydovchisi yo'l berish kerak?",
    answers: [
        "Avtomobil haydovchisi",
        "Tramvay haydovchisi"
    ],
    correct: 1,
    image: "images/16.png"
};

QUESTIONS[1].questions[6] = {
    question: "Transport vositasini orqaga harakatlantirish paytida haydovchi qanday talablarni bajarishi kerak?",
    answers: [
        "Harakatning boshqa ishtirokchilariga xalaqit bermaslik. Harakat xavfsizligini ta'minlash uchun zarur bo'lsa, boshqa shaxslar yordamidan foydalanish",
        "Boshqa shaxslar yordamidan foydalanish",
        "Transport vositasida tumanga qarshi orqa chiroqlar bo'lsa, ularni yoqish",
        "Gabarit chiroqlarini yoqish"
    ],
    correct: 0,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[1].questions[7] = {
    question: "Yo'lning qarama-qarshi harakat yo'nalishi tomoniga chiqish qachon taqiqlanadi?",
    answers: [
        "Ikki tomonlama harakatli, 4 ta yoki undan ko'p tasmali yo'llarda",
        "Ikki tomonlama harakatli, qarama-qarshi yo'nalishdagi transport vositalari oqimlari ikkita uzluksiz chiziqlar bilan ajratilgan 4 ta tasmali yo'llarda",
        "Yuqoridagi barcha hollarda"
    ],
    correct: 2,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[1].questions[8] = {
    question: "Qaysi holatda egri yo'lda harakatlanayotgan avtomobil turg'unligi ta'minlanadi?",
    answers: [
        "Uzatma ulangan holatda",
        "Uzatma ajratilgan holatda",
        "Tezlik oshirilganda"
    ],
    correct: 0,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[1].questions[9] = {
    question: "Qaysi shartlarda transport vositalaridan foydalanish taqiqlanadi?",
    answers: [
        "Gidravlik tormoz tizimidan suyuqlik oqayotgan bo'lsa",
        "Ishchi tormoz tizimi ishlamayotgan bo'lsa",
        "Kompressor pnevmatik tormoz tizimida o'rnatilgan bosimni ta'minlay olmagan holatda",
        "Ko'rsatilgan barcha holatlarda"
    ],
    correct: 3,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 3-bilet (21-30 savollar)
QUESTIONS[2].questions[0] = {
    question: "Haydovchi yo'lak yo'nalishda kimga transport vositasini taqdim etish shart?",
    answers: [
        "Yo'l xizmati xodimiga",
        "Tibbiyot xodimlariga zudlik bilan tibbiy yordamga muhtoj bo'lgan fuqaroni davolash, profilaktika muassasasiga olib borish uchun"
    ],
    correct: 1,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[2].questions[1] = {
    question: "Qaysi yo'nalishda harakatlanishga ruxsat etiladi?",
    answers: [
        "Faqat B",
        "Faqat A",
        "A va B",
        "A, B, V, G",
        "A, B, V"
    ],
    correct: 2,
    image: "images/22.png"
};

QUESTIONS[2].questions[2] = {
    question: "Qaysi belgi qarama-qarshi harakatlanish ustunligini beradi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 1,
    image: "images/23.png"
};

QUESTIONS[2].questions[3] = {
    question: "Quyidagi belgi qoidalar aholi punktlarida harakatlanish tartibini belgilaydigan tartiblarni bekor qilinishini ko'rsatadi",
    answers: [
        "Variant 1",
        "Variant 2",
        "Variant 3",
        "Barcha hollar"
    ],
    correct: 3,
    image: "images/24.png"
};

QUESTIONS[2].questions[4] = {
    question: "O'ngga burilganda shu belgi bilan belgilangan tasmaga o'tishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi",
        "Agar tasma qolgan tasmalar qismida yo'l uzluksiz chiziq bilan ajratilgan bo'lsa, ruxsat etiladi"
    ],
    correct: 2,
    image: "images/25.png"
};

QUESTIONS[2].questions[5] = {
    question: "Transport vositasi chorrahada quyidagi tartibda o'tadi",
    answers: [
        "Tramvay va avtobus, yengil avtomobil",
        "Tramvay, yengil avtobus va avtobus",
        "Yengil avtomobil, tramvay va avtobus"
    ],
    correct: 2,
    image: "images/26.png"
};

QUESTIONS[2].questions[6] = {
    question: "Avtomobil qaysi g'ildiraklari sirpanib tormozlanishga ko'proq moyil?",
    answers: [
        "Old g'ildiraklar",
        "Orqa g'ildiraklar"
    ],
    correct: 0,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[2].questions[7] = {
    question: "Qaysi transport vositalari qatnov qismining chetida ikki qator qo'yish mumkin?",
    answers: [
        "Kajavasiz mototsikllar, mopedlar va velosipedlar",
        "Kajavali mototsikllar",
        "Nogironlik, taniqlilik belgisi bilan belgilangan yengil avtomobillar",
        "Ruxsat etilgan to'la vazni 3.5 tonnadan kam bo'lgan yuk avtomobillari"
    ],
    correct: 0,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[2].questions[8] = {
    question: "Qo'l jarohatlanganda kiyim qanday tartibda kiyiladi?",
    answers: [
        "Kiyim avval jarohatlangan qo'lga, so'ngra sog' qo'lga kiydiriladi",
        "Kiyim ikkala qo'lga baravar kiydiriladi",
        "Kiyim avval sog' qo'lga, keyin so'ngra jarohatlangan qo'lga"
    ],
    correct: 0,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[2].questions[9] = {
    question: "Yuk transport vositasi shunday joylashtirish kerakki...",
    answers: [
        "Yuk avtomobil devoridan balandga chiqmasligi kerak",
        "Shovqin solmasligi, chang ko'tarilmasligi, atrof muhitni ifloslantirmasligi kerak",
        "Transport vositasi orqa o'lchami 0.8 metrdan ortiq chiqib turmasligi kerak"
    ],
    correct: 1,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 4-bilet (31-40 savollar)
QUESTIONS[3].questions[0] = {
    question: "Mazkur yo'l belgisi nimani bildiradi?",
    answers: [
        "Yo'lning trotuar yoki piyodalar yo'lkasi bo'lgan qismini",
        "Yo'lning piyodalar o'tish joyi bo'lgan qismini"
    ],
    correct: 1,
    image: "images/32.png"
};

QUESTIONS[3].questions[1] = {
    question: "Qaysi transport vositalariga to'xtab turishga ruxsat etilgan?",
    answers: [
        "Faqat mototsiklga",
        "Faqat yuk avtomobiliga",
        "Faqat yengil avtomobilga",
        "Yengil avtomobil va mototsiklga",
        "Barcha transport vositalariga"
    ],
    correct: 2,
    image: "images/33.png"
};

QUESTIONS[3].questions[2] = {
    question: "Ushbu yo'l belgisi nima haqida ogohlantiradi?",
    answers: [
        "Bir izli temir yo'l kesishmasiga yaqinlashayotganligi haqida",
        "Shlagbaum bilan jihozlanmagan bir izli temir yo'l kesishmasi borligidan",
        "Shlagbaum bilan jihozlanmagan ikki izli temir yo'l kesishmasi borligidan"
    ],
    correct: 1,
    image: "images/34.png"
};

QUESTIONS[3].questions[3] = {
    question: "Yashil avtomobil chorrahadan nechinchi bo'lib o'tadi?",
    answers: [
        "Ikkinchi",
        "Birinchi"
    ],
    correct: 0,
    image: "images/35.png"
};

QUESTIONS[3].questions[4] = {
    question: "Qaysi transport vositasiga harakatlanish ruxsat etiladi?",
    answers: [
        "Mototsiklga",
        "Yuk avtomobiliga",
        "Avtobusga",
        "Yengil avtomobilga",
        "Yengil va yuk avtomobillariga"
    ],
    correct: 3,
    image: "images/36.png"
};

QUESTIONS[3].questions[5] = {
    question: "Qaysi transport vositasining haydovchisi yo'l berishi kerak?",
    answers: [
        "Mototsikl haydovchisi",
        "Avtomobil haydovchisi"
    ],
    correct: 1,
    image: "images/31.png"
};

QUESTIONS[3].questions[6] = {
    question: "Harakat ikki tomonlama bo'lgan, uch tasmali yo'lda Siz o'ngga burilishingiz zarur. Ushbu harakatni qaysi tasmadan amalga oshirasiz?",
    answers: [
        "O'ng tasmadan",
        "O'rta tasmadan",
        "O'ng yoki o'rta tasmadan",
        "O'rta tasmadan, lekin faqat o'ng tasma band bo'lganda"
    ],
    correct: 0,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[3].questions[7] = {
    question: "Qaysi joylarda transport vositalariga qatnov qismining chetiga burchak ostida to'xtab turishga ruxsat etiladi?",
    answers: [
        "Har bir yo'nalishda ikkitadan bo'lagi bo'lgan yo'llarda",
        "Har bir yo'nalishda uchta va undan ko'p bo'lagi bo'lgan yo'llarda",
        "Faqat bir tomonlama harakatli yo'llarda",
        "Yo'lning qatnov qismi kengaygan joylarda boshqa yo'l harakati qatnashchilariga xalaqit bermaslik sharti bilan"
    ],
    correct: 3,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[3].questions[8] = {
    question: "Suyak singanda qotirib bog'lash uchun nimadan shina sifatida foydalanish eng qulay?",
    answers: [
        "Bint",
        "Gazmol",
        "Taxta bo'lagi"
    ],
    correct: 2,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[3].questions[9] = {
    question: "Kunning qorong'i vaqtida sun'iy yoritilmagan yo'llarda yoki yetarli ko'rinmaslik sharoitida yonmaydigan orqa gabarit chiroqlari bilan to'xtab turish yoki ta'mirlash joyiga borishga ruxsat etiladimi?",
    answers: [
        "Alohida ehtiyotkorlik bilan borishga ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 1,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 5-bilet (41-50 savollar)
QUESTIONS[4].questions[0] = {
    question: "Sanab o'tilgan hollarning qaysi birida haydovchi o'zining transport vositasini ichki ishlar xodimi ixtiyoriga berishi shart?",
    answers: [
        "Barcha hollarda",
        "Kechiktirib bo'lmaydigan xizmat vazifalarini bajarish uchun",
        "Ish joyiga borish uchun"
    ],
    correct: 1,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[4].questions[1] = {
    question: "Qaysi transport vositasining haydovchisi birinchi navbatda harakatlanish huquqiga ega?",
    answers: [
        "Yuk avtomobili haydovchisi",
        "Avtobus haydovchisi"
    ],
    correct: 0,
    image: "images/42.jpg"
};

QUESTIONS[4].questions[2] = {
    question: "Qaysi belgi transport vositalarining belgida ko'rsatilgandan kam oraliq masofada harakatlanishini taqiqlaydi?",
    answers: [
        "1",
        "2",
        "3",
        "4"
    ],
    correct: 2,
    image: "images/43.jpg"
};

QUESTIONS[4].questions[3] = {
    question: "Mazkur holatda avtobusning chorrahaga kirishiga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi",
        "Agar avtobus belgilangan yo'nalish bo'yicha harakatlanayotgan bo'lsa ruxsat etiladi"
    ],
    correct: 1,
    image: "images/44.jpg"
};

QUESTIONS[4].questions[4] = {
    question: "Ko'rsatilgan vaziyatda qaysi tasmadan o'ngga burilish lozim?",
    answers: [
        "Faqat ikkinchi tasmadan",
        "Faqat «A» chizig'i bilan belgilangan o'ng chekkadagi tasmadan"
    ],
    correct: 1,
    image: "images/45.jpg"
};

QUESTIONS[4].questions[5] = {
    question: "Tartibga soluvchining mazkur ishorasi quyidagini bildiradi:",
    answers: [
        "Ko'k, yashil avtomobillarga harakatlanishga ruxsat etiladi. Qizil, sariq, oq avtomobillarga taqiqlanadi",
        "Ko'k, qizil, yashil avtomobillarga harakatlanishga ruxsat etiladi. Sariq, oq avtomobillarga taqiqlanadi"
    ],
    correct: 1,
    image: "images/46.jpg"
};

QUESTIONS[4].questions[6] = {
    question: "Aholi punktlaridan tashqarida yengil avtomobillarning qanday eng katta tezlik bilan harakatlanishiga ruxsat etiladi?",
    answers: [
        "110 km/s",
        "100 km/s",
        "90 km/s",
        "80 km/s",
        "70 km/s"
    ],
    correct: 1,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[4].questions[7] = {
    question: "Chorrahada aylanma harakatlanish tashkil qilingan. Siz yaqinlashib kelayotgan yo'lning qatnov qismi ikkita harakat bo'lagiga ega. Chorrahaga kirishda burilish uchun Siz qaysi tasmani egallashingiz lozim?",
    answers: [
        "O'ng tasmani",
        "Chap tasmani",
        "O'ng yoki chap tasmani"
    ],
    correct: 2,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[4].questions[8] = {
    question: "Siz qiyalikda svetoforning ruxsat beruvchi ishorasini kutib to'xtadingiz. Bunda avtomobilni joyida tutib turishning eng yaxshi usuli:",
    answers: [
        "To'xtab turish tormozi bilan",
        "Birinchi uzatma ulangan holda ulovchini joydan jilmay aylantirish hisobiga",
        "Yurgizgich o'chirilib, past uzatma ulangan holda",
        "Ishchi tormoz bilan"
    ],
    correct: 0,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[4].questions[9] = {
    question: "Qaysi hollarda velosipedchilarga qatnov qismining o'ng chekkasidan chiqishga yo'l qo'yiladi?",
    answers: [
        "Yuk ortib ketayotganda",
        "Ruxsat etilgan hollarda chapga burilish yoki qayrilib olish uchun",
        "Ikkala sanab o'tilgan hollarda"
    ],
    correct: 1,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 6-bilet (51-60 savollar)
QUESTIONS[5].questions[0] = {
    question: "Piyodalarga yo'lni piyodalar o'tish joyidan tashqarida kesib o'tishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Yo'lning qatnov qismi chetiga nisbatan to'g'ri burchak ostida, uning ikkala tomoni yaxshi ko'rinib turadigan, ko'rinish masofasida o'tish joyi yoki chorraha bo'lmasa, ajratuvchi mintaqasiz va to'siqsiz yo'llarda kesib o'tishga ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 1,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[5].questions[1] = {
    question: "Bu joyda hovliga burilishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 0,
    image: "images/52.jpg"
};

QUESTIONS[5].questions[2] = {
    question: "Ushbu belgilar aholi punktlarida xavfli yo'l qismi boshlanishidan qancha masofa oldin o'rnatiladi?",
    answers: [
        "15-25 m",
        "25-50 m",
        "50-100 m",
        "100-130 m",
        "150-300 m"
    ],
    correct: 2,
    image: "images/53.jpg"
};

QUESTIONS[5].questions[3] = {
    question: "Avtomagistralda shatakka olishga ruxsat etiladimi?",
    answers: [
        "50 km/s tezlik bilan ruxsat etilgan",
        "Taqiqlanadi",
        "Faqat qisman ortish usuli bilan yoki qattiq ulagich bilan ruxsat etiladi",
        "Egiluvchan tirkagich bilan ruxsat etiladi",
        "Istalgan usulda ruxsat etilgan"
    ],
    correct: 2,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[5].questions[4] = {
    question: "Belgilangan yo'nalish bo'ylab harakatlanayotgan avtobus haydovchisi ushbu sharoitda yo'l berishi kerakmi?",
    answers: [
        "Kerak",
        "Kerak emas",
        "Kerak emas, chunki u to'g'riga ketmoqda"
    ],
    correct: 0,
    image: "images/55.jpg"
};

QUESTIONS[5].questions[5] = {
    question: "Qaysi transport vositalariga harakatlanishga ruxsat etiladi?",
    answers: [
        "Faqat qizil avtomobilga",
        "Barcha transport vositalariga",
        "Qizil, ko'k va yashil avtomobillarga"
    ],
    correct: 2,
    image: "images/56.jpg"
};

QUESTIONS[5].questions[6] = {
    question: "Tirkamali yengil avtomobillarga yo'lning shu yo'l belgisi o'rnatilgan qismida qanday eng katta tezlik bilan harakatlanishga ruxsat etiladi?",
    answers: [
        "60 km/s",
        "70 km/s",
        "80 km/s",
        "100 km/s",
        "110 km/s"
    ],
    correct: 2,
    image: "images/57.jpg"
};

QUESTIONS[5].questions[7] = {
    question: "Qaysi holda Qoidalar ogohlantirish ishorasini berishni talab qilmaydi?",
    answers: [
        "Qatnov qismining chekkasida to'xtash oldidan",
        "«Xavfli burilish» belgisi bilan belgilangan yo'lning egri burilish joyi oldidan",
        "Qo'shni harakat bo'lagiga o'tish oldidan"
    ],
    correct: 1,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[5].questions[8] = {
    question: "Ushbu yo'l belgisi nimani bildiradi?",
    answers: [
        "Belgida ko'rsatilgandan ortiq yuk ko'taruvchi yuk avtomobillari va transport vositalari tarkibining harakat qilishi taqiqlanadi",
        "Umumiy haqiqiy vazni (yo'lovchilar va yuk vaznini qo'shgan holda) belgida ko'rsatilgandan ortiq bo'lgan transport vositalari, shu jumladan, tirkamali transport vositalarining harakat qilishi taqiqlanadi"
    ],
    correct: 1,
    image: "images/59.jpg"
};

QUESTIONS[5].questions[9] = {
    question: "M2; M3 toifali avtotransport vositalari shina protektorlari naqshlarining qoldiq balandligi kamida qancha bo'lishi kerak?",
    answers: [
        "0,8 mm",
        "1,2 mm",
        "1,6 mm",
        "2 mm",
        "2,5 mm"
    ],
    correct: 3,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 7-bilet (61-70 savollar)
QUESTIONS[6].questions[0] = {
    question: "Qaysi javobda yo'lovchilar uchun chiqish va tushish maydonchasi bo'lmagan sharoitdagi yo'lovchilar chiqish va tushish joylari to'liq ko'rsatilgan?",
    answers: [
        "Qatnov qismi yoki trotuar tomonidan",
        "Trotuar tomonidan",
        "Yo'l yoqasida yoki qatnov qismi tomonidan",
        "Trotuar yoki yo'l yoqasi tomonidan"
    ],
    correct: 3,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[6].questions[1] = {
    question: "Qaysi javobda ruxsat etilgan harakatlanish yo'nalishlari to'g'ri ko'rsatilgan?",
    answers: [
        "«A»",
        "«Б»",
        "«B»",
        "«A» va «Б»",
        "«A» va «B»"
    ],
    correct: 3,
    image: "images/62.jpg"
};

QUESTIONS[6].questions[2] = {
    question: "Ushbu yo'l belgisi qo'shimcha axborot belgisi bilan nimani bildiradi?",
    answers: [
        "Ruxsat etilgan to'la vazni 3,5 tonnadan ortiq transport vositalarining to'xtab turish joyi ko'rsatkich qatnov qismining chetida baland to'siq, toshi borligini bildiradi",
        "Transport vositalarining to'xtab turish joyiga avtomobilni ko'rsatilgan usulda qo'yish taqiqlanadi",
        "Yengil avtomobillar, mototsikllar, mopedlar va skuterlarni qo'yish usuli"
    ],
    correct: 2,
    image: "images/63.jpg"
};

QUESTIONS[6].questions[3] = {
    question: "Belgilangan yo'nalish bo'yicha harakatlanayotgan yo'nalishli transport vositalarining haydovchilari piyodalar o'tish joyidan tashqarida oq hassa bilan ishora berayotgan ko'zi ojiz piyodalarni o'tkazib yuborishlari kerakmi?",
    answers: [
        "Barcha hollarda o'tkazib yuborishlari kerak",
        "O'tkazib yuborishlari kerak emas"
    ],
    correct: 0,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[6].questions[4] = {
    question: "Transport vositalari chorrahadan quyidagi tartibda o'tadilar:",
    answers: [
        "Mototsikl, tramvay va avtobus",
        "Tramvay, mototsikl, avtobus",
        "Tramvay va avtobus, mototsikl"
    ],
    correct: 0,
    image: "images/65.jpg"
};

QUESTIONS[6].questions[5] = {
    question: "Harakatlanish kimga ruxsat etilgan?",
    answers: [
        "Barcha transport vositalariga",
        "Mototsiklga",
        "Avtomobil va mototsiklga"
    ],
    correct: 1,
    image: "images/66.jpg"
};

QUESTIONS[6].questions[6] = {
    question: "Qaysi yo'nalishda harakatlanishga ruxsat etiladi?",
    answers: [
        "Faqat chapga",
        "To'g'riga va o'ngga",
        "Faqat o'ngga",
        "Faqat to'g'riga"
    ],
    correct: 0,
    image: "images/67.jpg"
};

QUESTIONS[6].questions[7] = {
    question: "Agar transport vositasi o'lchamlari kattaligidan yoki boshqa sabablarga ko'ra chetki holatda burilishni bajara olmagan bo'lsa, bu qoidadan chetga chiqqan holda burilishga yo'l qo'yiladimi?",
    answers: [
        "Yo'l qo'yilmaydi",
        "Yo'l qo'yiladi, agar bu boshqa transport vositalariga xalaqit bermasa, harakat xavfsizligini ta'minlab, talablardan chetga chiqishi mumkin",
        "Aholi punktidan tashqaridagi yo'llarda yo'l qo'yiladi",
        "Yo'l qo'yiladi, lekin faqat chorrahada emas"
    ],
    correct: 1,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[6].questions[8] = {
    question: "Qattiq ulagich transport vositalari orasida qanchadan ortiq bo'lmagan masofani ta'minlashi kerak?",
    answers: [
        "2 m",
        "3 m",
        "4 m",
        "5 m",
        "6 m"
    ],
    correct: 2,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[6].questions[9] = {
    question: "Velosipedchilarga trotuarda harakatlanishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Piyodalar bo'lmaganda ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 2,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 8-bilet (71-80 savollar)
QUESTIONS[7].questions[0] = {
    question: "Shatakka olingan avtomobilda odamlarni tashishga ruxsat etiladimi?",
    answers: [
        "Avtobusda ruxsat etiladi",
        "Yengil avtomobilda ruxsat etiladi",
        "Qattiq ulagichda shatakka olingan yuk avtomobili yukxonasida ruxsat etiladi"
    ],
    correct: 1,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[7].questions[1] = {
    question: "Bu joyda quvib o'tishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi",
        "Agar quvib o'tilayotgan transportning tezligi 40 km/soatdan kam bo'lsa ruxsat etiladi"
    ],
    correct: 0,
    image: "images/72.jpg"
};

QUESTIONS[7].questions[2] = {
    question: "Qaysi belgi «T» simon chorrahada harakatlanish yo'nalishini ko'rsatadi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 1,
    image: "images/73.jpg"
};

QUESTIONS[7].questions[3] = {
    question: "Oldida transport vositasi to'xtab turgan tartibga solinmaydigan piyodalar o'tish joyiga yaqinlashib kelmoqdasiz. Siz nima qilishingiz kerak?",
    answers: [
        "Piyodalar o'tish joyidan o'tish",
        "Piyodalar o'tish joyidan to'xtamasdan o'tish, lekin alohida ehtiyotkorlik bilan",
        "Harakatni davom ettirish, lekin to'xtab turgan transport vositasi oldida piyodalar yo'qligiga ishonch hosil qilgan holda",
        "Albatta to'xtash, piyodalar paydo bo'lsa, ularni o'tkazib yuborish"
    ],
    correct: 2,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[7].questions[4] = {
    question: "Qaysi transport vositalariga harakatlanish ruxsat etiladi?",
    answers: [
        "Yashil, ko'k va qora avtomobillarga",
        "Qizil, sariq va yashil avtomobillarga",
        "Yashil, ko'k va qizil"
    ],
    correct: 2,
    image: "images/75.jpg"
};

QUESTIONS[7].questions[5] = {
    question: "Transport vositalari chorrahadan quyidagi tartibda o'tadilar:",
    answers: [
        "Tramvay, avtobus va yengil avtomobil",
        "Avtobus, yengil avtomobil, tramvay",
        "Yengil avtomobil, tramvay, avtobus"
    ],
    correct: 0,
    image: "images/76.jpg"
};

QUESTIONS[7].questions[6] = {
    question: "Qanday hollarda quvib o'tish taqiqlanadi?",
    answers: [
        "Tartibga solingan chorrahalarda",
        "Ko'priklarda, yo'l o'tkazgichlarda, estakadalarda va ularning ostida",
        "Piyodalar o'tish joylarida",
        "Sanab o'tilgan barcha hollarda"
    ],
    correct: 3,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[7].questions[7] = {
    question: "Kunduzgi vaqtda yaqinni yorituvchi fara chirog'ini yoqish ogohlantirish ishorasi bo'ladimi?",
    answers: [
        "Bo'ladi",
        "Bo'lmaydi"
    ],
    correct: 0,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[7].questions[8] = {
    question: "Agar g'ildiraklardagi tortish kuchi yo'l bilan tishlashish kuchidan ortiq bo'lsa:",
    answers: [
        "Yurgizgich o'chib qoladi",
        "Ulagich detallarining yemirilishi ortadi",
        "Yetakchi g'ildiraklar o'rnidan jilmay aylanadi"
    ],
    correct: 2,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[7].questions[9] = {
    question: "Qayd etilgan qaysi hollarda transport vositalarini ekspluatatsiya qilishga ruxsat etiladi?",
    answers: [
        "Qo'shaloq shinalar orasiga xavf-xatar tug'diruvchi begona jismlar tiqilib qolgan",
        "Shina o'lchamlari yoki cheklangan og'irlik transport vositasining turiga mos kelmaydi",
        "M1, M2, M3 toifali 1 klass avtotransport vositalarining oldingi o'qiga 1 klassda ta'mirlangan shinalar qo'yilgan",
        "Barcha sanab o'tilgan hollarda ruxsat etiladi"
    ],
    correct: 2,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 9-bilet (81-90 savollar)
QUESTIONS[8].questions[0] = {
    question: "Qaysi transport vositalariga ko'rsatilgan yo'nalishlar bo'yicha harakatlanishga ruxsat etiladi?",
    answers: [
        "Avtomobil haydovchisiga",
        "Avtomobil va mototsikl haydovchisi",
        "Tramvay va avtomobil haydovchisiga"
    ],
    correct: 2,
    image: "images/81.jpg"
};

QUESTIONS[8].questions[1] = {
    question: "Avtomobillarga qaysi yo'nalishda harakatlanishga ruxsat etiladi?",
    answers: [
        "Qizil avtomobilga - to'g'riga, ko'k avtomobilga - to'g'riga va chapga",
        "Qizil va ko'k avtomobilga - to'g'riga",
        "Qizil avtomobilga – to'g'riga, ko'kka – chapga va qayrilib olishga"
    ],
    correct: 2,
    image: "images/82.jpg"
};

QUESTIONS[8].questions[2] = {
    question: "Ushbu holatda quvib o'tishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi",
        "Agar quvib o'tilayotgan transport vositasi 40 km/ soatdan kam tezlik bilan harakatlanayotgan bo'lsa, ruxsat etiladi"
    ],
    correct: 1,
    image: "images/83.jpg"
};

QUESTIONS[8].questions[3] = {
    question: "Ushbu svetofor qaysi harakatlanishni tartibga solish uchun qo'llanadi?",
    answers: [
        "Qatnov qismining butun kengligi bo'yicha",
        "Qatnov qismidagi harakatlanish yo'nalishi qarama qarshi tomonga o'zgaradigan tasmalar bo'yicha",
        "Faqat belgilangan yo'nalishdagi transport vositalari uchun mo'ljallangan tasma bo'yicha"
    ],
    correct: 1,
    image: "images/84.jpg"
};

QUESTIONS[8].questions[4] = {
    question: "Transport vositalari chorrahadan quyidagi tartibda o'tadilar:",
    answers: [
        "Qizil avtomobil, tramvay, yashil, ko'k avtomobil",
        "Tramvay, qizil, ko'k, yashil avtomobil",
        "Tramvay, qizil, yashil, ko'k avtomobil"
    ],
    correct: 2,
    image: "images/85.jpg"
};

QUESTIONS[8].questions[5] = {
    question: "Ko'rsatilgan avtotsisternalardan qaysi biri burilishda ag'darilib ketish xavfi kamroq, turg'unroq?",
    answers: [
        "Suyuqlik bilan 75 foizgacha to'ldirilgani",
        "Suyuqlik bilan to'liq to'ldirilgani"
    ],
    correct: 1,
    image: "images/86.jpg"
};

QUESTIONS[8].questions[6] = {
    question: "Shunday yo'l belgisi bo'lgan yo'l qismlarida ruxsat etilgan to'la vazni 3,5 tonnadan oshmaydigan yuk avtomobillariga qanday eng katta tezlik bilan harakat qilishga ruxsat etiladi?",
    answers: [
        "110 km/s",
        "70 km/s",
        "100 km/s",
        "90 km/s"
    ],
    correct: 2,
    image: "images/87.jpg"
};

QUESTIONS[8].questions[7] = {
    question: "To'xtagan transport vositasi bilan yotiq sidirg'a chiziq orasidagi masofa qancha bo'lganida to'xtash taqiqlanadi?",
    answers: [
        "6 m",
        "5,5 m",
        "4 m",
        "3,5 m",
        "3 m"
    ],
    correct: 4,
    image: "images/88.jpg"
};

QUESTIONS[8].questions[8] = {
    question: "Harakat tezligi ikki marta oshganda, tormozlanish yo'li necha marta ortadi?",
    answers: [
        "Tormoz yo'li harakat tezligiga bog'liq emas",
        "Uch marta",
        "To'rt marta",
        "Ikki marta"
    ],
    correct: 2,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[8].questions[9] = {
    question: "Bir tirkamali avtopoyezdning qanday eng katta uzunligida DYHXX ruxsatisiz harakatlanishga yo'l qo'yiladi?",
    answers: [
        "16 m",
        "18 m",
        "20 m",
        "22 m",
        "24 m"
    ],
    correct: 2,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

console.log('Loaded raw ticket templates:', QUESTIONS.length, 'tickets');

// 10-bilet (91-100 savollar)

QUESTIONS[9].questions[0] = {
    question: "Qizil avtomobilning haydovchisi miltillovchi chiroq-mayoqchali va maxsus tovushli ishora yoqilgan transport vositasi yaqinlashib kelayotganda nima qilishi kerak?",
    answers: [
        "Harakat bo'lagini o'zgartirmasdan to'xtashi va majburiy to'xtash chiroqlarini yoqishi",
        "Tezlikni pasaytirishi va boshqa qatorga o'tish bilan bog'lik keskin manyovrlarga yo'l qo'ymasdan harakatni davom ettirishi",
        "Yo'l berishi"
    ],
    correct: 2, // F3
    image: "images/91.jpg"
};

QUESTIONS[9].questions[1] = {
    question: "Mazkur belgi bilan belgilangan hududda qanday cheklovlar o'rnatilgan?",
    answers: [
        "Harakat tezligini 5 km/s dan oshmasligi kerakligini bildiradi",
        "Transport vositalarini boshqarishni o'rgatish (taqiqlanadi)", // Javob ma'nosi taqiqni anglatadi
        "Kirib, chiqib ketish harakati taqiqlanadi",
        "Yengil avtomobillarni tunda to'xtab turishini taqiqlaydi"
    ],
    correct: 1, // F2
    image: "images/92.jpg"
};

QUESTIONS[9].questions[2] = {
    question: "Qaysi belgi teng ahamiyatli yo'llar kesishish chorrahasiga yaqinlashib kelayotganlik haqida ogohlantiradi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 4, // F5 (5-belgi)
    image: "images/93.jpg"
};

QUESTIONS[9].questions[3] = {
    question: "Svetoforning taqiqlovchi ishorasida va shlagbaum ochiq bo'lganda haydovchi nima qilishi kerak?",
    answers: [
        "Yaqinlashib kelayotgan poyezd yo'qligiga shaxsan ishonch hosil qilishi va kesishmadan o'tishi kerak",
        "Shlagbaumning holatiga asoslangan holda kesishmadan o'tishi kerak",
        "Shlagbaumgacha 10 metrdan yaqin bo'lmagan masofada to'xtash",
        "To'xtash chizig'i oldida, «To'xtamasdan harakatlanish taqiqlangan» belgisi oldida, agar ular yo'q bo'lsa shlagbaumgacha 5 metrdan yaqin bo'lmagan masofada to'xtash"
    ],
    correct: 3, // F4
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[9].questions[4] = {
    question: "Chorrahadan ikkinchi bo'lib kim o'tadi?",
    answers: [
        "Tramvay",
        "Qizil avtomobil",
        "Ko'k avtomobil"
    ],
    correct: 0, // F1
    image: "images/95.jpg"
};

QUESTIONS[9].questions[5] = {
    question: "Qanday hollarda haydovchisi bo'lmagan transport vositalarini shatakka olish mumkin?",
    answers: [
        "Barcha hollarda",
        "Egiluvchan yoki qattiq ulagichda shatakka olishda",
        "Qattiq ulagichning tuzilishi shatakka olingan transport vositalarini shatakka olgan transport vositalarining izidan harakatlanishini ta'minlaganda",
        "Qattiq ulagichda shatakka olishda"
    ],
    correct: 2, // F3
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[9].questions[6] = {
    question: "Bu yerda quvib o'tishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 1, // F2
    image: "images/97.jpg"
};

QUESTIONS[9].questions[7] = {
    question: "Qaysi ishoralar ogohlantiruvchi hisoblanadi?",
    answers: [
        "Burilishni ko'rsatadigan miltillovchi chiroq yoki qo'l bilan beriladigan ishoralar",
        "Tovushli ishoralar",
        "Fara chiroqlarini yoqib-o'chirilishi va kunduzgi vaqtda yaqinni yorituvchi fara chirog'ining yoqilishi",
        "Sanab o'tilgan barcha ishoralar"
    ],
    correct: 3, // F4
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[9].questions[8] = {
    question: "Boshqarishni o'rgatishdagi transport vositasi qanday jihozlangan bo'lishi kerak?",
    answers: [
        "Qoidalarning talablariga asosan, taniqlik belgilari bilan",
        "Ulagich (ssepleniye) va ishchi tormozining qo'shimcha tepkilari bilan",
        "O'rgatuvchi uchun orqani ko'rsatuvchi ko'zgu bilan",
        "Sanab o'tilgan barcha jihozlar va belgilar bilan"
    ],
    correct: 3, // F4
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[9].questions[9] = {
    question: "Sanab o'tilgan holatlarning qaysilarida transport vositasidan foydalanish taqiqlanadi?",
    answers: [
        "Pnevmatik tormoz yuritmasing manometri ishlamaydi",
        "Mototsiklning boshqaruv dempferi nosoz",
        "M1 toifasidagi transport vositasining rul boshqarmasi lyuft yig'indisi 10 gradusdan ortiq",
        "Sanab o'tilgan barcha hollarda"
    ],
    correct: 3, // F4
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};


// 11-bilet (101-110 savollar)

QUESTIONS[10].questions[0] = {
    question: "Avtomobil qaysi yo'nalishlarda harakatlanishi mumkin?",
    answers: [
        "Faqat o'ngga",
        "To'xtash va svetoforning yashil chirog'ini kutish",
        "Faqat to'g'riga",
        "Barcha yo'nalishlar bo'yicha"
    ],
    correct: 3, // F4
    image: "images/101.jpg"
};

QUESTIONS[10].questions[1] = {
    question: "Bu belgi nimani bildiradi?",
    answers: [
        "Ro'paradan kelayotgan transport vositalariga nisbatan birinchi o'tish huquqini beradi",
        "Haydovchi ro'paradan harakatlanayotgan transport vositalariga yo'l berishi kerak",
        "Bir tomonlama harakatli yo'l qatnov qismi tamom bo'lganligini bildiradi"
    ],
    correct: 1, // F2
    image: "images/102.jpg"
};

QUESTIONS[10].questions[2] = {
    question: "Haydovchiga belgilangan trayektoriya bo'yicha harakatlanib, manyovrlar bajarishga ruxsat berilganmi?",
    answers: [
        "«A» bo'yicha ruxsat etilgan",
        "«B» bo'yicha ruxsat etilgan",
        "Ikkovi bo'yicha ham ruxsat etilgan"
    ],
    correct: 2, // F3
    image: "images/103.jpg"
};

QUESTIONS[10].questions[3] = {
    question: "Ushbu svetofor qaysi yo'nalishda harakatlanishni taqiqlaydi?",
    answers: [
        "Faqat chapga",
        "To'g'riga va chapga",
        "To'g'riga va o'ngga",
        "Faqat o'ngga"
    ],
    correct: 0, // F1
    image: "images/104.jpg"
};

QUESTIONS[10].questions[4] = {
    question: "Qizil avtomobil:",
    answers: [
        "Ko'k avtomobilga nisbatan ustunlikka ega, chunki asosiy yo'ldan ketmoqda",
        "Ko'k avtomobilga nisbatan ustunlikka ega, chunki aylanma harakatli yo'ldan ketmoqda",
        "Chorrahaga o'ng tomondan yaqinlashib kelgan ko'k avtomobilga yo'l berishi kerak"
    ],
    correct: 1, // F2
    image: "images/105.jpg"
};

QUESTIONS[10].questions[5] = {
    question: "Yetarli ko'rinmaslik sharoitida yo'lning yoritilmagan qismida to'xtagan yoki to'xtab turgan mexanik transport vositasining haydovchisi bajarishi kerak:",
    answers: [
        "Tumanga qarshi faralarni yoki yaqinni yoritish faralarini yoqishi",
        "Faralarning uzoqni yoritish chiroqlarini yoqishi",
        "Gabarit chiroqlarini yoqishi"
    ],
    correct: 2, // F3
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[10].questions[6] = {
    question: "Transport vositasi qachon faqat o'ng chetki qatoridan harakatlanishi kerak?",
    answers: [
        "Og'ir vaznli va yirik o'lchamli yuklarni tashishda",
        "Agar haydovchi o'zini betob his qilsa",
        "Agar harakatlanish vaqtida mahkamlangan yuk bo'shashib ketsa",
        "Transport vositasi texnikaviy sabablarga ko'ra 40 km/s.dan ortiq tezlikda yura olmasa"
    ],
    correct: 3, // F4
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[10].questions[7] = {
    question: "Ogohlantirish ishorasini berish haydovchiga birinchi harakatlanish huquqini beradimi?",
    answers: [
        "Bermaydi",
        "Manyovrni tugatish vaqtida beradi",
        "Manyovrni boshlash vaqtida beradi",
        "Hamma hollarda beradi"
    ],
    correct: 0, // F1
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[10].questions[8] = {
    question: "Qoidalarga ko'ra shatakka olish vaqtida bir-biriga ulangan transport vositalari tarkibining qanday umumiy uzunligiga yo'l qo'yiladi?",
    answers: [
        "20 m",
        "21 m",
        "22 m",
        "23 m",
        "24 m"
    ],
    correct: 0, // F1
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[10].questions[9] = {
    question: "Qoidalar bo'yicha necha yoshdan boshlab yengil avtomobilni boshqarishga ruxsat etiladi?",
    answers: [
        "14 yoshdan",
        "16 yoshdan",
        "18 yoshdan"
    ],
    correct: 2, // F3
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};




// 12-bilet (111-120 savollar)

QUESTIONS[11].questions[0] = {
    question: "Qaysi hollarda bir yo'nalishda harakatlanish uchun uchtadan kam tasmasi bo'lgan yo'lda to'xtash va to'xtab turish taqiqlanadi?",
    answers: [
        "Ko'priklarda, estakadalarda va yo'l o'tkazgichda",
        "Ko'riklar, estakadalar va yo'l o'tkazgich ostida",
        "Sanab o'tilgan barcha hollarda"
    ],
    correct: 2, // F3
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[11].questions[1] = {
    question: "Haydovchi tormozlanishda boshlangan avtomobilning sirpanib ketishini to'xtatish uchun bajarishi kerak:",
    answers: [
        "Boshlangan tormozlashni to'xtatish",
        "Uzgichni ajratishi",
        "Tormoz tepkisini oxirigacha bosishi",
        "Uzgichni ajratishi va to'xtab turish tormozi bilan tormozlashi"
    ],
    correct: 0, // F1
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[11].questions[2] = {
    question: "Haydovchiga transport vositalarining to'xtab turish joylari chegarasini bildiradigan uzluksiz chiziqni kesib o'tishga ruxsat etiladimi?",
    answers: [
        "To'xtash uchun ruxsat etiladi",
        "Taqiqlanadi",
        "Kirish va chiqish uchun ruxsat etiladi",
        "Hamma hollarda ruxsat etiladi, agar to'xtab turish joyida boshqa transport vositalari yo'q bo'lsa"
    ],
    correct: 1, // F2
    image: "images/113.jpg"
};

QUESTIONS[11].questions[3] = {
    question: "Yopiq shlagbaum oldida turgan transport vositalarini aylanib o'tishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi, agar ro'paradan kelayotgan transport vositalari yo'q bo'lsa",
        "Faqat yon kajavasiz mototsikllarga ruxsat etiladi",
        "Agar aylanib o'tayotgan transport vositasining tezligi 8 km/soatdan kam bo'lsa taqiqlanadi",
        "Taqiqlanadi"
    ],
    correct: 3, // F4
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[11].questions[4] = {
    question: "Chorrahadan uchinchi bo'lib qaysi avtomobil o'tadi?",
    answers: [
        "Yashil avtomobil",
        "Qizil avtomobil",
        "Ko'k avtomobil",
        "Sariq avtomobil"
    ],
    correct: 2, // F3
    image: "images/115.jpg"
};

QUESTIONS[11].questions[5] = {
    question: "Haydovchi piyodalarga qachon yo'l berishi kerak?",
    answers: [
        "Hovlidan yo'lga chiqishda",
        "Yo'ldan hovliga kirishda",
        "Yonilg'i shoxobchasidan yo'lga chiqishda",
        "To'xtab turish joyidan yo'lga chiqishda",
        "Sanab o'tilgan barcha hollarda"
    ],
    correct: 4, // F5
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[11].questions[6] = {
    question: "Ko'rsatilgan holatda yengil avtomobilga to'xtab turishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 1, // F2
    image: "images/117.jpg"
};

QUESTIONS[11].questions[7] = {
    question: "Yuk tashish taqiqlanadi, agar:",
    answers: [
        "Yuk enining chekka nuqtasi oldingi yoki orqa gabarit chirog'ining tashqi chekkasidan 0,4 metrdan ortiq chiqib tursa",
        "Yuk transport vositasining gabaritlaridan 1 metrdan ortiq chiqib tursa",
        "Tashilayotgan yuk vazni shu transport vositasi uchun ishlab chiqaruvchi korxona belgilagan kattalikdan ortiq bo'lsa",
        "Barcha aytilgan hollarda"
    ],
    correct: 2, // F3
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[11].questions[8] = {
    question: "Avtomobilning yon tomonga sirpanib ketishi nima sababdan ro'y berishi mumkin?",
    answers: [
        "Faqat birdaniga keskin burilish sababli",
        "Faqat birdaniga keskin tormozlash sababli",
        "Birdaniga keskin tezlik olish va keskin tormozlash sababli",
        "Hamma sanab o'tilgan hollarda"
    ],
    correct: 3, // F4
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[11].questions[9] = {
    question: "N2; N3 toifadagi avtotransport vositalarining boshqaruv qurilmasida qanday eng katta umumiy lyuft yig'indisiga yo'l qo'yiladi?",
    answers: [
        "16°",
        "20°",
        "25°",
        "26°",
        "30°"
    ],
    correct: 2, // F3
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};




// 13-bilet (121-130 savollar)

QUESTIONS[12].questions[0] = {
    question: "Chorrahani ikkinchi bo'lib kesib o'tadi:",
    answers: [
        "Qizil avtomobil",
        "Ko'k avtomobil",
        "Yashil avtomobil"
    ],
    correct: 1, // F2
    image: "images/121.jpg"
};

QUESTIONS[12].questions[1] = {
    question: "Qaysi transport vositalarining haydovchilari qoidani buzib to'xtadi?",
    answers: [
        "Faqat «A»",
        "Faqat «Б»",
        "Faqat «B»",
        "«Б» va «B»",
        "«A» va «Б»"
    ],
    correct: 4, // F5
    image: "images/122.jpg"
};

QUESTIONS[12].questions[2] = {
    question: "Qaysi belgi kesib o'tgan yo'llarda harakatlanayotgan transport vositalariga yo'l berishni yuklaydi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 2, // F3
    image: "images/123.jpg"
};

QUESTIONS[12].questions[3] = {
    question: "Temir yo'l kesishmasida umumiy xatar ishorasi sifatida quyidagi ishoralar turkumi xizmat qiladi:",
    answers: [
        "Ikkita uzun va ikkita qisqa tovush ishoralari",
        "Bitta uzun va uchta qisqa tovush ishoralari",
        "Uchta uzun va uchta qisqa tovush ishoralari",
        "Uchta uzun va bitta qisqa tovush ishorasi"
    ],
    correct: 1, // F2
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[12].questions[4] = {
    question: "Qaysi javobda chorrahadan o'tish tartibi to'g'ri ko'rsatilgan?",
    answers: [
        "Avtobus, avtomobil, velosiped",
        "Avtomobil, avtobus, velosiped",
        "Velosiped, avtobus, avtomobil"
    ],
    correct: 2, // F3
    image: "images/125.jpg"
};

QUESTIONS[12].questions[5] = {
    question: "Haydovchi orqa g'ildiraklari yetakchi bo'lgan avtomobilning orqa o'qi sirpanib ketishi boshlanganida to'xtatish uchun nima qilishi kerak?",
    answers: [
        "Boshqaruv rulini sirpanishga qarama-qarshi tomonga burish",
        "Boshqaruv rulini sirpanish boshlanayotgan tomonga burish",
        "Tormoz tepkisini bosish"
    ],
    correct: 1, // F2
    image: "images/126.jpg"
};

QUESTIONS[12].questions[6] = {
    question: "Ko'rsatilgan holatda o'zib o'tishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 0, // F1
    image: "images/127.jpg"
};

QUESTIONS[12].questions[7] = {
    question: "Haydovchi aholi punktlaridan tashqaridagi yo'lda quvib o'tilayotgan haydovchining e'tiborini jalb etish uchun fara chiroqlarini o'chirib yoqish va tovush ishorasi berishni qo'llab to'g'ri qildimi?",
    answers: [
        "Noto'g'ri",
        "To'g'ri"
    ],
    correct: 1, // F2
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[12].questions[8] = {
    question: "Shikastlangan kishining o'mrov suyagi singanda nima qilish kerak?",
    answers: [
        "Singan joyga sovuq kompress qo'yish, bint bilan tarangroq bog'lash",
        "Qo'ltiq sohasiga taxtakach qo'yish va to'g'rilab qo'yilgan qo'lini gavdasiga qo'shib bint bilan bog'lash",
        "Paxta yoki bint o'ramasini qo'ltiq sohasiga qo'yib tirsagidan bukilgan qo'lini gavdasiga qo'shib bint bilan bog'lash"
    ],
    correct: 2, // F3
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[12].questions[9] = {
    question: "Yengil avtomobilda tumanga qarshi faralarning nechtasini o'rnatishga ruxsat etiladi?",
    answers: [
        "Ikkita",
        "To'rtta",
        "Haydovchining hohishiga ko'ra"
    ],
    correct: 0, // F1
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};




// 14-bilet (131-140 savollar)

QUESTIONS[13].questions[0] = {
    question: "Sonning yumshoq to'qimalari lat yeganda birinchi tibbiy yordam qanday ko'rsatiladi?",
    answers: [
        "Lat yegan joyni qattiq bog'lash, 15-20 daqiqaga muz solingan xalta qo'yish, oyoqni yuqori ko'tarish, tinch qo'yish",
        "Lat yegan oyoqni tarang qilib (pastdan yuqoriga) bog'lash, singandagi kabi shina qo'yish, bir stakan choyga yarim choy qoshig'ida ichimlik soda solib ichirish, kasalxonaga jo'natish",
        "Oyoqqa yumshoq predmet qo'yish"
    ],
    correct: 0, // F1
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[13].questions[1] = {
    question: "Agar yo'l boshlanishida ushbu belgi turgan bo'lsa, qatnov qismining chap chetidagi tasmaga o'tish mumkinmi?",
    answers: [
        "Chapga burilish uchun mumkin",
        "Quvib o'tish uchun mumkin, agar ro'paradan harakatlanish bo'lmasa va tasma qatnov qismining qolgan tasmalaridan uzuq-uzuq chizig'i bilan ajratilgan bo'lsa",
        "Hech qanday holatda mumkin emas"
    ],
    correct: 2, // F3
    image: "images/132.jpg"
};

QUESTIONS[13].questions[2] = {
    question: "Qarama-qarshi yo'nalishdagi transportlar oqimi ikkita sidirg'a chiziqlar bilan ajratilgan yo'l nechta harakatlanish tasmaga ega?",
    answers: [
        "Ikkita",
        "Ikkita yoki uchta",
        "Uchta",
        "To'rtta va undan ko'p tasmaga"
    ],
    correct: 3, // F4
    image: "images/133.jpg"
};

QUESTIONS[13].questions[3] = {
    question: "Qaysi transport vositalariga harakatlanish uchun ruxsat berilgan?",
    answers: [
        "Yengil va yuk avtomobillariga",
        "Mototsiklga, yengil va yuk avtomobillariga",
        "Yengil avtomobilga va mototsiklga"
    ],
    correct: 2, // F3
    image: "images/134.jpg"
};

QUESTIONS[13].questions[4] = {
    question: "Avtomobillar chorrahadan quyidagi tartibda o'tadilar:",
    answers: [
        "Ko'k, yashil, qizil",
        "Ko'k, yashil bilan bir vaqtda qizil",
        "Yashil, qizil, ko'k bilan bir vaqtda"
    ],
    correct: 2, // F3
    image: "images/135.jpg"
};

QUESTIONS[13].questions[5] = {
    question: "Sirpanchiq yo'lda orqa yetakchi avtomobil uchun tormozlashning qaysi usuli xavfsiz to'xtashni ta'minlaydi?",
    answers: [
        "Ulagichni uzmasdan tormoz tepkisini keskin bosish",
        "Ulagichni uzmasdan tormoz tepkisini ko'plab marta uzuq-uzuq bosish va qo'yib yuborish",
        "Ulagichni uzgan holda tormozlash"
    ],
    correct: 1, // F2
    image: "images/136.jpg"
};

QUESTIONS[13].questions[6] = {
    question: "Transport vositasining bitta o'qiga har xil naqshli shinalarni o'rnatishga ruxsat etiladimi?",
    answers: [
        "Faqat oldingi o'qiga ruxsat etiladi",
        "Oldingi yetakchi ko'prikli avtomobilning faqat orqa o'qiga ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 2, // F3
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[13].questions[7] = {
    question: "Quvib o'tishda faralarning uzoqni yorituvchi chiroqlaridan ogohlantiruvchi ishora sifatida foydalanish mumkinmi?",
    answers: [
        "Hamma holda mumkin",
        "Mumkin, agar bu boshqa haydovchilarning ko'zini qamashtirmasa, shu jumladan, orqani ko'rish ko'zgusi orqali ham",
        "Mumkin emas",
        "Aholi punktidan tashqaridagi yo'llarda mumkin"
    ],
    correct: 1, // F2
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[13].questions[8] = {
    question: "Shatakka olish taqiqlanadi:",
    answers: [
        "Yaxmalakda, qattiq ulagich bilan",
        "Yon kajavasi yo'q mototsikllarni",
        "Yon kajavasi bor mototsikllarni",
        "Ulagich bilan birga transport vositalarining umumiy uzunligi 20 metr bo'lganda"
    ],
    correct: 1, // F2
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

QUESTIONS[13].questions[9] = {
    question: "Quyidagi qaysi belgilar ogohlantiruvchi belgilar jumlasiga kiradi?",
    answers: [
        "Ikkinchidan boshqa barchasi",
        "Uchinchidan boshqa barchasi",
        "Hammasi"
    ],
    correct: 2, // F3
    image: "images/140.jpg"
};




// 141-savol (15-bilet, 1-savol)
QUESTIONS[14].questions[0] = {
    question: "Chorraha oldida bu belgi o'rnatilgan bo'lsa, haydovchi qanday yo'l tutishi kerak?",
    answers: [
        "Kesishadigan yo'lda transport vositalari bo'lmasa chorrahadan to'xtamay o'tishi",
        "Chorrahadan o'tishda, ayniqsa, xushyor bo'lishi",
        "Kesishadigan yo'l bo'ylab harakatlanayotgan transport vositalariga yo'l berish uchun to'xtash chizig'ida to'xtab, u yo'q bo'lsa kesib o'tiladigan qatnov qismi chetida to'xtashi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/141.jpg"
};

// 142-savol (15-bilet, 2-savol)
QUESTIONS[14].questions[1] = {
    question: "Qaysi yo'nalishda harakatlanish taqiqlanadi?",
    answers: [
        "O'ngga birinchi yo'lga",
        "O'ngga ikkinchi yo'lga",
        "O'ngga birinchi va ikkinchi yo'llarga"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/142.jpg"
};

// 143-savol (15-bilet, 3-savol)
QUESTIONS[14].questions[2] = {
    question: "Yotiq chiziqning uzluksiz sariq chizig'i nimani bildiradi?",
    answers: [
        "Transport vositalarining to'xtashi taqiqlangan joyni",
        "Belgilangan yo'nalishli transport vositalari uchun va taksi to'xtashiga ruxsat berilgan joyni",
        "Transport vositalarining to'xtab turishi taqiqlangan joyni"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/143.jpg"
};

// 144-savol (15-bilet, 4-savol)
QUESTIONS[14].questions[3] = {
    question: "Qaysi yo'nalishga harakatlanish ruxsat berilgan?",
    answers: [
        "To'g'riga",
        "O'ngga birinchi yo'lga",
        "O'ngga ikkinchi yo'lga",
        "O'ngga birinchi va ikkinchi yo'llarga"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/144.jpg"
};

// 145-savol (15-bilet, 5-savol)
QUESTIONS[14].questions[4] = {
    question: "Transport vositalari chorrahadan qanday tartibda o'tadilar?",
    answers: [
        "Qizil; ko'k sariq bilan bir vaqtda; yashil",
        "Sariq yashil bilan bir vaqtda; qizil; ko'k",
        "Qizil; yashil; ko'k sariq bilan bir vaqtda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/145.jpg"
};

// 146-savol (15-bilet, 6-savol)
QUESTIONS[14].questions[5] = {
    question: "Haydovchi manyovrni bajarishda burilish ko'rsatkichlari bilan yorug'lik ishorasini har doim ham berishi kerakmi?",
    answers: [
        "Har doim berishi kerak",
        "Kerak emas, agar harakatlanishning boshqa qatnashchilarini chalg'itishi mumkin bo'lsa",
        "Kerak, zaruriy ehtiyot choralarini ko'rgan holda"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 147-savol (15-bilet, 7-savol)
QUESTIONS[14].questions[6] = {
    question: "Suratlarning qaysi birida quvib o'tish ko'rsatilgan?",
    answers: [
        "«A»",
        "«Б»",
        "«A» va «Б»"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/147.jpg"
};

// 148-savol (15-bilet, 8-savol)
QUESTIONS[14].questions[7] = {
    question: "Haydovchi o'z joyidan ketishi yoki transport vositasini qoldirishi mumkin, agar:",
    answers: [
        "U yurgizgichni o'chirgan va avtomobilning to'xtab turish tormoz tizimini ulagan bo'lsa",
        "U yurgizgichni o'chirgan va orqaga siljib ketishga qarshi xavfsizlik buferini o'rnatgan bo'lsa",
        "U transport vositasining o'z-o'zidan harakatlanishi yoki undan haydovchi yo'q vaqtda foydalanishga yo'l qo'ymaydigan zaruriy choralarni ko'rgan bo'lsa"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 149-savol (15-bilet, 9-savol)
QUESTIONS[14].questions[8] = {
    question: "Son suyagi uchdan birining pastki qismi singanda, jarohatlangan odamni transportda tashish uchun taxtakach qanday qo'yiladi?",
    answers: [
        "Taxtakachni sonning butun uzunligicha tos-sondan tizza bo'g'inigacha qo'yib, singan joy bint bilan qattiq bog'lab qo'yiladi",
        "Ikkita taxtakach oyoqning ichki va tashqi tomonidan qo'yiladi: bittasini oyoq to'pig'idan qo'ltiqosti chuqurigacha, ikkinchisini to'piqdan chovgacha",
        "Ikkita taxtakach oyoqning ikki tomonidan to'piqdan sonning yuqorigi uchdan bir qismigacha (singan joydan 15-20 sm yuqorigacha) qo'yiladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 150-savol (15-bilet, 10-savol)
QUESTIONS[14].questions[9] = {
    question: "To'xtab turish tormoz tizimi qanchadan kam bo'lgan qiyalikda M toifadagi avtotransport vositalarini harakatsiz xolatda ushlab tura olmasa, bu transport vositalaridan foydalanish taqiqlanadi.",
    answers: [
        "18%",
        "20%",
        "24%",
        "25%"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};



// 151-savol (16-bilet, 1-savol)
QUESTIONS[15].questions[0] = {
    question: "Qisman ortish usuli bilan avtomobilni shatakka olishda yo'lovchilar qayerda bo'lishlari mumkin?",
    answers: [
        "Har ikki avtomobilning kabinasida",
        "Shatakka oluvchi avtomobilning kabinasida",
        "Shatakka olingan avtomobilning kabinasida",
        "Shatakka oluvchi avtomobilning kuzovida"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 152-savol (16-bilet, 2-savol)
QUESTIONS[15].questions[1] = {
    question: "Qaysi javobda ruxsat berilgan harakat yo'nalishi to'g'ri ko'rsatilgan?",
    answers: [
        "Faqat orqaga burilish",
        "To'g'riga va orqaga burilish",
        "Faqat to'g'riga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/152.jpg"
};

// 153-savol (16-bilet, 3-savol)
QUESTIONS[15].questions[2] = {
    question: "«To'xtash taqiqlangan» belgisi bilan birga bordyurning usti bo'ylab uzluksiz sariq chiziq chizilgan joyda yo'lovchilarni tushirishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi",
        "Belgilangan yo'nalishdagi transport vositalari yo'q bo'lganda ruxsat etiladi",
        "Faqat belgilangan yo'nalishdagi transport vositalariga ruxsat etiladi"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/153.jpg"
};

// 154-savol (16-bilet, 4-savol)
QUESTIONS[15].questions[3] = {
    question: "Temir yo'l izlarini qayerda kesib o'tishga ruxsat etiladi?",
    answers: [
        "Ko'rinish ikkala yo'nalishda 1000 metrdan kam bo'lmagan joylarda",
        "Haydovchining nuqtai nazaricha eng qulay joylarda",
        "Kesib o'tish uchun belgilab qo'yilgan joylarda",
        "Temir yo'l bekatiga 1000 metrdan kam bo'lmagan masofada"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 155-savol (16-bilet, 5-savol)
QUESTIONS[15].questions[4] = {
    question: "Chorrahadan ikkinchi bo'lib o'tadi:",
    answers: [
        "Yashil avtomobil sariq bilan bir vaqtda",
        "Qizil avtomobil",
        "Ko'k avtomobil sariq bilan bir vaqtda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/155.jpg"
};

// 156-savol (16-bilet, 6-savol)
QUESTIONS[15].questions[5] = {
    question: "Qaysi holda avtomobilning ag'anab ketishiga qarshi turg'unligi ortadi?",
    answers: [
        "Og'irlik markazi o'ngga siljiganda",
        "Og'irlik markazi balandda joylashganda",
        "Og'irlik markazi pastda joylashganda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/156.jpg"
};

// 157-savol (16-bilet, 7-savol)
QUESTIONS[15].questions[6] = {
    question: "Hamma tasmalar band bo'lgan serqatnov harakatlanish vaqtida qayrilib olishga ruxsat etiladimi?",
    answers: [
        "Istalgan paytda ruxsat etiladi",
        "Faqat harakatlanish uchun tasmalari uchtadan kam bo'lmagan yo'llarda ruxsat etiladi",
        "Taqiqlanadi",
        "Faqat chorrahalarda ruxsat etiladi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 158-savol (16-bilet, 8-savol)
QUESTIONS[15].questions[7] = {
    question: "Haydovchi qayta tizilishdan va harakatlanish yo'nalishini o'zgartirishdan oldin nima qilishi zarur?",
    answers: [
        "Ushbu manyovr xavfsiz bo'lishiga va harakatlanishning boshqa qatnashchilariga xalaqit bermasligiga ishonch hosil qilishi",
        "Chapga burilish haqida ogohlantirish ishorasi berishi va hech kimga xalaqit bermasligi haqida ishonch hosil qilishi",
        "Aholi punktidan tashqarida tovush ishora berishi",
        "Ko'rsatilgan barcha harakatlarni bajarishi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 159-savol (16-bilet, 9-savol)
QUESTIONS[15].questions[8] = {
    question: "Tos suyaklari singanda birinchi yordam qanday ko'rsatiladi?",
    answers: [
        "Zararlangan joyni qattiq bog'lash, shikastlanganni yarim o'tirgan holatga keltirish",
        "Shikastlanganni qattiq yuzaga orqasi bilan yotqizish, zararlangan joylarga qaynoq isitgich qo'yish",
        "Shikastlanganni qattiq tekis yuzaga yotqizish, bukilgan va ikki tomonga kerilgan tizzalarining bo'g'inlari ostiga g'o'la shaklida o'ram qo'yish"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 160-savol (16-bilet, 10-savol)
QUESTIONS[15].questions[9] = {
    question: "Sanab o'tilgan shartlarning qaysi birida transport vositasidan foydalanish taqiqlanadi?",
    answers: [
        "Oyna tozalagichlar belgilangan tartibda ishlamaydi",
        "Ishlatilgan gazlarni chiqarish tizimi nosoz",
        "Ishlab chiqargan korxona tomonidan ko'zda tutilgan orqa himoya vositasi loyto'sgich va sachratmagichlar bo'lmasa",
        "Sanab o'tilgan hamma sharoitlarda"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};



// 161-savol (17-bilet, 1-savol)
QUESTIONS[16].questions[0] = {
    question: "Qaysi belgi yo'l qismida maxsus avtomatlashtirilgan foto va video qayd etish texnika vositalari o'rnatilganligi xaqida axborot beradi?",
    answers: [
        "1",
        "2",
        "3",
        "4"
    ],
    correct: 2, // F3 (3-belgi) to'g'ri
    image: "images/161.jpg"
};

// 162-savol (17-bilet, 2-savol)
QUESTIONS[16].questions[1] = {
    question: "Qaysi yo'nalishlarda harakatlanish taqiqlanadi?",
    answers: [
        "Chapga va o'nga",
        "To'g'riga va orqa burilish yo'nalishida",
        "Faqat to'g'riga",
        "Hamma yo'nalishlarda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/162.jpg"
};

// 163-savol (17-bilet, 3-savol)
QUESTIONS[16].questions[2] = {
    question: "Qaysi belgi garbarit uzunligi belgisida ko'rsatilganidan uzunroq bo'lgan transport vositalarining harakatlanishini taqiqlaydi?",
    answers: [
        "1",
        "2",
        "3",
        "4"
    ],
    correct: 1, // F2 (2-belgi) to'g'ri
    image: "images/163.jpg"
};

// 164-savol (17-bilet, 4-savol)
QUESTIONS[16].questions[3] = {
    question: "Suratdagi tasvirlangan holatda haydovchi nima qilishi lozim?",
    answers: [
        "Bekatda (yo'l o'rtasida) turgan bir xil yo'nalishdagi tramvayga borayotgan yoki undan kelayotgan piyodalarga yo'l berish",
        "To'xtash va tramvay eshiklari yopilgandan keyin harakatlanishni boshlash",
        "Tezlikni zarur bo'lganda darhol to'xtash imkonini beradigan darajagacha pasaytirib harakatni davom ettirish"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/164.jpg"
};

// 165-savol (17-bilet, 5-savol)
QUESTIONS[16].questions[4] = {
    question: "Chorrahadan ikkinchi bo'lib qaysi avtomobil o'tadi?",
    answers: [
        "Oq avtomobil sariq bilan bir vaqtda",
        "Qizil avtomobil",
        "Yashil avtomobil"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/165.jpg"
};

// 166-savol (17-bilet, 6-savol)
QUESTIONS[16].questions[5] = {
    question: "Kunning qorong'i vaqtida yo'lning yoritilgan qismida harakatlanayotgan mexanik transport vositasida qaysi chiroqlar yoqilgan bo'lishi kerak?",
    answers: [
        "Faralarning yaqinni yorituvchi chiroqlari",
        "Faralarning uzoqni yorituvchi chiroqlari yoki gabarit chiroqlar",
        "Faralarning yaqinni yorituvchi chiroqlari (tumanga qarshi faralar) yoki gabarit chiroqlar"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 167-savol (17-bilet, 7-savol)
QUESTIONS[16].questions[6] = {
    question: "Chorraha qismida kesib o'tgan yo'lga nisbatan asosiy bo'lgan yo'lda transport vositalarini quvib o'tishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 168-savol (17-bilet, 8-savol)
QUESTIONS[16].questions[7] = {
    question: "Qaysi javobda shatakka olingan transport vositasidagi yoritish asboblarini yoqishning to'g'ri holati ko'rsatilgan?",
    answers: [
        "Kunning qorong'i vaqtida yoki tuman bo'lgan sharoitda faralarning yaqinni yoritish chiroqlari",
        "Avariya yorug'lik ishoralari, u nosoz bo'lganda yoki bo'lmagan hollarda uning orqa tomoniga avariya sababli to'xtash belgisi o'rnatilishi kerak",
        "Aholi punktlarida gabarit chiroqlari",
        "Aholi punktlaridan tashqaridagi yo'llarda istalgan yoritish chiroqlarini"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 169-savol (17-bilet, 9-savol)
QUESTIONS[16].questions[8] = {
    question: "Quyidagi 3.27 «To'xtash taqiqlangan » belgisining amal qilish chegarasi qayerda tugaydi?",
    answers: [
        "Birinchi chorrahada",
        "Aholi yashaydigan joyning oxirida",
        "Yo'lning yotiq sariq chizig'i oxirida"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/169.jpg"
};

// 170-savol (17-bilet, 10-savol)
QUESTIONS[16].questions[9] = {
    question: "M1 toifadagi transport vositalari shinalari protektori naqshining qoldiq balandligi necha mm.dan kam bo'lmasligi kerak?",
    answers: [
        "0,8 mm",
        "1,0 mm",
        "1,6 mm",
        "2,0 mm",
        "2,5 mm"
    ],
    correct: 2, // F3 (1,6 mm) to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};


// 171-savol (18-bilet, 1-savol)
QUESTIONS[17].questions[0] = {
    question: "Agar tuproq yo'lda bevosita chorraha oldida to'shamali (qoplamali) yo'l qismi bo'lsa, bu uni kesib o'tayotgan asosiy yo'l bilan teng huquqli qiladimi?",
    answers: [
        "Yo'q",
        "Ha"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 172-savol (18-bilet, 2-savol)
QUESTIONS[17].questions[1] = {
    question: "Taqiqlovchi belgi yo'lning haydovchi to'xtagan qismiga ta'sir qiladimi?",
    answers: [
        "Ta'sir qiladi",
        "Ta'sir qilmaydi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/172.jpg"
};

// 173-savol (18-bilet, 3-savol)
QUESTIONS[17].questions[2] = {
    question: "Aholi punktlaridan tashqarida qaysi belgi takrorlanadi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 2, // F3 (3-belgi) to'g'ri
    image: "images/173.jpg"
};

// 174-savol (18-bilet, 4-savol)
QUESTIONS[17].questions[3] = {
    question: "Yo'lning o'rtasida joylashgan bekatda to'xtagan yo'nalishli tramvay yonidan o'tayotganda haydovchi nima qilishi kerak?",
    answers: [
        "To'xtashi kerak va tramvay eshiklarini yopganidan so'ng qo'zg'alishi kerak",
        "To'xtab turgan tramvayga ketayotgan yoki undan tushayotgan yo'lovchilarga yo'l berishi kerak"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 175-savol (18-bilet, 5-savol)
QUESTIONS[17].questions[4] = {
    question: "Chorrahadan oxirgi bo'lib qaysi avtomobil o'tadi?",
    answers: [
        "Ko'k avtomobil",
        "Sariq avtomobil",
        "Yashil avtomobil",
        "Qizil avtomobil"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/175.jpg"
};

// 176-savol (18-bilet, 6-savol)
QUESTIONS[17].questions[5] = {
    question: "Kunning qorong'u vaqtida yo'lning yoritilmagan qismlarida harakatlanayotganda mexanik transport vositasining qaysi chiroqlari yoqilgan bo'lishi kerak?",
    answers: [
        "Yaqinni yoki uzoqni yorituvchi faralar",
        "Faqat yaqinni yorituvchi faralar",
        "Faqat uzoqni yorituvchi faralar"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 177-savol (18-bilet, 7-savol)
QUESTIONS[17].questions[6] = {
    question: "Qayrilib olish taqiqlanadi:",
    answers: [
        "Piyodalar o'tish joylarida",
        "Tonellarda",
        "Ko'priklarda, osma yo'llarda, estakadalarda va ularning ostida",
        "Temir yo'l kesishmalarida",
        "Hamma sanab o'tilgan hollarda"
    ],
    correct: 4, // F5 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 178-savol (18-bilet, 8-savol)
QUESTIONS[17].questions[7] = {
    question: "Yashil avtomobil haydovchisi:",
    answers: [
        "Bir xil yo'nalishda to'g'riga harakatlanayotgan ko'k avtomobilga yo'l berishi kerak",
        "Ko'k avtomobilga nisbatan ustunlikka ega, chunki o'zib o'tish uchun mo'ljallangan tasmadan ketmoqda",
        "Ustunlikka ega, chunki burilish ishorasini yoqdi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/178.jpg"
};

// 179-savol (18-bilet, 9-savol)
QUESTIONS[17].questions[8] = {
    question: "Qattiq yoki egiluvchan ulagich yordamida shatakka olinganda, yuk avtomobilining yukxonasida odamlarni tashishga ruxsat etiladimi?",
    answers: [
        "Shatakka olgan va shatakka olingan avtomobillarning yukxonasida ruxsat etiladi",
        "Faqat shatakka olingan avtomobil yukxonasida ruxsat etiladi",
        "Faqat shatakka olgan avtomobil yukxonasida ruxsat etiladi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 180-savol (18-bilet, 10-savol)
QUESTIONS[17].questions[9] = {
    question: "Transport vositalaridan qanday shartlarda foydalanishga ruxsat etiladi?",
    answers: [
        "Shinalarning ayrim joylarida kord ko'rinib qoladigan nuqsonlari bor",
        "M1 toifadagi avtotransport vositalarining oldingi o'qiga ikkinchi klassdagi ta'mirlangan shinalar o'rnatilgan",
        "N2, N3 toifadagi transport vositalari shinalari protektori naqshining qoldiq balandligi 1,6 mm.ni tashkil qiladi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};




// 181-savol (19-bilet, 1-savol)
QUESTIONS[18].questions[0] = {
    question: "Yo'l-transport hodisasiga daxldor bo'lgan haydovchilar birinchi navbatda bajarishlari shart:",
    answers: [
        "Hodisa sodir bo'lgan joyda to'xtash, guvohlarning ismi-sharifi va manzilini yozib olish, hodisa haqida militsiyaga xabar berish, shikastlanganlarga shifokor kelguncha tibbiy yordam berish uchun choralar ko'rish",
        "Darhol to'xtash va hodisa sodir bo'lgan joyda qolish, avariya majburiy to'xtash yoritgichini yoqish va avariya sababli to'xtash belgisini o'rnatish",
        "To'xtash va hodisaga tegishli izlarni saqlash, ularning atrofini to'sib, hodisa sodir bo'lgan joyni aylanib o'tishni tashkil etish uchun hamma mumkin bo'lgan choralarni ko'rish, militsiyaga xabar berish, tibbiy yordam berish"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 182-savol (19-bilet, 2-savol)
QUESTIONS[18].questions[1] = {
    question: "Belgi ostidagi qo'shimcha axborot belgisi nimani bildiradi?",
    answers: [
        "Belgidan birinchi burilishning boshlanishigacha bo'lgan masofani",
        "Birinchi burilishdan ikkinchi burilishning boshlanishigacha bo'lgan masofani",
        "Yo'lning xavfli burilishlari bo'lgan qatnov uzunligini"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/182.jpg"
};

// 183-savol (19-bilet, 3-savol)
QUESTIONS[18].questions[2] = {
    question: "Qaysi belgi «To'siqni chapdan chetlab o'tish» deb ataladi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 2, // F3 (3-belgi) to'g'ri
    image: "images/183.jpg"
};

// 184-savol (19-bilet, 4-savol)
QUESTIONS[18].questions[3] = {
    question: "Qaysi transport vositasining haydovchisi yo'l berishi kerak?",
    answers: [
        "Velosiped haydovchisi",
        "Avtomobil haydovchisi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/184.jpg"
};

// 185-savol (19-bilet, 5-savol)
QUESTIONS[18].questions[4] = {
    question: "Chorrahadan birinchi bo'lib o'tadi:",
    answers: [
        "Yashil avtomobil",
        "Ko'k avtomobil",
        "Qizil avtomobil",
        "Sariq avtomobil"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/185.jpg"
};

// 186-savol (19-bilet, 6-savol)
QUESTIONS[18].questions[5] = {
    question: "Ishchi tormozi to'satdan ishlamay qolganda avtomobilni qanday to'xtatish kerak?",
    answers: [
        "Eng past uzatmaga o'tish, to'xtab turish tormozi bilan tormozlash. Zarur bo'lganda biron-bir to'siqdan foydalanish",
        "Ulagichni ajratish va to'xtab turish tormozi bilan keskin tormozlash"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/186.jpg"
};

// 187-savol (19-bilet, 7-savol)
QUESTIONS[18].questions[6] = {
    question: "Qayrilib olish taqiqlanadi:",
    answers: [
        "Chorrahaga 15 metrdan yaqinroqda",
        "Tartibga solinmaydigan chorrahalarda, agar kesib o'tilayotgan yo'lda bir tomonlama harakatlanish tashkil etilgan bo'lsa",
        "Piyodalar o'tish joylarida",
        "Hamma sanab o'tilgan hollarda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 188-savol (19-bilet, 8-savol)
QUESTIONS[18].questions[7] = {
    question: "Shatakka olingan mexanik transport vositasida qaysi tashqi yoritish chiroqlari yoqilgan bo'lishi kerak?",
    answers: [
        "Kunning qorong'i vaqtida, gabarit chiroqlarini",
        "Yaqinni yorituvchi fara chiroqlari",
        "Avariya (xavf-xatar) ishoralarini"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 189-savol (19-bilet, 9-savol)
QUESTIONS[18].questions[8] = {
    question: "Qon oqishini to'xtatuvchi jgut qo'l oyoqlarni qayeridan bog'lanadi?",
    answers: [
        "Yaradan 10-15 sm pastga",
        "Yaradan 10-15 sm yuqoriga",
        "Bevosita yaraning o'ziga"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 190-savol (19-bilet, 10-savol)
QUESTIONS[18].questions[9] = {
    question: "Mototsikl shinalari naqshining qoldiq chuqurligi qanchadan kam bo'lmasligi kerak?",
    answers: [
        "0,5 mm",
        "0,8 mm",
        "1,0 mm",
        "1,6 mm",
        "2,0 mm"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};


// 191-savol (20-bilet, 1-savol)
QUESTIONS[19].questions[0] = {
    question: "Qaysi transport vositasining haydovchisi birinchi navbatda harakatlanish ustunligiga ega?",
    answers: [
        "Yo'l xizmati mashinasining haydovchisi",
        "Yengil avtomobil haydovchisi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/191.jpg"
};

// 192-savol (20-bilet, 2-savol)
QUESTIONS[19].questions[1] = {
    question: "Bu belgilarning qaysi biri «Bir tomonlama harakatlanish yo'liga chiqish»ni bildiradi?",
    answers: [
        "Birinchi va beshinchi",
        "Uchinchi va beshinchi",
        "Ikkinchi va to'rtinchi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/192.jpg"
};

// 193-savol (20-bilet, 3-savol)
QUESTIONS[19].questions[2] = {
    question: "Qaysi yo'nalishlarda harakatlanishga ruxsat etiladi?",
    answers: [
        "«A» yo'nalishda",
        "«Б» yo'nalishda",
        "«B» yo'nalishda",
        "«A», «Б» va «B» yo'nalishlarida",
        "«Б» va «B» yo'nalishlarida"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/193.jpg"
};

// 194-savol (20-bilet, 4-savol)
QUESTIONS[19].questions[3] = {
    question: "Quyidagi hollarning qaysi birida temir yo'l kesishmasiga kirish taqiqlanadi?",
    answers: [
        "Svetoforning taqiqlovchi ishorasi yonganda shlagbaum ochiq turgan holatda",
        "Qishloq xo'jaligi mashinasini mexanik transport vositasiga yuklab olib o'tish holatida",
        "Tezligi 8 km/soatdan ko'p bo'lgan transport vositalari"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 195-savol (20-bilet, 5-savol)
QUESTIONS[19].questions[4] = {
    question: "Avtomobillar chorrahadan quyidagi tartibda o'tadi:",
    answers: [
        "Qizil, yashil, ko'k",
        "Ko'k, qizil, yashil",
        "Uchchalasi bir vaqtda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/195.jpg"
};

// 196-savol (20-bilet, 6-savol)
QUESTIONS[19].questions[5] = {
    question: "Yo'lovchilarning va mahkamlanmagan yukning shiddat bilan oldinga surilib ketishiga nima sabab bo'lishi mumkin?",
    answers: [
        "Faqat tezlikni keskin oshirish",
        "Faqat keskin tormozlash",
        "Tezlikni keskin oshirish va keskin tormozlash"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/196.jpg"
};

// 197-savol (20-bilet, 7-savol)
QUESTIONS[19].questions[6] = {
    question: "Kunduzgi vaqtda transportning old yoki orqa tomoniga 1 metrdan ortiq chiqib turgan yuk qanday belgilanadi?",
    answers: [
        "Diagonali bo'yicha qizil va oq almashuvchi chiziqlari bo'lgan taxtacha yoki bayroqchalar bilan",
        "Qizil bayroqchalar bilan",
        "Oq bayroqchalar bilan"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 198-savol (20-bilet, 8-savol)
QUESTIONS[19].questions[7] = {
    question: "Bu yotiq chiziq quyidagi vazifani bajaradi:",
    answers: [
        "Maxsus piyodalar yo'lkasini bildiradi",
        "Velosiped yo'lkasini bildiradi, chiziq yo'naltirgichlari bo'laklar bo'yicha harakat yo'nalishini ko'rsatadi",
        "Piyodalar o'tish joyini bildiradi, chiziq yo'naltirgichlari piyodalar harakatlanish yo'nalishini ko'rsatadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/198.jpg"
};

// 199-savol (20-bilet, 9-savol)
QUESTIONS[19].questions[8] = {
    question: "Sirpanchiq yo'lda karbyuratorning drossel zaslonkasini keskin ochish qanday xavfli oqibatlarga olib kelishi mumkin?",
    answers: [
        "Karbyurator qismlari ishdan chiqishiga",
        "Yurgizgich ishlashdan to'xtab qolishiga",
        "Avtomobilning yonga sirpanib ketishiga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 200-savol (20-bilet, 10-savol)
QUESTIONS[19].questions[9] = {
    question: "Yuk avtomobilining yukxonasida qancha miqdorda odamlarni tashishga ruxsat etiladi?",
    answers: [
        "20 nafar kishidan ortiq emas",
        "Tashilayotgan odamlar soni, o'tirish uchun jihozlangan o'rindiqlar miqdoridan ortiq bo'lmasligi kerak",
        "Haydovchining xohishiga ko'ra",
        "Ma'muriyatning ko'rsatmasiga ko'ra"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};



// 201-savol (21-bilet, 1-savol)
QUESTIONS[20].questions[0] = {
    question: "Yaltirovchi ko'k mayoqcha va unga qo'shimcha maxsus tovushli ishorasi yoqilgan transport vositasi sizga yaqinlashib kelmoqda. Siz shunday transport vositasiga qarshi harakatlanayotgan bo'lsangiz, nima qilishingiz lozim?",
    answers: [
        "Yo'l yoqasida yoki qatnov kismining chetida to'xtash",
        "Mayoqcha ishorasi yoqilgan transport vositasiga halaqit bermasdan yo'l chetidan harakatlanish"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 202-savol (21-bilet, 2-savol)
QUESTIONS[20].questions[1] = {
    question: "Ko'rsatilgan belgi ostidagi qo'shimcha axborot belgisi qanday maqsadda o'rnatilgan?",
    answers: [
        "Belgining amal qilish hududida foto va video moslamalardan foydalanish taqiqlanadi",
        "DYHXX tomonidan harakat jarayoni foto va video kuzatuviga olingan yo'l qismini bildiradi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/202.jpg"
};

// 203-savol (21-bilet, 3-savol)
QUESTIONS[20].questions[2] = {
    question: "Yo'naltirgichlar bilan ko'rsatilgan yo'nalishlarning qaysi biridan harakat qilish mumkin?",
    answers: [
        "Faqat to'g'riga",
        "Chapga va orqaga",
        "To'g'riga, chapga va orqaga"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/203.jpg"
};

// 204-savol (21-bilet, 4-savol)
QUESTIONS[20].questions[3] = {
    question: "Transport vositalari chorrahani quyidagi tartibda kesib o'tadilar:",
    answers: [
        "Mototsikl, avtomobil, tramvay",
        "Tramvay, avtomobil, mototsikl",
        "Tramvay, mototsikl, avtomobil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/204.jpg"
};

// 205-savol (21-bilet, 5-savol)
QUESTIONS[20].questions[4] = {
    question: "Chorrahani ikkinchi bo'lib kesib o'tadi:",
    answers: [
        "Qizil avtomobil",
        "Ko'k avtomobil",
        "Yashil avtomobil"
    ],
    correct: 1, // F2 to'g'ri (Ko'k avtomobil)
    image: "images/205.jpg"
};

// 206-savol (21-bilet, 6-savol)
QUESTIONS[20].questions[5] = {
    question: "Yo'lning yoritilmagan qismlarida qorong'i vaqtda to'xtaganda gabarit chiroqlari nosoz bo'lsa:",
    answers: [
        "Yaqinni yorituvchi faralarni yoqish",
        "O'ngroqqa olish va yaqinni yorituvchi farani yoqish zarur",
        "Transport vositasini yo'ldan tashqariga chiqarish, agar buning iloji bo'lmasa mazkur qoidalar talablariga binoan uni belgilash lozim"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 207-savol (21-bilet, 7-savol)
QUESTIONS[20].questions[6] = {
    question: "Bu joyda to'xtash mumkinmi?",
    answers: [
        "Mumkin",
        "Taqiqlangan"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/207.jpg"
};

// 208-savol (21-bilet, 8-savol)
QUESTIONS[20].questions[7] = {
    question: "Harakatlanish mumkin bo'lgan yo'nalish qaysi rasmda ko'rsatilgan?",
    answers: [
        "Chapdagi rasmda",
        "Pastdagi rasmda",
        "O'ngdagi rasmda",
        "O'rtadagi va o'ngdagi rasmda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/208.jpg"
};

// 209-savol (21-bilet, 9-savol)
QUESTIONS[20].questions[8] = {
    question: "Orqa tomondagi tumanga qarshi chiroqlar quyidagi hollarda qo'llanilishi mumkin:",
    answers: [
        "Kunning qorong'i vaqtida safda harakatlanishda",
        "Tonellarda harakatlanishda",
        "Faqat yetarli ko'rinmaydigan sharoitlarda",
        "Kunning qorong'i vaqtida yuk tushirishda",
        "Sanab o'tilgan barcha hollarda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 210-savol (21-bilet, 10-savol)
QUESTIONS[20].questions[9] = {
    question: "Qo'shaloq shinalar orasiga begona jismlar tiqilib qolganda transport vositalaridan foydalanishga ruxsat etiladimi?",
    answers: [
        "Taqiqlanadi",
        "Mazkur yo'nalishda ikki va undan ortiq tasma bo'lganda yo'lning faqat o'ng tarafdagi tasmasi bo'ylab harakatlanishga ruxsat etiladi",
        "Ko'pi bilan 40 km/soat tezlikda harakat qilishga ruxsat etiladi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};


// --- 21-BILET (201-210) ---

QUESTIONS[20].questions[0] = {
    question: "Yaltirovchi ko'k mayoqcha va unga qo'shimcha maxsus tovushli ishorasi yoqilgan transport vositasi sizga yaqinlashib kelmoqda. Siz shunday transport vositasiga qarshi harakatlanayotgan bo'lsangiz, nima qilishingiz lozim?",
    answers: ["Yo'l yoqasida yoki qatnov kismining chetida to'xtash", "Mayoqcha ishorasi yoqilgan transport vositasiga halaqit bermasdan yo'l chetidan harakatlanish"],
    correct: 0,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg" // Rasmi yo'q
};

QUESTIONS[20].questions[1] = {
    question: "Ko'rsatilgan belgi ostidagi qo'shimcha axborot belgisi qanday maqsadda o'rnatilgan?",
    answers: ["Belgining amal qilish hududida foto va video moslamalardan foydalanish taqiqlanadi", "DYHXX tomonidan harakat jarayoni foto va video kuzatuviga olingan yo'l qismini bildiradi"],
    correct: 1,
    image: "images/202.jpg"
};

QUESTIONS[20].questions[2] = {
    question: "Yo'naltirgichlar bilan ko'rsatilgan yo'nalishlarning qaysi biridan harakat qilish mumkin?",
    answers: ["Faqat to'g'riga", "Chapga va orqaga", "To'g'riga, chapga va orqaga"],
    correct: 2,
    image: "images/203.jpg"
};

QUESTIONS[20].questions[3] = {
    question: "Transport vositalari chorrahani quyidagi tartibda kesib o'tadilar:",
    answers: ["Mototsikl, avtomobil, tramvay", "Tramvay, avtomobil, mototsikl", "Tramvay, mototsikl, avtomobil"],
    correct: 2,
    image: "images/204.jpg"
};

QUESTIONS[20].questions[4] = {
    question: "Chorrahani ikkinchi bo'lib kesib o'tadi:",
    answers: ["Qizil avtomobil", "Ko'k avtomobil", "Yashil avtomobil"],
    correct: 2,
    image: "images/205.jpg"
};

QUESTIONS[20].questions[5] = {
    question: "Yo'lning yoritilmagan qismlarida qorong'i vaqtda to'xtaganda gabarit chiroqlari nosoz bo'lsa:",
    answers: ["Yaqinni yorituvchi faralarni yoqish", "O'ngroqqa olish va yaqinni yorituvchi farani yoqish zarur", "Transport vositasini yo'ldan tashqariga chiqarish, agar buning iloji bo'lmasa mazkur qoidalar talablariga binoan uni belgilash lozim"],
    correct: 2,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg" // Rasmi yo'q
};

QUESTIONS[20].questions[6] = {
    question: "Bu joyda to'xtash mumkinmi?",
    answers: ["Mumkin", "Taqiqlangan"],
    correct: 1,
    image: "images/207.jpg"
};

QUESTIONS[20].questions[7] = {
    question: "Harakatlanish mumkin bo'lgan yo'nalish qaysi rasmda ko'rsatilgan?",
    answers: ["Chapdagi rasmda", "Pastdagi rasmda", "O'ngdagi rasmda", "O'rtadagi va o'ngdagi rasmda"],
    correct: 3,
    image: "images/208.jpg"
};

QUESTIONS[20].questions[8] = {
    question: "Orqa tomondagi tumanga qarshi chiroqlar quyidagi hollarda qo'llanilishi mumkin:",
    answers: ["Kunning qorong'i vaqtida safda harakatlanishda", "Tonellarda harakatlanishda", "Faqat yetarli ko'rinmaydigan sharoitlarda", "Kunning qorong'i vaqtida yuk tushirishda", "Sanab o'tilgan barcha hollarda"],
    correct: 2,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg" // Rasmi yo'q
};

QUESTIONS[20].questions[9] = {
    question: "Qo'shaloq shinalar orasiga begona jismlar tiqilib qolganda transport vositalaridan foydalanishga ruxsat etiladimi?",
    answers: ["Taqiqlanadi", "Mazkur yo'nalishda ikki va undan ortiq tasma bo'lganda yo'lning faqat o'ng tarafdagi tasmasi bo'ylab harakatlanishga ruxsat etiladi", "Ko'pi bilan 40 km/soat tezlikda harakat qilishga ruxsat etiladi"],
    correct: 0,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg" // Rasmi yo'q
};

// --- 22-BILET (211-220) ---

QUESTIONS[21].questions[0] = {
    question: "Sariq avtobusning haydovchisiga chorrahaga chiqishga ruxsat etiladimi?",
    answers: ["Ruxsat etiladi", "Taqiqlanadi", "Agar avtobus belgilangan yo'nalish bo'yicha yursa, ruxsat etiladi"],
    correct: 1,
    image: "images/211.jpg"
};

QUESTIONS[21].questions[1] = {
    question: "Ruxsat etilgan harakatlanish yo'nalishini ko'rsating:",
    answers: ["Faqat «A»", "Faqat «B»", "Faqat «V»", "«A» va «B»", "«B» va «V»"],
    correct: 3,
    image: "images/212.jpg"
};

QUESTIONS[21].questions[2] = {
    question: "Qaysi belgi faqat oyning juft kunlarida to'xtab turishni taqiqlanishini anglatadi?",
    answers: ["1", "2", "3", "4", "5"],
    correct: 4,
    image: "images/213.jpg"
};

QUESTIONS[21].questions[3] = {
    question: "Bu yo'l belgisi:",
    answers: ["Faqat belgida ko'rsatilgan yoki yuqori tezlikda harakatlanishga ruxsat beradi", "Belgida ko'rsatilgandan ortiq tezlikdagi harakatni taqiqlaydi", "Yo'lning shu qismida tavsiya etilgan harakatlanish tezligini ko'rsatadi"],
    correct: 0,
    image: "images/214.jpg"
};

QUESTIONS[21].questions[4] = {
    question: "Chorrahani oxirgi bo'lib kesib o'tadi:",
    answers: ["Yashil avtomobil", "Ko'k avtomobil", "Qizil avtomobil"],
    correct: 2,
    image: "images/215.jpg"
};

QUESTIONS[21].questions[5] = {
    question: "Haydovchi ko'zi qamashgan taqdirda quyidagilarni bajarishi shart:",
    answers: ["Qatnov qismining iloji boricha o'ng tomoniga o'tib to'xtashi", "Avariya (xavf-xatar) ishoralarini yoqishi va harakat bo'lagini o'zgartirmagan holda tezlikni kamaytirishi va to'xtashi", "Agar oldinda transport vositalari paydo bo'lsa, tasmani o'zgartirmay tezlikni kamaytirishi yoki to'xtashi", "Uzoqni yorituvchi chiroqni yoqishi va to'xtashi"],
    correct: 1,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg" // Rasmi yo'q
};

QUESTIONS[21].questions[6] = {
    question: "To'xtash yo'li deb nimaga aytiladi?",
    answers: ["Xavfning haydovchiga ma'lum bo'lgan paytidan tormozlash boshlanguncha avtomobilda o'tilgan masofa", "Avtomobilda xavfning haydovchiga ma'lum bo'lgan paytidan boshlab to'la to'xtashga qadar o'tilgan masofa"],
    correct: 1,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg" // Rasmi yo'q
};

QUESTIONS[21].questions[7] = {
    question: "Transport vositalarida sun'iy yoritilgan tunnelda harakatlanayotganda qanday yoritish asboblari yoqilishi kerak?",
    answers: ["Faqat uzoqni yorituvchi fara chiroqlari", "Uzoqni yoki yaqinni yorituvchi fara chiroqlari", "Avariya (xavf-xatar) ishoralari", "Yoritish chiroqlari yoqilmaydi"],
    correct: 1,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg" // Rasmi yo'q
};

QUESTIONS[21].questions[8] = {
    question: "Avtomobilda tibbiyot qutichasini qayerda saqlash lozim?",
    answers: ["Yengil avtomobilning yukxonasida", "Tayyorlovchi korxona tomonidan belgilangan joylarda berk holatda", "Avtomoblining kuzovida ko'rinadigan joyda"],
    correct: 1,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg" // Rasmi yo'q
};

QUESTIONS[21].questions[9] = {
    question: "Yuk tirkamasida odam tashishga ruxsat etiladimi?",
    answers: ["Taqiqlanadi", "Ruxsat etiladi", "Faqat yukni kuzatib boruvchi shaxsga ruxsat etiladi"],
    correct: 0,
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg" // Rasmi yo'q
};

// 221-savol (23-bilet, 1-savol)
QUESTIONS[22].questions[0] = {
    question: "Kim «Yo'l harakati qatnashchisi» hisoblanadi?",
    answers: [
        "Yo'l harakati jarayonida transport vositasining haydovchisi, yo'lovchisi yoki piyoda tariqasida bevosita ishtirok etayotgan shaxs",
        "Yo'lda bo'lgan va unda ish bajarmayotgan har qanday shaxs",
        "Biror bir transport vositasini boshqarayotgan shaxs"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 222-savol (23-bilet, 2-savol)
QUESTIONS[22].questions[1] = {
    question: "Avtomobil harakatining barcha ruxsat etilgan yo'nalishlari qaysi javobda to'g'ri ko'rsatilgan?",
    answers: [
        "Faqat chapga",
        "Faqat to'g'riga",
        "Faqat o'ngga",
        "Chap va o'ngga",
        "Barcha yo'nalishlarda"
    ],
    correct: 4, // F5 to'g'ri
    image: "images/222.jpg"
};

// 223-savol (23-bilet, 3-savol)
QUESTIONS[22].questions[2] = {
    question: "Rasmda ko'rsatilgan holatda yo'lovchilarni tushirish uchun to'xtashga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/223.jpg"
};

// 224-savol (23-bilet, 4-savol)
QUESTIONS[22].questions[3] = {
    question: "Haydovchilardan qaysi biri to'xtashga majbur?",
    answers: [
        "Yengil avtomobil haydovchisi",
        "Avtobus haydovchisi",
        "Har ikki haydovchi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/224.jpg"
};

// 225-savol (23-bilet, 5-savol)
QUESTIONS[22].questions[4] = {
    question: "Qaysi avtomobil chorrahadan oxirgi bo'lib kesib o'tadi?",
    answers: [
        "Ko'k",
        "Qizil",
        "Yashil"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/225.jpg"
};

// 226-savol (23-bilet, 6-savol)
QUESTIONS[22].questions[5] = {
    question: "Ko'rsatilgan avtomobillarning qaysi biri ag'darilishga qarshi turg'unroq?",
    answers: [
        "Ichida tik turgan yo'lovchilar bo'lgan avtobus",
        "Avtokran",
        "Bo'sh yuk avtomobili"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/226.jpg"
};

// 227-savol (23-bilet, 7-savol)
QUESTIONS[22].questions[6] = {
    question: "Haydovchi quyidagi holatda o'ng tomondan o'zib o'tishi mumkinmi?",
    answers: [
        "Ha",
        "Yo'q"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/227.jpg"
};

// 228-savol (23-bilet, 8-savol)
QUESTIONS[22].questions[7] = {
    question: "Qaysi transport vositasining haydovchisi yo'l berishi lozim?",
    answers: [
        "Yengil avtomobil haydovchisi",
        "Yuk avtomobil haydovchisi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/228.jpg"
};

// 229-savol (23-bilet, 9-savol)
QUESTIONS[22].questions[8] = {
    question: "Boshqaruv qurilmasi nosoz mexanik transport vositasi shatakka olinishi kerak:",
    answers: [
        "Qisman ortish usuli bilan",
        "Qattiq ulagich bilan",
        "Uni qisman ortish yoki qattiq ulagichda ulash usuli bilan",
        "Agar shatakka oluvchining haqiqiy vazni shatakka olinayotganning haqiqiy vaznidan ikki marta ko'p bo'lsa qattiq ulagichda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 230-savol (23-bilet, 10-savol)
QUESTIONS[22].questions[9] = {
    question: "12 yoshga etmagan bolalarni transport vositasining oldingi o'rindig'ida tashishga ruxsat etiladimi?",
    answers: [
        "Bolalarni ushlab turuvchi maxsus qurilma o'rnatilgan bo'lsa ruxsat etiladi",
        "Faqat katta yoshdagi yo'lovchi hamroh bo'lganida ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};


// 231-savol (24-bilet, 1-savol)
QUESTIONS[23].questions[0] = {
    question: "Qaysi rasmda piyodalar qoidani buzmay harakatlanmoqda?",
    answers: [
        "Chapdagi rasmda",
        "O'ngdagi rasmda",
        "Ikkala rasmda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/231.jpg"
};

// 232-savol (24-bilet, 2-savol)
QUESTIONS[23].questions[1] = {
    question: "Bu belgi nimani bildiradi?",
    answers: [
        "To'siqlarni aylanib o'tishning dastlabki ko'rsatkichi",
        "Boshqa qatnov qismiga qayta tizilishning dastlabki ko'rsatkichi",
        "Qarama-qarshi yo'nalish bo'lagiga chiqishning boshlang'ich ko'rsatkichi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/232.jpg"
};

// 233-savol (24-bilet, 3-savol)
QUESTIONS[23].questions[2] = {
    question: "Qatnov qismidagi bunday yo'naltirgichlar nimani bildiradi?",
    answers: [
        "Haydovchini yo'lning xavfli qismiga yaqinlashayotganligi haqida ogohlantiradi",
        "Qatnov qismi torayishiga yaqinlashayotganligi haqida ogohlantiradi",
        "Yo'lning xavfli burilishi yo'nalishini ko'rsatadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/233.jpg"
};

// 234-savol (24-bilet, 4-savol)
QUESTIONS[23].questions[3] = {
    question: "Quyidagilar poyezdni to'xtatish ishorasi bo'lib xizmat qiladi:",
    answers: [
        "Qo'lni (kunduzi - bir parcha yorqin mato yoki aniq ko'rinadigan bir narsa bilan, tunda - mash'ala yoki chiroq bilan) gir aylantirish",
        "Qo'ldagi tayoqchani yoki qizil bayroqni boshidan yuqori ko'tarib turish",
        "Qo'llarini oldinga uzatib turish",
        "Oldinga uzatilgan qo'llarni yuqoriga va pastga tebratish"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 235-savol (24-bilet, 5-savol)
QUESTIONS[23].questions[4] = {
    question: "Transport vositalari chorrahani quyidagi tartibda kesib o'tadilar:",
    answers: [
        "Ko'k, yashil, qizil avtomobillar",
        "Ko'k, qizil avtomobilni o'tkazib yuboradi, so'ng burilishni tugallaydi; yashil avtomobil",
        "Qizil, ko'k, yashil avtomobillar",
        "Yashil, qizil, ko'k avtomobillar"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/235.jpg"
};

// 236-savol (24-bilet, 6-savol)
QUESTIONS[23].questions[5] = {
    question: "Harakatda imtiyozga ega bo'ladi:",
    answers: [
        "Ko'k avtomobil, chunki qizil harakatlanish yo'nalishini chapga o'zgartiradi",
        "Qizil avtomobil, chunki o'zaro qayta tizilishda u o'ng tomonda bo'lgani uchun",
        "Ko'k avtomobil, chunki o'zaro qayta tizilishda u chap tomonda bo'ladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/236.jpg"
};

// 237-savol (24-bilet, 7-savol)
QUESTIONS[23].questions[6] = {
    question: "Birinchi bo'lib chorrahani kesib o'tadi:",
    answers: [
        "Qizil avtomobil",
        "Yashil avtomobil",
        "Ko'k avtomobil"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/237.jpg"
};

// 238-savol (24-bilet, 8-savol)
QUESTIONS[23].questions[7] = {
    question: "Belgilangan yo'nalishdagi transport vositalari yoki taksilarning to'xtab turish maydonchalaridan, ular bo'lmagan hollarda, to'xtash ko'rsatkichlaridan qanday masofada to'xtash va to'xtab turish taqiqlanadi?",
    answers: [
        "5 m",
        "10 m",
        "15 m",
        "20 m",
        "25 m"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 239-savol (24-bilet, 9-savol)
QUESTIONS[23].questions[8] = {
    question: "Toliqish haydovchining diqqati va e'tiboriga qanday ta'sir qiladi?",
    answers: [
        "Haydovchining diqqat va e'tiboriga ta'sir qilmaydi",
        "Haydovchining diqqat va e'tibori pasayadi",
        "Haydovchining diqqat va e'tibori oshadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 240-savol (24-bilet, 10-savol)
QUESTIONS[23].questions[9] = {
    question: "Velosiped yo'lkasi yo'l bilan kesishgan joylarda velosiped va moped haydovchilari qanday hollarda transport vositalariga yo'l berishlari kerak?",
    answers: [
        "Chorrahadan tashqarida tartibga solinmagan kesishmada barcha hollarda",
        "Transport vositasi o'ngdan yaqinlashib kelganda",
        "Ko'rsatilgan joyda velosiped va moped haydovchilari imtiyozga egadirlar"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};


// 241-savol (25-bilet, 1-savol)
QUESTIONS[24].questions[0] = {
    question: "Jihozlangan bekatlari bo'lmagan tramvay to'xtash joylarida unga chiqish uchun qachon qatnov qismiga chiqishga ruxsat etiladi?",
    answers: [
        "Tramvay yaqinlashib kelganda",
        "Tramvay to'la to'xtagandan so'ng",
        "Har qanday holda",
        "Agar qatnov qismida transport vositalari yo'q bo'lsa, tramvay yaqinlashib kelganda"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 242-savol (25-bilet, 2-savol)
QUESTIONS[24].questions[1] = {
    question: "Bu belgi avtomobilning harakatlanishiga ruxsat etadi:",
    answers: [
        "Barcha yo'nalishlarga",
        "«B» va «V»",
        "«A» va «B»"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/242.jpg"
};

// 243-savol (25-bilet, 3-savol)
QUESTIONS[24].questions[2] = {
    question: "Bu yotiq chiziqlardan qaysi biri belgilangan yo'nalishdagi transport vositalarining to'xtash joyini bildiradi?",
    answers: [
        "«A»",
        "«B»",
        "«V»",
        "«A» va «B»",
        "«B» va «V»"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/243.jpg"
};

// 244-savol (25-bilet, 4-savol)
QUESTIONS[24].questions[3] = {
    question: "Qaysi transport vositasining haydovchisi yo'l berishi kerak?",
    answers: [
        "Avtobus haydovchisi",
        "Mototsikl haydovchisi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/244.jpg"
};

// 245-savol (25-bilet, 5-savol)
QUESTIONS[24].questions[4] = {
    question: "Chorrahani ikkinchi bo'lib kesib o'tadi:",
    answers: [
        "Qizil avtomobil",
        "Yashil avtomobil",
        "Ko'k avtomobil"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/245.jpg"
};

// 246-savol (25-bilet, 6-savol)
QUESTIONS[24].questions[5] = {
    question: "Tumanga qarshi faralardan qaysi hollarda foydalanish mumkin?",
    answers: [
        "Yetarli ko'rinmaydigan sharoitlarda",
        "Mexanik transport vositasini shatakka olganda",
        "Sanab o'tilgan barcha hollarda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 247-savol (25-bilet, 7-savol)
QUESTIONS[24].questions[6] = {
    question: "Yuk avtomobil haydovchisiga bu joyda to'xtashga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/247.jpg"
};

// 248-savol (25-bilet, 8-savol)
QUESTIONS[24].questions[7] = {
    question: "Ko'rsatilgan vaziyatda yengil avtomobil haydovchisiga quvib o'tish ruxsat etiladimi?",
    answers: [
        "Ruxsat etilgan",
        "Ruxsat etilgan, agar mototsiklning tezligi 40 km/soatdan kam bo'lsa",
        "Taqiqlangan"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/248.jpg"
};

// 249-savol (25-bilet, 9-savol)
QUESTIONS[24].questions[8] = {
    question: "Yo'l quruq bo'lganda g'ildirak aylanmay, sirpanib tormozlanish tormoz yo'liga qanday ta'sir etadi?",
    answers: [
        "Tormoz yo'li qisqaradi",
        "Tormoz yo'li o'zgarmaydi",
        "Tormoz yo'li ortadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 250-savol (25-bilet, 10-savol)
QUESTIONS[24].questions[9] = {
    question: "Yonilg'i tizimi zich (germetik) emasligi ma'lum bo'lganda, haydovchi nimalarni bajarishi shart?",
    answers: [
        "Bundan keyingi harakatni to'xtatish",
        "Nosozlikni bartaraf etish tadbirlarini ko'rishi, agar buning imkoni bo'lmasa, zarur ehtiyot choralariiga rioya qilgan holda to'xtab turish yoki ta'mirlash joyiga olib borish",
        "Belgilangan safarni davom ettirish"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 251-savol (26-bilet, 1-savol)
QUESTIONS[25].questions[0] = {
    question: "Yaxmalak bo'lganda shatakka olishga ruxsat etiladimi?",
    answers: [
        "Taqiqlanadi",
        "Sirpanishga qarshi vositalarni qo'llab egiluvchan ulagichda faqat bitta transportni shatakka olish ruxsat etiladi",
        "Faqat qattiq ulagichda ruxsat etiladi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 252-savol (26-bilet, 2-savol)
QUESTIONS[25].questions[1] = {
    question: "Ushbu belgi amal qilgan hududda avtobus haydovchisi quvib o'tishi mumkinmi?",
    answers: [
        "Quvib o'tish qoidalariga rioya qilib barcha hollarda mumkin",
        "Mumkin emas",
        "Agar quvib o'tilayotgan transport vositalari soatiga 40 km.dan kam tezlikda harakat qilayotgan bo'lsagina mumkin"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/252.jpg"
};

// 253-savol (26-bilet, 3-savol)
QUESTIONS[25].questions[2] = {
    question: "Reversiv harakatlanish amalga oshiriladigan harakat bo'laklari chegaralarini belgilash uchun bu yotiq chiziqlarning qay biridan foydalaniladi?",
    answers: [
        "1-chiziq",
        "2-chiziq",
        "3-chiziq",
        "2- va 3-chiziq",
        "3- va 4-chiziq"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/253.jpg"
};

// 254-savol (26-bilet, 4-savol)
QUESTIONS[25].questions[3] = {
    question: "Xizmat vazifasini bajarayotganda shlagbaumni o'zboshimchalik bilan ochishga yoki uni aylanib o'tishga ruxsat etiladimi?",
    answers: [
        "Taqiqlanadi",
        "Ruxsat etiladi",
        "Agar yaqinlashib kelayotgan poyezd yo'q bo'lsa, haydovchining ixtiyoriga qarab ruxsat etiladi",
        "Temir yo'l kesishmasi navbatchisi bo'lmagan holdagina ruxsat etiladi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 255-savol (26-bilet, 5-savol)
QUESTIONS[25].questions[4] = {
    question: "Chorrahani ikkinchi bo'lib kesib o'tadi:",
    answers: [
        "Ko'k avtomobil",
        "Yashil avtomobil",
        "Qizil avtomobil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/255.jpg"
};

// 256-savol (26-bilet, 6-savol)
QUESTIONS[25].questions[5] = {
    question: "Oraliq masofa, deb nimaga aytiladi?",
    answers: [
        "«A» masofa",
        "«B» masofa",
        "«A» va «B» masofa"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/256.jpg"
};

// 257-savol (26-bilet, 7-savol)
QUESTIONS[25].questions[6] = {
    question: "Quvib o'tishni boshlashdan oldin haydovchi shunga ishonch hosil qilishi kerakki:",
    answers: [
        "Shu tasmada orqada harakatlanayotgan transport vositasi quvib o'tishni boshlamaganligiga",
        "Oldinda harakatlanayotgan transport vositasi quvib o'tish, chapga burilish (qayta tizilish) ishora bermayotganligiga",
        "Quvib o'tishni tugatilyotganda, quvib o'tilayotgan transport vositasiga xalaqit bermasdan ilgari egallagan qatorga qaytib o'ta olishiga ishonch hosil qilishi shart",
        "Barcha ko'rsatilgan harakatlarni bajara olishiga"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 258-savol (26-bilet, 8-savol)
QUESTIONS[25].questions[7] = {
    question: "Majburiy to'xtagan haydovchi qanday choralar ko'rishi kerak?",
    answers: [
        "Yaqinni yorituvchi faralar yoki tumanga qarshi faralarni yoqishi kerak",
        "Yurgizgich kapotini ko'tarib qo'yishi kerak",
        "Avariya yorug'lik ishoralarini yoqish, agar u ishlamasa, avariya sababli to'xtash belgisini aholi punktlarida transport vositasidan 15 metrdan, ulardan tashqarida esa, 30 metrdan kam bo'lmagan masofada o'rnatishi kerak"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 259-savol (26-bilet, 9-savol)
QUESTIONS[25].questions[8] = {
    question: "Avtomobilning qaysi g'ildiraklari «sirpanib» tormozlanishga ko'proq moyil bo'ladi?",
    answers: [
        "Orqa g'ildiraklar",
        "Oldingi g'ildiraklar"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 260-savol (26-bilet, 10-savol)
QUESTIONS[25].questions[9] = {
    question: "Sanab o'tilgan qaysi hollarda transport vositasidan foydalanish mumkin?",
    answers: [
        "Faralar nurining yo'nalishi buzilgan",
        "Ishlab chiqarilishi to'xtatilgan yengil avtomobillarga boshqa turdagi va rusmdagi transport vositalarining tashqi yoritgichlari o'rnatilgan",
        "Tashqi yoritgichlar va nur qaytargichlar belgilangan tartibda ishlamaydi yoki ifloslangan"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};


// 261-savol (27-bilet, 1-savol)
QUESTIONS[26].questions[0] = {
    question: "Transport vositalari ixtiyoriga berilgan vakolatnomasi bo'lgan shaxs o'zining ishtirokida transport vositasini boshqa shaxsga boshqarishni topshirishi mumkinmi?",
    answers: [
        "Mumkin",
        "Mumkin emas",
        "Bu shaxsda mazkur toifali transport vositasini boshqarishga ruxsat beruvchi haydovchilik guvohnomasi bo'lgan taqdirda transport vositalari egalarining fuqarolik javobgarligini majburiy sug'urta qilish bo'yicha sug'urta polisida ismi sharifi ko'rsatilgan bo'lsa yoki majburiy sug'urta qilish bo'yicha shartnoma ushbu transport vositasidan cheklanmagan shaxslarning foydalanishini hisobga olgan holda tuzilgan bo'lsa"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 262-savol (27-bilet, 2-savol)
QUESTIONS[26].questions[1] = {
    question: "Agar yo'lda bu belgi o'rnatilgan bo'lsa, avtomobilni shatakka olishga ruxsat etiladimi?",
    answers: [
        "Faqat yengil avtomobillarga ruxsat etiladi",
        "Qattiq ulagichda ruxsat etiladi",
        "Taqiqlanadi",
        "Har qanday ulagichda ruxsat etiladi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/262.jpg"
};

// 263-savol (27-bilet, 3-savol)
QUESTIONS[26].questions[2] = {
    question: "Bu «To'xtash» yotiq chizig'i qaysi yo'l belgisi bilan qo'llaniladi?",
    answers: [
        "«Yo'l bering» belgisi bilan",
        "«To'xtamasdan harakatlanish taqiqlangan» belgisi bilan",
        "«Yo'l bering» belgisi va «To'xtamasdan harakatlanish taqiqlangan» belgisi bilan"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/263.jpg"
};

// 264-savol (27-bilet, 4-savol)
QUESTIONS[26].questions[3] = {
    question: "Avtomobil haydovchisi harakatining tartibi qaysi javobda to'g'ri ko'rsatilgan?",
    answers: [
        "Mototsiklini o'tkazib yubordi va chorrahada qayrilib oldi",
        "Tramvayni o'tkazib yubordi va chorrahada qayrilib oldi",
        "Tramvay va mototsiklini o'tkazib chorrahadan qayrilib oldi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/264.jpg"
};

// 265-savol (27-bilet, 5-savol)
QUESTIONS[26].questions[4] = {
    question: "Avtomobillar chorrahani quyidagi tartibda kesib o'tadilar:",
    answers: [
        "Sariq avtomobil chorrahaga kirib keladi va ko'kni o'tkazib yuborish uchun to'xtaydi; yashil; ko'k qizil bilan bir vaqtda; sariq",
        "Ko'k ayni vaqtda qizil bilan; yashil; sariq",
        "Yashil; ko'k ayni vaqtda qizil bilan; sariq"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/265.jpg"
};

// 266-savol (27-bilet, 6-savol)
QUESTIONS[26].questions[5] = {
    question: "Haydovchi boshqa haydovchilarning ko'zini qamashtirishi mumkin bo'lgan uzoqni yorituvchi chiroqni yaqinni yorituvchiga qachon almashtirishi kerak?",
    answers: [
        "Ro'paradagi transport vositasiga 100 m. qolganda",
        "Ro'paradagi transport vositasiga 150 m. qolganda, shuningdek, ko'proq masofada ham, agar ro'paradagi transport vositasining haydovchisi faralar chirog'ini o'chirib yoqib shuni zarur deb ko'rsatsa",
        "Ro'paradagi transport vositasiga 250 m. qolganda",
        "Ro'paradagi transport vositasiga 300 m. qolganda"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 267-savol (27-bilet, 7-savol)
QUESTIONS[26].questions[6] = {
    question: "Aholi punktidan tashqarida tirkamali yengil avtomobil haydovchisiga eng katta tezlikni soatiga necha kilometrdan oshirmasdan harakatlanishga ruxsat etiladi?",
    answers: [
        "50 km/s",
        "70 km/s",
        "80 km/s",
        "90 km/s",
        "100 km/s"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 268-savol (27-bilet, 8-savol)
QUESTIONS[26].questions[7] = {
    question: "Ushbu joyda avtomobining to'xtab turishiga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/268.jpg"
};

// 269-savol (27-bilet, 9-savol)
QUESTIONS[26].questions[8] = {
    question: "Avtotransport vositasida bo'lgan tibbiyot qutichasiga kiruvchi 5% li yod eritmasi (yod nastoykasi) nima uchun qo'llaniladi?",
    answers: [
        "Yara atrofidagi terini ishlash uchun",
        "Yara qattiq chirk olganda yaraning butun yuzasiga surtish uchun",
        "Kuchli ishkor keltirib chiqaruvchi birinchi darajali kimyoviy kuyishda teriga surtish uchun"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 270-savol (27-bilet, 10-savol)
QUESTIONS[26].questions[9] = {
    question: "Bolalarni tashkiliy tashishda qanday talablar qo'yiladi?",
    answers: [
        "Bolalar guruhini tashkiliy tashishda transport vositasida katta yoshli kuzatib boruvchi bo'lishi shart",
        "Bolalar guruhini tashkiliy tashish uchun mo'ljallangan transport vositasining oldi va orqa tomoniga «Bolalar guruhini tashish» taniqli belgisi o'rnatilishi shart",
        "Barcha sanab o'tilgan talablar"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};


// 271-savol (28-bilet, 1-savol)
QUESTIONS[27].questions[0] = {
    question: "Ko'k avtomobil chorrahani kesib o'tadi:",
    answers: [
        "Birinchi bo'lib",
        "Ikkinchi bo'lib",
        "Uchinchi bo'lib",
        "Oxirgi bo'lib"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/271.jpg"
};

// 272-savol (28-bilet, 2-savol)
QUESTIONS[27].questions[1] = {
    question: "Qaysi belgi «Velosiped yo'lkasi bilan kesishuv»ni bildiradi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/272.jpg"
};

// 273-savol (28-bilet, 3-savol)
QUESTIONS[27].questions[2] = {
    question: "Bu chiziq qaysi yo'l belgisi bilan qo'llaniladi?",
    answers: [
        "«Yo'l bering» belgisi bilan",
        "«To'xtamasdan harakatlanish taqiqlangan» belgisi bilan",
        "Ogohlantiruvchi «Teng ahamiyatli yo'llar kesishuvi» belgisi bilan",
        "Barcha sanab o'tilgan belgilar bilan"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/273.jpg"
};

// 274-savol (28-bilet, 4-savol)
QUESTIONS[27].questions[3] = {
    question: "Avtomobillar chorrahani quyidagi tartibda kesib o'tadilar:",
    answers: [
        "Ko'k, sariq yashil bilan",
        "Sariq, yashil, ko'k",
        "Ko'k yashil bilan, sariq"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/274.jpg"
};

// 275-savol (28-bilet, 5-savol)
QUESTIONS[27].questions[4] = {
    question: "Avtomobillar chorrahani quyidagi tartibda kesib o'tadilar:",
    answers: [
        "Sariq chorrahaga kiradi va yashilni o'tkazib yuborish uchun to'xtaydi; ko'k qizil bilan bir vaqtda",
        "Ko'k ayni vaqtda qizil bilan; yashil, sariq",
        "Yashil, ko'k ayni vaqtda qizil bilan, sariq"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/275.jpg"
};

// 276-savol (28-bilet, 6-savol)
QUESTIONS[27].questions[5] = {
    question: "Haydovchi yaqinlashib kelayotgan poyezdni o'tkazib yuborishi uchun «To'xtash» yotiq chizig'i yoki «To'xtamasdan harakatlanish taqiqlangan» belgisidan qanday masofada to'xtashi kerak?",
    answers: [
        "1,5 m",
        "2,5 m",
        "5 m",
        "1,0 m",
        "Bevosita «To'xtash» yotiq chizig'i yoki belgi oldida"
    ],
    correct: 4, // F5 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 277-savol (28-bilet, 7-savol)
QUESTIONS[27].questions[6] = {
    question: "Mototsikl haydovchisi Qoidalarni buzyaptimi?",
    answers: [
        "Ha",
        "Yo'q"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/277.jpg"
};

// 278-savol (28-bilet, 8-savol)
QUESTIONS[27].questions[7] = {
    question: "Yengil avtomobil haydovchisi, aholi yashash punktlaridan tashqaridagi yo'llarda haratlanishda, belgilangan tezlikni oshirish, qaysi vaziyatlarda taqiqlanadi?",
    answers: [
        "Faqat yo'lda tezlik cheklangan belgilar o'rnatilgan bo'lsa",
        "Faqat harakatlanayotgan tirkamali yengil avtomobillarga",
        "Agar u boshqa transport vositasini shatakka olgan bo'lsa",
        "Sanab o'tilgan barcha hollarda"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 279-savol (28-bilet, 9-savol)
QUESTIONS[27].questions[8] = {
    question: "Egiluvchan yoki qattiq ulagichda shatakka olingan mexanik transport vositasida odamlar tashishga ruxsat etiladimi?",
    answers: [
        "Avtobus va trolleybusda ruxsat etiladi",
        "Taqiqlanadi",
        "Yuk va yengil avtomobillarda ruxsat etiladi",
        "Yuk avtomobili kabinasida va yengil avtomobilda ruxsat etiladi"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 280-savol (28-bilet, 10-savol)
QUESTIONS[27].questions[9] = {
    question: "Agar transport vositasining tuzilishida ko'zda tutilgan orqani ko'rsatadigan ko'zgular bo'lmasa, avtomobildan foydalanishga ruxsat etiladimi?",
    answers: [
        "Agar orqa oyna pardalar bilan berkitilmagan bo'lsa ruxsat etiladi",
        "Taqiqlanadi",
        "Loaqal bitta ko'zgu bo'lsa ruxsat etiladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};



// 281-savol (29-bilet, 1-savol)
QUESTIONS[28].questions[0] = {
    question: "Piyodalar o'tish joyi bo'lmaganda piyodalarga yo'l qatnov qismining qaysi joyidan kesib o'tishga ruxsat etiladi?",
    answers: [
        "Chorrahalarda trotuar chiziqlari yoki yo'l yoqasi bo'ylab",
        "Ajratuvchi mintaqasiz va to'siqsiz yo'llardan yo'lning ikki tomoni yaxshi ko'rinadigan joyidan, qatnov qismining chetiga nisbatan to'g'ri burchak ostida",
        "Barcha sanab o'tilgan joylardan"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 282-savol (29-bilet, 2-savol)
QUESTIONS[28].questions[1] = {
    question: "Qaysi belgi 50 km/soatdan kam tezlikda harakatlanishni taqiqlaydi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/282.jpg"
};

// 283-savol (29-bilet, 3-savol)
QUESTIONS[28].questions[2] = {
    question: "To'xtashni taqiqlovchi joylarni bildiruvchi sidirg'a sariq chiziq qayerda chiziladi?",
    answers: [
        "Harakatlanish qismida",
        "Harakatlanish qatnov qismi chetida",
        "Harakatlanish qatnov qismi chetida yoki bordyur ustidan chiziladi",
        "Faqat to'siq (bordyur) ustida"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/283.jpg"
};

// 284-savol (29-bilet, 4-savol)
QUESTIONS[28].questions[3] = {
    question: "Avtomagistrallarda to'xtashga ruxsat etiladimi?",
    answers: [
        "Taqiqlanadi",
        "Avtomagistral yaxshi ko'rinadigan joylarda ruxsat etiladi",
        "Agar bir yo'nalishda harakatlanish uchun uchta tasma bo'lsa, ruxsat etiladi",
        "To'xtash «To'xtash joyi» yoki «Dam olish joyi» belgisi qo'yilgan maxsus maydonchalarda ruxsat etiladi"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 285-savol (29-bilet, 5-savol)
QUESTIONS[28].questions[4] = {
    question: "Transport vositalari chorrahani qanday tartibda kesib o'tadilar?",
    answers: [
        "2-tramvay ayni vaqtda 1- tramvay bilan; ko'k avtomobil ayni vaqtda qizil bilan",
        "2-tramvay; ko'k avtomobil; 1- tramvay; qizil avtomobil"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/285.jpg"
};

// 286-savol (29-bilet, 6-savol)
QUESTIONS[28].questions[5] = {
    question: "Projektor-faradan foydalanishga ruxsat etiladi:",
    answers: [
        "Faqat aholi punktlaridan tashqarida ro'paradan kelayotgan transport vositalari bo'lmaganda",
        "Faqat yetarli ko'rinmaydigan sharoitda",
        "Agar bunga zaruriyat tug'ilsa, barcha joylarda",
        "Kunning qorong'i vaqtida yo'lning barcha qismlarida"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 287-savol (29-bilet, 7-savol)
QUESTIONS[28].questions[6] = {
    question: "Agar Siz oldinda harakatlanayotgan avtomobilni quvib o'tishga chiqsangiz, ko'rsatilgan hollarning qaysi birida tovush ishorasi berish maqsadga muvofiq?",
    answers: [
        "Quvib o'tish qorong'i vaqtda bajarilganda",
        "Quvib o'tilayotgan avtomobil haydovchisi tormoz berishni boshlaganda",
        "Quvib o'tilayotgan avtomobil haydovchisi chapga burilish ko'rsatkichini yoqqanda",
        "Quvib o'tilayotgan avtomobil haydovchisi o'ngga burilish ko'rsatkichini yoqqanda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 288-savol (29-bilet, 8-savol)
QUESTIONS[28].questions[7] = {
    question: "Ko'rsatilgan joyda to'xtashga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/288.jpg"
};

// 289-savol (29-bilet, 9-savol)
QUESTIONS[28].questions[8] = {
    question: "Yengil avtomobil haydovchisi yo'l berishi kerakmi?",
    answers: [
        "Ha",
        "Yo'q"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/289.jpg"
};

// 290-savol (29-bilet, 10-savol)
QUESTIONS[28].questions[9] = {
    question: "Odamlarni tashishga moslashtirilmagan yuk avtomobili yukxonasida odam tashishga ruxsat etiladimi?",
    answers: [
        "Taqiqlanadi",
        "Avtomagistrallarga tegishli bo'lmagan yo'llarda ruxsat etiladi",
        "Faqat yukni olish uchun borayotgan yoki kuzatib boruvchi shaxslarga shu shart bilanki, ular bortlaridan pastda joylashgan o'tiradigan joy bilan ta'minlangan bo'lsalar ruxsat etiladi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};


// 291-savol (30-bilet, 1-savol)
QUESTIONS[29].questions[0] = {
    question: "Qaysi transport vositasining haydovchisi yo'l berishi kerak?",
    answers: [
        "Tez yordam avtomobilining haydovchisi",
        "Yengil avtomobilning haydovchisi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/291.jpg"
};

// 292-savol (30-bilet, 2-savol)
QUESTIONS[29].questions[1] = {
    question: "Ushbu belgi qaysi transport vositalarini quvib o'tishni taqiqlaydi?",
    answers: [
        "Hammasini",
        "Hammasini, 40 km/soatdan kam tezlikda yakka harakat qilayotganlardan tashqari",
        "Yengil avtomobillar, mototsikllar va to'la vazni 3,5 tonnadan kam bo'lgan yuk avtomobillarini",
        "To'la vazni 3,5 tonnadan ko'p bo'lgan yuk avtomobillarini"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/292.jpg"
};

// 293-savol (30-bilet, 3-savol)
QUESTIONS[29].questions[2] = {
    question: "Bu yo'l chizig'i nimani bildiradi?",
    answers: [
        "Yakka 40 km/soatdan kam tezlik bilan harakat qiluvchi ikki g'ildirakli mototsikllar, velosipedchilardan tashqari barcha transport vositalarini quvib o'tishni taqiqlovchi hududni",
        "Qatnov qismining torayishiga yoki qarama-qarshi yo'nalishdan kelayotgan transport oqimini ajratuvchi 1.1 yoki 1.11 chizig'iga yaqinlashayotganini"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/293.jpg"
};

// 294-savol (30-bilet, 4-savol)
QUESTIONS[29].questions[3] = {
    question: "Chorrahani uchinchi bo'lib kesib o'tadi:",
    answers: [
        "Ko'k avtomobil",
        "Sariq avtomobil",
        "Yashil avtomobil"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/294.jpg"
};

// 295-savol (30-bilet, 5-savol)
QUESTIONS[29].questions[4] = {
    question: "Ko'rsatilgan yo'nalishlar bo'yicha qaysi transport vositalariga harakatlanishga ruxsat etiladi?",
    answers: [
        "Avtomobil haydovchisiga",
        "Avtomobil va mototsikl haydovchisiga",
        "Tramvay va avtomobil haydovchisiga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/295.jpg"
};

// 296-savol (30-bilet, 6-savol)
QUESTIONS[29].questions[5] = {
    question: "Qanday holda markazdan qochirma kuch burilishda kamayadi?",
    answers: [
        "Boshqaruv rulini burilish tomonga keskin burganda",
        "Harakat tezligi pasayganda",
        "Burilish radiusi kamayganda"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/296.jpg"
};

// 297-savol (30-bilet, 7-savol)
QUESTIONS[29].questions[6] = {
    question: "Kim yo'l berishi kerak?",
    answers: [
        "Yuk avtomobil haydovchisi",
        "Yengil avtomobil haydovchisi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/297.jpg"
};

// 298-savol (30-bilet, 8-savol)
QUESTIONS[29].questions[7] = {
    question: "Ushbu joyda yengil avtomobilning to'xtab turishiga ruxsat etilganmi?",
    answers: [
        "Berilgan",
        "Taqiqlangan"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/298.jpg"
};

// 299-savol (30-bilet, 9-savol)
QUESTIONS[29].questions[8] = {
    question: "Burilishda harakat qilganda avtopoyezdning tirkamasi siljiydimi?",
    answers: [
        "Burilish markazidan boshqa tomonga siljiydi",
        "Siljimaydi",
        "Burilish markaziga siljiydi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 300-savol (30-bilet, 10-savol)
QUESTIONS[29].questions[9] = {
    question: "Ta'qiqlovchi belgi tagiga o'rnatilgan qo'shimcha axborot belgisi nima maqsadda qo'yilgan?",
    answers: [
        "Belgidan uning amal qilish hududigacha bo'lgan oraliqni aniqlash uchun",
        "Taqiqlovchi belgi amal qilish hududini aniqlash uchun"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/300.jpg"
};

// 301-savol (31-bilet, 1-savol)
QUESTIONS[30].questions[0] = {
    question: "Ushbu belgilar amal qiladigan hududda «Nogiron» taniqlik belgisi bilan belgilangan avtomobilga to'xtashga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/301.jpg"
};

// 302-savol (31-bilet, 2-savol)
QUESTIONS[30].questions[1] = {
    question: "Qaysi belgi yo'lning xavfli burilishiga yaqinlashayotganlik haqida ogohlantiradi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/302.jpg"
};

// 303-savol (31-bilet, 3-savol)
QUESTIONS[30].questions[2] = {
    question: "Qaysi yo'llardan harakatlanishga ruxsat etilgan?",
    answers: [
        "«A»",
        "«B»",
        "«A» va «B»"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/303.jpg"
};

// 304-savol (31-bilet, 4-savol)
QUESTIONS[30].questions[4] = {
    question: "Avtomagistralda boshqarishni o'rganish:",
    answers: [
        "70 km/soatdan oshmagan tezlik bilan ruxsat berilgan",
        "Boshqarishni o'rgatuvchi yo'riqchi bilan o'rganuvchida yetarli boshqarish malakasi bo'lganda 60 km/soatdan ortiq bo'lmagan tezlikda ruxsat etilgan",
        "Taqiqlangan",
        "Agar o'rganilayotgan mexanik transport vositasida taniqlik belgilari qayd etilgan bo'lsa, ruxsat etilgan"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 305-savol (31-bilet, 5-savol)
QUESTIONS[30].questions[4] = {
    question: "Avtomobillar chorrahani quyidagi tartibda kesib o'tadilar:",
    answers: [
        "Yashil; ko'k; qizil",
        "Ko'k; qizil; yashil",
        "Ko'k bilan yashil bir vaqtda; qizil"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/305.jpg"
};

// 306-savol (31-bilet, 6-savol)
QUESTIONS[30].questions[5] = {
    question: "Mazkur shartda shatakka olishni amalga oshirishning yo'l qo'yilgan eng yuqori tezligi qanday?",
    answers: [
        "30 km/s",
        "50 km/s",
        "70 km/s",
        "80 km/s"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/306.jpg"
};

// 307-savol (31-bilet, 7-savol)
QUESTIONS[30].questions[6] = {
    question: "Yo'l yoqasi mavjud bo'lganda haydovchi transport vositasini qayerda to'xtatishi kerak?",
    answers: [
        "Qatnav qismining o'ng tasmasida",
        "Yo'l chekkasida, yo'l yoqasidan 0,5 metr masofada",
        "Yo'l yoqasi ustida"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 308-savol (31-bilet, 8-savol)
QUESTIONS[30].questions[7] = {
    question: "Yengil avtomobil haydovchisi qanday qoidalarni buzdi?",
    answers: [
        "Faqat to'xtash qoidalarini",
        "To'xtash va to'xtab turish qoidalarini"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/308.jpg"
};

// 309-savol (31-bilet, 9-savol)
QUESTIONS[30].questions[8] = {
    question: "N2; N3; O3; O4 toifadagi avtotransport vositalari shina protektori naqshlarining qoldiq balandligi eng kamida qancha bo'lishi kerak?",
    answers: [
        "0,5 mm",
        "1 mm",
        "1,6 mm",
        "2 mm",
        "3 mm"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 310-savol (31-bilet, 10-savol)
QUESTIONS[30].questions[9] = {
    question: "Mexanik transport vositalari va uning tirkamalarining egalari texnik holatidan qat'i nazar, xarid qilgan (olgan) paytdan boshlab qancha muddat mobaynida DYHX xizmatida ro'yxatdan o'tkazishlari kerak?",
    answers: [
        "2 kun",
        "10 kun",
        "5 kun",
        "15 kun",
        "30 kun"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};



// 311-savol (32-bilet, 1-savol)
QUESTIONS[31].questions[0] = {
    question: "Quruq yo'lda darhol to'xtash uchun nima qilish lozim?",
    answers: [
        "Ulagichni ajratish, shundan keyin darhol tormoz pedalini bosish",
        "Uzatmani almashtirish va tormoz pedalini keskin bosish",
        "Tormoz pedalini ulagichni ajratmasdan bosish"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 312-savol (32-bilet, 2-savol)
QUESTIONS[31].questions[1] = {
    question: "Bu belgi nimani bildiradi?",
    answers: [
        "To'la vazni 3,5 tonnadan ortiq bo'lgan yuk avtomobilining majburiy harakat yo'nalishini",
        "Faqat yuk avtomobillari uchun harakat yo'nalishini",
        "Yuk avtomobillari, traktorlar, o'ziyurar mashinalar uchun, agar chorrahada yo'nalishlardan birida harakatlanish taqiqlangan bo'lsa, tavsiya etiladigan harakat yo'nalishini"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/312.jpg"
};

// 313-savol (32-bilet, 3-savol)
QUESTIONS[31].questions[2] = {
    question: "Ushbu yo'l belgisi oldinda nima borligidan ogohlantiradi:",
    answers: [
        "Ko'prik yoki solda kechimi bo'lmagan suv to'siqli yo'l qismi borligidan",
        "Suv to'siqli yo'l qismida ko'tarma ko'prik borligidan",
        "Daryo yoki suv havzasi qirg'og'iga chiqishni bildiradi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/313.jpg"
};

// 314-savol (32-bilet, 4-savol)
QUESTIONS[31].questions[3] = {
    question: "Avtomobillar chorrahani quyidagi tartibda kesib o'tadilar:",
    answers: [
        "Qizil chorrahaga kiradi va ko'k avtomobilni o'tkazib yuborish uchun to'xtaydi va ayni vaqtda yashil avtomobil chorrahani kesib o'tadi; ko'k; qizil burilishni tugallaydi",
        "Qizil, ko'k, yashil",
        "Ko'k, yashil, qizil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/314.jpg"
};

// 315-savol (32-bilet, 5-savol)
QUESTIONS[31].questions[4] = {
    question: "Chorrahadan uchinchi bo'lib kim o'tadi?",
    answers: [
        "Yashil avtomobil",
        "Ko'k avtomobil",
        "Qizil avtomobil"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/315.jpg"
};

// 316-savol (32-bilet, 6-savol)
QUESTIONS[31].questions[5] = {
    question: "Yengil avtomobil haydovchilarining qaysi biri aholi punktlarida harakatlanish qoidalarini buzmoqda?",
    answers: [
        "Faqat «B» avtomobil haydovchisi",
        "Ikkalasi ham buzmoqda",
        "Ikkalasi ham buzmayapti"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/316.jpg"
};

// 317-savol (32-bilet, 7-savol)
QUESTIONS[31].questions[6] = {
    question: "Haydovchi harakat tezligini tanlashda nimani hisobga olishi kerak?",
    answers: [
        "Harakatning serqatnovligini, transport vositasi va yukning xususiyati va holatini",
        "Yo'l va ob-havo sharoitini",
        "Barcha sanab o'tilgan omillarni"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 318-savol (32-bilet, 8-savol)
QUESTIONS[31].questions[7] = {
    question: "Ushbu joyda to'xtab turishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/318.jpg"
};

// 319-savol (32-bilet, 9-savol)
QUESTIONS[31].questions[8] = {
    question: "Haydovchi avtopoyezd harakatining eng keng bo'lagini aniqlashda nimani hisobga olishi kerak?",
    answers: [
        "Faqat kengligi bo'yicha avtopoyezdning o'lchamlarini",
        "Kengligi bo'yicha transport vositasining o'lchamlarini, shuningdek, tirkamaning chayqalishini hamda uning burilish markaziga siljishini"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 320-savol (32-bilet, 10-savol)
QUESTIONS[31].questions[9] = {
    question: "Yengil avtomobillarning oldingi o'rindig'ida bolalarni tashishga ruxsat etiladimi?",
    answers: [
        "7 yoshdan kichiq bo'lmagan bolalarni tashishga ruxsat etiladi",
        "12 yosh va undan katta bo'lgan bolalarni tashishga ruxsat etiladi",
        "Katta yoshli yo'lovchi bo'lganda yoshidan qat'i nazar ruxsat etiladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 321-savol (33-bilet, 1-savol)
QUESTIONS[32].questions[0] = {
    question: "Yo'lovchilarga haydovchi transport vositasini boshqarayotganda, uni chalg'itishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Belgilangan yo'nalishdagi transport vositalarida faqat bir martalik chiptalar sotib olish uchun ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 322-savol (33-bilet, 2-savol)
QUESTIONS[32].questions[1] = {
    question: "Qaysi transport vositalariga ushbu belgining amal qilishi taaluqli emas",
    answers: [
        "Yo'nalishli taksilarga",
        "Taksometri ishlab turgan taksilarga",
        "«Nogiron» taniqlik belgisi o'rnatilgan nogiron boshqarayotgan avtomobilga",
        "Belgilangan yo'nalishdagi transport vositalariga",
        "F2 va F3 javoblarda ko'rsatilgan transport vositalariga"
    ],
    correct: 4, // F5 to'g'ri
    image: "images/322.jpg"
};

// 323-savol (33-bilet, 3-savol)
QUESTIONS[32].questions[2] = {
    question: "Haydovchilardan qay biri yo'lovchilarni tushirish uchun to'g'ri to'xtadi?",
    answers: [
        "Ko'k va qizil avtomobillarning haydovchilari",
        "Mototsikl va ko'k avtomobil haydovchilari",
        "Faqat ko'k avtomobil haydovchisi",
        "Barcha haydovchilar"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/323.jpg"
};

// 324-savol (33-bilet, 4-savol)
QUESTIONS[32].questions[3] = {
    question: "Enli uzuq-uzuq chiziq ko'rinishidagi yotiq chiziq nimani bildiradi?",
    answers: [
        "Qatnov qismi bilan yo'l yoqasi o'rtasidagi chegarani",
        "Tezlashish yoki sekinlashish bo'lagi bilan qatnov qismi asosiy bo'lagi o'rtasidagi chegarani",
        "Transport vositalarining to'xtashi va to'xtab turishi uchun belgilangan maydonchalarni"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/324.jpg"
};

// 325-savol (33-bilet, 5-savol)
QUESTIONS[32].questions[4] = {
    question: "Qaysi transport vositasining haydovchisi birinchi navbatda harakatlanish huquqiga ega?",
    answers: [
        "Avtomobil haydovchisi",
        "Mototsikl haydovchisi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/325.jpg"
};

// 326-savol (33-bilet, 6-savol)
QUESTIONS[32].questions[5] = {
    question: "Bunday vaziyatda qizil avtomobilning haydovchisiga quvib o'tish ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlandi",
        "Faqat ro'paradan kelayotgan transport vositalari yo'qligida ro'xsat etiladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/326.jpg"
};

// 327-savol (33-bilet, 7-savol)
QUESTIONS[32].questions[6] = {
    question: "Siz reversiv harakatli yo'lga burilmoqchisiz. Burilishdan keyin Siz qaysi tasma bo'ylab harakatlanish huquqiga egasiz?",
    answers: [
        "Aholi punktlarida istalgan tasma bo'ylab harakatlanishga ruxsat etiladi",
        "Chetki o'ng tasma bo'ylab faqat reversiv svetofor yoki boshqa tasmalar bo'yicha ham harakatlanishga ruxsat etadigan «Tasmalar bo'yicha harakatlanish yo'nalishi» belgisidan o'tgandan so'ng qayta tizilishga ruxsat etiladi",
        "Aholi punktidan tashqarida qatnov qismining iloji boricha o'ng chetiga yaqinroqda"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 328-savol (33-bilet, 8-savol)
QUESTIONS[32].questions[7] = {
    question: "Qanday hollarda to'xtab turish taqiqlanadi?",
    answers: [
        "Qatnov qismi kesishmasining chekkasiga 30 metrdan ko'p masofa qolganda",
        "Piyodalarning o'tish joyi oldiga 10 metrdan ko'p masofa qolganda",
        "Piyodalar o'tish joyidan o'tgandan keyin bir metr masofa uzoqlikda",
        "Transport vositalarining harakatlanishiga imkon qoldirmaydigan kirishga yoki chiqishga va piyodalarning harakatiga xalaqit beradigan joylarda",
        "Sanab o'tilgan hollarda"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 329-savol (33-bilet, 9-savol)
QUESTIONS[32].questions[8] = {
    question: "Haydovchi avtopoyezdni tormozlashning qaysi qoidalariga rioya qilishi kerak?",
    answers: [
        "Tormoz tepksini keskin kuchli bosish - ulagichni ajratgan holda",
        "Oldindan tezlikni kamaytirib, ulagichni ajratmay, bir tekis tormozlash"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 330-savol (33-bilet, 10-savol)
QUESTIONS[32].questions[9] = {
    question: "Yon kajavasi bo'lmagan mototsiklda bolalarni tashishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "12 yoshdan katta bolalarga ruxsat etiladi",
        "Katta yoshdagi yo'lovchi bo'lganda ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 331-savol (34-bilet, 1-savol)
QUESTIONS[33].questions[0] = {
    question: "Ushbu yotiq chiziq nimani anglatadi?",
    answers: [
        "Transport vositalari oqimi qo'shiladigan joylardagi yo'naltiruvchi orolchani",
        "Qatnov qismidagi xavfli joylarda piyodalar uchun orolchani",
        "Transport vositalari to'xtab turish qatnov chegarasini",
        "Transport vositalari oqimi ajraladigan joydagi yo'naltiruvchi orolchani"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/331.jpg"
};

// 332-savol (34-bilet, 2-savol)
QUESTIONS[33].questions[1] = {
    question: "Chorrahada qaysi yo'nalishlarda harakat qilish ruxsat etiladi?",
    answers: [
        "Faqat «G» va «E»",
        "«A», «B», «G», «D»",
        "«B», «V», «G», «D»"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/332.jpg"
};

// 333-savol (34-bilet, 3-savol)
QUESTIONS[33].questions[2] = {
    question: "Qatnov qismi o'ng bo'lagi bo'ylab harakatlanishga qaysi transport vositasiga ruxsat etilgan?",
    answers: [
        "Barcha mexanik transport vositalariga",
        "Belgilangan yo'nalishdagi transport vositalariga va taksilarga",
        "Faqat velosipedlarga",
        "Faqat belgilangan yo'nalishdagi transport vositalariga"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/333.jpg"
};

// 334-savol (34-bilet, 4-savol)
QUESTIONS[33].questions[3] = {
    question: "Transport vositalari chorrahani quyidagi tartibda kesib o'tadilar:",
    answers: [
        "Tramvay, sariq, yashil avtomobillar",
        "Tramvay va yashil avtomobil, sariq avtomobil",
        "Yashil, sariq avtomobillar, tramvay"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/334.jpg"
};

// 335-savol (34-bilet, 5-savol)
QUESTIONS[33].questions[4] = {
    question: "Qaysi transport vositasining haydovchisiga belgida ko'rsatilgan tezlik bilan harakatlanishga ruxsat berilgan?",
    answers: [
        "Har ikki haydovchiga",
        "Faqat mikroavtobus haydovchisiga",
        "Har ikkisiga taqiqlangan"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/335.jpg"
};

// 336-savol (34-bilet, 6-savol)
QUESTIONS[33].questions[5] = {
    question: "Boshqaruvda o'rganuvchi bo'lsa, ushbu transport vositasiga qaysi tomonga harakatlanishga ruxsat beriladi?",
    answers: [
        "Hamma tomonga",
        "Faqat o'ngga",
        "O'ngga, chapga va qayrilib olishga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/336.jpg"
};

// 337-savol (34-bilet, 7-savol)
QUESTIONS[33].questions[6] = {
    question: "Chorrahani kesib o'tishda tramvay yo'li bo'ylab harakatlanishga ruxsat etiladimi?",
    answers: [
        "Taqiqlanadi",
        "Agar qarama-qarshi yo'nalishdagi tramvayga to'sqinlik qilmasa, ruxsat etiladi",
        "Qarama-qarshi yo'nalishdagi tramvay yo'llari bo'ylab ruxsat etiladi",
        "Boshqa tasmalar band bo'lganda, aylanib o'tishga, chapga burilish va qayrilib olishga, bir yo'nalishdagi tramvay yo'llari bo'ylab harakatlanishga ruxsat etiladi. (agar chorraxadan oldin 5.8.1 yoki 5.8.2 yo'l belgilari o'rnatilmagan bo'lsa) Bunda tramvayga xalaqit bermaslik kerak"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 338-savol (34-bilet, 8-savol)
QUESTIONS[33].questions[7] = {
    question: "Yuk avtomobillari avtomagistralda chetki chap qatorida harakatlanishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 339-savol (34-bilet, 9-savol)
QUESTIONS[33].questions[8] = {
    question: "Qattiq charchoq boshlanishining asosiy tashqi alomatlari qanday?",
    answers: [
        "Ko'z sanchib og'riydi, yuz terisi oqaradi, uyqu bosadi",
        "Yuz qizil tusga kiradi, qo'l-oyoqlar soviydi, ongi xiralashadi",
        "Mushaklarda horg'inlik seziladi, quloqlarda shovqin, bosh aylanadi, muzdek yopishqoq ter chiqadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 340-savol (34-bilet, 10-savol)
QUESTIONS[33].questions[9] = {
    question: "Tashilayotgan yuk DYHX xizmatining ruxsatisiz transport vositasi o'lchamlarining orqa nuqtasidan eng katta miqdorda qanday chiqib turishi mumkin?",
    answers: [
        "1,0 m",
        "1,5 m",
        "2,0 m",
        "2,5 m",
        "4,0 m"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 341-savol (35-bilet, 1-savol)
QUESTIONS[34].questions[0] = {
    question: "Transport vositalaridan foydalanish va texnik holatiga javobgar mansabdor shaxslarning majburiyatlari:",
    answers: [
        "Belgilangan muddatda tibbiyot ko'rigidan o'tmagan shaxslarni transport vositalarini boshqarishiga yo'l qo'ymaslik",
        "Texnik holati va jihozlari Qoida talablariga mos kelmaydigan transport vositalarini yo'lga chiqarmaslik",
        "Belgilangan tartibda ro'yxatdan o'tkazilmagan transport vositalarini yo'lga chiqarmaslik",
        "Barcha sanab o'tilganlarni bajarishga"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 342-savol (35-bilet, 2-savol)
QUESTIONS[34].questions[1] = {
    question: "Belgi va uning ostidagi qo'shimcha axborot belgisi nima haqida ogohlantiradi?",
    answers: [
        "Olib borilayotgan ishlar munosabati bilan yo'l chetida to'xtash taqiqlanadi",
        "Yo'l yoqasida ta'mirlash ishlari olib borilayotganligi munosabati bilan unga yaqin kelish xavfli",
        "Yo'lda ta'mirlash ishlari olib borilayotganda yo'l chetida to'xtab turish taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/342.jpg"
};

// 343-savol (35-bilet, 3-savol)
QUESTIONS[34].questions[2] = {
    question: "Har bir chiziq uzunligi ular orasidagi masofadan uch barobar katta bo'lgan uzuq-uzuq chiziq nimani bildiradi?",
    answers: [
        "Tezlashish yoki sekinlashish bo'lagi bilan yo'lning qatnov qismidagi asosiy bo'lagi o'rtasidagi chegarani",
        "Avtomagistrallarda qatnov qismi chetlarini",
        "Qarama-qarshi yoki bir yo'nalishda harakatlanayotgan transport vositalari oqimlarini ajratuvchi 1.1 yoki 1.11 chizig'iga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/343.jpg"
};

// 344-savol (35-bilet, 4-savol)
QUESTIONS[34].questions[3] = {
    question: "Yo'l o'rtasidagi to'xtash joyida to'xtagan shu yo'nalishdagi tramvayga yaqinlashib qolgan haydovchi nima qilishi kerak?",
    answers: [
        "To'xtashi, tramvay eshiklari yopilgandan keyin harakatni davom ettirishi",
        "Yo'l o'rtasidagi to'xtash joyida turgan shu yo'nalishdagi tramvayga kelayotgan yoki undan uzoqlashayotgan piyodalarga yo'l berishi",
        "To'xtashi, so'ng tramvay harakatlanganidan keyin harakatni davom ettirishi",
        "Tramvay to'xtash joyidan nihoyatda ehtiyotkorlik bilan o'tishi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 345-savol (35-bilet, 5-savol)
QUESTIONS[34].questions[4] = {
    question: "Qaysi transport vositasining haydovchisi harakatlanishda imtiyozga ega?",
    answers: [
        "Avtomobil haydovchisi",
        "Tramvay haydovchisi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/345.jpg"
};

// 346-savol (35-bilet, 6-savol)
QUESTIONS[34].questions[5] = {
    question: "Transport vositasining haydovchisi, agar svetoforning ruxsat etuvchi chirog'i yoqilsa-yu, harakat yo'nalishining qatnov qismidan o'tishga ulgurmagan piyodalar bo'lsa, nima qilishi kerak?",
    answers: [
        "Tezlikni kamaytirishi, tovush ishorasini berishi va eng kam tezlik bilan piyodalarning o'tish joyidan o'tishi",
        "Tovush ishorasini berishi va tezlikni kamaytirmay piyodalarning o'tish joyidan o'tishi",
        "Mazkur yo'nalishning qatnov qismidan piyodalarning o'tib olishiga imkon berishi",
        "Ehtiyotkorlik choralariga rioya etgan holda piyodalarning o'tish joyidan o'tishi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 347-savol (35-bilet, 7-savol)
QUESTIONS[34].questions[6] = {
    question: "Aholi punktlarida yuk avtomobillarning harakatlanishiga qaysi tasmadan ruxsat etiladi?",
    answers: [
        "Qatnov qismining o'ng chetiga yaqin tasmadan",
        "Boshqa tasmalar band bo'lganda istalgan tasmadan",
        "Istalgan tasmadan, biroq, agar relssiz transport vositalarining harakati uchun bir yo'nalishda uchta va undan ortiq tasma bo'lsa, u holda chetki chap tasmaga faqat chapga burilish, orqaga qayrilish uchun o'tishga va tushirish yoki ortish uchun bir tomonlama harakatga ruxsat etilgan ko'chalarda to'xtashga"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 348-savol (35-bilet, 8-savol)
QUESTIONS[34].questions[7] = {
    question: "Agar barcha transport vositalari 80 km/soat tezlik bilan harakat qilsa, haydovchilardan qay biri qoidalar talablarini buzadi?",
    answers: [
        "Mototsikl va yuk avtomobilining haydovchilari",
        "Mototsikl va yengil avtomobilning haydovchilari",
        "Hamma haydovchilar",
        "Mototsikl haydovchisi",
        "Hech kim buzmadi"
    ],
    correct: 4, // F5 to'g'ri
    image: "images/348.jpg"
};

// 349-savol (35-bilet, 9-savol)
QUESTIONS[34].questions[8] = {
    question: "Tormoz yo'li deganda nima tushuniladi?",
    answers: [
        "Haydovchiga xavf ma'lum bo'lgan vaqtdan boshlab avtomobilning to'liq to'xtagungacha bosib o'tgan masofasi",
        "Tormoz tepkisi bosilgan vaqtdan boshlab avtomobilning to'liq to'xtagungacha bosib o'tgan masofa"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 350-savol (35-bilet, 10-savol)
QUESTIONS[34].questions[9] = {
    question: "Davlat YHX xizmatining ruxsatisiz transport vositasining yuk bilan yoki yuksiz qanday yuqori o'lchamdagi balandlik bilan harakatlanishiga yo'l qo'yiladi?",
    answers: [
        "5,0 m",
        "4,5 m",
        "4,0 m",
        "2,5 m",
        "3,8 m"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};



// 351-savol (36-bilet, 1-savol)
QUESTIONS[35].questions[0] = {
    question: "Qatnav qismi chetidagi piyoda, yalt-yalt etuvchi mayoqcha va maxsus tovushli ishoralarni yoqib kelayotgan transport vositasi yaqinlashib qolganda qanday yo'l tutishi kerak?",
    answers: [
        "Mumkin qadar tezroq qatnov qismidan o'tib olishi",
        "Qatnav qismidan o'tmasligi",
        "Agar piyodalar o'tish joyida bo'lsa, qatnov qismidan o'tishi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 352-savol (36-bilet, 2-savol)
QUESTIONS[35].questions[1] = {
    question: "Belgilarning qaysi biri ogohlantiruvchi belgilar bilan qayd etilgan xavfli yo'l qismining uzunligini ko'rsatadi?",
    answers: ["1", "2", "3", "4", "5"],
    correct: 3, // F4 to'g'ri
    image: "images/352.jpg"
};

// 353-savol (36-bilet, 3-savol)
QUESTIONS[35].questions[2] = {
    question: "Ushbu yo'l chizig'i quyidagi maqsadni:",
    answers: [
        "Trotuar yaqinidagi to'xtab turish joyida mexanik transport vositalarining qo'yish usullari ko'rsatilgan to'xtab turish joyini bildiradi",
        "Mexanik transport vositalarining to'xtashi taqiqlangan joylarni bildiradi",
        "Belgilangan yo'nalishdagi transport vositalarining to'xtash va taksining to'xtab turish joyini bildiradi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/353.jpg"
};

// 354-savol (36-bilet, 4-savol)
QUESTIONS[35].questions[3] = {
    question: "Haydovchilardan qay biri birinchi bo'lib harakatlanish uchun imtiyozga ega?",
    answers: [
        "Mototsikl haydovchisi",
        "Avtomobil haydovchisi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/354.jpg"
};

// 355-savol (36-bilet, 5-savol)
QUESTIONS[35].questions[4] = {
    question: "Navbat bilan yalt-yalt etib turuvchi ikkita qizil yoritgichlar quyidagi ma'noga ega:",
    answers: [
        "Harakatni taqiqlaydi",
        "Boshqa haydovchilarga qatnav qismiga maxsus transport vositalarining o'tganligini xabar qiladi",
        "Alohida ehtiyotkorlik bilan harakatlanishga ruxsat etadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/355.jpg"
};

// 356-savol (36-bilet, 6-savol)
QUESTIONS[35].questions[5] = {
    question: "Shlagbaumni o'zboshimchalik bilan ochish yoki aylanib o'tishga ruxsat beriladimi?",
    answers: [
        "Ruxsat beriladi, faqat svetofor o'chgan bo'lsa",
        "Taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 357-savol (36-bilet, 7-savol)
QUESTIONS[35].questions[6] = {
    question: "Siz uchta tasmasi bo'lgan ikki tomonlama harakatli yo'l bo'ylab ketayapsiz, o'rta tasmaga o'tishga qanday holda ruxsat etiladi?",
    answers: [
        "Faqat quvib o'tish uchun",
        "Faqat aylanib o'tish uchun",
        "Faqat chapga burilish yoki qayrilib olish uchun",
        "Barcha sanab o'tilgan hollarda"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 358-savol (36-bilet, 8-savol)
QUESTIONS[35].questions[7] = {
    question: "Avtomobilning taniqlik belgisi bo'lganda, yo'lning mazkur qismida qanday yuqori tezlik bilan harakatlanishiga ruxsat etiladi?",
    answers: [
        "70 km/s",
        "90 km/s",
        "100 km/s"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/358.jpg"
};

// 359-savol (36-bilet, 9-savol)
QUESTIONS[35].questions[8] = {
    question: "Bosh miya va kalla suyagi o'rtacha holatda jarohatlangan jabrlanuvchini transportning qaysi turida tashish kerak?",
    answers: [
        "Yo'lovchi yengil avtomobilida",
        "Yo'lovchi yuk avtomobilida",
        "Faqat tez tibbiy yordam mashinasida"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 360-savol (36-bilet, 10-savol)
QUESTIONS[35].questions[9] = {
    question: "Quyidagi holatda haydovchi piyodaga yo'l berishi lozimmi?",
    answers: [
        "Ha",
        "Yo'q"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/360.jpg"
};

// 361-savol (37-bilet, 1-savol)
QUESTIONS[36].questions[0] = {
    question: "«Avtomagistral» belgisi bilan belgilangan yo'lda piyodalarning harakatlanishiga ruxsat etiladimi?",
    answers: [
        "Taqiqlanadi",
        "Transport vositalarining harakatlanishiga qarama qarshi faqat aholi punktlaridan tashqarida yurishga ruxsat etiladi",
        "Transport vositalarining harakatlanishi bo'ylab faqat aholi punktlaridan tashqarida yurishga ruxsat etiladi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 362-savol (37-bilet, 2-savol)
QUESTIONS[36].questions[1] = {
    question: "Ushbu belgi o'rnatilgan yo'lda kajavali mototsiklni shatakka olishga ruxsat etiladimi?",
    answers: [
        "Tirkamasi bittadan ortiq bo'lmagan mototsiklga ruxsat etiladi",
        "Faqat qattiq ulagichda ruxsat etiladi",
        "Taqiqlanadi",
        "Sirpanchiqda taqiqlanadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/362.jpg"
};

// 363-savol (37-bilet, 3-savol)
QUESTIONS[36].questions[2] = {
    question: "Ushbu yotiq chiziq nimani bildiradi?",
    answers: [
        "Mazkur yo'nalishda harakatlanish bo'lagi soni kamaya borib, qatnov qismining torayishini",
        "Kesib o'tiladigan yo'l bo'ylab harakatlanayotgan transport vositasiga yo'l berar ekan, haydovchi zarur holda qayerda to'xtashi kerak bo'lgan joyni",
        "To'xtash taqiqlangan joyga yaqinlashganlikni"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/363.jpg"
};

// 364-savol (37-bilet, 4-savol)
QUESTIONS[36].questions[3] = {
    question: "Qaysi joylarda orqa bilan harakatlanish taqiqlanadi?",
    answers: [
        "Chorrahalarda, piyodalar o'tish joylarida",
        "Ko'priklarda, yo'l o'tkazgichlar, estakadalarda va ularning ostida",
        "Avtomagistrallarda",
        "Sanab o'tilgan barcha joylarda"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 365-savol (37-bilet, 5-savol)
QUESTIONS[36].questions[4] = {
    question: "Tramvay haydovchisi harakatlanayotganida svetoforning ushbu ishorasiga muvofiq boshqa yo'nalishlardan harakatlanayotgan transport vositalariga yo'l berishi kerakmi?",
    answers: [
        "Kerak",
        "Kerak emas"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/365.jpg"
};

// 366-savol (37-bilet, 6-savol)
QUESTIONS[36].questions[5] = {
    question: "Transport vositalariga sidirg'a oq chiziq bilan ajratilgan va «Yo'nalishli transport vositalari uchun mo'ljallangan tasma» yo'l belgisi bilan belgilangan yo'lning o'ng bo'lagida to'xtab turishga ruxsat etiladimi?",
    answers: [
        "Agar to'xtab turishni taqiqlovchi belgi bo'lmasa, ruxsat etiladi",
        "Taqiqlanadi",
        "Faqat shu hududdagi korxonaga xizmat qiladigan yoki yaqin o'rtadagi uylarda yashaydigan fuqarolarga qarashli avtomobillarga ruxsat etiladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 367-savol (37-bilet, 7-savol)
QUESTIONS[36].questions[6] = {
    question: "Bunday yo'l belgisi o'rnatilgan yo'l qismlarida mototsikllarga qanday yuqori tezlik bilan harakatlanishga ruxsat etiladi?",
    answers: [
        "60 km/s",
        "70 km/s",
        "80 km/s",
        "90 km/s"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/367.jpg"
};

// 368-savol (37-bilet, 8-savol)
QUESTIONS[36].questions[7] = {
    question: "Qaysi transport vositasining haydovchisi yo'l berishi kerak?",
    answers: [
        "Tramvay haydovchisi",
        "Yuk avtomobilining haydovchisi",
        "Har ikki avtomobil haydovchisi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/368.jpg"
};

// 369-savol (37-bilet, 9-savol)
QUESTIONS[36].questions[8] = {
    question: "Serqatnov harakatda transport vositasini keskin tormozlash:",
    answers: [
        "Orqadan kelayotganlarning urilib ketishini keltirib chiqarishi mumkin",
        "Avtomobilning faqat texnik holatida ko'rinadi",
        "Serqatnov harakatda boshqarishning odatdagi usuli hisoblanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 370-savol (37-bilet, 10-savol)
QUESTIONS[36].questions[9] = {
    question: "Qanday holatlarda tashilayotgan yuk ishora taxtachalari yoki bayroqchalar bilan kunning qorong'i vaqtida, yetarli ko'rinmaydigan sharoitlarda esa yorug'lik qaytargich yoki chiroqlar bilan belgilanadi?",
    answers: [
        "Yuk transport vositasining o'lchamidan oldinda yoki orqada 1 metrdan ko'p chiqib qolganda",
        "Yuk transport vositasining o'lchamidan orqada 0,8 metr chiqib qolganda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};


// 371-savol (38-bilet, 1-savol)
QUESTIONS[37].questions[0] = {
    question: "Qatnov qismi tomonidan yo'lovchilarning tushishi va chiqishiga qaysi hollarda ruxsat etiladi?",
    answers: [
        "Transport vositasi majburiy to'xtaganda",
        "Haydovchining hohishiga ko'ra shu shart bilanki, bu xavf-xatardan xoli bo'lsa va boshqa harakat qatnashchilariga xalaqit bermasa",
        "Trotuar tomondan yoki yo'l yoqasidan iloji bo'lmasa shu shart bilanki, bu hol xavf-xatarsiz bo'lsa va boshqa harakat qatnashchilariga xalaqit bermasa"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 372-savol (38-bilet, 2-savol)
QUESTIONS[37].questions[1] = {
    question: "Yuk avtomobilining qaysi yo'nalishlarda harakatlanishiga ruxsat etiladi?",
    answers: [
        "Faqat o'ngga",
        "O'ngga, chapga va qayrilib olishga",
        "Faqat chapga"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/372.jpg"
};

// 373-savol (38-bilet, 3-savol)
QUESTIONS[37].questions[2] = {
    question: "Bu yotiq chiziq bildiradi:",
    answers: [
        "Ko'rsatilgan yo'nalishlarda harakatlanishni taqiqlaydi",
        "Chorrahada tasmalar bo'laklar bo'yicha ruxsat etilgan harakat yo'nalishlarini ko'rsatadi",
        "Harakat barcha yo'nalishlarda ruxsat etilgan yo'llarning kesishmasiga yaqinlashganlikni"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/373.jpg"
};

// 374-savol (38-bilet, 4-savol)
QUESTIONS[37].questions[3] = {
    question: "Transport vositalari chorrahani quyidagi tartibda kesib o'tadilar:",
    answers: [
        "Yengil avtomobil, avtobus, velosiped",
        "Avtobus, velosiped, yengil avtomobil",
        "Avtobus, yengil avtomobil, velosiped",
        "Velosiped, avtobus, yengil avtomobil"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/374.jpg"
};

// 375-savol (38-bilet, 5-savol)
QUESTIONS[37].questions[4] = {
    question: "Rasmda ko'rsatilgan holatda qizil avtomobilning haydovchisi qanday yo'l tutishi kerak?",
    answers: [
        "Svetoforning ruxsat ishorasini kutishi va to'g'riga o'tishi",
        "O'ngga burilish ishorasini yoqishi va o'ngga burilishi",
        "Chapga burilish ishorasini yoqishi va o'ng qatorni bo'shatishi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/375.jpg"
};

// 376-savol (38-bilet, 6-savol)
QUESTIONS[37].questions[5] = {
    question: "Temir yo'l kesishmasi oldida to'xtagandan keyin harakatni boshlashdan oldin haydovchi:",
    answers: [
        "Bitta uzun va uchta qisqa tovushli ishora berib harakatni boshlashi kerak",
        "Yaqinlashib kelayotgan poezdning yo'qligiga ishonch hosil qilishi kerak",
        "Har ikki javob to'g'ri"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 377-savol (38-bilet, 7-savol)
QUESTIONS[37].questions[6] = {
    question: "Shunday yo'l belgisi bilan belgilangan yo'l qismlarida shaharlararo bo'lmagan avtobuslarning qanday yuqori tezlik bilan harakatlanishiga ruxsat etiladi?",
    answers: [
        "50 km/s",
        "60 km/s",
        "70 km/s",
        "80 km/s"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/377.jpg"
};

// 378-savol (38-bilet, 8-savol)
QUESTIONS[37].questions[7] = {
    question: "Qaysi transport vositalarining haydovchilari to'xtab turish qoidasini buzdilar?",
    answers: [
        "Yengil avtomobil haydovchisi",
        "Yuk avtomobili haydovchisi",
        "Har ikki haydovchi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/378.jpg"
};

// 379-savol (38-bilet, 9-savol)
QUESTIONS[37].questions[8] = {
    question: "Sirpanchiq yo'lda harakatlanayotganda karbyuratorning drossel zaslonkasini birdaniga ochish xavfi nimadan iborat?",
    answers: [
        "Yurgizgich o'chib qoladi",
        "Yonilg'i sarfi ancha ortadi",
        "Avtomobilning yonga sirpanishi vujudga kelishi mumkin",
        "Yurgizgich tirsakli val aylanishining maksimal chastotasini oshiradi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 380-savol (38-bilet, 10-savol)
QUESTIONS[37].questions[9] = {
    question: "Qaysi hollarda avtomobillar ushbu taniqlik belgilari bilan belgilanadi?",
    answers: [
        "Xavfli yuklar tashiyotganda",
        "Nogironlar boshqarayotganda",
        "Kar-soqov yoki kar haydovchilar boshqarayotganda",
        "Ikki yilgacha haydovchilik ish davriga ega bo'lgan haydovchilar boshqarayotganda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/380.jpg"
};


// 381-savol (39-bilet, 1-savol)
QUESTIONS[38].questions[0] = {
    question: "Piyodalar o'tish joyidan tashqarida yo'lning qatnov qismidan ajratuvchi mintaqa bo'lganda piyodalarning o'tishlariga ruxsat etiladimi?",
    answers: [
        "Yo'lning har ikki tomoni ko'rinadigan joylarda ruxsat etiladi",
        "Faqat aholi punktlaridan tashqarida ruxsat etiladi",
        "Faqat aholi punktlarida ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 382-savol (39-bilet, 2-savol)
QUESTIONS[38].questions[1] = {
    question: "Ushbu belgi quyida sanab o'tilgan yuk avtomobillarining qaysilariga harakatni davom ettirishni taqiqlamaydi?",
    answers: [
        "Yuk ko'tarish 3,5 tonnadan ortiq bo'lgan avtomobillarga",
        "Ruxsat etilgan to'la vazni 3,5 tonnadan ortiq bo'lgan avtomobillarga",
        "Xavfli yuk tashiyotgan avtomobillarga",
        "Yukxonasiga qiya oq chiziq tortilgan yuk avtomobillariga"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/382.jpg"
};

// 383-savol (39-bilet, 3-savol)
QUESTIONS[38].questions[2] = {
    question: "Reversiv svetoforlar bo'lmaganda yoki ular o'chirib qo'yilganda ikkitali uzuq uzuq chiziqni kesib o'tishga ruxsat etiladimi?",
    answers: [
        "Agar u haydovchining chap tomonida bo'lsa, ruxsat etiladi",
        "Agar u haydovchining o'ng tomonida bo'lsa, ruxsat etiladi",
        "Istalgan tomondan ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/383.jpg"
};

// 384-savol (39-bilet, 4-savol)
QUESTIONS[38].questions[3] = {
    question: "Qaysi transport vositasi haydovchisi birinchi bo'lib harakatlanish huquqiga ega?",
    answers: [
        "Avtomobil haydovchisi",
        "Velosiped haydovchisi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/384.jpg"
};

// 385-savol (39-bilet, 5-savol)
QUESTIONS[38].questions[4] = {
    question: "Svetoforning bu ishorasida qaysi transport vositalarining harakatlanishiga ruxsat etilgan?",
    answers: [
        "Tramvay, sariq va qizil avtomobilga",
        "Sariq va qizil avtomobillarga",
        "Barcha transport vositalariga"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/385.jpg"
};

// 386-savol (39-bilet, 6-savol)
QUESTIONS[38].questions[5] = {
    question: "Aholi punktlarida avtobus yoki trolleybus haydovchisi harakatni bekatdan boshlaydi. U:",
    answers: [
        "Uni aylanib o'tayotgan transport vositasiga yo'l berishi kerak",
        "Imtiyozdan foydalanib, belgilangan yo'nalishda harakatni boshlashi kerak",
        "Unga yo'l berilganligiga ishonch hosil qilgach harakatni boshlashi kerak"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 387-savol (39-bilet, 7-savol)
QUESTIONS[38].questions[6] = {
    question: "Qaysi transport vositasi haydovchisi to'xtab turish qoidasini buzdi?",
    answers: [
        "Ko'k avtomobil haydovchisi",
        "Qizil avtomobil haydovchisi",
        "Har ikki haydovchi buzdi",
        "Har ikki haydovchi ham buzmadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/387.jpg"
};

// 388-savol (39-bilet, 8-savol)
QUESTIONS[38].questions[7] = {
    question: "Ko'rsatilgan vaziyatda qizil avtomobil haydovchisi qanday yo'l tutishi kerak?",
    answers: [
        "Transport vositalariga to'sqinlik qilmasligi uchun burilishni tezroq tugallashi",
        "Hovlidan chiqishda piyodani va transport vositalarini o'tkazib yuborishi",
        "Transport vositalariga yo'l berish, qatnov qismi chetida to'xtashi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/388.jpg"
};

// 389-savol (39-bilet, 9-savol)
QUESTIONS[38].questions[8] = {
    question: "Sirpanchiq yo'lda tormozlardan qanday foydalanish kerak?",
    answers: [
        "Ulagichni ajratmay turib sekin tormoz berishi va boshqaruv rulining keskin burishga yo'l qo'ymasligi",
        "Ulagichni ajratishi va sekin tormoz berishi",
        "Tormoz tepkisini uzuq-uzuq bosish bilan keskin tormoz berishi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 390-savol (39-bilet, 10-savol)
QUESTIONS[38].questions[9] = {
    question: "Transport vositalari ushbu taniqlik belgilari bilan belgilanadi:",
    answers: [
        "Kar yoki kar-soqov haydovchilar boshqarayotgan",
        "Nogiron boshqarayotgan",
        "Xavfli yuklar tashiyotgan"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/390.jpg"
};

// 391-savol (40-bilet, 1-savol)
QUESTIONS[39].questions[0] = {
    question: "Ko'k avtomobil chorrahani nechanchi bo'lib kesib o'tadi?",
    answers: [
        "Birinchi bo'lib",
        "Ikkinchi bo'lib",
        "Uchinchi bo'lib",
        "Oxirgi bo'lib"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/391.jpg"
};

// 392-savol (40-bilet, 2-savol)
QUESTIONS[39].questions[1] = {
    question: "Qaysi belgi ro'paradan harakatlanayotgan transport vositalariga yo'l berishni talab qiladi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/392.jpg"
};

// 393-savol (40-bilet, 3-savol)
QUESTIONS[39].questions[2] = {
    question: "Yotiq chiziqlarning sidirg'a chizig'ini bosib o'tishga ruxsat etiladimi?",
    answers: [
        "Agar u haydovchining o'ng tomonida bo'lsa ruxsat etiladi",
        "Faqat shunday holda ruxsat etiladiki, agar chiziq yo'l qatnov qismining chetlarini bildirsa",
        "Chiziq bir yo'nalishdagi harakat tasmalarining chegarasini bildirganda faqat manyovr qilishda ruxsat etiladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 394-savol (40-bilet, 4-savol)
QUESTIONS[39].questions[3] = {
    question: "Ko'rsatilgan vaziyatda haydovchi qanday yo'l tutishi kerak?",
    answers: [
        "Piyodalarga mazkur yo'nalishning qatnov qismidan butunlay o'tib olishlariga imkon berishi",
        "Yo'l-transport hodisasining oldini olish uchun tovush ishora berishi va asosiy yo'lda bo'lgani sababli piyodalarga yo'l bermay o'tish joyidan o'tishi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/394.jpg"
};

// 395-savol (40-bilet, 5-savol)
QUESTIONS[39].questions[4] = {
    question: "Qizil avtomobil chorrahani nechanchi bo'lib kesib o'tadi?",
    answers: [
        "Birinchi bo'lib",
        "Ikkinchi bo'lib",
        "Uchinchi bo'lib",
        "Oxirgi bo'lib"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/395.jpg"
};

// 396-savol (40-bilet, 6-savol)
QUESTIONS[39].questions[5] = {
    question: "Agar piyodalar o'tish joyida tirbandlik vujudga kelib, haydovchini piyodalar o'tish joyida to'xtashga majbur qilsa, haydovchi majbur:",
    answers: [
        "To'xtashga va piyodalar o'tish joyiga o'tmaslikka, chunki bu piyodalarning harakati uchun to'sqinlik qiladi",
        "Piyodalar o'tish joyiga 15 metr yetmasdan to'xtashga",
        "Oldinda turgan transport vositasidan zarur masofa saqlangan holda piyodalar o'tish joyida to'xtashga",
        "Piyodalar o'tish joyiga 5 metr yetmasdan to'xtashga"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 397-savol (40-bilet, 7-savol)
QUESTIONS[39].questions[6] = {
    question: "Bu joyda quvib o'tishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi",
        "Aholi punktidan tashqaridagi yo'llarda ruxsat etiladi",
        "Faqat aholi punktlaridan tashqaridagi yo'llarda taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/397.jpg"
};

// 398-savol (40-bilet, 8-savol)
QUESTIONS[39].questions[7] = {
    question: "Navbatchining haydovchiga qaratilgan qaysi holati temir yo'l kesishmasi orqali harakatlanishni taqiqlovchi ishora hisoblanadi?",
    answers: [
        "Haydovchiga chap yoki o'ng yelkasini o'girib, tayoqchani (qizil bayroqni) boshidan yuqori ko'tarib turishi",
        "Ko'kragini yoki orqasini o'girib, tayoqchani (qizil bayroqni) boshidan yuqori ko'tarib turishi yoki qo'llarini yoniga uzatib turishi",
        "Istalgan yelkasi yoki ko'kragini o'girib, tayoqchani (qizil bayroqni) boshidan yuqori ko'tarib turishi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 399-savol (40-bilet, 9-savol)
QUESTIONS[39].questions[8] = {
    question: "Chuqur kechuvdan o'tgach, haydovchi nima qilishi shart?",
    answers: [
        "Tezlanish bilan yuqoriroq uzatmalarda harakatlanishga",
        "Qisqa masofa oralig'ida tezlanish olib tormoz tepkisini bir necha bor bosib tormoz mexanizmi friksion ustqoplamalarini quritishi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 400-savol (40-bilet, 10-savol)
QUESTIONS[39].questions[9] = {
    question: "Transport vositasi ushbu taniqlik belgisi bilan belgilanadi:",
    answers: [
        "Nogiron boshqarayotgan",
        "Og'ir vaznli va yirik o'lchamda yuk tashiyotgan",
        "Xavfli yuklar tashiyotgan",
        "Kar-soqov yoki kar haydovchilar boshqarayotgan"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/400.jpg"
};
// 401-savol (41-bilet, 1-savol)
QUESTIONS[40].questions[0] = {
    question: "Qaysi avtomobil to'xtash qoidasini buzdi?",
    answers: [
        "Yashil avtomobil",
        "Har ikkisi buzdi",
        "Har ikkisi ham buzmadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/401.jpg"
};

// 402-savol (41-bilet, 2-savol)
QUESTIONS[40].questions[1] = {
    question: "Ko'rsatilgan belgilardan qay biri ilgari kiritilgan barcha cheklashlarni bekor qiladi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/402.jpg"
};

// 403-savol (41-bilet, 3-savol)
QUESTIONS[40].questions[2] = {
    question: "Haydovchi qaysi rasmda qoidalar talablarini buzmay turib manyovr qildi?",
    answers: [
        "1",
        "2",
        "3"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/403.jpg"
};

// 404-savol (41-bilet, 4-savol)
QUESTIONS[40].questions[3] = {
    question: "Transport vositalari chorrahani quyidagi tartibda kesib o'tadilar:",
    answers: [
        "Tramvay, avtomobil va avtobus bir vaqtda",
        "Tramvay, avtobus, avtomobil",
        "Avtobus, tramvay, avtomobil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/404.jpg"
};

// 405-savol (41-bilet, 5-savol)
QUESTIONS[40].questions[4] = {
    question: "Agar yo'l tasmasi sidirg'a chiziq bilan ajratilib, belgi bilan belgilangan bo'lsa, avtobus haydovchisining tasma bo'ylab harakatlanishiga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi",
        "Agar avtobus belgilangan yo'nalish bo'yicha harakatlanayotgan bo'lsa, ruxsat etiladi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/405.jpg"
};

// 406-savol (41-bilet, 6-savol)
QUESTIONS[40].questions[5] = {
    question: "Ko'krak qafasi shikastlangan yaradorni kerakli joyga qanday eltish kerak?",
    answers: [
        "Yaralangan yoni bilan yotgan yoki yarim o'tirgan holda",
        "Sog' yoni bilan yotgan yoki o'tirgan holda",
        "Orqasi bilan yoki qorni bilan yotgan holda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 407-savol (41-bilet, 7-savol)
QUESTIONS[40].questions[6] = {
    question: "Relssiz transport vositalarining harakatlanishi uchun tasmalar soni qanday aniqlanadi?",
    answers: [
        "Yo'l yotiq chiziqlari bilan",
        "«Tasmalar bo'yicha harakat yo'nalishi» yoki «Tasma bo'yicha harakatlanish yo'nalishi» yo'l belgilari bilan",
        "Haydovchining o'zi tomonidan qatnov qismining kengligini, transport vositalarining o'lchamlarini va ular o'rtasidagi zarur yonlama oraliq masofani hisobga olib",
        "Barcha sanab o'tilgan usullar bilan"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 408-savol (41-bilet, 8-savol)
QUESTIONS[40].questions[7] = {
    question: "Avtopoyezdni shu vaziyatda, agar u 40 km/soatdan kam tezlik bilan harakat qilayotgan bo'lsa, quvib o'tishga ruxsat etiladimi?",
    answers: [
        "Taqiqlanadi",
        "Ruxsat etiladi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/408.jpg"
};

// 409-savol (41-bilet, 9-savol)
QUESTIONS[40].questions[8] = {
    question: "Ikki tomonlama harakatli yo'lda uchta tasma bor, Siz o'ngga burilishingiz zarur. Siz ushbu manyovrni qaysi tasmadan amalga oshirasiz?",
    answers: [
        "O'ng tasmadan",
        "O'rta tasmadan",
        "O'ng yoki o'rta tasmadan",
        "O'rta tasmadan, lekin faqat o'ng tasma band bo'lgan holda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 410-savol (41-bilet, 10-savol)
QUESTIONS[40].questions[9] = {
    question: "Qish vaqtida orqa yetakchi ko'prikli avtomobilda chuqur bo'lib qolgan g'ildirak izidan qanday chiqish mumkin?",
    answers: [
        "Uncha katta bo'lmagan tezlikda birinchi galda boshqaruv rulini chiqish tomonning qarama qarshi tomoniga, keyin esa chiqish tomoniga shiddat bilan burish kerak",
        "Izdan chiqishni iloji boricha tezroq boshlash, dastlab boshqaruv rulini chiqish tomoniga, keyin esa ro'parasiga burish kerak"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};


// 411-savol (42-bilet, 1-savol)
QUESTIONS[41].questions[0] = {
    question: "Kunning qorong'i vaqtida va yetarlicha ko'rinmaydigan sharoitlarda yo'lda qoldirilgan yo'l mashinalari, qurilish materiallari, qurilma va hokazolar bildirilishi kerak:",
    answers: [
        "Tegishli yo'l belgilari bilan",
        "Yo'naltiruvchi va tevaragini o'rovchi moslamalar bilan",
        "Qizil yoki sariq yoritgich chiroqlari bilan",
        "Barcha sanab o'tilgan alomatlar bilan"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 412-savol (42-bilet, 2-savol)
QUESTIONS[41].questions[1] = {
    question: "Haydovchi qanday holda bu belgining talablarini to'g'ri bajaradi?",
    answers: [
        "Kesishadigan yo'l bo'ylab harakat qilayotgan mexanik transport vositalariga yo'l beradi",
        "Kesishadigan yo'l bo'ylab harakat qilayotgan transport vositalariga yo'l beradi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/412.jpg"
};

// 413-savol (42-bilet, 3-savol)
QUESTIONS[41].questions[2] = {
    question: "Oq chiziq bilan belgilangan orolchaga kirishga ruxsat etiladimi?",
    answers: [
        "Faqat to'xtash uchun ruxsat etiladi",
        "Orqa bilan harakat qilganda ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/413.jpg"
};

// 414-savol (42-bilet, 4-savol)
QUESTIONS[41].questions[3] = {
    question: "Qaysi transport vositasining haydovchisi yo'l berishi kerak?",
    answers: [
        "Ko'k avtobus haydovchisi",
        "Qizil avtomobil haydovchisi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/414.jpg"
};

// 415-savol (42-bilet, 5-savol)
QUESTIONS[41].questions[4] = {
    question: "Harakatlanish kimga ruxsat etilgan?",
    answers: [
        "Yuk avtomobili va mototsiklga",
        "Barcha transport vositalariga",
        "Tramvay va yengil avtomobilga",
        "Yengil va yuk avtomobiliga, mototsiklga"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/415.jpg"
};

// 416-savol (42-bilet, 6-savol)
QUESTIONS[41].questions[5] = {
    question: "Qaysi transport vositasining haydovchisi qayrilib olishni to'g'ri bajarmoqda?",
    answers: [
        "Ko'k avtomobil haydovchisi",
        "Qizil avtomobil haydovchisi",
        "Har ikki haydovchi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/416.jpg"
};

// 417-savol (42-bilet, 7-savol)
QUESTIONS[41].questions[6] = {
    question: "Avtomobil haydovchisi uni boshqa transport vositalari quvib o'tayotganda qanday harakat qilishi kerak?",
    answers: [
        "Harakat bo'lagini o'zgartirmay, o'ng burilish ishorasini berishi",
        "Harakat tezligini oshirish yoki boshqa hatti harakatlar bilan quvib o'tishga to'sqinlik qilmasligi",
        "Harakat tezligini kamaytirishi, tovush ishora berishi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 418-savol (42-bilet, 8-savol)
QUESTIONS[41].questions[7] = {
    question: "Qo'l bilan beriladigan ogohlantiruvchi ishora Qoidalarga muvofiq qachon tugallanishi mumkin?",
    answers: [
        "Manyovrni bevosita bajarishdan oldin",
        "Manyovr tugagandan so'ng zudlik bilan",
        "Manyovr bajarayotgan vaqtda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 419-savol (42-bilet, 9-savol)
QUESTIONS[41].questions[8] = {
    question: "Jarohatdan xushsizlanganda birinchi tibbiy yordamni qanday ko'rsatish kerak?",
    answers: [
        "Kiyim-boshni yechish yoki bo'shatish, toza havo kelishi ta'minlash. Nashatir spirti hidlatish. Yuzga sovuq suv sepish. Peshona va gardanga iliq malhamlar qo'yish",
        "Mutloq tinch qo'yish. Boshni tushirish, oyoqlarni ko'tarish, badanni isitish. Qaynoq ichimlik (choy va shu kabilar) berish. Bog'langan jgutni shifokorsiz yechmaslik va bo'shatmaslik"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 420-savol (42-bilet, 10-savol)
QUESTIONS[41].questions[9] = {
    question: "Ko'rsatilgan belgilardan qaysi biri avtopoyezdni bildirish uchun o'rnatiladi?",
    answers: [
        "Chap belgi",
        "O'ng belgi",
        "Har ikki belgi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/420.jpg"
};


// 421-savol (43-bilet, 1-savol)
QUESTIONS[42].questions[0] = {
    question: "Bu joyda quvib o'tishga ruxsat etilganmi?",
    answers: [
        "Quvib o'tilayotgan transport vositasi 40 km/soatdan kam tezlik bilan harakatlanganda ruxsat etiladi",
        "Taqiqlanadi",
        "Agar quvib o'tish temir yo'l kesishmasigacha tugasa, ruxsat etiladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/421.jpg"
};

// 422-savol (43-bilet, 2-savol)
QUESTIONS[42].questions[1] = {
    question: "Qaysi belgi kesishadigan yo'l bo'ylab harakat qilayotgan transport vositalariga yo'l berish majburiyatini yuklaydi?",
    answers: ["1", "2", "3", "4", "5"],
    correct: 3, // F4 to'g'ri
    image: "images/422.jpg"
};

// 423-savol (43-bilet, 3-savol)
QUESTIONS[42].questions[2] = {
    question: "Transport vositasining haydovchisi oldida «To'xtash chizig'i» chizilgan va svetoforning yashil yoritgichi yoniq bo'lgan chorrahaga yaqinlashayotib nima qilishi kerak?",
    answers: [
        "«To'xtash chizig'i»da to'xtashi, so'ng esa harakatni qayta tiklashi",
        "To'xtamasdan chorraha orqali harakatni davom ettirishi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 424-savol (43-bilet, 4-savol)
QUESTIONS[42].questions[3] = {
    question: "Qaysi transport vositasi haydovchisi yo'l berishi kerak?",
    answers: [
        "Avtomobil haydovchisi",
        "Mototsikl haydovchisi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/424.jpg"
};

// 425-savol (43-bilet, 5-savol)
QUESTIONS[42].questions[4] = {
    question: "Bunday vaziyatda haydovchi nima qilishi kerak?",
    answers: [
        "Oldindan yaqinni yorituvchi fara chiroqlarini yoqib va uzluksiz tovush ishorasini berib, eng kam tezlik bilan turgan transport vositasini aylanib o'tishi",
        "Qatnov qismidan o'tayotgan bolalarga yo'l berishi",
        "Bu yo'l qismidan o'tishi kerak, chunki bolalar qatnov qismini piyodalar o'tish joyidan kesib o'tmayaptilar"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/425.jpg"
};

// 426-savol (43-bilet, 6-savol)
QUESTIONS[42].questions[5] = {
    question: "Qaysi transport vositasining haydovchisi aylanma harakatli kesishmaga to'g'ri kiradi?",
    answers: [
        "Ikkala haydovchi",
        "Faqat avtobus haydovchisi",
        "Faqat yengil avtomobil haydovchisi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/426.jpg"
};

// 427-savol (43-bilet, 7-savol)
QUESTIONS[42].questions[6] = {
    question: "Avtobus haydovchisiga yo'lovchilarni tushirish uchun to'xtashga ruxsat etiladimi?",
    answers: [
        "Taqiqlanadi",
        "Ruxsat etiladi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/427.jpg"
};

// 428-savol (43-bilet, 8-savol)
QUESTIONS[42].questions[7] = {
    question: "Siz quvib o'tish uchun chiqdingiz va bexosdan ro'paradan kelayotgan avtomobilni ko'rib qoldingiz. Agar Siz quvib o'tishni tugallay olishingizga ishonchingiz bo'lmasa, Siz:",
    answers: [
        "Tovush xabarini berib va faralarni yoqib quvib o'tishni tugallaguncha davom ettirishingiz kerak",
        "Tezlikni asta ko'paytirishingiz va quvib o'tishni tezroq tugallashingiz kerak",
        "Tezlikni kamaytirishingiz va ilgari egallagan qatorga qaytishingiz kerak"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 429-savol (43-bilet, 9-savol)
QUESTIONS[42].questions[8] = {
    question: "Manyovr vaqtida haydovchi har doim ogohlantiruvchi ishora berishi kerakmi?",
    answers: [
        "Faqat uning orqasida boshqa transport vositasi harakatlanayotgan bo'lsa",
        "Faqat uning transport vositasi burilishni ko'rsatuvchi chiroqlar bilan jihozlangan bo'lsa",
        "Faqat serqatnov harakatli yo'lda",
        "Faqat u harakatning boshqa ishtirokchilarini chalg'itmagan hollarda"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 430-savol (43-bilet, 10-savol)
QUESTIONS[42].questions[9] = {
    question: "Ishlamayotgan boshqaruv ruli bilan to'xtab turish yoki ta'mirlash joyiga borishga ruxsat etiladimi?",
    answers: [
        "Qattiq ulagichda shatakka olinganda ruxsat etiladi",
        "Harakat xavfsizligini ta'minlovchi tezlikda ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 431-savol (44-bilet, 1-savol)
QUESTIONS[43].questions[0] = {
    question: "Aholi punktidan tashqarida yuk avtomobil yukxonasida odamlarni tashishda qanday eng yuqori tezlikda harakatlanishga ruxsat etiladi?",
    answers: [
        "40 km/s",
        "50 km/s",
        "60 km/s",
        "70 km/s",
        "80 km/s"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 432-savol (44-bilet, 2-savol)
QUESTIONS[43].questions[1] = {
    question: "Bu belgiga ko'ra qaysi yuk avtomobili harakatni davom ettirishi mumkin?",
    answers: [
        "8 tonnagacha yuk ortgan avtomobil",
        "8 tonna yuk ko'tarish quvvatiga ega bo'lgan bo'sh avtomobil",
        "Ruxsat etilgan to'la vazni 8 tonnadan ortiq bo'lmagan avtomobil"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/432.jpg"
};

// 433-savol (44-bilet, 3-savol)
QUESTIONS[43].questions[2] = {
    question: "Bu yotiq chiziq nimani bildiradi?",
    answers: [
        "Piyodalar o'tish joyini",
        "Velosiped yo'lkasi qatnov qismini kesib o'tadigan joyni",
        "Mol haydaladigan joyni"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/433.jpg"
};

// 434-savol (44-bilet, 4-savol)
QUESTIONS[43].questions[3] = {
    question: "Yuk avtomobil haydovchisiga avtomagistrallarda nima taqiqlangan?",
    answers: [
        "5.15 yoki 6.11 yo'l belgilari bilan belgilangan joyda to'xtash",
        "Orqa bilan harakatlanish",
        "Mexanik transport vositalarini shatakka olish",
        "Barcha sanab o'tilgan harakatlar"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 435-savol (44-bilet, 5-savol)
QUESTIONS[43].questions[4] = {
    question: "Yo'lovchilarni tushirish uchun bu belgi o'rnatilgan tasmada to'xtashga ruxsat etiladimi?",
    answers: [
        "Agar tasma qatnov qismining o'ng chetida joylashgan va u yotiq uzluksiz chizig'i bilan qatnov qismidan ajratilmagan bo'lsa ruxsat etiladi",
        "Taqiqlanadi",
        "Ruxsat etiladi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/435.jpg"
};

// 436-savol (44-bilet, 6-savol)
QUESTIONS[43].questions[5] = {
    question: "Qaysi transport vositasining haydovchisi yo'l berishi kerak?",
    answers: [
        "Avtobus haydovchisi",
        "Yuk tashuvchi avtomobil haydovchisi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/436.jpg"
};

// 437-savol (44-bilet, 7-savol)
QUESTIONS[43].questions[6] = {
    question: "Chorrahani kesib o'tish navbatini ko'rsating:",
    answers: [
        "Ko'k, qizil ayni vaqtda yashil bilan",
        "Qizil, ko'k, yashil",
        "Qizil ayni vaqtda yashil bilan, ko'k"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/437.jpg"
};

// 438-savol (44-bilet, 8-savol)
QUESTIONS[43].questions[7] = {
    question: "Qayta tizilishda haydovchi boshqa transport vositalariga yo'l berishi kerakmi?",
    answers: [
        "Kerak, agar transport vositasi qo'shni tasma bo'yicha yo'lakay harakat qilsa",
        "Kerak emas",
        "O'zaro qayta tizilishda barcha hollarda kerak"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 439-savol (44-bilet, 9-savol)
QUESTIONS[43].questions[8] = {
    question: "Tyagach haydovchisi nima qilishi kerak?",
    answers: [
        "To'xtab, orqasida to'plangan transport vositalarini o'tkazib yuborishi",
        "O'sha tezlik bilan harakatni davom ettirishi",
        "Qo'li bilan o'zini ro'para tasmadan quvib o'tishlari haqida ishora qilishi kerak"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/439.jpg"
};

// 440-savol (44-bilet, 10-savol)
QUESTIONS[43].questions[9] = {
    question: "Mazkur taniqlik belgisi nimani bildiradi?",
    answers: [
        "Oldinda qatnovning notekis bo'lgan yo'l qismini",
        "Oldinda shu yo'nalishda harakatlanish uchun uch tasmali yo'l qismini",
        "Mexanik transport vositasida tishli turumlangan (shiplar) shinalar o'rnatilganini"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/440.jpg"
};


// 441-savol (45-bilet, 1-savol)
QUESTIONS[44].questions[0] = {
    question: "Ro'paradan kelayotgan avtomobil haydovchisi qanday yo'l tutishi kerak?",
    answers: [
        "Yo'l yoqasida to'xtashi",
        "Yalt-yalt etuvchi chiroq mayoqchasi yoqilgan avtomobiliga xalaqit bermasdan harakatni davom ettirishi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/441.jpg"
};

// 442-savol (45-bilet, 2-savol)
QUESTIONS[44].questions[1] = {
    question: "Avtomobilning qaysi yo'nalishda harakatlanishiga ruxsat etiladi?",
    answers: [
        "Chapga va o'ngga",
        "Faqat to'g'riga",
        "Barcha yo'nalishlarda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/442.jpg"
};

// 443-savol (45-bilet, 3-savol)
QUESTIONS[44].questions[2] = {
    question: "Bu yo'l belgisi nimani bildiradi?",
    answers: [
        "Yo'l (marshrut) raqamini ko'rsatadi",
        "Eng yaqin aholi yashaydigan joygacha bo'lgan masofani ko'rsatadi",
        "DANning eng yaqin postigacha bo'lgan masofani ko'rsatadi",
        "«Kilometr belgisi» vazifasini bajaradi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/443.jpg"
};

// 444-savol (45-bilet, 4-savol)
QUESTIONS[44].questions[3] = {
    question: "Avtomagistralda ajratuvchi mintaqaning uzilishlariga kirishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Faqat orqaga burilish uchun ruxsat etiladi, to'la vazni 3,5 tonnadan ortiq bo'lgan yuk avtomobillar bundan mustasno",
        "Taqiqlanadi",
        "Belgilangan yo'nalishdagi transport vositalariga ruxsat etiladi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 445-savol (45-bilet, 5-savol)
QUESTIONS[44].questions[4] = {
    question: "Transport vositalari chorrahani quyidagi tartibda kesib o'tadilar:",
    answers: [
        "Qizil avtomobil, tramvay ayni vaqtda yashil avtomobil bilan",
        "Tramvay, qizil, yashil avtomobillar",
        "Tramvay ayni vaqtda yashil avtomobil, qizil avtomobil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/445.jpg"
};

// 446-savol (45-bilet, 6-savol)
QUESTIONS[44].questions[5] = {
    question: "Qaysi transport vositasining haydovchisi yo'lda tezlashish bo'lagi bo'lganda unga chiqish qoidasini buzdi?",
    answers: [
        "Har ikki haydovchi",
        "Har ikki haydovchi to'g'ri chiqdi",
        "Ko'k avtomobil haydovchisi",
        "Yashil avtomobil haydovchisi"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/446.jpg"
};

// 447-savol (45-bilet, 7-savol)
QUESTIONS[44].questions[6] = {
    question: "Uch tasmali bo'lgan ikki tomonlama harakat tashkil qilingan yo'llarda ro'paradagi harakat uchun mo'ljallangan chetki chap tasmaga o'tishga ruxsat etiladimi?",
    answers: [
        "Quvib o'tish uchun ruxsat etiladi",
        "Barcha hollarda ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 448-savol (45-bilet, 8-savol)
QUESTIONS[44].questions[7] = {
    question: "Haydovchi to'xtash oldidan ogohlantiruvchi ishora berishga qachon majbur?",
    answers: [
        "Faqat shu holdaki, agar uning orqasidan boshqa transport vositasi harakat qilsa",
        "Faqat aholi punktlarida",
        "Barcha hollarda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 449-savol (45-bilet, 9-savol)
QUESTIONS[44].questions[8] = {
    question: "To'xtash qoidasini buzgan hamma haydovchilar qaysi javobda ko'rsatilgan?",
    answers: [
        "Qizil avtomobil va mototsikl haydovchilari",
        "Ko'k avtomobil haydovchisi",
        "Mototsikl haydovchisi",
        "Barcha transport vositalarining haydovchilari"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/449.jpg"
};

// 450-savol (45-bilet, 10-savol)
QUESTIONS[44].questions[9] = {
    question: "Agar transport vositasi ishchi tormozining samaradorligi qoidalar talabiga javob bermasa, u holda siz majbursiz:",
    answers: [
        "Belgilangan safarni davom ettirishga, bunda kunning yorug' vaqtida yaqinni yorituvchi fara chirog'ini yoqishga",
        "Bundan keyingi harakatni to'xtatishga",
        "Nosozlikni o'sha joyda bartaraf etishga, agar buning iloji bo'lmasa, zarur ehtiyoj choralariga rioya qilgan holda to'xtab turish yoki ta'mirlash joyiga evakuator yoki shatakka olish orqali olib borishga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};


// 451-savol (46-bilet, 1-savol)
QUESTIONS[45].questions[0] = {
    question: "Haydovchi yo'l-transport hodisasida shikastlangan transport vositasini shatakka olish uchun yuk avtomobilini Ichki ishlar xodimi ixtiyoriga qanday holda berishi kerak?",
    answers: [
        "Faqat shu holdaki, agar shatakka olish yo'l-yo'lakay yo'nalishda amalga oshirilsa",
        "Har qanday holda, fuqarolarga tegishli transport vositalaridan tashqari",
        "Haydovchining istagi bo'yicha"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 452-savol (46-bilet, 2-savol)
QUESTIONS[45].questions[1] = {
    question: "Yo'naltirgichlar bilan ko'rsatilgan qaysi yo'nalishlarda harakat ruxsat etilgan?",
    answers: [
        "«A»",
        "«B»",
        "«A» va «B»"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/452.jpg"
};

// 453-savol (46-bilet, 3-savol)
QUESTIONS[45].questions[2] = {
    question: "Bu yo'l chizig'i nimani bildiradi?",
    answers: [
        "Faqat avtobus harakatlanishi uchun mo'ljallangan bo'lakni bildiradi",
        "Faqat belgilangan yo'nalishdagi transport vositalari harakatlanishi uchun mo'ljallangan bo'lakni bildiradi",
        "Avtobus va trolleybuslar harakatlanishi uchun mo'ljallangan bo'lakni bildiradi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/453.jpg"
};

// 454-savol (46-bilet, 4-savol)
QUESTIONS[45].questions[3] = {
    question: "Chorrahani ikkinchi bo'lib kim kesib o'tadi?",
    answers: [
        "Yashil avtomobil",
        "Qizil avtomobil",
        "Ko'k avtomobil",
        "Sariq avtomobil"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/454.jpg"
};

// 455-savol (46-bilet, 5-savol)
QUESTIONS[45].questions[4] = {
    question: "Mototsiklning haydovchisi qanday holda chapga to'g'ri burildi?",
    answers: [
        "Chorrahaga chiqdi, yuk avtomobilini o'tkazib yubordi, burilishni tugalladi",
        "Chorrahaga chiqdi va tartibga soluvchining ruxsat etuvchi ishorasini kutib, burilishni tugalladi",
        "Chorrahaga chiqmasdan to'xtab, tartibga soluvchining chapga burilishga ruxsat etuvchi ishorasini kutib, burilishni tugalladi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/455.jpg"
};

// 456-savol (46-bilet, 6-savol)
QUESTIONS[45].questions[5] = {
    question: "Ko'k avtomobilga qaysi yo'nalishda harakatlanishga ruxsat etiladi?",
    answers: [
        "Faqat orqa yo'nalishda",
        "To'g'riga, chap va orqa yo'nalishda",
        "Chap va orqa yo'nalishda",
        "Barcha yo'nalishlarda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/456.jpg"
};

// 457-savol (46-bilet, 7-savol)
QUESTIONS[45].questions[6] = {
    question: "Qayta tizilish oldidan ogohlantiruvchi ishora qachon berilishi kerak?",
    answers: [
        "Bevosita manyovrni bajarishni boshlash oldidan",
        "Manyovrni bajarishni boshlagandan so'ng zudlik bilan",
        "Manyovrni bajarishni boshlamasidan oldinroq"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 458-savol (46-bilet, 8-savol)
QUESTIONS[45].questions[7] = {
    question: "Burilish vaqtida qatnov qismining kesishmasidan chiqishda transport vositasi qayerda bo'lmasligi kerak?",
    answers: [
        "Chap tasmada, agar o'ng tasma bo'sh bo'lsa",
        "Qarama-qarshi harakat tomonida",
        "Agar bir yo'nalishda harakatlanish uchun uchtadan kam bo'lmagan tasma bo'lganda, chap tasmada",
        "Ruxsat etilgan to'la vazni 3,5 tonnadan ortiq bo'lgan faqat yuk avtomobillariga bir yo'nalishda harakatlanishi uchun ikkita tasma bo'lsa, chap tasmada"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 459-savol (46-bilet, 9-savol)
QUESTIONS[45].questions[8] = {
    question: "Yo'lning chapga burilishiga yaqinlashganingizda, u o'ylaganingizdan ko'ra ancha keskinroq burilish bo'lib chiqsa, Siz:",
    answers: [
        "Tezlikni o'zgartirmay yo'l qatnov qismining chap yoqasidan harakatni davom ettirishingiz kerak",
        "Harakat tezligini kamaytirishingiz kerak",
        "Burilishdan tezroq o'tish uchun tezlikni oshirishingiz kerak"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 460-savol (46-bilet, 10-savol)
QUESTIONS[45].questions[9] = {
    question: "Furgon yukxonasida odamlarni tashishga ruxsat etiladimi?",
    answers: [
        "Taqiqlanadi",
        "Ruxsat etiladi",
        "Agar ularning tuzilishi odamlarni tashishga moslashtirilgan bo'lsa, ruxsat etiladi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};
// 461-savol (47-bilet, 1-savol)
QUESTIONS[46].questions[0] = {
    question: "Harakatni boshlashdan avval shaharlararo avtobus haydovchilari nima qilishlari kerak?",
    answers: [
        "Yo'lovchilarga halokat bo'lganda chiqish joylaridan foydalanish haqida tushuntirish",
        "Yo'lovchilarga chiqish, undan tushish va unga joylashish tartibi haqida tushuntirish",
        "Yo'lovchilarga harakatlanish vaqtida salon ichida yurishlari mumkun emasligi haqida tushuntirish"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 462-savol (47-bilet, 2-savol)
QUESTIONS[46].questions[1] = {
    question: "Chorrahada harakatlanishning majburiy yo'nalishini qaysi belgi ko'rsatadi?",
    answers: ["1", "2", "3", "4", "5"],
    correct: 3, // F4 to'g'ri
    image: "images/462.jpg"
};

// 463-savol (47-bilet, 3-savol)
QUESTIONS[46].questions[2] = {
    question: "Ushbu tik chizig'i nimani bildiradi?",
    answers: [
        "Yo'llar ostin-ustun o'tadigan chorrahalarni",
        "Harakatlanish tezligi 40 km/soatgacha cheklangan qismini",
        "Yo'l inshootlarining harakatdagi transport vositalariga xavf tug'diradigan tik elementlarini"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/463.jpg"
};

// 464-savol (47-bilet, 4-savol)
QUESTIONS[46].questions[3] = {
    question: "Transport vositalari haydovchilari avtobus yoki trolleybusga yo'l berishlari kerak:",
    answers: [
        "Agar u harakatni to'xtash joyidan boshlasa",
        "Agar u «tig'iz» soatda marshrut bo'yicha harakat qilsa",
        "Aholi punktlarida, agar belgilangan to'xtash joyidan (bekatlardan) harakatni boshlasa"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 465-savol (47-bilet, 5-savol)
QUESTIONS[46].questions[4] = {
    question: "Harakatlanishga ruxsat etilgan barcha transport vositalari qaysi javobda to'g'ri ko'rsatilgan?",
    answers: [
        "Avtomobillar va mototsikl",
        "Barcha transport vositalari",
        "Avtomobillar va tramvay"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/465.jpg"
};

// 466-savol (47-bilet, 6-savol)
QUESTIONS[46].questions[5] = {
    question: "Qaysi transport vositasining haydovchisi yo'l berishi kerak?",
    answers: [
        "Avtomobil haydovchisi",
        "Tramvay haydovchisi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/466.jpg"
};

// 467-savol (47-bilet, 7-savol)
QUESTIONS[46].questions[6] = {
    question: "Ko'k avtomobil haydovchisiga quvib o'tish ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi",
        "Ruxsat etiladi, agar qizil avtomobil 40 km/soatdan kam tezlik bilan harakatlanayotgan bo'lsa"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/467.jpg"
};

// 468-savol (47-bilet, 8-savol)
QUESTIONS[46].questions[7] = {
    question: "Quyidagi qaysi suratda haydovchi avtomobilni qoidaga xilof ravishda to'xtab turishga qo'ygan?",
    answers: [
        "Faqat chapdagi",
        "Chap va o'rtadagi",
        "Barchasida"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/468.jpg"
};

// 469-savol (47-bilet, 9-savol)
QUESTIONS[46].questions[8] = {
    question: "Sirpanchiq yo'lda yurgizgich bilan tormozlashni qo'llash orqa uzatmali avtomobil uchun:",
    answers: [
        "Avtomobil turg'unligini oshiradi",
        "Avtomobil turg'unligini kamaytiradi",
        "Avtomobil turg'unligiga hech qanday ta'sir ko'rsatmaydi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 470-savol (47-bilet, 10-savol)
QUESTIONS[46].questions[9] = {
    question: "Davlat YHX xizmati ruxsatisiz transport vositasining yuk bilan yoki yuksiz harakatlanishiga qanday yuqori maksimal kenglikda yo'l qo'yiladi?",
    answers: ["2,0 m", "2,55 m", "3,8 m", "4,0 m", "5,0 m"],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 471-savol (48-bilet, 1-savol)
QUESTIONS[47].questions[0] = {
    question: "Ko'k avtomobil chorrahani kesib o'tadi:",
    answers: [
        "Birinchi bo'lib ayni bir vaqtda qizil bilan",
        "Ikkinchi bo'lib ayni bir vaqtda qizil bilan",
        "Uchinchi bo'lib ayni bir vaqtda qizil bilan"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/471.jpg"
};

// 472-savol (48-bilet, 2-savol)
QUESTIONS[47].questions[1] = {
    question: "Qaysi belgi to'xtamasdan o'tishni taqiqlaydi?",
    answers: ["1", "2", "3", "4", "5"],
    correct: 3, // F4 to'g'ri
    image: "images/472.jpg"
};

// 473-savol (48-bilet, 3-savol)
QUESTIONS[47].questions[2] = {
    question: "Ushbu tik chizig'i nimani bildiradi?",
    answers: [
        "Yo'lning xavfli joylaridagi harakatlanish bo'lagi yuzasini bildiradi",
        "Yo'lning boshqa qismlarida yo'l chetidagi to'siqlarning yon chegarasini belgilaydi",
        "Xavfli yo'l qismlarida bordyurlarni belgilaydi",
        "Yo'naltiruvchi ustunchalar, beton yoki temir-beton ustunchalar, to'siq ustunchalari va shunga o'xshash elementlarni bildiradi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/473.jpg"
};

// 474-savol (48-bilet, 4-savol)
QUESTIONS[47].questions[3] = {
    question: "Haydovchi oq hassa bilan ishora berayotgan ko'zi ojiz piyodalarni o'tkazib yuborishi kerakmi?",
    answers: [
        "Barcha hollarda o'tkazib yuborishi kerak, shu jumladan, piyodalar o'tish joylardan tashqarida ham",
        "Tartibga solinadigan piyodalar o'tish joyida o'tkazib yuborishi kerak",
        "Tartibga solinmagan piyodalar o'tish joyida o'tkazib yuborishi kerak",
        "Har qanday piyodalar o'tish joyida o'tkazib yuborishi kerak"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 475-savol (48-bilet, 5-savol)
QUESTIONS[47].questions[4] = {
    question: "Qaysi rasmda haydovchi to'g'ri burilmoqda?",
    answers: [
        "Chapdagi rasmda",
        "O'ngdagi rasmda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/475.jpg"
};

// 476-savol (48-bilet, 6-savol)
QUESTIONS[47].questions[5] = {
    question: "Qaysi avtomobil to'xtab turishga to'g'ri qo'yilgan?",
    answers: [
        "Yengil avtomobil",
        "Har ikkisi noto'g'ri qo'yilgan",
        "Har ikkisi to'g'ri qo'yilgan",
        "Yuk avtomobili"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/476.jpg"
};

// 477-savol (48-bilet, 7-savol)
QUESTIONS[47].questions[6] = {
    question: "Agar qatnov qismining kengligi chetki chap tasmadan qayrilib olish uchun yetarli bo'lmasa, qoidalar qayrilib olishni qatnov qismining o'ng chekkasi yoki yo'lning o'ng yoqasidan amalga oshirishga yo'l qo'yadimi?",
    answers: [
        "Qatnov qismining faqat o'ng chekkasidan yo'l qo'yadi. Yo'lning o'ng yoqasidan yo'l qo'yilmaydi",
        "Yo'l qo'yiladi. Bunda qayrilib olayotgan haydovchi yo'lakay va qarama-qarshi kelayotgan transport vositalarini o'tkazib yuborishi kerak",
        "Yo'l qo'yilmaydi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 478-savol (48-bilet, 8-savol)
QUESTIONS[47].questions[7] = {
    question: "Aholi punktlarida relssiz transport vositalariga, agar bir yo'nalishda uch va undan ortiq harakatlanish tasmasi bo'lganda qaysi tasmadan harakatlanishga ruxsat etiladi? Yuk avtomobillari hisobga kirmaydi",
    answers: [
        "Har qanday tasma bo'yicha",
        "Iloji boricha qatnov qismining o'ng chekkasiga yaqin tasma bo'yicha",
        "Chapki chekkadan tashqari har qanday tasma bo'yicha. Unga faqat boshqa tasmalarda harakat serqatnov bo'lganda, shuningdek, chapga burilish, orqaga qayrilish va bir tomonlama harakat tashkil qilingan yo'lda to'xtash uchun o'tishga ruxsat etiladi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 479-savol (48-bilet, 9-savol)
QUESTIONS[47].questions[8] = {
    question: "Svetoforning bir vaqtda yoqilgan qizil va sariq ishoralari nimani bildiradi?",
    answers: [
        "Harakatni boshlash mumkin",
        "Harakatni taqiqlaydi va tezda yashil ishora yoqilishi haqida ogohlantiradi",
        "Chorrahaga maxsus ovoz yoki miltillovchi chiroq bilan ishora berayotgan transport vositasi yaqinlashib kelayotganligini"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/479.jpg"
};

// 480-savol (48-bilet, 10-savol)
QUESTIONS[47].questions[9] = {
    question: "Avtomobilga o'rnatilgan bu taniqlik belgi nimani bildiradi?",
    answers: [
        "Avtomobil shifokor haydovchiga tegishli ekanini",
        "Avtomobil haydovchi nogironga tegishli ekanini",
        "Avtomobil uyda tibbiy yordam ko'rsatish uchun mo'ljallanganligini"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/480.jpg"
};


// 481-savol (49-bilet, 1-savol)
QUESTIONS[48].questions[0] = {
    question: "Bu yerda avtomobil to'xtashiga ruxsat berilganmi?",
    answers: [
        "Taqiqlangan, chunki uzuq-uzuq yotiq chiziq bilan to'xtab turgan va avtomobil orasidagi masofa 3 metrdan kam",
        "Oyning juft kunlarida taqiqlangan",
        "Ruxsat berilgan"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/481.jpg"
};

// 482-savol (49-bilet, 2-savol)
QUESTIONS[48].questions[1] = {
    question: "Bu belgi qaysi transport vositalariga tegishli emas?",
    answers: [
        "Traktorlar va o'zi yurar avtomobillarga",
        "Avtobuslar va mikroavtobuslarga",
        "Belgi ta'sirida joylashgan korxonalarga xizmat etayotgan transport vositasiga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/482.jpg"
};

// 483-savol (49-bilet, 3-savol)
QUESTIONS[48].questions[2] = {
    question: "Qaysi transport vositalari yo'lovchilarni tushirish uchun noto'g'ri to'xtagan?",
    answers: [
        "Qizil avtomobil",
        "Ko'k avtomobil",
        "Mototsikl",
        "Har ikki avtomobil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/483.jpg"
};

// 484-savol (49-bilet, 4-savol)
QUESTIONS[48].questions[3] = {
    question: "Bu yo'l belgisi nimani bildiradi?",
    answers: [
        "Shlagbaum bilan jihozlanmagan bir izli temir yo'l kesishmasini",
        "Shlagbaum bilan jihozlangan bir izli temir yo'l kesishmasini",
        "Shlagbaum bilan jihozlanmagan ikki va undan ko'p izli temir yo'l kesishmasini"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/484.jpg"
};

// 485-savol (49-bilet, 5-savol)
QUESTIONS[48].questions[4] = {
    question: "Harakatlanish taqiqlangan:",
    answers: [
        "Ko'k avtomobilga - chapga",
        "Ko'k avtomobilga - to'g'riga, qizil avtomobilga - to'g'riga va o'ngga",
        "Qizil avtomobilga to'g'riga va o'ngga"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/485.jpg"
};

// 486-savol (49-bilet, 6-savol)
QUESTIONS[48].questions[5] = {
    question: "Sekinlashish bo'lagi bo'lgan yo'da qaysi transport vositasi undan chiqish qoidasini buzdi?",
    answers: [
        "Har ikki transport vositasi",
        "Sariq avtomobil",
        "Har ikki transport vositasi to'g'ri burilyapti"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/486.jpg"
};

// 487-savol (49-bilet, 7-savol)
QUESTIONS[48].questions[6] = {
    question: "Ko'rsatilgan belgilardan qaysi biri avtomagistrallarga o'rnatiladi?",
    answers: ["1", "2", "3", "4", "5"],
    correct: 2, // F3 to'g'ri
    image: "images/487.jpg"
};

// 488-savol (49-bilet, 8-savol)
QUESTIONS[48].questions[7] = {
    question: "Haydovchining o'zi aniqlay oladigan harakatlanish uchun to'sqinlik yoki xavf tug'ilganda qanday choralar ko'rishi kerak?",
    answers: [
        "Xavfsizlik choralariga rioya qilgan holda tezlikni kamaytirishi va xavfli yo'l qismidan o'tishi",
        "Tezlikni transport vositasi to'xtagunicha kamaytirishi yoki to'sqiqni aylanib o'tishning boshqa harakat qatnashchilari uchun xavfsiz choralarini ko'rishi",
        "Sodir bo'lgan hodisa haqida Ichki ishlarga xabar berishi",
        "Davlat YHX xizmatining eng yaqin mahkamasiga yoki ichki ishlar idorasiga kelishi va paydo bo'lgan to'sqinliklar yoki xavf-xatar to'g'risida xabar berishi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 489-savol (49-bilet, 9-savol)
QUESTIONS[48].questions[8] = {
    question: "Jabrlanuvchining yurak faoliyati yoki nafas olishi to'xtaganda, unga qanday ketma-ketlikda birinchi yordam ko'rsatish zarur?",
    answers: [
        "Yurakni massaj qilish, nafas yo'llarini bo'shatish, sun'iy nafas oldirish",
        "Sun'iy nafas oldirish, yurakni ustidan massaj qilish, nafas yo'llarini bo'shatish",
        "Nafas yo'llarini bo'shatish, sun'iy nafas oldirish va yurakni ustidan massaj qilish"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 490-savol (49-bilet, 10-savol)
QUESTIONS[48].questions[9] = {
    question: "Sanab o'tilgan shartlardan qay birida avtomobillar va avtopoyezdlardan foydalanish taqiqlanadi?",
    answers: [
        "Gidravlik tormoz tizimining zichligi buzilganda",
        "Tormoz tizimining samaradorligi qoida talablariga javob beradi",
        "To'xtab turish tormoz tizimi harakatsiz holatda to'la vazndagi transport vositalarini 16 foizidan kam bo'lmagan qiyalikda ushlab tura olganda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};


// 491-savol (50-bilet, 1-savol)
QUESTIONS[49].questions[0] = {
    question: "Qaysi belgi agar yuk avtomobilining tirkamasi bilan birga ruxsat etilgan to'liq vazni 7 tonnaga teng bo'lsa, tirkamali avtomobillarning harakatlanishini taqiqlaydi?",
    answers: ["1", "2", "3", "4", "5"],
    correct: 3, // F4 to'g'ri
    image: "images/491.jpg"
};

// 492-savol (50-bilet, 2-savol)
QUESTIONS[49].questions[1] = {
    question: "Belgilardan qay biri ajratuvchi mintaqasi bo'lgan yo'lning harakat uchun yopiq qatnov qismini aylanib o'tish yo'nalishini ko'rsatadi?",
    answers: ["1", "2", "3", "4", "5"],
    correct: 4, // F5 to'g'ri
    image: "images/492.jpg"
};

// 493-savol (50-bilet, 3-savol)
QUESTIONS[49].questions[2] = {
    question: "Yo'l chizig'i bilan ajratilgan bekat maydonchasidan harakatlanish uchun foydalanishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi",
        "To'xtash joyida tramvay bo'lmaganda ruxsat etiladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/493.jpg"
};

// 494-savol (50-bilet, 4-savol)
QUESTIONS[49].questions[3] = {
    question: "Chorrahani transport vositalari quyidagi tartibda kesib o'tadilar:",
    answers: [
        "Hamma bir vaqtda",
        "Ko'k, qizil, yashil",
        "Ko'k ayni vaqtda yashil bilan, qizil",
        "Qizil, yashil bilan, ko'k"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/494.jpg"
};

// 495-savol (50-bilet, 5-savol)
QUESTIONS[49].questions[4] = {
    question: "Harakatlanish ruxsat etilgan:",
    answers: [
        "Qizil avtomobilga",
        "Mototsiklga",
        "Tramvayga va qizil avtomobilga",
        "Tramvayga",
        "Ko'k avtomobilga"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/495.jpg"
};

// 496-savol (50-bilet, 6-savol)
QUESTIONS[49].questions[5] = {
    question: "Mazkur vaziyatda qizil avtomobilga quvib o'tishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi",
        "Quvib o'tilayotgan transport vositasining tezligi 40 km/soatdan kam bo'lganda ruxsat etiladi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/496.jpg"
};

// 497-savol (50-bilet, 7-savol)
QUESTIONS[49].questions[6] = {
    question: "Haydovchi aholi punktidan tashqarida harakat qoidalarini buzmoqdami?",
    answers: [
        "Ha",
        "Yo'q"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/497.jpg"
};

// 498-savol (50-bilet, 8-savol)
QUESTIONS[49].questions[7] = {
    question: "Transport vositalarining temir yo'l kesishmasiga qancha masofadan yaqinroqda to'xtab turishlari taqiqlanadi?",
    answers: ["300 m", "150 m", "100 m", "50 m", "25 m"],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 499-savol (50-bilet, 9-savol)
QUESTIONS[49].questions[8] = {
    question: "Agar jonlantirishni (reanimatsiyani) 2 kishi bir vaqtda olib borganda, yurakni bilvosita massaj qilish va sun'iy nafas oldirish qanday bajariladi?",
    answers: [
        "Bir marta ko'krak qafasi bosiladi, bir marta havo puflanadi va hokazo",
        "Ikki marta havo puflanadi, so'ng yurak sohasi 30 marta bosiladi va hokazo",
        "2-3 marta havo puflangandan so'ng 15 marta ko'krak qafasi bosiladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 500-savol (50-bilet, 10-savol)
QUESTIONS[49].questions[9] = {
    question: "Tashiladigan yuk vaznini va o'qlar bo'yicha tushadigan og'irlikni taqsimlashni kim tartibga solib turadi?",
    answers: [
        "Davlat YHXX",
        "Avtoxo'jalik ma'muriyati",
        "Mazkur transport vositasini tayyorlovchi - korxona"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 501-savol (51-bilet, 1-savol)
QUESTIONS[50].questions[0] = {
    question: "Belgilangan yo'nalishli transport vositalariga qaysilar kiradi?",
    answers: [
        "Avtobus va yo'nalishli taksilar",
        "Tramvay va trolleybuslar",
        "Belgilangan yo'nalish bo'yicha harakatlanadigan avtobus, trolleybus, tramvay va yo'nalishli taksilar"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 502-savol (51-bilet, 2-savol)
QUESTIONS[50].questions[1] = {
    question: "Qaysi belgi chapga burilishga ruxsat beradi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/502.jpg"
};

// 503-savol (51-bilet, 3-savol)
QUESTIONS[50].questions[2] = {
    question: "Bu belgi o'rnatilgan yo'lda avtobuslarga harakatlanish ruxsat etiladimi?",
    answers: [
        "Faqat ruxsat etilgan to'la vazni 3,5 tonnadan ortiq bo'lmagan avtomobilga ruxsat etiladi",
        "Taqiqlanadi",
        "Ruxsat etiladi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/503.jpg"
};

// 504-savol (51-bilet, 4-savol)
QUESTIONS[50].questions[3] = {
    question: "Chorrahani oxirgi bo'lib kesib o'tadi:",
    answers: [
        "Ko'k avtomobil",
        "Yashil avtomobil",
        "Qizil avtomobil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/504.jpg"
};

// 505-savol (51-bilet, 5-savol)
QUESTIONS[50].questions[4] = {
    question: "Qaysi transport vositalariga harakatlanish ruxsat etiladi?",
    answers: [
        "Sariq va qizil avtomobilga",
        "Yashil, qizil va oq avtomobilga",
        "Oq va yashil avtomobilga"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/505.jpg"
};

// 506-savol (51-bilet, 6-savol)
QUESTIONS[50].questions[5] = {
    question: "Yo'lovchilarni tushirish uchun qaysi transport vositalari to'g'ri to'xtadi?",
    answers: [
        "Yengil avtomobil",
        "Mototsikl",
        "Avtobus",
        "Barcha transport vositalari"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/506.jpg"
};

// 507-savol (51-bilet, 7-savol)
QUESTIONS[50].questions[6] = {
    question: "Bunday yo'l belgisi bilan belgilangan yo'l qismlarida ruxsat etilgan to'la vazni 3,5 tonnadan ortiq bo'lgan yuk avtomobillarining qanday yuqori tezlik bilan harakatlanishiga ruxsat etiladi?",
    answers: [
        "60 km/s",
        "90 km/s",
        "80 km/s",
        "70 km/s"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/507.jpg"
};

// 508-savol (51-bilet, 8-savol)
QUESTIONS[50].questions[7] = {
    question: "Ko'k avtomobil haydovchisi nima qilishi kerak?",
    answers: [
        "Sariq avtomobilga u orqadan kelayotgani uchun yo'l bermay, mo'ljallangan yo'nalishda chorrahani kesib o'tishi",
        "Qarama-qarshi harakat bo'lagiga darhol qayta tizilishi",
        "Tezlikni kamaytirishi, sariq, avtomobilga quvib o'tishni tugallashiga imkon berishi, so'ng esa chapga burilishi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/508.jpg"
};

// 509-savol (51-bilet, 9-savol)
QUESTIONS[50].questions[8] = {
    question: "«Gazel» yuk avtomobilining yuk bilan balandligi yo'l sathiidan 3,8 metr bo'lsa, uni tashish mumkinmi?",
    answers: [
        "Ruxsat beriladi",
        "Ruxsat berilmaydi",
        "Ruxsat beriladi, faqat yo'nalishlarda osma ko'priklar, osma yo'llar (estakada) bo'lmasa"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 510-savol (51-bilet, 10-savol)
QUESTIONS[50].questions[9] = {
    question: "Agar pnevmatik uzatmaning zichligi buzilib, kompressor ishlamay turganda boshqaruv asboblarining erkin holatida havo bosimining 30 daqiqada qancha MPa-ga pasayishiga sabab bo'lsa, tormoz tizimi nosoz hisoblanadi?",
    answers: [
        "0,025",
        "0,035",
        "0,05",
        "0,055",
        "0,06"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};


// 511-savol (52-bilet, 1-savol)
QUESTIONS[51].questions[0] = {
    question: "Avtomobil harakatlanayotganda kutilmaganda shinasi yorilib ketsa, haydovchi nima qilishi zarur?",
    answers: [
        "Ishchi tormoz bilan to'la to'xtaguncha keskin tormozlash",
        "Avtomobilni to'xtab turish tormozi yordamida to'xtatish",
        "Rulni ushlab turish, to'g'ri chiziqda harakatni saqlash, tezlikni kamaytirish va to'xtatish"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 512-savol (52-bilet, 2-savol)
QUESTIONS[51].questions[1] = {
    question: "Belgilardan qaysi biri bevosita yo'lning xavfli qismi oldiga o'rnatiladi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 4, // F5 to'g'ri
    image: "images/512.jpg"
};

// 513-savol (52-bilet, 3-savol)
QUESTIONS[51].questions[2] = {
    question: "Bu yo'l belgisi bilan belgilangan yo'l qismida yengil avtomobilni shatakka olishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/513.jpg"
};

// 514-savol (52-bilet, 4-savol)
QUESTIONS[51].questions[3] = {
    question: "Transport vositalari chorrahani quyidagi tartibda kesib o'tadi:",
    answers: [
        "1- va 2-tramvaylar ayni vaqtda yashil avtomobil bilan; qizil; ko'k avtomobil",
        "1-tramvay ayni vaqtda yashil avtomobil bilan; qizil avtomobil; 2-tramvay va ko'k avtomobil bir vaqtda"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/514.jpg"
};

// 515-savol (52-bilet, 5-savol)
QUESTIONS[51].questions[4] = {
    question: "Transport vositalariga qaysi yo'nalish bo'yicha harakatlanishga ruxsat etiladi?",
    answers: [
        "Tramvayga chapga yoki to'g'riga",
        "Faqat avtomobilga chapga",
        "Tramvay va avtomobilga chapga",
        "Tramvayga chapga yoki to'g'riga, avtomobilga tramvaydan so'ng",
        "Tramvayga chapga, avtomobilga chapga va qayrilib olishga"
    ],
    correct: 4, // F5 to'g'ri
    image: "images/515.jpg"
};

// 516-savol (52-bilet, 6-savol)
QUESTIONS[51].questions[5] = {
    question: "Qaysi avtomobil haydovchisiga to'xtashga ruxsat etilgan?",
    answers: [
        "Yengil avtomobilning haydovchisiga",
        "Yuk avtomobilning haydovchisiga",
        "Har ikki haydovchiga",
        "Yuk avtomobilning haydovchisiga, agar bir yo'nalishda harakatlanish uchun uchta va undan ko'p tasma bo'lsa"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/516.jpg"
};

// 517-savol (52-bilet, 7-savol)
QUESTIONS[51].questions[6] = {
    question: "Qayrilib olish taqiqlanadi:",
    answers: [
        "Chorrahalarda va ularga 15 metrdan yaqinroqda",
        "Chorrahalar oldiga 15 metrdan yaqinroqda",
        "Yo'lning loaqal bir yo'nalishida 100 metrdan kamroq, qismi ko'rinadigan aholi punktlaridan tashqarida",
        "Loaqal bir yo'nalishda yo'lning 100 metrdan kamroq qismi ko'ringanda"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 518-savol (52-bilet, 8-savol)
QUESTIONS[51].questions[7] = {
    question: "Harakat tezligi 40 km/soatdan oshmaydigan transport vositasiga qatnov qismining chap bo'lagiga chiqishga qachon ruxsat etiladi?",
    answers: [
        "Quvib o'tishda, o'zib ketishda yoki aylanib o'tishda",
        "Burilish yoki qayrilib olish oldidan qayta tizilishda",
        "Sanab o'tilgan barcha hollarda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 519-savol (52-bilet, 9-savol)
QUESTIONS[51].questions[8] = {
    question: "Kim o'quv yurtlarida boshqarishni o'rgatish huquqiga ega?",
    answers: [
        "Haydashni o'rgatish huquqini beruvchi xujjatlari bo'lgan haydashni o'rgatuvchi yo'riqchi",
        "Tajribali haydovchi",
        "3 yillik ishlagan davri bo'lgan haydovchi",
        "5 yil haydovchilik ishlagan davriga ega bo'lgan 1 va 2-toifa haydovchilar"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 520-savol (52-bilet, 10-savol)
QUESTIONS[51].questions[9] = {
    question: "Yuk transport vositasining o'lchamlaridan chiqib tursa, kunning qorong'i vaqtida va yetarli ko'rinmaydigan sharoitda qanday belgilanadi?",
    answers: [
        "Ishora taxtachalari yoki bayroqchalar (diagonal bo'yicha navbatma-navbat tortilgan qizil va oq yo'lli) bilan",
        "Oldi oq rangli chiroq yoki yorug'lik qaytargich, orqasi esa qizil rangli chiroq yoki yorug'lik qaytargich bilan",
        "Orqasiga qizil, oldiga oq bayroqchalar bilan"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 521-savol (53-bilet, 1-savol)
QUESTIONS[52].questions[0] = {
    question: "Ruxsat etilgan to'liq vazn nima?",
    answers: [
        "Transport vositasining yuk ko'tarishi",
        "Transport vositasining haqiqiy vazni",
        "Jihozlangan transport vositasining ishlab chiqargan korxona tomonidan belgilangan yuk, haydovchi va yo'lovchilari bilan birgalikdagi eng yuqori vazni (o'lchovi)",
        "Transport vositisida tashiladigan yukning ishlab chiqargan korxona yo'l qo'ygan texnik tavsifnomasi sifatida belgilanadigan vazni"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 522-savol (53-bilet, 2-savol)
QUESTIONS[52].questions[1] = {
    question: "Bu belgida harakatlanish ruxsat etiladi:",
    answers: [
        "Faqat avtomobil haydovchisiga",
        "Faqat avtomobil va mototsikl haydovchilariga",
        "Barcha transport vositalarining haydovchilariga",
        "Faqat avtomobil va avtobus haydovchilariga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/522.jpg"
};

// 523-savol (53-bilet, 3-savol)
QUESTIONS[52].questions[2] = {
    question: "Avtomagistralda qatnov qismining chetini bildiruvchi sidirg'a oq chiziqni bosib o'tishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi",
        "Agar avtomagistralda harakatlanish serqatnov bo'lsa, taqiqlanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/523.jpg"
};

// 524-savol (53-bilet, 4-savol)
QUESTIONS[52].questions[3] = {
    question: "Transport vositalari chorrahani quyidagi tartibda kesib o'tadilar:",
    answers: [
        "Yashil avtomobil ayni vaqtda 2-tramvay bilan, 1 tramvay, ko'k, sariq, qizil avtomobillar",
        "1- va 2- tramvaylar ayni vaqtda sariq avtomobil bilan, yashil, ko'k, qizil avtomobillar"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/524.jpg"
};

// 525-savol (53-bilet, 5-savol)
QUESTIONS[52].questions[4] = {
    question: "Harakatlanishga ruxsat etilgan barcha transport vositalari qaysi javobda ko'rsatilgan?",
    answers: [
        "Tramvay va mototsikl",
        "Avtomobillar va mototsikl",
        "Barcha transport vositalari",
        "Tramvay, yuk avtomobili va mototsikl"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/525.jpg"
};

// 526-savol (53-bilet, 6-savol)
QUESTIONS[52].questions[5] = {
    question: "Aholi punktlarida ma'lum harakat tezligiga rioya etayotgan yirik o'lchamli transport vositasining haydovchisi qanday yo'l tutishi kerak?",
    answers: [
        "To'xtashi va orqasida to'planib qolgan transport vositalarini o'tkazib yuborishi",
        "Harakatni davom ettirishi kerak"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/526.jpg"
};

// 527-savol (53-bilet, 7-savol)
QUESTIONS[52].questions[6] = {
    question: "Mazkur vaziyatda quvib o'tishga ruxsat etilganmi?",
    answers: [
        "40 km/soatdan kam tezlik bilan harakatlanayotgan faqat yakka transport vositalariga ruxsat etilgan",
        "Taqiqlangan",
        "Barcha hollarda ruxsat etilgan"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/527.jpg"
};

// 528-savol (53-bilet, 8-savol)
QUESTIONS[52].questions[7] = {
    question: "Siz chapga burilishga yoki qayrilib olishga qaror qildingiz. Orqani ko'rsatadigan ko'zguga qarab bildingizki, ortingizdagi haydovchi Sizni quvib o'tmoqchi. Sizning bundan keyingi harakatingiz?",
    answers: [
        "Burilishning chap ko'rsatkichini yoqish va qatnov qismida qulay joylashib olishdan foydalanib, manyovr qilishga kirishish",
        "Sizning ortingizdan kelayotgan haydovchi Sizni quvib o'tib ketgandan so'nggina burilishning chap ko'rsatkichini yoqish",
        "Burilishning chap ko'rsatkichini yoqish, o'zini quvib o'tishga imkon berishi va so'ng manyovr qilishga kirishish"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 529-savol (53-bilet, 9-savol)
QUESTIONS[52].questions[8] = {
    question: "O'ng va chap g'ildiraklarining shinalari turlicha siyqalangan avtomobilda tormoz berish, qanday xavfli oqibatlarga olib kelishi mumkin?",
    answers: [
        "Tormoz barabanlarining qizib ketishiga",
        "Naqsh izlarining ko'chib ketishiga",
        "Avtomobilning ag'darilib ketishi mumkin darajada sirpanib ketishiga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 530-savol (53-bilet, 10-savol)
QUESTIONS[52].questions[9] = {
    question: "Yo'lovchi tashishga mo'ljallanmagan yuk avtomobilida yukni kuzatib boruvchi yoki qabul qilib oluvchi shaxslarning tashilishiga ruxsat beriladimi?",
    answers: [
        "Agar bort balandligidan pastda joylashgan qulay o'rindiq bo'lsa ruxsat beriladi",
        "Taqiqlanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 531-savol (54-bilet, 1-savol)
QUESTIONS[53].questions[0] = {
    question: "Quvib o'tish nima?",
    answers: [
        "Bir yoki bir nechta transport vositalarini qarama-qarshi yo'nalishda harakatlanish uchun mo'ljallangan tasmaga chiqib, so'ngra ilgari egallagan qatoriga qaytib o'tish bilan bog'liq bo'lgan o'zib ketish.",
        "Kam tezlik bilan qo'shni qatorda harakatlanayotgan bir yoki bir qancha transport vositalaridan o'zib ketish.",
        "Egallagan harakatlanish bo'lagidan chiqib oldinda ketayotgan transport vositasidan o'zib ketish."
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 532-savol (54-bilet, 2-savol)
QUESTIONS[53].questions[1] = {
    question: "Qaysi belgi yo'lning bir tomonlamali harakatlanish yo'l qismini ko'rsatadi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 2, // F3 to'g'ri (3-belgi)
    image: "images/532.jpg"
};

// 533-savol (54-bilet, 3-savol)
QUESTIONS[53].questions[2] = {
    question: "Haydovchi, agar uning transport vositasi 40 km/soatga teng yoki undan ortiq tezlik bilan balandlikka chiqa olmasa, nima chora ko'rishi kerak?",
    answers: [
        "Asosiy tasma bo'yicha, agar unda boshqa transport vositalari yo'q bo'lsa, harakatlanishni davom ettirishi",
        "Qo'shimcha tasmaga qayta tizilishi",
        "Agar balandlikning davomliligi 30 metrdan oshmasa, asosiy tasma bo'yicha harakatlanishni davom ettirishi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/533.jpg"
};

// 534-savol (54-bilet, 4-savol)
QUESTIONS[53].questions[3] = {
    question: "Avtomobillar chorrahani quyidagi tartibda kesib o'tadilar:",
    answers: [
        "Sariq chorrahaga chiqadi va yashilni o'tkazib yuborish uchun to'xtaydi; yashil, ko'k ayni vaqtda qizil bilan; sariq",
        "Ko'k ayni vaqtda qizil bilan; yashil; sariq",
        "Yashil; ko'k ayni vaqtda qizil; so'ng sariq"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/534.jpg"
};

// 535-savol (54-bilet, 5-savol)
QUESTIONS[53].questions[4] = {
    question: "Qaysi rasmda haydovchi o'ngga to'g'ri burilyapti?",
    answers: [
        "1",
        "2"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/535.jpg"
};

// 536-savol (54-bilet, 6-savol)
QUESTIONS[53].questions[5] = {
    question: "Qaysi transport vositasining haydovchisi to'xtash qoidasini buzdi?",
    answers: [
        "Faqat mototsikl haydovchisi",
        "Faqat avtomobil haydovchisi",
        "Har ikkisi buzdi",
        "Hech kim buzmadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/536.jpg"
};

// 537-savol (54-bilet, 7-savol)
QUESTIONS[53].questions[6] = {
    question: "Qizil avtomobil haydovchisiga tramvay yo'li bo'yicha harakatlanishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/537.jpg"
};

// 538-savol (54-bilet, 8-savol)
QUESTIONS[53].questions[7] = {
    question: "Chiziqlar bilan tasmalarga ajratilgan yo'lning qatnov qismida transport vositalarining harakatlanishi qanday amalga oshirilishi kerak?",
    answers: [
        "Qat'iy tasmalar bo'yicha, uzuq-uzuq chiziqni kesib o'tishga faqat qayta tizilishda ruxsat etiladi",
        "Agar qatnov qismi transport vositalaridan xoli bo'lsa, tasma bo'yicha qat'iy emas",
        "Agar transport vositalarining o'lchamlari eniga katta bo'lmasa, tasma bo'yicha qat'iy emas",
        "Agar qatnov qismida tirkamali avtomobillar bo'lmasa va bunda ancha tor harakat oralig'ini saqlash mumkin bo'lsa, tasmalar bo'yicha qat'iy emas"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 539-savol (54-bilet, 9-savol)
QUESTIONS[53].questions[8] = {
    question: "Boldir suyagi o'rtasidan singanda transportda tashish uchun taxtakach yoki uning o'rnini o'tovchi narsa qanday qo'yiladi?",
    answers: [
        "Singan joyga qo'yiladigan shina yoki uning o'rnini bosuvchi narsani siqib bog'lash kerak",
        "Shinani ikki tomondan butun boldir uzunligida tovondan to tizza bo'g'inigacha qo'yish kerak",
        "Tovon tagidan to son o'rtasigacha oyoqning ichki va tashqi tomonidan ikkita shina qo'yish kerak. Singan joyni, tizza va boldir-oyoq kafti bo'g'inlarini qimirlatmaslik lozim"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 540-savol (54-bilet, 10-savol)
QUESTIONS[53].questions[9] = {
    question: "Qanday shartlarda transport vositalaridan foydalanish taqiqlanadi?",
    answers: [
        "Faralar yoritishi buzilgan bo'lsa",
        "Tashqi yoritish asboblari va yorug'lik qaytargichlar ifloslanganda",
        "Yoritish asboblari o'rnida mazkur yoritish asboblarining turiga mos kelmaydigan lampalardan foydalanilganda",
        "Sanab o'tilgan barcha hollarda"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 541-savol (55-bilet, 1-savol)
QUESTIONS[54].questions[0] = {
    question: "Mazkur belgi nima haqida axborot beradi?",
    answers: [
        "Trolleybus yoki avtobus to'xtash joylarini bildiradi",
        "Marshrutdan boshqa barcha transport vositalariga yo'lning o'ng qatori bo'yicha harakatlanishni taqiqlaydi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/541.jpg"
};

// 542-savol (55-bilet, 2-savol)
QUESTIONS[54].questions[1] = {
    question: "Qaysi belgi shlagbaumli temir yo'l kesishmasiga yaqinlashganlik haqida ogohlantiradi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 3, // F4 to'g'ri (4-belgi)
    image: "images/542.jpg"
};

// 543-savol (55-bilet, 3-savol)
QUESTIONS[54].questions[2] = {
    question: "Bu belgida yuk avtomobillaridan qaysi biriga harakatlanishni davom ettirishga ruxsat etiladi?",
    answers: [
        "Yukxonasida odamlar bo'lgan maxsus moslashtirilgan yuk avtomobillarga",
        "Furgon-yukxonada mahsulotlar tashiydigan avtomobillarga",
        "«Aloqa» yozuvi bo'lgan avtomobillarga"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/543.jpg"
};

// 544-savol (55-bilet, 4-savol)
QUESTIONS[54].questions[3] = {
    question: "Zanjirli bo'lgan qishloq xo'jalik, yo'l qurilishi va boshqa mexanik transport vositalariga temir yo'l kesishmasidan o'tishga ruxsat etiladimi?",
    answers: [
        "Agar temir yo'l boshlig'ining ruxsati bo'lsa, ruxsat etiladi",
        "Mexanik transport vositalariga yuklab olib o'tish ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 545-savol (55-bilet, 5-savol)
QUESTIONS[54].questions[4] = {
    question: "Harakatlanish qaysi yo'nalishda ruxsat etilgan?",
    answers: [
        "To'g'riga va o'ngga birinchi yo'nalishga",
        "O'ngga birinchi yo'nalishga",
        "O'ngga ikkinchi yo'nalishga",
        "O'ngga birinchi va ikkinchi yo'nalishga"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/545.jpg"
};

// 546-savol (55-bilet, 6-savol)
QUESTIONS[54].questions[5] = {
    question: "Chorrahani oxiri kesib o'tadi:",
    answers: [
        "Qizil avtomobil",
        "Ko'k avtomobil",
        "Yashil avtomobil"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/546.jpg"
};

// 547-savol (55-bilet, 7-savol)
QUESTIONS[54].questions[6] = {
    question: "Bu yo'l belgisi:",
    answers: [
        "Ikki g'ildirakli kajavasiz mototsikllardan tashqari hamma mexanik transport vositalarining harakatlanishini taqiqlaydi",
        "G'ildirakli traktorlardan tashqari hamma transport vositalarining harakatlanishini taqiqlaydi",
        "Traktorlar va o'zi yurar mashinalarning harakatlanishi taqiqlanadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/547.jpg"
};

// 548-savol (55-bilet, 8-savol)
QUESTIONS[54].questions[7] = {
    question: "Transport vositalari chorrahadan quyidagi tartibda o'tadilar:",
    answers: [
        "Ko'k avtomobil, tramvay, qizil avtomobil",
        "Tramvay, qizil, so'ngra ko'k avtomobil",
        "Tramvay, ko'k avtomobil chorrahaga chiqadi, qizilga yo'l beradi, so'ngra burilishni tugallaydi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/548.jpg"
};

// 549-savol (55-bilet, 9-savol)
QUESTIONS[54].questions[8] = {
    question: "Egiluvchan ulagichda shatakka olganda transport vositalari orasidagi masofa qanday bo'lishi kerak?",
    answers: [
        "1-3 m",
        "2-4 m",
        "3-6 m",
        "4-6 m",
        "4-8 m"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 550-savol (55-bilet, 10-savol)
QUESTIONS[54].questions[9] = {
    question: "Qanday nosozlik bo'lganda, transport vositalarining harakatlanishni DAVOM ETTIRISHI taqiqlanadi?",
    answers: [
        "Transport vositalarining tuzilishida ko'zda tutilgan oyna yuvgichlari ishlamasa",
        "Tashqi yoritish asboblari va nur qaytargichlar belgilangan tartibda ishlamasa yoki ifloslangan",
        "Yomg'ir yoki qor yog'ayotgan vaqtda haydovchi tomonidagi oyna tozalagich ishlamasa",
        "Sanab o'tilgan barcha hollarda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 551-savol (56-bilet, 1-savol)
QUESTIONS[55].questions[0] = {
    question: "Yonilg'i quyish joyidan yo'lga chiqish chorraha hisoblanadimi?",
    answers: [
        "Hisoblanmaydi",
        "Hisoblanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 552-savol (56-bilet, 2-savol)
QUESTIONS[55].questions[1] = {
    question: "Qaysi belgi «Mehmonxona»ni bildiradi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 2, // F3 to'g'ri (3-belgi)
    image: "images/552.jpg"
};

// 553-savol (56-bilet, 3-savol)
QUESTIONS[55].questions[2] = {
    question: "Belgilarning ta'siri qaysi transport vositalariga tatbiq etiladi?",
    answers: [
        "Faqat yuk avtomobillariga",
        "Yengil avtomobillarga va mototsikllarga",
        "Faqat yengil avtomobillarga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/553.jpg"
};

// 554-savol (56-bilet, 4-savol)
QUESTIONS[55].questions[3] = {
    question: "Chorrahani oxirgi bo'lib kim kesib o'tadi?",
    answers: [
        "Qizil avtomobil",
        "Ko'k avtomobil",
        "Yashil avtomobil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/554.jpg"
};

// 555-savol (56-bilet, 5-savol)
QUESTIONS[55].questions[4] = {
    question: "Qizil avtomobil chorrahani kesib o'tadi:",
    answers: [
        "Birinchi bo'lib",
        "Ikkinchi bo'lib"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/555.jpg"
};

// 556-savol (56-bilet, 6-savol)
QUESTIONS[55].questions[5] = {
    question: "Shaharlararo qatnaydigan avtobusning haydovchisiga aholi punktlaridan tashqarida tezlikni 80 km/soatdan oshirishga ruxsat etiladimi?",
    answers: [
        "Faqat shu yo'nalishda harakatlanish uchun ikki yoki undan ortiq tasma bo'lgan yo'llarda harakatlanganda ruxsat etiladi",
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 557-savol (56-bilet, 7-savol)
QUESTIONS[55].questions[6] = {
    question: "Bu joyda to'xtashga ruxsat etilganmi?",
    answers: [
        "Ruxsat etilgan",
        "Taqiqlangan"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/557.jpg"
};

// 558-savol (56-bilet, 8-savol)
QUESTIONS[55].questions[7] = {
    question: "Aholi punktidan tashqarida transport vositalarining uzoq to'xtab turishi (dam olish, tunash va hokazo)ga qayerda ruxsat etiladi?",
    answers: [
        "Yo'l chetida",
        "To'xtab turish maydonchalarida yoki yo'ldan tashqarida",
        "Yo'l qatnov qismining o'ng tomonida, biroq u boshqa transport vositalarining harakatlanishiga to'sqinlik qilmasligi kerak",
        "Yo'lning chap tomonida, biroq harakat xavfsizligi choralariga rioya qilgan holda"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 559-savol (56-bilet, 9-savol)
QUESTIONS[55].questions[8] = {
    question: "Shatakka olish qanday hollarda taqiqlangan?",
    answers: [
        "Sirpanchiqda qattiq ulagichda",
        "Sirpanchiqda egiluvchan ulagichda",
        "Yon kajavali mototsikllar bilan"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 560-savol (56-bilet, 10-savol)
QUESTIONS[55].questions[9] = {
    question: "Ushbu yotiq chiziqlardan qaysi biri belgilangan yo'nalishdagi transport vositalari uchun to'xtashga ruxsat beradi?",
    answers: [
        "«A»",
        "«Б»",
        "«B»",
        "«A», «Б», «B»"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/560.jpg"
};

// 561-savol (57-bilet, 1-savol)
QUESTIONS[56].questions[0] = {
    question: "Qaysi yo'l asosiy yo'l hisoblanadi?",
    answers: [
        "Tuproqli yoki shag'alli yo'lga nisbatan qoplamali yo'l yoki tegishli belgilar bilan belgilangan yo'l",
        "Uch tomonlama chorrahada tutashib kelgan yo'lga nisbatan har ikki tomonga davom etuvchi yo'l",
        "Har bir yo'nalishda harakatlanish uchun bir tasmali yo'lga nisbatan ko'p tasmali qatnov qismi bo'lgan yo'l"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 562-savol (57-bilet, 2-savol)
QUESTIONS[56].questions[1] = {
    question: "Qaysi qo'shimcha axborot belgisi transport vositalarini to'xtab turish joyiga qo'yish usulini ko'rsatadi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 2, // F3 to'g'ri (3-belgi)
    image: "images/562.jpg"
};

// 563-savol (57-bilet, 3-savol)
QUESTIONS[56].questions[2] = {
    question: "Yotiq uzluksiz sariq chiziq «To'xtash taqiqlangan» belgisi bilan birga to'xtashga ruxsat etadi:",
    answers: [
        "Yo'lovchilarni tushiradigan barcha transport vositalariga",
        "Avtobuslarga va trolleybuslarga",
        "Avtobuslarga, trolleybuslarga va taksi avtomobillariga",
        "Faqat belgilangan yo'nalishdagi transport vositalariga"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/563.jpg"
};

// 564-savol (57-bilet, 4-savol)
QUESTIONS[56].questions[3] = {
    question: "Sekin yurar transport vositalarining temir yo'l kesishmasi orqali harakatlanishiga faqat temir yo'l distansiyasi boshlig'ining ruxsati bilan harakat tezligi quyidagidan kam bo'lganda yo'l qo'yiladi:",
    answers: [
        "3 km/s",
        "5 km/s",
        "8 km/s",
        "10 km/s",
        "30 km/s"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 565-savol (57-bilet, 5-savol)
QUESTIONS[56].questions[4] = {
    question: "Qizil avtomobil haydovchisi:",
    answers: [
        "Yo'l berishi kerak",
        "Birinchi bo'lib harakatlanishga ustunlikka ega"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/565.jpg"
};

// 566-savol (57-bilet, 6-savol)
QUESTIONS[56].questions[5] = {
    question: "Bu belgi bilan belgilangan yo'l qismlarida ajratuvchi bo'lakning uzilish joyida qayrilib olishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi",
        "Faqat to'la vazni 3,5 tonnagacha bo'lgan transport vositalariga ruxsat etiladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/566.jpg"
};

// 567-savol (57-bilet, 7-savol)
QUESTIONS[56].questions[6] = {
    question: "Transport vositalarining trotuar va piyodalar yo'lkasi bo'ylab harakatlanishiga yo'l qo'yiladimi?",
    answers: [
        "Yo'l qo'yiladi, agar bu piyodalarning harakatiga halal bermasa",
        "Yo'l qo'yilmaydi, chunki bu piyodalarning hayotini xavf ostiga qo'yishi mumkin",
        "Bevosita shu trotuar yoki yo'lkalarda joylashgan savdo yoki boshqa korxonalarga xizmat ko'rsatishda yo'l qo'yiladi",
        "Trotuarda turgan boshqa transport vositasini aylanib o'tish uchun yo'l qo'yiladi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 568-savol (57-bilet, 8-savol)
QUESTIONS[56].questions[7] = {
    question: "Bunday yo'l belgisi bilan belgilangan yo'l qismlarida shaharlararo qatnaydigan avtobuslarning qanday eng yuqori tezlikda harakatlanishiga ruxsat etiladi?",
    answers: [
        "50 km/s",
        "60 km/s",
        "70 km/s",
        "80 km/s",
        "90 km/s"
    ],
    correct: 4, // F5 to'g'ri
    image: "images/568.jpg"
};

// 569-savol (57-bilet, 9-savol)
QUESTIONS[56].questions[8] = {
    question: "Mototsikllarni shatakka olishga ruxsat etiladimi?",
    answers: [
        "Yon kajavali mototsikllarni shatakka olishga ruxsat etiladi",
        "Taqiqlanadi",
        "Tekis joylarda ruxsat etiladi",
        "Yon kajavasi bo'lmagan mototsikllarni shatakka olishga ruxsat etiladi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 570-savol (57-bilet, 10-savol)
QUESTIONS[56].questions[9] = {
    question: "Ushbu yo'l belgisi bildiradi:",
    answers: [
        "Yo'lning ko'rsatilgan yo'nalishda oxiri berkligini",
        "Aholi punktlaridagi manzil tomon harakatlanish yo'nalishini",
        "Balandlikda yoki tezlanish tasmasida qo'shimcha tasmaning tugaganini"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/570.jpg"
};


// 571-savol (58-bilet, 1-savol)
QUESTIONS[57].questions[0] = {
    question: "Shatakka olingan yengil avtomobilda yo'lovchilarni tashish mumkinmi?",
    answers: [
        "Egiluvchi va qattiq ulagichda ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 572-savol (58-bilet, 2-savol)
QUESTIONS[57].questions[1] = {
    question: "Quyidagi belgi ostidagi qo'shimcha axborot belgisi haydovchiga nima haqida xabar beradi?",
    answers: [
        "To'xtab turish paytida yurgizgichni o'chirish taqiqlanadi",
        "Yurgizgichni o'chirish sharti bilan to'xtab turish"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/572.jpg"
};

// 573-savol (58-bilet, 3-savol)
QUESTIONS[57].questions[2] = {
    question: "Mazkur yotiq chiziq nimani anglatadi?",
    answers: [
        "Belgilangan yo'nalishdagi transport vositalari harakatlanadigan bo'lakni",
        "Maxsus avtomobillar harakatlanadigan bo'lakni",
        "Reversiv harakatlanish bo'lagining chegarasini"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/573.jpg"
};

// 574-savol (58-bilet, 4-savol)
QUESTIONS[57].questions[3] = {
    question: "Chorrahani ikkinchi bo'lib kim kesib o'tadi?",
    answers: [
        "Yashil avtomobil",
        "Qizil avtomobil ayni vaqtda ko'k bilan",
        "Sariq avtomobil"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/574.jpg"
};

// 575-savol (58-bilet, 5-savol)
QUESTIONS[57].questions[4] = {
    question: "Chorrahani birinchi bo'lib kesib o'tadi:",
    answers: [
        "Qizil avtomobil",
        "Ko'k avtomobil",
        "Yashil avtomobil"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/575.jpg"
};

// 576-savol (58-bilet, 6-savol)
QUESTIONS[57].questions[5] = {
    question: "Temir yo'l kesishmasidan o'tishda haydovchi nimaga amal qilishi kerak?",
    answers: [
        "Shlagbaumning holatiga va svetofor ishorasiga",
        "Yo'l belgilari va chiziqlariga",
        "Temir yo'l kesishmasi navbatchisining ko'rsatmalari va ishoralariga",
        "Barcha sanab o'tilgan talablarga"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 577-savol (58-bilet, 7-savol)
QUESTIONS[57].questions[6] = {
    question: "Haydovchi quvib o'tishni boshlashdan oldin nimaga ishonch hosil qilishi kerak?",
    answers: [
        "Quvib o'tayotgan transport vositasi haydovchisidan ancha tezroq harakatlanishiga",
        "Shu tasma bo'yicha oldinda harakatlanayotgan transport vositasi haydovchisi chapga burilish (qayta tizilish) haqida ishora bermaganiga",
        "U chiqishga mo'ljallagan yo'l qismi 1000 metr masofada bo'sh ekaniga"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 578-savol (58-bilet, 8-savol)
QUESTIONS[57].questions[7] = {
    question: "Uzunasiga ketgan sidirg'a chizig'i bilan to'xtagan transport vositalari o'rtasidagi masofa quyidagidan kam bo'lgan joylarda transport vositalarining to'xtashi va to'xtab turishi taqiqlanadi:",
    answers: [
        "2,0 m",
        "3,0 m",
        "4,0 m",
        "5,0 m",
        "6,0 m"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 579-savol (58-bilet, 9-savol)
QUESTIONS[57].questions[8] = {
    question: "Benzin bug'idan zaharlanishning alomatlari qanday?",
    answers: [
        "Ko'z o'ngi qorong'ilashadi, bosh aylanadi, muvozanat yo'qoladi, yiqiladi. Tomir urishi sekinlashadi. Oyoq-qo'l soviydi",
        "Mastga o'xshab harakatlanadi, bosh aylanadi, og'riydi, ko'ngil ayniydi, qayt qiladi, mushaklari tortishadi, nafas olish sekinlashadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 580-savol (58-bilet, 10-savol)
QUESTIONS[57].questions[9] = {
    question: "Yuk avtomobilining yukxonasida 8 nafardan ko'p odamlarni tashish qaysi haydovchilarga ruxsat beriladi?",
    answers: [
        "«C» toifadagi transport vositasini boshqarish huquqi guvohnomasi bo'lib, shu avtomobilda uch yillik ish davriga ega bo'lgan haydovchilarga",
        "«D» va «C» toifadagi transport vositalarini boshqarish huquqiga ega bo'lgan va shu toifadagi transport vositalaridan birini 3 yildan ortiq boshqargan haydovchilarga"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 581-savol (59-bilet, 1-savol)
QUESTIONS[58].questions[0] = {
    question: "«Yetarli ko'rinmaslik» deganda nima tushuniladi?",
    answers: [
        "Oqshomdan tonggacha bo'lgan vaqt",
        "Ko'rinish 150 metrdan kam bo'lgan holat",
        "Tuman tushganda, yomg'ir, qor yog'ayotganda va hokazo sharoitlarda, shuningdek, kunning g'ira shira vaqtida yo'lning ko'rinishi 300 metrdan kam bo'lishi",
        "Yomg'ir, qor yog'ishi, oqshom"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 582-savol (59-bilet, 2-savol)
QUESTIONS[58].questions[1] = {
    question: "Yo'naltirgichlar bilan belgilangan yo'nalishlarning qaysi biridan harakatlanishga ruxsat etiladi?",
    answers: [
        "«A» va «Б»",
        "«Б» va «B»",
        "«A» va «B»"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/582.jpg"
};

// 583-savol (59-bilet, 3-savol)
QUESTIONS[58].questions[2] = {
    question: "Sariq uzuq-uzuq yotiq chiziq qaysi yo'l belgisi bilan qo'llanilishi mumkin?",
    answers: [
        "«To'xtash taqiqlangan»",
        "«To'xtab turish taqiqlangan»",
        "«Oyning toq sonli kunlarida to'xtab turish taqiqlangan»"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/583.jpg"
};

// 584-savol (59-bilet, 4-savol)
QUESTIONS[58].questions[3] = {
    question: "Kesishma orqali harakatlanish hollarida haydovchi «To'xtash chizig'i», 2.5 «To'xtamasdan harakatlanish taqiqlangan» yo'l belgisi yoki svetofor bo'lmaganda, o'tib ketayotgan poyezdni o'tkazib yuborishga qoida bo'yicha shlagbaumgacha kamida qancha masofa qolganda to'xtash kerak?",
    answers: [
        "1 m",
        "5 m",
        "10 m",
        "15 m",
        "20 m"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 585-savol (59-bilet, 5-savol)
QUESTIONS[58].questions[4] = {
    question: "Svetoforning ushbu ishorasida qaysi transport vositalariga harakatlanishga ruxsat etilgan?",
    answers: [
        "Tramvayga va mototsiklga",
        "Mototsiklga, yengil avtomobil va yuk avtomobiliga",
        "Yengil va yuk avtomobillariga",
        "Barcha transport vositalariga"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/585.jpg"
};

// 586-savol (59-bilet, 6-savol)
QUESTIONS[58].questions[5] = {
    question: "Og'ir vaznli va katta o'lchamli yuklarni tashiyotgan transport vositalarining aholi punktlaridan tashqarida qanday tezlik bilan harakatlanishiga ruxsat etiladi?",
    answers: [
        "40 km/soatdan oshirmasdan",
        "60 km/soatdan oshirmasdan",
        "Tashish shartlari bilan kelishilganda Davlat YHX xizmati ruxsat etganidan oshirmasdan"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 587-savol (59-bilet, 7-savol)
QUESTIONS[58].questions[6] = {
    question: "Mexanik transport vositasi shatakka olinganda egiluvchan ulagich qanday belgilanishi kerak?",
    answers: [
        "Diagonali bo'yicha qizil va oq rangli chiziqlar tushirilgan, yorug'lik qaytaradigan yuzali, bayroqchalar yoki taxtachalar bilan.",
        "Transport vositasi orqasiga mustahkamlangan avariya sababli to'xtash belgisi bilan belgilanishi kerak",
        "Transport vositasi oldi tomoni oq rangli, orqasi qizil rangli fonarlar bilan belgilanishi kerak"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 588-savol (59-bilet, 8-savol)
QUESTIONS[58].questions[7] = {
    question: "Qayerda transport vositalarining to'xtashi va to'xtab turishi taqiqlanadi?",
    answers: [
        "Transport vositalari va piyodalarning harakati serqatnov joylarda",
        "Bir yo'nalishda harakatlanish uchun uchtadan kam tasmaga ega bo'lgan ko'prik, yo'l o'tkazgich va estakadalarning ustida",
        "Qatnov qismlari kesishmasi chetida 30 metrdan ko'proq masofa qolganda"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 589-savol (59-bilet, 9-savol)
QUESTIONS[58].questions[8] = {
    question: "Tormoz tizimi ishlamayotgan transport vositasini shatakka olish mumkinmi?",
    answers: [
        "Agar shatakka olgan transport vositasining haqiqiy vazni shatakka olinuvchi transport vaznidan ikki barobar ortiq bo'lsa, qattiq ulagich yordamida yoki qisman ortish usuli bilan",
        "Faqat qattiq ulagichda",
        "Agar shatakka olingan transport vositasida haydovchi bo'lsa har qanday usul bilan",
        "Faqat unga qisman ortish usuli bilan"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 590-savol (59-bilet, 10-savol)
QUESTIONS[58].questions[9] = {
    question: "Mexanik transport vositalaridan foydalanish qanday shartlarda taqiqlanadi?",
    answers: [
        "Yurgizgich ishida nuqson bo'lganda",
        "Uzatma qutisida shovqin bo'lganda",
        "Davlat davriy texnik ko'rigidan belgilangan tartibda o'tmaganda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};


// 591-savol (60-bilet, 1-savol)
QUESTIONS[59].questions[0] = {
    question: "Qora avtomobil chorrahani nechanchi bo'lib kesib o'tadi?",
    answers: [
        "Birinchi",
        "Ikkinchi",
        "Oxirgi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/591.jpg"
};

// 592-savol (60-bilet, 2-savol)
QUESTIONS[59].questions[1] = {
    question: "Harakat qaysi yo'nalishda ruxsat etilgan?",
    answers: [
        "Faqat to'g'riga",
        "To'g'ri va o'ngga",
        "To'g'riga, o'ngga va chapga",
        "Barcha yo'nalishlarga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/592.jpg"
};

// 593-savol (60-bilet, 3-savol)
QUESTIONS[59].questions[2] = {
    question: "Bu belgida qaysi avtomobilga harakatlanishga ruxsat etilgan?",
    answers: [
        "Haqiqiy vazni 12 t bo'lgan ikki o'qli yuk avtomobiliga",
        "Haqiqiy vazni 12 t bo'lgan uch o'qli yuk avtomobiliga"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/593.jpg"
};

// 594-savol (60-bilet, 4-savol)
QUESTIONS[59].questions[3] = {
    question: "Chorrahani ikkinchi bo'lib kim kesib o'tadi?",
    answers: [
        "Ko'k avtomobil",
        "Yashil avtomobil",
        "Qizil avtomobil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/594.jpg"
};

// 595-savol (60-bilet, 5-savol)
QUESTIONS[59].questions[4] = {
    question: "Svetoforning qizil va sariq ishoralaridagi qora yo'naltirgichlar nima haqida axborot beradi?",
    answers: [
        "Svetoforning yashil ishorasi yoqilganda harakatlanishning ruxsat etilgan yo'nalishlari haqida",
        "Svetoforning qizil va sariq ishoralarida harakatlanishning ruxsat etilgan yo'nalishlari haqida"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/595.jpg"
};

// 596-savol (60-bilet, 6-savol)
QUESTIONS[59].questions[5] = {
    question: "Yuk avtomobili kuzovida yo'lovchilar tashishda ularning soni qanday belgilanadi?",
    answers: [
        "Ma'muriyatning ko'rsatmasi bilan",
        "Tashishning zarurligi bilan",
        "Jihozlangan o'rindiqlarning soni bilan",
        "Haydovchining qarori bilan"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 597-savol (60-bilet, 7-savol)
QUESTIONS[59].questions[6] = {
    question: "Qaysi avtomobilning haydovchisi to'xtab turish qoidalarini buzmadi?",
    answers: [
        "Qizil",
        "Sariq",
        "Har ikkisi buzgan",
        "Hech kim buzmadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/597.jpg"
};

// 598-savol (60-bilet, 8-savol)
QUESTIONS[59].questions[7] = {
    question: "Avtobuslarda bolalar guruhini tashkiliy ravishda tashishda qanday hollarda kunning yorug' vaqtida yaqinni yorituvchi fara chiroqlari yoqib qo'yilishi kerak?",
    answers: [
        "Faqat ko'rinish yetarli bo'lmagan sharoitlarda",
        "Faqat harakat serqatnov bo'lganda",
        "Haydovchining xohishiga ko'ra",
        "Tashish amalga oshirilayotgan barcha hollarda"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 599-savol (60-bilet, 9-savol)
QUESTIONS[59].questions[8] = {
    question: "Qishda boldirga qon to'xtatadigan jgutni qancha muddatga qo'yish mumkin?",
    answers: [
        "2 soatdan ko'p bo'lmagan",
        "3 soatdan ko'p bo'lmagan",
        "1 soatdan ko'p bo'lmagan"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 600-savol (60-bilet, 10-savol)
QUESTIONS[59].questions[9] = {
    question: "M2; M3 toifadagi avtotransport vositalarining shina protektori naqshlarining balandligi quyidagilardan kam bo'lmasligi kerak:",
    answers: [
        "0,8 mm",
        "1,0 mm",
        "1,6 mm",
        "2,0 mm",
        "2,5 mm"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 601-savol (61-bilet, 1-savol)
QUESTIONS[60].questions[0] = {
    question: "Yo'lda harakatlanishni tartibga solish uchun vakolatli shaxsda o'zi bilan bo'lishi kerak:",
    answers: [
        "Tegishli guvohnoma va taniqlik belgisi - qo'l bog'ichi",
        "Jezl",
        "Qizil ishorali yorug'lik qaytargich qizil chiroq yoki bayroqcha",
        "Barcha sanab o'tilgan belgilari"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 602-savol (61-bilet, 2-savol)
QUESTIONS[60].questions[1] = {
    question: "Qaysi belgi qayrilib olishga ruxsat etadi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 1, // F2 to'g'ri (2-belgi chapga burilishni taqiqlaydi, lekin qayrilib olishga ruxsat beradi)
    image: "images/602.jpg"
};

// 603-savol (61-bilet, 3-savol)
QUESTIONS[60].questions[2] = {
    question: "Agar avtomobilning balandligi (yuki bilan yoki yuksiz) belgida ko'rsatilganidan ortiq bo'lsa, haydovchi:",
    answers: [
        "Avtoxo'jalik rahbaridan yurishga ruxsat olishi kerak",
        "DYHX xodimidan yurishga ruxsatnoma olishi kerak",
        "Boshqa yo'nalish bo'yicha yo'l qismini aylanib o'tishi kerak"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/603.jpg"
};

// 604-savol (61-bilet, 4-savol)
QUESTIONS[60].questions[3] = {
    question: "Avtomobillar chorrahani quyidagi tartibda kesib o'tadilar:",
    answers: [
        "Qizil, ko'k, yashil",
        "Yashil, ko'k, qizil",
        "Yashil ayni vaqtda qizil bilan, ko'k"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/604.jpg"
};

// 605-savol (61-bilet, 5-savol)
QUESTIONS[60].questions[4] = {
    question: "Harakatlanishda ustunlikka ega:",
    answers: [
        "Asosiy yo'l bo'yicha chorrahaga chiqayotgan avtobusning haydovchisi",
        "Chorrahada qayrilib olishni tugallayotgan yengil avtomobilning haydovchisi",
        "Svetoforning ruxsat etuvchi ishorasida chorrahaga chiqqan avtobus haydovchisi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/605.jpg"
};

// 606-savol (61-bilet, 6-savol)
QUESTIONS[60].questions[5] = {
    question: "Yo'l belgilari va chiziqlarning ma'nolari bir-birini inkor etganda haydovchi qaysi biriga rioya etishi kerak?",
    answers: [
        "Yo'l chiziqlariga",
        "Yo'l belgilariga"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 607-savol (61-bilet, 7-savol)
QUESTIONS[60].questions[6] = {
    question: "Qaysi transport vositasining haydovchisi quvib o'tishni to'g'ri bajaryapti?",
    answers: [
        "Yuk avtomobilining haydovchisi",
        "Yengil avtomobilning haydovchisi",
        "Har ikkisi to'g'ri",
        "Har ikkisi noto'g'ri"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/607.jpg"
};

// 608-savol (61-bilet, 8-savol)
QUESTIONS[60].questions[7] = {
    question: "Sun'iy yoritilgan tunellarda harakatlanayotganda qoidalar mexanik transport vositasining haydovchiga qanday majburiyat yuklaydi:",
    answers: [
        "Majburiy to'xtash yoritgichini yoqishni",
        "40 km/soatdan oshmaydigan tezlik bilan harakatlanishni",
        "Tovushli xabar berishni",
        "Uzoqni yoki yaqinni yorituvchi chiroqlarini yoqishni"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 609-savol (61-bilet, 9-savol)
QUESTIONS[60].questions[8] = {
    question: "Haydovchi keskin tormozlashda yuzaga keladigan sirpanishning oldini olish uchun qanday choralar ko'rishi kerak?",
    answers: [
        "Tormoz pedalini qattiq bosishga",
        "Ulagich pedalini bosishga",
        "Boshlangan tormoz berishni to'xtatishga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 610-savol (61-bilet, 10-savol)
QUESTIONS[60].questions[9] = {
    question: "Qaysi belgi yo'l boshi yoki oxirigacha bo'lgan masofani bildiradi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 0, // F1 to'g'ri (1-belgi masofani bildiradi)
    image: "images/610.jpg"
};

// 611-savol (62-bilet, 1-savol)
QUESTIONS[61].questions[0] = {
    question: "Yo'l burilishlarida avtomobilning markazdan qochirma kuchi qanday hollarda oshadi?",
    answers: [
        "Burilish radiusi ko'payishi bilan",
        "Harakat tezligi ortishi bilan",
        "Harakat tezligi pasayishi bilan"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 612-savol (62-bilet, 2-savol)
QUESTIONS[61].questions[1] = {
    question: "Belgilardan qaysi birining belgilangan yo'nalishdagi transport vositalariga daxli yo'q?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 3, // F4 to'g'ri (4-belgi: To'xtash taqiqlangan)
    image: "images/612.jpg"
};

// 613-savol (62-bilet, 3-savol)
QUESTIONS[61].questions[2] = {
    question: "Bu joyda qayrilib olishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/613.jpg"
};

// 614-savol (62-bilet, 4-savol)
QUESTIONS[61].questions[3] = {
    question: "Avtomobillar chorrahani quyidagi tartibda kesib o'tadi:",
    answers: [
        "Ko'k; yashil; qizil",
        "Qizil; ko'k; yashil",
        "Yashil; qizil; ko'k"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/614.jpg"
};

// 615-savol (62-bilet, 5-savol)
QUESTIONS[61].questions[4] = {
    question: "Qizil avtomobilning haydovchisiga shu vaziyatda piyodalar o'tish joyi orqali harakatlanishni davom ettirishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/615.jpg"
};

// 616-savol (62-bilet, 6-savol)
QUESTIONS[61].questions[5] = {
    question: "Tartibga soluvchining hushtak ishorasi xizmat qiladi:",
    answers: [
        "Harakat ishtirokchilarining e'tiborini jalb etish uchun",
        "Zarur hollarda <Qo'lni yuqoriga ko'tarish> ishorasining o'rnini bosish uchun",
        "Piyodalar uchun ruxsat etuvchi ishora bo'lib"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 617-savol (62-bilet, 7-savol)
QUESTIONS[61].questions[6] = {
    question: "Sanab o'tilgan joylardan qaysi birida transport vositalarining to'xtashi va to'xtab turishi taqiqlanmaydi?",
    answers: [
        "Ko'priklarda, osma yo'llarda bir yo'nalishdagi harakatlanish uchun uchtadan ko'p tasma bo'lganda",
        "Kesishadigan qatnov qismlarining chetiga 30 metrdan ko'proq qolganda",
        "Barcha ko'rsatilgan joylarda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 618-savol (62-bilet, 8-savol)
QUESTIONS[61].questions[7] = {
    question: "Quvib o'tilayotgan transport vositasining haydovchisiga nima taqiqlanadi?",
    answers: [
        "40 km/soatdan ortiq tezlik bilan harakat qilish",
        "O'z transport vositasining harakat tezligini kamaytirish bilan quvib o'tishga to'sqinlik qilish",
        "Harakat tezligini oshirish yoki boshqa xatti harakatlar bilan quvib o'tishga to'sqinlik qilish"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 619-savol (62-bilet, 9-savol)
QUESTIONS[61].questions[8] = {
    question: "Ko'krak qafasining ko'p qismi jarohatlanganda uni qayerdan boshlab bint bilan bog'lash kerak?",
    answers: [
        "Ko'krak qafasining o'rtasidan",
        "Ko'krak qafasining quyi qismidan",
        "Qo'ltiq ostidan"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 620-savol (62-bilet, 10-savol)
QUESTIONS[61].questions[9] = {
    question: "Sanab o'tilgan hollardan qaysi birida transport vositalaridan foydalanishga ruxsat etiladi?",
    answers: [
        "Shinalar o'lchami va yo'l qo'yiladigan bosimi bo'yicha transport vositasining rusumiga mos emas",
        "Transport vositasining bitta o'qiga diagonal shinalar radial shinalar bilan birga o'rnatilgan",
        "M1 toifadagi avtotransport vositalarining oldingi o'qiga birinchi toifada ta'mirlangan shinalar o'rnatilgan"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};


// 621-savol (63-bilet, 1-savol)
QUESTIONS[62].questions[0] = {
    question: "Reaksiya va diqqatni pasaytiruvchi dori darmonlar ta'sirida bo'lgan haydovchiga transport vositalarini boshqarishga ruxsat etiladimi?",
    answers: [
        "Taqiqlanadi",
        "Ruxsat etiladi",
        "Agar haydovchining ishlagan davri 2 yildan ortiq bo'lsa, ruxsat etiladi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 622-savol (63-bilet, 2-savol)
QUESTIONS[62].questions[1] = {
    question: "Bu belgida ko'k fon bilan ajratilgan aholi punkti nimani bildiradi?",
    answers: [
        "Bu manzil shu aholi punktidan tashqarida joylashganini va u manzilga avtomagistral bo'lmagan, boshqa yo'l orqali borilishni",
        "Ko'rsatilgan aholi punktiga harakatlanish avtomagistral bo'ylab amalga oshiriladi",
        "Ko'rsatilgan manzil mazkur aholi punktida joylashgan"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/622.jpg"
};

// 623-savol (63-bilet, 3-savol)
QUESTIONS[62].questions[2] = {
    question: "Quyidagi chiziq nimani bildiradi?",
    answers: [
        "Yo'lni kesib o'tuvchi piyodalarni o'tkazib yuborish uchun to'xtash majburiy bo'lgan joy",
        "Velosiped yo'lkasi yo'lni kesib o'tuvchi joyi",
        "Boshqarilmaydigan piyodalar o'tish joyi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/623.jpg"
};

// 624-savol (63-bilet, 4-savol)
QUESTIONS[62].questions[3] = {
    question: "Transport vositalari chorrahani quyidagi tartibda kesib o'tadilar:",
    answers: [
        "Ko'k va qizil avtomobillar, yashil",
        "Yashil, ko'k, qizil avtomobillar",
        "Yashil, qizil va ayni vaqtda u bilan birga ko'k avtomobil",
        "Qizil, yashil, ko'k avtomobillar"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/624.jpg"
};

// 625-savol (63-bilet, 5-savol)
QUESTIONS[62].questions[4] = {
    question: "Ko'rsatilgan vaziyatda o'ngga burilar ekan, haydovchi qanday yo'l tutishi kerak?",
    answers: [
        "Ustunlik huquqidan foydalanib, tovushli xabar berishi va belgilangan yo'nalishda harakatni davom ettirishi",
        "Harakat tezligini pasaytirishi va alohida ehtiyotkorlik bilan yo'lda davom etishi",
        "Qatnov qismidan o'tuvchi piyodalarni o'tkazib yuborishi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/625.jpg"
};

// 626-savol (63-bilet, 6-savol)
QUESTIONS[62].questions[5] = {
    question: "Agar transport vositasida «Tezlik cheklangan» taniqlik belgisi o'rnatilgan bo'lsa, bu transport vositasining haydovchisiga:",
    answers: [
        "Belgida ko'rsatilgan tezlikdan oshirishga faqat tezlik tegishli yo'l belgisi o'rnatilib oshirilgan yo'l qismlarida ruxsat beriladi",
        "Belgida ko'rsatilgan tezlikdan oshirish taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 627-savol (63-bilet, 7-savol)
QUESTIONS[62].questions[6] = {
    question: "Aholi punktlarida «Avariya sababli to'xtash» belgisi transport vositasidan (yon kajavasiz mototsikldan tashqari) kamida qanday masofada qo'yilishi kerak?",
    answers: [
        "10 m",
        "15 m",
        "30 m",
        "40 m"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 628-savol (63-bilet, 8-savol)
QUESTIONS[62].questions[7] = {
    question: "Aholi punktlaridan tashqarida yo'lning qatnov qismida haydovchilar transport vositalarini qayerda harakatlantirishlari kerak?",
    answers: [
        "Iloji boricha qatnov qismining o'ng chetiga yaqinroq joyda",
        "Xohlagan tasma bo'ylab",
        "Faqat o'ng tasma bo'ylab, chap tasmaga o'tish faqat chapga burish va burilib olish uchun ruxsat etiladi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 629-savol (63-bilet, 9-savol)
QUESTIONS[62].questions[8] = {
    question: "Quvib o'tish qaysi hollarda taqiqlanadi?",
    answers: [
        "Temir yo'l kesishmalarida va ulargacha 100 metrdan kam masofa qolganda",
        "Temir yo'l kesishmalarida va ulargacha 100 metrdan ko'p masofa qolganda",
        "Temir yo'l kesishmalarida va aholi punktlaridan tashqarida ulardan 100 metrdan ko'p masofa qolganda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 630-savol (63-bilet, 10-savol)
QUESTIONS[62].questions[9] = {
    question: "Transport vositasining bir o'qiga izlari har xil naqshli shinalar o'rnatishga ruxsat etiladimi?",
    answers: [
        "Avtomobilning faqat orqa o'qiga oldingi boshqaruvchi ko'prik bilan birga ruxsat etiladi",
        "Taqiqlanadi",
        "Faqat yuk avtomobiliga ruxsat etiladi",
        "Ruxsat etiladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 631-savol (64-bilet, 1-savol)
QUESTIONS[63].questions[0] = {
    question: "Qaysi rasmda haydovchi yo'lovchilarni tushirish uchun o'z avtomobilini noto'g'ri to'xtatdi?",
    answers: [
        "Chapdagi rasmda",
        "Ikkala rasmda",
        "O'ngdagi rasmda"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/631.jpg"
};

// 632-savol (64-bilet, 2-savol)
QUESTIONS[63].questions[1] = {
    question: "Qaysi rasmda harakatlanishning to'g'ri yo'nalishi ko'rsatilgan?",
    answers: [
        "Birinchida",
        "Ikkinchida",
        "Ikkalasida"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/632.jpg"
};

// 633-savol (64-bilet, 3-savol)
QUESTIONS[63].questions[2] = {
    question: "Mazkur chiziq nimani bildiradi?",
    answers: [
        "Harakat svetofor bilan tartibga solinadigan piyodalar o'tish joyini",
        "Velosiped yo'lkasining qatnov qismini kesib o'tadigan joyni",
        "Piyodalar yo'lkasining qatnov qismini kesib o'tadigan joyni"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/633.jpg"
};

// 634-savol (64-bilet, 4-savol)
QUESTIONS[63].questions[3] = {
    question: "Qizil avtomobil chorrahani nechanchi bo'lib kesib o'tadi?",
    answers: [
        "Birinchi bo'lib",
        "Ikkinchi bo'lib",
        "Oxirgi bo'lib"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/634.jpg"
};

// 635-savol (64-bilet, 5-savol)
QUESTIONS[63].questions[4] = {
    question: "Svetoforning qaysi ishorasida avtomobil haydovchisi qayrilishni tugallashi mumkin?",
    answers: [
        "Qizilda",
        "Yashilda",
        "Istalganda"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/635.jpg"
};

// 636-savol (64-bilet, 6-savol)
QUESTIONS[63].questions[5] = {
    question: "Sanab o'tilgan hollarning qay birida qatnov qismining o'ng chetidan yoki yo'lning o'ng yoqasidan qayrilib olishga ruxsat etiladi?",
    answers: [
        "Tartibga solingan chorrahalarda",
        "Chorrahalardan tashqarida, agar qatnov qismining kengligi chetki chap holatdan qayrilib olish uchun yetarli bo'lmasa",
        "Tartibga solinmaydigan chorrahalarda, agar qayrilib olishni amalga oshirayotgan transport vositasi asosiy yo'lda bo'lsa"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 637-savol (64-bilet, 7-savol)
QUESTIONS[63].questions[6] = {
    question: "Transport vositasi texnik tavsifnomasida ko'rsatilgan yuqori tezlikdan oshirishi mumkinmi?",
    answers: [
        "Yo'llardan foydalanish uchun mas'ul bo'lgan idoralar tomonidan oshirilishi mumkin",
        "Aholi punktidan tashqaridagi yo'llarda oshirilishi mumkin. Bunday yo'l qismlarida «yuqori tezlik cheklangan» belgisi o'rnatiladi",
        "Oshirilishi mumkin emas"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 638-savol (64-bilet, 8-savol)
QUESTIONS[63].questions[7] = {
    question: "Avtomagistrallarda transport vositalarining atayin to'xtashi qaysi joylarda ruxsat etilgan?",
    answers: [
        "Yo'lning qatnov qismining chetki o'ng bo'lagida",
        "Yo'lning 100 metrdan ko'proq qismi ko'rinadigan va harakat bo'lagi soni to'rttadan ortiq bo'lgan joylarda",
        "To'xtab turish uchun «To'xtab turish joyi» yoki «Dam olish joyi» belgilari bilan belgilangan maxsus maydonchalarda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 639-savol (64-bilet, 9-savol)
QUESTIONS[63].questions[8] = {
    question: "Avtopoyezdning belgisi qanday holda yoqilgan bo'lishi kerak?",
    answers: [
        "Tunda yoki yetarli ko'rinmaydigan sharoitda harakat qilganda",
        "Faqat avtopoyezd harakat qilganda",
        "Avtopoyezd harakat qilganda, shuningdek, qorong'i vaqtda to'xtaganda va to'xtab turganida",
        "Faqat avtopoyezd yuk bilan harakat qilganda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 640-savol (64-bilet, 10-savol)
QUESTIONS[63].questions[9] = {
    question: "Ikkinchi daraja ta'mirlash yo'li bilan tiklangan shinalarni M1 toifadagi avtotranspor vositalariga o'rnatishga ruxsat etiladimi?",
    answers: [
        "Taqiqlanadi",
        "Avtomobilning har ikki o'qiga ruxsat etiladi",
        "Faqat orqa o'qiga ruxsat etiladi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};


// 641-savol (65-bilet, 1-savol)
QUESTIONS[64].questions[0] = {
    question: "Ko'k avtomobil chorrahani nechanchi bo'lib kesib o'tadi?",
    answers: [
        "Birinchi bo'lib",
        "Ikkinchi bo'lib",
        "Uchinchi bo'lib",
        "To'rtinchi bo'lib",
        "Oxirgi bo'lib"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/641.jpg"
};

// 642-savol (65-bilet, 2-savol)
QUESTIONS[64].questions[1] = {
    question: "Qaysi belgi «Bir tomonlama harakatli yo'lining oxiri» deb ataladi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 3, // F4 to'g'ri (4-belgi)
    image: "images/642.jpg"
};

// 643-savol (65-bilet, 3-savol)
QUESTIONS[64].questions[2] = {
    question: "Bu yo'l belgisi nimani bildiradi?",
    answers: [
        "40 km/soatdan kam tezlikda harakatlanayotgan yakka, yon kajavasi bo'lmagan ikki g'ildirakli mototsikllar va velosipedlardan tashqari barcha mexanik transport vositalarini quvib o'tish taqiqlanadi",
        "Ruxsat etilgan to'la vazni 3,5 tonnadan ortiq bo'lgan yuk avtomobillarida barcha transport vositalarini quvib o'tish taqiqlanadi, soatiga 40 kilometrdan kam tezlikda harakatlanayotgan transport vositasi, traktor, ot-arava, velosiped bundan mustasno"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/643.jpg"
};

// 644-savol (65-bilet, 4-savol)
QUESTIONS[64].questions[3] = {
    question: "Chorrahani ikkinchi bo'lib kim kesib o'tadi?",
    answers: [
        "Yashil avtomobil",
        "Ko'k avtomobil",
        "Qizil avtomobil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/644.jpg"
};

// 645-savol (65-bilet, 5-savol)
QUESTIONS[64].questions[4] = {
    question: "Ushbu chorrahada chapga burilishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/645.jpg"
};

// 646-savol (65-bilet, 6-savol)
QUESTIONS[64].questions[5] = {
    question: "Transport vositalarining tezligi texnik tavsifnomasiga yoki holatiga ko'ra 40 km/soatdan kam bo'lganda avtomagistral bo'ylab harakatlanishga ruxsat etiladimi?",
    answers: [
        "Ikkinchi tasmadan nariga o'tmaganda ruxsat etiladi",
        "Taqiqlanadi",
        "Agar «Eng kam tezlik» belgisi o'rnatilmagan bo'lsa ruxsat etiladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 647-savol (65-bilet, 7-savol)
QUESTIONS[64].questions[6] = {
    question: "Bu joyda avtobusni quvib o'tishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/647.jpg"
};

// 648-savol (65-bilet, 8-savol)
QUESTIONS[64].questions[7] = {
    question: "Avariya ishoralari yoqilishi kerak:",
    answers: [
        "To'xtash taqiqlangan joylarda majburiy to'xtaganda",
        "Yo'l-transport hodisasi sodir bo'lganda",
        "Shatakka olishda (shatakka olingan transport vositasida)",
        "Sanab o'tilgan barcha hollarda"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 649-savol (65-bilet, 9-savol)
QUESTIONS[64].questions[8] = {
    question: "«Reaksiya vaqti» tushunchasi nimani bildiradi?",
    answers: [
        "Haydovchi xavfni ko'rgan paytdan aniq harakatlarni boshlaguncha o'tilgan vaqt",
        "Haydovchining tormoz berishni boshlagan paytdan transport vositasining to'la to'xtagunicha bo'lgan vaqtni"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 650-savol (65-bilet, 10-savol)
QUESTIONS[64].questions[9] = {
    question: "N2; N3; O3; O4; M2; M3 toifadagi avtotransport vositalarining (mikroavtobuslardan tashqari) orqa devorida yozilishi kerak:",
    answers: [
        "Transport vositasining tegishliligi haqida taniqlik belgisi",
        "Davlat raqam belgisi va harflari yozilishi kerak",
        "Taniqlik va raqam belgilari"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 651-savol (66-bilet, 1-savol)
QUESTIONS[65].questions[0] = {
    question: "Qanday hollarda quvib o'tish taqiqlanadi?",
    answers: [
        "Temir yo'l kesishmalarida",
        "Quvib yoki aylanib o'tayotgan transport vositalarini",
        "Tepalikning oxirida va yo'lning ko'rinishi cheklangan joylarida",
        "Sanab o'tilgan barcha hollarda"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 652-savol (66-bilet, 2-savol)
QUESTIONS[65].questions[1] = {
    question: "Qaysi transport vositalarining haydovchilari to'xtab turish qoidasini buzdilar?",
    answers: [
        "«A» va «Б»",
        "Faqat «Г»",
        "«Б» va «Г»",
        "«B» va «Г»",
        "«Б», «B» va «Г»"
    ],
    correct: 4, // F5 to'g'ri
    image: "images/652.jpg"
};

// 653-savol (66-bilet, 3-savol)
QUESTIONS[65].questions[2] = {
    question: "Qaysi transport vositalariga ushbu belgi o'rnatilgan yo'l bo'ylab harakatlanishga ruxsat etilgan?",
    answers: [
        "Mexanik transport vositalariga",
        "Barcha transport vositalariga",
        "Avtomobillar, avtobus hamda mototsikllar, elektromototsikllar, mopedlar va skuterlarga",
        "Yuqori tezligi 40 km/soatdan kam bo'lmagan transport vositalariga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/653.jpg"
};

// 654-savol (66-bilet, 4-savol)
QUESTIONS[65].questions[3] = {
    question: "Chorrahani birinchi bo'lib kim kesib o'tadi?",
    answers: [
        "Yashil avtomobil",
        "Qizil avtomobil",
        "Ko'k avtomobil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/654.jpg"
};

// 655-savol (66-bilet, 5-savol)
QUESTIONS[65].questions[4] = {
    question: "Mazkur svetoforning qizil yoritgichida harakat taqiqlanadi:",
    answers: [
        "Faqat bir qatorda",
        "Qatnov qismining barcha kengligi bo'ylab",
        "Quvib o'tish bilan",
        "Svetofor qaysi tasma ustiga joylashtirilgan bo'lsa, o'sha tasma bo'yicha"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/655.jpg"
};

// 656-savol (66-bilet, 6-savol)
QUESTIONS[65].questions[5] = {
    question: "Agar tegishli belgilar bilan belgilangan qiyaliklarda yuzma-yuz kelayotgan transportlarning o'tib ketishi qiyin bo'lsa, yo'l berish zarur:",
    answers: [
        "Pastlik tomon harakatlanayotgan transport vositasiga",
        "Belgilangan yo'nalishdagi transport vositasiga",
        "Balandlikka harakatlanayotgan transport vositasiga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/656.jpg"
};

// 657-savol (66-bilet, 7-savol)
QUESTIONS[65].questions[6] = {
    question: "Yo'lning ushbu qismida quvib o'tishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/657.jpg"
};

// 658-savol (66-bilet, 8-savol)
QUESTIONS[65].questions[7] = {
    question: "Harakat tezligini tanlashda haydovchiga nima taqiqlanadi?",
    answers: [
        "Ushbu Qoidalarga muvofiq ravishda transport vositasiga o'rnatilgan taniqlik belgida ko'rsatilgan tezlikdan oshirish",
        "Keskin tormoz berish, agar bu harakatlanish xavfsizligini ta'minlash uchun talab qilinmasa",
        "Sanab o'tilgan ikkala harakatni amalga oshirish taqiqlanadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 659-savol (66-bilet, 9-savol)
QUESTIONS[65].questions[8] = {
    question: "Qo'l jarohatlanganda jabrlanuvchining ko'ylagi, kiyimi qanday yechilsa to'g'ri bo'ladi?",
    answers: [
        "Kiyim-boshni yechishni jarohatlan qo'ldan boshlash, so'ng sog' qo'lni bo'shatish",
        "Kiyim-boshni ikkala qo'ldan bir vaqtda yechish",
        "Kiyim-boshni yechishni sog' qo'ldan boshlash, so'ng jarohatlan qo'lni bo'shatish"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 660-savol (66-bilet, 10-savol)
QUESTIONS[65].questions[9] = {
    question: "Mopedlarni shatakka olishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Qattiq, qoplamasiz yo'l bo'ylab faqat kunning yorug' vaqtida ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 661-savol (67-bilet, 1-savol)
QUESTIONS[66].questions[0] = {
    question: "Trotuar yoki piyodalar yo'lkasi bo'lmaganda, piyodalar velosiped yo'lkasi bo'ylab harakat qila oladilarmi?",
    answers: [
        "Harakat qila oladilar",
        "Agar velosipedlarning harakatlanishini qiyinlashtirmasa, harakat qila oladilar",
        "Harakat qila olmaydilar"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 662-savol (67-bilet, 2-savol)
QUESTIONS[66].questions[1] = {
    question: "Bunday avtopoyezdning ko'prikdan o'tishiga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/662.jpg"
};

// 663-savol (67-bilet, 3-savol)
QUESTIONS[66].questions[2] = {
    question: "Qaysi belgi bilan xavfli yo'lning uzunligi ko'rsatiladi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/663.jpg"
};

// 664-savol (67-bilet, 4-savol)
QUESTIONS[66].questions[3] = {
    question: "Chorrahani qizil avtomobil nechanchi bo'lib kesib o'tadi?",
    answers: [
        "Ikkinchi bo'lib, ayni vaqtda ko'k bilan birga",
        "Ikkinchi bo'lib, sariqdan keyin",
        "Uchinchi bo'lib, yashil, sariqdan keyin"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/664.jpg"
};

// 665-savol (67-bilet, 5-savol)
QUESTIONS[66].questions[4] = {
    question: "Mazkur svetofor quyidagi transport vositalari harakatini tartibga solish uchun qo'llaniladi:",
    answers: [
        "Tramvaylarga va avtobuslarga",
        "Faqat tramvaylarga",
        "Tramvaylarga, shuningdek, alohida tasmadan harakatlanadigan belgilangan yo'nalishdagi boshqa transport vositalarini harakatini tartibga soladi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/665.jpg"
};

// 666-savol (67-bilet, 6-savol)
QUESTIONS[66].questions[5] = {
    question: "Qoidalarning qanday hollarida tumanga qarshi orqa chiroqlarni qo'llashga ruxsat beriladi?",
    answers: [
        "Transport vositasi bilan shatakka olganda",
        "Saf tarkibida harakatlanganda",
        "Kunning qorong'i vaqtida",
        "Yetarlicha ko'rinmaydigan sharoitda",
        "Sanab o'tilgan barcha hollarda"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 667-savol (67-bilet, 7-savol)
QUESTIONS[66].questions[6] = {
    question: "Yuk avtomobili haydovchisi rasmda ko'rsatilgan holatda maxsus tovush ishorasini eshitib yoki yalt-yalt etuvchi chiroq-mayoqchani ko'rib nima qilishi kerak?",
    answers: [
        "Qatnov qismidagi o'z bo'lagi bo'ylab harakatni davom ettirishi",
        "Haydovchi maxsus tovushli ishoralarini yoqqan holda yaqinlashib kelayotgan transport vositalariga yo'l berishlari, zarur bo'lgan hollarda ularning to'siqsiz o'tib ketishlari uchun o'zlarini yo'lning o'ng tomoniga olib to'xtashlari shart"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/667.jpg"
};

// 668-savol (67-bilet, 8-savol)
QUESTIONS[66].questions[7] = {
    question: "Qatnov qismiga bevosita tutashgan trotuar chetida unga to'la yoki qisman chiqish bilan to'xtab turishga ruxsat etiladimi?",
    answers: [
        "Faqat yengil avtomobillar, mototsikllar, elektromototsikllar, mopedlar, skuterlar, velosipedlar va individual harakatlanish vositalariga to'xtab turishga tegishli yo'l belgilari o'rnatilgan joylarda ruxsat etiladi",
        "Ruxsat etilgan to'la vazni 3,5 tonnadan ziyod bo'lgan faqat yuk avtomobillariga taqiqlanadi",
        "Barcha transport vositalariga taqiqlanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 669-savol (67-bilet, 9-savol)
QUESTIONS[66].questions[8] = {
    question: "Ishqalanish koeffitsiyentiga shinalarni siyqalanib ketgan protektori qanday ta'sir qiladi?",
    answers: [
        "Ishqalanish koeffitsiyenti oshadi",
        "Ishqalanish koeffitsiyenti o'zgarmaydi",
        "Ishqalanish koeffitsiyenti kamayadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 670-savol (67-bilet, 10-savol)
QUESTIONS[66].questions[9] = {
    question: "Qanday hollarda transport vositasidan foydalanish ruxsat etiladi?",
    answers: [
        "Transport vositasining tashqi yuzasiga qonun xujjatlariga mos kelmaydigan va harakat xavfsizligiga salbiy ta'sir ko'rsatadigan turli xil tasvirlar tushurilgan bo'lsa",
        "Gazli ta'minlash tizimi bilan jihozlangan avtobus va avtomobil gaz ballonlarining tashqi tomonida ko'rsatilgan texnik ko'rsatgichlar (parametrlar) texnik pasportdagi ma'lumotlarga (ko'rsatkichlarga) mos kelsa, oxirgi va rejalashtirilgan tekshirishlarning sanasi bo'lsa",
        "Ishlab chiqaruvchi korxona tomonidan ko'zda tutilmagan hollarda kuzov (kabina) bir necha xil rangga bo'yalgan bo'lsa (maxsus transport vositalari bundan mustasno)"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 671-savol (68-bilet, 1-savol)
QUESTIONS[67].questions[0] = {
    question: "Piyodalar qatnov qismining chetidan qanday yurishlari kerak?",
    answers: [
        "Qatnov qismining chetidan transport vositalarining harakatiga qarama-qarshi",
        "Qatnov qismining chetidan transport vositalarining harakati bo'ylab",
        "Har qanday yo'nalishda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 672-savol (68-bilet, 2-savol)
QUESTIONS[67].questions[1] = {
    question: "Bu belgilar nimani bildiradi?",
    answers: [
        "«Nogiron» taniqlik belgisi bo'lgan avtomobillar uchun 30 metrdan keyin to'xtab turish joyiga kelishini",
        "Motokajavalardan tashqari transport vositalari uchun 30 metrli hududdagi to'xtab turish joyini",
        "«Nogiron» taniqlik belgisi bo'lgan motokajava va avtomobillar uchun 30 metrli hududdagi to'xtab turish joyini"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/672.jpg"
};

// 673-savol (68-bilet, 3-savol)
QUESTIONS[67].questions[2] = {
    question: "Ko'rsatilgan belgilardan qaysi biri orqaga harakatlanishni taqiqlaydi?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ],
    correct: 0, // F1 to'g'ri (Avtomagistralda orqaga harakatlanish taqiqlangan)
    image: "images/673.jpg"
};

// 674-savol (68-bilet, 4-savol)
QUESTIONS[67].questions[3] = {
    question: "Avtomobillar chorrahani quyidagi tartibda kesib o'tadi:",
    answers: [
        "Qizil chorrahaga chiqadi va ko'kni o'tkazib yuborish uchun to'xtaydi; yashil; ko'k, va qizil burilishni tugallaydi",
        "Yashil; ko'k; qizil",
        "Qizil; ko'k; yashil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/674.jpg"
};

// 675-savol (68-bilet, 5-savol)
QUESTIONS[67].questions[4] = {
    question: "O'tish navbati qaysi javobda to'g'ri ko'rsatilgan?",
    answers: [
        "Mototsikl, avtobus, yuk avtomobili",
        "Avtobus, mototsikl, yuk avtomobili",
        "Avtobus, yuk avtomobili, mototsikl"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/675.jpg"
};

// 676-savol (68-bilet, 6-savol)
QUESTIONS[67].questions[5] = {
    question: "Yengil avtomobilning oldingi o'rindig'ida bolalarni ushlab turuvchi maxsus qurilma o'rnatilmagan bo'lsa, ularni tashish qaysi yoshdan ruxsat etiladi?",
    answers: [
        "5 yosh",
        "6 yosh",
        "8 yosh",
        "10 yosh",
        "12 yosh"
    ],
    correct: 4, // F5 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 677-savol (68-bilet, 7-savol)
QUESTIONS[67].questions[6] = {
    question: "Agar haydovchi transport vositasining eshigini ochishga va undan chiqishga qaror qilsa, unga nima taqiqlanadi?",
    answers: [
        "Harakatlanish serqatnov bo'lgan yo'llarda turgan transport vositasining eshigini ochish taqiqlanadi",
        "Harakatlanish serqatnov bo'lgan yo'llarda haydovchi eshigini ochish taqiqlanadi. O'z joyidan yo'lovchi eshigi orqali chiqadi",
        "Turgan transport vositasining eshigini ochish, agar bu harakatlanishning boshqa ishtirokchilariga halaqit bersa va xavf tug'dirsa taqiqlanadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 678-savol (68-bilet, 8-savol)
QUESTIONS[67].questions[7] = {
    question: "Sanab o'tilgan qaysi joylarda transport vositalarining to'xtashi va to'xtab turishi taqiqlanadi?",
    answers: [
        "Piyodalar o'tish joylarida",
        "Tramvay yo'llarida",
        "Tramvay yo'llariga bevosita yaqinroqda, agar bu tramvaylarning harakatiga to'sqinlik qilsa",
        "Barcha ko'rsatilgan joylarda"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 679-savol (68-bilet, 9-savol)
QUESTIONS[67].questions[8] = {
    question: "Tik uzun qiyaliklarda ajratilgan uzatma bilan avtomobilni uzoq tormozlashning qanday xavfi bor?",
    answers: [
        "Shinalarning shikastlanishi ortadi",
        "Ulagich qismlarining shikastlanishi ortadi",
        "Tormoz qiziydi va ishdan chiqadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 680-savol (68-bilet, 10-savol)
QUESTIONS[67].questions[9] = {
    question: "Bolalarni tashishda transport vositasi qaysi taniqlik belgisi bilan belgilanadi?",
    answers: [
        "1",
        "2",
        "3"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/680.jpg"
};

// 681-savol (69-bilet, 1-savol)
QUESTIONS[68].questions[0] = {
    question: "To'xtash va to'xtab turish quyidagi joylarda taqiqlanadi:",
    answers: [
        "Temir yo'l kesishmalarida",
        "Piyodalar o'tish joylarida va ulardan oldin 10 metrdan kam masofa qolganda",
        "Piyodalarning harakatiga xalaqit beradigan joylarda",
        "Sanab o'tilgan barcha joylarda"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 682-savol (69-bilet, 2-savol)
QUESTIONS[68].questions[1] = {
    question: "Qaysi transport vositasining haydovchisi to'xtab turish qoidasini buzdi?",
    answers: [
        "Yengil avtomobil haydovchisi",
        "Mototsikl haydovchisi",
        "Yuk avtomobili haydovchisi",
        "Barcha transport vositalarining haydovchilari"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/682.jpg"
};

// 683-savol (69-bilet, 3-savol)
QUESTIONS[68].questions[2] = {
    question: "Ko'rsatilgan yo'l belgisi qaysi transport vositalariga harakatlanishni taqiqlaydi?",
    answers: [
        "Barcha mexanik transport vositalariga",
        "Faqat yuk avtomobillariga",
        "Barcha avtomobillarga"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/683.jpg"
};

// 684-savol (69-bilet, 4-savol)
QUESTIONS[68].questions[3] = {
    question: "Chorrahani ikkinchi bo'lib kim kesib o'tadi?",
    answers: [
        "Yashil avtomobil",
        "Qizil avtomobil",
        "Ko'k avtomobil, ayni vaqtda sariq bilan birga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/684.jpg"
};

// 685-savol (69-bilet, 5-savol)
QUESTIONS[68].questions[4] = {
    question: "Transport vositalari chorrahani quyidagi tartibda kesib o'tadi:",
    answers: [
        "Yengil avtomobil, avtobus, tramvay",
        "Tramvay, avtobus, yengil avtomobil",
        "Tramvay, yengil avtomobil, avtobus"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/685.jpg"
};

// 686-savol (69-bilet, 6-savol)
QUESTIONS[68].questions[5] = {
    question: "Egiluvchan ulagichda shatakka olinganda qanday yuqori tezlik bilan harakatlanishga ruxsat etilgan?",
    answers: ["70 km/s", "60 km/s", "50 km/s", "40 km/s", "30 km/s"],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 687-savol (69-bilet, 7-savol)
QUESTIONS[68].questions[6] = {
    question: "Qaysi rasmda haydovchi chapga burilish haqida ogohlantirish ishorasini bermoqda?",
    answers: ["1", "2", "3"],
    correct: 0, // F1 to'g'ri
    image: "images/687.jpg"
};

// 688-savol (69-bilet, 8-savol)
QUESTIONS[68].questions[7] = {
    question: "Qayrilib olish quyidagi hollarda taqiqlanadi:",
    answers: [
        "Piyodalar o'tish joylarida va tunnellarda",
        "Ko'priklarda, yo'l o'tkazgichlarda, estakadalarda va ularning ostida",
        "Temir yo'l kesishmalarida",
        "Loaqal bir yo'nalishda yo'l 100 metrdan kamroq ko'ringanda",
        "Sanab o'tilgan barcha hollarda"
    ],
    correct: 4, // F5 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 689-savol (69-bilet, 9-savol)
QUESTIONS[68].questions[8] = {
    question: "Qornidan yopiq jarohat olgan jabrlanuvchi qanday tashiladi?",
    answers: [
        "Yonboshi yoki orqasiga yotqizilgan holatda, lat yegan joyga issiq grelka qo'yiladi",
        "Yotqizilgan holatda, lat yegan joyga sovuq narsa (muz, malham) qo'yiladi",
        "Yarim o'tkazilgan holatda, tizzalari tanaga yaqinlashtiriladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 690-savol (69-bilet, 10-savol)
QUESTIONS[68].questions[9] = {
    question: "Spidometr jihozlari tamg'alanmagan transport vositalaridan foydalanishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi",
        "Faqat xususiy egalariga tegishli transport vositalarga hamda mototsikllar va mopedlarga ruxsat etiladi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 691-savol (70-bilet, 1-savol)
QUESTIONS[69].questions[0] = {
    question: "Qaysi transport vositasining haydovchisi quvib o'tishni to'g'ri bajarmoqda?",
    answers: [
        "Yashil avtomobil haydovchisi",
        "Ko'k avtomobil haydovchisi",
        "Ikkala haydovchi to'g'ri bajarmoqda",
        "Ikkala haydovchilarga quvib o'tish taqiqlangan"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/691.jpg"
};

// 692-savol (70-bilet, 2-savol)
QUESTIONS[69].questions[1] = {
    question: "Qaysi transport vositasining haydovchisi yo'l berishi kerak?",
    answers: [
        "Traktor haydovchisi",
        "Avtobus haydovchisi"
    ],
    correct: 1, // F2 to'g'ri (Ilovadagi belgilangan javobga ko'ra)
    image: "images/692.jpg"
};

// 693-savol (70-bilet, 3-savol)
QUESTIONS[69].questions[2] = {
    question: "Belgi ostidagi qo'shimcha axborot belgisi nimani anglatadi?",
    answers: [
        "Yo'lning tor qismi uzunligini",
        "Belgidan yo'lning tor qismigacha bo'lgan masofani",
        "Tor qismini aylanib o'tish joyigacha masofani"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/693.jpg"
};

// 694-savol (70-bilet, 4-savol)
QUESTIONS[69].questions[3] = {
    question: "Chorrahani ikkinchi bo'lib kim kesib o'tadi?",
    answers: [
        "Yashil avtomobil",
        "Qizil avtomobil",
        "Ko'k avtomobil"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/694.jpg"
};

// 695-savol (70-bilet, 5-savol)
QUESTIONS[69].questions[4] = {
    question: "Qaysi transport vositasining haydovchisi yo'l berishi kerak?",
    answers: [
        "Mototsikl haydovchisi",
        "Yuk avtomobili haydovchisi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/695.jpg"
};

// 696-savol (70-bilet, 6-savol)
QUESTIONS[69].questions[5] = {
    question: "Mazkur tik chiziq nimani bildiradi?",
    answers: [
        "Yo'lning kichik radiusli burilishlardagi yo'l chetiga o'rnatilgan to'siqlarning yon yuzalarini bildiradi",
        "Boshqa joylardagi to'siqlarning yon yuzalarini bildiradi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/696.jpg"
};

// 697-savol (70-bilet, 7-savol)
QUESTIONS[69].questions[6] = {
    question: "To'xtash va to'xtab turish quyidagi hollarda taqiqlangan:",
    answers: [
        "Yo'lning xavfli burilishlarida va qatnov qismida ko'rinish masofasi 100 metrdan kam bo'lgan yo'l do'ngliklari yaqinida",
        "Bir yo'nalishda harakatlanish uchun uchtadan kam tasmaga ega bo'lgan ko'prik, yo'l o'tkazgich va estakadalarning ustida",
        "Sanab o'tilgan barcha hollarda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 698-savol (70-bilet, 8-savol)
QUESTIONS[69].questions[7] = {
    question: "Qishloq xo'jalik ishlari olib boriladigan dalada yuk avtomobili va traktorning harakat trayektoriyasi kesishadi. Kimga yo'l berishi kerak?",
    answers: [
        "Yuk avtomobili haydovchisi traktor haydovchisiga",
        "Traktor haydovchisi yuk avtomobili haydovchisiga",
        "O'ng tomondan yaqinlashayotgan transport vositasi haydovchisiga",
        "O'ng tomondagi haydovchi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 699-savol (70-bilet, 9-savol)
QUESTIONS[69].questions[8] = {
    question: "Transport vositasini tik qiyaliklarda uzatma ajratilgan holatda tushishga ruxsat etiladimi?",
    answers: [
        "Agar avtomobil gidrovakuum kuchaytirgichli tormozlar bilan jihozlangan bo'lsa tavsiya etiladi",
        "Agar yo'l yaxshi holatda bo'lsa va uzoq ko'rinib tursa tavsiya etiladi",
        "Taqiqlanadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 700-savol (70-bilet, 10-savol)
QUESTIONS[69].questions[9] = {
    question: "Qoidalar transport vositalarining harakatlanishni davom ettirishni qanday hollarda taqiqlaydi?",
    answers: [
        "Kuzov (kabina) qismlari va bo'yog'iga tashqi tomondan anchagina shikast yetgan bo'lsa",
        "Ulagich moslamasi nosoz bo'lsa (avtopoyezd tarkibida)",
        "Ressoralarning o'zak qatlami yoki markaziy bolti shikastlansa"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};


// 701-savol
QUESTIONS[70].questions[0] = {
    question: "Qaysi hollarda yo'lning harakatlanish bo'lagini ajratuvchi uzuq-uzuq chiziqni bosib o'tishingiz mumkin?",
    answers: [
        "Faqat qayta tizilishda",
        "Yo'lda boshqa transport vositalari bo'lmasa",
        "Barcha sanab o'tilgan hollarda"
    ],
    correct: 0, // F1
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 702-savol
QUESTIONS[70].questions[1] = {
    question: "Ushbu ko'rsatilgan holatda mototsikl haydovchisi Sizga yo'l berishi kerakmi?",
    answers: [
        "Ha",
        "Yo'q"
    ],
    correct: 0, // F1
    image: "images/702.jpg"
};

// 703-savol
QUESTIONS[70].questions[2] = {
    question: "Yo'lda «STOP» yozuvi ko'rinishidagi yo'l chizigi nimani bildiradi?",
    answers: [
        "Tartibga solingan chorrahada to'xtash chizig'iga yaqinlashayotganligi haqida ogohlantiradi",
        "To'xtash chizig'i va «To'xtamasdan harakatlanish taqiqlanadi» yo'l belgisi o'rnatilgan chorrahaga yaqinlashayotganligini bildiradi",
        "«Yo'l bering» yo'l belgisiga yaqinlashilayotganligini bildiradi"
    ],
    correct: 1, // F2
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 704-savol
QUESTIONS[70].questions[3] = {
    question: "Sanab o'tilgan qaysi hollarda egiluvchan ulagichda shatakka olish taqiqlanadi?",
    answers: [
        "Faqat tog'li yo'llarda",
        "Kunning qorong'i vaqtida va yetarlicha ko'rinmaslik sharoitida",
        "Yo'l yaxmalak, sirpanchiq bo'lgan xollarda",
        "Barcha sanab o'tilgan hollarda"
    ],
    correct: 2, // F3
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 705-savol
QUESTIONS[70].questions[4] = {
    question: "Ushbu yo'l nechta harakatlanish tasmasiga ega?",
    answers: [
        "Bitta harakatlanish tasmasiga",
        "Ikkita harakatlanish tasmasiga",
        "Uchta harakatlanish tasmasiga"
    ],
    correct: 1, // F2
    image: "images/705.jpg"
};

// 706-savol
QUESTIONS[70].questions[5] = {
    question: "Siz chorrahada chapga burilmoqchisiz. Ushbu vaziyatda Siz kimga yo'l berasiz?",
    answers: [
        "Faqat avtobusga",
        "Hech biriga",
        "Faqat yengil avtomobilga"
    ],
    correct: 1, // F2
    image: "images/706.jpg"
};

// 707-savol
QUESTIONS[70].questions[6] = {
    question: "Svetoforning yashil miltillovchi ishorasi nimani bildiradi?",
    answers: [
        "Harakatga ruxsat beradi va tez orada taqiqlovchi ishora yonishi to'g'risida axborot beradi",
        "Harakatni davom ettirishi taqiqlaydi",
        "Svetofor nosozligini"
    ],
    correct: 0, // F1
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 708-savol
QUESTIONS[70].questions[7] = {
    question: "Siz chorrahada to'g'riga o'tmoqchisiz. Ushbu vaziyatda Sizning harakatingiz?",
    answers: [
        "Qizil avtomobil yo'l berayotganiga ishonch hosil qilib chorrahadan birinchi o'tish",
        "Chorrahaga birinchi kirgan qizil avtomobilga yo'l berish"
    ],
    correct: 0, // F1
    image: "images/708.jpg"
};

// 709-savol
QUESTIONS[70].questions[8] = {
    question: "Ushbu belgilardan qaysi biri bir tomonlama harakat tashkil qilingan yo'lning boshida o'rnatiladi?",
    answers: [
        "«Б» yoki «Г»",
        "Faqat «Б»",
        "Faqat «A»",
        "«Б» yoki «В»"
    ],
    correct: 1, // F2
    image: "images/709.jpg"
};

// 710-savol
QUESTIONS[70].questions[9] = {
    question: "Haydovchi ushbu joyda avtomobilni to'xtab turish uchun qo'yishiga ruxsat etiladimi?",
    answers: [
        "Ha",
        "Yo'q"
    ],
    correct: 1, // F2
    image: "images/710.jpg"
};


// 711-savol (72-bilet, 1-savol)
QUESTIONS[71].questions[0] = {
    question: "Ko'rsatilgan yo'l belgilaridan qaysi biri faqat yo'l qoplamasi nam bo'lganda ta'sir etadi?",
    answers: [
        "Faqat «A» va «Б»",
        "Faqat «A»",
        "Barchasi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/711.jpg"
};

// 712-savol (72-bilet, 2-savol)
QUESTIONS[71].questions[1] = {
    question: "Sanab o'tilgan qaysi holatda transport vositasidan foydalanishga ruxsat etiladi?",
    answers: [
        "Tashqi yoritgich asboblari ifloslangan bo'lsa",
        "Yorituvchi chiroq nurining yo'nalishi buzilgan bo'lsa",
        "Old qismida — oq yoki sariq rangli tumanga qarshi faralar o'rnatilgan bo'lsa"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 713-savol (72-bilet, 3-savol)
QUESTIONS[71].questions[2] = {
    question: "Yuk avtomobili haydovchisi to'xtab turish qoidasini buzdimi?",
    answers: [
        "Buzmadi, agar uning ruxsat etilgan to'liq vazni 3,5 tonnadan oshmasa",
        "Buzdi",
        "Buzmadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/713.jpg"
};

// 714-savol (72-bilet, 4-savol)
QUESTIONS[71].questions[3] = {
    question: "Ko'rsatilgan qaysi belgilar sizga yashash manzilingizga avtomobilda o'tishga ruxsat beradi?",
    answers: [
        "Faqat «Б»",
        "«A» va «B»",
        "Faqat «A»",
        "Barchasi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/714.jpg"
};

// 715-savol (72-bilet, 5-savol)
QUESTIONS[71].questions[4] = {
    question: "Qaysi haydovchi to'xtab turish qoidalarini buzdi?",
    answers: [
        "Mototsikl haydovchisi",
        "Trotuarda to'xtab turgan avtomobil haydovchisi",
        "Hech kim buzmadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/715.jpg"
};

// 716-savol (72-bilet, 6-savol)
QUESTIONS[71].questions[5] = {
    question: "Qanday hollarda aholi punktlarida tovush moslamalaridan foydalanishga ruxsat etiladi?",
    answers: [
        "Yo'l-transport hodisasining oldini olish uchun",
        "Har ikkala sanab o'tilgan hollarda",
        "Quvib o'tishda ogohlantirish uchun"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 717-savol (72-bilet, 7-savol)
QUESTIONS[71].questions[6] = {
    question: "Yo'lning sirpanchiq qismida rul chambaragini keskin burganda hosil bo'ladigan sirpanishning oldini olish uchun haydovchi qanday ehtiyot choralarini ko'rishi kerak?",
    answers: [
        "Rul chambaragini zudlik bilan sirpanayotgan tomonga burish va tezda avtomobilni harakat yo'nalishini to'g'rilab olish",
        "Ilashmani uzish",
        "Tormoz tepkisini bosish"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 718-savol (72-bilet, 8-savol)
QUESTIONS[71].questions[7] = {
    question: "Chorrahaga kirganingizda tartibga soluvchi qo'lini yuqoriga ko'tardi, Sizga harakatlanishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi, agarda Siz o'ngga buriladigan bo'lsangiz",
        "Ruxsat etilmaydi",
        "Ruxsat etiladi"
    ],
    correct: 2, // F3 to'g'ri (Agar chorrahaga kirib bo'lgan bo'lsangiz, harakatni tugallashingiz kerak)
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 719-savol (72-bilet, 9-savol)
QUESTIONS[71].questions[8] = {
    question: "Transport vositalari qattiq ulagichda shatakka olinganda shatakka olgan va shatakka olingan transport vositalari orasidagi masofa qancha bo'lishi kerak?",
    answers: [
        "Qoidalarda belgilanmagan",
        "4 metrdan oshmasligi",
        "4 metrdan 6 metrgacha"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 720-savol (72-bilet, 10-savol)
QUESTIONS[71].questions[9] = {
    question: "Turar joy dahalarida qanday harakatlar taqiqlangan?",
    answers: [
        "Faqat o'quv mashg'ulotlarini bajarish",
        "Barcha sanab o'tilgan hollarda",
        "Faqat dvigatel ishlab turganda to'xtab turish"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 721-savol (73-bilet, 1-savol)
QUESTIONS[72].questions[0] = {
    question: "Ko'rsatilgan belgilardan qaysi biri yo'lning ko'rinish masofasi cheklangan joylarida majburan to'xtagan transport vositalarini belgilash uchun qo'llaniladi?",
    answers: [
        "«A»",
        "«Б»",
        "«B»"
    ],
    correct: 0, // F1
    image: "images/721.jpg"
};

// 722-savol (73-bilet, 2-savol)
QUESTIONS[72].questions[1] = {
    question: "Ushbu ko'rsatilgan vaziyatda Sizga hovliga orqa bilan kirib qayrilib olishga ruxsat beriladimi?",
    answers: [
        "Ruxsat beriladi agarda bunda harakatning boshqa ishtirokchilariga halaqit berilmasa",
        "Taqiqlanadi",
        "Ruxsat beriladi"
    ],
    correct: 0, // F1
    image: "images/722.jpg"
};

// 723-savol (73-bilet, 3-savol)
QUESTIONS[72].questions[2] = {
    question: "Agar avtomobil antiblokirovkali (ABS) tormoz tizimi bilan jihozlangan bo'lsa keskin tormoz berishni qanday amalga oshirishi kerak?",
    answers: [
        "Tormoz tepkisini uzib-uzib bosish yo'li bilan",
        "To'xtab turish tormozi tizimini qo'llash yo'li bilan",
        "Tormoz tepkisini oxirigacha bosish va avtomobilni to'liq to'xtaguncha tepkini qo'yib yubormaslik"
    ],
    correct: 2, // F3
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 724-savol (73-bilet, 4-savol)
QUESTIONS[72].questions[3] = {
    question: "Yo'l harakati qoidalari bo'yicha «yonlama oraliq masofa» ni ko'rsating:",
    answers: [
        "Faqat «A»",
        "Faqat «Б»",
        "«A» va «B»",
        "Faqat «B»"
    ],
    correct: 2, // F3
    image: "images/724.jpg"
};

// 725-savol (73-bilet, 5-savol)
QUESTIONS[72].questions[4] = {
    question: "Tumanga qarshi chiroqlar va orqa tumanga qarshi chiroqlar birga yoqilishi mumkin:",
    answers: [
        "Cheklangan ko'rinish sharoitida",
        "Yetarlicha ko'rinmaslik sharoitida"
    ],
    correct: 1, // F2
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 726-savol (73-bilet, 6-savol)
QUESTIONS[72].questions[5] = {
    question: "Ko'rsatilgan qaysi belgi reversiv harakat boshlanishi haqida axborot beradi?",
    answers: [
        "«Б»",
        "«A»",
        "«B»"
    ],
    correct: 2, // F3
    image: "images/726.jpg"
};

// 727-savol (73-bilet, 7-savol)
QUESTIONS[72].questions[6] = {
    question: "Ushbu yo'l belgisi chorrahaga yaqinlashayotganlik to'g'risida ogohlantiradi, bunda Siz:",
    answers: [
        "Faqatgina o'ng tomondan yaqinlashib kelayotgan transport vositalariga yo'l berishingiz kerak",
        "Kesib o'tayotgan yo'ldagi transport vositalariga yo'l berishingiz kerak",
        "Birinchi bo'lib o'tish huquqiga egasiz"
    ],
    correct: 0, // F1
    image: "images/727.jpg"
};

// 728-savol (73-bilet, 8-savol)
QUESTIONS[72].questions[7] = {
    question: "Haydovchiga transport vositasini boshqarish vaqtida telefondan foydalanishga ruxsat etiladimi?",
    answers: [
        "Taqiqlanadi",
        "Qo'lni ishlatmasdan texnik vositalardan foydalanib gaplashishga ruxsat etiladi",
        "20 km/soat tezlikda harakatlanayotganda ruxsat etiladi"
    ],
    correct: 1, // F2
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 729-savol (73-bilet, 9-savol)
QUESTIONS[72].questions[8] = {
    question: "Haydovchi chapga burilishda qaysi yo'nalish bo'yicha qoidani buzmoqda?",
    answers: [
        "Faqat «Б» yo'nalishi bo'yicha",
        "Faqat «A» yo'nalishi bo'yicha",
        "Ko'rsatilgan barcha yo'nalish bo'yicha"
    ],
    correct: 2, // F3
    image: "images/729.jpg"
};

// 730-savol (73-bilet, 10-savol)
QUESTIONS[72].questions[9] = {
    question: "Shatakka olib harakatlanishingiz mumkin:",
    answers: [
        "Istalgan yo'nalishda",
        "Faqat «A» yo'nalishda",
        "Faqat «Б» yo'nalishda"
    ],
    correct: 1, // F2
    image: "images/730.jpg"
};
// 731-savol (74-bilet, 1-savol)
QUESTIONS[73].questions[0] = {
    question: "Sizga ruxsat etilgan to'la vazni 3,5 tonnadan ortiq yuk avtomobilida harakatlanish:",
    answers: [
        "Barcha yo'nalishlarda",
        "Faqat to'g'riga",
        "To'g'ri va o'ngga"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/731.jpg"
};

// 732-savol (74-bilet, 2-savol)
QUESTIONS[73].questions[1] = {
    question: "Kunning yorug' vaqtida aholi punktlarida quvib o'tilayotgan transport vositasi haydovchisining e'tiborini jalb qilish uchun mumkin:",
    answers: [
        "Tovush signalidan foydalanish",
        "Faqat yaqinni yorituvchi chiroqni uzoqni yorituvchi chiroqqa qisqa muddat orasida o'tkazish bilan ishora berish",
        "Faqat birgalikda yorug'lik ishoralari bilan birga tovush signallarini qo'llash",
        "Sanab o'tilganlarning barchasidan foydalanish"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 733-savol (74-bilet, 3-savol)
QUESTIONS[73].questions[2] = {
    question: "Ushbu yo'l chizig'i Sizga qanday manevr bajarishni taqiqlaydi?",
    answers: [
        "Quvib o'tishni",
        "Aylanib o'tishni",
        "Sanab o'tilgan barcha manevrlarga ruxsat beradi",
        "Qayrilib olishni"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/733.jpg"
};

// 734-savol (74-bilet, 4-savol)
QUESTIONS[73].questions[3] = {
    question: "Ushbu belgi axborot beradi:",
    answers: [
        "Reversiv harakatlanish yo'liga chiqish haqida",
        "Siz o'ngga yoki chapga burilishingiz kerakligini ko'rsatadi",
        "Chorrahadan o'ngga va chapga bir tomonlama harakat tashkil qilingan"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/734.jpg"
};

// 735-savol (74-bilet, 5-savol)
QUESTIONS[73].questions[4] = {
    question: "Svetofor (ishoralari) qaysi guruh yo'l belgilarini bekor qiladi (miltillovchi sariq ishoradan tashqari)?",
    answers: [
        "Buyuruvchi belgilar",
        "Ta'qiqlovchi belgilar",
        "Imtiyoz belgilari",
        "Barcha sanab o'tilganlari"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 736-savol (74-bilet, 6-savol)
QUESTIONS[73].questions[5] = {
    question: "108 km/soat tezlikda harakatlanayotgan transport vositasi 1 sekundda qancha masofani bosib o'tadi?",
    answers: [
        "30 m",
        "15 m",
        "25 m"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 737-savol (74-bilet, 7-savol)
QUESTIONS[73].questions[6] = {
    question: "M3 toifadagi avtotransport vositalarining boshqaruv qurilmasidagi qanday eng katta lyuft yig'indisiga yo'l quyiladi:",
    answers: [
        "25°",
        "20°",
        "10°"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 738-savol (74-bilet, 8-savol)
QUESTIONS[73].questions[7] = {
    question: "Qaysi hollarda transport vositasidan foydalanish taqiqlanadi?",
    answers: [
        "Yonilg'i darajasini ko'rsatish qurilmasi ishlamaydi",
        "O't oldirish tizimi nosoz",
        "Dvigatel qiyinchilik bilan ishga tushadi",
        "Tovush signallari ishlamaydi"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 739-savol (74-bilet, 9-savol)
QUESTIONS[73].questions[8] = {
    question: "72 km/soat tezlikda harakatlanayotgan transport vositasi 1 sekundda qancha masofani bosib o'tadi?",
    answers: [
        "15 m",
        "20 m",
        "25 m"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 740-savol (74-bilet, 10-savol)
QUESTIONS[73].questions[9] = {
    question: "Qaysi yo'nalishda harakatlanishni davom ettirishingiz mumkin?",
    answers: [
        "Chapga va orqaga qayrilib olishga",
        "Faqat chapga",
        "O'ngga, chapga va orqaga qayrilib olishga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/740.jpg"
};

// 741-savol (75-bilet, 1-savol)
QUESTIONS[74].questions[0] = {
    question: "Siz yengil avtomobildan qaysi jihozlar mavjud bo'lmaganda foydalanishingiz mumkin?",
    answers: [
        "O't o'chirgich",
        "G'ildirab ketishga qarshi moslama",
        "Tibbiy quticha",
        "Avariya sababli to'xtash belgisi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 742-savol (75-bilet, 2-savol)
QUESTIONS[74].questions[1] = {
    question: "Quvib o'tishda burilish ko'rsatkichi bilan beriladigan ogohlantiruvchi ishoralarni, haydovchi qachon o'chirishi kerak?",
    answers: [
        "O'z ixtiyoringizga ko'ra",
        "Manyovrni tugallagach, darhol",
        "Quvib o'tilayotgan transport vositasidan o'zib ketgandan so'ng istalgan vaqtda"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 743-savol (75-bilet, 3-savol)
QUESTIONS[74].questions[2] = {
    question: "Qaysi yo'l belgisi chapga burilishni taqiqlaydi?",
    answers: [
        "Faqat «A»",
        "«A» va «Б»",
        "«A» va «Г»",
        "Barchasi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/743.jpg"
};

// 744-savol (75-bilet, 4-savol)
QUESTIONS[74].questions[3] = {
    question: "Piyodalar turar joy dahasida qayerda harakatlanishlari mumkin?",
    answers: [
        "Faqat trotuarda",
        "Faqat qatnov qismida",
        "Trotuarda, hamda qatnov qismida"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 745-savol (75-bilet, 5-savol)
QUESTIONS[74].questions[4] = {
    question: "Qaysi transport vositasining haydovchisi qoidani buzib burilmoqda?",
    answers: [
        "Faqat yengil avtomobil haydovchisi",
        "Ikkisi ham buzmoqda",
        "Faqat mototsikl haydovchisi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/745.jpg"
};

// 746-savol (75-bilet, 6-savol)
QUESTIONS[74].questions[5] = {
    question: "Kunning yorug' vaqtida quyidagi hollarda yaqinni yorituvchi chiroqlar yoqilishi kerak:",
    answers: [
        "Mototsikl va mopedlarda",
        "Xavfli, katta o'lchamli va og'ir vaznli yuklarni tashishda",
        "Yo'lovchilarni tashiyotgan avtobus va yo'nalishli transport vositalarida",
        "Barcha sanab o'tilgan hollarda"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 747-savol (75-bilet, 7-savol)
QUESTIONS[74].questions[6] = {
    question: "Ushbu yo'lda sizga yo'l belgisidan keyin qaysi tasmalarda harakatlanishga ruxsat beriladi?",
    answers: [
        "Faqat chap tasmadan",
        "Istalgan tasmadan",
        "O'ng tasmadan"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/747.jpg"
};

// 748-savol (75-bilet, 8-savol)
QUESTIONS[74].questions[7] = {
    question: "Qanday alomatlar charchash belgilari hisoblanadi?",
    answers: [
        "Uyquchanlik, bo'shashish, diqqatning susayishi",
        "Bosh aylanishi, ko'zlarga qum kirgan kabi achishish, terlash alomati",
        "Zo'riqish, asabiylashish"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 749-savol (75-bilet, 9-savol)
QUESTIONS[74].questions[8] = {
    question: "Chorrahadagi uzuq-uzuq chiziqlar nimani bildiradi?",
    answers: [
        "Majburiy harakatlanish",
        "Chorrahada harakatlanish bo'lagini chegarasini"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/749.jpg"
};

// 750-savol (75-bilet, 10-savol)
QUESTIONS[74].questions[9] = {
    question: "Yo'l transport hodisasiga daxldor haydovchilar birinchi navbatda nima qilishlari kerak?",
    answers: [
        "Transport vositasini darhol to'xtatishi, avariya ishoralarini yoqishi va avariya sababli to'xtash belgisini o'rnatishi",
        "Sodir etilgan hodisa xaqida YHXXga xabar berishi kerak",
        "Yo'lning harakat qismini bo'shatishlari kerak"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 751-savol (76-bilet, 1-savol)
QUESTIONS[75].questions[0] = {
    question: "Kunning qorong'i vaqtida aholi punktlarida yo'lning yoritilgan qismida Siz qanday tashqi yoritish chiroqlaridan foydalanishingiz kerak?",
    answers: [
        "Yaqinni yoki uzoqni yorituvchi chiroqlardan",
        "Yaqinni yorituvchi chiroqlardan",
        "Gabarit chiroqlardan"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 752-savol (76-bilet, 2-savol)
QUESTIONS[75].questions[1] = {
    question: "Qaysi holatda siz majburiy to'xtashni amalga oshirasiz?",
    answers: [
        "Piyodalar o'tish joyi oldida piyodalarga yo'l berish uchun to'xtab",
        "Texnik nosozlik tufayli yo'lning harakat qismida",
        "Har ikki sanab o'tilgan holda"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 753-savol (76-bilet, 3-savol)
QUESTIONS[75].questions[2] = {
    question: "Qaysi hollarda Sizga harakatni davom ettirish taqiqlanadi, hatto ta'mirlash ustaxonasiga ham, agarda faralar va orqa gabarit chiroqlar nosoz bo'lsa?",
    answers: [
        "Kunning qorong'u vaqtida",
        "Har ikki sanab o'tilgan holda",
        "Faqat yetarlicha ko'rinmaslik sharoitida"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 754-savol (76-bilet, 4-savol)
QUESTIONS[75].questions[3] = {
    question: "Kunning yorug' vaqtida aholi punktlaridan tashqarida Siz quvib o'tayotgan transport vositasi haydovchisining e'tiborini qanday jalb qilasiz?",
    answers: [
        "Faqat yorug'lik faralarini qisqa-qisqa yoqib o'chirish bilan",
        "Faqat tovush ishorasi bilan",
        "Sanab o'tilgan barcha usul bilan va ularni birga qo'llash bilan"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 755-savol (76-bilet, 5-savol)
QUESTIONS[75].questions[4] = {
    question: "Sanab o'tilgan qaysi transport vositalarini o't o'chirgichsiz tasarruf etishga ruxsat etiladi?",
    answers: [
        "Avtobuslarni",
        "Faqat yon kajavasiz mototsikllarni",
        "Avtomobillarni",
        "Barcha mototsikllarni"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 756-savol (76-bilet, 6-savol)
QUESTIONS[75].questions[5] = {
    question: "Qaysi qo'shimcha axborot belgilari birga qo'llanilganda belgilarning ta'sir oralig'ini ko'rsatadi?",
    answers: [
        "«Б» va «В»",
        "Faqat «Б»",
        "Faqat «A»"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/756.jpg"
};

// 757-savol (76-bilet, 7-savol)
QUESTIONS[75].questions[6] = {
    question: "Birinchi uzatmada uzoq tezlanishda yurish yoqilg'i sarfiga qanday ta'sir etadi?",
    answers: [
        "Yoqilg'i sarfi o'zgarmaydi",
        "Yoqilg'i sarfi ortadi",
        "Yoqilg'i sarfi kamayadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 758-savol (76-bilet, 8-savol)
QUESTIONS[75].questions[7] = {
    question: "Ko'rsatilgan yo'l belgilaridan qaysilari Siz yo'lning tor qismida yo'l berishingizni talab qiladi?",
    answers: [
        "Faqat «В»",
        "«Б» va «В»",
        "«Б» va «Г»",
        "«A» va «В»"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/758.jpg"
};

// 759-savol (76-bilet, 9-savol)
QUESTIONS[75].questions[8] = {
    question: "Qanday hollarda yo'lning burilish qismlarida yengil avtomobil ag'darilishga qarshi turg'unroq?",
    answers: [
        "Yo'lovchilar bilan yuksiz",
        "Yuksiz va yo'lovchilarsiz",
        "Yo'lovchilarsiz, yuqori yukxonasida yuki bilan"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 760-savol (76-bilet, 10-savol)
QUESTIONS[75].questions[9] = {
    question: "Qaysi yo'l belgisi piyodalar yo'lkasini bildiradi?",
    answers: [
        "Faqat «Б» va «В»",
        "Faqat «Б»",
        "Barchasi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/760.jpg"
};

// 761-savol (77-bilet, 1-savol)
QUESTIONS[76].questions[0] = {
    question: "«Quvib o'tish» atamasi nimani bildiradi?",
    answers: [
        "Egallagan harakatlanish bo'lagidan chiqib, oldinda harakatlanayotgan transport vositasidan o'zib ketish",
        "Bir va bir necha transport vositalaridan o'zib ketish",
        "Bir yoki bir nechta transport vositalarini qarama-qarshi yo'nalishda harakatlanish uchun mo'ljallangan tasmaga chiqib, so'ng ilgari egallagan qatoriga qaytib o'tish bilan bog'liq bo'lgan o'zib ketish"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 762-savol (77-bilet, 2-savol)
QUESTIONS[76].questions[1] = {
    question: "Ko'rsatilgan yo'l belgilaridan qaysi biri ruxsat etilgan to'la vazni 3,5 tonnadan kam bo'lgan yuk avtomobiliga o'ngga harakatlanishni buyuradi.",
    answers: [
        "Faqat «Б»",
        "Faqat «A»",
        "«Б» va «В»",
        "«A» va «Б»"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/762.jpg"
};

// 763-savol (77-bilet, 3-savol)
QUESTIONS[76].questions[2] = {
    question: "Tormoz tizimiga ega bo'lmagan tirkama bilan harakatlanayotganda yengil avtomobilni tormoz yo'li qanday o'zgaradi?",
    answers: [
        "Tormoz yo'li uzayadi",
        "Tirkama qo'shimcha qarshilikka ega bo'lgani uchun tormoz yo'li kamayadi",
        "Tormoz yo'li o'zgarmaydi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 764-savol (77-bilet, 4-savol)
QUESTIONS[76].questions[3] = {
    question: "Tuman sharoitida, agar ko'rinish masofasi 300 metrdan kam bo'lsa kunduzgi chiroqlarni yoqish yetarlimi?",
    answers: [
        "Yetarli",
        "Yetarli emas"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 765-savol (77-bilet, 5-savol)
QUESTIONS[76].questions[4] = {
    question: "Qattiq yoki egiluvchan ulagichda shatakka olgan yuk avtomobilining kuzovida odam tashishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 766-savol (77-bilet, 6-savol)
QUESTIONS[76].questions[5] = {
    question: "Sanab o'tilgan qaysi hollarda haydovchi orqadagi vaziyatni e'tiborga olishi kerak?",
    answers: [
        "Har qanday tormozlashda",
        "Faqat nam qoplama yoki yaxmalakli yo'llarda tormoz berganda",
        "Faqat keskin tormoz berishda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 767-savol (77-bilet, 7-savol)
QUESTIONS[76].questions[6] = {
    question: "Qaysi yo'l belgisi barcha transport vositalarining harakatini istisnosiz taqiqlaydi?",
    answers: [
        "«Б»",
        "«B»",
        "«A»"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/767.jpg"
};

// 768-savol (77-bilet, 8-savol)
QUESTIONS[76].questions[7] = {
    question: "Chorrahaga kirishda Siz:",
    answers: [
        "Birinchi o'tish huquqiga egasiz",
        "Mototsiklga yo'l berishingiz kerak",
        "Har ikkisiga ham yo'l berishingiz kerak"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/768.jpg"
};

// 769-savol (77-bilet, 9-savol)
QUESTIONS[76].questions[8] = {
    question: "Yo'lning keskin burilishida yuzaga keladigan sirpanishning oldini olish uchun haydovchi nima qilishi kerak?",
    answers: [
        "Burilishdan oldin tezlikni kamaytirib, avtomobilni erkin harakatlanishi uchun ilashma tepkisini bosishi",
        "Burilishdan oldin tezlikni kamaytirish, kerak bo'lsa uzatmalar pog'onasini pasaytirish, burilishdan o'tayotganda tezlikni oshirmaslik va avtomobilni keskin tormozlamaslik",
        "Sanab o'tilgan har ikki usulni qo'llashga ruxsat etiladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 770-savol (77-bilet, 10-savol)
QUESTIONS[76].questions[9] = {
    question: "Kunning qorong'i vaqtida va bulutli ob-havoda ro'paradan kelayotgan avtomobil tezligi qanday tuyuladi?",
    answers: [
        "Tezlikni qabul qilish o'zgarmaydi",
        "Aslidagidan kam tezlikda tuyuladi",
        "Aslidagidan katta tezlikda tuyuladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 771-savol (78-bilet, 1-savol)
QUESTIONS[77].questions[0] = {
    question: "Siz ro'paradan yaqinlashayotgan yuk avtomobiliga yo'l berishingiz kerakmi?",
    answers: [
        "Ha",
        "Yo'q"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/771.jpg"
};

// 772-savol (78-bilet, 2-savol)
QUESTIONS[77].questions[1] = {
    question: "Ushbu holatda Sizga temir yo'l kesishmasiga chiqishga ruxsat etiladimi?",
    answers: [
        "Ha, yaqinlashib kelayotgan poyezd yo'q bo'lsa",
        "Ha",
        "Taqiqlanadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/772.jpg"
};

// 773-savol (78-bilet, 3-savol)
QUESTIONS[77].questions[2] = {
    question: "Transport vositasi qiyalikda joyidan qo'zg'alishda to'xtab turish tormoz dastagini qay vaqtda tushirishni boshlash kerak?",
    answers: [
        "Harakatni boshlagandan so'ng",
        "Harakatni boshlashdan avval",
        "Harakatni boshlash bilan bir vaqtda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 774-savol (78-bilet, 4-savol)
QUESTIONS[77].questions[3] = {
    question: "Avtomobilning ABS tizimi burilishida sirpanish va yonga siljishni oldini oladimi?",
    answers: [
        "Avtomobilni faqat sirpanish ehtimolining oldini oladi",
        "Avtomobilni sirpanish va yonga siljish ehtimolining oldini olmaydi",
        "Avtomobilni faqat yonga siljish ehtimolining oldini oladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 775-savol (78-bilet, 5-savol)
QUESTIONS[77].questions[4] = {
    question: "Chorrahaning ko'rsatilgan joyida Sizga to'xtashga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi, agarda Sizning transport vositangiz bilan sidirg'a chiziq orasidagi masofa 3 metrdan ortiq bo'lsa",
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/775.jpg"
};

// 776-savol (78-bilet, 6-savol)
QUESTIONS[77].questions[5] = {
    question: "Siz chapga burilmoqchisiz, kimga yo'l berishingiz kerak?",
    answers: [
        "Har ikki transport vositasiga",
        "Faqat avtobusga",
        "Faqat yuk avtomobiliga"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/776.jpg"
};

// 777-savol (78-bilet, 7-savol)
QUESTIONS[77].questions[6] = {
    question: "Yengil avtomobilning orqa oynasiga parda yoki jalyuzilar o'rnatish mumkinmi?",
    answers: [
        "Ruxsat etiladi, agarda ikki tomonda orqani ko'rsatuvchi ko'zgusi bo'lsa",
        "Taqiqlanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 778-savol (78-bilet, 8-savol)
QUESTIONS[77].questions[7] = {
    question: "90 km/soat tezlikda harakatlanayotgan transport vositasi 1 sekundda qancha masofani bosib o'tadi?",
    answers: [
        "25 m",
        "15 m",
        "35 m"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 779-savol (78-bilet, 9-savol)
QUESTIONS[77].questions[8] = {
    question: "Shatakka olingan avtomobilni avariya ishoralari nosoz bo'lganda transport vositasi qanday belgilanishi kerak?",
    answers: [
        "Shatakka olingan transport vositasi orqa tomoniga avariya sababli to'xtash belgisini o'rnatish",
        "Orqa tumanga qarshi chiroqlarini yoqish",
        "Gabarit chiroqlarini yoqish"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 780-savol (78-bilet, 10-savol)
QUESTIONS[77].questions[9] = {
    question: "Ko'rsatilgan qaysi joyda siz avtomobilni qoidaga binoan to'xtatishingiz mumkin?",
    answers: [
        "Hech qaysisida",
        "Faqat «Б» va «В»",
        "Faqat «A»",
        "Faqat «Б»"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/780.jpg"
};

// 781-savol (79-bilet, 1-savol)
QUESTIONS[78].questions[0] = {
    question: "Yonlama oraliq masofani tanlashda tezlikning dahli bormi?",
    answers: [
        "Yonlama oraliq masofani tanlashni tezlikka aloqasi yo'q",
        "Tezlik oshganda yonlama oraliq masofani oshirish kerak"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 782-savol (79-bilet, 2-savol)
QUESTIONS[78].questions[1] = {
    question: "Ushbu vaziyatda quvib o'tishdan so'ng Siz o'rta bo'lakda qolishingiz mumkinmi?",
    answers: [
        "Ha",
        "Yo'q"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/782.jpg"
};

// 783-savol (79-bilet, 3-savol)
QUESTIONS[78].questions[2] = {
    question: "Cheklangan ko'rinish sharoitida orqaga harakatlanishda harakat xavfsizligini ta'minlash uchun:",
    answers: [
        "Avariya (xavf-xatar) ishoralarini yoqish",
        "Tovushli signal berish",
        "Boshqa shaxslar yordamidan foydalanish"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 784-savol (79-bilet, 4-savol)
QUESTIONS[78].questions[3] = {
    question: "Uzoq davom etadigan keng ravon yo'da avtomobilni yuqori tezlikda boshqarganda haydovchiga tezlik qanday qabul qilinadi?",
    answers: [
        "Tezlikni qabul qilish o'zgarmaydi",
        "Aslidagidan tez harakatlanayotganga o'xshaydi",
        "Aslidagidan sekin harakatlanayotganga o'xshaydi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 785-savol (79-bilet, 5-savol)
QUESTIONS[78].questions[4] = {
    question: "Piyodalar to'xtab turgan avtobus va trolleybusning qaysi tomonidan yo'lni kesib o'tishlari kerak?",
    answers: [
        "Istalgan tomonidan",
        "Orqa tomonidan",
        "Oldi tomonidan"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 786-savol (79-bilet, 6-savol)
QUESTIONS[78].questions[5] = {
    question: "Nosoz transport vositasini shatakka olgan yengil avtomobil salonida odam tashishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 787-savol (79-bilet, 7-savol)
QUESTIONS[78].questions[6] = {
    question: "Sizga ko'rsatilgan joyda yengil avtomobilda to'xtashga ruxsat etiladimi?",
    answers: [
        "Yo'q",
        "Ha"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/787.jpg"
};

// 788-savol (79-bilet, 8-savol)
QUESTIONS[78].questions[7] = {
    question: "Ushbu holatda siz bajarishingiz lozim:",
    answers: [
        "Boshqa transport vositalari bo'lmasa to'xtamasdan o'tib ketish",
        "Belgi oldida to'xtash",
        "To'xtash chizig'i oldida to'xtash"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/788.jpg"
};

// 789-savol (79-bilet, 9-savol)
QUESTIONS[78].questions[8] = {
    question: "Yo'lning qanday qismida harakatlanganda kuchli yonlama shamol xavfi ortadi?",
    answers: [
        "Yo'lning yopiq qismidan ochiq qismiga o'tganda",
        "Yo'lning yopiq qismida harakatlanganda",
        "Ochiq joyda harakatlanganda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 790-savol (79-bilet, 10-savol)
QUESTIONS[78].questions[9] = {
    question: "Kunning yorug' vaqtida aholi punktlaridan tashqarida quvib o'tilayotgan transport vositasi haydovchisining e'tiborini qanday jalb qilasiz?",
    answers: [
        "Faqat chiroqlarni yoqib-o'chirish bilan",
        "Sanab o'tilgan barcha usul bilan va ularni birgalikda qo'llash bilan",
        "Faqat tovush ishoralarini qo'llab"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 791-savol (80-bilet, 1-savol)
QUESTIONS[79].questions[0] = {
    question: "To'xtab turish qoidasini kim buzdi?",
    answers: [
        "Faqat «Б»",
        "Faqat «A»",
        "«A» va «Б»"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/791.jpg"
};

// 792-savol (80-bilet, 2-savol)
QUESTIONS[79].questions[1] = {
    question: "Tormoz tizimi ishlamaydigan avtomobilning vazni sizning avtomobilingizni yarim vaznidan og'ir bo'lsa uni shatakka olishingizga ruxsat etiladimi?",
    answers: [
        "Taqiqlanadi",
        "Ruxsat etiladi",
        "Faqat 30 km/soat tezlikda ruxsat etiladi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 793-savol (80-bilet, 3-savol)
QUESTIONS[79].questions[2] = {
    question: "Yoqilg'i bilan ta'minlash tepkisini keskin tezlikni oshirish uchun bosayotganda, avtomobil sirpanishni boshlasa haydovchi qanday harakat qilishi kerak?",
    answers: [
        "Tepkiga ta'sir etuvchi kuchni kamaytirish",
        "Tepkini yana kuchliroq bosish",
        "Tepkiga ta'sir etuvchi kuchni o'zgartirmaslik"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 794-savol (80-bilet, 4-savol)
QUESTIONS[79].questions[3] = {
    question: "Yengil avtomobilda qaysi yo'nalishda harakatlanishga ruxsat etiladi?",
    answers: [
        "Faqat to'g'riga",
        "Faqat o'ngga va chapga",
        "Istalgan yo'nalishda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/794.jpg"
};

// 795-savol (80-bilet, 5-savol)
QUESTIONS[79].questions[4] = {
    question: "Qaysi yo'l belgilari qayrilib olishga ruxsat beradi?",
    answers: [
        "Faqat «Б» va «Г»",
        "Faqat «A», «Б» va «B»",
        "Faqat «Б»",
        "Barchasi"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/795.jpg"
};

// 796-savol (80-bilet, 6-savol)
QUESTIONS[79].questions[5] = {
    question: "Yo'nalishli transport vositasi bekatidan tashqarida yo'l chetidan qo'zg'alayotgan yo'nalishli transport vositasiga yo'l berishingiz kerakmi?",
    answers: [
        "Ha",
        "Yo'q"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/796.jpg"
};

// 797-savol (80-bilet, 7-savol)
QUESTIONS[79].questions[6] = {
    question: "Quruq ob-havo sharoitida asfalt - beton qoplamali yo'lda harakatlanayotgan haydovchi yomg'ir tomchilab qolganda nima qilishi kerak?",
    answers: [
        "Tezlikni o'zgartirmasdan harakatni davom ettirishi",
        "Yomg'ir tezlashib ketmasdan tezroq harakat qilishi",
        "Tezlikni kamaytirishi va ehtiyot bo'lishi kerak"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 798-savol (80-bilet, 8-savol)
QUESTIONS[79].questions[7] = {
    question: "Aholi punktlariga tegishli yo'l harakati qoidalari qayerdan boshlanadi?",
    answers: [
        "Aholi punkti nomini ko'rsatuvchi oq rangli 5.22 yo'l belgisidan boshlab",
        "Aholi punkti nomini ko'rsatuvchi oq rangli 5.22 yoki 5.24 havorang rangli yo'l belgidan boshlab",
        "Yo'l yuzidagi qurilma va inshootlardan boshlab"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 799-savol (80-bilet, 9-savol)
QUESTIONS[79].questions[8] = {
    question: "Ushbu yo'l belgisi ta'sir oralig'ida sizga odam tushirish (chiqarish)ga yoki yuk ortish (tushirish)ga ruxsat etiladimi?",
    answers: [
        "Ha",
        "Yo'q"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/799.jpg"
};

// 800-savol (80-bilet, 10-savol)
QUESTIONS[79].questions[9] = {
    question: "Burilish ko'rsatkichi bilan berilayotgan ogohlantiruvchi ishora qachon to'xtatilishi kerak?",
    answers: [
        "Manyovr bajargandan so'ng darhol",
        "Manyovr bajarayotganda",
        "Manyovr bajarishdan oldin"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 801-savol (81-bilet, 1-savol)
QUESTIONS[80].questions[0] = {
    question: "Harakatlanishga ruxsat berilgan:",
    answers: [
        "Qizil va sariq avtomobilga",
        "Qizil, sariq va yashil avtomobilga",
        "Qizil, ko'k, yashil va sariq avtomobilga"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/801.jpg"
};

// 802-savol (81-bilet, 2-savol)
QUESTIONS[80].questions[1] = {
    question: "Ushbu belgi ...",
    answers: [
        "Oldinda transport vositalarining tirbandligi haqida ogohlantiradi",
        "Oldinda transport vositalari orasida xavfsiz oraliqni ta'minlash haqida ogohlantiradi",
        "Oldinda harakatlanish serqatnovligi haqida ogohlantiradi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/802.jpg"
};

// 803-savol (81-bilet, 3-savol)
QUESTIONS[80].questions[2] = {
    question: "Quyidagi belgilardan qaysi biri haydovchini boshqa xavf-xatarlar to'g'risida ogohlantiradi?",
    answers: [
        "Faqat «Б»",
        "Faqat «A»",
        "Faqat «B»"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/803.jpg"
};

// 804-savol (81-bilet, 4-savol)
QUESTIONS[80].questions[3] = {
    question: "Svetoforning qizil yoki sariq ishorasi bilan bir vaqtda yongan qo'shimcha tarmoqning yo'naltirgichli yashil ishorasi yo'nalishida harakatlanayotgan transport vositasining haydovchisi kimga yo'l berishi kerak?",
    answers: [
        "Qarama-qarshi yo'nalishda to'g'riga yoki o'ngga harakatlanayotgan transport vositalariga",
        "O'ngdan kelayotgan transport vositalariga",
        "Boshqa yo'nalishlarda harakatlanayotgan transport vositalariga yo'l berishi kerak"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 805-savol (81-bilet, 5-savol)
QUESTIONS[80].questions[4] = {
    question: "Yo'l-transport hodisasi - bu ...",
    answers: [
        "Yo'l harakati qatnashchilarining yo'l-transport hodisalari va ularning oqibatlaridan himoyalanganlik darajasini aks ettiruvchi yo'l harakati holati",
        "Transport vositasining yo'lda harakatlanishi jarayonida ro'y bergan, fuqarolarning halok bo'lishiga yoki sog'lig'iga zarar yetishiga, transport vositalari, inshootlar, yuklarning shikastlanishi yoxud boshqa moddiy zarar yetishiga sabab bo'lgan hodisa"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 806-savol (81-bilet, 6-savol)
QUESTIONS[80].questions[5] = {
    question: "Avtomobilni qanday boshqarish usuli yonilg'i sarfini tejaydi?",
    answers: [
        "Ohista (ravon) tezlanish va shiddat bilan sekinlashish bilan",
        "Shiddat bilan tezlanish va ohista (ravon) sekinlashish bilan",
        "Ohista (ravon) tezlanish va ohista (ravon) sekinlashish bilan"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 807-savol (81-bilet, 7-savol)
QUESTIONS[80].questions[6] = {
    question: "Piyodalar o'tish joyi - bu ...",
    answers: [
        "Yo'l qatnov qismining piyodalar kesib o'tishi uchun mo'ljallangan, 5.16.1, 5.16.2 yo'l belgilari va 1.14.1-1.14.3 yo'l chiziqlari bilan ajratilgan bo'lagi",
        "Yo'lning piyodalar harakatlanishi uchun mo'ljallangan va transport vositalari harakati taqiqlangan qismi",
        "Qatnov qismiga tutashgan yoki undan maysazor, ariq, maxsus to'siqlar bilan ajratilgan va piyodalarning harakatlanishi uchun mo'ljallangan yo'l qismi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 808-savol (81-bilet, 8-savol)
QUESTIONS[80].questions[7] = {
    question: "Moped haydovchilariga ruxsat beriladi:",
    answers: [
        "Faqat yo'l yoqasidan harakatlanishga, agar piyodalarga halaqit bermasa",
        "Faqat yo'lning chetki o'ng bo'lagi tomonidan bir qator bo'lib harakatlanishga",
        "Barcha sanab o'tilgan hollarda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 809-savol (81-bilet, 9-savol)
QUESTIONS[80].questions[8] = {
    question: "Ushbu yotiq chiziq nimani bildiradi?",
    answers: [
        "Sun'iy yo'l notekisligini",
        "Velosiped yo'lkasini",
        "Yo'nalishli taksilar to'xtaydigan joyni"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/809.jpg"
};

// 810-savol (81-bilet, 10-savol)
QUESTIONS[80].questions[9] = {
    question: "Siz chorrahada chapga burilishda qaysi transport vositasi yo'l berishingiz kerak?",
    answers: [
        "Hech kimga",
        "Yengil avtomobilga",
        "Avtobusga"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/810.jpg"
};

// 811-savol (82-bilet, 1-savol)
QUESTIONS[81].questions[0] = {
    question: "Bosh miya jarohatlanishining asosiy alomatlari:",
    answers: [
        "Hushdan ketish bir necha soniyadan bir necha soatgacha bo'lishi mumkin",
        "Qayt qilish bir-ikki marta, og'ir holatlarda ko'proq bo'lishi mumkin",
        "Amneziya - xotiraning yo'qolishi sodir bo'lgan jarohatlanish bilan bog'liq va hayotidagi ba'zi voqealar xotirasidan o'chadi",
        "Yuqoridagi barcha holatlar"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 812-savol (82-bilet, 2-savol)
QUESTIONS[81].questions[1] = {
    question: "G'ildiraklarni yo'l bilan ilashishi yo'qolganda (kuchli yomg'ir, sel yoki suv toshgan yo'l qismlari) haydovchi:",
    answers: [
        "Dvigatel bilan tormozlash orqali tezlikni kamaytirishi lozim",
        "Tezlikni oshirishi lozim",
        "Tormoz tepkisini keskin bosish bilan tezlikni kamaytirishi lozim"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 813-savol (82-bilet, 3-savol)
QUESTIONS[81].questions[2] = {
    question: "Ushbu ko'rsatilgan yo'llar nechta qatnov qismiga ega?",
    answers: [
        "Chapda bittadan, o'ngda ikkitadan",
        "Bittadan",
        "To'rttadan"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/813.jpg"
};

// 814-savol (82-bilet, 4-savol)
QUESTIONS[81].questions[3] = {
    question: "Yo'lning qiyaliklarida qisqa muddatga to'xtagan mexanik uzatmali avtomobilni joyidan to'satdan harakatlanib ketishini oldini olish uchun:",
    answers: [
        "Uzatmalar qutisi richagini neytral holatga o'tkazish lozim",
        "Birinchi uzatmani yoki orqauzatmani ulash lozim",
        "To'xtab turish tormozidan foydalanish lozim"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 815-savol (82-bilet, 5-savol)
QUESTIONS[81].questions[4] = {
    question: "To'xtab turish tormoz tizimi N toifadagi avtotransport vositalarini aslahalangan holatda qanday qiyalikda harakatsiz holatda ushlab tura olmasa foydalanish taqiqlanadi?",
    answers: [
        "20 foizdam kam bo'lgan",
        "31 foizdam kam bo'lgan",
        "25 foizdam kam bo'lgan",
        "16 foizdam kam bo'lgan"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 816-savol (82-bilet, 6-savol)
QUESTIONS[81].questions[5] = {
    question: "Qaysi belgi yo'lning tor qismlarida ro'paradan kelayotgan transport vositasiga yo'l berish lozimligini bildiradi?",
    answers: [
        "«Б» va «В»",
        "«Г»",
        "«A» va «Г»",
        "«Б»",
        "«A»"
    ],
    correct: 4, // F5 to'g'ri
    image: "images/816.jpg"
};

// 817-savol (82-bilet, 7-savol)
QUESTIONS[81].questions[6] = {
    question: "Ko'rsatilgan yo'l belgilaridan qaysi biri taqiqlovchi belgilar ilgari kiritgan barcha cheklovlarni bekor qiladi?",
    answers: [
        "«В» va «Г»",
        "«A» va «Б»",
        "Faqat «В»",
        "Barchasi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/817.jpg"
};

// 818-savol (82-bilet, 8-savol)
QUESTIONS[81].questions[7] = {
    question: "Piyodalar yo'lkasi - bu ...",
    answers: [
        "Qatnov qismiga tutashgan yoki undan maysazor, ariq, maxsus to'siqlar bilan ajratilgan va piyodalarning harakatlanishi uchun mo'ljallangan yo'l qismi",
        "Yo'lning piyodalar harakatlanishi uchun mo'ljallangan va transport vositalari harakati taqiqlangan qismi",
        "Yo'l qatnov qismining piyodalar kesib o'tishi uchun mo'ljallangan, 5.16.1, 5.16.2 yo'l belgilari va 1.14.1-1.14.3 yo'l chiziqlari bilan ajratilgan bo'lagi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 819-savol (82-bilet, 9-savol)
QUESTIONS[81].questions[8] = {
    question: "Ushbu belgilardan qaysi biri haydovchining shu joydagi yashash yoki ishlash joyiga yetib borshiga monelik qilmaydi?",
    answers: [
        "«A»",
        "«C»",
        "«B» va «C»",
        "«B»"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/819.jpg"
};

// 820-savol (82-bilet, 10-savol)
QUESTIONS[81].questions[9] = {
    question: "Qaysi rasmda ajratuvchi mintaqasi bor bo'lgan yo'l ko'rsatilgan?",
    answers: [
        "Chap tarafdagisida",
        "Har ikkisida",
        "O'ng tarafdagisida"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/820.jpg"
};

// 821-savol (83-bilet, 1-savol)
QUESTIONS[82].questions[0] = {
    question: "Agar haydovchi keskin tormoz bermasdan harakatni to'xtata olmasa, svetoforning yashil ishorasidan keyin yongan sariq ishorasida harakatni davom ettirishga ruxsat beriladimi?",
    answers: [
        "Taqiqlanadi",
        "Ruxsat etiladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 822-savol (83-bilet, 2-savol)
QUESTIONS[82].questions[1] = {
    question: "Ushbu chorrahada kim yo'l beradi?",
    answers: [
        "Mototsikl va sariq avtomobil",
        "Ko'k avtomobil"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/822.jpg"
};

// 823-savol (83-bilet, 3-savol)
QUESTIONS[82].questions[2] = {
    question: "Qaysi belgi velosiped yo'lkasini ko'rsatadi?",
    answers: [
        "«C»",
        "«A»",
        "«B»"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/823.jpg"
};

// 824-savol (83-bilet, 4-savol)
QUESTIONS[82].questions[3] = {
    question: "Ushbu belgi qaysi turdagi transport vositalarini to'xtamasdan o'tishlarini taqiqlaydi?",
    answers: [
        "Yuk avtomobillarini",
        "Yengil avtomobillarini",
        "Barcha turdagi transport vositalarini"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/824.jpg"
};

// 825-savol (83-bilet, 5-savol)
QUESTIONS[82].questions[4] = {
    question: "Shoking belgilari:",
    answers: [
        "Kuchli ter ajralishi",
        "Og'iz qurishi, chanqoqlik, nafas olishning tezlashuvi",
        "Teri va shilliq qavatining oqarishi",
        "Yuqoridagi barcha holatlar"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 826-savol (83-bilet, 6-savol)
QUESTIONS[82].questions[5] = {
    question: "Qaysi belgi «Xavfli yuk tashiyotgan transport vositalarining harakati taqiqlangan» deb nomlanadi?",
    answers: [
        "«C»",
        "«A»",
        "«B»"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/826.jpg"
};

// 827-savol (83-bilet, 7-savol)
QUESTIONS[82].questions[6] = {
    question: "Xavfsiz oraliq masofani ko'rsating",
    answers: [
        "«Б»",
        "«B»",
        "«A» va «B»"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/827.jpg"
};

// 828-savol (83-bilet, 8-savol)
QUESTIONS[82].questions[7] = {
    question: "Quvib o'tishga taaluqli belgilarni ko'rsating?",
    answers: [
        "«B» va «C»",
        "«A» va «B»",
        "«A» va «C»"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/828.jpg"
};

// 829-savol (83-bilet, 9-savol)
QUESTIONS[82].questions[8] = {
    question: "Chorraha - bu ..",
    answers: [
        "Yo'llarning o'zaro bir sathda kesishadigan, tutashadigan va ayriladigan joyi",
        "Bevosita yo'lga tutashgan va transport vositalari o'tib ketishi uchun mo'ljallanmagan hudud (hovlilar, turar joy dahalari, avtomobil to'xtab turish joylari, yonilg'i quyish shoxobchalari, korxona va shunga o'xshashlar)",
        "Yo'lning relssiz transport vositalari harakati uchun mo'ljallangan qismi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 830-savol (83-bilet, 10-savol)
QUESTIONS[82].questions[9] = {
    question: "Avtomobillarning bir qator bo'lib harakatlanishi uchun yetarlicha keng bo'lgan, yo'l chiziqlari bilan belgilangan yoki belgilanmagan yo'l qatnov qismining har qanday bo'ylama bo'lagi nima deb ataladi?",
    answers: [
        "Qatnov qismi",
        "Yo'l yoqasi",
        "Harakatlanish tasmasi",
        "Yondosh hudud"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 831-savol (84-bilet, 1-savol)
QUESTIONS[83].questions[0] = {
    question: "Qaysi belgilar yuk avtomobillarida quvib o'tishning taqiqlangan hududning oxirini bildiradi?",
    answers: [
        "Faqat «A»",
        "Faqat «A», «Б»",
        "«A», «Б» va «B»",
        "Faqat «Б»"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/831.jpg"
};

// 832-savol (84-bilet, 2-savol)
QUESTIONS[83].questions[1] = {
    question: "Ushbu holatda qaysi transport vositasi yo'l berishi kerak?",
    answers: [
        "Avtobus",
        "Yengil avtomobil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/832.jpg"
};

// 833-savol (84-bilet, 3-savol)
QUESTIONS[83].questions[2] = {
    question: "Svetoforning miltillovchi sariq ishorasi nima haqida ogohlantiradi?",
    answers: [
        "Chorraha tartibga solinmaganligi to'g'risida",
        "Harakatlanishga ruxsat beradi",
        "Barcha javoblar to'g'ri"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 834-savol (84-bilet, 4-savol)
QUESTIONS[83].questions[3] = {
    question: "Bosh miya jarohatlanishining quyidagi alomatlar bilan xarakterlanadi:",
    answers: [
        "Hushdan ketish bir necha soniyadan bir necha soatgacha bo'lishi mumkin",
        "Amneziya - xotiraning yo'qolishi sodir bo'lgan jarohatlanish bilan bog'liq va hayotidagi ba'zi voqealar xotirasidan o'chadi",
        "Qayt qilish bir-ikki marta, og'ir holatlarda ko'proq bo'lishi mumkin",
        "Yuqoridagi barcha holatlar"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 835-savol (84-bilet, 5-savol)
QUESTIONS[83].questions[4] = {
    question: "Yo'l harakati xavfsizligini ta'minlash -",
    answers: [
        "Yo'llarda harakatni boshqarish bo'yicha huquqiy, tashkiliy-texnikaviy tadbirlar va boshqaruv harakatlari majmui",
        "Yo'l-transport hodisalarining kelib chiqish sabablarini oldini olishga, ularning og'ir oqibatlarini kamaytirishga qaratilgan faoliyat"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 836-savol (84-bilet, 6-savol)
QUESTIONS[83].questions[5] = {
    question: "Trasport vositalarini qatnov qismining kengaytirilmagan joylarida qanday tartibda to'xtash va to'xtab turishiga ruxsat etiladi?",
    answers: [
        "Burchak ostida",
        "Parallel ravishda",
        "Istalgan usulda"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 837-savol (84-bilet, 7-savol)
QUESTIONS[83].questions[6] = {
    question: "Chorrahadan tashqaridagi tartibga solinmagan velosiped yo'lkasi bilan yo'l kesishmasida kim yo'l berishi kerak?",
    answers: [
        "Velosiped yo'lkasidan harakatlanayotgan velosiped va moped haydovchilari",
        "Transport vositalari haydovchilari"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 838-savol (84-bilet, 8-savol)
QUESTIONS[83].questions[7] = {
    question: "Tik nishabliklarda dvigatel bilan tormozlashda qiyalikka nisbatan qanday uzatma tanlanadi?",
    answers: [
        "Nishablik qancha qiya bo'lsa uzatma pog'onasi shuncha past tanlanadi",
        "Nishablik qancha qiya bo'lsa uzatma pog'onasi shuncha yuqori tanlanadi",
        "Pog'ona tanlashning nishablikka aloqasi yo'q"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 839-savol (84-bilet, 9-savol)
QUESTIONS[83].questions[8] = {
    question: "Qaysi belgi to'xtash chizig'i oldida, u bo'lmaganda, kesib o'tiladigan qatnov qismining chetida to'xtamasdan harakatlanishni taqiqlaydi?",
    answers: [
        "«Б»",
        "«Г»",
        "«A»",
        "«Б» va «В»",
        "«A» va «Г»"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/839.jpg"
};

// 840-savol (84-bilet, 10-savol)
QUESTIONS[83].questions[9] = {
    question: "Hayvonlarni yo'lda haydab borishga qoidaga ko'ra ruxsat etiladi?",
    answers: [
        "Kunning yorug' vaqtida",
        "Kunning qorong'i vaqtida",
        "Istalgan vaqtida"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 841-savol (85-bilet, 1-savol)
QUESTIONS[84].questions[0] = {
    question: "Quyidagi izoh qaysi atamaga tegishli? Texnik nuqson, tashilayotgan yuk, haydovchi va yo'lovchining holati, yo'ldagi biror to'siq tufayli xavf yuzaga kelganda yoxud ob-havo sharoitiga bog'liq holda transport vositasi harakatini to'xtatish.",
    answers: [
        "Yo'l harakati xavfsizligini ta'minlash",
        "Yo'l transport hodisasi",
        "Majburiy to'xtash"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 842-savol (85-bilet, 2-savol)
QUESTIONS[84].questions[1] = {
    question: "Avtomobilni qanday boshqarish usuli yonilg'i sarfini tejaydi?",
    answers: [
        "Ohista (ravon) tezlanish va shiddat bilan sekinlashish bilan",
        "Shiddat bilan tezlanish va ohista (ravon) sekinlashish bilan",
        "Ohista (ravon) tezlanish va ohista (ravon) sekinlashish bilan"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 843-savol (85-bilet, 3-savol)
QUESTIONS[84].questions[2] = {
    question: "Ko'rsatilgan qaysi belgi yo'lning o'ta sirpanchiq bo'lgan qismini bildiradi?",
    answers: [
        "Faqat «A»",
        "«A» va «Б»",
        "Faqat «B»"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/843.jpg"
};

// 844-savol (85-bilet, 4-savol)
QUESTIONS[84].questions[3] = {
    question: "Qaysi belgi falokatli holatlar uchun kirish yo'lini bildiradi?",
    answers: [
        "«A» ва «Д»",
        "«B»",
        "«C»"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/844.jpg"
};

// 845-savol (85-bilet, 5-savol)
QUESTIONS[84].questions[4] = {
    question: "Qaysi belgi svetoforning (tartibga soluvchining) taqiqlovchi ishorasida transport vositalari to'xtaydigan joyni bildiradi?",
    answers: [
        "«B»",
        "«Б»",
        "«A»",
        "«Г»"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/845.jpg"
};

// 846-savol (85-bilet, 6-savol)
QUESTIONS[84].questions[5] = {
    question: "Chap qo'lni yonga cho'zish yoki o'ng qo'lni tirsakdan to'g'ri burchak ostida bukib, yuqoriga ko'tarish ishorasi nimani bildiradi?",
    answers: [
        "Chapga burilishni yoki qayrilib olishni",
        "O'ngga burilishni yoki qayrilib olishni",
        "To'xtashni"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 847-savol (85-bilet, 7-savol)
QUESTIONS[84].questions[6] = {
    question: "Arterial qon ketish alomatlarini ko'rsating:",
    answers: [
        "Qon tomirlaridan pushti rangli qon kuchli pulsatsiya bilan otilib chiqadi",
        "Mayda qon tomirlaridan ichki a'zolarga qonning oqib chiqishi kuzatiladi",
        "Qon tomirlaridan to'q qizil rangdagi qon sizib oqib chiqadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 848-savol (85-bilet, 8-savol)
QUESTIONS[84].questions[7] = {
    question: "Ushbu holatda qaysi transport vositasi yo'l berishi kerak?",
    answers: [
        "Yengil avtomobil",
        "Yuk avtomobili"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/848.jpg"
};

// 849-savol (85-bilet, 9-savol)
QUESTIONS[84].questions[8] = {
    question: "Sekinlashish bo'lagi bo'lgan yo'llarda burlmoqchi bo'lgan haydovchi qachon tezlikni kamaytirishi lozim?",
    answers: [
        "Sekinlashish bo'lagiga o'tguncha",
        "Sekinlashish bo'lagiga o'tgach"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 850-savol (85-bilet, 10-savol)
QUESTIONS[84].questions[9] = {
    question: "Qattiq ulagichda shatakka olingan avtobusda yoki trolleybusda odam tashishga ruxsat etiladimi?",
    answers: [
        "Taqiqlanadi",
        "Ruxsat etiladi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 851-savol (86-bilet, 1-savol)
QUESTIONS[85].questions[0] = {
    question: "G'ildiraklarni yo'l bilan ilashishi yo'qolganda (kuchli yomg'ir, sel yoki suv toshgan yo'l qismlari) haydovchi:",
    answers: [
        "Tezlikni oshirishi lozim",
        "Tormoz tepkisini keskin bosish bilan tezlikni kamaytirishi lozim",
        "Dvigatel bilan tormozlash orqali tezlikni kamaytirishi lozim"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 852-savol (86-bilet, 2-savol)
QUESTIONS[85].questions[1] = {
    question: "Venoz qon ketish alomatlarini ko'rsating:",
    answers: [
        "Mayda qon tomirlaridan ichki a'zolarga qonning oqib chiqishi kuzatiladi",
        "Qon tomiridan to'q qizil rangdagi qon sizib oqib chiqadi",
        "Qon tomiridan pushti rangli qon kuchli pulsatsiya bilan otilib chiqadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 853-savol (86-bilet, 3-savol)
QUESTIONS[85].questions[2] = {
    question: "Yengil avtomobil tirkamasi burilishda qanday troektoriya bo'yicha harakatlanadi?",
    answers: [
        "Burilish markaziga nisbatan avtomobil troektoriyasidan ichkarida",
        "Avtomobil troektoriyasidan bo'yicha",
        "Burilish markaziga nisbatan avtomobil troektoriyasidan tashqarida"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 854-savol (86-bilet, 4-savol)
QUESTIONS[85].questions[3] = {
    question: "Chorrahada qaysi avtomobil yo'l berishi kerak?",
    answers: [
        "Ko'k avtomobil",
        "Qizil avtomobil"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/854.jpg"
};

// 855-savol (86-bilet, 5-savol)
QUESTIONS[85].questions[4] = {
    question: "Agar biror-bir to'siq sababli qarama-qarshi yo'nalishlarda harakatlanish qiyin bo'lsa kim yo'l berishi kerak?",
    answers: [
        "To'siq o'z tomonida bo'lgan haydovchi",
        "To'siq bo'lmagan tomondagi haydovchi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 856-savol (86-bilet, 6-savol)
QUESTIONS[85].questions[5] = {
    question: "Qaysi belgi temir yo'l kesishmasini to'suvchi qurilma bilan jihozlanganligi haqida ogohlantiradi?",
    answers: [
        "«Д»",
        "«C»",
        "«B»",
        "«A»"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/856.jpg"
};

// 857-savol (86-bilet, 7-savol)
QUESTIONS[85].questions[6] = {
    question: "Ushbu belgilardan qaysi biri bir yoki bir nechta tasmalarda harakatlanish yo'nalishi qarama-qarshi tomonga o'zgarish mumkin bo'lgan yo'l qismining boshlanishini bildiradi?",
    answers: [
        "«A»",
        "«Б»",
        "«B»"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/857.jpg"
};

// 858-savol (86-bilet, 8-savol)
QUESTIONS[85].questions[7] = {
    question: "Turar joy dahalaridan chiqishda haydovchilar:",
    answers: [
        "Boshqa harakat qatnashchilariga nisbatan imtiyozga ega",
        "Boshqa harakat qatnashchilariga yo'l berishi kerak"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 859-savol (86-bilet, 9-savol)
QUESTIONS[85].questions[8] = {
    question: "«Imtiyoz» atamasiga tegishli tarifni ko'rsating",
    answers: [
        "Yo'l harakati qatnashchilariga nisbatan imtiyozi bo'lgan boshqa yo'l harakati qatnashchisining harakat yo'nalishi yoki tezligini o'zgartirishga majbur etishi mumkin bo'lgan hollarda harakatni davom ettirmasligini yoki boshlamasligini, biror-bir manyovr bajarishi mumkin emasligini bildiruvchi talab",
        "Mo'ljallangan yo'nalishda boshqa yo'l harakati qatnashchilariga nisbatan oldin harakatlanish huquqi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 860-savol (86-bilet, 10-savol)
QUESTIONS[85].questions[9] = {
    question: "Tumanga qarshi chiroqlarni qorong'i vaqtda yo'lning yoritilmagan qismlarida uzoqni yorituvchi chiroqlar bilan birga qo'llash mumkinmi?",
    answers: [
        "Ha",
        "Yo'q"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};
// 861-savol (87-bilet, 1-savol)
QUESTIONS[86].questions[0] = {
    question: "Qorin bo'shlig'i jarohatlangan odamga ovqat, suv, dori-darmon berish mumkinmi?",
    answers: [
        "Ha",
        "Yo'q"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 862-savol (87-bilet, 2-savol)
QUESTIONS[86].questions[1] = {
    question: "Ushbu belgi nimani bidiradi?",
    answers: [
        "Oldinda ko'tarma ko'prik borligini",
        "Sun'iy yo'l notekisligi",
        "Oldinda tik balandlik borligini"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/862.jpg"
};

// 863-savol (87-bilet, 3-savol)
QUESTIONS[86].questions[2] = {
    question: "Mexanik transport vositasi - bu ...",
    answers: [
        "Dvigatel bilan harakatga keltiriladigan transport vositasi. Bu atama barcha traktor va o'ziyurar moslamalarga ham taalluqlidir",
        "Odamlarni, yuklarni tashishga yoki maxsus ishlarni bajarishga mo'ljallangan qurilma",
        "Mexanik transport vositasi tarkibida harakatlanishga mo'ljallangan, dvigatel bilan jihozlanmagan transport vositasi. Bu atama yarim tirkama va uzaytiriladigan tirkamalarga ham taalluqlidir"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 864-savol (87-bilet, 4-savol)
QUESTIONS[86].questions[3] = {
    question: "Tezlik ortishi bilan haydovchining ko'rish maydoni qanday o'zgaradi?",
    answers: [
        "Torayadi",
        "Kengayadi",
        "O'zgarmaydi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 865-savol (87-bilet, 5-savol)
QUESTIONS[86].questions[4] = {
    question: "Tormoz yo'li deb nimga aytiladi?",
    answers: [
        "Haydovchi tormoz tepkisini bosgandan to avtomobil to'liq to'xtaguncha bosib o'tgan masofasi",
        "Haydovchi biron bir xavfni aniqlab, avtomobilni to'liq to'xtaguncha bosib o'tgan masofasi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 866-savol (87-bilet, 6-savol)
QUESTIONS[86].questions[5] = {
    question: "Ushbu holatda ko'k avtomobil haydovchisi kimga yo'l berishi lozim?",
    answers: [
        "Faqat yengil avtomobilga",
        "Faqat avtobusga",
        "Hech kimga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/866.jpg"
};

// 867-savol (87-bilet, 7-savol)
QUESTIONS[86].questions[6] = {
    question: "Ushbu belgilardan qaysi biri «Notekis yo'l» deb nomlanadi?",
    answers: [
        "«C»",
        "«A»",
        "«B»"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/867.jpg"
};

// 868-savol (87-bilet, 8-savol)
QUESTIONS[86].questions[7] = {
    question: "Aholi punktlaridan tashqarida tirkamali yuk avtomobillari qanday yuqori tezlik bilan harakatlanishi mumkin?",
    answers: [
        "80 km/s",
        "60 km/s",
        "90 km/s",
        "70 km/s"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 869-savol (87-bilet, 9-savol)
QUESTIONS[86].questions[8] = {
    question: "Yo'l harakati qodalariga ko'ra yo'l belgilari necha guruhga bo'linadi?",
    answers: [
        "5 ta",
        "6 ta",
        "7 ta"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 870-savol (87-bilet, 10-savol)
QUESTIONS[86].questions[9] = {
    question: "Yengil avtomobil qaysi yo'nalishlarda harakatlanishga ruxsat etiladi?",
    answers: [
        "Faqat o'ngga va chapga",
        "Istalgan yo'nalishda",
        "Faqat to'g'riga"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/870.jpg"
};

// 871-savol (88-bilet, 1-savol)
QUESTIONS[87].questions[0] = {
    question: "Yo'lning xavfli burilishlarida oldingi uzatmali avtomobilning orqa o'qi yon tomonga sirpanayotganda siz qanday harakat qilasiz?",
    answers: [
        "Gaz pedalini ko'proq bosib, avtomobilni rul chambaragini o'zgartirmasdan sirpanishdan olib chiqasiz",
        "Gaz pedalini ohista bosib, avtomobilni rul chambaragini to'g'irlab, avtomobilni sirpanishdan olib chiqib ketasiz",
        "Tormozlab turib rul chambaragini sirpangan tomonga burasiz",
        "Gaz berishni kamaytirib rul chambaragi bilan boshqaruvni barqarorlashtirasiz"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 872-savol (88-bilet, 2-savol)
QUESTIONS[87].questions[1] = {
    question: "Haydovchining o'rtacha reaksiya vaqti deb qabul qilingan:",
    answers: [
        "Taxminan 0,2 sekund",
        "Taxminan 5 sekund",
        "Taxminan 1 sekund"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 873-savol (88-bilet, 3-savol)
QUESTIONS[87].questions[2] = {
    question: "Ushbu tik chiziq nimani bildiradi?",
    answers: [
        "Temir yo'l kesishmasiga yaqinlashayotganlik haqida",
        "Xavfli chorrahaga yaqinlashayotganlik haqida",
        "Yo'lning kichik radiusli burilish, tik nishablik va boshqa xavfli joylarda yo'l to'siqlarining yon yuzalarini bildiradi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/873.jpg"
};

// 874-savol (88-bilet, 4-savol)
QUESTIONS[87].questions[3] = {
    question: "Yondosh hudud bu - ...",
    answers: [
        "Bevosita yo'lga tutashgan va transport vositalari o'tib ketishi uchun mo'ljallanmagan xudud (hovlilar, turar joy dahalari, avtomobil to'xtab turish joylari, yonilg'i kuyish shoxobchalari, korxona va shunga o'xshashlari)",
        "Yo'lning relssiz transport vositalari harakati uchun mo'ljallangan qismi",
        "Yo'llarning o'zaro bir sathda kesishadigan, tutashadigan va ayriladigan joyi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 875-savol (88-bilet, 5-savol)
QUESTIONS[87].questions[4] = {
    question: "M3 toifadagi avtotransport vositalarining boshqaruv qurilmasidagi qanday eng katta lyuft yig'indisiga yo'l qo'yiladi?",
    answers: [
        "20 gradus",
        "25 gradus",
        "10 gradus"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 876-savol (88-bilet, 6-savol)
QUESTIONS[87].questions[5] = {
    question: "Bosh miya jarohatlanganda, miya chayqalganda yoki bo'yin qismi jarohatlanganda birinchi yordam ko'rsatish:",
    answers: [
        "Jaroxatlangan odamni yonboshlatib yotkizib, bo'yin kismi tagiga kattik Yestikcha kuyib, kuzgatmasdan, maxkam boglab shifoxonaga boriladi",
        "Jaroxatlangan odamni tinchlantirib, jaroxatlangan joy soxasini sovuk suv, muz kuyish yo'llari bilan sovitish, ogrikni susaytirish va kon ketishini kamaytirish",
        "Jaroxatlangan odamni kattik va tekis zambilga solib, bo'yin kismi tagiga yostikcha kuyib, kuzgatmasdan, maxkam boglab shifoxonaga yuboriladi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 877-savol (88-bilet, 7-savol)
QUESTIONS[87].questions[6] = {
    question: "Qaysi yo'l belgilari yo'lning tor qismida haydovchiga ustunlik beradi?",
    answers: [
        "Faqat «C»",
        "Faqat «Д»",
        "«A» va «B»",
        "Faqat «B»"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/877.jpg"
};

// 878-savol (88-bilet, 8-savol)
QUESTIONS[87].questions[7] = {
    question: "Ushbu chorrahada haydovchi orqaga harakatlanib ko'rsatilgan manyovrni bajarishga ruxsat etiladimi?",
    answers: [
        "Taqiqlanadi",
        "Ruxsat etiladi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/878.jpg"
};

// 879-savol (88-bilet, 9-savol)
QUESTIONS[87].questions[8] = {
    question: "Ushbu yo'l belgisi qanday maqsadda qo'llaniladi?",
    answers: [
        "Ehtiyot choralarini ko'rish uchun",
        "Majburiy tarzda tezlikni kamaytirish uchun",
        "To'xtamasdan o'tishni taqiqlaydi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/879.jpg"
};

// 880-savol (88-bilet, 10-savol)
QUESTIONS[87].questions[9] = {
    question: "Ushbu yo'l belgisi qanday maqsadda qo'llaniladi?",
    answers: [
        "Portlovchi va tez alangalanadigan yuk tashilayotgan transport vositalarining harakatini taqiqlaydi",
        "Og'ir yuk tashilayotgan transport vositalarining harakatini taqiqlaydi",
        "Xavfli yuk tashilayotgan transport vositalarining harakatini taqiqlaydi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/880.jpg"
};

// 881-savol (89-bilet, 1-savol)
QUESTIONS[88].questions[0] = {
    question: "M2 toifadagi avtotransport vositalarining boshqaruv qurilmasidagi qanday eng katta lyuft yig'indisiga yo'l qo'yiladi?",
    answers: [
        "25 gradus",
        "10 gradus",
        "20 gradus"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 882-savol (89-bilet, 2-savol)
QUESTIONS[88].questions[1] = {
    question: "Turar joy dahalarida qanday eng katta tezlikda harakatlanishga ruxsat etiladi:",
    answers: [
        "30 km/s",
        "20 km/s",
        "40 km/s",
        "5 km/s"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 883-savol (89-bilet, 3-savol)
QUESTIONS[88].questions[2] = {
    question: "Kunning qorong'i vaqtida harakatlanayotgan transport vositasining haydovchisi tezlikni tanlashda qanday eng asosiy hal qiluvchi omilni e'tiborga olishi kerak?",
    answers: [
        "Ko'rinish sharoitini",
        "Transport vositasining texnik tavsifnomasida ko'rsatilgan tezlik chegarasini",
        "Yo'l harakati qoidalari o'rnatilgan tezlik chegaralarini"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 884-savol (89-bilet, 4-savol)
QUESTIONS[88].questions[3] = {
    question: "Qaysi rasmda ajratuvchi mintaqasi bor bo'lgan yo'l ko'rsatilgan?",
    answers: [
        "Har ikkisida",
        "O'ngda",
        "Chapda"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/884.jpg"
};

// 885-savol (89-bilet, 5-savol)
QUESTIONS[88].questions[4] = {
    question: "Ushbu chorrahada avtobus haydovchisi kimga yo'l berishi kerak?",
    answers: [
        "Hech kimga",
        "Ko'k avtomobilga",
        "Qizil avtomobilga"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/885.jpg"
};

// 886-savol (89-bilet, 6-savol)
QUESTIONS[88].questions[5] = {
    question: "Agar avtomobilning o'ng g'ildiraklari nam qoplamali yo'l yoqasiga chiqib qolsa, tavsiya etiladi:",
    answers: [
        "Avtomobilni tormozlash va to'liq to'xtatish",
        "Avtomobilni tormozlamasdan yo'lning qatnov qismiga ohista ravon burish",
        "Avtomobilni tormozlab, yo'lning qatnov qismiga ohista ravon burish"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 887-savol (89-bilet, 7-savol)
QUESTIONS[88].questions[6] = {
    question: "Ushbu qo'shimcha axborot yo'l belgisi bildiradi:",
    answers: [
        "Barcha turdagi transport vositalarining to'xtab turish uchun yo'lning qatnov qismida, trotuar yoniga qo'yish usulini",
        "Mexanik transport vositalarining to'xtab turish joyini",
        "Yengil avtomobillarning to'xtab turish joyini"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/887.jpg"
};

// 888-savol (89-bilet, 8-savol)
QUESTIONS[88].questions[7] = {
    question: "Aylanma harakatlanish chorrahasida ...",
    answers: [
        "Harakatlanayotgan transport vositalari aylanaga kirib kelayotgan transport vositalariga nisbatan ustunlikka (imtiyozga ega)",
        "Harakatlanayotgan transport vositalariga nisbatan aylanaga kirib kelayotgan transport vositalari ustunlikka (imtiyozga ega)"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 889-savol (89-bilet, 9-savol)
QUESTIONS[88].questions[8] = {
    question: "Muskul va paylarning ezilishi hamda cho'zilishi alomatlari qanday?",
    answers: [
        "Jarohatlangan joyda og'riq seziladi",
        "Jarohatlangan joyda shish paydo bo'ladi, og'riq seziladi, ba'zan shu joyda mayda kappiliyar qon tomirlari yorilib, qon quyilishni natijasida ko'karish paydo bo'ladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 890-savol (89-bilet, 10-savol)
QUESTIONS[88].questions[9] = {
    question: "Chapga burilayotgan haydovchi kesishayotgan yo'lning qatnov qismidan o'tayotgan piyodalarga yo'l berishi kerakmi?",
    answers: [
        "Ha, agarda piyodalar o'tish joyi bo'lsa",
        "Ha, barcha hollarda o'tkazishi kerak"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};
// 891-savol (90-bilet, 1-savol)
QUESTIONS[89].questions[0] = {
    question: "Tik nishablikda dvigatel bilan tormozlashda qiyalikka nisbatan qanday uzatma tanlanadi?",
    answers: [
        "Nishablik qancha qiya bo'lsa uzatma pog'onasi shuncha past tanlanadi",
        "Pog'onalarni nishablikka aloqasi yo'q",
        "Nishablik qancha qiya bo'lsa uzatma pog'onasi shuncha yuqori tanlanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 892-savol (90-bilet, 2-savol)
QUESTIONS[89].questions[1] = {
    question: "Tumanga qarshi old chiroqlarni qorong'i vaqtda, yo'lning yoritilmagan qismlarida uzoqni yoki yaqinni yorituvchi chiroqlar bilan birga qo'llash mumkinmi?",
    answers: [
        "Mumkin emas",
        "Mumkin"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 893-savol (90-bilet, 3-savol)
QUESTIONS[89].questions[2] = {
    question: "Ajratuvchi mintaqa - ...",
    answers: [
        "Yo'lning yonma-yon joylashgan qatnov qismlarini ajratuvchi, transport vositalari harakatlanishi yoki to'xtashi uchun mo'ljallanmagan, yo'l sathidan ko'tarilgan yoki maysazor, ariq, maxsus to'siqlar bilan ajratilgan baland qismi",
        "Yo'lning relssiz transport vositalari harakati uchun mo'ljallangan qismi",
        "Avtomobillarning bir qator bo'lib harakatlanishi uchun yetarlicha keng bo'lgan, yo'l chiziqlari bilan belgilangan yoki belgilanmagan yo'l qatnov qismining har qanday bo'ylama mintaqa"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 894-savol (90-bilet, 4-savol)
QUESTIONS[89].questions[3] = {
    question: "Qaysi belgi haydovchiga kesib o'tayotgan yo'lda harakatlanayotgan transport vositalariga yo'l berishi lozimligini bildiradi?",
    answers: [
        "«B»",
        "«Б» va «Г»",
        "«A»",
        "«Г»",
        "«Б»"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/894.jpg"
};

// 895-savol (90-bilet, 5-savol)
QUESTIONS[89].questions[4] = {
    question: "«Aholi punkti» atamasi nimani bildiradi?",
    answers: [
        "Kirish va chiqish yo'llari 5.22 - 5.25 belgilari bilan belgilangan hududni",
        "Shahar, qishloq joylari hududini",
        "Aholi yashaydigan hududni"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 896-savol (90-bilet, 6-savol)
QUESTIONS[89].questions[5] = {
    question: "Yo'l harakati xavfsizligi - ...",
    answers: [
        "Yo'l harakati qatnashchilarining yo'l-transport hodisalarini va ularning oqibatlaridan himoyalanganlik darajasini aks ettiruvchi yo'l harakati holati",
        "Yo'l-transport hodisalarining kelib chiqish sabablarini oldini olishga, ularning og'ir oqibatlarini kamaytirishga qaratilgan faoliyat"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 897-savol (90-bilet, 7-savol)
QUESTIONS[89].questions[6] = {
    question: "Ushbu ko'rsatilgan holatda kim yo'l berishi kerak?",
    answers: [
        "Mototsikl haydovchisi",
        "Avtomobil haydovchisi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/897.jpg"
};

// 898-savol (90-bilet, 8-savol)
QUESTIONS[89].questions[7] = {
    question: "Agar avtomobilning o'ng g'ildiraklari nam qoplamali yo'l yoqasiga chiqib qolsa, tavsiya etiladi:",
    answers: [
        "Avtomobilni tormozlamasdan yo'lning qatnov qismiga ohista ravon burish",
        "Avtomobilni tormozlash va to'liq to'xtatish",
        "Avtomobilni tormozlab, yo'lning qatnov qismiga ohista ravon burish"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 899-savol (90-bilet, 9-savol)
QUESTIONS[89].questions[8] = {
    question: "Shokning belgilari qanday?",
    answers: [
        "Teri va shilliq qavatining oqarishi",
        "Kuchli ter ajralishi",
        "Og'iz qurishi, chanqoqlik, nafas olishning tezlashuvi",
        "Yuqoridagi barcha holatlar"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 900-savol (90-bilet, 10-savol)
QUESTIONS[89].questions[9] = {
    question: "Ushbu belgilardan qaysi biri oldinda yo'l qoplamasi ustida sun'iy notekislik borligi haqida ogohlantiradi?",
    answers: [
        "«B»",
        "«A» va «C»",
        "«C»",
        "«A»"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/900.jpg"
};

// 901-savol (91-bilet, 1-savol)
QUESTIONS[90].questions[0] = {
    question: "Ushbu vaziyatda siz o'ng tasmada harakatlanmoqdasiz, sizning tasmangizga qayta tizilayotgan transport vositasiga yo'l berishingiz kerakmi?",
    answers: [
        "Kerak emas",
        "Kerak"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/901.jpg"
};

// 902-savol (91-bilet, 2-savol)
QUESTIONS[90].questions[1] = {
    question: "Ushbu yo'l belgisi qaysi transport vositalarining harakatlanishini taqiqlaydi?",
    answers: [
        "Xavfli yuk tashiyotgan transport vositalarining harakatlanishini",
        "Barcha javoblari to'g'ri",
        "Ruxsat etilgan to'la vazni 3,5 tonnadan ortiq bo'lgan yuk avtomobillarini"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/902.jpg"
};

// 903-savol (91-bilet, 3-savol)
QUESTIONS[90].questions[2] = {
    question: "Qaysi belgi to'siqni o'ng yoki chap tomonidan chetlab o'tishga ruxsat etilishini bildiradi?",
    answers: [
        "4",
        "3",
        "1",
        "5",
        "2"
    ],
    correct: 3, // F4 to'g'ri (5-belgi)
    image: "images/903.jpg"
};

// 904-savol (91-bilet, 4-savol)
QUESTIONS[90].questions[3] = {
    question: "Bu joyda yo'lovchilarni chiqarish yoki tushirish maqsadida to'xtash mumkinmi?",
    answers: [
        "Ha",
        "Yo'q"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/904.jpg"
};

// 905-savol (91-bilet, 5-savol)
QUESTIONS[90].questions[4] = {
    question: "Qizil avtomobil chorrahani nechanchi bo'lib kesib o'tadi?",
    answers: [
        "Oxirgi bo'lib",
        "Birinchi bo'lib",
        "Ikkinchi bo'lib"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/905.jpg"
};

// 906-savol (91-bilet, 6-savol)
QUESTIONS[90].questions[5] = {
    question: "To'xtash qoidasini qaysi transport vositasining haydovchisi buzdi?",
    answers: [
        "Faqat qizil avtomobil haydovchisi",
        "Har ikkala haydovchi ham",
        "Faqat ko'k avtomobil haydovchisi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/906.jpg"
};

// 907-savol (91-bilet, 7-savol)
QUESTIONS[90].questions[6] = {
    question: "Ushbu vaziyatda siz:",
    answers: [
        "To'xtamasdan harakatni davom ettirishingiz mumkin",
        "Belgi oldida to'xtashingiz va svetoforning ruxsat beruvchi ishorasini kutishingiz kerak"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/907.jpg"
};

// 908-savol (91-bilet, 8-savol)
QUESTIONS[90].questions[7] = {
    question: "Sanab o'tilgan qaysi hollarda egiluvchan ulagichda shatakka olish taqiqlanadi?",
    answers: [
        "Faqat sirpanchiq yo'lda",
        "Kunning qorong'i vaqtida va yetarlicha ko'rinmaslik sharoitida",
        "Faqat tog'li yo'llarda",
        "Barcha sanab o'tilgan hollarda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 909-savol (91-bilet, 9-savol)
QUESTIONS[90].questions[8] = {
    question: "Qanday hollarda sizga 50 km/s dan yuqori tezlikda harakatlanish taqiqlangan?",
    answers: [
        "Faqat qatnov qismi nam bo'lsa",
        "Har qanday holatda ham"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/909.jpg"
};

// 910-savol (91-bilet, 10-savol)
QUESTIONS[90].questions[9] = {
    question: "«Imtiyoz» atamasiga tegishli ta'rifni ko'rsating.",
    answers: [
        "Mo'ljallangan yo'nalishda boshqa yo'l harakati qatnashchilariga nisbatan oldin harakatlanish huquqi",
        "Yo'l harakati qatnashchilariga nisbatan imtiyozi bo'lgan boshqa yo'l harakati qatnashchisining harakat yo'nalishi yoki tezligini o'zgartirishga majbur etishi mumkin bo'lgan hollarda harakatni davom ettirmasligini..."
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};


// 911-savol (92-bilet, 1-savol)
QUESTIONS[91].questions[0] = {
    question: "Ushbu yo'l nechta qatnov qismiga ega ?",
    answers: [
        "2 ta",
        "4 ta",
        "1 ta"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/911.jpg"
};

// 912-savol (92-bilet, 2-savol)
QUESTIONS[91].questions[1] = {
    question: "Qaysi transport vositalariga harakatlanishga ruxsat berilgan?",
    answers: [
        "Mototsiklga o'nga va yengil avtomobilga barcha yo'nalishlarga",
        "Mototsiklga o'nga, yengil avtomobilga to'g'riga va o'nga",
        "Mototsikl va yengil avtomobilga to'g'riga va o'nga"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/912.jpg"
};

// 913-savol (92-bilet, 3-savol)
QUESTIONS[91].questions[2] = {
    question: "Ushbu svetofor qaysi yo'nalishlarda harakatlanishga ruxsat beradi?",
    answers: [
        "To'g'riga va chapga",
        "Faqat o'ngga",
        "To'g'riga va o'ngga",
        "Faqat chapda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/913.jpg"
};

// 914-savol (92-bilet, 4-savol)
QUESTIONS[91].questions[3] = {
    question: "N1 toifadagi avtotransport vositalarining boshqaruv qurilmasidagi qanday eng katta lyuft yig'indisiga yo'l qo'yiladi?",
    answers: [
        "25 gradus",
        "20 gradus",
        "10 gradus"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 915-savol (92-bilet, 5-savol)
QUESTIONS[91].questions[4] = {
    question: "Qaysi belgi ikkinchi darajali yo'l bilan kesishuvni bildiradi?",
    answers: [
        "1",
        "3",
        "4",
        "5",
        "2"
    ],
    correct: 0, // F1 to'g'ri (1-belgi)
    image: "images/915.jpg"
};

// 916-savol (92-bilet, 6-savol)
QUESTIONS[91].questions[5] = {
    question: "Miltillovchi sariq ishorali svetofor:",
    answers: [
        "Svetofor chirog'i almashuvidan xabardor qiladi",
        "Tartibga solingan chorraha borligidan xabardor qiladi",
        "Tartibga solinmagan chorraha yoki piyodalar o'tish joyi borligidan xabardor qiladi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 917-savol (92-bilet, 7-savol)
QUESTIONS[91].questions[6] = {
    question: "Yuk avtomobili haydovchisiga qaysi yo'nalishda harakatlanishga ruxsat beriladi?",
    answers: [
        "Faqat o'ngga",
        "Barcha yo'nalishlarga",
        "O'ngga chapga va orqaga",
        "To'g'riga va o'ngga"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/917.jpg"
};

// 918-savol (92-bilet, 8-savol)
QUESTIONS[91].questions[7] = {
    question: "Ushbu vaziyatda siz o'ngga burilayotib:",
    answers: [
        "Barcha qatnov qismidagi piyodalarga yo'l berasiz",
        "Harakat yo'nalishi boyicha va burilayotgan ko'chani kesib o'tayotgan piyodalarga hamda boshqa transport vositalariga yo'l berasiz",
        "Faqat transport vositalariga yo'l berasiz"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/918.jpg"
};

// 919-savol (92-bilet, 9-savol)
QUESTIONS[91].questions[8] = {
    question: "Qaysi belgi yo'lning ko'rsatilgan yo'nalishida oxiri berk ko'chaligini bildiradi?",
    answers: [
        "3",
        "4",
        "5",
        "2",
        "1"
    ],
    correct: 1, // F2 to'g'ri (4-belgi)
    image: "images/919.jpg"
};

// 920-savol (92-bilet, 10-savol)
QUESTIONS[91].questions[9] = {
    question: "Qaysi rasmda ikkita qatnov qismiga ega bo'lgan yo'l ko'rsatilgan?",
    answers: [
        "«A» rasmda",
        "Hech qaysi rasmda",
        "«Б» rasmda"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/920.jpg"
};

// 921-savol (93-bilet, 1-savol)
QUESTIONS[92].questions[0] = {
    question: "Aynalma harakatlanish chorrahasida...",
    answers: [
        "Harakatlanayotgan transport vositalariga nisbatan aylanaga kirib kelayotgan transport vositalari ustunlikka ega",
        "Harakatlanayotgan transport vositalari aylanaga kirib kelayotgan transport vositalariga nisbatan ustunlikka (imtiyozga ega)"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 922-savol (93-bilet, 2-savol)
QUESTIONS[92].questions[1] = {
    question: "Ushbu qo'shimcha axborot yo'l belgisi:",
    answers: [
        "Ob'yektgacha bo'lgan masofani bildiradi",
        "Belgining ta'sir oralig'ini bildiradi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/922.jpg"
};

// 923-savol (93-bilet, 3-savol)
QUESTIONS[92].questions[2] = {
    question: "Qaysi belgi ikkinchi darajali yo'l bilan tutashuvni bildiradi?",
    answers: [
        "3",
        "1",
        "5",
        "2",
        "4"
    ],
    correct: 3, // F4 to'g'ri (2-belgi)
    image: "images/923.jpg"
};

// 924-savol (93-bilet, 4-savol)
QUESTIONS[92].questions[3] = {
    question: "Ushbu qo'shimcha yo'l belgisi bildiradi:",
    answers: [
        "Belgi ta'sir oralig'ida to'xtagan transport vositalari majburiy evakuatsiya qilinishini ko'rsatadi",
        "Belgi ta'sir oralig'ida to'xtagan transport vositalarini evakuatsiya qilish taqiqlanganligini bildiradi",
        "Belgi ta'sir oralig'ida to'xtagan transport vositalarini evakuatsiya qilinish ruxsat etilganligini bildiradi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/924.jpg"
};

// 925-savol (93-bilet, 5-savol)
QUESTIONS[92].questions[4] = {
    question: "Qaysi rasmda ajratuvchi mintaqa ko'rsatilgan?",
    answers: [
        "Hech qaysi rasmda ajratuvchi mintaqa yo'q",
        "«Б»",
        "«A»"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/925.jpg"
};

// 926-savol (93-bilet, 6-savol)
QUESTIONS[92].questions[5] = {
    question: "Rasmda ko'rsatilgan chorraha-...",
    answers: [
        "Tartibga solingan chorraha",
        "Tartibga solinmagan, teng ahamiyatga ega bo'lmagan yo'llar kesishadigan chorraha",
        "Tartibga solinmagan, teng ahamiyatga ega bo'lgan yo'llar kesishadigan chorraha"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/926.jpg"
};

// 927-savol (93-bilet, 7-savol)
QUESTIONS[92].questions[6] = {
    question: "Ko'k avtomobil chorrahani kesib o'tadi:",
    answers: [
        "Oxirgi bo'lib",
        "Birinchi bo'lib",
        "Ikkinchi bo'lib"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/927.jpg"
};

// 928-savol (93-bilet, 8-savol)
QUESTIONS[92].questions[7] = {
    question: "Yo'nalishli bo'lmagan transport vositalari «A» xarfi bilan belgilangan o'ng tasmada qaysi holatlarda harakatlanishlari mumkin?",
    answers: [
        "Yo'lovchilarni chiqarish va tushirishda",
        "O'nga burilishda",
        "Yuqoridagi barcha holatlarda aragda yo'nalishli transport vositalariga xalaqit bermasa"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/928.jpg"
};

// 929-savol (93-bilet, 9-savol)
QUESTIONS[92].questions[8] = {
    question: "Agar avtomobilning o'ng g'ildiraklari nam qoplamali yo'l yoqasiga chiqib qolsa, tavsiya etiladi?",
    answers: [
        "Avtomobilni tormozlash va to'liq to'xtatish",
        "Avtomobilni tormozlamasdan, yo'lning harakat qismiga ohista ravon burish",
        "Avtomobilni tormozlab, yo'lning harakat qismiga ohista ravon burish"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 930-savol (93-bilet, 10-savol)
QUESTIONS[92].questions[9] = {
    question: "Turar joy dahalarida qanday eng katta tezlikda harakatlanishga ruxsat etiladi?",
    answers: [
        "30 km/s",
        "20 km/s",
        "5 km/s",
        "40 km/s"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 931-savol (94-bilet, 1-savol)
QUESTIONS[93].questions[0] = {
    question: "Qaysi belgi yo'lning kichik radiusli xavfli burilish joyiga yaqinlashayotganlik haqida ogohlantiradi?",
    answers: [
        "2",
        "3",
        "1",
        "4"
    ],
    correct: 3, // F4 to'g'ri (4-belgi)
    image: "images/931.jpg"
};

// 932-savol (94-bilet, 2-savol)
QUESTIONS[93].questions[1] = {
    question: "Yo'l to'sig'iga chizilgan tik chiziq nimani bildiradi?",
    answers: [
        "Yo'lning kichik radiusli burilish, tik nishablik va boshqa xavfli joylarda yo'l to'siqlarining yon yuzalarini bildiradi",
        "Xavfli chorrahaga yaqinlashayotganlik haqida",
        "Temir yo'l kesishmasiga yaqinlashayotganlik haqida"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/932.jpg"
};

// 933-savol (94-bilet, 3-savol)
QUESTIONS[93].questions[2] = {
    question: "Qaysi belgilar axborot-ko'rsatkich belgilari?",
    answers: [
        "2 va 3",
        "1 va 2",
        "1 va 4",
        "3 va 4"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/933.jpg"
};

// 934-savol (94-bilet, 4-savol)
QUESTIONS[93].questions[3] = {
    question: "Yo'lning xavfli burilishlarida oldingi uzatmali avtomobilning orqa o'qi yon tomonga sirpanayotganda siz qanday harakat qilasiz?",
    answers: [
        "Tormozlab turib rul chambaragini sirpangan tomonga burasiz",
        "Gaz berishni kamaytirib rul chambaragi bilan boshqaruvni barqarorlashtirasiz",
        "Gaz pedalini ohista bosib avtomobilni rul chambaragini to'g'irlab avtomobilni sirpanishdan olib chiqib ketasiz",
        "Gaz pedalini ko'proq bosib, avtomobilni rul chambaragini o'zgartirmasdan sirpanishdan olib chiqasiz"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 935-savol (94-bilet, 5-savol)
QUESTIONS[93].questions[4] = {
    question: "Avtomobilning ABS tizimi burilishda sirpanish va yonga siljishni oldini oladimi?",
    answers: [
        "Avtomobil sirpanish va yonga sirpanishini oldini olmaydi",
        "Avtomobil faqat sirpanish ehtimolining oldini oladi",
        "Avtomobil faqat yonga siljish ehtimolining oldini oladi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 936-savol (94-bilet, 6-savol)
QUESTIONS[93].questions[5] = {
    question: "Qaysi yo'l belgilari yo'lning tor qismida haydovchiga ustunlik beradi?",
    answers: [
        "«A» va «B»",
        "«Б» va «Г»",
        "«Б» va «B»",
        "Faqat «B»"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/936.jpg"
};

// 937-savol (94-bilet, 7-savol)
QUESTIONS[93].questions[6] = {
    question: "Avtomobil haydovchisi qayrilib olmoqchi:",
    answers: [
        "Chorrahaga birinchi bo'lib o'tadi",
        "Tramvayga yo'l berib qayrilib oladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/937.jpg"
};

// 938-savol (94-bilet, 8-savol)
QUESTIONS[93].questions[7] = {
    question: "Rasmda ko'rsatilgan chorraha-...",
    answers: [
        "Tartibga solinmagan, teng ahamiyatga ega bo'lmagan yo'llar kesishgan chorraha",
        "Tartibga solingan chorraha",
        "Tartibga solinmagan, teng ahamiyatga ega bo'lgan yo'llar kesishgan chorraha"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/938.jpg"
};

// 939-savol (94-bilet, 9-savol)
QUESTIONS[93].questions[8] = {
    question: "Ushbu yo'l belgisi qanday maqsadda qo'llaniladi?",
    answers: [
        "Majburiy tarzda tezlikni kamaytirish uchun",
        "Ehtiyot choralarini ko'rish uchun",
        "Keskin tormoz berish uchun"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/939.jpg"
};

// 940-savol (94-bilet, 10-savol)
QUESTIONS[93].questions[9] = {
    question: "Mototsikl haydovchisi qo'lini yuqoriga ko'tarib nima haqida axborot berayapti?",
    answers: [
        "O'ngga burilmoqchi ekanligi haqida",
        "To'xtash haqida",
        "Harakatni davom ettirish haqida"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/940.jpg"
};

// 941-savol (95-bilet, 1-savol)
QUESTIONS[94].questions[0] = {
    question: "Yengil avtomobil burilishda ag'darilib ketishga qarshi turg'unroq:",
    answers: [
        "Yo'lovchisiz, biroq yuqori yukxonasidagi yuki bilan",
        "Yo'lovchisiz va yuksiz",
        "Yo'lovchilari va yuksiz",
        "Yo'lovchi va yuki bilan"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 942-savol (95-bilet, 2-savol)
QUESTIONS[94].questions[1] = {
    question: "Qaysi javobda orqaga harakatlanish taqiqlangan joylar ko'rsatilgan?",
    answers: [
        "Tunnellarda",
        "Chorrahalarda",
        "Piyodalarning o'tish joyida",
        "Barcha javoblar to'g'ri"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 943-savol (95-bilet, 3-savol)
QUESTIONS[94].questions[2] = {
    question: "108 km/soat tezlikda harakatlanayotgan avtomobil 1 sekundda qancha masofani bosib o'tadi?",
    answers: [
        "15 m",
        "30 m",
        "20 m"
    ],
    correct: 1, // F2 to'g'ri (108 km/h = 30 m/s)
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 944-savol (95-bilet, 4-savol)
QUESTIONS[94].questions[3] = {
    question: "Qaysi transport vositasiga harakatlanish taqiqlangan?",
    answers: [
        "Hech kimga taqiqlanmagan",
        "Yuk avtomobiliga",
        "Mototsiklga"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/944.jpg"
};

// 945-savol (95-bilet, 5-savol)
QUESTIONS[94].questions[4] = {
    question: "Haydovchi o'zidan oldinda harakatlanayotgan transport vositasi bilan qancha oraliq masofa saqlab harakatlanishi kerak?",
    answers: [
        "20 m",
        "50 m",
        "Haydovchi o'zidan oldinda harakatlanayotgan transport vositasi keskin tormoz berganida to'qnashib ketmasligi kafolatini beradigan darajada oraliq masofani saqlash kerak"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 946-savol (95-bilet, 6-savol)
QUESTIONS[94].questions[5] = {
    question: "Ushbu yo'l belgisi:",
    answers: [
        "Qatnov qismida to'suvchi qurilma borligini bildiradi",
        "Chorraha oldida to'suvchi qurilma borligini bildiradi",
        "Oldinda boshqariladigan to'suvchi qurilma borligini bildiradi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/946.jpg"
};

// 947-savol (95-bilet, 7-savol)
QUESTIONS[94].questions[6] = {
    question: "Chorrahadan oxirgi bo'lib qaysi transport vositasi kesib o'tadi?",
    answers: [
        "Sariq avtomobil",
        "Oq avtomobil sariq bilan bir vaqtda",
        "Qizil avtomobil"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/947.jpg"
};

// 948-savol (95-bilet, 8-savol)
QUESTIONS[94].questions[7] = {
    question: "Chap tomondagi yondosh hududdan foydalanib qayrilib olishning ko'rsatilgan qaysi usuli harakat xavfsizligini ta'minlaydi?",
    answers: [
        "Faqat o'ng tomondagi rasmda",
        "Ikkisida ham",
        "Faqat chap tomondagi rasmda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/948.jpg"
};

// 949-savol (95-bilet, 9-savol)
QUESTIONS[94].questions[8] = {
    question: "Shatakka olingan avtobusda odam tashishga ruxsat etiladimi?",
    answers: [
        "Faqat o'tirgan holda tashishga ruxsat beriladi",
        "Ruxsat beriladi",
        "Taqiqlanadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 950-savol (95-bilet, 10-savol)
QUESTIONS[94].questions[9] = {
    question: "Piyodalar to'xtab turgan avtobus va trolleybusning qaysi tomonidan yo'lni kesib o'tishlari kerak?",
    answers: [
        "Istalgan tomonidan",
        "Oldi tomonidan",
        "Orqa tomonidan"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 951-savol (96-bilet, 1-savol)
QUESTIONS[95].questions[0] = {
    question: "Chapga burilayotgan sariq avtomobil haydovchisi qaysi tasmani egallashi kerak?",
    answers: [
        "Chap tasmani",
        "O'rta tasmani",
        "Istalgan tasmani",
        "O'ng tasmani"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/951.jpg"
};

// 952-savol (96-bilet, 2-savol)
QUESTIONS[95].questions[1] = {
    question: "O'ng tomondagi yondosh hududan foydalanib qayrilib olishning ko'rsatilgan qaysi usuli harakat xavfsizligini ta'minlaydi?",
    answers: [
        "Faqat chap tomondagi suratda",
        "Faqat o'ng tomondagi suratda",
        "Har ikki suratda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/952.jpg"
};

// 953-savol (96-bilet, 3-savol)
QUESTIONS[95].questions[2] = {
    question: "M toifadagi transport vositalari bu:",
    answers: [
        "Kamida to'rt g'ildirakka ega bo'lgan va yo'lovchilarni tashish uchun foydalaniladigan mexanik transport vositalari",
        "Tirkamalar (yarim tirkamalar ham)",
        "Yuk tashish uchun mo'ljallangan, eng katta vazni 3,5 t dan oshmaydigan avtotransport vositalari"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 954-savol (96-bilet, 4-savol)
QUESTIONS[95].questions[3] = {
    question: "Ushbu yo'l belgisi qanday nomlanadi?",
    answers: [
        "Yuk avtomobillari bilan quvib o'tish taqiqlangan",
        "Katta o'lchamli yuklarni tashish taqiqlangan",
        "Xavfli yuk tashiyotgan transport vositasining harakati taqiqlangan"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/954.jpg"
};

// 955-savol (96-bilet, 5-savol)
QUESTIONS[95].questions[4] = {
    question: "Yo'lning qatnov qismi-...",
    answers: [
        "Yo'lning relssiz transport vositalari harakati uchun mo'ljallagan qismi",
        "Yo'lning avtomobillar harakati uchun mo'ljallagan qismi",
        "Yo'lning transport vositalari harakati uchun mo'ljallagan qismi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 956-savol (96-bilet, 6-savol)
QUESTIONS[95].questions[5] = {
    question: "Qaysi rasmdagi avtomobil haydovchisi yuk tashish qoidasini buzayapti?",
    answers: [
        "«A»",
        "«Б»",
        "«A» va «Б»"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/956.jpg"
};

// 957-savol (96-bilet, 7-savol)
QUESTIONS[95].questions[6] = {
    question: "Chorrahani oxirgi bo'lib qaysi transport vositasi kesib o'tadi?",
    answers: [
        "Qizil avtomobil",
        "Yashil avtomobil",
        "Ko'k avtomobil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/957.jpg"
};

// 958-savol (96-bilet, 8-savol)
QUESTIONS[95].questions[7] = {
    question: "Haydovchi yo'lning relssiz transport vositalari harakatlanayotgan tasmalar sonini belgilaydigan chiziqlar yoki yo'l belgilari bo'lmasa, tasmalar sonini qanday aniqlash kerak?",
    answers: [
        "Qatnov qismining kengligini, transport vositalari orasidagi zarur yonlama oraliq masofani va ularning gabarit o'lchamlarini hisobga olgan holda o'zi aniqlaydi",
        "Bunday yo'lni ikki tasmali qarama qarshi harakat tashkil qilingan yo'l deb qabul qilish kerak"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 959-savol (96-bilet, 9-savol)
QUESTIONS[95].questions[8] = {
    question: "Balandlika yo'l chetida to'siq mavjud bo'lganda to'xtagan avtomobilni joyidan g'ildirab ketishini oldini olish uchun oldingi g'ildiraklarni burib qo'yish usuli qaysi javobda to'g'ri ko'rsatilgan?",
    answers: [
        "«Б» va «B»",
        "«Б» va «Г»",
        "«A» va «Г»",
        "«A» va «B»"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/959.jpg"
};

// 960-savol (96-bilet, 10-savol)
QUESTIONS[95].questions[9] = {
    question: "Qaysi yo'l belgilari yo'nalishsiz transport vositalariga chapga burilishni taqiqlaydi?",
    answers: [
        "Faqat «A»",
        "«A» va «Б»",
        "Hammasi",
        "«A» va «B»"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/960.jpg"
};

// 961-savol (97-bilet, 1-savol)
QUESTIONS[96].questions[0] = {
    question: "Yo'lovchilarga taqiqlanadi:",
    answers: [
        "Transport vositasi harakatlanayotgan vaqtda uning eshiklarini ochish",
        "Harakatlanayotgan bortli yuk avtomobillarida tik turish, bortlarda yoki undan yuqoridagi yuk ustida o'tirish",
        "Transport vositasi harakatlanayotgan vaqtda haydovchini boshqarishdan chalg'itish va unga xalaqit berish",
        "Barcha ko'rsatilgan javoblar to'g'ri"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 962-savol (97-bilet, 2-savol)
QUESTIONS[96].questions[1] = {
    question: "Ko'rsatilgan qaysi belgilar faqat shu o'rnatilgan tasmani o'ziga ta'sir qiladi?",
    answers: [
        "Faqat «A»",
        "Faqat «Б»",
        "«Б» va «В»"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/962.jpg"
};

// 963-savol (97-bilet, 3-savol)
QUESTIONS[96].questions[2] = {
    question: "Mexanik transport vositalarini shatakka olishda egiluvchan ulagichga kamida nechta ogohlantiruvchi qurilma o'rnatiladi?",
    answers: [
        "Kamida uchta",
        "Kamida bitta",
        "Kamida ikkita"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 964-savol (97-bilet, 4-savol)
QUESTIONS[96].questions[3] = {
    question: "Siz to'g'ri yo'lda harakatlanayotib to'satdan yo'lning qisman katta bo'lmagan sirpanchiq qismiga duch keldingiz. Bunda qanday ehtiyot choralari ko'rasiz?",
    answers: [
        "Rulni burib sirpanchiqdan chiqib ketish",
        "Avtomobilni ohista to'xtatish",
        "Harakat yo'nalishini va tezlikni o'zgartirmasdan ehtiyotkorlik bilan o'tib ketish"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 965-savol (97-bilet, 5-savol)
QUESTIONS[96].questions[4] = {
    question: "Turar joy dahasidan yo'lga chiqishda yo'l berish zarur:",
    answers: [
        "O'ng tomondan yaqinlashib kelayotgan transport vositalariga",
        "Ko'k rangli yalt-yalt etuvchi chiroqcha-mayoqcha yoqilgan transport vositalariga",
        "Chap tomondan yaqinlashib kelayotgan transport vositalariga",
        "Barcha transport vositalariga"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 966-savol (97-bilet, 6-savol)
QUESTIONS[96].questions[5] = {
    question: "Svetofor ishoralari imtiyoz belgilari talablariga zid kelgan hollarda:",
    answers: [
        "Haydovchilar svetofor ishoralariga amal qilishlari kerak",
        "Haydovchilar imtiyoz belgilariga amal qilishlari kerak"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 967-savol (97-bilet, 7-savol)
QUESTIONS[96].questions[6] = {
    question: "Harakatlanish bo'lagidagi uchburchak shaklidagi chiziq:",
    answers: [
        "Yo'l berishingiz kerak bo'lgan joy yaqinlashayotganligi haqida ogohlantiradi",
        "To'xtashingiz zarur bo'lgan joyni bildiradi",
        "Yo'lning xavfli qismini bildiradi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/967.jpg"
};

// 968-savol (97-bilet, 8-savol)
QUESTIONS[96].questions[7] = {
    question: "Sariq avtomobil chorrahani nechanchi bo'lib kesib o'tadi?",
    answers: [
        "Ikkinchi bo'lib",
        "Uchinchi bo'lib",
        "Oxirgi bo'lib"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/968.jpg"
};

// 969-savol (97-bilet, 9-savol)
QUESTIONS[96].questions[8] = {
    question: "Temir yo'l kesishmalari va ularga yaqin joylarda quvib o'tishga tegishli qanday yo'l harakati qoidalari amal qiladi?",
    answers: [
        "Quvib o'tish faqat temir yo'l kesishmalaridan keyin taqiqlanadi",
        "Temir yo'l kesishmalarida, ularga 100 metrdan kam masofa qolganda va temir yo'l kesishmalaridan keyin 100 metr davomida quvib o'tish taqiqlanadi",
        "Temir yo'l kesishmalarida va ularga 100 metrdan kam masofa qolganda quvib o'tish taqiqlanadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 970-savol (97-bilet, 10-savol)
QUESTIONS[96].questions[9] = {
    question: "Harakatlanish tasmasi:",
    answers: [
        "Avtomobillarning bir qator bo'lib harakatlanishi uchun yetarlicha keng bo'lgan, yo'l chiziqlari bilan belgilangan yoki belgilanmagan yo'l qatnov qismining har qanday bo'ylama tasmasi",
        "Yo'lning yonma-yon joylashgan qatnov qismlarini ajratuvchi, transport vositalari harakatlanishi yoki to'xtashi uchun mo'ljallanmagan, yo'l sathidan baland va (yoki) 1.1 yotiq chizig'i bilan belgilangan qismi",
        "Yo'lning relssiz transport vositalari harakati uchun mo'ljallangan qismi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};
// 971-savol (98-bilet, 1-savol)
QUESTIONS[97].questions[0] = {
    question: "Bu qo'shimcha-axborot yo'l belgisi qaysi yo'l belgisi bilan birgalikda qullaniladi?",
    answers: [
        "«A»",
        "«Б»",
        "«C»"
    ],
    correct: 1, // F2 to'g'ri (Б - yo'l ishlari)
    image: "images/971.jpg"
};

// 972-savol (98-bilet, 2-savol)
QUESTIONS[97].questions[1] = {
    question: "Agar piyodalar o'tish joylaridan keyin tirbandlik paydo bo'lsa haydovchi qayerda to'xtashi kerak?",
    answers: [
        "Bevosita piyodalar o'tish joyi oldida",
        "Piyodalar o'tish joyida, agar piyodalar bo'lmasa",
        "Piyodalar o'tish joyiga 5 m yetmasdan"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 973-savol (98-bilet, 3-savol)
QUESTIONS[97].questions[2] = {
    question: "Chorrahani ikkinchi bo'lib kesib o'tadi:",
    answers: [
        "Mototsikl",
        "Tramvay",
        "Avtomobil"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/973.jpg"
};

// 974-savol (98-bilet, 4-savol)
QUESTIONS[97].questions[3] = {
    question: "To'la vazni 3,5 tonnadan oshmaydigan yuk avtomobillarini quyidagilar bilan jihozlanmagan bo'lsa ham foydalanishga ruxsat etiladi:",
    answers: [
        "Tibbiyot qutichasi",
        "O't o'chirgich",
        "O'zi yurib ketishidan saqlovchi, g'ildirak diametriga muvofiq (kamida ikkita) tirgak",
        "Majburiy to'xtaganini bildiruvchi belgi (yoki miltillovchi qizil chiroq)"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 975-savol (98-bilet, 5-savol)
QUESTIONS[97].questions[4] = {
    question: "Ko'rsatilgan qaysi yo'l belgisi yengil yo'nalishsiz taksilarga yo'lovchilarni tushurish-chiqarish (yuklarni ortish-tushurish) vaqtida ta'sir qilmaydi?",
    answers: [
        "Faqat «A»",
        "Faqat «Б», «С», «Д»",
        "Faqat «C»",
        "Hammasi"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/975.jpg"
};

// 976-savol (98-bilet, 6-savol)
QUESTIONS[97].questions[5] = {
    question: "Chorrahadan oxirgi bo'lib qaysi transport vositasi kesib o'tadi?",
    answers: [
        "Velosiped",
        "Avtobus",
        "Avtomobil"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/976.jpg"
};

// 977-savol (98-bilet, 7-savol)
QUESTIONS[97].questions[6] = {
    question: "Avtomagistralda to'xtashga ruxsat berilgan:",
    answers: [
        "Faqat qatnov qismini chetini bildiruvchi chiziqdan chetda",
        "5.15 yoki 6.11 yo'l belgilari bilan belgilangan maxsus to'xtab turish maydonchalarida",
        "Qatnov qismidan chetda barcha joyda"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 978-savol (98-bilet, 8-savol)
QUESTIONS[97].questions[7] = {
    question: "Kunning yorug' vaqtida harakatlanayotgan qaysi rasmdagi avtomobil haydovchisi yuk tashish qoidasini buzayapti?",
    answers: [
        "Har ikkalasida",
        "A",
        "Hech kim buzmayapti"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/978.jpg"
};

// 979-savol (98-bilet, 9-savol)
QUESTIONS[97].questions[8] = {
    question: "Qaysi holatlarda jabrlanuvchiga yurak-o'pka reanimatsiyasini boshlash kerak?",
    answers: [
        "Hushidan ketishda, nafas olish faoliyati va qon aylanishi to'xtaganda",
        "Yurak sohasida og'riq sezilganda va nafas olish qiyinlashganda",
        "Hushidan ketishda, nafas olish faoliyatidan qat'iy nazar"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 980-savol (98-bilet, 10-savol)
QUESTIONS[97].questions[9] = {
    question: "Trotuar va piyodalar yo'lkasi bo'lmaganda bolalar guruhini yo'lda qanday tartibda olib yurish mumkin?",
    answers: [
        "Qatnov qismi chetidan katta yoshdagilar kuzatuvida olib yurishga ruxsat etiladi",
        "Yo'l yoqasidan faqat kunduzi va katta yoshdagilar kuzatuvida olib yurishga ruxsat etiladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 981-savol (99-bilet, 1-savol)
QUESTIONS[98].questions[0] = {
    question: "Chorraxadan uchinchi bo'lib qaysi avtomobil kesib o'tadi:",
    answers: [
        "Ko'k avtomobil",
        "Yashil avtomobil",
        "Qizil avtomobil"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/981.jpg"
};

// 982-savol (99-bilet, 2-savol)
QUESTIONS[98].questions[1] = {
    question: "Ushbu «50» yozuvli yo'l chizig'i nimani bildiradi?",
    answers: [
        "Yo'l yoki marshrut raqamini",
        "Yo'lning ushbu qismida tavsiya berilgan tezlikni",
        "Yo'lning ushbu qismida ruxsat berilgan eng yuqori tezlikni"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/982.jpg"
};

// 983-savol (99-bilet, 3-savol)
QUESTIONS[98].questions[2] = {
    question: "Qaysi rasmdagi avtomobil haydovchisi yuk tashish qoidasini buzayapti?",
    answers: [
        "«A», «Б»",
        "«A»",
        "«Б»"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/983.jpg"
};

// 984-savol (99-bilet, 4-savol)
QUESTIONS[98].questions[3] = {
    question: "Qo'l oyoq uchlari( tirsakdan past qismi, boldir) sinishida transport shinalari yoki ularni qo'lda yasash uchun vositalar bo'lmasa birinchi tibbiy yordam qanday ko'rsatiladi?",
    answers: [
        "Qo'llarni tirsakdan bukib, ro'molga osgan holda tanaga bog'lash, oyoqlarni orasiga albatta yumshoq mato qo'yib bir-biriga bog'lash",
        "Qo'llarni tana bo'ylab cho'zgan holda tanaga bog'lash, oyoqlarni orasiga yumshoq mato qo'yib bir-biriga bog'lash",
        "Qo'llarni tirsakdan bukib, ro'molga osgan holda tanaga bog'lash, oyoqlarni bir-biriga yaxshilab jipslab tekkazib bog'lash"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 985-savol (99-bilet, 5-savol)
QUESTIONS[98].questions[4] = {
    question: "Ko'rsatilgan belgilardan qaysi biri texnik tavsifnomasiga yoki holatiga ko'ra tezligi soatiga 40 kilometrdan kam bo'lgan transport vositalarining harakatlanishini taqiqlaydi?",
    answers: [
        "Faqat «B»",
        "«A» va «Б»",
        "Faqat «A»"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/985.jpg"
};

// 986-savol (99-bilet, 6-savol)
QUESTIONS[98].questions[5] = {
    question: "Qaysi holatlarda aholi punktlarida tovushli ishoralardan foydalanish mumkin?",
    answers: [
        "Faqat zarur bo'lgan hollarda yo'l-transport hodisasining oldini olish uchun",
        "Faqat boshqa haydovchilarni quvib o'tish haqida ogohlantirish uchun",
        "Barcha javoblarda ko'rsatilgan holatlarda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 987-savol (99-bilet, 7-savol)
QUESTIONS[98].questions[6] = {
    question: "Transport vositasining ruxsat etilgan to'la vazn bu - ...",
    answers: [
        "Aslahalangan transport vositasining ishlab chiqargan korxona tomonidan belgilangan, yuk, haydovchi va yo'lovchilari bilan birgalikdagi eng yuqori vazni (o'lchovi)",
        "Transport vositasining yuki, haydovchi va yo'lovchilari bilan birgalikdagi vazni",
        "Aslahalangan transport vositasining ishlab chiqargan korxona tomonidan belgilangan, yuksiz, haydovchisiz va yo'lovchilarsiz eng yuqori vazni (o'lchovi)"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 988-savol (99-bilet, 8-savol)
QUESTIONS[98].questions[7] = {
    question: "Ko'rsatilgan belgilardan qaysi biri ruxsat etilgan to'la vazni 3,5 tonnadan oshmaydigan yuk avtomobillariga harakatlanishga ruxsat beradi?",
    answers: [
        "«A» va «Б»",
        "Faqat «Б»",
        "«A» va «B»"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/988.jpg"
};

// 989-savol (99-bilet, 10-savol)
QUESTIONS[98].questions[8] = {
    question: "Turar joy dahalarida piyodalar yo'lning qaysi qismida harakatlanishlari kerak?",
    answers: [
        "Faqat trotuar bo'yicha",
        "Qatnov qismi chetida bir qator bo'lib",
        "Trotuardan yoki qatnov qismidan"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 990-savol (99-bilet, 10-savol)
QUESTIONS[98].questions[9] = {
    question: "Chorraxadan birinchi bo'lib qaysi transport vositasi kesib o'tadi?",
    answers: [
        "Ko'k avtomobil",
        "Yashil avtomobil",
        "Qizil avtomobil"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/990.jpg"
};

// 991-savol (100-bilet, 1-savol)
QUESTIONS[99].questions[0] = {
    question: "Tartibga solinmagan chorrahada qaysi belgi albatta to'xtashni talab qiladi?",
    answers: [
        "Faqat «Б» va «В»",
        "Faqat «A»",
        "Faqat «Б»",
        "Hammasi"
    ],
    correct: 2, // F3 to'g'ri (Faqat «Б» - sakkiz burchakli STOP belgisi)
    image: "images/991.jpg"
};

// 992-savol (100-bilet, 2-savol)
QUESTIONS[99].questions[1] = {
    question: "Qaysi transport vositalari yo'nalishli transport vositalari hisoblanadi?",
    answers: [
        "Belgilangan yo'nalishi va bekatlari bo'lgan, yo'lovchi tashish uchun mo'ljallangan umum foydalanishdagi transport vositalari (trolleybus, tramvay, avtobus, yo'nalishli taksi)",
        "Yo'lovchilarni tashuvchi istalgan transport vositalari",
        "Avtobuslar"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 993-savol (100-bilet, 3-savol)
QUESTIONS[99].questions[2] = {
    question: "Chorrahadan birinchi bo'lib kesib o'tadi:",
    answers: [
        "Yashil avtomobil",
        "Ko'k avtomobil",
        "Qizil avtomobil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/993.jpg"
};

// 994-savol (100-bilet, 4-savol)
QUESTIONS[99].questions[3] = {
    question: "Qatnov qismi yo'l chiziqlari bilan ajratilgan bo'lsa haydovchilar qanday holatlarda qat'iy tasmalar bo'yicha harakatlanishlari kerak?",
    answers: [
        "Faqat harakatlanish tasmalari uzluksiz sidirg'a chiziqlar bilan ajratilgan bo'lsa",
        "Faqat harakatlanish serqatnov bo'lganda",
        "Barcha holatlarda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 995-savol (100-bilet, 5-savol)
QUESTIONS[99].questions[4] = {
    question: "Ko'rsatilgan belgilardan qaysilarining talabi bevosita o'rnatilgan joyidan kuchga kiradi?",
    answers: [
        "«A» va «Б»",
        "«Б»",
        "Hammasi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/995.jpg"
};

// 996-savol (100-bilet, 6-savol)
QUESTIONS[99].questions[5] = {
    question: "Chorrahadan ikkinchi bo'lib qaysi transport vositasi kesib o'tadi?",
    answers: [
        "Yashil avtomobil tramvay bilan bir vaqtda",
        "Yashil avtomobil",
        "Qizil avtomobil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/996.jpg"
};

// 997-savol (100-bilet, 7-savol)
QUESTIONS[99].questions[6] = {
    question: "Asosiy yo'l -",
    answers: [
        "Ikki tasmali yo'lga nisbatan uch yoki undan ko'p tasmali yo'l",
        "Tuproqli yoki shag'alli yo'lga nisbatan qattiq qoplamali (asfalt va sement-betonli va shunga o'xshashlar yotqizilgan) yo'l",
        "Toshli yo'lga nisbatan asfalt qoplamali yo'l",
        "Barcha javoblar to'g'ri"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 998-savol (100-bilet, 8-savol)
QUESTIONS[99].questions[7] = {
    question: "Old chiroqlar va orqa gabarit chiroqlari ishlamayotgan transport vositasi harakatini davom ettirishi taqiqlanadi:",
    answers: [
        "Faqat kunning qorong'i vaqtida",
        "Faqat yetarli ko'rinmaslikda",
        "Barcha javoblarda ko'rsatilgan holatlarda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 999-savol (100-bilet, 9-savol)
QUESTIONS[99].questions[8] = {
    question: "Qaysi belgi tartibga solinmagan piyodalar o'tish joyiga yaqinlashayotganlik haqida ogohlantiradi?",
    answers: [
        "«A»",
        "«A» va «Б»",
        "Hammasi"
    ],
    correct: 0, // F1 to'g'ri (Ogohlantiruvchi uchburchak belgi)
    image: "images/999.jpg"
};

// 1000-savol (100-bilet, 10-savol)
QUESTIONS[99].questions[9] = {
    question: "Yengil avtomobilning tormoz yo'li tormoz tizimiga ega bo'lmagan tirkama bilan harakatlanayotganda qanday o'zgaradi?",
    answers: [
        "Ortadi",
        "Kamayadi, chunki tirkama harakatlanishga qo'shimcha qarshilik ko'rsatadi",
        "O'zgarmaydi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1001-savol (101-bilet, 1-savol)
QUESTIONS[100].questions[0] = {
    question: "Yengil avtomobilning tom qismiga o'rnatilgan yukxonasida yukning balandligi (maxsus moslamalar bilan mustahkamlangan holda velosipedlarni tashish bundan mustasno) necha metrdan oshmasligi kerak?",
    answers: [
        "0.5 metr",
        "1.0 metr",
        "1.2 metr",
        "1.5 metr"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1002-savol (101-bilet, 2-savol)
QUESTIONS[100].questions[1] = {
    question: "Quyidagi javoblardan qaysi birida «Yo'lovchi» atamasining to'g'ri ta'rifi ko'rsatilgan?",
    answers: [
        "Transport vositasidag barcha shaxslar",
        "Transport vositasidagi (haydovchidan tashqari) shaxs, shuningdek transport vositasiga kirayotgan(unga chiqib o'tirayotgan) yoki transport vositasidan chiqayotgan(undan tushayotgan) shaxs",
        "Har ikkala ta'rif to'g'ri"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1003-savol (101-bilet, 3-savol)
QUESTIONS[100].questions[2] = {
    question: "Bir yo'nalishda uch va undan ortiq tasmali har qanday yo'da yuk avtomobillariga chetki chap qatorni egallashga ruxsat etiladi:",
    answers: [
        "Quvib o'tish, chapga burilish va qayrilib olishda",
        "Quvib o'tish va aylanib o'lishda",
        "Chapga burilish va qayrilib olishda",
        "Barcha hollarda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1004-savol (101-bilet, 4-savol)
QUESTIONS[100].questions[3] = {
    question: "Odam tashish uchun mo'ljallangan yuk avtomobili yukxonasiga o'rnatilgan o'rindiqlar, yukxona pastki qismidan qancha balandlikda mahkamlangan bo'lishi kerak?",
    answers: [
        "0.3 - 0.5 metr",
        "0.6 - 0.7 metr",
        "0.8 - 0.9 metr"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1005-savol (101-bilet, 5-savol)
QUESTIONS[100].questions[4] = {
    question: "Oq-qizil (1.14.4 zebra) yo'l chizig'i qanday joylarda piyodalar o'tish joyini belgilash uchun chiziladi?",
    answers: [
        "Piyodalar gavjum bo'lgan joylarda",
        "Savdo, madaniy-maishiy xizmat ko'rsatish binolari oldida",
        "Maktab va maktabgacha ta'lim muassasalari oldida",
        "Barcha javoblar to'g'ri"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1006-savol (101-bilet, 6-savol)
QUESTIONS[100].questions[5] = {
    question: "Bu yotiq chiziq bildiradi:",
    answers: [
        "Ko'rsatilgan yo'nalishlarda harakatlanishni taqiqlaydi",
        "Chorrahada tasmalar bo'yicha ruxsat etilgan harakat yo'nalishlarini ko'rsatadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1006.jpg"
};

// 1007-savol (101-bilet, 7-savol)
QUESTIONS[100].questions[6] = {
    question: "Kesishayotgan qatnov qismi chetiga qanchadan kam masofa qolganda to'xtash taqiqlanadi?",
    answers: [
        "40 metr",
        "45 metr",
        "30 metr"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1008-savol (101-bilet, 8-savol)
QUESTIONS[100].questions[7] = {
    question: "Transport vositalarining qayrilib olish joylarida va unga yetmasdan yoki o'tib qanchadan kam masofada to'xtashi taqiqlanadi?",
    answers: [
        "40 metr",
        "35 metr",
        "30 metr",
        "50 metr"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1009-savol (101-bilet, 9-savol)
QUESTIONS[100].questions[8] = {
    question: "Odam tashish uchun mo'ljallangan yuk avtomobili yukxonasi bortining balandligi:",
    answers: [
        "0.7 metrdan kam bo'lmasligi kerak",
        "1 metrdan kam bo'lmasligi kerak",
        "1.3 metrdan kam bo'lmasligi kerak",
        "1.5 metrdan kam bo'lmasligi kerak"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1010-savol (101-bilet, 10-savol)
QUESTIONS[100].questions[9] = {
    question: "Maktab va maktabgacha ta'lim tashkilotlari atrofidagi yo'llarda 300 metrgacha bo'lgan masofada qanday eng yuqori tezlikda harakatlanishga ruxsat etiladi?",
    answers: [
        "20 km/s",
        "30 km/s",
        "50 km/s",
        "60 km/s"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};
// 1011-savol (102-bilet, 1-savol)
QUESTIONS[101].questions[0] = {
    question: "O'zib ketish deb nimaga aytiladi ?",
    answers: [
        "Transport vositasining bir yo'nalishda transport vositasi tezligidan ortiq tezlikda harakatlanishi",
        "Qarama - qarshi yo'nalishda harakatlanish uchun mo'ljallangan tasmaga chiqib,so'ngra ilgari egallagan qatoriga qaytib o'tish bilan bog'liq bo'lgan harakat",
        "Kam tezlik bilan qo'shni qatorda harakatlanayotgan bir yoki bir nechta transport vositasidan o'zib ketish"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1012-savol (102-bilet, 2-savol)
QUESTIONS[101].questions[1] = {
    question: "To'siq deb nimaga aytiladi?",
    answers: [
        "Yo'lning qatnov qismida harakatsiz holda bo'lgan jism",
        "Tirbandlik tufayli qatnov qismida to'xtab turgan transport vositasi",
        "Yo'l harakati xavfsizligiga xavf soluvchi har qanday omil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1013-savol (102-bilet, 3-savol)
QUESTIONS[101].questions[2] = {
    question: "Qayta tizilish deb nimaga aytiladi?",
    answers: [
        "Dastlabki harakat yo'nalishini saqlagan holda o'z harakatlanish tasmasidan boshqa harakatlanish qatoriga o'tish",
        "Qatnov qismining maxsus ajratilgan, 5.35 — 5.37 yo'l belgilari, 1.9 yo'l chizig'i bilan belgilangan... reversiv svetofor o'rnatilgan bo'lagida harakatlanishni o'zgartirish",
        "Xavf tug'ilganda yo'ldagi boshqa harakat qatnashchilarining harakatlanishiga to'sqinlik qilmaslik uchun haydovchilar tomonidan bajariladigan harakat(manyovr)"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1014-savol (102-bilet, 4-savol)
QUESTIONS[101].questions[3] = {
    question: "Quyidagi javoblardan qaysi birida «Xavf» atamasining to'g'ri ta'rifi ko'rsatilgan?",
    answers: [
        "Yo'l harakati xavfsizligiga xavf soluvchi har qanday omil",
        "Yo'l harakati qatnashchilarining yo'nalishini o'zgartirishga majbur qiladigan har qanday to'siq",
        "Yo'l harakati jarayonidan o'sha yo'nalishda va o'sha tezlikda harakatlanishni davom ettirish yo'l transport hodisasi sodir bo'lishiga tahdid soladigan omil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1015-savol (102-bilet, 5-savol)
QUESTIONS[101].questions[4] = {
    question: "Yengil avtomobilning tom qismiga o'rnatilgan yukxonasida yuk tashishda, yukning uzunligi avtomobilning gabaritidan necha metrdan oshmasa tashishga yo'l qo'yiladi?",
    answers: [
        "2 metr",
        "1 metr",
        "1.2 metr",
        "0.5 metr"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1016-savol (102-bilet, 6-savol)
QUESTIONS[101].questions[5] = {
    question: "Piyodalar o'tish joyiga qancha masofa yetmasdan to'xtash va to'xtab turishga ruxsat beriladi?",
    answers: [
        "3 metr",
        "5 metr",
        "10 metr"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1017-savol (102-bilet, 7-savol)
QUESTIONS[101].questions[6] = {
    question: "Bekat maydonchalaridan harakatlanish yo'nalishi bo'ylab qanchadan kam masofada (yetmasdan va o'tib ketib) to'xtash va to'xtab turish taqiqlanadi?",
    answers: [
        "25 metr",
        "30 metr",
        "15 metr",
        "20 metr"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1018-savol (102-bilet, 8-savol)
QUESTIONS[101].questions[7] = {
    question: "Ko'rsatilgan joyda to'xtashga ruxsat etiladimi ?",
    answers: [
        "Taqiqlanadi",
        "Ruxsat etiladi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1018.jpg"
};

// 1019-savol (102-bilet, 9-savol)
QUESTIONS[101].questions[8] = {
    question: "Mazkur yo'l belgisi:",
    answers: [
        "Doimiy belgi hisoblanadi",
        "Vaqtinchalik belgi hisoblanadi",
        "Mavsumiy belgi hisoblanadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1019.jpg"
};

// 1020-savol (102-bilet, 10-savol)
QUESTIONS[101].questions[9] = {
    question: "Qoidalarga ko'ra shatakka olish vaqtida bir-biriga ulangan transport vositalari tarkibining qanday umumiy uzunligiga yo'l qo'yiladi?",
    answers: [
        "20 m",
        "21 m",
        "22 m",
        "23 m",
        "24 m"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1021-savol (103-bilet, 1-savol)
QUESTIONS[102].questions[0] = {
    question: "Mazkur yo'l belgisi:",
    answers: [
        "Doimiy belgi hisoblanadi",
        "Vaqtinchalik belgi hisoblanadi",
        "Mavsumiy belgi hisoblanadi"
    ],
    correct: 1, // F2 to'g'ri (Sariq fondagi belgi - vaqtinchalik)
    image: "images/1021.jpg"
};

// 1022-savol (103-bilet, 2-savol)
QUESTIONS[102].questions[1] = {
    question: "Ushbu yo'l belgisi qanday nomlanadi:",
    answers: [
        "Bir izli temir yo'l kesishmasi",
        "Temir yo'l kesishmasiga yaqinlashuv",
        "Shlagbaumli temir yo'l kesishmasi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1022.jpg"
};

// 1023-savol (103-bilet, 3-savol)
QUESTIONS[102].questions[2] = {
    question: "Ushbu belgilaridan qaysilari vaqtinchalik yo'l belgilari hisoblanadi:",
    answers: [
        "«1» va «4»",
        "«2» va «3»",
        "«3» va «4»"
    ],
    correct: 1, // F2 to'g'ri (Sariq fondagi ogohlantiruvchi va taqiqlovchi belgilar)
    image: "images/1023.jpg"
};

// 1024-savol (103-bilet, 4-savol)
QUESTIONS[102].questions[3] = {
    question: "Qanday hollarda quvib o'tish taqiqlanadi?",
    answers: [
        "Tartibga solingan chorrahalarda",
        "Tepalikning oxirida va yo'lning ko'rinishi cheklangan joylarda",
        "Tartibga solinmagan chorrahalarda asosiy hisoblanmaydigan yo'llarda harakatlanishda",
        "Sanab o'tilgan barcha hollarda"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1025-savol (103-bilet, 5-savol)
QUESTIONS[102].questions[4] = {
    question: "Quyidagi shaxslarga xavfsizlik kamarini (kanstruksiyasida xavfsizlik kamari nazarda tutilgan transport vositalarida)taqmaslikga ruxsat beriladi:",
    answers: [
        "Avtomobilning orqa o'rindiqdagi 12 yoshgacha bo'lgan bolalarga",
        "Homilador ayollarga",
        "Orqaga harakatni amalga oshiryotgan haydovchilarga",
        "F1 va F2 javoblar to'g'ri",
        "Sanab o'tilgan barcha hollarda"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1026-savol (103-bilet, 6-savol)
QUESTIONS[102].questions[5] = {
    question: "Bu belgilardan qaysi biri maktab va maktabgacha ta'lim tashkilotlari oldida o'rnatiladi?",
    answers: [
        "«A»",
        "«Б»",
        "«B»"
    ],
    correct: 1, // F2 to'g'ri («Б» - sariq kvadrat ichidagi bolalar belgisi)
    image: "images/1026.jpg"
};

// 1027-savol (103-bilet, 7-savol)
QUESTIONS[102].questions[6] = {
    question: "Velosipedlarda yuk tashilganda gabaritidan bo'yiga va eniga qanchadan ortiq chiqib tursa, yuk tashish taqiqlanadi?",
    answers: [
        "0.3 m",
        "0.4 m",
        "0.5 m",
        "1 m"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1028-savol (103-bilet, 8-savol)
QUESTIONS[102].questions[7] = {
    question: "Qaysi yo'nalish bo'yicha harakatlanishga ruxsat beriladi?",
    answers: [
        "«A» «Б» «В»",
        "«A» «Б» «Г»",
        "«Г»"
    ],
    correct: 2, // F3 to'g'ri (Rasmda faqat qayrilib olish belgilanmoqda)
    image: "images/1028.jpg"
};

// 1029-savol (103-bilet, 9-savol)
QUESTIONS[102].questions[8] = {
    question: "Chorrahadan chapga burilmoqchisiz, sizning harakatingiz:",
    answers: [
        "Chorrahadan birinchi o'tish",
        "«T» simon svetoforning ruxsat beradigan ishorasini kutish va tramvayga yo'l berib chapga chiqish",
        "Tramvayga yo'l berish"
    ],
    correct: 0, // F1 to'g'ri (Tramvay svetofori to'xtashni buyuryapti)
    image: "images/1029.jpg"
};

// 1030-savol (103-bilet, 10-savol)
QUESTIONS[102].questions[9] = {
    question: "Mayoqchasi yoqilgan transport vositasiga harakatni to'g'riga davom ettirishga ruxsat beriladimi?",
    answers: [
        "Ruxsat beriladi",
        "Taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri (Regulyator ishorasi barcha mayoqchalardan ustun)
    image: "images/1030.jpg"
};

// 1031-savol (104-bilet, 1-savol)
QUESTIONS[103].questions[0] = {
    question: "Ushbu holatda to'xtab turgan tramvayning old qismidan yo'lni kesib o'tishga ruxsat beriladimi?",
    answers: [
        "Ruxsat beriladi",
        "Taqiqlanadi",
        "Istalgan tomonidan ruxsat beriladi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1031.jpg"
};

// 1032-savol (104-bilet, 2-savol)
QUESTIONS[103].questions[1] = {
    question: "Ushbu belgi o'rnatiladi:",
    answers: [
        "Bozorlar oldindan",
        "Maktab va bolalarning dam olish maskanlari oldindan",
        "Vokzal oldindan"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1032.jpg"
};

// 1033-savol (104-bilet, 3-savol)
QUESTIONS[103].questions[2] = {
    question: "Bir vaqtda qayrilib olishda qaysi transport vositasi yo'l berishi kerak?",
    answers: [
        "Avtobus haydovchisi",
        "Yengil avtomobil haydovchisi",
        "Bunday vaziyatda haydovchilar o'zaro kelishadilar"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1033.jpg"
};

// 1034-savol (104-bilet, 4-savol)
QUESTIONS[103].questions[3] = {
    question: "Qaysi transport vositasi haydovchisi qoida buzib harakatlanmoqda?",
    answers: [
        "Ruxsat etilgan to'la vazni 3 tonna bo'lgan yuk avtomobili va moped haydovchisi",
        "Faqat moped haydovchisi",
        "Hech kim qoida buzmayabdi"
    ],
    correct: 0, // F1 to'g'ri (Avtomobillar uchun mo'ljallangan yo'lda moped va og'ir yuk mashinalariga cheklovlar bor)
    image: "images/1034.jpg"
};

// 1035-savol (104-bilet, 5-savol)
QUESTIONS[103].questions[4] = {
    question: "To'xtab turish joyidan chiqayotganda boshqa transport vositasi bilan yo'llaringiz kesishganda qanday harakat qilishingiz kerak?",
    answers: [
        "Yo'l berish",
        "Birinchi o'tish",
        "O'zaro kelishuvga binoan harakatlanish"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1035.jpg"
};

// 1036-savol (104-bilet, 6-savol)
QUESTIONS[103].questions[5] = {
    question: "Qaysi yotiq yo'l chizig'i maktablar oldidagi piyodalar o'tish joylarida qo'llaniladi?",
    answers: [
        "1-chiziq",
        "2-chiziq",
        "3-chiziq"
    ],
    correct: 2, // F3 to'g'ri (Oq-qizil zebra)
    image: "images/1036.jpg"
};

// 1037-savol (104-bilet, 7-savol)
QUESTIONS[103].questions[6] = {
    question: "Qaysi belgi «Avtomobillar uchun mo'ljallangan yo'l» deb nomlanadi?",
    answers: [
        "1",
        "2",
        "3",
        "4"
    ],
    correct: 1, // F2 to'g'ri (2-belgi)
    image: "images/1037.jpg"
};

// 1038-savol (104-bilet, 8-savol)
QUESTIONS[103].questions[7] = {
    question: "Mototsikl haydovchisi qoidani buzayaptimi?",
    answers: [
        "Ha",
        "Yoq"
    ],
    correct: 1, // F2 to'g'ri (O'zib ketishga ruxsat berilgan joy)
    image: "images/1038.jpg"
};

// 1039-savol (104-bilet, 9-savol)
QUESTIONS[103].questions[8] = {
    question: "Belgilardan qaysi biri qatnov qismi kesishmasi hududini bildiradi?",
    answers: [
        "«A»",
        "«Б»",
        "«В»"
    ],
    correct: 0, // F1 to'g'ri («A» - kletka chizig'i haqida ogohlantiruvchi belgi)
    image: "images/1039.jpg"
};

// 1040-savol (104-bilet, 10-savol)
QUESTIONS[103].questions[9] = {
    question: "Bu belgi o'rnatilgan joyda tirkamali yengil avtomobilni harakatlanishga ruxsat beriladimi?",
    answers: [
        "Ruxsat beriladi agar tirkamaning vazni 750kg dan oshmasa",
        "Ruxsat beriladi",
        "Taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri (3.4 belgisi tirkamali yengil mashinalarga taalluqli emas)
    image: "images/1040.jpg"
};

// 1041-savol (105-bilet, 1-savol)
QUESTIONS[104].questions[0] = {
    question: "Ushbu yo'l belgisi qanday nomlanadi?",
    answers: [
        "Tik nishablik",
        "Tik balandlik"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1041.jpg"
};

// 1042-savol (105-bilet, 2-savol)
QUESTIONS[104].questions[1] = {
    question: "Bu yo'l belgisi qanday nomlanadi?",
    answers: [
        "Piyodalarning yo'l yoqasidan yurishi mumkin bo'lgan hudud",
        "Piyodalarning qatnov qismidan yurishi mumkin bo'lgan hudud",
        "Piyodalarning trotuardan yurishi mumkin bo'lgan hudud"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1042.jpg"
};

// 1043-savol (105-bilet, 3-savol)
QUESTIONS[104].questions[2] = {
    question: "Belgilardan qaysi biri er usti avtomobil quyish joyini bildiradi?",
    answers: [
        "1",
        "2",
        "3"
    ],
    correct: 0, // F1 to'g'ri (1-belgi)
    image: "images/1043.jpg"
};

// 1044-savol (105-bilet, 4-savol)
QUESTIONS[104].questions[3] = {
    question: "Quyidagi belgilardan qaysi biri yengil avtomobillar harakati deb nomlanadi?",
    answers: [
        "1",
        "2",
        "3",
        "4"
    ],
    correct: 1, // F2 to'g'ri (2-belgi)
    image: "images/1044.jpg"
};

// 1045-savol (105-bilet, 5-savol)
QUESTIONS[104].questions[4] = {
    question: "Ko'rsatilgan belgilardan qaysi biri bolalar deb nomlanadi?",
    answers: [
        "1",
        "2",
        "3"
    ],
    correct: 1, // F2 to'g'ri (2-belgi)
    image: "images/1045.jpg"
};

// 1046-savol (105-bilet, 6-savol)
QUESTIONS[104].questions[5] = {
    question: "Qaysi yo'nalishda harakatlanish taqiqlanadi?",
    answers: [
        "Faqat chapga",
        "O'nga, chapga va orqaga qayrilib olishga",
        "Chapga va orqaga qayrilib olishga",
        "Faqat to'riga"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/1046.jpg"
};

// 1047-savol (105-bilet, 7-savol)
QUESTIONS[104].questions[6] = {
    question: "Yovvoyi hayvonlar belgisini ko'rsating:",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "2 va 4"
    ],
    correct: 1, // F2 to'g'ri (2-belgi - kiyik rasmi)
    image: "images/1047.jpg"
};

// 1048-savol (105-bilet, 8-savol)
QUESTIONS[104].questions[7] = {
    question: "Qaysi rasmda piyoda(lar) yo'lni qoidani buzgan holda kesib o'tmoqda?",
    answers: [
        "Uchinchi va to'rtinchi rasmlarda",
        "Ikkinchi va uchinchi rasmlarda",
        "Ikkinchi rasmda",
        "Uchinchi rasmda",
        "Ikkinchi, uchinchi va to'rtinchi rasmlarda"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/1048.jpg"
};

// 1049-savol (105-bilet, 9-savol)
QUESTIONS[104].questions[8] = {
    question: "Quyidagi ta'rif “transport vositasi harakatini 10 daqiqagacha bo'lgan muddatga to'xtatish (harakatsiz holatga keltirish)“ qaysi atamaga tegishli?",
    answers: [
        "To'xtash",
        "Majburiy to'xtash",
        "Yo'l berish",
        "To'xtab turish"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1050-savol (105-bilet, 10-savol)
QUESTIONS[104].questions[9] = {
    question: "Qaysi avtomobil haydovchisi yo'l berishi kerak?",
    answers: [
        "Ko'k avtomobil haydovchisi",
        "Yashil avtomobil haydovchisi"
    ],
    correct: 0, // F1 to'g'ri (Turar joy daxasidan chiqayotgan ko'k mashina yo'l berishi shart)
    image: "images/1050.jpg"
};
// 1051-savol (106-bilet, 1-savol)
QUESTIONS[105].questions[0] = {
    question: "Qaysi rasmda piyodalar qatnav qismida qoidani buzmay harakatlanmoqda?",
    answers: [
        "Chapdagi rasmda",
        "O'ngdagi rasmda",
        "Ikkala rasmda"
    ],
    correct: 1, // F2 to'g'ri (O'ngdagi rasmda ular yo'l yoqasida harakatlanishmoqda)
    image: "images/1051.jpg"
};

// 1052-savol (106-bilet, 2-savol)
QUESTIONS[105].questions[1] = {
    question: "Bu belgi nimani bildiradi?",
    answers: [
        "Oldinda tirbandlik borligini",
        "Navbat bilan o'tishni",
        "Tuxtab turish joyiga borishni"
    ],
    correct: 1, // F2 to'g'ri (Navbat bilan o'tish sxemasi)
    image: "images/1052.jpg"
};

// 1053-savol (106-bilet, 3-savol)
QUESTIONS[105].questions[2] = {
    question: "Agar haydovchi o'zi harakatlanayotgan yo'lning qoplamasini bor - yo'qligini aniqlay olmasa (qorong'i vaqt, loy, qor) va imtiyoz belgilari bo'lmasa?",
    answers: [
        "O'zini asosiy yo'lda deb hisoblashi kerak",
        "O'zini ikkinchi darajali yo'lda deb hisoblashi kerak",
        "Teng ahamyatli yo'llar kesishgan chorrahada deb hisoblashi kerak"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1054-savol (106-bilet, 4-savol)
QUESTIONS[105].questions[3] = {
    question: "Qaysi haydovchi belgi talabini buzmay to'xtadi?",
    answers: [
        "Yengil avtomobil",
        "Yuk avtomobil",
        "Har ikkisi ham buzmadi",
        "Har ikkisi buzdi"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/1054.jpg"
};

// 1055-savol (106-bilet, 5-savol)
QUESTIONS[105].questions[4] = {
    question: "Ogohlantiruvchi belgilarni toping",
    answers: [
        "Hammasi",
        "1,2,4,5",
        "4,5"
    ],
    correct: 2, // F3 to'g'ri (Skrinshotdagi belgilangan javobga ko'ra)
    image: "images/1055.jpg"
};

// 1056-savol (106-bilet, 6-savol)
QUESTIONS[105].questions[5] = {
    question: "Harakatlanish qaysi yo'nalishga ruxsat etilgan?",
    answers: [
        "Harakatlanish taqiqlanadi",
        "Faqat to'g'riga",
        "Faqat to'g'riga va o'ngga",
        "Barcha yo'nalishda ruxsat etiladi"
    ],
    correct: 0, // F1 to'g'ri (Tramvay svetofori yopiq)
    image: "images/1056.jpg"
};

// 1057-savol (106-bilet, 7-savol)
QUESTIONS[105].questions[6] = {
    question: "Bu taniqlik belgisi o'rnatiladi:",
    answers: [
        "Vaqtinchalik ta'mirlash ishlari olib borilayotgan yo'l qismlariga",
        "Portlovchi va tez alangalanuvchi yukni tashiyotgan transport vositalariga",
        "Haydovchi staji 2 yildan kam bo'lgan haydovchilar boshqarayotgan mexanik transport vositalariga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1057.jpg"
};

// 1058-savol (106-bilet, 8-savol)
QUESTIONS[105].questions[7] = {
    question: "Quyidagi holatda qaysi avtomobil haydovchisi Yo'l harakati qoidalarini buzmadi?",
    answers: [
        "Ko'k avtomobil haydovchisi",
        "Qizil avtomobil haydovchisi",
        "Ikkalasi ham qoidani buzdi",
        "Ikkalasi ham qoidani buzmadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1058.jpg"
};

// 1059-savol (106-bilet, 9-savol)
QUESTIONS[105].questions[8] = {
    question: "Ushbu vaziyatda qaysi transport vositasining haydovchisi yo'l berishi kerak?",
    answers: [
        "Oq avtomobil haydovchisi",
        "Qizil avtomobil haydovchisi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1059.jpg"
};

// 1060-savol (106-bilet, 10-savol)
QUESTIONS[105].questions[9] = {
    question: "Ushbu vaziyatda kim yo'l berishi kerak?",
    answers: [
        "Mikroavtobus haydovchisi",
        "Yengil avtomobil haydovchisi"
    ],
    correct: 1, // F2 to'g'ri (O'ngdan kelayotgan mikroavtobusga yo'l berish kerak)
    image: "images/1060.jpg"
};

// 1061-savol (107-bilet, 1-savol)
QUESTIONS[106].questions[0] = {
    question: "Ushbu svetofor tramvayga qaysi yo'nalishda harakatlanishga ruxsat beradi?",
    answers: [
        "Faqat to'g'riga",
        "Barcha yo'nalishlarga",
        "Barcha yo'nalishlarda harakatlanish taqiqlanadi"
    ],
    correct: 2, // F3 to'g'ri (Pastki chiroq yonmagan bo'lsa - taqiqlanadi)
    image: "images/1061.jpg"
};

// 1062-savol (107-bilet, 2-savol)
QUESTIONS[106].questions[1] = {
    question: "Tramvay reelssiz transport vositalariga nisbatan imtiyozga ega bo'lmagan holat:",
    answers: [
        "Depodan chiqishda",
        "Depoga kirishda",
        "Har ikkisida imtiyozga ega",
        "Har ikkisida imtiyozga ega emas"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1063-savol (107-bilet, 3-savol)
QUESTIONS[106].questions[2] = {
    question: "Bunday vaziyatda siz:",
    answers: [
        "Birinchi o'tish huquqiga egaman",
        "Ro'paradan kelayotgan avtomobilga yo'l beraman"
    ],
    correct: 1, // F2 to'g'ri (Sizning yo'lingizda to'siq bor)
    image: "images/1063.jpg"
};

// 1064-savol (107-bilet, 4-savol)
QUESTIONS[106].questions[3] = {
    question: "Chorrahadan qaysi yo'nalishda harakatlanishingizga ruxsat berilgan?",
    answers: [
        "Faqat to'g'riga",
        "To'g'riga va o'ngga",
        "Faqat o'ngga"
    ],
    correct: 0, // F1 to'g'ri (Belgi faqat to'g'riga buyuryapti)
    image: "images/1064.jpg"
};

// 1065-savol (107-bilet, 5-savol)
QUESTIONS[106].questions[4] = {
    question: "Ushbu belgi qanday nomlanadi?",
    answers: [
        "Suniy notekislik",
        "Majburiy sekinlanish",
        "Baland piyodalar o'tish joyi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1065.jpg"
};

// 1066-savol (107-bilet, 6-savol)
QUESTIONS[106].questions[5] = {
    question: "Qaysi yotiq yo'l chizig'i avtomobil yo'llarida 3D ko'rinishidagi piyodalar o'tish joyini bildiradi?",
    answers: [
        "«A»",
        "«Б»",
        "«В»"
    ],
    correct: 2, // F3 to'g'ri (В rasm - 3D zebra)
    image: "images/1066.jpg"
};

// 1067-savol (107-bilet, 7-savol)
QUESTIONS[106].questions[6] = {
    question: "Qaysi yotiq yo'l chizig'i avtomobil yo'llarida 3D ko'rinishidagi baland piyodalar o'tish joyini bildiradi?",
    answers: [
        "«A»",
        "«Б»",
        "«В»"
    ],
    correct: 1, // F2 to'g'ri (Б rasm)
    image: "images/1066.jpg"
};

// 1068-savol (107-bilet, 8-savol)
QUESTIONS[106].questions[7] = {
    question: "Qaysi yotiq yo'l chizig'i baland piyodalar o'tish joyini bildiradi?",
    answers: [
        "«A»",
        "«Б»",
        "«В»"
    ],
    correct: 0, // F1 to'g'ri (A rasm - sariq uchburchakli zebra)
    image: "images/1066.jpg"
};

// 1069-savol (107-bilet, 9-savol)
QUESTIONS[106].questions[8] = {
    question: "Ko'rsatilgan holatda qayrilib olishga ruxsat etiladimi?",
    answers: [
        "Taqiqlanadi",
        "Ruxsat beriladi"
    ],
    correct: 0, // F1 to'g'ri (Aynalma harakatdan oldin qayrilib olish taqiqlanadi)
    image: "images/1069.jpg"
};

// 1070-savol (107-bilet, 10-savol)
QUESTIONS[106].questions[9] = {
    question: "Ushbu kesishmadan o'ngga burilishga ruxsat beriladimi?",
    answers: [
        "Taqiqlanadi",
        "Ruxsat beriladi"
    ],
    correct: 1, // F2 to'g'ri (Oxiri berk ko'cha belgisi burilishni taqiqlamaydi)
    image: "images/1070.jpg"
};

// 108-bilet (1071-1080 savollar)
QUESTIONS[107] = { questions: [] };

// 1071-savol
QUESTIONS[107].questions[0] = {
    question: "Chorrahadan to'g'ri harakatlanmoqchisiz - sizning harakatingiz:",
    answers: [
        "Birinchi o'taman",
        "Avtobusga yo'l beraman"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1071.jpg"
};

// 1072-savol
QUESTIONS[107].questions[1] = {
    question: "Siz chorrahadan chapga burilmoqchisiz, kimga yo'l berishingiz kerak?",
    answers: [
        "Mikroavtobusga",
        "Traktorga",
        "Ikkala transportga",
        "Birinchi o'tish huquqiga egaman"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1072.jpg"
};

// 1073-savol
QUESTIONS[107].questions[2] = {
    question: "Ushbu joyda quvib o'tishga ruxsat beriladimi?",
    answers: [
        "Ruxsat beriladi",
        "Oldindagi transport vositasi tezligi 40km/s dan kam bo'lsa",
        "Taqiqlanadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1073.jpg"
};

// 1074-savol
QUESTIONS[107].questions[3] = {
    question: "Qaysi yo'nalish bo'yicha burilish mumkin?",
    answers: [
        "Faqat «A»",
        "Faqat «B»",
        "Ikkala sanab o'tilgan hollarda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1074.jpg"
};

// 1075-savol
QUESTIONS[107].questions[4] = {
    question: "Ushbu transport vositasi qaysi yo'nalishda harakatlanishiga ruxsat etiladi?",
    answers: [
        "Faqat chapga",
        "To'g'ri va chapga",
        "Faqat chapga va qayrilib olishga",
        "Barcha yo'nalishlarga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1075.jpg"
};

// 1076-savol
QUESTIONS[107].questions[5] = {
    question: "Ushbu belgi aholi punktlarida xavfli yo'l qismi boshlanishidan qancha masofa oldin o'rnatiladi?",
    answers: [
        "150-300 m",
        "50-100 m",
        "Xavfli yo'l qismi oldiga o'rnatiladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1076.jpg"
};

// 1077-savol
QUESTIONS[107].questions[6] = {
    question: "Qaysi belgilarda oyning juft kunlarida to'xtash mumkin?",
    answers: [
        "Chapdagi rasmda",
        "O'ngdagi rasmda",
        "Har ikkisida mumkin"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1077.jpg"
};

// 1078-savol
QUESTIONS[107].questions[7] = {
    question: "Doimiy va vaqtinchalik yo'l belgilari ma'no jihatidan bir birini inkor etganda qaysi biriga amal qilasiz?",
    answers: [
        "Doimiy yo'l belgisiga",
        "Vaqtinchalik yo'l belgisiga"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1079-savol
QUESTIONS[107].questions[8] = {
    question: "Moped haydovchisi majbur:",
    answers: [
        "16 yoshga to'lgan bo'lishi",
        "Motoshlem kiyishlari va uni qadab olishlari",
        "Kunduzgi vaqtda ham yaqinni yorituvchi chiroqlarni yoqib yurishi",
        "Barcha sanab o'tilgan javoblar"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1080-savol
QUESTIONS[107].questions[9] = {
    question: "Yo'naltirgichlar bilan ko'rsatilgan qaysi yo'nalishlarda harakat ruxsat etilgan?",
    answers: [
        "Faqat to'g'riga",
        "Faqat o'ngga",
        "Faqat chapga",
        "Faqat to'g'riga va o'ngga",
        "Barcha yo'nalishlarga"
    ],
    correct: 4, // F5 to'g'ri
    image: "images/1080.jpg"
};

// 109-bilet (1081-1090 savollar)
QUESTIONS[108] = { questions: [] };

// 1081-savol
QUESTIONS[108].questions[0] = {
    question: "Ushbu vaziyatda avtomobil haydovchisiga qaysi yo'nalishda harakatlanish taqiqlanadi?",
    answers: [
        "To'g'riga va chapga",
        "Chapga va qayrilib olishga",
        "Qayrilib olishga",
        "Barcha yo'nalishga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1081.jpg"
};

// 1082-savol
QUESTIONS[108].questions[1] = {
    question: "Ushbu vaziyatda qaysi yo'nalishda harakatlanishingiz mumkin?",
    answers: [
        "1, 3 va 4 yo'nalishlarda",
        "1, 2 va 3 yo'nalishlarda",
        "1 va 4 yo'nalishlarda",
        "Barcha yo'nalishlarda"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/1082.jpg"
};

// 1083-savol
QUESTIONS[108].questions[2] = {
    question: "Ushbu chorrahada chapga burilishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1083.jpg"
};

// 1084-savol
QUESTIONS[108].questions[3] = {
    question: "Harakatlanish vaqtida velosipedchi bilan avtomobil yo'llari kesishganda kim yo'l berishi kerak?",
    answers: [
        "Avtomobil",
        "Velosipedchilar",
        "O'zaro kelishib o'tishadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1084.jpg"
};

// 1085-savol
QUESTIONS[108].questions[4] = {
    question: "Qaysi haydovchi to'xtab turish qoidalarini buzmadi?",
    answers: [
        "Mototsikl haydovchisi",
        "Trotuarda to'xtab turgan avtomobil haydovchisi",
        "Hech kim buzmadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1085.jpg"
};

// 1086-savol
QUESTIONS[108].questions[5] = {
    question: "Haydovchi poyezdni o'tkazib yuborishi uchun to'g'ri to'xtaganmi?",
    answers: [
        "Ha",
        "Yoq"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1086.jpg"
};

// 1087-savol (Rasm yo'q, umumiy rasm qo'yildi)
QUESTIONS[108].questions[6] = {
    question: "Tezkor va maxsus xizmatlarning transport vositalari yo'l harakatining boshqa qatnashchilariga nisbatan imtiyozga ega bo'lishi uchun:",
    answers: [
        "Ko'k yoki qizil yoxud ko'k va qizil rangli yalt-yalt etuvchi mayoqchalar yoqilgan bo'lishi shart",
        "Maxsus tovushli ishora yoqilgan bo'lishi shart",
        "Har ikkalasi yoqilgan bo'lishi shart"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1088-savol
QUESTIONS[108].questions[7] = {
    question: "Qaysi rasmda haydovchi belgi talabini buzmay to'xtadi?",
    answers: [
        "Faqat 1-rasmda",
        "Faqat 2-rasmda",
        "Ikkala rasmda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1088.jpg"
};

// 1089-savol
QUESTIONS[108].questions[8] = {
    question: "Ushbu belgi qanday nomlanadi?",
    answers: [
        "Piyodalarning harakati taqiqlangan",
        "Individual harakatlanish vositalarini boshqarish taqiqlangan",
        "Bolalar uchishi taqiqlangan"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1089.jpg"
};

// 1090-savol
QUESTIONS[108].questions[9] = {
    question: "Qaysi avtomobil haydovchisi qoidani buzib hovliga burildi?",
    answers: [
        "Faqat oq avtomobil haydovchisi",
        "Faqat sariq avtomobil haydovchisi",
        "Hech qaysi buzmadi",
        "Ikkisi ham buzdi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1090.jpg"
};
// 110-bilet (1091-1100 savollar)
QUESTIONS[109] = { questions: [] };

// 1091-savol
QUESTIONS[109].questions[0] = {
    question: "Qaysi transport vositasining haydovchisi aholi punktlarida to'xtash qoidasini buzmoqda?",
    answers: [
        "Sariq avtomobil haydovchisi",
        "Ko'k avtomobil haydovchisi",
        "Har ikkisi buzmadi",
        "Har ikkisi buzdi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1091.jpg"
};

// 1092-savol
QUESTIONS[109].questions[1] = {
    question: "Yo'naltirgichlar bilan ko'rsatilgan qaysi yo'nalishlarda harakat ruxsat etilgan?",
    answers: [
        "Faqat to'g'riga",
        "Faqat o'ngga",
        "Faqat chapga",
        "Faqat to'g'riga va chapga",
        "Barcha yo'nalishlarga"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/1092.jpg"
};

// 1093-savol
QUESTIONS[109].questions[2] = {
    question: "Qaysi transport vositalariga yo'lovchilarni tushurishga ruxsat etiladi?",
    answers: [
        "«A»",
        "«Б»",
        "«В»",
        "Hech qaysi biriga"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1093.jpg"
};

// 1094-savol
QUESTIONS[109].questions[3] = {
    question: "Ushbu yotiq yo'l chizig'i qaysi guruh yo'l belgilarini takrorlaydi?",
    answers: [
        "Imtiyoz belgilarni",
        "Ogohlantiruvchi belgilarni",
        "Taqiqlovchi belgilarni",
        "Axborot-ko'rsatgich belgilarni"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1094.jpg"
};

// 1095-savol (Rasm raqami yo'q)
QUESTIONS[109].questions[4] = {
    question: "Velosiped yo'lkasi bilan kesishuvga qanchadan kam masofa qolganda to'xtash taqiqlanadi?",
    answers: [
        "10 metr",
        "15 metr",
        "30 metr"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1096-savol
QUESTIONS[109].questions[5] = {
    question: "Qizil avtomobil haydovchisi qaysi yo'nalishlarda harakatlanishiga ruxsat berilgan?",
    answers: [
        "Faqat chapga",
        "Chapga va qayrilib olishga",
        "To'g'riga va chapga"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1096.jpg"
};

// 1097-savol
QUESTIONS[109].questions[6] = {
    question: "Ushbu transport vositasi qaysi yo'nalishda harakatlanishiga ruxsat etiladi?",
    answers: [
        "Faqat to'g'riga",
        "To'g'riga va o'ngga",
        "Faqat to'g'riga va qayrilib olishga",
        "Barcha yo'nalishlarga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1097.jpg"
};

// 1098-savol
QUESTIONS[109].questions[7] = {
    question: "Ushbu vaziyatda haydovchilar birinchi temir yo'l iziga eng kamida necha metr qolganda to'xtashlari kerak?",
    answers: [
        "3 metr",
        "5 metr",
        "10 metr"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1098.jpg"
};

// 1099-savol
QUESTIONS[109].questions[8] = {
    question: "Kemiruvchi va sudralib yuruvchi hayvonlar qaysi javobda ko'rsatilgan?",
    answers: [
        "1",
        "2",
        "3",
        "4",
        "2 va 3"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/1099.jpg"
};

// 1100-savol
QUESTIONS[109].questions[9] = {
    question: "Qaysi belgi piyodalar o'tish joyini bildiradi?",
    answers: [
        "«A»",
        "«Б»",
        "«В»"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1100.jpg"
};

// 111-bilet (1101-1110 savollar)
QUESTIONS[110] = { questions: [] };

// 1101-savol
QUESTIONS[110].questions[0] = {
    question: "Ko'k rangli yalt-yalt etuvchi mayoqchalari va maxsus tovushli ishorasi yoqilgan maxsus transport vositasi chorrahani nechanchi bo'lib kesib o'tadi?",
    answers: [
        "Oxirgi",
        "Birinchi",
        "Ikkinchi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1101.jpg"
};

// 1102-savol
QUESTIONS[110].questions[1] = {
    question: "Qaysi rasmdagi haydovchilar to'xtash qoidasini buzdilar?",
    answers: [
        "1",
        "2",
        "3",
        "1,2",
        "1,3"
    ],
    correct: 4, // F5 to'g'ri
    image: "images/1102.jpg"
};

// 1103-savol
QUESTIONS[110].questions[2] = {
    question: "Ushbu transport vositasiga chorraha orqali qaysi yo'nalishlar bo'yicha harakatlanishga ruxsat etiladi?",
    answers: [
        "Faqat to'g'riga va o'ngga",
        "Faqat chapga va qayrilib olishga",
        "Faqat o'ngga",
        "Faqat to'g'riga",
        "Barcha yo'nalishlarga"
    ],
    correct: 4, // F5 to'g'ri
    image: "images/1103.jpg"
};

// 1104-savol
QUESTIONS[110].questions[3] = {
    question: "Qaysi avtomobil haydovchisiga burilishga ruxsat etilgan?",
    answers: [
        "Har ikkisiga ruxsat etilgan",
        "Oq avtomobil haydovchisiga",
        "Har ikkisiga taqiqlangan",
        "Qizil avtomobil haydovchisiga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1104.jpg"
};

// 1105-savol
QUESTIONS[110].questions[4] = {
    question: "Ushbu belgi qanday nomlanadi?",
    answers: [
        "To'xtab turish joyi",
        "Pullik to'xtab turish joyi",
        "Yer usti avtomobil qo'yish joyi",
        "Yer osti avtomobil qo'yish joyi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1105.jpg"
};

// 1106-savol
QUESTIONS[110].questions[5] = {
    question: "Qaysi rasmlarda quvib o'tish ko'rsatilgan?",
    answers: [
        "Faqat birinchi va ikkinchi rasmlarda",
        "Faqat birinchi va uchinchi rasmlarda",
        "Faqat birinchi, ikkinchi va to'rtinchi rasmlarda",
        "Faqat birinchi rasmda",
        "Barcha rasmlarda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1106.jpg"
};

// 1107-savol
QUESTIONS[110].questions[6] = {
    question: "Qaysi rasmda piyodalarning tashkiliy jamlanmasi yo'lning qatnov qismida qoidani buzmay harakatlanmoqda?",
    answers: [
        "1",
        "2",
        "1,2"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1107.jpg"
};

// 1108-savol
QUESTIONS[110].questions[7] = {
    question: "Asosiy yo'l:",
    answers: [
        "Faqat yuqori chapdagi rasmda",
        "Faqat yuqori o'ngdagi rasmda",
        "Yuqoridagi ikkala rasmda",
        "Barcha rasmlarda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1108.jpg"
};

// 1109-savol
QUESTIONS[110].questions[8] = {
    question: "Ushbu qo'shimcha axborot belgisi qaysi yo'l belgisi bilan qo'llaniladi?",
    answers: [
        "1",
        "2",
        "3",
        "4"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/1109.jpg"
};

// 1110-savol
QUESTIONS[110].questions[9] = {
    question: "Ushbu transport vosita qaysi toifaga kiradi?",
    answers: [
        "M1",
        "M2",
        "N1",
        "O1"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1110.jpg"
};

// 112-bilet (1111-1120 savollar)
QUESTIONS[111] = { questions: [] };

// 1111-savol
QUESTIONS[111].questions[0] = {
    question: "Ushbu belgi qanday nomlanadi?",
    answers: [
        "Oksidlovchi moddalar",
        "Organik peroksidlar",
        "Tez alangalanadigan gazlar va suyuqliklar"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1111.jpg"
};

// 1112-savol
QUESTIONS[111].questions[1] = {
    question: "Rasmda ko'rsatilgan vaziyatda avtomobil haydovchisi harakatni davom ettirishi kerakmi?",
    answers: [
        "Ha",
        "Yoq"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1112.jpg"
};

// 1113-savol
QUESTIONS[111].questions[2] = {
    question: "Quyidagi yo'l belgilaridan qaysilari qo'shimcha axborot belgilari hisoblanadi?",
    answers: [
        "1 va 2",
        "2 va 3",
        "Ko'rsatilgan barcha javoblar to'g'ri"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1113.jpg"
};

// 1114-savol
QUESTIONS[111].questions[3] = {
    question: "Qaysi javobda chorrahadan o'tish navbati to'g'ri ko'rsatilgan?",
    answers: [
        "Velosiped, oq avtomobil, qizil avtomobil",
        "Velosiped, qizil avtomobil, oq avtomobil",
        "Qizil avtomobil, oq avtomobil, velosiped"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1114.jpg"
};

// 1115-savol (Rasmi yo'q savol)
QUESTIONS[111].questions[4] = {
    question: "Imtiyoz belgilari qaysi jaylarda harakatlanish navbatini belgilaydi?",
    answers: [
        "Faqat chorrahalarda",
        "Faqat yo'lning tor qismlarida",
        "Har ikki ko'rsatilgan javoblar to'g'ri"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1116-savol
QUESTIONS[111].questions[5] = {
    question: "Qaysi avtomobil haydovchisi chorrahada burilish qoidasini buzdi?",
    answers: [
        "Har ikkisi ham buzdi",
        "Har ikkisi ham buzmadi",
        "Qizil avtomobil haydovchisi",
        "Ko'k avtomobil haydovchisi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1116.jpg"
};

// 1117-savol
QUESTIONS[111].questions[6] = {
    question: "Qaysi yo'nalishda qayrilib olishga ruxsat beradi?",
    answers: [
        "Faqat «B» yo'nalish bo'ylab",
        "Faqat «Б» va «B» yo'nalish bo'ylab",
        "Barcha yo'nalish bo'ylab"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1117.jpg"
};

// 1118-savol
QUESTIONS[111].questions[7] = {
    question: "Quyidagi 3.24. «Yuqori tezlik cheklangan» yo'l belgisining tasirini qaysi belgilar bekor qiladi?",
    answers: [
        "Faqat birinchisi",
        "Faqat ikkinchisi",
        "Faqat uchinchisi",
        "Faqat to'rtinchisi",
        "Barcha javoblar to'g'ri"
    ],
    correct: 4, // F5 to'g'ri
    image: "images/1118.jpg"
};

// 1119-savol
QUESTIONS[111].questions[8] = {
    question: "Quyidagi joyda to'xtashga ruxsat beriladimi?",
    answers: [
        "Ruxsat beriladi",
        "Taqiqlanadi",
        "To'xtagan transport vositasi bilan sidirg'a chiziq orasidagi masofa 3 metrdan ko'p bo'lsa ruxsat beriladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1119.jpg"
};

// 1120-savol
QUESTIONS[111].questions[9] = {
    question: "Qaysi transport vositasi qoidani buzmoqda?",
    answers: [
        "Har ikkalasi buzdi",
        "Har ikkalasi buzmadi",
        "Oq buzdi",
        "Yashil buzdi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1120.jpg"
};
// 113-bilet (1121-1130 savollar)
QUESTIONS[112] = { questions: [] };

// 1121-savol
QUESTIONS[112].questions[0] = {
    question: "Ushbu belgilardan qaysi biri qayrilib olishga ruxsat beradi?",
    answers: [
        "Faqat 1 va 2",
        "Faqat 2 va 3",
        "Barchasi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1121.jpg"
};

// 1122-savol
QUESTIONS[112].questions[1] = {
    question: "Qaysi avtomobilga qayrilib olish taqiqlanadi?",
    answers: [
        "Oq avtomobilga",
        "Yashil avtomobilga",
        "Ikkala avtomobilga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1122.jpg"
};

// 1123-savol
QUESTIONS[112].questions[2] = {
    question: "Quyidagi holatda qizil avtomobilga quvib o'tishga ruxsat beriladimi?",
    answers: [
        "Ruxsat beriladi",
        "Taqiqlanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1123.jpg"
};

// 1124-savol
QUESTIONS[112].questions[3] = {
    question: "Avtomobillar harakatlanayotgan qatnov qismida nechta harakatlanish tasmasi bor?",
    answers: [
        "Bitta tasma",
        "Ikkita tasma",
        "Uchta tasma"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1124.jpg"
};

// 1125-savol
QUESTIONS[112].questions[4] = {
    question: "Qaysi yo'nalishda harakatlanishga ruxsat beriladi?",
    answers: [
        "«A» va «Б»",
        "«Б»",
        "«Б» va «В»",
        "Barcha yo'nalishlarda"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1125.jpg"
};

// 1126-savol (Rasmi yo'q savol)
QUESTIONS[112].questions[5] = {
    question: "Odamlarni quyidagi hollarda tashishga ruxsat etiladi:",
    answers: [
        "Traktorlarda",
        "Tirkama-uychada",
        "Yuk tashiladigan tirkamalarda",
        "Bolalarni yuk avtomobillarining yukxonasida",
        "Barcha hollarda tashish taqiqlanadi"
    ],
    correct: 4, // F5 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1127-savol (Rasmi yo'q savol)
QUESTIONS[112].questions[6] = {
    question: "Agar yo'l belgilari va chiziqlari boshqa yo'nalishni ko'rsatmagan bo'lsa, haydovchilar ajratuvchi bo'lagi bo'lmagan ikki tomonlama harakat tashkil etilgan yo'llardagi xavfsizlik orolchalari, ustunchalar va yo'l inshooti qismlari (ko'prik, yo'l o'tkazgich ustunlari va shunga o'xshashlar)ni qaysi tomonidan o'tishi kerak?",
    answers: [
        "Chap tomondan",
        "O'ng tomondan",
        "O'ng va chap tomondan"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1128-savol (Rasmi yo'q savol)
QUESTIONS[112].questions[7] = {
    question: "To'xtash deb nimaga aytiladi?",
    answers: [
        "Transport vositasi harakatini 10 daqiqagacha bo'lgan muddatga to'xtatish (harakatsiz holatga keltirish)",
        "Transport vositasiga yo'lovchilarni chiqarish yoki tushirish, yuk ortish yoki tushirish bilan bog'liq bo'lmagan hollarda harakatni 10 daqiqadan ko'proq vaqtga atayin to'xtatish"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1129-savol (Rasmi yo'q savol)
QUESTIONS[112].questions[8] = {
    question: "To'xtab turish deb nimaga aytiladi?",
    answers: [
        "Transport vositasi harakatini 10 daqiqagacha bo'lgan muddatga to'xtatish (harakatsiz holatga keltirish)",
        "Transport vositasiga yo'lovchilarni chiqarish yoki tushirish, yuk ortish yoki tushirish bilan bog'liq bo'lmagan hollarda harakatni 10 daqiqadan ko'proq vaqtga atayin to'xtatish"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1130-savol (Rasmi yo'q savol)
QUESTIONS[112].questions[9] = {
    question: "Transport vositalarini boshqarishni dastlabki o'rgatish(transport vositasini haydab o'rgatish) qayerlarda o'tkazilishi kerak?",
    answers: [
        "Turar joy dahalarida",
        "Aholi punktlarida",
        "Yopiq maydonchalarda yoki avtodromlarda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};
// 114-bilet (1131-1140 savollar)
QUESTIONS[113] = { questions: [] };

// 1131-savol (Rasmi yo'q savol)
QUESTIONS[113].questions[0] = {
    question: "Yo'nalishli transport vositalariga bekatlardan tashqari joylarda yo'lovchi olish va tushirishga (yo'nalishli taksilar bundan mustasno) ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1132-savol
QUESTIONS[113].questions[1] = {
    question: "Qaysi belgida haydovchiga quvib o'tish taqiqlangan?",
    answers: [
        "1 va 2",
        "2 va 3",
        "Barchasida taqiqlangan"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1132.jpg"
};

// 1133-savol
QUESTIONS[113].questions[2] = {
    question: "Avtomobil haydovchisiga qaysi yo'nalish bo'yicha harakatlanishga ruxsat etiladi?",
    answers: [
        "O'ngga va chapga",
        "Faqat chapga",
        "Barcha yo'nalishlarga"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1133.jpg"
};

// 1134-savol
QUESTIONS[113].questions[3] = {
    question: "Qizil mashina haydovchisi o'tib ketayotgan mashina orqasida to'xtagan bo'lsa, «STOP» belgisida ham to'xtashi kerakmi?",
    answers: [
        "Ha",
        "Yo'q"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1134.jpg"
};

// 1135-savol
QUESTIONS[113].questions[4] = {
    question: "Qaysi yo'nalishlarda harakat qilish mumkin?",
    answers: [
        "Barcha yo'nalishlarda harakatlanishga ruxsat etiladi",
        "Chapga va qayrilib olish",
        "Chapga",
        "To'g'riga va chapga",
        "Barcha yo'nalishlarda harakatlanish taqiqlanadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1135.jpg"
};

// 1136-savol
QUESTIONS[113].questions[5] = {
    question: "Yengil avtomobil qaysi yo'nalish bo'yicha to'g'ri burilmoqda?",
    answers: [
        "1",
        "1 va 2",
        "2"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1136.jpg"
};

// 1137-savol
QUESTIONS[113].questions[6] = {
    question: "Chapga burilish sizga qaysi trayektoriya bo'yicha amalga oshirishga ruxsat etiladi?",
    answers: [
        "Faqat «A» trayektoriya bo'yicha",
        "Ko'rsatilgan trayektoriyalardan istalgan biri bo'yicha",
        "Faqat «Б» trayektoriya bo'yicha"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1137.jpg"
};

// 1138-savol
QUESTIONS[113].questions[7] = {
    question: "Avtomobil haydovchisi qaysi yo'nalishlarda harakatlanishga ruxsat etiladi?",
    answers: [
        "Faqat «A»",
        "Faqat «Б»",
        "Faqat «A» va «Б»",
        "Barchasi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1138.jpg"
};

// 1139-savol
QUESTIONS[113].questions[8] = {
    question: "Ko'k avtomobil haydovchisi qaysi yo'nalish bo'yicha qoidani buzib burilmoqda?",
    answers: [
        "Faqat «A»",
        "Faqat «Б»",
        "Har ikki yo'nalish bo'yicha qoidani buzmoqda",
        "Har ikki yo'nalish bo'yicha qoidani buzmayapti"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1139.jpg"
};

// 1140-savol
QUESTIONS[113].questions[9] = {
    question: "Aholi punktlaridan tashqarida qaysi avtomobil to'xtab turish qoidasini buzmadi?",
    answers: [
        "Qizil avtomobil",
        "Oq avtomobil",
        "Qizil va oq avtomobil",
        "Ko'k avtomobil",
        "Barcha avtomobillar to'xtab turish qoidasini buzdi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1140.jpg"
};

// 115-bilet (1141-1150 savollar)
QUESTIONS[114] = { questions: [] };

// 1141-savol
QUESTIONS[114].questions[0] = {
    question: "Qaysi avtomobil haydovchisi svetaforning taqiqlovchi ishorasida to'g'ri to'xtadi?",
    answers: [
        "1- rasmda",
        "2- rasmda",
        "Har ikkala rasmda"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1141.jpg"
};

// 1142-savol
QUESTIONS[114].questions[1] = {
    question: "O'quv muddati yakunida \"A\" toifadagi mototransport vositasini boshqarish huquqiga ega bo'lish uchun necha yoshga to'lgan shaxslarga imtihonlarni topshirishga ruxsat etiladi?",
    answers: [
        "14 yoshga",
        "15 yoshga",
        "16 yoshga",
        "17 yoshga",
        "18 yoshga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1142.jpg"
};

// 1143-savol
QUESTIONS[114].questions[2] = {
    question: "Qaysi javobda belgining nomi to'g'ri ko'rsatilgan?",
    answers: [
        "Otda yurish yo'li",
        "Otda harakatlanish",
        "Otda yurish taqiqlanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1143.jpg"
};

// 1144-savol
QUESTIONS[114].questions[3] = {
    question: "Qaysi transport vositasi harakatni davom etirishi mumkin?",
    answers: [
        "Faqat ko'k avtomobil",
        "Faqat oq avtomobil",
        "Ikkala avtomobil",
        "Hech biri"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1144.jpg"
};

// 1145-savol (Rasmi yo'q savol)
QUESTIONS[114].questions[4] = {
    question: "Svetoforning asosiy yashil ishorasiga yo'naltirgich (yo'naltirgichlar)ning shakli tushirilgan bo'lsa, haydovchilarga nima haqida axborot beradi?",
    answers: [
        "Yaqin orada yashil ishorasi yonishi haqida axborot beradi",
        "Svetoforning qo'shimcha tarmog'i borligi haqida axborot beradi",
        "Svetofor ishlamayotganligi to'g'risida axborot beradi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1146-savol
QUESTIONS[114].questions[5] = {
    question: "Avtobus haydovchisiga bu joyda odam tushirishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi",
        "Agar avtobus belgilangan yo'nalishli bo'lsa ruxsat etiladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1146.jpg"
};

// 1147-savol
QUESTIONS[114].questions[6] = {
    question: "Avtomobil qaysi yo'nalishda qayrilib olishiga ruxsat beriladi?",
    answers: [
        "«A» yo'nalishga",
        "«B» yo'nalishga",
        "Har ikki yo'nalishga"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1147.jpg"
};

// 1148-savol
QUESTIONS[114].questions[7] = {
    question: "Qaysi yo'nalish bo'yicha harakatlanishga ruxsat berilgan?",
    answers: [
        "«A» va «B»",
        "«B» va «C»",
        "Barcha yo'nalishlarga"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1148.jpg"
};

// 1149-savol
QUESTIONS[114].questions[8] = {
    question: "Qizil avtomobil kimga yo'l berishi kerak?",
    answers: [
        "Yuk avtomobiliga",
        "Traktorga",
        "Hech kimga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1149.jpg"
};

// 1150-savol
QUESTIONS[114].questions[9] = {
    question: "Ushbu vaziyatda qaysi transport vositasiga harakatlanishga ruxsat etiladi?",
    answers: [
        "Tramvayga",
        "Yengil avtomobilga",
        "Har ikkisiga ruxsat etiladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1150.jpg"
};
// 116-bilet (1151-1160 savollar)
QUESTIONS[115] = { questions: [] };

// 1151-savol
QUESTIONS[115].questions[0] = {
    question: "Qaysi yo'nalishlarda harakatlanishi mumkin?",
    answers: [
        "1 va 2",
        "1, 2 va 4",
        "1, 3 va 4",
        "Barcha yo'nalishlarda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1151.jpg"
};

// 1152-savol
QUESTIONS[115].questions[1] = {
    question: "Qizil avtomobil haydovchisi yaqinlashib kelayotgan poyezdni o'tkazib yuborish uchun to'g'ri to'xtadimi?",
    answers: [
        "To'g'ri to'xtadi",
        "Noto'g'ri to'xtadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1152.jpg"
};

// 1153-savol
QUESTIONS[115].questions[2] = {
    question: "Qaysi avtomobil haydovchisi yo'l berishi kerak?",
    answers: [
        "Qizil avtomobil",
        "Ko'k avtomobil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1153.jpg"
};

// 1154-savol
QUESTIONS[115].questions[3] = {
    question: "Qaysi yo'nalish bo'yicha chapga burilishga ruxsat etiladi?",
    answers: [
        "Faqat 1-yo'nalish",
        "Faqat 2-yo'nalish",
        "Har ikki yo'nalishlarga taqiqlanadi",
        "Barcha yo'nalishlarga"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1154.jpg"
};

// 1155-savol (Rasmi yo'q savol)
QUESTIONS[115].questions[4] = {
    question: "Mopedlarni boshqarishga necha yoshdan ruxsat etiladi?",
    answers: [
        "12 yosh",
        "14 yosh",
        "16 yosh",
        "18 yosh"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1156-savol (Rasmi yo'q savol)
QUESTIONS[115].questions[5] = {
    question: "Velosipedni boshqarishga necha yoshdan ruxsat etiladi?",
    answers: [
        "12 yosh",
        "14 yosh",
        "16 yosh",
        "18 yosh"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1157-savol (Rasmi yo'q savol)
QUESTIONS[115].questions[6] = {
    question: "Miniladigan uy hayvonlarini boshqarishga necha yoshdan ruxsat etiladi?",
    answers: [
        "12 yosh",
        "14 yosh",
        "16 yosh",
        "18 yosh"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1158-savol (Rasmi yo'q savol)
QUESTIONS[115].questions[7] = {
    question: "Yo'l chiziqlari nechta guruhdan iborat?",
    answers: [
        "2 ta",
        "3 ta",
        "4 ta"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1159-savol (Rasmi yo'q savol)
QUESTIONS[115].questions[8] = {
    question: "Velosipeddan foydalanishda yo'lovchi tashish qaysi hollarda ruxsat etiladi?",
    answers: [
        "Faqat kattalar uchun ruxsat etiladi",
        "Har qanday yo'lovchi tashish mumkin",
        "Har qanday holda ruxsat etilmaydi",
        "Faqat 7 yoshgacha bo'lgan bolalarni maxsus o'rindiqda tashish mumkin"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1160-savol (Rasmi yo'q savol)
QUESTIONS[115].questions[9] = {
    question: "Vazirllar Mahkamasining 172 - sonli qarori muvofik, Yo'l harakati qoidalari nechta banddan iborat?",
    answers: [
        "184",
        "186",
        "216",
        "220"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};
// 117-bilet (1161-1170 savollar)
QUESTIONS[116] = { questions: [] };

// 1161-savol (Rasmi yo'q savol)
QUESTIONS[116].questions[0] = {
    question: "Qaysi javobda \"Avariya holatini yuzaga keltirish\" atamasi ko'rsatilgan?",
    answers: [
        "Yo'l harakatining boshqa ishtirokchilarini harakat yo'nalishi yoki tezligini keskin o'zgartirishga, shuningdek, o'z xavfsizligini yoxud boshqa fuqarolar xavfsizligini ta'minlash uchun o'zga choralarni ko'rishga majbur qilish;",
        "Yo'l-transport hodisalarining kelib chiqish sabablarining oldini olishga, ularning og'ir oqibatlarini kamaytirishga qaratilgan faoliyat;"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1162-savol (Rasmi yo'q savol)
QUESTIONS[116].questions[1] = {
    question: "Aholi yashash joylaridan tashqaridagi ikki tomonlama harakat tashkil etilgan ikki tasmali yo'llarda tezligini soatiga 50 kilometrdan oshirishi mumkin bo'lmagan, shuningdek, uzunligi 7 metrdan ortiq bo'lgan transport vositalarining (transport vositalarining tarkibi) haydovchilari o'zi va oldida harakatlanayotgan transport vositasi orasida qancha masofa bo'lishi kerak?",
    answers: [
        "3 metr",
        "5 metr",
        "Haydovchi o'zidan oldinda harakatlanayotgan transport vositasi keskin tormoz berganda, to'qnashib ketmaslik kafolatini beradigan darajadagi oraliq masofani.",
        "Ularni quvib o'tayotgan transport vositalari oldin egallagan qatoriga bemalol qayta tizilishi uchun imkon beradigan masofani saqlashlari kerak."
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1163-savol
QUESTIONS[116].questions[2] = {
    question: "Avtomobillar qaysi yo'nalishda harakatlanishi mumkin?",
    answers: [
        "Qizil faqat orqaga, ko'k faqat to'g'riga",
        "Qizil chapga va orqaga, ko'k to'g'riga, chapga va orqaga",
        "Qizil chapga va orqaga, ko'k to'g'riga va chapga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1163.jpg"
};

// 1164-savol
QUESTIONS[116].questions[3] = {
    question: "Ushbu avtomobilga ko'rsatilgan yo'nalishlardan qaysi biriga harakatlanish mumkin?",
    answers: [
        "Faqat qayrilib olishga",
        "Faqat chapga",
        "Ikkala yo'nalishga ham harakatlanish taqiqlanadi",
        "Ikkala yo'nalishga ham harakatlanishga ruxsat etiladi"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/1164.jpg"
};

// 1165-savol
QUESTIONS[116].questions[4] = {
    question: "Avtomobilga qaysi yo'nalish bo'yicha harakatlanish mumkin?",
    answers: [
        "1-yo'nalishda",
        "2-yo'nalishda",
        "Har ikki yo'nalishda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1165.jpg"
};

// 1166-savol
QUESTIONS[116].questions[5] = {
    question: "Qaysi avtomobil haydovchisi qoidani buzmasdan harakatlanmoqda?",
    answers: [
        "Ko'k avtomobil haydovchisi",
        "Qizil avtomobil haydovchisi",
        "Ikkala avtomobil haydovchilari",
        "Har ikkala avtomobil haydovchilari qoidani buzmoqda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1166.jpg"
};

// 1167-savol (Rasmi yo'q savol)
QUESTIONS[116].questions[6] = {
    question: "Yo'lning qatnov qismida individual harakatlanish vositalarini boshqarish necha yoshdan kichik bo'lmagan shaxslarga ruxsat etiladi?",
    answers: [
        "12 yosh",
        "14 yosh",
        "16 yosh",
        "18 yosh"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1168-savol
QUESTIONS[116].questions[7] = {
    question: "Qaysi rasmda haydovchi belgi talabini buzmay to'xtadi?",
    answers: [
        "Faqat 1-rasmda",
        "Faqat 2-rasmda",
        "Ikkala rasmda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1168.jpg"
};

// 1169-savol
QUESTIONS[116].questions[8] = {
    question: "Yuk avtomobiliga qaysi yo'nalishlar bo'yicha harakatlanishga ruxsat etiladi?",
    answers: [
        "Faqat chapga",
        "Chapga va qayrilib olishga",
        "To'g'riga va chapga"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1169.jpg"
};

// 1170-savol
QUESTIONS[116].questions[9] = {
    question: "Qaysi rasmda sariq avtomobil haydovchisi qizil avtomobil haydovchisiga yo'l berishi kerak?",
    answers: [
        "Birinchi rasmda",
        "Ikkinchi rasmda",
        "Ikkala rasmda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1170.jpg"
};

// 118-bilet (1171-1180 savollar)
QUESTIONS[117] = { questions: [] };

// 1171-savol
QUESTIONS[117].questions[0] = {
    question: "Qizil avtomobil qaysi yo'nalishlarda qayrilib olishga ruxsat beriladi?",
    answers: [
        "Birinchi yo'nalishda",
        "Ikkinchi yo'nalishda",
        "Ikkala yo'nalishlarda ham qayrilib olish taqiqlangan"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1171.jpg"
};

// 1172-savol (Rasmi yo'q savol)
QUESTIONS[117].questions[1] = {
    question: "Miltillovchi qizil ishora?",
    answers: [
        "Harakatni taqiqlaydi",
        "Keskin tormoz bermasdan to'xtashga ulgura olmaydigan haydovchilarga harakatlanishni davom ettirishga ruxsat etiladi",
        "Harakatlanishga ruxsat beradi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1173-savol
QUESTIONS[117].questions[2] = {
    question: "Yondosh hududlardan yo'lga chiqish joylarida yoki yo'lning dala, o'rmon yo'llari va boshqa doimiy harakatlanish, o'tib ketish uchun mo'ljallanmagan yo'llar bilan kesishgan (tutashgan) joylarida, ularning oldida tegishli belgilar o'rnatilmagan bo'lsa, bu belgilarning ta'siri yo'qoladimi?",
    answers: [
        "Yo'qoladi",
        "Yo'qolmaydi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1173.jpg"
};

// 1174-savol
QUESTIONS[117].questions[3] = {
    question: "Ko'k avtomobil haydovchisi qaysi yo'nalishlarda harakatlanishga ruxsat etilmaydi?",
    answers: [
        "Faqat 1",
        "Faqat 2",
        "Faqat 1, 3, 4 yo'nalishlarda",
        "Barcha yo'nalishlarda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1174.jpg"
};

// 1175-savol
QUESTIONS[117].questions[4] = {
    question: "Ushbu yo'l belgisi qanday nomlanadi?",
    answers: [
        "Shanba, yakshanba va bayram kunlari",
        "Hafta kunlari",
        "Ish kunlari"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1175.jpg"
};

// 1176-savol (Rasmi yo'q savol)
QUESTIONS[117].questions[5] = {
    question: "Velosipedchilarga velosiped yo'lkasi bo'lganda qatnov qismidan harakatlanishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Boshqa harakat qatnashchilariga xalaqit bermasa ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1177-savol
QUESTIONS[117].questions[6] = {
    question: "Qaysi belgida qayrilib olishga ruxsat etiladi?",
    answers: [
        "«A»",
        "«B»",
        "«C»",
        "«A», «B», «C»"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/1177.jpg"
};

// 1178-savol
QUESTIONS[117].questions[7] = {
    question: "Qaysi transport vositasi o'ngga to'g'ri burilmoqda?",
    answers: [
        "Oq va sariq avtomobil",
        "Qizil va oq avtomobil",
        "Sariq va yashil avtomobil",
        "Oq avtomobil",
        "Barchasi"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/1178.jpg"
};

// 1179-savol
QUESTIONS[117].questions[8] = {
    question: "Qaysi transport vositasi o'ngga to'g'ri burilmoqda?",
    answers: [
        "Mototsikl",
        "Sariq va yashil avtomobil",
        "Oq avtomobil",
        "Barchasi to'g'ri burilmoqda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1179.jpg"
};

// 1180-savol
QUESTIONS[117].questions[9] = {
    question: "Qaysi avtomobil haydovchisi qoidani buzmay harakatlanmoqda?",
    answers: [
        "Chapdagi rasmda",
        "O'ngdagi rasmda",
        "Ikkala rasmda"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1180.jpg"
};

// 119-bilet (1181-1190 savollar)
QUESTIONS[118] = { questions: [] };

// 1181-savol
QUESTIONS[118].questions[0] = {
    question: "Qaysi rasmda to'rt tasmali yo'l ko'rsatilgan?",
    answers: [
        "Birinchi rasmda",
        "Birinchi va ikkinchi rasmda",
        "Ikkinchi va uchinchi rasmda",
        "Barchasida"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/1181.jpg"
};

// 1182-savol (Yangi yuklangan rasm asosida)
QUESTIONS[118].questions[1] = {
    question: "Qaysi javobda yo'l belgilari guruhlarining ketma-ketligi to'g'ri ko'rsatilgan?",
    answers: [
        "Taqiqlovchi, Imtiyoz, Buyuruvchi, Axborot-ko'rsatkich, Ogohlantiruvchi, Servis, Qo'shimcha axborot",
        "Ogohlantiruvchi, Imtiyoz, Taqiqlovchi, Buyuruvchi, Axborot-ko'rsatkich, Servis, Qo'shimcha axborot",
        "Ogohlantiruvchi, Imtiyoz, Buyuruvchi, Taqiqlovchi, Axborot-ko'rsatkich, Servis, Qo'shimcha axborot",
        "Yuqoridagi barcha javoblar to'g'ri"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1183-savol
QUESTIONS[118].questions[2] = {
    question: "Harakatlanish tartibini ko'rsating:",
    answers: [
        "1-tramvay sariq avtomobil bilan bir vaqtda, 2-tramvay qora avtomobil bilan bir vaqtda",
        "1-tramvay sariq avtomobil bilan bir vaqtda, qora avtomobil, 2-tramvay",
        "1-tramvay, 2-tramvay, sariq avtomobil, qora avtomobil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1183.jpg"
};

// 1184-savol
QUESTIONS[118].questions[3] = {
    question: "Belgilangan yo'nalishlarda harakatlanishga ruxsat etiladimi?",
    answers: [
        "Faqat o'ngga ruxsat etiladi",
        "Faqat chapga ruxsat etiladi",
        "Har ikkisiga ruxsat etiladi"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1184.jpg"
};

// 1185-savol (Rasmi yo'q savol)
QUESTIONS[118].questions[4] = {
    question: "Aholi punktlarida quvib o'tishda qanday ogohlantirish ishoralaridan foydalanish mumkin?",
    answers: [
        "Faralarning uzoqni yorituvchi chiroqlaridan",
        "Tovushli ishoralardan",
        "Har ikkisidan foydalanish mumkin"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1186-savol (Rasmi yo'q savol)
QUESTIONS[118].questions[5] = {
    question: "Aholi punktlaridan tashqarida quvib o'tishda qanday ogohlantirish ishoralaridan foydalanish mumkin?",
    answers: [
        "Faralarning uzoqni yorituvchi chiroqlaridan",
        "Tovushli ishoralardan",
        "Har ikkisidan foydalanish mumkin"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1187-savol
QUESTIONS[118].questions[6] = {
    question: "Qaysi avtomobil haydovchisi qoidani buzmay harakatlanmoqda?",
    answers: [
        "Chapdagi rasmda",
        "O'ngdagi rasmda",
        "Ikkala rasmda"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1187.jpg"
};

// 1188-savol
QUESTIONS[118].questions[7] = {
    question: "Sariq avtomobil haydovchisiga avtoturargohga kirishga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1188.jpg"
};

// 1189-savol
QUESTIONS[118].questions[8] = {
    question: "Qaysi yo'nalish bo'yicha harakatlanishga ruxsat berilgan?",
    answers: [
        "Faqat «A»",
        "Faqat «Б»",
        "Har ikki yo'nalishda mumkun",
        "Har ikki yo'nalishda taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1189.jpg"
};

// 1190-savol
QUESTIONS[118].questions[9] = {
    question: "Ushbu vaziyatda oxirgi bo'lib kim o'tadi?",
    answers: [
        "Qizil avtomobil",
        "Ko'k avtomobil",
        "O'zaro kelishib o'tadilar",
        "Sariq avtomobil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1190.jpg"
};
// 120-bilet (1191-1200 savollar)
QUESTIONS[119] = { questions: [] };

// 1191-savol
QUESTIONS[119].questions[0] = {
    question: "Ushbu belgi o'rnatiladi:",
    answers: [
        "“Bolalar uyi” yoki oromgohlari oldidan o'tgan yo'l qismlarida o'rnatiladi",
        "Maktab yoki maktabgacha ta’lim muassasalari oldida",
        "Ko'zi ojiz piyodalar harakatlanish ehtimoli ko'p bo'lgan yo'l qismlarida o'rnatiladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1191.jpg"
};

// 1192-savol
QUESTIONS[119].questions[1] = {
    question: "Ushbu belgi nimani bildiradi?",
    answers: [
        "Tik balandlik",
        "Tik nishablik"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1192.jpg"
};

// 1193-savol
QUESTIONS[119].questions[2] = {
    question: "Qaysi yo'l chizig'i haydovchini diqqatini jamlaydi?",
    answers: [
        "«A»",
        "«B»",
        "«C»",
        "«D»"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1193.jpg"
};

// 1194-savol
QUESTIONS[119].questions[3] = {
    question: "Qaysi transport vositasi yo'l berishi kerak?",
    answers: [
        "Oq avtomobil",
        "Ko'k avtomobil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1194.jpg"
};

// 1195-savol
QUESTIONS[119].questions[4] = {
    question: "Ushbu ko'rsatilgan holatda qaysi transport vositasi yo'l berishi kerak?",
    answers: [
        "Yashil avtomobil",
        "Qizil avtomobil"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1195.jpg"
};

// 1196-savol (Rasmi yo'q savol)
QUESTIONS[119].questions[5] = {
    question: "Haydovchi yo'lovchilarni ogohlantirishi kerak:",
    answers: [
        "Oynani ochmaslik haqida",
        "Suhbatlashmaslik haqida",
        "Tanani chiqarmaslik (qo'ldan tashqari) haqida",
        "Sanab o'tilgan barchasi haqida"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1197-savol
QUESTIONS[119].questions[6] = {
    question: "Ushbu ko'rsatilgan joyda to'xtashga ruxsat etiladimi?",
    answers: [
        "Taqiqlanadi",
        "Ruxsat etiladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1197.jpg"
};

// 1198-savol
QUESTIONS[119].questions[7] = {
    question: "Ushbu ko'rsatilgan joyda to'xtashga ruxsat etiladimi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1198.jpg"
};

// 1199-savol (Rasmi yo'q savol)
QUESTIONS[119].questions[8] = {
    question: "Mexanik transport vositasining egasi yonida haydochilik guvohnomasi bo'lmaganida qanday hujjat bilan boshqarishga ruxsat etiladi?",
    answers: [
        "ID karta",
        "Biometrik passport",
        "Egalik huquqi",
        "Biometrik passport yoki ID karta bilan"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// 1200-savol
QUESTIONS[119].questions[9] = {
    question: "Ko'k va qora avtomobillar haydovchilariga o'ngga burilish amalga oshirishga ruxsat etilganmi?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1200.jpg"
};

// 121-bilet (1201-1210 savollar)
QUESTIONS[120] = { questions: [] };

// 1201-savol
QUESTIONS[120].questions[0] = {
    question: "Ushbu yo'l belgisi chorahalarda o'nga burilayotgan relezsiz transport vositalariga svetoforning qaysi ishorasida harakatlanishga ruxsat etiladi ?",
    answers: [
        "Qizil ishora",
        "Sariq ishora",
        "Yashil ishora",
        "Ko'rsatilgan barchasi"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/1201.jpg"
};

// 1202-savol
QUESTIONS[120].questions[1] = {
    question: "Yo'l patrul hizmat hodimlariga yo'l harakat qatnashchilari bilan o'zaro munosabatlari va maxsuz moslamalardan foydalanishda nizom to'g'risidagi qonunda qanday tartib qo'yilgan ?",
    answers: [
        "Yo'l transport hodisasini oldini olish va harakat havfsizligini taminlash",
        "Maxsus tadbirlar o'tkazish",
        "Taqib qilish",
        "Kuzatish",
        "Ko'rsatilgan barcha javoblar"
    ],
    correct: 4, // F5 to'g'ri
    image: "images/1202.jpg"
};

// 1203-savol
QUESTIONS[120].questions[2] = {
    question: "Ko'rsatilgan yo'l belgilarining qaysi birida eng kam tezlikda harakatlanish kerak ?",
    answers: [
        "Chapdagi belgida",
        "O'ngdagi belgida",
        "Har ikkisida"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1203.jpg"
};

// 1204-savol
QUESTIONS[120].questions[3] = {
    question: "Ushbu qora transport vositasining haydovchisi yo'nalishni o'zgartirishi qanday nomlanadi ?",
    answers: [
        "Manyovr qilish",
        "Bo'laklar sonini o'zgartish",
        "Xavfli harakatlanish",
        "Avariya holatini yuzaga keltirish",
        "Barcha javoblar to'g'ri"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/1204.jpg"
};

// 1205-savol
QUESTIONS[120].questions[4] = {
    question: "Piyodalarga qatnov qismidan kesib o'tishga ruxsat etiladimi ?",
    answers: [
        "Ruxsat etiladi",
        "Taqiqlanadi",
        "Barcha holatda ruxsat etiladi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1205.jpg"
};

// 1206-savol
QUESTIONS[120].questions[5] = {
    question: "Transport vositasi haydovchisi tomonidan chiqarilgan havotadi etanol bug'lari kontsentratsiyasi qancha miqdorni ko'rsatgan hollarda DYHXX xodimi haydovchiga nisbatan alkogolli ichimlik este'mol qilganligi fakti yuzasidan ma'muriy bayonnoma rasmiylashtiradi ?",
    answers: [
        "Puflangan havoning bir litrida 0,105 milligramm va undan yuqori bo'lgan hollarda",
        "Puflangan havoning bir litrida 0,135 milligramm va undan yuqori bo'lgan hollarda",
        "Puflangan havoning bir litrida 0,255 milligramm va undan yuqori bo'lgan hollarda"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1206.jpg"
};

// 1207-savol
QUESTIONS[120].questions[6] = {
    question: "Avtomobilda bolalarni himoya qilish tizimini joylashtirish uchun qaysi joy eng xavfsiz hisoblanadi ?",
    answers: [
        "Orqa o'rta o'rindiq",
        "Oldi o'rindiq",
        "Haydovchi orqasidagi o'rindiq"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1207.jpg"
};

// 1208-savol
QUESTIONS[120].questions[7] = {
    question: "Ushbu belgi qaysi moddalarga kiradi ?",
    answers: [
        "Toksik moddalar",
        "Organik peroksidlar",
        "Oksidlovchi moddalar"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1208.jpg"
};

// 1209-savol
QUESTIONS[120].questions[8] = {
    question: "Ushbu holatda siz qanday yo'l tutishingiz kerak?",
    answers: [
        "Ovozli ishora berib, tezlikni oshiring",
        "Zarur bo'lganda tezlikni kamaytiroladigan darajada kamaytiring",
        "Chapga burilib, to'siqni aylanib o'ting",
        "To'xtovsiz harakatni davom ettiring"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1209.jpg"
};

// 1210-savol
QUESTIONS[120].questions[9] = {
    question: "Ushbu belgi o'rnatilgan hududda qaysi toifalarga ega avtotransport vositalari harakatlanishi mumkun?",
    answers: [
        "Toza",
        "O'rta",
        "Zararli"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1210.jpg"
};

// 122-bilet (1211-1220 savollar)
QUESTIONS[121] = { questions: [] };

// 1211-savol
QUESTIONS[121].questions[0] = {
    question: "Balandlikda (nishablikda) trotuar yoq yo'lda to'xtagan avtomobilni o'z-o'zidan harakatlanib ketishini oldini olish maqsadida oldingi g'ildiraklarni qanday burab qo'yish kerak?",
    answers: [
        "«A» va «D»",
        "«B» va «C»",
        "«A» va «C»",
        "«B» va «D»"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1211.jpg"
};

// 1212-savol
QUESTIONS[121].questions[1] = {
    question: "Qaysi haydovchi birinchi bo'lib harakatni davom ettiradi?",
    answers: [
        "Ko'k avtomobil haydovchisi",
        "Qizil avtomobil haydovchisi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1212.jpg"
};

// 1213-savol
QUESTIONS[121].questions[2] = {
    question: "Avtomobillar harakatlanayotgan qatnov qismida nechta harakatlanish tasmasi bor?",
    answers: [
        "1 ta",
        "2 ta",
        "3 ta"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1213.jpg"
};

// 1214-savol
QUESTIONS[121].questions[3] = {
    question: "Qaysi yo'nalishlarda sizga harakatni davom ettirishga ruxsat etiladi?",
    answers: [
        "Faqat chapga",
        "To'g'riga va chapga",
        "Chapga va orqaga qayrilib olishga"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1214.jpg"
};

// 1215-savol
QUESTIONS[121].questions[4] = {
    question: "Qaysi haydovchi burilishni to'g'ri bajardi?",
    answers: [
        "Har ikkisi noto'g'ri",
        "Qizil",
        "Har ikkisi to'g'ri",
        "Sariq"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1215.jpg"
};

// 1216-savol
QUESTIONS[121].questions[5] = {
    question: "Qaysi rasmda quvib o'tishda to'g'ri holati ko'rsatilgan?",
    answers: [
        "1 va 2",
        "1 va 4",
        "3 va 4",
        "2 va 3"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/1216.jpg"
};

// 1217-savol
QUESTIONS[121].questions[6] = {
    question: "Qaysi yo'nalish bo'yicha harakatlanishga ruxsat berilgan?",
    answers: [
        "Ko'k to'g'riga, chapga va qayrilib olishga; Qizil to'g'riga",
        "Ko'k to'g'riga va qayrilib olishga; Qizil to'g'riga",
        "Ko'k chapga va to'g'riga; Qizil o'ngga"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1217.jpg"
};

// 1218-savol
QUESTIONS[121].questions[7] = {
    question: "Ko'k avtomobil qaysi yo'nalishlar bo'yicha harakatlanishga ruxsat etiladi?",
    answers: [
        "To'g'riga va chapga",
        "To'g'riga va qayrilib olishga",
        "Faqat to'g'riga",
        "Barcha yo'nalishlarga"
    ],
    correct: 2, // F3 to'g'ri
    image: "images/1218.jpg"
};

// 1219-savol
QUESTIONS[121].questions[8] = {
    question: "Qizil avtomobilga qaysi yo'nalishlar bo'yicha harakatlanishga ruxsat etiladi?",
    answers: [
        "To'g'riga va chapga",
        "To'g'riga va qayrilib olishga",
        "Faqat to'g'riga",
        "Faqat chapga"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/1219.jpg"
};

// 1220-savol
QUESTIONS[121].questions[9] = {
    question: "Ushbu belgilardan qaysi biri sun'iy yo'l notekisligi deb ataladi?",
    answers: [
        "Birinchi belgi",
        "Ikkinchi belgi",
        "Har ikkala belgi"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/1220.jpg"
};

// 123-bilet (1221-1230 savollar)
QUESTIONS[122] = { questions: [] };

// 1221-savol
QUESTIONS[122].questions[0] = {
    question: "Qaysi rasmdagi haydovchilarga qayrilib olish taqiqlangan?",
    answers: [
        "Faqat pastdagi rasmda",
        "Faqat o'ngdagi rasmda",
        "Faqat chapdagi rasmda",
        "Faqat chapdagi va o'ngdagi rasmlarda",
        "Barcha rasmlarda"
    ],
    correct: 3, // F4 to'g'ri
    image: "images/1221.jpg"
};

// 1222-savol
QUESTIONS[122].questions[1] = {
    question: "Bunday holatda qaysi haydovchi yo'l berishi kerak?",
    answers: [
        "Tramvay haydovchisi",
        "Avtomobil haydovchisi"
    ],
    correct: 1, // F2 to'g'ri
    image: "images/1222.jpg"
};

// 1223-savol (Rasmi yo'q savol)
QUESTIONS[122].questions[2] = {
    question: "L-toifasi bu?",
    answers: [
        "Mototransport vositalari",
        "Yo'lovchi tashuvchi transport vositalari",
        "Yuk avtomobillari"
    ],
    correct: 0, // F1 to'g'ri
    image: "images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg"
};

// Imtihon formati:
// 1-61 biletlar = har biri 20 ta savol (har 2 ta eski bilet birlashtiriladi)
// 62-bilet = 3 ta savol (yakuniy qisqa bilet)
(function convertToExamTicketFormat() {
    const sourceTickets = QUESTIONS.slice();
    const examTickets = [];

    for (let i = 0; i < 61; i++) {
        const firstHalf = sourceTickets[i * 2];
        const secondHalf = sourceTickets[i * 2 + 1];
        const questions = []
            .concat(Array.isArray(firstHalf?.questions) ? firstHalf.questions.filter(Boolean) : [])
            .concat(Array.isArray(secondHalf?.questions) ? secondHalf.questions.filter(Boolean) : []);

        examTickets.push({
            ticketNumber: i + 1,
            questions
        });
    }

    const finalSourceTicket = sourceTickets[122];
    examTickets.push({
        ticketNumber: 62,
        questions: Array.isArray(finalSourceTicket?.questions)
            ? finalSourceTicket.questions.filter(Boolean)
            : []
    });

    QUESTIONS.length = 0;
    QUESTIONS.push(...examTickets);
})();
