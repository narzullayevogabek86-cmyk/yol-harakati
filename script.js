// Navigation functionality
const THEME_STORAGE_KEY = 'themePreference';
const APP_SETTINGS_STORAGE_KEY = 'appSettings';
const APP_INTRO_STORAGE_KEY = 'appIntroSeenVersion';
const WRONG_ANSWERS_STORAGE_KEY = 'wrongAnswers';
const BOOKMARKS_STORAGE_KEY = 'bookmarks';
const TICKET_PROGRESS_STORAGE_KEY = 'ticketProgress';
const APP_INTRO_VERSION = 10;
const MOBILE_BREAKPOINT = 760;
const MOBILE_CAROUSEL_INTERVAL_MS = 4500;
const DEVTOOLS_SIZE_THRESHOLD = 170;
const DEVTOOLS_CHECK_INTERVAL_MS = 900;
const SEARCH_INPUT_DEBOUNCE_MS = 140;
const SEARCH_RESULTS_LIMIT = 120;
const REGULAR_TICKET_DURATION_SECONDS = 25 * 60;
const FINAL_TICKET_DURATION_SECONDS = 60;
const REGULAR_TICKET_PASS_CORRECT = 18;
const FINAL_TICKET_PASS_CORRECT = 3;
const FIFTY_EXAM_DURATION_SECONDS = 59 * 60 + 59; // 59:59
const FIFTY_EXAM_REGULAR_TICKETS = 24;
const FIFTY_EXAM_REGULAR_QUESTIONS = 50;
const FIFTY_EXAM_LAST_TICKET_QUESTIONS = 23;
const QUIZ_MODE_STANDARD = 'standard';
const QUIZ_MODE_FIFTY = 'fifty';
const QUIZ_IMAGE_PRELOAD_DEBUG = false;
const IMAGE_PRELOAD_CONCURRENCY = 4;
const QUIZ_NEIGHBOR_TICKET_PREFETCH_COUNT = 1;
const QUIZ_SWIPE_MIN_DISTANCE = 56;
const QUIZ_SWIPE_MAX_VERTICAL_DRIFT = 42;
const BACK_BUTTON_DEDUP_WINDOW_MS = 250;
const QUESTIONS_FETCH_CACHE_MODE = 'default';
const QUESTIONS_API_URL = '/api/questions';
const QUIZ_VALIDATE_API_URL = '/api/quiz/validate';
const QUIZ_SUBMIT_API_URL = '/api/quiz/submit';
const LEGACY_QUESTIONS_JSON_URL = 'questions.json';
const DEFAULT_QUESTIONS_JSON_URL = 'questions.uz.json';
const NATIVE_QUIZ_PLUGIN_NAME = 'YhqQuiz';
const NATIVE_PERMISSIONS_BRIDGE_NAME = 'YHQPermissionsBridge';
const NATIVE_PERMISSIONS_EVENT_NAME = 'yhq:permissions-changed';
const NATIVE_PLUGIN_READY_RETRY_MS = 160;
const NATIVE_PLUGIN_READY_MAX_ATTEMPTS = 12;
const SIGNS_STATIC_DATA_URL = '/signs-static.json';
const ORIGINAL_MARKER_TOKEN_PATTERN = /«[^»]{1,24}»|(?<![\p{L}\p{N}_])[A-ZА-ЯЁЎҚҒҲ]{1,6}\d*(?![\p{L}\p{N}_])/u;
const ORIGINAL_MARKER_TOKEN_REGEX = /«[^»]{1,24}»|(?<![\p{L}\p{N}_])[A-ZА-ЯЁЎҚҒҲ]{1,6}\d*(?![\p{L}\p{N}_])/gu;
const QUESTIONS_JSON_BY_LANG = {
    uz: 'questions.uz.json',
    uz_cyrl: 'questions.uz.json',
    kaa: 'questions.qq.json',
    ru: 'questions.ru.json',
    tg: 'questions.tg.json'
};
const THEME_COLOR_LIGHT = '#eef4f8';
const THEME_COLOR_DARK = '#05080d';
const UI_LANGUAGES = ['uz', 'uz_cyrl', 'kaa', 'ru', 'tg'];
const FINES_DATA_LANGUAGE_MAP = {
    uz: 'uz',
    uz_cyrl: 'uz_cyrl',
    kaa: 'qq',
    ru: 'ru',
    tg: 'tj'
};
const UI_LANGUAGE_LABELS = {
    uz: "O'zbekcha",
    uz_cyrl: 'Ўзбекча',
    kaa: 'Qoraqalpoqcha',
    ru: 'Русский',
    tg: 'Тоҷикӣ'
};
const UI_TEXT = {
    uz: {
        app_title: "Yo'l harakati qoidalari - Test dasturi",
        app_description: "Yo'l harakati qoidalari bo'yicha bilimingizni sinab ko'ring. 62 ta bilet: 61 ta bilet 20 tadan savol, 62-bilet 3 ta savol.",
        app_logo: 'YHQ Test',
        nav_main: 'Asosiy',
        nav_signs: 'Belgilar',
        nav_search: 'Qidiruv',
        nav_fines: 'Jarima va ballar',
        nav_settings: 'Sozlamalar',
        page_main: 'Asosiy',
        page_signs: 'Belgilar',
        page_search: 'Qidiruv',
        page_fines: 'Jarima va ballar',
        page_settings: 'Sozlamalar',
        page_main_subtitle: 'Haydovchilik imtihoniga tayyorgarlik',
        page_signs_subtitle: "Yo'l belgilari bo'yicha ma'lumotlar",
        page_search_subtitle: 'Bilet va savollar ichidan tez qidiring',
        page_fines_subtitle: 'Jarima miqdori va jarima ballari',
        page_settings_subtitle: "Ilovani o'zingizga moslang",
        common_back: 'Orqaga',
        common_share: 'Ulashish',
        common_reload: 'Qayta yuklash',
        common_home_page: 'Asosiy sahifa',
        common_clear: 'Tozalash',
        common_search: 'Qidirish',
        common_finish: 'Yakunlash',
        common_retry: 'Qayta urinish',
        common_bookmarks: 'Tanlanganlar',
        common_ticket: 'Bilet',
        common_question: 'Savol',
        common_results: 'Natijalar',
        common_answer_variants: 'Variantlar',
        common_image_exists: 'Rasm mavjud',
        common_question_image: 'Savol rasmi',
        common_coming_soon: 'Tez orada...',
        common_open: 'Ochish',
        common_remove: "O'chirish",
        theme_light: 'Yorug‘',
        theme_dark: 'Qorong‘i',
        theme_panel_title: 'Tema',
        theme_panel_desc: "Ilova ko'rinishini tanlang",
        theme_select_group: 'Tema tanlash',
        theme_switch_to: '{theme} rejimga o‘tish',
        home_new20: 'Imtihon Yangi 20',
        home_fifty: 'Imtihon biletlari 50',
        home_all: 'Imtihon biletlari',
        home_random: 'Tasodifiy test',
        home_wrong: 'Xato belgilagan savollarim',
        home_wrong_mobile: 'Xato qilgan savollarim',
        home_bookmarks: 'Tanlanganlar',
        home_new20_desc: 'Yangi savollarni sinab',
        home_fifty_desc: '50 ta imtihon',
        home_all_desc: 'Barcha biletlar',
        home_random_desc: 'Tasodifiy biletni boshlash',
        home_wrong_desc: 'Qayta ishlanishi kerak',
        home_bookmarks_desc: 'Sevimli savollar',
        home_stats_title: 'Statistika',
        home_stats_desc: 'Tayyorgarlik darajasi: {percent}%',
        profile_id_label: 'ID',
        carousel_prev: 'Oldingi rasm',
        carousel_next: 'Keyingi rasm',
        carousel_dot_aria: '{index}-rasm',
        tickets_new20_title: 'Yangi 20 ta bilet',
        tickets_fifty_title: 'Imtihon biletlari 50',
        tickets_all_title: 'Barcha biletlar',
        progress_not_started: 'Boshlanmagan',
        progress_completed: "{correct}/{total} to'g'ri",
        progress_in_progress: '{current}/{total} savol',
        signs_title: "Yo'l belgilari",
        signs_loading: 'Belgilar yuklanmoqda...',
        signs_empty: 'Bu kategoriyada belgilar topilmadi.',
        signs_load_error: "Faylni o'qib bo'lmadi.",
        signs_open_source: 'Asl HTML',
        signs_category_warning: 'Ogohlantiruvchi belgilar',
        signs_category_priority: 'Imtiyozli belgilar',
        signs_category_prohibitory: 'Taqiqlovchi belgilar',
        signs_category_mandatory: 'Buyuruvchi belgilar',
        signs_category_information: "Axborot-ko'rsatgich belgilari",
        signs_category_service: 'Servis belgilari',
        signs_category_extra: "Qo'shimcha axborot belgilari",
        signs_category_temporary: "Vaqtinchalik yo'l belgilari",
        signs_category_lights: "Svetaforlar va tartibga soluvchining ishoralari",
        signs_category_identification: 'Transport vositalarining tiniqlik belgilari',
        signs_category_hazard: 'Xavflilik belgilari',
        search_label_text: "Matn bo'yicha qidiruv",
        search_label_ticket: 'Bilet raqami',
        search_placeholder_text: 'Savol matni yoki javob varianti...',
        search_placeholder_ticket: 'Masalan: 12',
        search_status_default: 'Savol matni yoki bilet raqami kiriting.',
        search_results_title: 'Natijalar',
        search_results_placeholder: 'Qidiruv uchun matn yoki bilet raqamini kiriting.',
        search_empty_default: 'Hech narsa topilmadi.',
        search_invalid_ticket_empty: "Bilet raqami noto'g'ri. Ijobiy son kiriting.",
        search_invalid_ticket_status: 'Bilet raqami uchun faqat musbat son kiriting.',
        search_short_query_status: "Matn qidiruvi uchun kamida 2 ta harf kiriting.",
        search_no_results_status: "Hech narsa topilmadi. Boshqa matn yoki bilet raqamini sinab ko'ring.",
        search_status_ticket: 'Bilet: {ticket}',
        search_status_text: 'Matn: "{text}"',
        search_status_results: '{count} ta natija',
        search_status_limited: "faqat birinchi {limit} tasi ko'rsatildi",
        search_result_open_aria: 'Bilet {ticket}, savol {question} ni ochish',
        fines_title: 'Jarima va ballar',
        fines_no_data: "Ma'lumotlar topilmadi",
        fines_table_aria: 'Jarima va ballar jadvali',
        fines_col_violation: 'Qoidabuzarlik (band va izoh)',
        fines_col_fine: 'Jarima',
        fines_col_bhm: 'BHM',
        fines_col_ball: 'Ball',
        fines_meta_fine: 'Jarima',
        fines_meta_bhm: 'BHM',
        fines_meta_ball: 'Ball',
        fines_summary_articles: '{count} ta modda',
        fines_summary_bands: '{count} ta band',
        fines_summary_note: "Eslatma: qonunchilikdagi o'zgarishlar bo'yicha rasmiy manbalarni tekshirib boring.",
        settings_mobile_layout_aria: 'Mobil sozlamalar',
        settings_section_app: 'Ilova sozlamalari',
        settings_section_exam: 'Imtihon sozlamalari',
        settings_section_support: "Bog'lanish va qo'llab-quvvatlash",
        settings_intro: 'Ilova bilan tanishish',
        settings_language: 'Til',
        settings_language_aria: 'Til: {value}',
        settings_dark_mode: 'Tungi rejim',
        settings_notifications: 'Bildirishnomalar',
        settings_instant_feedback: "Javoblarni ko'rsatish",
        settings_instant_feedback_hint: "Test paytida xatoni darrov ko'rsatish",
        settings_font_size: "Shrift o'lchami",
        settings_font_size_aria: "Shrift o'lchami: {value}",
        settings_rate_app: 'Ilovani baholash',
        settings_contact_telegram: "Telegram orqali bog'lanish",
        settings_terms: 'Maxfiylik siyosati',
        policy_title: 'MAXFIYLIK SIYOSATI',
        policy_close: 'Yopish',
        policy_text_1: "Ushbu ilova foydalanuvchi maxfiyligini hurmat qiladi. Ilovadan foydalanishda shaxsiy ma’lumotlar majburiy tarzda so‘ralmaydi.",
        policy_text_2: "Sozlamalar, test natijalari va ayrim mahalliy ma’lumotlar faqat ilova funksiyalarini ta’minlash uchun qurilmada saqlanishi mumkin.",
        policy_text_3: "Foydalanuvchiga oid ma’lumotlar uchinchi shaxslarga berilmaydi. Zarurat bo‘lsa, faqat ilovaning ishlashini yaxshilashga xizmat qiluvchi texnik ma’lumotlardan foydalanilishi mumkin.",
        policy_text_4: "Mazkur siyosat kelgusida yangilanishi mumkin.",
        settings_version: 'Ilova versiyasi',
        settings_version_aria: 'Ilova versiyasi: V1.0.1',
        intro_step_label: '{current}/{total}',
        intro_close: 'Yopish',
        intro_prev: 'Orqaga',
        intro_next: 'Keyingisi',
        intro_skip: "O'tkazib yuborish",
        intro_start: 'Boshlash',
        intro_1_title: "Yo'l harakati qoidalarini o'rganing",
        intro_1_text: "1223 ta rasmli va nazariy savollar orqali yo'l harakati qoidalarini qulay o'rganing.",
        intro_1_card_1_title: 'Imtihon biletlari',
        intro_1_card_1_text: "Yangi 20, 50 talik yoki barcha biletlar bo'yicha testni darhol boshlaysiz.",
        intro_1_card_2_title: 'Progress saqlanadi',
        intro_1_card_2_text: "Qaysi biletni yechganingiz va nechta savolni to'g'ri bajarganingiz ilovada saqlanib boradi.",
        intro_2_title: 'Mutlaqo bepul',
        intro_2_text: "Imtihon namunasidagi testlardan offline foydalanish imkoniyati.",
        intro_2_card_1_title: "Yo'l belgilari",
        intro_2_card_1_text: "Belgilar sahifasida toifalar bo'yicha ma'no va ko'rinishlarni ko'rasiz.",
        intro_2_card_2_title: 'Tez qidiruv',
        intro_2_card_2_text: "Savol matni yoki bilet raqami bilan kerakli savolni bir necha soniyada topasiz.",
        intro_3_title: "To'rtta tilda ilovadan foydalaning",
        intro_3_text: "Ilovadan o'zbek, rus, tojik va qoraqalpoq tillarida foydalaning.",
        intro_3_card_1_title: 'Xato savollar',
        intro_3_card_1_text: "Noto'g'ri javoblar alohida yig'iladi, keyin ularni qayta ishlash oson bo'ladi.",
        intro_3_card_2_title: 'Moslashuvchan sozlamalar',
        intro_3_card_2_text: "Til, tema va shrift o'lchamini sozlamalarda xohlagan payt almashtirasiz.",
        font_small: 'Kichik',
        font_medium: "O'rta",
        font_large: 'Katta',
        quiz_bookmark_soon: "Bookmark funksiyasi tez orada qo'shiladi",
        quiz_bookmark_add: 'Tanlanganlarga saqlash',
        quiz_bookmark_remove: 'Tanlanganlardan olib tashlash',
        quiz_question_short: 'Savol',
        quiz_explanation: 'Izoh:',
        quiz_need_questions: "Bu biletda savollar topilmadi!",
        quiz_ticket_not_found: 'Bilet topilmadi!',
        quiz_result_congrats: '🎉 Tabriklaymiz!',
        quiz_result_sad: '😔 Afsuski...',
        quiz_result_passed: "Siz testdan muvaffaqiyatli o'tdingiz!",
        quiz_result_need_correct: "Testdan o'tish uchun kamida {count} ta to'g'ri javob kerak.",
        wrong_answers_title: 'Xato belgilangan savollar ({count})',
        wrong_answers_none_title: 'Xato javoblar',
        wrong_answers_none_text: "Sizda hali noto'g'ri javoblar yo'q",
        wrong_answers_clear: 'Tozalash',
        wrong_answers_card_title: 'Bilet {ticket}, Savol {question}',
        bookmarks_title: 'Tanlanganlar',
        bookmarks_empty_text: "Siz hali savollarni tanlamagansiz",
        bookmarks_coming_soon: "Bu funksiya tez orada qo'shiladi",
        questions_load_error_title: 'Savollar yuklanmadi',
        questions_load_error_text: "questions.json faylini yuklab bo'lmadi. Sahifani yangilang.",
        questions_not_ready: 'Savollar hali yuklanmadi. Iltimos, biroz kuting.',
        share_text: "Yo'l harakati qoidalari test dasturi",
        share_link_copied: 'Havola nusxalandi',
        devtools_console_warning: "Ushbu bo'limni OCHISH,\nKO'CHIRISH yoki\nO'ZGARTIRISH\ntaqiqlanadi. Platforma\nqoidalariga rioya\nqiling!",
        devtools_lock_title: 'Diqqat',
        devtools_lock_text: "Ushbu bo'limni ochish yoki o'zgartirish taqiqlanadi.",
        devtools_lock_reload: 'Davom etish uchun sahifani qayta yuklang.'
    },
    kaa: {
        app_title: "Jol háreketi qaǵıydaları - Test dástúri",
        app_description: "Jol háreketi qaǵıydaları boyınsha biliwińizdi sınań. 62 bilet: 61 bilette 20 sawaldan, 62-bilette 3 sawal.",
        app_logo: 'YHQ Test',
        nav_main: 'Bas bet',
        nav_signs: 'Belgiler',
        nav_search: 'Izlew',
        nav_fines: 'Jarima hám ballar',
        nav_settings: 'Sazlamalar',
        page_main: 'Bas bet',
        page_signs: 'Belgiler',
        page_search: 'Izlew',
        page_fines: 'Jarima hám ballar',
        page_settings: 'Sazlamalar',
        page_main_subtitle: 'Haydawshılıq imtixanına tayarlıq',
        page_signs_subtitle: 'Jol belgileri boyınsha maǵlıwmatlar',
        page_search_subtitle: 'Bilet hám sawallar arasında tez izlew',
        page_fines_subtitle: 'Jarima muǵdarı hám jarima balları',
        page_settings_subtitle: "Ilovanı ózińizge sáykeslep aliń",
        common_back: 'Artqa',
        common_share: 'Bólistiriw',
        common_reload: 'Qayta júklew',
        common_home_page: 'Bas bet',
        common_clear: 'Tazalaw',
        common_search: 'Izlew',
        common_finish: 'Ayaqlaw',
        common_retry: 'Qayta urınıw',
        common_bookmarks: 'Tanlawlılar',
        common_ticket: 'Bilet',
        common_question: 'Sawal',
        common_results: 'Nátiyjeler',
        common_answer_variants: 'Variantlar',
        common_image_exists: 'Súwret bar',
        common_question_image: 'Sawal súwreti',
        common_coming_soon: 'Jaqında...',
        common_open: 'Ashıw',
        common_remove: "Alıp taslaw",
        theme_light: 'Jarıq',
        theme_dark: 'Qaranǵı',
        theme_panel_title: 'Tema',
        theme_panel_desc: "Ilova kórinisini tańlań",
        theme_select_group: 'Tema tańlaw',
        theme_switch_to: '{theme} rejimine ótíw',
        home_new20: 'Imtixan Jańa 20',
        home_fifty: 'Imtixan biletleri 50',
        home_all: 'Imtixan biletleri',
        home_random: 'Tasodıy test',
        home_wrong: 'Qáte belgilegen sawallarım',
        home_wrong_mobile: 'Qáte qılǵan sawallarım',
        home_bookmarks: 'Tanlawlılar',
        home_new20_desc: 'Jańa sawallardı sınap kóriń',
        home_fifty_desc: '50 ta imtixan',
        home_all_desc: 'Bárlıq biletler',
        home_random_desc: 'Tasodıy biletdi baslaw',
        home_wrong_desc: 'Qayta islew kerek',
        home_bookmarks_desc: 'Súyikli sawallar',
        home_stats_title: 'Statistika',
        home_stats_desc: 'Tayarlıq dárejesi: {percent}%',
        profile_id_label: 'ID',
        carousel_prev: 'Aldıńǵı súwret',
        carousel_next: 'Kiyingi súwret',
        carousel_dot_aria: '{index}-súwret',
        tickets_new20_title: 'Jańa 20 bilet',
        tickets_fifty_title: 'Imtixan biletleri 50',
        tickets_all_title: 'Bárlıq biletler',
        progress_not_started: 'Baslanbaǵan',
        progress_completed: "{correct}/{total} durıs",
        progress_in_progress: '{current}/{total} sawal',
        signs_title: 'Jol belgileri',
        signs_loading: 'Belgiler júklenip atır...',
        signs_empty: 'Bul kategoriyada belgiler tabılmadı.',
        signs_load_error: "Fayldı oqıp bolmadı.",
        signs_open_source: 'Asıl HTML',
        signs_category_warning: 'Eskertiwshi belgiler',
        signs_category_priority: 'Imtiyazlı belgiler',
        signs_category_prohibitory: 'Tıyıwshı belgiler',
        signs_category_mandatory: 'Buyırıwshı belgiler',
        signs_category_information: "Xabar-kórsetkish belgiler",
        signs_category_service: 'Servis belgileri',
        signs_category_extra: "Qosımsha xabar belgileri",
        signs_category_temporary: "Waqtınshalıq jol belgileri",
        signs_category_lights: "Svetaforlar hám tártipke salıwshınıń ishoraları",
        signs_category_identification: 'Transport quralınıń taniqlıq belgileri',
        signs_category_hazard: 'Qáwiplilik belgileri',
        search_label_text: 'Mátin boyınsha izlew',
        search_label_ticket: 'Bilet nomeri',
        search_placeholder_text: 'Sawal mátini yamasa juwap variantı...',
        search_placeholder_ticket: 'Mısalı: 12',
        search_status_default: 'Sawal mátinin yamasa bilet nomerin kiritiń.',
        search_results_title: 'Nátiyjeler',
        search_results_placeholder: 'Izlew ushın mátin yamasa bilet nomerin kiritiń.',
        search_empty_default: 'Hesh nárse tabılmadı.',
        search_invalid_ticket_empty: 'Bilet nomeri qáte. Oń san kiritiń.',
        search_invalid_ticket_status: 'Bilet nomeri ushın tek oń san kiritiń.',
        search_short_query_status: 'Mátin izlew ushın keminde 2 hárip kiritiń.',
        search_no_results_status: 'Hesh nárse tabılmadı. Basqa mátin yamasa bilet nomerin sınap kóriń.',
        search_status_ticket: 'Bilet: {ticket}',
        search_status_text: 'Mátin: "{text}"',
        search_status_results: '{count} nátiyje',
        search_status_limited: 'tek birinshi {limit} kórsetildi',
        search_result_open_aria: 'Bilet {ticket}, sawal {question} ashıw',
        fines_title: 'Jarima hám ballar',
        fines_no_data: "Ma'lıwmat tabılmadı",
        fines_table_aria: 'Jarima hám ballar kestesi',
        fines_col_violation: 'Qaǵıydabuzarlıqlar (band hám izah)',
        fines_col_fine: 'Jarima',
        fines_col_bhm: 'BHM',
        fines_col_ball: 'Ball',
        fines_meta_fine: 'Jarima',
        fines_meta_bhm: 'BHM',
        fines_meta_ball: 'Ball',
        fines_summary_articles: '{count} modda',
        fines_summary_bands: '{count} band',
        fines_summary_note: "Eskertiw: nızamshılıqtaǵı ózgerisler boyınsha rásmiy dereklerdi tekserip barıń.",
        settings_mobile_layout_aria: 'Mobil sazlamalar',
        settings_section_app: 'Ilova sazlamaları',
        settings_section_exam: 'Imtixan sazlamaları',
        settings_section_support: "Baylanıs hám qollap-quwatlaw",
        settings_language: 'Til',
        settings_language_aria: 'Til: {value}',
        settings_dark_mode: 'Túngi rejim',
        settings_notifications: 'Xabarnamalar',
        settings_instant_feedback: "Juwaplardı kórsetiw",
        settings_instant_feedback_hint: "Test waqıtında qátelikti darrow kórsetiw",
        settings_font_size: "Shrift ólshemi",
        settings_font_size_aria: "Shrift ólshemi: {value}",
        settings_rate_app: 'Ilovanı bahalaw',
        settings_contact_telegram: "Telegram arqalı baylanısw",
        settings_terms: 'Paydalanıw shártleri',
        policy_title: 'MAXFIYLIK SIYOSATI',
        policy_close: 'Jabıw',
        policy_text_1: "Bul web-ilova paydalanıwshılardıń jeke maǵlıwmatların qorǵawǵa kóńil bóledi. Ilovadan paydalanıwda paydalanıwshılardan arnawlı jeke maǵlıwmatlar talap etilmedi.",
        policy_text_2: "Sayt tek jol háreketi qaǵıydaların úyreniw hám test tapsırıw ushın jaratılǵan. Paydalanıwshılardıń jeke maǵlıwmatları úshinshi jaqlarǵa berilmeydi.",
        policy_text_3: "Eger sayt arqalı qanday da bir texnikalıq maǵlıwmatlar (mısalı, brauzer túri yamasa qurılma maǵlıwmatı) jıynalsa, olar tek sayt jumısın jaqsılaw maqsetinde paydalanıladı.",
        policy_text_4: "Bul loyiha frontend baǵdarlawdı úyreniw barısında jaratılǵan demo web-ilova bolıp esaplanadı.",
        settings_version: 'Ilova versiyası',
        settings_version_aria: 'Ilova versiyası: V1.0.1',
        font_small: 'Kishkene',
        font_medium: "Orta",
        font_large: 'Ulken',
        quiz_bookmark_soon: "Bookmark funkciyası jaqında qosıladı",
        quiz_bookmark_add: 'Tanlawlılarǵa saqlaw',
        quiz_bookmark_remove: 'Tanlawlılardan alıp taslaw',
        quiz_question_short: 'Sawal',
        quiz_explanation: 'Túsinik:',
        quiz_need_questions: 'Bul bilette sawallar tabılmadı!',
        quiz_ticket_not_found: 'Bilet tabılmadı!',
        quiz_result_congrats: '🎉 Qutlıqlaymız!',
        quiz_result_sad: '😔 Átteń...',
        quiz_result_passed: "Siz testten tabıslı óttińiz!",
        quiz_result_need_correct: "Testten ótiw ushın keminde {count} durıs juwap kerek.",
        wrong_answers_title: 'Qáte belgilegen sawallar ({count})',
        wrong_answers_none_title: 'Qáte juwaplar',
        wrong_answers_none_text: "Sizde hárizshe qáte juwaplar joq",
        wrong_answers_clear: 'Tazalaw',
        wrong_answers_card_title: 'Bilet {ticket}, Sawal {question}',
        bookmarks_title: 'Tanlawlılar',
        bookmarks_empty_text: 'Siz áli sawallardı tańlamaǵansız',
        bookmarks_coming_soon: "Bul funkciya jaqında qosıladı",
        questions_load_error_title: 'Sawallar júklenbedi',
        questions_load_error_text: 'questions.json faylın júkley almadıq. Betti jańalań.',
        questions_not_ready: 'Sawallar áli júklenbedi. Az ǵana kútiń.',
        share_text: 'Jol háreketi qaǵıydaları test dástúri',
        share_link_copied: 'Silteme nusqalandi',
        devtools_console_warning: "Bul bólimdi ASHIW,\nKÓSHIRIW yamasa\nÓZGERTIW\ntıyım salınadı. Platforma\nqaǵıydalarına ámel qılıń!",
        devtools_lock_title: 'Diqqat',
        devtools_lock_text: "Bul bólimdi ashıw yamasa ózgertiw tıyım salınadı.",
        devtools_lock_reload: 'Dawam etiw ushın betti qayta júkleń.'
    },
    ru: {
        app_title: 'Правила дорожного движения - Тест',
        app_description: 'Проверьте знания ПДД. 62 билета: 61 билет по 20 вопросов, 62-й билет — 3 вопроса.',
        app_logo: 'YHQ Test',
        nav_main: 'Главная',
        nav_signs: 'Знаки',
        nav_search: 'Поиск',
        nav_fines: 'Штрафы и баллы',
        nav_settings: 'Настройки',
        page_main: 'Главная',
        page_signs: 'Знаки',
        page_search: 'Поиск',
        page_fines: 'Штрафы и баллы',
        page_settings: 'Настройки',
        page_main_subtitle: 'Подготовка к экзамену по вождению',
        page_signs_subtitle: 'Справочник дорожных знаков',
        page_search_subtitle: 'Быстрый поиск по билетам и вопросам',
        page_fines_subtitle: 'Размеры штрафов и штрафные баллы',
        page_settings_subtitle: 'Настройте приложение под себя',
        common_back: 'Назад',
        common_share: 'Поделиться',
        common_reload: 'Перезагрузить',
        common_home_page: 'Главная',
        common_clear: 'Очистить',
        common_search: 'Поиск',
        common_finish: 'Завершить',
        common_retry: 'Повторить',
        common_bookmarks: 'Избранное',
        common_ticket: 'Билет',
        common_question: 'Вопрос',
        common_results: 'Результаты',
        common_answer_variants: 'Варианты',
        common_image_exists: 'Есть изображение',
        common_question_image: 'Изображение вопроса',
        common_coming_soon: 'Скоро...',
        common_open: 'Открыть',
        common_remove: 'Удалить',
        theme_light: 'Светлая',
        theme_dark: 'Тёмная',
        theme_panel_title: 'Тема',
        theme_panel_desc: 'Выберите оформление приложения',
        theme_select_group: 'Выбор темы',
        theme_switch_to: 'Переключить на {theme} тему',
        home_new20: 'Экзамен Новые 20',
        home_fifty: 'Экзаменационные билеты 50',
        home_all: 'Экзаменационные билеты',
        home_random: 'Случайный тест',
        home_wrong: 'Мои вопросы с ошибками',
        home_wrong_mobile: 'Мои ошибочные вопросы',
        home_bookmarks: 'Избранное',
        home_new20_desc: 'Проверьте новые вопросы',
        home_fifty_desc: '50 экзаменационных билетов',
        home_all_desc: 'Все билеты',
        home_random_desc: 'Запустить случайный билет',
        home_wrong_desc: 'Нужно повторить',
        home_bookmarks_desc: 'Любимые вопросы',
        home_stats_title: 'Статистика',
        home_stats_desc: 'Уровень подготовки: {percent}%',
        profile_id_label: 'ID',
        carousel_prev: 'Предыдущее изображение',
        carousel_next: 'Следующее изображение',
        carousel_dot_aria: 'Изображение {index}',
        tickets_new20_title: 'Новые 20 билетов',
        tickets_fifty_title: 'Экзаменационные билеты 50',
        tickets_all_title: 'Все билеты',
        progress_not_started: 'Не начато',
        progress_completed: '{correct}/{total} верно',
        progress_in_progress: '{current}/{total} вопрос',
        signs_title: 'Дорожные знаки',
        signs_loading: 'Знаки загружаются...',
        signs_empty: 'В этой категории знаки не найдены.',
        signs_load_error: 'Не удалось прочитать файл.',
        signs_open_source: 'Исходный HTML',
        signs_category_warning: 'Предупреждающие знаки',
        signs_category_priority: 'Знаки приоритета',
        signs_category_prohibitory: 'Запрещающие знаки',
        signs_category_mandatory: 'Предписывающие знаки',
        signs_category_information: 'Информационно-указательные знаки',
        signs_category_service: 'Знаки сервиса',
        signs_category_extra: 'Знаки дополнительной информации',
        signs_category_temporary: 'Временные дорожные знаки',
        signs_category_lights: 'Сигналы светофора и регулировщика',
        signs_category_identification: 'Опознавательные знаки транспортных средств',
        signs_category_hazard: 'Знаки опасности грузов',
        search_label_text: 'Поиск по тексту',
        search_label_ticket: 'Номер билета',
        search_placeholder_text: 'Текст вопроса или вариант ответа...',
        search_placeholder_ticket: 'Например: 12',
        search_status_default: 'Введите текст вопроса или номер билета.',
        search_results_title: 'Результаты',
        search_results_placeholder: 'Введите текст или номер билета для поиска.',
        search_empty_default: 'Ничего не найдено.',
        search_invalid_ticket_empty: 'Неверный номер билета. Введите положительное число.',
        search_invalid_ticket_status: 'Для номера билета введите только положительное число.',
        search_short_query_status: 'Для поиска по тексту введите минимум 2 буквы.',
        search_no_results_status: 'Ничего не найдено. Попробуйте другой текст или номер билета.',
        search_status_ticket: 'Билет: {ticket}',
        search_status_text: 'Текст: "{text}"',
        search_status_results: '{count} результатов',
        search_status_limited: 'показаны только первые {limit}',
        search_result_open_aria: 'Открыть билет {ticket}, вопрос {question}',
        fines_title: 'Штрафы и баллы',
        fines_no_data: 'Данные не найдены',
        fines_table_aria: 'Таблица штрафов и баллов',
        fines_col_violation: 'Нарушение (пункт и описание)',
        fines_col_fine: 'Штраф',
        fines_col_bhm: 'БРВ',
        fines_col_ball: 'Баллы',
        fines_meta_fine: 'Штраф',
        fines_meta_bhm: 'БРВ',
        fines_meta_ball: 'Баллы',
        fines_summary_articles: '{count} статей',
        fines_summary_bands: '{count} пунктов',
        fines_summary_note: 'Примечание: проверяйте официальные источники на предмет изменений в законодательстве.',
        settings_mobile_layout_aria: 'Мобильные настройки',
        settings_section_app: 'Настройки приложения',
        settings_section_exam: 'Настройки экзамена',
        settings_section_support: 'Связь и поддержка',
        settings_language: 'Язык',
        settings_language_aria: 'Язык: {value}',
        settings_dark_mode: 'Ночной режим',
        settings_notifications: 'Уведомления',
        settings_instant_feedback: 'Показывать ответы',
        settings_instant_feedback_hint: 'Сразу показывать ошибку во время теста',
        settings_font_size: 'Размер шрифта',
        settings_font_size_aria: 'Размер шрифта: {value}',
        settings_rate_app: 'Оценить приложение',
        settings_contact_telegram: 'Связаться через Telegram',
        settings_terms: 'Условия использования',
        policy_title: 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ',
        policy_close: 'Закрыть',
        policy_text_1: 'Данное веб-приложение уделяет внимание защите персональных данных пользователей. При использовании приложения от пользователей не требуется предоставление специальных личных данных.',
        policy_text_2: 'Сайт предназначен только для изучения правил дорожного движения и прохождения тестов. Персональные данные пользователей не передаются третьим лицам.',
        policy_text_3: 'Если через сайт собирается какая-либо техническая информация (например, тип браузера или данные устройства), она используется только для улучшения работы сайта.',
        policy_text_4: 'Данный проект является демонстрационным веб-приложением, созданным в процессе изучения frontend-разработки.',
        settings_version: 'Версия приложения',
        settings_version_aria: 'Версия приложения: V1.0.1',
        font_small: 'Маленький',
        font_medium: 'Средний',
        font_large: 'Большой',
        quiz_bookmark_soon: 'Функция закладок скоро будет добавлена',
        quiz_bookmark_add: 'Сохранить в избранное',
        quiz_bookmark_remove: 'Убрать из избранного',
        quiz_question_short: 'Вопрос',
        quiz_explanation: 'Пояснение:',
        quiz_need_questions: 'В этом билете не найдены вопросы!',
        quiz_ticket_not_found: 'Билет не найден!',
        quiz_result_congrats: '🎉 Поздравляем!',
        quiz_result_sad: '😔 К сожалению...',
        quiz_result_passed: 'Вы успешно прошли тест!',
        quiz_result_need_correct: 'Для прохождения теста нужно минимум {count} правильных ответов.',
        wrong_answers_title: 'Вопросы с ошибками ({count})',
        wrong_answers_none_title: 'Неправильные ответы',
        wrong_answers_none_text: 'У вас пока нет неправильных ответов',
        wrong_answers_clear: 'Очистить',
        wrong_answers_card_title: 'Билет {ticket}, Вопрос {question}',
        bookmarks_title: 'Избранное',
        bookmarks_empty_text: 'Вы пока не добавили вопросы в избранное',
        bookmarks_coming_soon: 'Эта функция скоро появится',
        questions_load_error_title: 'Вопросы не загружены',
        questions_load_error_text: 'Не удалось загрузить файл questions.json. Обновите страницу.',
        questions_not_ready: 'Вопросы еще не загружены. Пожалуйста, подождите.',
        share_text: 'Тест по правилам дорожного движения',
        share_link_copied: 'Ссылка скопирована',
        devtools_console_warning: "ОТКРЫВАТЬ,\nКОПИРОВАТЬ или\nИЗМЕНЯТЬ\nэтот раздел запрещено.\nСоблюдайте правила\nплатформы!",
        devtools_lock_title: 'Внимание',
        devtools_lock_text: 'Открывать или изменять этот раздел запрещено.',
        devtools_lock_reload: 'Чтобы продолжить, перезагрузите страницу.'
    },
    tg: {
        app_title: 'Қоидаҳои ҳаракати роҳ - Тест',
        app_description: 'Дониши худро аз қоидаҳои ҳаракати роҳ бисанҷед. 62 билет: 61 билет бо 20 савол, билети 62-юм — 3 савол.',
        app_logo: 'YHQ Test',
        nav_main: 'Асосӣ',
        nav_signs: 'Аломатҳо',
        nav_search: 'Ҷустуҷӯ',
        nav_fines: 'Ҷарима ва холҳо',
        nav_settings: 'Танзимот',
        page_main: 'Асосӣ',
        page_signs: 'Аломатҳо',
        page_search: 'Ҷустуҷӯ',
        page_fines: 'Ҷарима ва холҳо',
        page_settings: 'Танзимот',
        page_main_subtitle: 'Омодагӣ ба имтиҳони ронандагӣ',
        page_signs_subtitle: 'Маълумотнома оид ба аломатҳои роҳ',
        page_search_subtitle: 'Ҷустуҷӯи зуд дар билетҳо ва саволҳо',
        page_fines_subtitle: 'Ҳаҷми ҷарима ва холҳои ҷаримавӣ',
        page_settings_subtitle: 'Барномаро барои худ мувофиқ кунед',
        common_back: 'Бозгашт',
        common_share: 'Мубодила',
        common_reload: 'Аз нав бор кардан',
        common_home_page: 'Асосӣ',
        common_clear: 'Пок кардан',
        common_search: 'Ҷустуҷӯ',
        common_finish: 'Анҷом',
        common_retry: 'Аз нав кӯшиш',
        common_bookmarks: 'Интихобшудаҳо',
        common_ticket: 'Билет',
        common_question: 'Савол',
        common_results: 'Натиҷаҳо',
        common_answer_variants: 'Вариантҳо',
        common_image_exists: 'Расм мавҷуд аст',
        common_question_image: 'Расми савол',
        common_coming_soon: 'Ба зудӣ...',
        common_open: 'Кушодан',
        common_remove: 'Нест кардан',
        theme_light: 'Равшан',
        theme_dark: 'Торик',
        theme_panel_title: 'Мавзӯъ',
        theme_panel_desc: 'Намуди барномаро интихоб кунед',
        theme_select_group: 'Интихоби мавзӯъ',
        theme_switch_to: 'Гузариш ба ҳолати {theme}',
        home_new20: 'Имтиҳон 20 нави',
        home_fifty: 'Билетҳои имтиҳонӣ 50',
        home_all: 'Билетҳои имтиҳонӣ',
        home_random: 'Тести тасодуфӣ',
        home_wrong: 'Саволҳои бо хато қайдкардаам',
        home_wrong_mobile: 'Саволҳои хатодор',
        home_bookmarks: 'Интихобшудаҳо',
        home_new20_desc: 'Саволҳои навро санҷед',
        home_fifty_desc: '50 билети имтиҳонӣ',
        home_all_desc: 'Ҳамаи билетҳо',
        home_random_desc: 'Билети тасодуфиро оғоз кунед',
        home_wrong_desc: 'Аз нав машқ кардан лозим',
        home_bookmarks_desc: 'Саволҳои дӯстдошта',
        home_stats_title: 'Статистика',
        home_stats_desc: 'Сатҳи омодагӣ: {percent}%',
        profile_id_label: 'ID',
        carousel_prev: 'Расми пешина',
        carousel_next: 'Расми навбатӣ',
        carousel_dot_aria: 'Расми {index}',
        tickets_new20_title: '20 билети нав',
        tickets_fifty_title: 'Билетҳои имтиҳонӣ 50',
        tickets_all_title: 'Ҳамаи билетҳо',
        progress_not_started: 'Оғоз нашудааст',
        progress_completed: '{correct}/{total} дуруст',
        progress_in_progress: '{current}/{total} савол',
        signs_title: 'Аломатҳои роҳ',
        signs_loading: 'Аломатҳо боргирӣ шуда истодаанд...',
        signs_empty: 'Дар ин категория аломатҳо ёфт нашуданд.',
        signs_load_error: 'Файлро хонда нашуд.',
        signs_open_source: 'HTML аслӣ',
        signs_category_warning: 'Аломатҳои огоҳкунанда',
        signs_category_priority: 'Аломатҳои имтиёз',
        signs_category_prohibitory: 'Аломатҳои манъкунанда',
        signs_category_mandatory: 'Аломатҳои амркунанда',
        signs_category_information: 'Аломатҳои иттилоотӣ-нишондиҳанда',
        signs_category_service: 'Аломатҳои сервисӣ',
        signs_category_extra: 'Аломатҳои иттилооти иловагӣ',
        signs_category_temporary: 'Аломатҳои муваққатии роҳ',
        signs_category_lights: 'Ишораҳои чароғаки роҳнамо ва танзимкунанда',
        signs_category_identification: 'Аломатҳои шиносоии воситаҳои нақлиёт',
        signs_category_hazard: 'Аломатҳои хавфнокӣ',
        search_label_text: 'Ҷустуҷӯ аз рӯйи матн',
        search_label_ticket: 'Рақами билет',
        search_placeholder_text: 'Матни савол ё варианти ҷавоб...',
        search_placeholder_ticket: 'Мисол: 12',
        search_status_default: 'Матни савол ё рақами билетро ворид кунед.',
        search_results_title: 'Натиҷаҳо',
        search_results_placeholder: 'Барои ҷустуҷӯ матн ё рақами билетро ворид кунед.',
        search_empty_default: 'Чизе ёфт нашуд.',
        search_invalid_ticket_empty: 'Рақами билет нодуруст аст. Рақами мусбат ворид кунед.',
        search_invalid_ticket_status: 'Барои рақами билет танҳо рақами мусбат ворид кунед.',
        search_short_query_status: 'Барои ҷустуҷӯи матн камаш 2 ҳарф ворид кунед.',
        search_no_results_status: 'Чизе ёфт нашуд. Матн ё рақами дигарро санҷед.',
        search_status_ticket: 'Билет: {ticket}',
        search_status_text: 'Матн: "{text}"',
        search_status_results: '{count} натиҷа',
        search_status_limited: 'танҳо {limit}-тои аввал нишон дода шуд',
        search_result_open_aria: 'Кушодани билет {ticket}, саволи {question}',
        fines_title: 'Ҷарима ва холҳо',
        fines_no_data: 'Маълумот ёфт нашуд',
        fines_table_aria: 'Ҷадвали ҷарима ва холҳо',
        fines_col_violation: 'Қонуншиканӣ (банд ва шарҳ)',
        fines_col_fine: 'Ҷарима',
        fines_col_bhm: 'BHM',
        fines_col_ball: 'Хол',
        fines_meta_fine: 'Ҷарима',
        fines_meta_bhm: 'BHM',
        fines_meta_ball: 'Хол',
        fines_summary_articles: '{count} модда',
        fines_summary_bands: '{count} банд',
        fines_summary_note: 'Эзоҳ: барои тағйироти қонунгузорӣ манбаъҳои расмиро санҷед.',
        settings_mobile_layout_aria: 'Танзимоти мобилӣ',
        settings_section_app: 'Танзимоти барнома',
        settings_section_exam: 'Танзимоти имтиҳон',
        settings_section_support: 'Алоқа ва дастгирӣ',
        settings_language: 'Забон',
        settings_language_aria: 'Забон: {value}',
        settings_dark_mode: 'Ҳолати шабона',
        settings_notifications: 'Огоҳиномаҳо',
        settings_instant_feedback: 'Нишон додани ҷавобҳо',
        settings_instant_feedback_hint: 'Дар вақти тест хатогиро фавран нишон диҳад',
        settings_font_size: 'Андозаи шрифт',
        settings_font_size_aria: 'Андозаи шрифт: {value}',
        settings_rate_app: 'Ба барнома баҳо диҳед',
        settings_contact_telegram: 'Тамос тавассути Telegram',
        settings_terms: 'Шартҳои истифода',
        policy_title: 'СИЁСАТИ МАХФИЯТ',
        policy_close: 'Пӯшидан',
        policy_text_1: 'Ин веб-барнома ба ҳифзи маълумоти шахсии истифодабарандагон аҳамият медиҳад. Ҳангоми истифодаи барнома аз истифодабарандагон маълумоти махсуси шахсӣ талаб карда намешавад.',
        policy_text_2: 'Сомона танҳо барои омӯзиши қоидаҳои ҳаракати роҳ ва супоридани тестҳо пешбинӣ шудааст. Маълумоти шахсии истифодабарандагон ба шахсони сеюм дода намешавад.',
        policy_text_3: 'Агар тавассути сомона ягон маълумоти техникӣ (масалан, намуди браузер ё маълумоти дастгоҳ) ҷамъоварӣ шавад, онҳо танҳо барои беҳтар кардани кори сомона истифода мешаванд.',
        policy_text_4: 'Ин лоиҳа веб-барномаи намунавӣ мебошад, ки дар ҷараёни омӯзиши frontend таҳия шудааст.',
        settings_version: 'Версияи барнома',
        settings_version_aria: 'Версияи барнома: V1.0.1',
        font_small: 'Хурд',
        font_medium: 'Миёна',
        font_large: 'Калон',
        quiz_bookmark_soon: 'Функсияи bookmark ба зудӣ илова мешавад',
        quiz_bookmark_add: 'Ба интихобшудаҳо нигоҳ доштан',
        quiz_bookmark_remove: 'Аз интихобшудаҳо хориҷ кардан',
        quiz_question_short: 'Савол',
        quiz_explanation: 'Шарҳ:',
        quiz_need_questions: 'Дар ин билет саволҳо ёфт нашуданд!',
        quiz_ticket_not_found: 'Билет ёфт нашуд!',
        quiz_result_congrats: '🎉 Табрик!',
        quiz_result_sad: '😔 Афсӯс...',
        quiz_result_passed: 'Шумо аз тест бомуваффақият гузаштед!',
        quiz_result_need_correct: 'Барои гузаштан аз тест камаш {count} ҷавоби дуруст лозим аст.',
        wrong_answers_title: 'Саволҳои бо хато ({count})',
        wrong_answers_none_title: 'Ҷавобҳои нодуруст',
        wrong_answers_none_text: 'Ҳоло шумо ҷавоби нодуруст надоред',
        wrong_answers_clear: 'Пок кардан',
        wrong_answers_card_title: 'Билет {ticket}, Савол {question}',
        bookmarks_title: 'Интихобшудаҳо',
        bookmarks_empty_text: 'Шумо ҳоло саволеро интихоб накардаед',
        bookmarks_coming_soon: 'Ин функсия ба зудӣ илова мешавад',
        questions_load_error_title: 'Саволҳо бор нашуданд',
        questions_load_error_text: 'Файли questions.json бор карда нашуд. Саҳифаро навсозӣ кунед.',
        questions_not_ready: 'Саволҳо ҳоло бор нашудаанд. Лутфан каме интизор шавед.',
        share_text: 'Барномаи тестии қоидаҳои ҳаракати роҳ',
        share_link_copied: 'Пайванд нусхабардорӣ шуд',
        devtools_console_warning: "КУШОДАН,\nНУСХАБАРДОРӢ ё\nТАҒЙИР ДОДАНИ\nин қисм манъ аст.\nБа қоидаҳои платформа\nриоя кунед!",
        devtools_lock_title: 'Диққат',
        devtools_lock_text: 'Кушодан ё тағйир додани ин қисм манъ аст.',
        devtools_lock_reload: 'Барои идома саҳифаро аз нав бор кунед.'
    }
};

function transliterateUzLatinToCyrillic(text) {
    if (typeof text !== 'string' || !text) return text;

    const placeholders = [];
    const preserve = (pattern) => {
        result = result.replace(pattern, (match) => {
            const token = `\u0001${placeholders.length}\u0002`;
            placeholders.push(match);
            return token;
        });
    };
    let result = text;

    preserve(/\{\w+\}/g);
    preserve(/\b[A-Z]{1,6}\d*\b/g);
    preserve(/«[A-ZА-ЯЁЎҚҒҲ0-9 ,;:.+-]{1,24}»/g);

    const replacements = [
        [/O['ʻʼ`’‘]/g, 'Ў'],
        [/o['ʻʼ`’‘]/g, 'ў'],
        [/G['ʻʼ`’‘]/g, 'Ғ'],
        [/g['ʻʼ`’‘]/g, 'ғ'],
        [/SH/g, 'Ш'],
        [/Sh/g, 'Ш'],
        [/sh/g, 'ш'],
        [/CH/g, 'Ч'],
        [/Ch/g, 'Ч'],
        [/ch/g, 'ч'],
        [/YA/g, 'Я'],
        [/Ya/g, 'Я'],
        [/ya/g, 'я'],
        [/YO/g, 'Ё'],
        [/Yo/g, 'Ё'],
        [/yo/g, 'ё'],
        [/YU/g, 'Ю'],
        [/Yu/g, 'Ю'],
        [/yu/g, 'ю']
    ];

    replacements.forEach(([pattern, value]) => {
        result = result.replace(pattern, value);
    });

    const charMap = {
        A: 'А', a: 'а',
        B: 'Б', b: 'б',
        D: 'Д', d: 'д',
        E: 'Е', e: 'е',
        F: 'Ф', f: 'ф',
        G: 'Г', g: 'г',
        H: 'Ҳ', h: 'ҳ',
        I: 'И', i: 'и',
        J: 'Ж', j: 'ж',
        K: 'К', k: 'к',
        L: 'Л', l: 'л',
        M: 'М', m: 'м',
        N: 'Н', n: 'н',
        O: 'О', o: 'о',
        P: 'П', p: 'п',
        Q: 'Қ', q: 'қ',
        R: 'Р', r: 'р',
        S: 'С', s: 'с',
        T: 'Т', t: 'т',
        U: 'У', u: 'у',
        V: 'В', v: 'в',
        X: 'Х', x: 'х',
        Y: 'Й', y: 'й',
        Z: 'З', z: 'з'
    };

    result = result.replace(/[A-Za-z]/g, (char) => charMap[char] || char);

    return result.replace(/\u0001(\d+)\u0002/g, (_, index) => placeholders[Number(index)] || '');
}

function shouldSkipUzCyrillicTransliteration(key, value) {
    if (typeof value !== 'string') return false;
    if (['image', 'src', 'url', 'href'].includes(key)) return true;

    const trimmed = value.trim();
    if (/^(images\/|https?:\/\/|tg:\/\/|\/|#)/i.test(trimmed)) return true;
    if (/\.(png|jpe?g|webp|gif|svg|json)$/i.test(trimmed)) return true;

    return false;
}

function transformStructuredTextToUzCyrillic(value, key = '') {
    if (Array.isArray(value)) {
        return value.map((item) => transformStructuredTextToUzCyrillic(item, key));
    }

    if (value && typeof value === 'object') {
        const transformed = {};
        Object.entries(value).forEach(([childKey, childValue]) => {
            transformed[childKey] = transformStructuredTextToUzCyrillic(childValue, childKey);
        });
        return transformed;
    }

    if (typeof value === 'string') {
        return shouldSkipUzCyrillicTransliteration(key, value)
            ? value
            : transliterateUzLatinToCyrillic(value);
    }

    return value;
}

function buildUzCyrillicUiText() {
    const cyrl = transformStructuredTextToUzCyrillic(UI_TEXT.uz);
    return {
        ...cyrl,
        app_logo: 'YHQ Test',
        quiz_bookmark_soon: 'Танланганларга сақлаш функцияси тез орада қўшилади',
        quiz_bookmark_add: 'Танланганларга сақлаш',
        quiz_bookmark_remove: 'Танланганлардан олиб ташлаш',
        bookmarks_coming_soon: 'Бу функция тез орада қўшилади',
        policy_title: 'МАХФИЙЛИК СИЁСАТИ',
        policy_close: 'Ёпиш',
        policy_text_1: 'Ушбу илова фойдаланувчи махфийлигини ҳурмат қилади. Иловадан фойдаланишда шахсий маълумотлар мажбурий тарзда сўралмайди.',
        policy_text_2: 'Созламалар, тест натижалари ва айрим маҳаллий маълумотлар фақат илова функцияларини таъминлаш учун қурилмада сақланиши мумкин.',
        policy_text_3: 'Фойдаланувчига оид маълумотлар учинчи шахсларга берилмайди. Зарурат бўлса, фақат илованинг ишлашини яхшилашга хизмат қилувчи техник маълумотлардан фойдаланилиши мумкин.',
        policy_text_4: 'Мазкур сиёсат келгусида янгиланиши мумкин.',
        questions_load_error_text: "questions.json файлини юклаб бўлмади. Саҳифани янгиланг."
    };
}

UI_TEXT.uz_cyrl = buildUzCyrillicUiText();

const SIGNS_CATEGORIES = [
    {
        id: 'warning',
        titleKey: 'signs_category_warning',
        icon: 'belgilar1_files/z1_3_1.png'
    },
    {
        id: 'priority',
        titleKey: 'signs_category_priority',
        icon: 'belgilar1_files/z2_1.png'
    },
    {
        id: 'prohibitory',
        titleKey: 'signs_category_prohibitory',
        icon: 'belgilar1_files/z3_1.png'
    },
    {
        id: 'mandatory',
        titleKey: 'signs_category_mandatory',
        icon: 'belgilar1_files/z4_1_1.png'
    },
    {
        id: 'information',
        titleKey: 'signs_category_information',
        icon: 'belgilar1_files/z5_1.png'
    },
    {
        id: 'service',
        titleKey: 'signs_category_service',
        icon: 'belgilar1_files/z6_1.png'
    },
    {
        id: 'extra',
        titleKey: 'signs_category_extra',
        icon: 'belgilar1_files/z7_1_1.png'
    },
    {
        id: 'temporary',
        titleKey: 'signs_category_temporary',
        icon: 'belgilar1_files/z8_1_8.png'
    },
    {
        id: 'lights',
        titleKey: 'signs_category_lights',
        icon: 'belgilar1_files/z9_1.png'
    },
    {
        id: 'identification',
        titleKey: 'signs_category_identification',
        icon: 'belgilar1_files/z10_5.png'
    },
    {
        id: 'hazard',
        titleKey: 'signs_category_hazard',
        icon: 'belgilar1_files/z11_8.png'
    }
];

function restoreOriginalMarkerTokens(sourceText, targetText) {
    if (typeof sourceText !== 'string' || typeof targetText !== 'string') {
        return targetText;
    }

    if (!ORIGINAL_MARKER_TOKEN_PATTERN.test(sourceText) || !ORIGINAL_MARKER_TOKEN_PATTERN.test(targetText)) {
        return targetText;
    }

    const sourceTokens = sourceText.match(ORIGINAL_MARKER_TOKEN_REGEX);
    if (!Array.isArray(sourceTokens) || sourceTokens.length === 0) {
        return targetText;
    }

    let tokenIndex = 0;
    return targetText.replace(ORIGINAL_MARKER_TOKEN_REGEX, (match) => {
        const replacement = sourceTokens[tokenIndex];
        tokenIndex += 1;
        return replacement || match;
    });
}

function applyOriginalMarkerTokensFromUz(targetData, uzData) {
    if (!Array.isArray(targetData) || !Array.isArray(uzData)) {
        return targetData;
    }

    targetData.forEach((ticket, ticketIndex) => {
        const uzTicket = uzData[ticketIndex];
        const targetQuestions = Array.isArray(ticket?.questions) ? ticket.questions : null;
        const uzQuestions = Array.isArray(uzTicket?.questions) ? uzTicket.questions : null;

        if (!targetQuestions || !uzQuestions) {
            return;
        }

        targetQuestions.forEach((question, questionIndex) => {
            const uzQuestion = uzQuestions[questionIndex];
            if (!question || !uzQuestion) {
                return;
            }

            if (typeof question.question === 'string' && typeof uzQuestion.question === 'string') {
                question.question = restoreOriginalMarkerTokens(uzQuestion.question, question.question);
            }

            if (Array.isArray(question.answers) && Array.isArray(uzQuestion.answers)) {
                question.answers = question.answers.map((answer, answerIndex) => {
                    return restoreOriginalMarkerTokens(uzQuestion.answers[answerIndex], answer);
                });
            }
        });
    });

    return targetData;
}

function normalizeAppLanguage(value) {
    return UI_LANGUAGES.includes(value) ? value : 'uz';
}

function getCurrentLanguage() {
    return normalizeAppLanguage(appSettingsState?.language);
}

function getUiLowercaseLocale() {
    const lang = getCurrentLanguage();
    if (lang === 'ru') return 'ru';
    if (lang === 'tg') return 'tg';
    return 'uz';
}

function getDocumentLanguageTag() {
    return getCurrentLanguage() === 'uz_cyrl' ? 'uz-Cyrl' : getCurrentLanguage();
}

function getLanguageLabel(languageCode) {
    return UI_LANGUAGE_LABELS[normalizeAppLanguage(languageCode)];
}

function t(key, vars = {}) {
    const lang = getCurrentLanguage();
    let template = UI_TEXT[lang]?.[key];
    if (template === undefined) template = UI_TEXT.uz?.[key];
    if (template === undefined) return key;

    return String(template).replace(/\{(\w+)\}/g, (_, name) => (
        vars[name] === undefined || vars[name] === null ? '' : String(vars[name])
    ));
}

let QUESTIONS = [];
let mobileCarouselTimerId = null;
let mobileCarouselController = null;
let devtoolsWatchId = null;
let devtoolsLockActive = false;
let searchIndexCache = null;
let searchRenderDebounceId = null;
let searchRequestToken = 0;
let finesDataCache = Object.create(null);
let appSettingsState = null;
let introCurrentStep = 0;
let mainPageViewState = { type: 'home' };
let quizExitState = null;
let signsViewState = { type: 'categories', categoryId: null };
let signsCategoryCache = Object.create(null);
let signsStaticDataPromise = null;
let signsRenderToken = 0;
let fiftyExamTicketsCache = null;
let imagePreloadCache = Object.create(null);
let ticketAssetsPreloadCache = Object.create(null);
let imagePreloadQueue = [];
let imagePreloadInFlight = 0;
let questionsLoadPromises = Object.create(null);
let questionsDataByLang = Object.create(null);
let baseUzQuestionsData = null;
let baseUzQuestionsPromise = null;
let currentQuestionsLanguage = null;
let questionsDataReady = false;
let backButtonListenerBound = false;
let lastBackButtonHandledAt = 0;
let appLifecycleListenersBound = false;
let nativePermissionListenerBound = false;
let nativePermissionState = null;
let nativeQuizPlugin = null;

function getQuestionsJsonUrlForLanguage(languageCode = getCurrentLanguage()) {
    const lang = normalizeAppLanguage(languageCode);
    return QUESTIONS_JSON_BY_LANG[lang] || DEFAULT_QUESTIONS_JSON_URL;
}

function isNativeBuildTarget() {
    return window?.__YHQ_BUILD_TARGET__ === 'native';
}

function isLikelyNativeRuntime() {
    try {
        if (isNativeBuildTarget()) {
            return true;
        }

        const capacitor = window?.Capacitor;
        if (capacitor && typeof capacitor.isNativePlatform === 'function' && capacitor.isNativePlatform()) {
            return true;
        }

        const platform = capacitor && typeof capacitor.getPlatform === 'function'
            ? String(capacitor.getPlatform()).toLowerCase()
            : '';
        return platform === 'android' || platform === 'ios';
    } catch (error) {
        return false;
    }
}

function getNativeQuizPlugin() {
    if (!isLikelyNativeRuntime()) {
        return null;
    }

    if (nativeQuizPlugin) {
        return nativeQuizPlugin;
    }

    try {
        const capacitor = window?.Capacitor;
        const directPlugin = capacitor?.Plugins?.[NATIVE_QUIZ_PLUGIN_NAME];
        if (directPlugin) {
            nativeQuizPlugin = directPlugin;
            return nativeQuizPlugin;
        }

        if (!capacitor || typeof capacitor.registerPlugin !== 'function') {
            return null;
        }

        nativeQuizPlugin = capacitor.registerPlugin(NATIVE_QUIZ_PLUGIN_NAME);
        return nativeQuizPlugin;
    } catch (error) {
        nativeQuizPlugin = null;
        return null;
    }
}

function waitForTimeout(delayMs) {
    return new Promise((resolve) => {
        window.setTimeout(resolve, delayMs);
    });
}

async function waitForNativeQuizPlugin() {
    if (!isLikelyNativeRuntime()) {
        return null;
    }

    for (let attempt = 0; attempt < NATIVE_PLUGIN_READY_MAX_ATTEMPTS; attempt += 1) {
        const plugin = getNativeQuizPlugin();
        if (plugin) {
            return plugin;
        }

        await waitForTimeout(NATIVE_PLUGIN_READY_RETRY_MS);
    }

    return null;
}

function normalizeNativeFileUrl(value) {
    if (typeof value !== 'string' || !value.trim()) {
        return value || '';
    }

    if (
        value.startsWith('data:') ||
        /^https?:\/\//i.test(value) ||
        value.startsWith('/_capacitor_') ||
        value.startsWith('http://localhost/_capacitor_file_') ||
        value.startsWith('capacitor://')
    ) {
        return value;
    }

    if (/^file:\/\//i.test(value)) {
        const convertFileSrc = window?.Capacitor?.convertFileSrc;
        return typeof convertFileSrc === 'function' ? convertFileSrc(value) : value;
    }

    return value;
}

function normalizeQuestionRecordForClient(question, options = {}) {
    if (!question || typeof question !== 'object') {
        return question;
    }

    const normalized = {
        ...question,
    };

    if (typeof normalized.image === 'string') {
        normalized.image = normalizeNativeFileUrl(normalized.image);
    }

    if (options.hydrated === true) {
        normalized.__nativeHydrated = true;
    }

    return normalized;
}

function localizeNativeQuizPayload(value, languageCode = getCurrentLanguage()) {
    const lang = normalizeAppLanguage(languageCode);
    if (lang !== 'uz_cyrl') {
        return value;
    }

    return transformStructuredTextToUzCyrillic(value);
}

function createQuestionPlaceholder(ticketNumber, questionIndex) {
    return {
        __placeholder: true,
        sourceTicketNumber: ticketNumber,
        sourceQuestionNumber: questionIndex + 1
    };
}

function normalizeTicketsDatasetForClient(tickets) {
    if (!Array.isArray(tickets)) {
        return tickets;
    }

    return tickets.map((ticket, ticketIndex) => {
        const ticketNumber = Number(ticket?.ticketNumber) || (ticketIndex + 1);
        const questionCount = Math.max(
            0,
            Number.isInteger(ticket?.questionCount)
                ? ticket.questionCount
                : (Array.isArray(ticket?.questions) ? ticket.questions.length : 0)
        );

        if (Array.isArray(ticket?.questions) && ticket.questions.length > 0) {
            return {
                ...ticket,
                ticketNumber,
                questionCount,
                questions: ticket.questions.map((question, questionIndex) => normalizeQuestionRecordForClient({
                    sourceTicketNumber: Number(question?.sourceTicketNumber) || ticketNumber,
                    sourceQuestionNumber: Number(question?.sourceQuestionNumber) || (questionIndex + 1),
                    ...localizeNativeQuizPayload(question)
                }))
            };
        }

        return {
            ...ticket,
            ticketNumber,
            questionCount,
            questions: Array.from({ length: questionCount }, (_, questionIndex) => createQuestionPlaceholder(ticketNumber, questionIndex))
        };
    });
}

async function hydrateQuestionForNativeRuntime(languageCode, quizMode, ticketNumber, questionIndex, fallbackQuestion) {
    const plugin = await waitForNativeQuizPlugin();
    if (!plugin || typeof plugin.getQuestion !== 'function') {
        return fallbackQuestion;
    }

    if (fallbackQuestion?.__nativeHydrated) {
        return fallbackQuestion;
    }

    try {
        const payload = await plugin.getQuestion({
            language: normalizeAppLanguage(languageCode),
            mode: quizMode,
            ticketNumber,
            questionIndex,
        });

        const nativeQuestion = payload?.question && typeof payload.question === 'object'
            ? payload.question
            : payload;

        if (!nativeQuestion || typeof nativeQuestion !== 'object') {
            return fallbackQuestion;
        }

        return normalizeQuestionRecordForClient({
            ...fallbackQuestion,
            ...localizeNativeQuizPayload(nativeQuestion, languageCode),
        }, { hydrated: true });
    } catch (error) {
        return fallbackQuestion;
    }
}

function getNativePermissionsBridge() {
    const bridge = window?.[NATIVE_PERMISSIONS_BRIDGE_NAME];
    if (!bridge || typeof bridge !== 'object') {
        return null;
    }
    return bridge;
}

function parseNativePermissionSnapshot(rawValue) {
    if (typeof rawValue !== 'string' || !rawValue.trim()) {
        return null;
    }

    try {
        const parsed = JSON.parse(rawValue);
        return parsed && typeof parsed === 'object' ? parsed : null;
    } catch (error) {
        return null;
    }
}

function readNativePermissionSnapshot() {
    const bridge = getNativePermissionsBridge();
    if (!bridge || typeof bridge.getPermissionSnapshot !== 'function') {
        return null;
    }

    return parseNativePermissionSnapshot(bridge.getPermissionSnapshot());
}

function hasNativeNotificationPermission() {
    if (!isLikelyNativeRuntime()) {
        return true;
    }

    return Boolean(nativePermissionState?.notificationsGranted);
}

function updateNotificationsSwitch() {
    const notificationsSwitch = document.querySelector('.mobile-switch[data-toggle-local="notifications"]');
    if (!notificationsSwitch) return;

    const notificationsEnabled = Boolean(getAppSetting('notificationsEnabled'));
    setMobileSwitchState(notificationsSwitch, notificationsEnabled && hasNativeNotificationPermission());
}

function syncNativePermissionState(snapshot) {
    if (!snapshot || typeof snapshot !== 'object') {
        return;
    }

    nativePermissionState = snapshot;
    updateNotificationsSwitch();
}

function requestNativeStartupPermissions() {
    const bridge = getNativePermissionsBridge();
    if (!bridge || typeof bridge.requestStartupPermissions !== 'function') {
        return false;
    }

    bridge.requestStartupPermissions();
    return true;
}

function initNativePermissionHandling() {
    if (nativePermissionListenerBound) return;
    nativePermissionListenerBound = true;

    window.addEventListener(NATIVE_PERMISSIONS_EVENT_NAME, (event) => {
        syncNativePermissionState(event?.detail);
    });

    const initialSnapshot = readNativePermissionSnapshot();
    if (initialSnapshot) {
        syncNativePermissionState(initialSnapshot);
    }

    window.setTimeout(() => {
        const latestSnapshot = readNativePermissionSnapshot();
        if (latestSnapshot) {
            syncNativePermissionState(latestSnapshot);
        }
    }, 900);
}

async function fetchWebFallbackQuestionsDataset(_languageCode, apiError) {
    throw apiError;
}

/* WEB_SECURE_FALLBACK_START */
/* WEB_SECURE_FALLBACK_END */

function fetchNativeQuestionsDataset(languageCode) {
    const lang = normalizeAppLanguage(languageCode);
    return waitForNativeQuizPlugin().then((plugin) => {
        if (!plugin || typeof plugin.getCatalog !== 'function') {
            return null;
        }

        return plugin.getCatalog({ language: lang });
    }).then((payload) => {
        if (!payload) {
            return null;
        }

        const data = Array.isArray(payload?.tickets) ? payload.tickets : null;
        if (!Array.isArray(data)) {
            throw new Error('INVALID_NATIVE_TICKETS_PAYLOAD');
        }

        return {
            data: normalizeTicketsDatasetForClient(data),
            url: `${NATIVE_QUIZ_PLUGIN_NAME}://catalog/${lang}`,
        };
    });
}

async function fetchNativeQuestionsByRefs(refs, languageCode = getCurrentLanguage()) {
    const plugin = await waitForNativeQuizPlugin();
    if (!plugin || typeof plugin.getQuestionsByRefs !== 'function' || !Array.isArray(refs) || refs.length === 0) {
        return null;
    }

    const payload = await plugin.getQuestionsByRefs({
        language: normalizeAppLanguage(languageCode),
        refs: refs.map((item) => ({
            ticketNumber: Number(item?.ticket),
            questionNumber: Number(item?.question)
        }))
    });

    const items = Array.isArray(payload?.questions) ? payload.questions : [];
    const questionMap = new Map();

    items.forEach((entry) => {
        const ticketNumber = Number(entry?.ticketNumber);
        const questionNumber = Number(entry?.questionNumber);
        const question = entry?.question && typeof entry.question === 'object'
            ? normalizeQuestionRecordForClient(localizeNativeQuizPayload(entry.question, languageCode), { hydrated: true })
            : null;

        if (!Number.isInteger(ticketNumber) || !Number.isInteger(questionNumber) || !question) {
            return;
        }

        questionMap.set(`${ticketNumber}:${questionNumber}`, question);
    });

    return questionMap;
}

async function runNativeSearchQuery(languageCode, textQueryRaw, ticketNumber) {
    const plugin = await waitForNativeQuizPlugin();
    if (!plugin || typeof plugin.searchQuestions !== 'function') {
        return null;
    }

    const payload = await plugin.searchQuestions({
        language: normalizeAppLanguage(languageCode),
        query: textQueryRaw || '',
        ticketNumber: Number.isInteger(ticketNumber) ? ticketNumber : null,
        limit: SEARCH_RESULTS_LIMIT
    });

    const results = Array.isArray(payload?.results)
        ? payload.results.map((item) => localizeNativeQuizPayload(item, languageCode))
        : [];

    return {
        results,
        totalCount: Number.isInteger(payload?.totalCount) ? payload.totalCount : results.length
    };
}

function applyQuestionsDataset(data, languageCode) {
    QUESTIONS = data;
    currentQuestionsLanguage = normalizeAppLanguage(languageCode);
    questionsDataByLang[currentQuestionsLanguage] = data;
    if (currentQuestionsLanguage === 'uz') {
        baseUzQuestionsData = data;
    }
    searchIndexCache = null;
    fiftyExamTicketsCache = null;
    imagePreloadCache = Object.create(null);
    ticketAssetsPreloadCache = Object.create(null);
    questionsDataReady = true;
}

async function fetchQuestionsDataset(languageCode) {
    const lang = normalizeAppLanguage(languageCode);
    if (isLikelyNativeRuntime()) {
        const nativeDataset = await fetchNativeQuestionsDataset(lang);
        if (nativeDataset) {
            return nativeDataset;
        }

        throw new Error('NATIVE_QUIZ_PLUGIN_UNAVAILABLE');
    }

    const apiUrl = `${QUESTIONS_API_URL}?lang=${encodeURIComponent(lang)}`;
    try {
        const response = await fetch(apiUrl, { cache: QUESTIONS_FETCH_CACHE_MODE });
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const payload = await response.json();
        const data = payload?.tickets;
        if (!Array.isArray(data)) {
            throw new Error(`${apiUrl} format xato (tickets array emas)`);
        }

        return { data, url: apiUrl };
    } catch (apiError) {
        return fetchWebFallbackQuestionsDataset(lang, apiError);
    }
}

async function validateAnswerSelection(languageCode, quizMode, ticketNumber, questionIndex, answerIndex) {
    const nativeQuiz = await waitForNativeQuizPlugin();
    if (nativeQuiz && typeof nativeQuiz.submitAnswer === 'function') {
        try {
            const payload = await nativeQuiz.submitAnswer({
                language: normalizeAppLanguage(languageCode),
                mode: quizMode,
                ticketNumber,
                questionIndex,
                answerIndex,
            });

            if (payload?.ok && typeof payload.isCorrect === 'boolean') {
                return payload;
            }
        } catch (nativeError) {
            // Continue to API/local fallback.
        }
    }

    try {
        const response = await fetch(QUIZ_VALIDATE_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                language: normalizeAppLanguage(languageCode),
                mode: quizMode,
                ticketNumber,
                questionIndex,
                answerIndex
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const payload = await response.json();
        if (!payload?.ok || typeof payload.isCorrect !== 'boolean') {
            throw new Error('Invalid answer validation payload');
        }

        return payload;
    } catch (apiError) {
        throw apiError;
    }
}

async function submitQuizAttempt(languageCode, quizMode, ticketNumber, submittedAnswers) {
    const nativeQuiz = await waitForNativeQuizPlugin();
    if (nativeQuiz && typeof nativeQuiz.submitQuiz === 'function') {
        try {
            const payload = await nativeQuiz.submitQuiz({
                language: normalizeAppLanguage(languageCode),
                mode: quizMode,
                ticketNumber,
                answers: submittedAnswers,
            });

            if (payload?.ok && Array.isArray(payload.questionResults)) {
                return payload;
            }
        } catch (nativeError) {
            // Continue to API/local fallback.
        }
    }

    try {
        const response = await fetch(QUIZ_SUBMIT_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                language: normalizeAppLanguage(languageCode),
                mode: quizMode,
                ticketNumber,
                answers: submittedAnswers
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const payload = await response.json();
        if (!payload?.ok || !Array.isArray(payload.questionResults)) {
            throw new Error('Invalid quiz submit payload');
        }

        return payload;
    } catch (apiError) {
        throw apiError;
    }
}

async function loadBaseUzQuestionsData() {
    if (Array.isArray(baseUzQuestionsData) && baseUzQuestionsData.length > 0) {
        return baseUzQuestionsData;
    }

    const cachedUzData = questionsDataByLang.uz;
    if (Array.isArray(cachedUzData) && cachedUzData.length > 0) {
        baseUzQuestionsData = cachedUzData;
        return baseUzQuestionsData;
    }

    if (baseUzQuestionsPromise) {
        return baseUzQuestionsPromise;
    }

    baseUzQuestionsPromise = (async () => {
        const { data } = await fetchQuestionsDataset('uz');
        baseUzQuestionsData = data;
        return data;
    })();

    try {
        return await baseUzQuestionsPromise;
    } finally {
        baseUzQuestionsPromise = null;
    }
}

async function loadQuestionsData(languageCode = getCurrentLanguage()) {
    const lang = normalizeAppLanguage(languageCode);

    if (questionsDataReady && currentQuestionsLanguage === lang && Array.isArray(QUESTIONS) && QUESTIONS.length > 0) {
        return true;
    }

    const cachedDataset = questionsDataByLang[lang];
    if (Array.isArray(cachedDataset) && cachedDataset.length > 0) {
        applyQuestionsDataset(cachedDataset, lang);
        return true;
    }

    if (questionsLoadPromises[lang]) {
        return questionsLoadPromises[lang];
    }

    questionsLoadPromises[lang] = (async () => {
        try {
            const { data, url } = await fetchQuestionsDataset(lang);
            const shouldUseUzBaseRepair = !isLikelyNativeRuntime() && lang !== 'uz';
            const uzBaseData = shouldUseUzBaseRepair
                ? await loadBaseUzQuestionsData().catch(() => null)
                : null;
            const preparedData = lang === 'uz_cyrl'
                ? transformStructuredTextToUzCyrillic(data)
                : data;
            if (shouldUseUzBaseRepair && Array.isArray(uzBaseData) && uzBaseData.length > 0) {
                applyOriginalMarkerTokensFromUz(preparedData, uzBaseData);
            }
            applyQuestionsDataset(preparedData, lang);
            return true;
        } catch (error) {
            questionsDataReady = false;
            console.error('Questions load error:', error);
            return false;
        } finally {
            delete questionsLoadPromises[lang];
        }
    })();

    return questionsLoadPromises[lang];
}

function renderQuestionsLoadError() {
    const content = document.getElementById('main-page');
    if (!content) return;

    content.innerHTML = `
        <div class="coming-soon">
            <h2>${t('questions_load_error_title')}</h2>
            <p>${t('questions_load_error_text')}</p>
            <button class="btn btn-primary" onclick="window.location.reload()" style="margin-top: 24px;">${t('common_reload')}</button>
        </div>
    `;
}

function ensureQuestionsLoaded() {
    if (questionsDataReady) return true;
    alert(t('questions_not_ready'));
    return false;
}

document.addEventListener('DOMContentLoaded', async function () {
    initTheme();
    initAppSettings();
    initSettingsThemeOptions();
    initMobileSettingsSwitches();
    initIntroModal();
    initPrivacyPolicyModal();
    initNavigation();
    initMobileShareButton();
    initMobileHeaderBackButton();
    initAndroidBackButtonHandling();
    initNativePermissionHandling();
    initAppLifecycleOptimizations();

    const questionsLoaded = await loadQuestionsData(getCurrentLanguage());
    if (!questionsLoaded) {
        applyLanguageToInterface();
        renderQuestionsLoadError();
        return;
    }

    initSearchPage();
    initSignsPage();
    initFinesPage();
    backToMain();
    applyLanguageToInterface();
    loadSavedData();
    maybeOpenInitialIntro();
    // initDevtoolsProtection();
});

function getSavedTheme() {
    try {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme === 'light' || savedTheme === 'dark') {
            return savedTheme;
        }
    } catch (error) {
        console.warn('Theme read error:', error);
    }

    return null;
}

function getSystemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
}

function updateThemeColorMeta(theme) {
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMeta) return;
    themeColorMeta.setAttribute('content', theme === 'dark' ? THEME_COLOR_DARK : THEME_COLOR_LIGHT);
}

function syncNativeTheme(theme) {
    if (!window.Capacitor?.isNativePlatform?.()) {
        return;
    }

    try {
        window[NATIVE_PERMISSIONS_BRIDGE_NAME]?.setSystemBarsTheme?.(theme);
    } catch (error) {
        console.warn('Native theme sync error:', error);
    }
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeColorMeta(theme);
    syncNativeTheme(theme);
    updateThemeToggle(theme);
}

function saveThemePreference(theme) {
    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
        console.warn('Theme save error:', error);
    }
}

function applyThemePreference(theme) {
    setTheme(theme);
    saveThemePreference(theme);
}

function updateThemeToggle(theme) {
    const toggleButton = document.getElementById('theme-toggle');
    updateMobileThemeSwitch(theme);

    if (!toggleButton) {
        updateSettingsThemeSelection(theme);
        return;
    }

    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    const label = toggleButton.querySelector('.theme-toggle-label');
    if (label) {
        label.textContent = nextTheme === 'dark' ? t('theme_dark') : t('theme_light');
    }

    toggleButton.setAttribute('aria-label', t('theme_switch_to', {
        theme: nextTheme === 'dark' ? t('theme_dark') : t('theme_light')
    }));
    updateSettingsThemeSelection(theme);
}

function initTheme() {
    const initialTheme = getSavedTheme() || getSystemTheme();
    setTheme(initialTheme);

    const toggleButton = document.getElementById('theme-toggle');
    if (!toggleButton) return;

    toggleButton.addEventListener('click', function () {
        const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyThemePreference(nextTheme);
    });
}

function updateSettingsThemeSelection(theme) {
    const themeButtons = document.querySelectorAll('.settings-theme-btn[data-theme-option]');
    themeButtons.forEach((button) => {
        const isActive = button.dataset.themeOption === theme;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });
}

function getDefaultAppSettings() {
    return {
        notificationsEnabled: true,
        instantFeedback: true,
        quizFontSize: 'medium',
        language: 'uz'
    };
}

function normalizeQuizFontSize(value) {
    if (value === 'small' || value === 'medium' || value === 'large') {
        return value;
    }
    return 'medium';
}

function normalizeAppSettings(raw) {
    const defaults = getDefaultAppSettings();
    if (!raw || typeof raw !== 'object') return defaults;

    return {
        notificationsEnabled: typeof raw.notificationsEnabled === 'boolean'
            ? raw.notificationsEnabled
            : defaults.notificationsEnabled,
        instantFeedback: typeof raw.instantFeedback === 'boolean' ? raw.instantFeedback : defaults.instantFeedback,
        quizFontSize: normalizeQuizFontSize(raw.quizFontSize),
        language: normalizeAppLanguage(raw.language)
    };
}

function loadAppSettings() {
    try {
        const raw = localStorage.getItem(APP_SETTINGS_STORAGE_KEY);
        if (!raw) return getDefaultAppSettings();
        return normalizeAppSettings(JSON.parse(raw));
    } catch (error) {
        console.warn('App settings read error:', error);
        return getDefaultAppSettings();
    }
}

function saveAppSettings() {
    if (!appSettingsState) return;
    try {
        localStorage.setItem(APP_SETTINGS_STORAGE_KEY, JSON.stringify(appSettingsState));
    } catch (error) {
        console.warn('App settings save error:', error);
    }
}

function getAppSetting(key) {
    if (!appSettingsState) {
        appSettingsState = loadAppSettings();
    }
    return appSettingsState[key];
}

function applyQuizFontSizeSetting(size) {
    document.documentElement.setAttribute('data-quiz-font-size', normalizeQuizFontSize(size));
}

function updateInstantFeedbackSwitch() {
    const switchButton = document.getElementById('instant-feedback-switch');
    if (!switchButton) return;
    setMobileSwitchState(switchButton, Boolean(getAppSetting('instantFeedback')));
}

function getQuizFontSizeLabel(size) {
    const labels = {
        small: t('font_small'),
        medium: t('font_medium'),
        large: t('font_large')
    };
    return labels[normalizeQuizFontSize(size)];
}

function updateQuizFontSizeSettingUI() {
    const button = document.getElementById('font-size-setting-btn');
    const valueEl = document.getElementById('font-size-setting-value');
    const size = normalizeQuizFontSize(getAppSetting('quizFontSize'));
    const label = getQuizFontSizeLabel(size);

    if (valueEl) {
        valueEl.textContent = label;
    }

    if (button) {
        button.setAttribute('aria-label', t('settings_font_size_aria', { value: label }));
    }
}

function applyAppSettingsToUI() {
    applyQuizFontSizeSetting(getAppSetting('quizFontSize'));
    updateNotificationsSwitch();
    updateInstantFeedbackSwitch();
    updateQuizFontSizeSettingUI();
    updateLanguageSettingUI();
    applyLanguageToInterface();
}

function initAppSettings() {
    appSettingsState = loadAppSettings();
    applyAppSettingsToUI();
}

function setAppSetting(key, value) {
    if (!appSettingsState) {
        appSettingsState = loadAppSettings();
    }

    if (key === 'instantFeedback') {
        appSettingsState.instantFeedback = Boolean(value);
    } else if (key === 'notificationsEnabled') {
        appSettingsState.notificationsEnabled = Boolean(value);
    } else if (key === 'quizFontSize') {
        appSettingsState.quizFontSize = normalizeQuizFontSize(value);
    } else if (key === 'language') {
        appSettingsState.language = normalizeAppLanguage(value);
    } else {
        appSettingsState[key] = value;
    }

    saveAppSettings();
    applyAppSettingsToUI();
}

function cycleQuizFontSizeSetting() {
    const order = ['small', 'medium', 'large'];
    const current = normalizeQuizFontSize(getAppSetting('quizFontSize'));
    const currentIndex = order.indexOf(current);
    const next = order[(currentIndex + 1) % order.length];
    setAppSetting('quizFontSize', next);
}

function cycleLanguageSetting() {
    const current = normalizeAppLanguage(getAppSetting('language'));
    const currentIndex = UI_LANGUAGES.indexOf(current);
    const next = UI_LANGUAGES[(currentIndex + 1) % UI_LANGUAGES.length];
    setAppSetting('language', next);

    loadQuestionsData(next).then((loaded) => {
        if (!loaded) {
            return;
        }
        refreshLanguageDependentViews();
    });
}

function setMobileSwitchState(switchButton, isOn) {
    if (!switchButton) return;

    switchButton.classList.toggle('active', isOn);
    switchButton.setAttribute('aria-checked', String(isOn));
}

function updateMobileThemeSwitch(theme) {
    const mobileThemeSwitch = document.getElementById('mobile-theme-switch');
    if (!mobileThemeSwitch) return;

    const isDark = theme === 'dark';
    setMobileSwitchState(mobileThemeSwitch, isDark);
}

function initSettingsThemeOptions() {
    const themeButtons = document.querySelectorAll('.settings-theme-btn[data-theme-option]');
    if (themeButtons.length === 0) return;

    themeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const theme = button.dataset.themeOption;
            if (theme !== 'light' && theme !== 'dark') return;
            applyThemePreference(theme);
        });
    });

    const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    updateSettingsThemeSelection(currentTheme);
}

function initMobileSettingsSwitches() {
    const languageSettingButton = document.getElementById('language-setting-btn');
    if (languageSettingButton) {
        languageSettingButton.addEventListener('click', () => {
            cycleLanguageSetting();
        });
    }

    const mobileThemeSwitch = document.getElementById('mobile-theme-switch');
    if (mobileThemeSwitch) {
        mobileThemeSwitch.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyThemePreference(nextTheme);
        });

        const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        updateMobileThemeSwitch(currentTheme);
    }

    const notificationsSwitch = document.querySelector('.mobile-switch[data-toggle-local="notifications"]');
    if (notificationsSwitch) {
        notificationsSwitch.addEventListener('click', () => {
            if (isLikelyNativeRuntime() && !hasNativeNotificationPermission()) {
                requestNativeStartupPermissions();
                return;
            }

            const current = Boolean(getAppSetting('notificationsEnabled'));
            setAppSetting('notificationsEnabled', !current);
        });

        updateNotificationsSwitch();
    }

    const instantFeedbackSwitch = document.getElementById('instant-feedback-switch');
    if (instantFeedbackSwitch) {
        instantFeedbackSwitch.addEventListener('click', () => {
            const current = Boolean(getAppSetting('instantFeedback'));
            setAppSetting('instantFeedback', !current);
        });

        updateInstantFeedbackSwitch();
    }

    const fontSizeButton = document.getElementById('font-size-setting-btn');
    if (fontSizeButton) {
        fontSizeButton.addEventListener('click', () => {
            cycleQuizFontSizeSetting();
        });

        updateQuizFontSizeSettingUI();
    }

    const appIntroButton = document.getElementById('app-intro-btn');
    if (appIntroButton) {
        appIntroButton.addEventListener('click', () => {
            openIntroModal();
        });
    }

    const telegramContactButton = document.getElementById('telegram-contact-btn');
    if (telegramContactButton) {
        telegramContactButton.addEventListener('click', () => {
            const telegramWebUrl = 'https://t.me/Ogabek_507';
            const telegramDeepLink = 'tg://resolve?domain=Ogabek_507';
            let appOpened = false;

            const handleVisibilityChange = () => {
                if (document.hidden) {
                    appOpened = true;
                }
            };

            document.addEventListener('visibilitychange', handleVisibilityChange, { once: true });

            window.location.href = telegramDeepLink;

            window.setTimeout(() => {
                if (!appOpened && !document.hidden) {
                    window.location.href = telegramWebUrl;
                }
            }, 1200);
        });
    }

    const termsPolicyButton = document.getElementById('terms-policy-btn');
    if (termsPolicyButton) {
        termsPolicyButton.addEventListener('click', () => {
            openPrivacyPolicyModal();
        });
    }

    const localSwitches = document.querySelectorAll('.mobile-switch[data-toggle-local]');
    localSwitches.forEach((switchButton) => {
        if (
            switchButton.id === 'instant-feedback-switch' ||
            switchButton.dataset.toggleLocal === 'notifications'
        ) {
            return;
        }

        switchButton.addEventListener('click', () => {
            const isOn = switchButton.getAttribute('aria-checked') === 'true';
            setMobileSwitchState(switchButton, !isOn);
        });
    });
}

function hasSeenAppIntro() {
    try {
        return Number(localStorage.getItem(APP_INTRO_STORAGE_KEY)) >= APP_INTRO_VERSION;
    } catch (error) {
        console.warn('App intro read error:', error);
        return false;
    }
}

function markAppIntroSeen() {
    try {
        localStorage.setItem(APP_INTRO_STORAGE_KEY, String(APP_INTRO_VERSION));
    } catch (error) {
        console.warn('App intro save error:', error);
    }
}

function getAppIntroSteps() {
    return [
        {
            imageSrc: 'images/1-ombargo.jpg',
            title: t('intro_1_title'),
            text: t('intro_1_text'),
            buttonLabel: t('intro_next')
        },
        {
            imageSrc: 'images/2-ombargo.jpg',
            title: t('intro_2_title'),
            text: t('intro_2_text'),
            buttonLabel: t('intro_next')
        },
        {
            imageSrc: 'images/3-ombargo.jpg',
            title: t('intro_3_title'),
            text: t('intro_3_text'),
            buttonLabel: t('intro_start')
        }
    ];
}

function focusIntroPrimaryAction() {
    const button = document.querySelector('#intro-modal .intro-btn-primary');
    if (button) {
        button.focus();
    }
}

function renderIntroModal() {
    const modal = document.getElementById('intro-modal');
    if (!modal) return;

    const steps = getAppIntroSteps();
    const totalSteps = steps.length;
    introCurrentStep = Math.max(0, Math.min(introCurrentStep, totalSteps - 1));
    const currentStep = steps[introCurrentStep];
    const primaryAction = introCurrentStep === totalSteps - 1 ? 'start' : 'next';
    const primaryLabel = currentStep.buttonLabel;

    modal.innerHTML = `
        <section class="intro-modal-panel" role="dialog" aria-modal="true" aria-label="${escapeHtml(currentStep.title)}" data-intro-step="${introCurrentStep + 1}">
            <header class="intro-modal-head">
                <div class="intro-progress" role="img" aria-label="${escapeHtml(t('intro_step_label', { current: introCurrentStep + 1, total: totalSteps }))}">
                    ${steps.map((_, index) => `
                        <span class="intro-progress-segment${index === introCurrentStep ? ' active' : ''}${index < introCurrentStep ? ' done' : ''}"></span>
                    `).join('')}
                </div>
            </header>
            <div class="intro-modal-body">
                <div class="intro-hero">
                    <div class="intro-illustration-wrap">
                        <img class="intro-hero-illustration" src="${escapeHtml(currentStep.imageSrc)}" alt="" loading="eager" decoding="async">
                    </div>
                </div>
            </div>
            <footer class="intro-modal-footer">
                <button type="button" class="intro-btn intro-btn-primary intro-btn-full" data-intro-action="${primaryAction}">${escapeHtml(primaryLabel)}</button>
            </footer>
        </section>
    `;
}

function closeIntroModal(options = {}) {
    const modal = document.getElementById('intro-modal');
    if (!modal) return;

    if (options.markSeen !== false) {
        markAppIntroSeen();
    }

    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = '';
    document.body.classList.remove('intro-modal-open');
}

function openIntroModal() {
    const modal = document.getElementById('intro-modal');
    if (!modal) return;

    introCurrentStep = 0;
    renderIntroModal();
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('intro-modal-open');

    window.requestAnimationFrame(() => {
        focusIntroPrimaryAction();
    });
}

function stepIntroModal(direction) {
    const steps = getAppIntroSteps();
    const nextStep = introCurrentStep + direction;
    if (nextStep < 0 || nextStep >= steps.length) return;

    introCurrentStep = nextStep;
    renderIntroModal();

    window.requestAnimationFrame(() => {
        focusIntroPrimaryAction();
    });
}

function refreshIntroModalIfOpen() {
    const modal = document.getElementById('intro-modal');
    if (!modal || modal.hidden) return;

    renderIntroModal();
}

function maybeOpenInitialIntro() {
    if (hasSeenAppIntro()) return;

    window.setTimeout(() => {
        if (document.body.classList.contains('quiz-active')) return;
        openIntroModal();
    }, 180);
}

function initIntroModal() {
    const modal = document.getElementById('intro-modal');
    if (!modal) return;

    modal.addEventListener('click', (event) => {
        const actionButton = event.target.closest('[data-intro-action]');
        if (!actionButton) return;

        const action = actionButton.dataset.introAction;
        if (action === 'close' || action === 'skip' || action === 'start') {
            closeIntroModal();
            return;
        }

        if (action === 'prev') {
            stepIntroModal(-1);
            return;
        }

        if (action === 'next') {
            stepIntroModal(1);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape' || modal.hidden) return;
        closeIntroModal();
    });
}

function updatePrivacyPolicyModalText() {
    setTextIfExists('#privacy-policy-title', t('policy_title'));
    setTextIfExists('#privacy-policy-p1', t('policy_text_1'));
    setTextIfExists('#privacy-policy-p2', t('policy_text_2'));
    setTextIfExists('#privacy-policy-p3', t('policy_text_3'));
    setTextIfExists('#privacy-policy-p4', t('policy_text_4'));
    setAttrIfExists('#privacy-policy-modal .policy-modal-backdrop', 'aria-label', t('policy_close'));
    setAttrIfExists('#privacy-policy-modal .policy-modal-close', 'aria-label', t('policy_close'));
}

function closePrivacyPolicyModal() {
    const modal = document.getElementById('privacy-policy-modal');
    if (!modal) return;

    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('policy-modal-open');
}

function openPrivacyPolicyModal() {
    const modal = document.getElementById('privacy-policy-modal');
    if (!modal) return;

    updatePrivacyPolicyModalText();
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('policy-modal-open');

    const closeButton = modal.querySelector('.policy-modal-close');
    if (closeButton) {
        closeButton.focus();
    }
}

function initPrivacyPolicyModal() {
    const modal = document.getElementById('privacy-policy-modal');
    if (!modal) return;

    const closeButtons = modal.querySelectorAll('[data-policy-close]');
    closeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            closePrivacyPolicyModal();
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape' || modal.hidden) return;
        closePrivacyPolicyModal();
    });
}

function updateLanguageSettingUI() {
    const languageButton = document.getElementById('language-setting-btn');
    const languageValue = document.getElementById('language-setting-value');
    const label = getLanguageLabel(getCurrentLanguage());

    if (languageValue) {
        languageValue.textContent = label;
    }

    if (languageButton) {
        languageButton.setAttribute('aria-label', t('settings_language_aria', { value: label }));
    }
}

function setTextIfExists(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
}

function setAttrIfExists(selector, attr, value) {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
}

function applyStaticInterfaceTranslations() {
    document.documentElement.lang = getDocumentLanguageTag();
    document.title = t('app_title');

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
        descriptionMeta.setAttribute('content', t('app_description'));
    }

    setTextIfExists('.logo span', t('app_logo'));
    setTextIfExists('.nav-item[data-page="main"] span', t('nav_main'));
    setTextIfExists('.nav-item[data-page="signs"] span', t('nav_signs'));
    setTextIfExists('.nav-item[data-page="search"] span', t('nav_search'));
    setTextIfExists('.nav-item[data-page="fines"] span', t('nav_fines'));
    setTextIfExists('.nav-item[data-page="settings"] span', t('nav_settings'));
    setAttrIfExists('#mobile-header-back-btn', 'aria-label', t('common_back'));
    setAttrIfExists('#mobile-share-btn', 'aria-label', t('common_share'));

    const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    updateThemeToggle(currentTheme);
    updateLanguageSettingUI();
    updateQuizFontSizeSettingUI();

    // Signs page
    renderSignsPage();

    // Search page
    setTextIfExists('label[for="search-text-input"]', t('search_label_text'));
    setTextIfExists('label[for="search-ticket-input"]', t('search_label_ticket'));
    setAttrIfExists('#search-text-input', 'placeholder', t('search_placeholder_text'));
    setAttrIfExists('#search-ticket-input', 'placeholder', t('search_placeholder_ticket'));
    setTextIfExists('#search-form .search-btn-primary', t('common_search'));
    setTextIfExists('#search-clear-btn', t('common_clear'));
    const statusEl = document.getElementById('search-status');
    if (
        statusEl && (
            statusEl.textContent.trim() === '' ||
            statusEl.textContent.includes('Savol matni') ||
            statusEl.textContent.includes('Савол матни') ||
            statusEl.textContent.includes('Введите') ||
            statusEl.textContent.includes('Матни савол')
        )
    ) {
        statusEl.textContent = t('search_status_default');
    }

    // Fines page initial fallback (dynamic render handles populated page)
    setTextIfExists('#fines-page .coming-soon h2', t('fines_title'));
    setTextIfExists('#fines-page .coming-soon p', t('common_coming_soon'));

    // Settings page (desktop top card)
    setTextIfExists('#settings-page .settings-panel h2', t('theme_panel_title'));
    setTextIfExists('#settings-page .settings-panel p', t('theme_panel_desc'));
    setAttrIfExists('#settings-page .settings-theme-group', 'aria-label', t('theme_select_group'));
    const themeButtons = document.querySelectorAll('#settings-page .settings-theme-btn[data-theme-option]');
    themeButtons.forEach((btn) => {
        if (btn.dataset.themeOption === 'light') btn.textContent = t('theme_light');
        if (btn.dataset.themeOption === 'dark') btn.textContent = t('theme_dark');
    });

    // Settings mobile layout labels
    setAttrIfExists('#settings-page .settings-mobile-layout', 'aria-label', t('settings_mobile_layout_aria'));
    const sectionTitles = document.querySelectorAll('#settings-page .settings-mobile-section-title');
    if (sectionTitles[0]) sectionTitles[0].textContent = t('settings_section_app');
    if (sectionTitles[1]) sectionTitles[1].textContent = t('settings_section_exam');
    if (sectionTitles[2]) sectionTitles[2].textContent = t('settings_section_support');

    const languageLabelEl = document.querySelector('#language-setting-btn .settings-mobile-row-label');
    if (languageLabelEl) languageLabelEl.textContent = t('settings_language');

    const introLabelEl = document.querySelector('#app-intro-btn .settings-mobile-row-label');
    if (introLabelEl) introLabelEl.textContent = t('settings_intro');
    setAttrIfExists('#app-intro-btn', 'aria-label', t('settings_intro'));

    const mobileThemeRow = document.getElementById('mobile-theme-switch')?.closest('.settings-mobile-row');
    if (mobileThemeRow) {
        const label = mobileThemeRow.querySelector('.settings-mobile-row-label');
        if (label) label.textContent = t('settings_dark_mode');
    }
    setAttrIfExists('#mobile-theme-switch', 'aria-label', t('settings_dark_mode'));

    const notificationsSwitch = document.querySelector('.mobile-switch[data-toggle-local="notifications"]');
    const notificationsRow = notificationsSwitch?.closest('.settings-mobile-row');
    if (notificationsRow) {
        const label = notificationsRow.querySelector('.settings-mobile-row-label');
        if (label) label.textContent = t('settings_notifications');
    }
    if (notificationsSwitch) notificationsSwitch.setAttribute('aria-label', t('settings_notifications'));

    const instantRow = document.getElementById('instant-feedback-switch')?.closest('.settings-mobile-row');
    if (instantRow) {
        const label = instantRow.querySelector('.settings-mobile-row-label');
        const hint = instantRow.querySelector('.settings-mobile-row-hint');
        if (label) label.textContent = t('settings_instant_feedback');
        if (hint) hint.textContent = t('settings_instant_feedback_hint');
    }
    setAttrIfExists('#instant-feedback-switch', 'aria-label', t('settings_instant_feedback'));

    const fontSizeRow = document.getElementById('font-size-setting-btn');
    if (fontSizeRow) {
        const label = fontSizeRow.querySelector('.settings-mobile-row-label');
        if (label) label.textContent = t('settings_font_size');
    }

    const supportRows = document.querySelectorAll('#settings-page .settings-mobile-section:nth-of-type(3) .settings-mobile-card .settings-mobile-row');
    if (supportRows[0]) {
        const label = supportRows[0].querySelector('.settings-mobile-row-label');
        if (label) label.textContent = t('settings_rate_app');
        supportRows[0].setAttribute('aria-label', t('settings_rate_app'));
    }
    if (supportRows[1]) {
        const label = supportRows[1].querySelector('.settings-mobile-row-label');
        if (label) label.textContent = t('settings_contact_telegram');
        supportRows[1].setAttribute('aria-label', t('settings_contact_telegram'));
    }
    if (supportRows[2]) {
        const label = supportRows[2].querySelector('.settings-mobile-row-label');
        if (label) label.textContent = t('settings_terms');
        supportRows[2].setAttribute('aria-label', t('settings_terms'));
    }
    if (supportRows[3]) {
        const label = supportRows[3].querySelector('.settings-mobile-row-label');
        if (label) label.textContent = t('settings_version');
        supportRows[3].setAttribute('aria-label', t('settings_version_aria'));
    }

    updatePrivacyPolicyModalText();
    refreshIntroModalIfOpen();
}

function refreshLanguageDependentViews() {
    if (!questionsDataReady) return;

    if (document.body.classList.contains('quiz-active') && currentTicket !== null) {
        showQuestion();
        return;
    }

    if (mainPageViewState?.type === 'tickets') {
        showTicketsList(mainPageViewState.start, mainPageViewState.end, mainPageViewState.title, {
            ticketMode: mainPageViewState.ticketMode,
            titleKey: mainPageViewState.titleKey
        });
    } else if (mainPageViewState?.type === 'wrongAnswers') {
        openWrongAnswers();
    } else if (mainPageViewState?.type === 'bookmarks') {
        openBookmarks();
    } else if (mainPageViewState?.type === 'home') {
        backToMain();
    }

    renderSignsPage();
    renderFinesPage();
    refreshSearchUIOnOpen();
}

function applyLanguageToInterface() {
    applyStaticInterfaceTranslations();
    setActivePage(document.querySelector('.nav-item.active')?.dataset.page || 'main');
    refreshLanguageDependentViews();
}

function printDevtoolsWarning() {
    const style = [
        'background:#0a1fff',
        'color:#f8ff31',
        'font-size:44px',
        'font-style:italic',
        'font-family:monospace',
        'line-height:1.22',
        'padding:14px 18px'
    ].join(';');

    const warningText = t('devtools_console_warning');

    console.clear();
    console.log('%c' + warningText, style);
}

function isDevToolsLikelyOpen() {
    const widthGap = Math.abs(window.outerWidth - window.innerWidth);
    const heightGap = Math.abs(window.outerHeight - window.innerHeight);
    return widthGap > DEVTOOLS_SIZE_THRESHOLD || heightGap > DEVTOOLS_SIZE_THRESHOLD;
}

function isLikelyMobileBrowser() {
    const ua = navigator.userAgent || '';
    const hasTouchInput = navigator.maxTouchPoints > 0 || ('ontouchstart' in window);
    const isSmallViewport = window.matchMedia && window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
    const isMobileUserAgent = /Android|iPhone|iPad|iPod|Mobile|CriOS|FxiOS|EdgiOS/i.test(ua);

    return isSmallViewport || (hasTouchInput && isMobileUserAgent);
}

function lockAppForInspection() {
    if (devtoolsLockActive) return;
    devtoolsLockActive = true;

    if (devtoolsWatchId !== null) {
        window.clearInterval(devtoolsWatchId);
        devtoolsWatchId = null;
    }

    clearMobileCarouselTimer();
    stopTimer();
    printDevtoolsWarning();

    document.body.classList.remove('quiz-active');
    document.body.innerHTML = `
        <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; background: #f2f5f8; font-family: Manrope, sans-serif;">
            <div style="width: min(420px, 100%); background: #ffffff; border: 1px solid #dce5ee; border-radius: 16px; padding: 28px 20px; text-align: center;">
                <h2 style="margin: 0 0 10px; color: #12263a; font-size: 25px; font-weight: 700;">${t('devtools_lock_title')}</h2>
                <p style="margin: 0; color: #4c6279; font-size: 17px; line-height: 1.5;">
                    ${t('devtools_lock_text')}
                </p>
                <p style="margin: 10px 0 0; color: #4c6279; font-size: 15px; line-height: 1.5;">
                    ${t('devtools_lock_reload')}
                </p>
            </div>
        </div>
    `;
}

function initDevtoolsProtection() {
    printDevtoolsWarning();

    // Mobile browsers can trigger false positives because browser UI chrome
    // changes viewport metrics dynamically while scrolling.
    if (isLikelyMobileBrowser()) {
        return;
    }

    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });

    document.addEventListener('keydown', function (event) {
        const key = (event.key || '').toLowerCase();
        const inspectShortcut =
            event.key === 'F12' ||
            (event.ctrlKey && event.shiftKey && (key === 'i' || key === 'j' || key === 'c' || key === 'k')) ||
            (event.metaKey && event.altKey && (key === 'i' || key === 'j' || key === 'c')) ||
            (event.ctrlKey && key === 'u');

        if (!inspectShortcut) return;

        event.preventDefault();
        event.stopPropagation();
        lockAppForInspection();
    }, true);

    if (isDevToolsLikelyOpen()) {
        lockAppForInspection();
        return;
    }

    devtoolsWatchId = window.setInterval(function () {
        if (isDevToolsLikelyOpen()) {
            lockAppForInspection();
        }
    }, DEVTOOLS_CHECK_INTERVAL_MS);
}

// Navigation between pages
function setActivePage(pageName) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((nav) => {
        nav.classList.toggle('active', nav.dataset.page === pageName);
    });

    const titles = {
        'main': t('page_main'),
        'signs': t('page_signs'),
        'search': t('page_search'),
        'fines': t('page_fines'),
        'settings': t('page_settings')
    };
    const subtitles = {
        'main': '',
        'signs': '',
        'search': t('page_search_subtitle'),
        'fines': t('page_fines_subtitle'),
        'settings': t('page_settings_subtitle')
    };

    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
        pageTitle.textContent = titles[pageName] || t('page_main');
    }
    const pageSubtitle = document.getElementById('page-subtitle');
    if (pageSubtitle) {
        pageSubtitle.textContent = Object.prototype.hasOwnProperty.call(subtitles, pageName)
            ? subtitles[pageName]
            : t('page_main_subtitle');
    }

    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => {
        section.classList.toggle('active', section.id === pageName + '-page');
    });

    if (pageName === 'main') {
        initMobileCarousel();
    } else {
        clearMobileCarouselTimer();
    }

    if (pageName === 'search') {
        refreshSearchUIOnOpen();
    }

    if (pageName === 'signs') {
        renderSignsPage();
    }

    updateMobileHeaderBackButton();
    updateHeaderDesktopActions();
}

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            if (document.body.classList.contains('quiz-active')) {
                exitQuiz();
            }
            setActivePage(this.dataset.page);
        });
    });
}

function clearMobileCarouselTimer() {
    if (mobileCarouselTimerId !== null) {
        window.clearInterval(mobileCarouselTimerId);
        mobileCarouselTimerId = null;
    }
}

function initMobileCarousel() {
    if (mobileCarouselController && typeof mobileCarouselController.destroy === 'function') {
        mobileCarouselController.destroy();
        mobileCarouselController = null;
    }

    clearMobileCarouselTimer();

    const carousel = document.querySelector('#main-page [data-mobile-carousel]');
    if (!carousel) return;

    const track = carousel.querySelector('.mobile-carousel-track');
    const slides = Array.from(carousel.querySelectorAll('.mobile-carousel-slide'));
    const dots = Array.from(carousel.querySelectorAll('.mobile-carousel-dot'));
    const previousButton = carousel.querySelector('[data-carousel-prev]');
    const nextButton = carousel.querySelector('[data-carousel-next]');

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    const updateCarousel = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    };

    const goToSlide = (newIndex) => {
        currentIndex = (newIndex + totalSlides) % totalSlides;
        updateCarousel();
    };

    const startAutoplay = () => {
        if (totalSlides < 2 || !isMainHomeViewActive()) return;
        clearMobileCarouselTimer();
        mobileCarouselTimerId = window.setInterval(() => {
            if (!isMainHomeViewActive()) {
                clearMobileCarouselTimer();
                return;
            }
            goToSlide(currentIndex + 1);
        }, MOBILE_CAROUSEL_INTERVAL_MS);
    };

    const restartAutoplay = () => {
        startAutoplay();
    };

    const handlePreviousClick = () => {
        goToSlide(currentIndex - 1);
        restartAutoplay();
    };

    const handleNextClick = () => {
        goToSlide(currentIndex + 1);
        restartAutoplay();
    };

    previousButton?.addEventListener('click', handlePreviousClick);
    nextButton?.addEventListener('click', handleNextClick);

    const dotHandlers = dots.map((dot) => {
        const handler = () => {
            const targetIndex = Number(dot.dataset.slide || 0);
            goToSlide(targetIndex);
            restartAutoplay();
        };
        dot.addEventListener('click', handler);
        return { dot, handler };
    });

    const handleTouchStart = () => clearMobileCarouselTimer();
    const handleTouchEnd = () => startAutoplay();

    carousel.addEventListener('touchstart', handleTouchStart, { passive: true });
    carousel.addEventListener('touchend', handleTouchEnd);

    updateCarousel();
    startAutoplay();

    mobileCarouselController = {
        startAutoplay,
        stopAutoplay: clearMobileCarouselTimer,
        destroy() {
            clearMobileCarouselTimer();
            previousButton?.removeEventListener('click', handlePreviousClick);
            nextButton?.removeEventListener('click', handleNextClick);
            dotHandlers.forEach(({ dot, handler }) => {
                dot.removeEventListener('click', handler);
            });
            carousel.removeEventListener('touchstart', handleTouchStart);
            carousel.removeEventListener('touchend', handleTouchEnd);
        }
    };
}

async function shareCurrentPage() {
    const shareData = {
        title: document.title,
        text: t('share_text'),
        url: window.location.href
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
            return;
        }

        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(shareData.url);
            alert(t('share_link_copied'));
            return;
        }

        const fallbackInput = document.createElement('textarea');
        fallbackInput.value = shareData.url;
        fallbackInput.style.position = 'fixed';
        fallbackInput.style.opacity = '0';
        document.body.appendChild(fallbackInput);
        fallbackInput.select();
        document.execCommand('copy');
        document.body.removeChild(fallbackInput);
        alert(t('share_link_copied'));
    } catch (error) {
        if (error && error.name === 'AbortError') {
            return;
        }
        console.warn('Share error:', error);
    }
}

function initMobileShareButton() {
    const shareButton = document.getElementById('mobile-share-btn');
    if (!shareButton) return;
    shareButton.addEventListener('click', shareCurrentPage);
}

function updateMobileHeaderBackButton() {
    const header = document.querySelector('.header');
    const backButton = document.getElementById('mobile-header-back-btn');
    const mainPage = document.getElementById('main-page');
    const signsPage = document.getElementById('signs-page');
    if (!header || !backButton || !mainPage || !signsPage) return;

    const isMainPageActive = mainPage.classList.contains('active');
    const isSignsPageActive = signsPage.classList.contains('active');
    const isSignsDetailOpen = isSignsPageActive && signsViewState.type === 'category';
    const shouldShow = !document.body.classList.contains('quiz-active')
        && (
            (isMainPageActive && mainPageViewState?.type && mainPageViewState.type !== 'home')
            || isSignsDetailOpen
        );

    header.classList.toggle('has-mobile-back', shouldShow);
    backButton.hidden = !shouldShow;
    backButton.setAttribute('aria-hidden', String(!shouldShow));
}

function initMobileHeaderBackButton() {
    const backButton = document.getElementById('mobile-header-back-btn');
    if (!backButton) return;

    backButton.hidden = true;
    backButton.setAttribute('aria-hidden', 'true');

    backButton.addEventListener('click', () => {
        const signsPage = document.getElementById('signs-page');
        if (signsPage?.classList.contains('active') && signsViewState.type === 'category') {
            backToSignsCategories();
            updateMobileHeaderBackButton();
            return;
        }

        if (mainPageViewState?.type && mainPageViewState.type !== 'home') {
            backToMain();
        }
    });

    updateMobileHeaderBackButton();
}

function getActivePageName() {
    const activeSection = document.querySelector('.content-section.active');
    if (!activeSection || typeof activeSection.id !== 'string') {
        return 'main';
    }

    return activeSection.id.endsWith('-page')
        ? activeSection.id.slice(0, -5)
        : activeSection.id;
}

function isMainHomeViewActive() {
    return (
        !document.hidden &&
        !document.body.classList.contains('quiz-active') &&
        getActivePageName() === 'main' &&
        mainPageViewState?.type === 'home'
    );
}

function handleInAppBackNavigation() {
    const privacyModal = document.getElementById('privacy-policy-modal');
    if (privacyModal && !privacyModal.hidden) {
        closePrivacyPolicyModal();
        return true;
    }

    if (document.body.classList.contains('quiz-active')) {
        exitQuiz();
        return true;
    }

    const activePageName = getActivePageName();

    if (activePageName === 'signs' && signsViewState.type === 'category') {
        backToSignsCategories();
        return true;
    }

    if (activePageName !== 'main') {
        setActivePage('main');
        return true;
    }

    if (mainPageViewState?.type && mainPageViewState.type !== 'home') {
        backToMain();
        return true;
    }

    return false;
}

function initAndroidBackButtonHandling() {
    if (backButtonListenerBound) return;
    backButtonListenerBound = true;

    const handleBackPress = () => handleInAppBackNavigation();
    const capacitorApp =
        window?.Capacitor?.Plugins?.App ||
        window?.Capacitor?.Plugins?.CapacitorApp ||
        window?.CapacitorApp;
    const handleBackButtonEvent = (event) => {
        const now = Date.now();
        if (now - lastBackButtonHandledAt < BACK_BUTTON_DEDUP_WINDOW_MS) {
            if (event && typeof event.preventDefault === 'function') {
                event.preventDefault();
            }
            return;
        }

        lastBackButtonHandledAt = now;

        const handled = handleBackPress();
        if (handled) {
            if (event && typeof event.preventDefault === 'function') {
                event.preventDefault();
            }
            return;
        }

        if (event?.canGoBack && window.history.length > 1) {
            window.history.back();
            return;
        }

        if (typeof capacitorApp?.exitApp === 'function') {
            capacitorApp.exitApp();
        }
    };

    if (capacitorApp && typeof capacitorApp.addListener === 'function') {
        capacitorApp.addListener('backButton', handleBackButtonEvent);
        return;
    }

    document.addEventListener('backbutton', handleBackButtonEvent, false);
}

function getSearchElements() {
    return {
        form: document.getElementById('search-form'),
        textInput: document.getElementById('search-text-input'),
        ticketInput: document.getElementById('search-ticket-input'),
        clearButton: document.getElementById('search-clear-btn'),
        status: document.getElementById('search-status'),
        results: document.getElementById('search-results')
    };
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function normalizeSearchText(value) {
    return String(value || '')
        .toLocaleLowerCase(getUiLowercaseLocale())
        .replace(/\s+/g, ' ')
        .trim();
}

function isPlaceholderQuestion(question) {
    if (!question || typeof question.question !== 'string') return true;

    if (question.question.includes('(Savolni bu yerga kiriting)')) {
        return true;
    }

    const answers = Array.isArray(question.answers) ? question.answers : [];
    const hasRealAnswer = answers.some((answer) => {
        return typeof answer === 'string' && !answer.includes('(Javobni kiriting)');
    });

    return !hasRealAnswer;
}

function buildSearchIndex() {
    if (Array.isArray(searchIndexCache)) {
        return searchIndexCache;
    }

    const index = [];

    if (!Array.isArray(QUESTIONS)) {
        searchIndexCache = index;
        return index;
    }

    QUESTIONS.forEach((ticket, ticketIndex) => {
        const ticketNumber = Number(ticket?.ticketNumber) || (ticketIndex + 1);
        const ticketQuestions = Array.isArray(ticket?.questions) ? ticket.questions : [];

        ticketQuestions.forEach((question, questionIndex) => {
            if (isPlaceholderQuestion(question)) return;

            const questionText = typeof question.question === 'string' ? question.question : '';
            const answers = Array.isArray(question.answers)
                ? question.answers.filter((answer) => typeof answer === 'string' && !answer.includes('(Javobni kiriting)'))
                : [];

            index.push({
                ticketNumber,
                questionIndex,
                questionNumber: questionIndex + 1,
                questionText,
                answers,
                hasImage: Boolean(question.image),
                searchableText: normalizeSearchText([questionText, ...answers].join(' '))
            });
        });
    });

    searchIndexCache = index;
    return index;
}

function buildSearchResultMarkup(item) {
    const answersPreview = item.answers.slice(0, 2).join(' | ');
    const answersHtml = answersPreview
        ? `
            <div class="search-result-answers">
                <strong>${t('common_answer_variants')}:</strong> ${escapeHtml(answersPreview)}
            </div>
        `
        : '';

    const imageNoteHtml = item.hasImage
        ? `<div class="search-result-note">${t('common_image_exists')}</div>`
        : '';

    return `
        <button
            type="button"
            class="search-result-item"
            data-search-open="1"
            data-ticket-number="${item.ticketNumber}"
            data-question-index="${item.questionIndex}"
            aria-label="${escapeHtml(t('search_result_open_aria', { ticket: item.ticketNumber, question: item.questionNumber }))}"
        >
            <div class="search-result-top">
                <div class="search-result-badge">
                    <span class="search-chip">${t('common_ticket')} ${item.ticketNumber}</span>
                    <span class="search-chip">${t('common_question')} ${item.questionNumber}</span>
                </div>
                <span class="search-result-arrow" aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M7 4l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </span>
            </div>
            <p class="search-result-question">${escapeHtml(item.questionText)}</p>
            ${answersHtml}
            ${imageNoteHtml}
        </button>
    `;
}

async function renderSearchResults() {
    const ui = getSearchElements();
    if (!ui.form || !ui.textInput || !ui.ticketInput || !ui.status || !ui.results) {
        return;
    }

    const textQueryRaw = ui.textInput.value || '';
    const normalizedTextQuery = normalizeSearchText(textQueryRaw);
    const textTokens = normalizedTextQuery ? normalizedTextQuery.split(' ') : [];

    const ticketRaw = (ui.ticketInput.value || '').trim();
    const hasTicketFilter = ticketRaw !== '';
    const ticketNumber = hasTicketFilter ? Number(ticketRaw) : null;
    const validTicketNumber = Number.isInteger(ticketNumber) && ticketNumber > 0;

    ui.results.innerHTML = '';
    if (!normalizedTextQuery && !hasTicketFilter) {
        ui.status.textContent = t('search_status_default');
        return;
    }

    if (hasTicketFilter && !validTicketNumber) {
        ui.status.textContent = t('search_invalid_ticket_status');
        return;
    }

    if (normalizedTextQuery && normalizedTextQuery.length < 2 && !validTicketNumber) {
        ui.status.textContent = t('search_short_query_status');
        return;
    }

    const requestToken = ++searchRequestToken;
    if (isLikelyNativeRuntime()) {
        try {
            const nativeSearch = await runNativeSearchQuery(
                getCurrentLanguage(),
                textQueryRaw.trim(),
                validTicketNumber ? ticketNumber : null
            );

            if (requestToken !== searchRequestToken) {
                return;
            }

            if (nativeSearch) {
                const results = Array.isArray(nativeSearch.results) ? nativeSearch.results : [];
                const totalCount = Number.isInteger(nativeSearch.totalCount) ? nativeSearch.totalCount : results.length;
                const isLimited = totalCount > results.length;

                if (totalCount === 0) {
                    ui.status.textContent = t('search_no_results_status');
                    return;
                }

                ui.results.innerHTML = results.map(buildSearchResultMarkup).join('');

                const statusParts = [];
                if (validTicketNumber) statusParts.push(t('search_status_ticket', { ticket: ticketNumber }));
                if (normalizedTextQuery) statusParts.push(t('search_status_text', { text: textQueryRaw.trim() }));
                statusParts.push(t('search_status_results', { count: totalCount }));
                if (isLimited) statusParts.push(t('search_status_limited', { limit: SEARCH_RESULTS_LIMIT }));
                ui.status.textContent = statusParts.join(' • ');
                return;
            }
        } catch (nativeError) {
            if (requestToken !== searchRequestToken) {
                return;
            }
            // Fall through to the web dataset path when native search is unavailable.
        }
    }

    const index = buildSearchIndex();
    let results = index.filter((item) => {
        if (validTicketNumber && item.ticketNumber !== ticketNumber) {
            return false;
        }

        if (textTokens.length === 0) {
            return true;
        }

        return textTokens.every((token) => item.searchableText.includes(token));
    });

    if (textTokens.length > 0) {
        results = results
            .map((item) => {
                const normalizedQuestion = normalizeSearchText(item.questionText);
                let score = 0;

                if (normalizedQuestion.startsWith(normalizedTextQuery)) score += 3;
                if (normalizedQuestion.includes(normalizedTextQuery)) score += 2;
                if (item.searchableText.includes(normalizedTextQuery)) score += 1;
                if (validTicketNumber) score += 2;

                return { item, score };
            })
            .sort((a, b) => {
                if (b.score !== a.score) return b.score - a.score;
                if (a.item.ticketNumber !== b.item.ticketNumber) return a.item.ticketNumber - b.item.ticketNumber;
                return a.item.questionIndex - b.item.questionIndex;
            })
            .map((entry) => entry.item);
    } else {
        results.sort((a, b) => {
            if (a.ticketNumber !== b.ticketNumber) return a.ticketNumber - b.ticketNumber;
            return a.questionIndex - b.questionIndex;
        });
    }

    const limitedResults = results.slice(0, SEARCH_RESULTS_LIMIT);
    const isLimited = results.length > limitedResults.length;

    if (results.length === 0) {
        ui.status.textContent = t('search_no_results_status');
        return;
    }

    ui.results.innerHTML = limitedResults.map(buildSearchResultMarkup).join('');

    const statusParts = [];
    if (validTicketNumber) statusParts.push(t('search_status_ticket', { ticket: ticketNumber }));
    if (normalizedTextQuery) statusParts.push(t('search_status_text', { text: textQueryRaw.trim() }));
    statusParts.push(t('search_status_results', { count: results.length }));
    if (isLimited) statusParts.push(t('search_status_limited', { limit: SEARCH_RESULTS_LIMIT }));
    ui.status.textContent = statusParts.join(' • ');
}

function scheduleSearchRender() {
    if (searchRenderDebounceId !== null) {
        window.clearTimeout(searchRenderDebounceId);
    }

    searchRenderDebounceId = window.setTimeout(() => {
        searchRenderDebounceId = null;
        renderSearchResults();
    }, SEARCH_INPUT_DEBOUNCE_MS);
}

function refreshSearchUIOnOpen() {
    const ui = getSearchElements();
    if (!ui.textInput || !ui.ticketInput) return;
    renderSearchResults();
}

function initSearchPage() {
    const ui = getSearchElements();
    if (!ui.form || !ui.textInput || !ui.ticketInput || !ui.clearButton || !ui.results) {
        return;
    }

    ui.form.addEventListener('submit', (event) => {
        event.preventDefault();
        renderSearchResults();
    });

    ui.textInput.addEventListener('input', scheduleSearchRender);
    ui.ticketInput.addEventListener('input', scheduleSearchRender);

    ui.clearButton.addEventListener('click', () => {
        ui.textInput.value = '';
        ui.ticketInput.value = '';
        renderSearchResults();
        ui.textInput.focus();
    });

    ui.results.addEventListener('click', (event) => {
        const button = event.target.closest('[data-search-open]');
        if (!button) return;

        const ticketNumber = Number(button.dataset.ticketNumber);
        const questionIndex = Number(button.dataset.questionIndex);

        if (!Number.isInteger(ticketNumber) || ticketNumber <= 0 || !Number.isInteger(questionIndex) || questionIndex < 0) {
            return;
        }

        startQuizFromQuestion(ticketNumber, questionIndex);
    });

    renderSearchResults();
}

function getSignsCategoryById(categoryId) {
    return SIGNS_CATEGORIES.find((category) => category.id === categoryId) || null;
}

function getSignsCategoryTitle(category) {
    if (!category) return '';
    return t(category.titleKey);
}

async function loadSignsStaticData() {
    if (signsStaticDataPromise) {
        return signsStaticDataPromise;
    }

    signsStaticDataPromise = (async () => {
        const response = await fetch(SIGNS_STATIC_DATA_URL, { cache: QUESTIONS_FETCH_CACHE_MODE });
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const payload = await response.json();
        if (!payload || typeof payload !== 'object' || typeof payload.categories !== 'object') {
            throw new Error('INVALID_SIGNS_STATIC_PAYLOAD');
        }

        return payload;
    })();

    return signsStaticDataPromise;
}

function mapSignsPayloadToCards(items) {
    if (!Array.isArray(items)) return [];
    return items.map((item) => ({
        id: item.id,
        code: item.code || '',
        title: item.title || '',
        description: item.description || '',
        image: item.image || ''
    }));
}

function getSignsStaticItems(staticData, categoryId, languageCode) {
    if (!staticData || typeof staticData !== 'object' || !categoryId) {
        return [];
    }

    const localizedCategories = staticData.localizedCategories;
    if (localizedCategories && typeof localizedCategories === 'object') {
        const localizedCategoryItems = localizedCategories?.[languageCode]?.[categoryId];
        if (Array.isArray(localizedCategoryItems)) {
            return localizedCategoryItems;
        }
    }

    const defaultCategoryItems = staticData?.categories?.[categoryId];
    return Array.isArray(defaultCategoryItems) ? defaultCategoryItems : [];
}

async function loadSignsCategoryCards(category) {
    if (!category) return [];
    const uiLanguage = getCurrentLanguage();
    const cacheKey = `${category.id}:${uiLanguage}`;
    if (Array.isArray(signsCategoryCache[cacheKey])) {
        return signsCategoryCache[cacheKey];
    }

    try {
        const response = await fetch(
            `/api/signs?category=${encodeURIComponent(category.id)}&lang=${encodeURIComponent(uiLanguage)}`,
            { cache: 'no-store' }
        );
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const payload = await response.json();
        if (!payload?.ok || !Array.isArray(payload.items)) {
            throw new Error('INVALID_SIGNS_PAYLOAD');
        }

        const cards = mapSignsPayloadToCards(payload.items);
        signsCategoryCache[cacheKey] = cards;
        return cards;
    } catch (apiError) {
        const staticData = await loadSignsStaticData();
        const cards = mapSignsPayloadToCards(getSignsStaticItems(staticData, category.id, uiLanguage));
        signsCategoryCache[cacheKey] = cards;
        return cards;
    }
}

function buildSignsCategoriesMarkup() {
    const rows = SIGNS_CATEGORIES.map((category) => `
        <li class="signs-category-item">
            <button type="button" class="signs-category-btn" onclick="openSignsCategory('${category.id}')">
                <span class="signs-category-icon-wrap">
                    <img src="${escapeHtml(category.icon)}" alt="" class="signs-category-icon" loading="lazy">
                </span>
                <span class="signs-category-text">${escapeHtml(getSignsCategoryTitle(category))}</span>
                <span class="signs-category-arrow" aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M7 4l6 6-6 6"></path>
                    </svg>
                </span>
            </button>
        </li>
    `).join('');

    return `
        <div class="signs-shell">
            <ul class="signs-category-list">${rows}</ul>
        </div>
    `;
}

function buildSignsCardsMarkup(cards, category) {
    const cardsMarkup = cards.map((card) => {
        const subtitle = card.title || card.description || '';
        const title = subtitle || card.code || getSignsCategoryTitle(category);
        const imageMarkup = card.image
            ? `<img src="${escapeHtml(card.image)}" alt="${escapeHtml(title)}" loading="lazy">`
            : '<span class="sign-card-fallback">?</span>';

        return `
            <article class="sign-card">
                <div class="sign-card-image">${imageMarkup}</div>
                <div class="sign-card-copy">
                    <p class="sign-card-code">${escapeHtml(card.code || '')}</p>
                    <p class="sign-card-title">${escapeHtml(subtitle)}</p>
                </div>
            </article>
        `;
    }).join('');

    return `
        <div class="signs-shell signs-shell-detail">
            ${cardsMarkup ? `<div class="signs-grid">${cardsMarkup}</div>` : `<div class="signs-state signs-state-empty">${escapeHtml(t('signs_empty'))}</div>`}
        </div>
    `;
}

function renderSignsPage() {
    const signsPage = document.getElementById('signs-page');
    if (!signsPage) return;
    const activeToken = ++signsRenderToken;

    if (signsViewState.type !== 'category') {
        signsPage.innerHTML = buildSignsCategoriesMarkup();
        updateMobileHeaderBackButton();
        return;
    }

    const category = getSignsCategoryById(signsViewState.categoryId);
    if (!category) {
        signsViewState = { type: 'categories', categoryId: null };
        signsPage.innerHTML = buildSignsCategoriesMarkup();
        updateMobileHeaderBackButton();
        return;
    }

    signsPage.innerHTML = `
        <div class="signs-shell signs-shell-detail">
            <div class="signs-state">${escapeHtml(t('signs_loading'))}</div>
        </div>
    `;
    updateMobileHeaderBackButton();

    loadSignsCategoryCards(category).then((cards) => {
        if (activeToken !== signsRenderToken) return;
        signsPage.innerHTML = buildSignsCardsMarkup(cards, category);
        updateMobileHeaderBackButton();
    }).catch((error) => {
        console.warn('Signs load error:', category.id, error);
        if (activeToken !== signsRenderToken) return;
        signsPage.innerHTML = `
            <div class="signs-shell signs-shell-detail">
                <div class="signs-detail-head">
                    <button type="button" class="signs-source-btn" onclick="openSignsCategory('${category.id}')">
                        ${escapeHtml(t('common_reload'))}
                    </button>
                </div>
                <div class="signs-state signs-state-error">${escapeHtml(t('signs_load_error'))}</div>
            </div>
        `;
        updateMobileHeaderBackButton();
    });
}

function openSignsCategory(categoryId) {
    const category = getSignsCategoryById(categoryId);
    if (!category) return;

    signsViewState = { type: 'category', categoryId: category.id };
    renderSignsPage();
    updateMobileHeaderBackButton();
}

function backToSignsCategories() {
    signsViewState = { type: 'categories', categoryId: null };
    renderSignsPage();
    updateMobileHeaderBackButton();
}

function initSignsPage() {
    signsViewState = { type: 'categories', categoryId: null };
    renderSignsPage();
}

function getCurrentFinesLanguage() {
    return FINES_DATA_LANGUAGE_MAP[getCurrentLanguage()] || 'uz';
}

function getFinesSourceText(finesLanguage = getCurrentFinesLanguage()) {
    if (typeof window === 'undefined') return '';

    const sourceMap = {
        uz: window.FINES_RAW_TEXT_UZ,
        ru: window.FINES_RAW_TEXT_RU,
        qq: window.FINES_RAW_TEXT_QQ || window.FINES_RAW_TEXT_KAA,
        tj: window.FINES_RAW_TEXT_TJ
    };

    const source = sourceMap[finesLanguage];
    if (typeof source === 'string' && source.trim()) {
        return source;
    }

    const fallbackUz = sourceMap.uz;
    if (typeof fallbackUz === 'string') {
        return fallbackUz;
    }

    return typeof window.FINES_RAW_TEXT === 'string' ? window.FINES_RAW_TEXT : '';
}

function getFinesParseConfig(finesLanguage = getCurrentFinesLanguage()) {
    const common = {
        moneyLine: /(so['’`]?m|som|сум|сӯм)/i,
        bhmLine: /(BHM|BEM|БРВ|МБҲ)/i,
        ballLine: /(Ball|Балл(?:а|ы)?)/i
    };

    if (finesLanguage === 'ru') {
        return {
            ...common,
            articleLine: /^Статья\s+\d+(?:-\d+)?\./i,
            articleCapture: /^(Статья\s+\d+(?:-\d+)*)\.\s*(.+)$/i,
            bandLine: /^\d+-пункт$/i
        };
    }

    if (finesLanguage === 'qq') {
        return {
            ...common,
            articleLine: /^\d+(?:-\d+)?-statya\./i,
            articleCapture: /^(\d+(?:-\d+)?-statya)\.\s*(.+)$/i,
            bandLine: /^\d+-bánt$/i
        };
    }

    if (finesLanguage === 'tj') {
        return {
            ...common,
            articleLine: /^Моддаи\s+\d+(?:-\d+)?\./i,
            articleCapture: /^(Моддаи\s+\d+(?:-\d+)*)\.\s*(.+)$/i,
            bandLine: /^\d+-банд$/i
        };
    }

    return {
        ...common,
        articleLine: /^\d+(?:-\d+)?-modda\./i,
        articleCapture: /^(\d+(?:-\d+)?-modda)\.\s*(.+)$/i,
        bandLine: /^\d+-band$/i
    };
}

function normalizeFinesArticleTitle(line, parseConfig) {
    const match = line.match(parseConfig.articleCapture);
    if (!match) {
        return line.replace(/\s+/g, ' ').trim();
    }

    return `${match[1]}. ${match[2]}`.replace(/\s+/g, ' ').trim();
}

function isFinesArticleLine(line, parseConfig) {
    return parseConfig.articleLine.test(line);
}

function isFinesBandLine(line, parseConfig) {
    return parseConfig.bandLine.test(line);
}

function isFinesMoneyLine(line, parseConfig) {
    return parseConfig.moneyLine.test(line);
}

function isFinesBhmLine(line, parseConfig) {
    return parseConfig.bhmLine.test(line);
}

function isFinesBallLine(line, parseConfig) {
    return parseConfig.ballLine.test(line);
}

function getParsedFinesData() {
    const finesLanguage = getCurrentFinesLanguage();
    if (Array.isArray(finesDataCache[finesLanguage])) {
        return finesDataCache[finesLanguage];
    }

    const sourceLanguage = finesLanguage === 'uz_cyrl' ? 'uz' : finesLanguage;
    const raw = getFinesSourceText(sourceLanguage);
    if (!raw) {
        finesDataCache[finesLanguage] = [];
        return finesDataCache[finesLanguage];
    }

    const parseConfig = getFinesParseConfig(sourceLanguage);

    const lines = raw
        .split('\n')
        .map((line) => line.replace(/\s+/g, ' ').trim())
        .filter(Boolean);

    const articles = [];
    let currentArticle = null;
    let index = 0;

    while (index < lines.length) {
        const line = lines[index];

        if (isFinesArticleLine(line, parseConfig)) {
            const normalizedTitle = normalizeFinesArticleTitle(line, parseConfig);

            currentArticle = {
                title: normalizedTitle,
                items: []
            };
            articles.push(currentArticle);
            index += 1;
            continue;
        }

        if (isFinesBandLine(line, parseConfig) && currentArticle) {
            const band = line;
            index += 1;

            const descriptionParts = [];
            while (index < lines.length) {
                const nextLine = lines[index];
                if (
                    isFinesArticleLine(nextLine, parseConfig) ||
                    isFinesBandLine(nextLine, parseConfig) ||
                    isFinesMoneyLine(nextLine, parseConfig)
                ) {
                    break;
                }
                descriptionParts.push(nextLine);
                index += 1;
            }

            let amount = '';
            let bhm = '';
            let ball = '';

            if (index < lines.length && isFinesMoneyLine(lines[index], parseConfig)) {
                amount = lines[index];
                index += 1;
            }

            if (index < lines.length && isFinesBhmLine(lines[index], parseConfig)) {
                bhm = lines[index];
                index += 1;
            }

            if (index < lines.length && isFinesBallLine(lines[index], parseConfig)) {
                ball = lines[index];
                index += 1;
            }

            currentArticle.items.push({
                band,
                description: descriptionParts.join(' ').trim(),
                amount: amount.trim(),
                bhm: bhm.trim(),
                ball: ball.trim()
            });

            continue;
        }

        index += 1;
    }

    finesDataCache[finesLanguage] = finesLanguage === 'uz_cyrl'
        ? transformStructuredTextToUzCyrillic(articles)
        : articles;
    return finesDataCache[finesLanguage];
}

function buildFinesTableHtml(articles) {
    let bodyHtml = '';

    articles.forEach((article) => {
        bodyHtml += `
            <tr class="fines-article-row">
                <th colspan="4">${escapeHtml(article.title)}</th>
            </tr>
        `;

        article.items.forEach((item) => {
            bodyHtml += `
                <tr class="fines-item-row">
                    <td class="fines-col-main">
                        <div class="fines-band-label">${escapeHtml(item.band)}</div>
                        <div class="fines-description">${escapeHtml(item.description || '—')}</div>
                    </td>
                    <td class="fines-col-money">${escapeHtml(item.amount || '—')}</td>
                    <td class="fines-col-bhm">${escapeHtml(item.bhm || '—')}</td>
                    <td class="fines-col-ball">${escapeHtml(item.ball || '—')}</td>
                </tr>
            `;
        });
    });

    return `
        <div class="fines-table-wrap">
            <table class="fines-table" aria-label="${t('fines_table_aria')}">
                <thead>
                    <tr>
                        <th>${t('fines_col_violation')}</th>
                        <th>${t('fines_col_fine')}</th>
                        <th>${t('fines_col_bhm')}</th>
                        <th>${t('fines_col_ball')}</th>
                    </tr>
                </thead>
                <tbody>
                    ${bodyHtml}
                </tbody>
            </table>
        </div>
    `;
}

function buildFinesMobileHtml(articles) {
    let html = '<div class="fines-mobile-list">';

    articles.forEach((article) => {
        html += `
            <section class="fines-mobile-article">
                <h3 class="fines-mobile-article-title">${escapeHtml(article.title)}</h3>
                <div class="fines-mobile-rows">
        `;

        article.items.forEach((item) => {
            html += `
                <article class="fines-mobile-item">
                    <div class="fines-mobile-band">${escapeHtml(item.band)}</div>
                    <p class="fines-mobile-desc">${escapeHtml(item.description || '—')}</p>
                    <div class="fines-mobile-meta">
                        <span><strong>${t('fines_meta_fine')}:</strong> ${escapeHtml(item.amount || '—')}</span>
                        <span><strong>${t('fines_meta_bhm')}:</strong> ${escapeHtml(item.bhm || '—')}</span>
                        <span><strong>${t('fines_meta_ball')}:</strong> ${escapeHtml(item.ball || '—')}</span>
                    </div>
                </article>
            `;
        });

        html += `
                </div>
            </section>
        `;
    });

    html += '</div>';
    return html;
}

function renderFinesPage() {
    const finesPage = document.getElementById('fines-page');
    if (!finesPage) return;

    const articles = getParsedFinesData();
    if (!articles.length) {
        finesPage.innerHTML = `
            <div class="coming-soon">
                <h2>${t('fines_title')}</h2>
                <p>${t('fines_no_data')}</p>
            </div>
        `;
        return;
    }

    const totalBands = articles.reduce((sum, article) => sum + article.items.length, 0);

    finesPage.innerHTML = `
        <div class="fines-shell">
            <div class="fines-summary">
                <div class="fines-summary-chip">${t('fines_summary_articles', { count: articles.length })}</div>
                <div class="fines-summary-chip">${t('fines_summary_bands', { count: totalBands })}</div>
                <div class="fines-summary-note">${t('fines_summary_note')}</div>
            </div>
            ${buildFinesTableHtml(articles)}
            ${buildFinesMobileHtml(articles)}
        </div>
    `;
}

function initFinesPage() {
    renderFinesPage();
}

function readJsonStorage(key, fallbackValue) {
    try {
        const rawValue = localStorage.getItem(key);
        if (rawValue === null) return fallbackValue;
        const parsedValue = JSON.parse(rawValue);
        return parsedValue ?? fallbackValue;
    } catch (error) {
        return fallbackValue;
    }
}

function writeJsonStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.warn('Storage write error:', key, error);
        return false;
    }
}

function getStandardQuestionRecord(ticketNumber, questionNumber) {
    const safeTicketNumber = Number(ticketNumber);
    const safeQuestionNumber = Number(questionNumber);
    if (!Number.isInteger(safeTicketNumber) || safeTicketNumber < 1) return null;
    if (!Number.isInteger(safeQuestionNumber) || safeQuestionNumber < 1) return null;

    const standardTickets = getQuizBankByMode(QUIZ_MODE_STANDARD);
    const ticket = standardTickets[safeTicketNumber - 1];
    const questionData = ticket?.questions?.[safeQuestionNumber - 1];
    if (!questionData) return null;

    return {
        ticket: safeTicketNumber,
        question: safeQuestionNumber,
        questionData
    };
}

function normalizeStoredQuestionItems(rawItems, options = {}) {
    if (!Array.isArray(rawItems)) return [];

    const preserveExtras = options.preserveExtras === true;
    const sortBySavedAt = options.sortBySavedAt !== false;
    const itemMap = new Map();

    rawItems.forEach((item) => {
        const ticket = Number(item?.ticket);
        const question = Number(item?.question);
        if (!Number.isInteger(ticket) || ticket < 1) return;
        if (!Number.isInteger(question) || question < 1) return;

        const key = `${ticket}:${question}`;
        const normalizedItem = {
            ticket,
            question
        };

        if (typeof item?.savedAt === 'string' && item.savedAt.trim() !== '') {
            normalizedItem.savedAt = item.savedAt;
        }

        if (preserveExtras) {
            if (typeof item?.questionText === 'string' && item.questionText.trim() !== '') {
                normalizedItem.questionText = item.questionText;
            }
            if (item?.userAnswer === null || Number.isInteger(item?.userAnswer)) {
                normalizedItem.userAnswer = item.userAnswer;
            }
        }

        itemMap.set(key, normalizedItem);
    });

    const normalizedItems = Array.from(itemMap.values());
    normalizedItems.sort((left, right) => {
        if (sortBySavedAt) {
            const leftDate = typeof left.savedAt === 'string' ? left.savedAt : '';
            const rightDate = typeof right.savedAt === 'string' ? right.savedAt : '';
            if (leftDate !== rightDate) {
                return rightDate.localeCompare(leftDate);
            }
        }

        return left.ticket - right.ticket || left.question - right.question;
    });

    return normalizedItems;
}

function getStoredBookmarks() {
    const rawBookmarks = readJsonStorage(BOOKMARKS_STORAGE_KEY, []);
    const normalizedBookmarks = normalizeStoredQuestionItems(rawBookmarks, { sortBySavedAt: true });

    if (JSON.stringify(rawBookmarks) !== JSON.stringify(normalizedBookmarks)) {
        writeJsonStorage(BOOKMARKS_STORAGE_KEY, normalizedBookmarks);
    }

    return normalizedBookmarks;
}

function setStoredBookmarks(bookmarks) {
    const normalizedBookmarks = normalizeStoredQuestionItems(bookmarks, { sortBySavedAt: true });
    writeJsonStorage(BOOKMARKS_STORAGE_KEY, normalizedBookmarks);
    return normalizedBookmarks;
}

function getStoredWrongAnswers() {
    const rawWrongAnswers = readJsonStorage(WRONG_ANSWERS_STORAGE_KEY, []);
    const normalizedWrongAnswers = normalizeStoredQuestionItems(rawWrongAnswers, {
        preserveExtras: true,
        sortBySavedAt: true
    });

    if (JSON.stringify(rawWrongAnswers) !== JSON.stringify(normalizedWrongAnswers)) {
        writeJsonStorage(WRONG_ANSWERS_STORAGE_KEY, normalizedWrongAnswers);
    }

    return normalizedWrongAnswers;
}

function setStoredWrongAnswers(wrongAnswersList) {
    const normalizedWrongAnswers = normalizeStoredQuestionItems(wrongAnswersList, {
        preserveExtras: true,
        sortBySavedAt: true
    });
    writeJsonStorage(WRONG_ANSWERS_STORAGE_KEY, normalizedWrongAnswers);
    return normalizedWrongAnswers;
}

function getQuestionSourceMeta(ticketNumber = currentTicket, questionIndex = currentQuestion, quizMode = currentQuizMode) {
    const safeTicketNumber = Number(ticketNumber);
    const safeQuestionIndex = Number(questionIndex);
    if (!Number.isInteger(safeTicketNumber) || safeTicketNumber < 1) return null;
    if (!Number.isInteger(safeQuestionIndex) || safeQuestionIndex < 0) return null;

    const ticket = getQuizBankByMode(quizMode)[safeTicketNumber - 1];
    const question = ticket?.questions?.[safeQuestionIndex];
    if (!question) return null;

    const sourceTicketNumber = Number(question.sourceTicketNumber) || safeTicketNumber;
    const sourceQuestionNumber = Number(question.sourceQuestionNumber) || (safeQuestionIndex + 1);
    if (isLikelyNativeRuntime()) {
        return {
            ticket: sourceTicketNumber,
            question: sourceQuestionNumber,
            questionData: question
        };
    }

    const sourceRecord = getStandardQuestionRecord(sourceTicketNumber, sourceQuestionNumber);

    return {
        ticket: sourceRecord?.ticket || sourceTicketNumber,
        question: sourceRecord?.question || sourceQuestionNumber,
        questionData: sourceRecord?.questionData || question
    };
}

function isQuestionBookmarked(ticketNumber, questionNumber) {
    return getStoredBookmarks().some((item) => item.ticket === ticketNumber && item.question === questionNumber);
}

function isCurrentQuestionBookmarked() {
    const sourceMeta = getQuestionSourceMeta();
    return sourceMeta ? isQuestionBookmarked(sourceMeta.ticket, sourceMeta.question) : false;
}

function updateWrongAnswersForSession(questionResults) {
    if (!Array.isArray(questionResults) || questionResults.length === 0) return;

    const existingWrongAnswers = getStoredWrongAnswers();
    const reviewedKeys = new Set(questionResults.map((item) => `${item.ticket}:${item.question}`));
    const unresolvedWrongAnswers = existingWrongAnswers.filter((item) => !reviewedKeys.has(`${item.ticket}:${item.question}`));
    const timestamp = new Date().toISOString();

    questionResults.forEach((item) => {
        if (!item?.isWrong) return;

        unresolvedWrongAnswers.push({
            ticket: item.ticket,
            question: item.question,
            questionText: item.questionText,
            userAnswer: item.userAnswer,
            savedAt: timestamp
        });
    });

    setStoredWrongAnswers(unresolvedWrongAnswers);
}

function removeBookmark(ticketNumber, questionNumber) {
    const nextBookmarks = getStoredBookmarks().filter((item) => (
        item.ticket !== ticketNumber || item.question !== questionNumber
    ));
    setStoredBookmarks(nextBookmarks);
}

function clearBookmarks() {
    localStorage.removeItem(BOOKMARKS_STORAGE_KEY);
    openBookmarks();
}

function openSavedQuestion(ticketNumber, questionNumber) {
    if (!ensureQuestionsLoaded()) return;

    const safeTicketNumber = Number(ticketNumber);
    const safeQuestionNumber = Number(questionNumber);
    if (!Number.isInteger(safeTicketNumber) || safeTicketNumber < 1) {
        alert(t('quiz_ticket_not_found'));
        return;
    }
    if (!Number.isInteger(safeQuestionNumber) || safeQuestionNumber < 1) {
        alert(t('quiz_ticket_not_found'));
        return;
    }

    startQuiz(safeTicketNumber, {
        quizMode: QUIZ_MODE_STANDARD,
        exitState: { ...mainPageViewState }
    });

    if (!document.body.classList.contains('quiz-active')) {
        return;
    }

    jumpToQuestion(safeQuestionNumber - 1);
}

function getHomeOverviewStats() {
    const progressData = readJsonStorage(TICKET_PROGRESS_STORAGE_KEY, {});
    const standardBank = getQuizBankByMode(QUIZ_MODE_STANDARD);
    const totalStandardTickets = standardBank.length;
    const totalBankQuestions = standardBank.reduce((sum, ticket) => {
        const ticketQuestions = Array.isArray(ticket?.questions) ? ticket.questions.length : 0;
        return sum + ticketQuestions;
    }, 0);
    const stats = {
        wrongCount: getStoredWrongAnswers().length,
        bookmarksCount: getStoredBookmarks().length,
        successRate: 0,
        correctAnswers: 0,
        totalBankQuestions,
        completedTickets: 0,
        totalTickets: totalStandardTickets,
        completionRate: 0
    };

    if (progressData && typeof progressData === 'object') {
        let correctAnswers = 0;

        Object.entries(progressData).forEach(([key, value]) => {
            if (!/^\d+$/.test(key)) return;
            if (!value || typeof value !== 'object' || value.completed !== true) return;

            const correct = Number(value.correct);
            const total = Number(value.totalQuestions);
            if (!Number.isFinite(correct) || !Number.isFinite(total) || total <= 0) return;

            correctAnswers += correct;

            if (/^\d+$/.test(key)) {
                stats.completedTickets += 1;
            }
        });

        stats.correctAnswers = correctAnswers;
        if (stats.totalBankQuestions > 0) {
            stats.successRate = Math.round((correctAnswers / stats.totalBankQuestions) * 100);
        }
    }

    stats.completionRate = stats.successRate;

    stats.completedTickets = Math.max(0, Math.min(stats.completedTickets, stats.totalTickets));
    stats.wrongCount = Math.max(0, Math.round(stats.wrongCount));
    stats.bookmarksCount = Math.max(0, Math.round(stats.bookmarksCount));
    stats.correctAnswers = Math.max(0, Math.min(stats.totalBankQuestions, Math.round(stats.correctAnswers)));
    stats.successRate = Math.max(0, Math.min(100, Math.round(stats.successRate)));
    stats.completionRate = Math.max(0, Math.min(100, Math.round(stats.completionRate)));

    return stats;
}

function updateHeaderDesktopActions() {
    const actionsHost = document.getElementById('header-desktop-actions');
    const mainPage = document.getElementById('main-page');
    if (!actionsHost || !mainPage) return;

    const isMainPageActive = mainPage.classList.contains('active');
    const isHomeMarkupVisible = Boolean(mainPage.querySelector('.home-shell'));
    const shouldShowHomeActions = !document.body.classList.contains('quiz-active')
        && isMainPageActive
        && mainPageViewState?.type === 'home'
        && isHomeMarkupVisible;

    if (!shouldShowHomeActions) {
        actionsHost.innerHTML = '';
        return;
    }

    const stats = getHomeOverviewStats();
    const completionLabel = `${stats.correctAnswers}/${stats.totalBankQuestions || 0}`;

    actionsHost.innerHTML = `
        <button type="button" class="subscription-badge header-action-chip header-action-chip-button" onclick="setActivePage('search')">
            ${getHomeSymbolMarkup('search', 'header-action-chip-icon')}
            <span>${escapeHtml(t('common_search'))}</span>
        </button>
        <div class="subscription-badge header-action-chip">
            <strong>${stats.successRate}%</strong>
            <span>${escapeHtml(t('home_stats_title'))}</span>
        </div>
        <div class="subscription-badge header-action-chip">
            <strong>${escapeHtml(completionLabel)}</strong>
            <span>${escapeHtml(t('common_question'))}</span>
        </div>
    `;
}

function getHomeSymbolMarkup(iconName, className = '') {
    const safeClass = className ? ` class="${className}"` : '';
    const homeImageMap = {
        new20: 'images/home-memo.png',
        fifty: 'images/home-tickets.png',
        wrong: 'images/home-wrong.png',
        all: 'images/home-all.png',
        bookmarks: 'images/home-bookmarks.png',
        stats: 'images/home-stats.png'
    };

    if (homeImageMap[iconName]) {
        return `<img${safeClass} src="${homeImageMap[iconName]}" alt="" aria-hidden="true">`;
    }

    switch (iconName) {
        case 'new20':
            return `
                <svg${safeClass} viewBox="0 0 64 64" fill="none" aria-hidden="true">
                    <rect x="13" y="10" width="28" height="38" rx="10" fill="currentColor" opacity="0.12"/>
                    <path d="M23 18h8" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/>
                    <path d="M21 26h12M21 33h12" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" opacity="0.72"/>
                    <circle cx="45" cy="40" r="10" fill="currentColor" opacity="0.16"/>
                    <path d="M45 35v10M40 40h10" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/>
                </svg>
            `;
        case 'fifty':
            return `
                <svg${safeClass} viewBox="0 0 64 64" fill="none" aria-hidden="true">
                    <rect x="14" y="13" width="23" height="32" rx="8" fill="currentColor" opacity="0.12"/>
                    <rect x="27" y="19" width="23" height="32" rx="8" stroke="currentColor" stroke-width="2.8"/>
                    <path d="M33 29h11M33 35h11M33 41h7" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/>
                    <circle cx="22" cy="22" r="4" fill="currentColor" opacity="0.28"/>
                </svg>
            `;
        case 'wrong':
            return `
                <svg${safeClass} viewBox="0 0 64 64" fill="none" aria-hidden="true">
                    <path d="M32 13l18 31a3 3 0 0 1-2.6 4.5H16.6A3 3 0 0 1 14 44L32 13z" fill="currentColor" opacity="0.12"/>
                    <path d="M28 27l8 8M36 27l-8 8" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/>
                    <path d="M32 19l18 31a3 3 0 0 1-2.6 4.5H16.6A3 3 0 0 1 14 50L32 19z" stroke="currentColor" stroke-width="2.8" stroke-linejoin="round"/>
                </svg>
            `;
        case 'all':
            return `
                <svg${safeClass} viewBox="0 0 64 64" fill="none" aria-hidden="true">
                    <rect x="14" y="14" width="14" height="14" rx="4" fill="currentColor" opacity="0.14"/>
                    <rect x="36" y="14" width="14" height="14" rx="4" stroke="currentColor" stroke-width="2.8"/>
                    <rect x="14" y="36" width="14" height="14" rx="4" stroke="currentColor" stroke-width="2.8"/>
                    <rect x="36" y="36" width="14" height="14" rx="4" fill="currentColor" opacity="0.18"/>
                    <rect x="14" y="14" width="14" height="14" rx="4" stroke="currentColor" stroke-width="2.8"/>
                    <rect x="36" y="36" width="14" height="14" rx="4" stroke="currentColor" stroke-width="2.8"/>
                </svg>
            `;
        case 'bookmarks':
            return `
                <svg${safeClass} viewBox="0 0 64 64" fill="none" aria-hidden="true">
                    <path d="M20 14h24v34l-12-7-12 7V14z" fill="currentColor" opacity="0.12"/>
                    <path d="M24 18h16v26l-8-4.5-8 4.5V18z" stroke="currentColor" stroke-width="2.8" stroke-linejoin="round"/>
                    <path d="M28 25h8" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/>
                </svg>
            `;
        case 'stats':
            return `
                <svg${safeClass} viewBox="0 0 64 64" fill="none" aria-hidden="true">
                    <path d="M16 46h32" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/>
                    <path d="M20 40l9-10 8 5 9-14" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 22h8" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" opacity="0.42"/>
                    <circle cx="20" cy="40" r="3" fill="currentColor"/>
                    <circle cx="29" cy="30" r="3" fill="currentColor" opacity="0.88"/>
                    <circle cx="37" cy="35" r="3" fill="currentColor" opacity="0.8"/>
                    <circle cx="46" cy="21" r="3" fill="currentColor"/>
                </svg>
            `;
        case 'search':
            return `
                <svg${safeClass} viewBox="0 0 64 64" fill="none" aria-hidden="true">
                    <circle cx="28" cy="28" r="12" fill="currentColor" opacity="0.12"/>
                    <circle cx="28" cy="28" r="11" stroke="currentColor" stroke-width="2.8"/>
                    <path d="M37 37l11 11" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/>
                </svg>
            `;
        case 'logo':
        default:
            return `
                <svg${safeClass} viewBox="0 0 64 64" fill="none" aria-hidden="true">
                    <rect x="17" y="10" width="30" height="44" rx="14" fill="currentColor" opacity="0.14"/>
                    <path d="M32 16v32" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-dasharray="4 6"/>
                    <path d="M26 20h12M22 44h20" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/>
                    <rect x="17" y="10" width="30" height="44" rx="14" stroke="currentColor" stroke-width="2.8"/>
                </svg>
            `;
    }
}

function buildDesktopHomeCard({ title, note, metric, icon, action, accent, accentRgb, extraHtml = '' }) {
    return `
        <button type="button" class="feature-card home-feature-card" style="--home-accent: ${accent}; --home-accent-rgb: ${accentRgb};" onclick="${action}">
            <div class="home-card-top">
                <span class="card-icon home-card-icon">
                    ${getHomeSymbolMarkup(icon, 'desktop-home-icon')}
                </span>
                <span class="home-card-value">${escapeHtml(String(metric))}</span>
            </div>
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(note)}</p>
            ${extraHtml}
        </button>
    `;
}

function buildMobileHomeItem({ title, subtitle, metric, icon, action, accent, accentRgb }) {
    return `
        <button type="button" class="mobile-menu-item" style="--home-accent: ${accent}; --home-accent-rgb: ${accentRgb};" onclick="${action}">
            <span class="mobile-menu-item-icon">
                ${getHomeSymbolMarkup(icon, 'mobile-menu-item-icon-svg')}
            </span>
            <span class="mobile-menu-item-copy">
                <span class="mobile-menu-item-title">${escapeHtml(title)}</span>
                <span class="mobile-menu-item-subtitle">${escapeHtml(subtitle)}</span>
            </span>
            <span class="mobile-menu-item-value">${escapeHtml(String(metric))}</span>
        </button>
    `;
}

function getHomePageMarkup() {
    const stats = getHomeOverviewStats();
    const fiftyTicketCount = getQuizBankByMode(QUIZ_MODE_FIFTY).length;
    const completionLabel = `${stats.correctAnswers}/${stats.totalBankQuestions || 0}`;
    const progressWidth = Math.max(0, Math.min(100, stats.completionRate));

    const desktopCards = [
        buildDesktopHomeCard({
            title: t('home_new20'),
            note: t('home_new20_desc'),
            metric: 20,
            icon: 'new20',
            action: 'openNewTickets()',
            accent: '#f97316',
            accentRgb: '249, 115, 22'
        }),
        buildDesktopHomeCard({
            title: t('home_fifty'),
            note: t('home_fifty_desc'),
            metric: 50,
            icon: 'fifty',
            action: 'openFiftyTickets()',
            accent: '#2563eb',
            accentRgb: '37, 99, 235'
        }),
        buildDesktopHomeCard({
            title: t('home_wrong_mobile'),
            note: t('home_wrong_desc'),
            metric: stats.wrongCount,
            icon: 'wrong',
            action: 'openWrongAnswers()',
            accent: '#dc2626',
            accentRgb: '220, 38, 38'
        }),
        buildDesktopHomeCard({
            title: t('home_all'),
            note: t('home_all_desc'),
            metric: stats.totalTickets,
            icon: 'all',
            action: 'openAllTickets()',
            accent: '#0f766e',
            accentRgb: '15, 118, 110'
        }),
        buildDesktopHomeCard({
            title: t('home_bookmarks'),
            note: t('home_bookmarks_desc'),
            metric: stats.bookmarksCount,
            icon: 'bookmarks',
            action: 'openBookmarks()',
            accent: '#059669',
            accentRgb: '5, 150, 105'
        }),
        buildDesktopHomeCard({
            title: t('home_stats_title'),
            note: t('home_stats_desc', { percent: stats.successRate }),
            metric: `${stats.successRate}%`,
            icon: 'stats',
            action: 'openAllTickets()',
            accent: '#7c3aed',
            accentRgb: '124, 58, 237',
            extraHtml: `
                <div class="home-progress home-progress-card">
                    <div class="home-progress-bar"><span style="width: ${progressWidth}%;"></span></div>
                    <div class="home-progress-meta">${escapeHtml(completionLabel)}</div>
                </div>
            `
        })
    ].join('');

    const mobileItems = [
        buildMobileHomeItem({
            title: t('home_new20'),
            subtitle: t('home_new20_desc'),
            metric: 20,
            icon: 'new20',
            accent: '#f97316',
            accentRgb: '249, 115, 22',
            action: 'openNewTickets()'
        }),
        buildMobileHomeItem({
            title: t('home_fifty'),
            subtitle: `${t('home_fifty_desc')} • ${fiftyTicketCount}`,
            metric: 50,
            icon: 'fifty',
            accent: '#2563eb',
            accentRgb: '37, 99, 235',
            action: 'openFiftyTickets()'
        }),
        buildMobileHomeItem({
            title: t('home_wrong_mobile'),
            subtitle: t('home_wrong_desc'),
            metric: stats.wrongCount,
            icon: 'wrong',
            accent: '#dc2626',
            accentRgb: '220, 38, 38',
            action: 'openWrongAnswers()'
        }),
        buildMobileHomeItem({
            title: t('home_all'),
            subtitle: t('home_all_desc'),
            metric: stats.totalTickets,
            icon: 'all',
            accent: '#0f766e',
            accentRgb: '15, 118, 110',
            action: 'openAllTickets()'
        }),
        buildMobileHomeItem({
            title: t('home_bookmarks'),
            subtitle: t('home_bookmarks_desc'),
            metric: stats.bookmarksCount,
            icon: 'bookmarks',
            accent: '#059669',
            accentRgb: '5, 150, 105',
            action: 'openBookmarks()'
        })
    ].join('');

    return `
        <div class="home-shell">
            <div class="desktop-home-list">
                <div class="cards-grid home-cards">
                    ${desktopCards}
                </div>
            </div>
        </div>

        <div class="mobile-home">
            <div class="mobile-carousel" data-mobile-carousel>
                <div class="mobile-carousel-track">
                    <div class="mobile-carousel-slide">
                        <img src="images/carusel_1.jpg" alt="${t('carousel_dot_aria', { index: 1 })}">
                    </div>
                    <div class="mobile-carousel-slide">
                        <img src="images/carusel_2.jpg" alt="${t('carousel_dot_aria', { index: 2 })}">
                    </div>
                </div>

                <button class="mobile-carousel-btn prev" type="button" data-carousel-prev aria-label="${t('carousel_prev')}">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10 3L5 8L10 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>

                <button class="mobile-carousel-btn next" type="button" data-carousel-next aria-label="${t('carousel_next')}">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>

                <div class="mobile-carousel-dots">
                    <button type="button" class="mobile-carousel-dot active" data-slide="0" aria-label="${t('carousel_dot_aria', { index: 1 })}"></button>
                    <button type="button" class="mobile-carousel-dot" data-slide="1" aria-label="${t('carousel_dot_aria', { index: 2 })}"></button>
                </div>
            </div>

            <section class="mobile-home-summary">
                <div class="mobile-home-summary-top">
                    <div>
                        <span class="mobile-home-summary-kicker">${escapeHtml(t('home_stats_title'))}</span>
                        <strong class="mobile-home-summary-rate">${stats.successRate}%</strong>
                    </div>
                    <span class="mobile-home-summary-total">${escapeHtml(completionLabel)}</span>
                </div>
                <p class="mobile-home-summary-text">${escapeHtml(t('home_stats_desc', { percent: stats.successRate }))}</p>
                <div class="home-progress">
                    <div class="home-progress-bar"><span style="width: ${progressWidth}%;"></span></div>
                    <div class="home-progress-meta">${escapeHtml(completionLabel)}</div>
                </div>
            </section>

            <div class="mobile-menu-list">
                ${mobileItems}
            </div>
        </div>
    `;
}

// Open new 20 tickets
function openNewTickets() {
    if (!ensureQuestionsLoaded()) return;
    clearMobileCarouselTimer();
    const end = QUESTIONS.length;
    const start = Math.max(1, end - 19);
    showTicketsList(start, end, t('tickets_new20_title'), { titleKey: 'tickets_new20_title' });
}

function openFiftyTickets() {
    if (!ensureQuestionsLoaded()) return;
    clearMobileCarouselTimer();
    const end = getQuizBankByMode(QUIZ_MODE_FIFTY).length;
    if (end < 1) {
        backToMain();
        return;
    }

    showTicketsList(1, end, t('tickets_fifty_title'), { ticketMode: QUIZ_MODE_FIFTY, titleKey: 'tickets_fifty_title' });
}

function startFiftyQuiz(ticketNumber) {
    startQuiz(ticketNumber, { quizMode: QUIZ_MODE_FIFTY });
}

function openRandomTicket() {
    if (!ensureQuestionsLoaded()) return;
    clearMobileCarouselTimer();
    const totalTickets = getQuizBankByMode(QUIZ_MODE_STANDARD).length;
    if (totalTickets < 1) return;

    const ticketNumber = Math.floor(Math.random() * totalTickets) + 1;
    startQuiz(ticketNumber, { quizMode: QUIZ_MODE_STANDARD });
}

function openDesktopSection(pageName) {
    if (!pageName) return;
    setActivePage(pageName);
}

function openTenTickets() {
    openWrongAnswers();
}

// Open all tickets
function openAllTickets() {
    if (!ensureQuestionsLoaded()) return;
    clearMobileCarouselTimer();
    showTicketsList(1, QUESTIONS.length, t('tickets_all_title'), { titleKey: 'tickets_all_title' });
}

// Show tickets list
function showTicketsList(start, end, title, options = {}) {
    clearMobileCarouselTimer();
    const ticketMode = options.ticketMode === QUIZ_MODE_FIFTY ? QUIZ_MODE_FIFTY : QUIZ_MODE_STANDARD;
    const titleKey = options.titleKey || null;
    const ticketBank = getQuizBankByMode(ticketMode);
    const safeStart = Math.max(1, start);
    const safeEnd = Math.min(end, ticketBank.length);
    const startHandlerName = ticketMode === QUIZ_MODE_FIFTY ? 'startFiftyQuiz' : 'startQuiz';

    const resolvedTitle = titleKey ? t(titleKey) : title;
    mainPageViewState = { type: 'tickets', start: safeStart, end: safeEnd, title: resolvedTitle, titleKey, ticketMode };
    const content = document.getElementById('main-page');
    setTextIfExists('#page-title', t('page_main'));
    setTextIfExists('#page-subtitle', '');

    let html = `
        <div class="quiz-header tickets-list-header" style="margin-bottom: 32px;">
            <h2 style="font-size: 24px; font-weight: 700;">${resolvedTitle}</h2>
        </div>
        <div class="tickets-grid">
    `;

    for (let i = safeStart; i <= safeEnd; i++) {
        const progress = getTicketProgress(i, ticketMode);
        html += `
            <div class="ticket-card" onclick="${startHandlerName}(${i})">
                <div class="ticket-number">${i}</div>
                <div class="ticket-status">${progress}</div>
            </div>
        `;
    }

    html += '</div>';
    content.innerHTML = html;
    updateMobileHeaderBackButton();
    updateHeaderDesktopActions();
}

function getQuizBankByMode(quizMode = QUIZ_MODE_STANDARD) {
    if (quizMode === QUIZ_MODE_FIFTY) {
        if (Array.isArray(fiftyExamTicketsCache)) {
            return fiftyExamTicketsCache;
        }

        const allQuestions = [];
        if (Array.isArray(QUESTIONS)) {
            QUESTIONS.forEach((ticket, ticketIndex) => {
                const ticketQuestions = Array.isArray(ticket?.questions) ? ticket.questions.filter(Boolean) : [];
                ticketQuestions.forEach((question, questionIndex) => {
                    allQuestions.push({
                        ...question,
                        sourceTicketNumber: ticketIndex + 1,
                        sourceQuestionNumber: questionIndex + 1
                    });
                });
            });
        }

        const tickets = [];
        let cursor = 0;
        for (let i = 0; i < FIFTY_EXAM_REGULAR_TICKETS; i++) {
            tickets.push({
                ticketNumber: i + 1,
                questions: allQuestions.slice(cursor, cursor + FIFTY_EXAM_REGULAR_QUESTIONS)
            });
            cursor += FIFTY_EXAM_REGULAR_QUESTIONS;
        }

        tickets.push({
            ticketNumber: FIFTY_EXAM_REGULAR_TICKETS + 1,
            questions: allQuestions.slice(cursor, cursor + FIFTY_EXAM_LAST_TICKET_QUESTIONS)
        });

        fiftyExamTicketsCache = tickets;
        return fiftyExamTicketsCache;
    }

    return Array.isArray(QUESTIONS) ? QUESTIONS : [];
}

function getTicketQuestionCount(ticketNumber, quizMode = QUIZ_MODE_STANDARD) {
    const ticket = getQuizBankByMode(quizMode)[ticketNumber - 1];
    return Array.isArray(ticket?.questions) ? ticket.questions.length : 0;
}

function getTicketExamConfig(ticketNumber, quizMode = QUIZ_MODE_STANDARD) {
    const totalQuestions = getTicketQuestionCount(ticketNumber, quizMode);

    if (quizMode === QUIZ_MODE_FIFTY) {
        return {
            totalQuestions,
            durationSeconds: FIFTY_EXAM_DURATION_SECONDS,
            requiredCorrect: Math.ceil(totalQuestions * 0.9)
        };
    }

    const standardBankLength = getQuizBankByMode(QUIZ_MODE_STANDARD).length;
    const isFinalShortTicket = ticketNumber === standardBankLength && totalQuestions === 3;

    if (isFinalShortTicket) {
        return {
            totalQuestions,
            durationSeconds: FINAL_TICKET_DURATION_SECONDS,
            requiredCorrect: Math.min(FINAL_TICKET_PASS_CORRECT, totalQuestions)
        };
    }

    return {
        totalQuestions,
        durationSeconds: REGULAR_TICKET_DURATION_SECONDS,
        requiredCorrect: Math.min(REGULAR_TICKET_PASS_CORRECT, totalQuestions)
    };
}

function getTicketProgressStorageKey(ticketNumber, quizMode = QUIZ_MODE_STANDARD) {
    if (quizMode === QUIZ_MODE_FIFTY) {
        return `${QUIZ_MODE_FIFTY}:${ticketNumber}`;
    }
    return String(ticketNumber);
}

function getTicketProgress(ticketNumber, quizMode = QUIZ_MODE_STANDARD) {
    const savedData = readJsonStorage(TICKET_PROGRESS_STORAGE_KEY, {});
    const progressKey = getTicketProgressStorageKey(ticketNumber, quizMode);
    const progress = savedData[progressKey] || (quizMode === QUIZ_MODE_STANDARD ? savedData[ticketNumber] : null);
    const totalQuestions = getTicketQuestionCount(ticketNumber, quizMode) || progress?.totalQuestions || 10;

    if (!progress) return t('progress_not_started');
    if (progress.completed) return t('progress_completed', { correct: progress.correct, total: totalQuestions });
    return t('progress_in_progress', { current: progress.current, total: totalQuestions });
}

// Back to main page
function backToMain() {
    clearMobileCarouselTimer();
    mainPageViewState = { type: 'home' };
    const content = document.getElementById('main-page');
    content.innerHTML = getHomePageMarkup();
    setTextIfExists('#page-title', t('page_main'));
    setTextIfExists('#page-subtitle', t('page_main_subtitle'));
    initMobileCarousel();
    updateMobileHeaderBackButton();
    updateHeaderDesktopActions();
}

// Start quiz for a ticket
let currentTicket = null;
let currentQuestion = 0;
let answers = [];
let answerEvaluations = [];
let wrongAnswers = [];
let quizTimer = null;
let timeRemaining = REGULAR_TICKET_DURATION_SECONDS; // Default timer (25 minutes)
let currentQuizMode = QUIZ_MODE_STANDARD;
let quizDeadlineTimestamp = null;

function getTicketAssetPreloadKey(ticketNumber, quizMode) {
    const mode = quizMode === QUIZ_MODE_FIFTY ? QUIZ_MODE_FIFTY : QUIZ_MODE_STANDARD;
    return `${mode}:${ticketNumber}`;
}

function scheduleIdleWork(callback, timeout = 1200) {
    if (typeof window !== 'undefined' && typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(() => callback(), { timeout });
        return;
    }

    window.setTimeout(callback, 80);
}

function runImagePreloadRequest(src) {
    if (typeof Image === 'undefined') {
        return Promise.resolve(false);
    }

    return new Promise((resolve) => {
        const img = new Image();

        const done = (loaded) => {
            img.onload = null;
            img.onerror = null;
            if (loaded) {
                imagePreloadCache[src] = true;
            } else {
                delete imagePreloadCache[src];
            }
            resolve(loaded);
        };

        img.onload = () => {
            if (typeof img.decode === 'function') {
                img.decode().then(
                    () => done(true),
                    () => done(true)
                );
                return;
            }
            done(true);
        };

        img.onerror = () => done(false);
        img.src = src;
    });
}

function pumpImagePreloadQueue() {
    while (imagePreloadInFlight < IMAGE_PRELOAD_CONCURRENCY && imagePreloadQueue.length > 0) {
        const task = imagePreloadQueue.shift();
        if (!task || !task.src) continue;

        imagePreloadInFlight += 1;

        runImagePreloadRequest(task.src)
            .then(task.resolve)
            .catch(() => task.resolve(false))
            .finally(() => {
                imagePreloadInFlight = Math.max(0, imagePreloadInFlight - 1);
                pumpImagePreloadQueue();
            });
    }
}

function enqueueImagePreload(src, priority = 'normal') {
    const promise = new Promise((resolve) => {
        const task = { src, resolve };
        if (priority === 'high') {
            imagePreloadQueue.unshift(task);
        } else {
            imagePreloadQueue.push(task);
        }
    });

    imagePreloadCache[src] = promise;
    pumpImagePreloadQueue();
    return promise;
}

function preloadImageAsset(src, options = {}) {
    if (!src || typeof src !== 'string') {
        return Promise.resolve(false);
    }

    const cached = imagePreloadCache[src];
    if (cached === true) {
        return Promise.resolve(true);
    }
    if (cached && typeof cached.then === 'function') {
        return cached;
    }

    const priority = options?.priority === 'high' ? 'high' : 'normal';
    return enqueueImagePreload(src, priority);
}

function preloadTicketAssets(ticketNumber, quizMode, options = {}) {
    const cacheKey = getTicketAssetPreloadKey(ticketNumber, quizMode);
    const cachedPromise = ticketAssetsPreloadCache[cacheKey];
    if (cachedPromise && typeof cachedPromise.then === 'function') {
        return cachedPromise;
    }

    const ticket = getQuizBankByMode(quizMode)[ticketNumber - 1];
    const imageUrls = Array.isArray(ticket?.questions)
        ? Array.from(new Set(ticket.questions.map((question) => question?.image).filter(Boolean)))
        : [];

    const highPriorityCount = Number.isInteger(options?.highPriorityCount) && options.highPriorityCount > 0
        ? options.highPriorityCount
        : 2;

    const highPriorityUrls = imageUrls.slice(0, highPriorityCount);
    const remainingUrls = imageUrls.slice(highPriorityCount);

    const highPriorityPromise = Promise.allSettled(highPriorityUrls.map((src) => preloadImageAsset(src, { priority: 'high' })));

    const preloadPromise = highPriorityPromise.then(async (headResults) => {
        const tailResults = remainingUrls.length > 0
            ? await Promise.allSettled(remainingUrls.map((src) => preloadImageAsset(src, { priority: 'normal' })))
            : [];

        const results = headResults.concat(tailResults);
        if (QUIZ_IMAGE_PRELOAD_DEBUG) {
            const loadedCount = results.filter((result) => result.status === 'fulfilled' && result.value === true).length;
            console.log('Ticket assets preloaded:', cacheKey, `${loadedCount}/${imageUrls.length} images`);
        }
        return true;
    });

    ticketAssetsPreloadCache[cacheKey] = preloadPromise;
    return preloadPromise;
}

function preloadUpcomingQuestionImages(ticket, currentIndex) {
    if (!Array.isArray(ticket?.questions)) return;

    const candidateIndexes = [currentIndex + 1, currentIndex + 2];
    candidateIndexes.forEach((index) => {
        if (index < 0 || index >= ticket.questions.length) return;
        const src = ticket.questions[index]?.image;
        if (!src) return;
        preloadImageAsset(src, { priority: 'high' }).catch(() => false);
    });
}

function scheduleNeighborTicketPrefetch(ticketNumber, quizMode) {
    const bank = getQuizBankByMode(quizMode);
    const totalTickets = Array.isArray(bank) ? bank.length : 0;
    if (totalTickets < 2) return;

    scheduleIdleWork(() => {
        for (let offset = 1; offset <= QUIZ_NEIGHBOR_TICKET_PREFETCH_COUNT; offset += 1) {
            const nextTicket = ticketNumber + offset;
            const prevTicket = ticketNumber - offset;

            if (nextTicket <= totalTickets) {
                preloadTicketAssets(nextTicket, quizMode, { highPriorityCount: 1 }).catch(() => false);
            }

            if (prevTicket >= 1) {
                preloadTicketAssets(prevTicket, quizMode, { highPriorityCount: 1 }).catch(() => false);
            }
        }
    }, 1500);
}

function jumpToQuestion(questionIndex) {
    currentQuestion = questionIndex;
    showQuestion();
}

function toggleBookmark() {
    const sourceMeta = getQuestionSourceMeta();
    if (!sourceMeta) return;

    const existingBookmarks = getStoredBookmarks();
    const bookmarkIndex = existingBookmarks.findIndex((item) => (
        item.ticket === sourceMeta.ticket && item.question === sourceMeta.question
    ));

    if (bookmarkIndex >= 0) {
        existingBookmarks.splice(bookmarkIndex, 1);
    } else {
        existingBookmarks.unshift({
            ticket: sourceMeta.ticket,
            question: sourceMeta.question,
            savedAt: new Date().toISOString()
        });
    }

    setStoredBookmarks(existingBookmarks);
    showQuestion();
}

function formatTimerDisplay(totalSeconds) {
    const safeSeconds = Math.max(0, totalSeconds);
    const minutes = Math.floor(safeSeconds / 60);
    const seconds = safeSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function getAnswerEvaluation(questionIndex = currentQuestion) {
    return answerEvaluations[questionIndex] || null;
}

function canAdvanceCurrentQuestion() {
    if (answers[currentQuestion] === null) {
        return false;
    }

    if (!Boolean(getAppSetting('instantFeedback'))) {
        return true;
    }

    return !Boolean(getAnswerEvaluation(currentQuestion)?.isPending);
}

function startTimer() {
    if (quizTimer) {
        return;
    }

    if (!Number.isFinite(quizDeadlineTimestamp) || quizDeadlineTimestamp <= 0) {
        quizDeadlineTimestamp = Date.now() + (Math.max(0, timeRemaining) * 1000);
    }

    const tick = () => {
        timeRemaining = Math.max(0, Math.ceil((quizDeadlineTimestamp - Date.now()) / 1000));

        const display = formatTimerDisplay(timeRemaining);
        const timerElement = document.getElementById('timer-display');
        if (timerElement) {
            timerElement.textContent = display;
        }

        if (timeRemaining <= 0) {
            stopTimer();
            finishQuiz();
        }
    };

    tick();
    if (timeRemaining <= 0) {
        return;
    }

    quizTimer = setInterval(() => {
        tick();
    }, 1000);
}

function stopTimer(options = {}) {
    if (options?.preserveDeadline && Number.isFinite(quizDeadlineTimestamp) && quizDeadlineTimestamp > 0) {
        timeRemaining = Math.max(0, Math.ceil((quizDeadlineTimestamp - Date.now()) / 1000));
    }

    if (quizTimer) {
        clearInterval(quizTimer);
        quizTimer = null;
    }

    if (!options?.preserveDeadline) {
        quizDeadlineTimestamp = null;
    }
}

function handleAppActiveStateChange(isActive) {
    if (!isActive) {
        clearMobileCarouselTimer();
        if (document.body.classList.contains('quiz-active')) {
            stopTimer({ preserveDeadline: true });
        }
        return;
    }

    const latestSnapshot = readNativePermissionSnapshot();
    if (latestSnapshot) {
        syncNativePermissionState(latestSnapshot);
    }

    if (document.body.classList.contains('quiz-active')) {
        if (Number.isFinite(quizDeadlineTimestamp) && quizDeadlineTimestamp > 0) {
            timeRemaining = Math.max(0, Math.ceil((quizDeadlineTimestamp - Date.now()) / 1000));
        }

        if (timeRemaining <= 0) {
            finishQuiz();
            return;
        }

        startTimer();
        return;
    }

    if (isMainHomeViewActive()) {
        mobileCarouselController?.startAutoplay?.();
    }
}

function initAppLifecycleOptimizations() {
    if (appLifecycleListenersBound) return;
    appLifecycleListenersBound = true;

    document.addEventListener('visibilitychange', () => {
        handleAppActiveStateChange(!document.hidden);
    });

    window.addEventListener('pageshow', () => {
        handleAppActiveStateChange(true);
    });

    const capacitorApp =
        window?.Capacitor?.Plugins?.App ||
        window?.Capacitor?.Plugins?.CapacitorApp ||
        window?.CapacitorApp;

    if (capacitorApp && typeof capacitorApp.addListener === 'function') {
        capacitorApp.addListener('appStateChange', (event) => {
            handleAppActiveStateChange(Boolean(event?.isActive));
        });
    }
}

function startQuiz(ticketNumber, options = {}) {
    if (!ensureQuestionsLoaded()) return;
    const requestedQuizMode = options?.quizMode === QUIZ_MODE_FIFTY ? QUIZ_MODE_FIFTY : QUIZ_MODE_STANDARD;

    if (options && options.exitState) {
        quizExitState = { ...options.exitState };
    } else {
        const activeSearchPage = document.getElementById('search-page');
        if (activeSearchPage && activeSearchPage.classList.contains('active')) {
            quizExitState = { type: 'search' };
        } else {
            quizExitState = { ...mainPageViewState };
        }
    }

    const ticket = getQuizBankByMode(requestedQuizMode)[ticketNumber - 1];
    if (!ticket) {
        alert(t('quiz_ticket_not_found'));
        return;
    }

    const questionCount = getTicketQuestionCount(ticketNumber, requestedQuizMode);
    if (questionCount === 0) {
        alert(t('quiz_need_questions'));
        return;
    }

    currentQuizMode = requestedQuizMode;
    currentTicket = ticketNumber;
    currentQuestion = 0;
    answers = new Array(questionCount).fill(null);
    answerEvaluations = new Array(questionCount).fill(null);
    timeRemaining = getTicketExamConfig(ticketNumber, currentQuizMode).durationSeconds; // Reset timer by ticket type
    stopTimer(); // Clear any existing timer
    quizDeadlineTimestamp = null;

    // Add quiz-active class to hide sidebar
    document.body.classList.add('quiz-active');
    updateMobileHeaderBackButton();

    // Text is already in memory; preload all images in this ticket so navigation stays smooth.
    preloadTicketAssets(currentTicket, currentQuizMode, { highPriorityCount: 3 }).catch((error) => {
        if (QUIZ_IMAGE_PRELOAD_DEBUG) {
            console.warn('Ticket image preload error:', error);
        }
    });
    scheduleNeighborTicketPrefetch(currentTicket, currentQuizMode);

    showQuestion();
}

function startQuizFromQuestion(ticketNumber, questionIndex) {
    setActivePage('main');
    startQuiz(ticketNumber, { exitState: { type: 'search' }, quizMode: QUIZ_MODE_STANDARD });

    if (!document.body.classList.contains('quiz-active')) {
        return;
    }

    if (!Number.isInteger(questionIndex) || questionIndex < 0) {
        return;
    }

    const ticket = getQuizBankByMode(QUIZ_MODE_STANDARD)[ticketNumber - 1];
    const questionCount = Array.isArray(ticket?.questions) ? ticket.questions.length : 0;
    const safeIndex = Math.min(questionIndex, Math.max(0, questionCount - 1));

    jumpToQuestion(safeIndex);
}

function initQuizSwipeNavigation() {
    if (!document.body.classList.contains('quiz-active')) {
        return;
    }

    const quizContainer = document.querySelector('#main-page .quiz-container');
    if (!quizContainer) {
        return;
    }

    let startX = 0;
    let startY = 0;
    let isTracking = false;

    quizContainer.addEventListener('touchstart', (event) => {
        const touch = event.changedTouches && event.changedTouches[0];
        if (!touch) {
            isTracking = false;
            return;
        }

        startX = touch.clientX;
        startY = touch.clientY;
        isTracking = true;
    }, { passive: true });

    quizContainer.addEventListener('touchcancel', () => {
        isTracking = false;
    }, { passive: true });

    quizContainer.addEventListener('touchend', (event) => {
        if (!isTracking) {
            return;
        }
        isTracking = false;

        const touch = event.changedTouches && event.changedTouches[0];
        if (!touch) {
            return;
        }

        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;
        const absX = Math.abs(deltaX);
        const absY = Math.abs(deltaY);

        if (absX < QUIZ_SWIPE_MIN_DISTANCE) {
            return;
        }
        if (absY > QUIZ_SWIPE_MAX_VERTICAL_DRIFT || absX <= absY) {
            return;
        }

        if (deltaX < 0) {
            nextQuestion();
        } else {
            previousQuestion();
        }
    }, { passive: true });
}



async function showQuestion() {
    const ticket = getQuizBankByMode(currentQuizMode)[currentTicket - 1];
    const questionCount = Array.isArray(ticket?.questions) ? ticket.questions.length : 0;
    if (questionCount === 0) {
        alert(t('quiz_need_questions'));
        exitQuiz();
        return;
    }

    if (currentQuestion >= questionCount) {
        currentQuestion = questionCount - 1;
    }

    const renderTicketNumber = currentTicket;
    const renderQuestionIndex = currentQuestion;
    const renderQuizMode = currentQuizMode;
    let question = ticket.questions[renderQuestionIndex];
    question = await hydrateQuestionForNativeRuntime(
        getCurrentLanguage(),
        renderQuizMode,
        renderTicketNumber,
        renderQuestionIndex,
        question
    );

    if (
        currentTicket !== renderTicketNumber ||
        currentQuestion !== renderQuestionIndex ||
        currentQuizMode !== renderQuizMode
    ) {
        return;
    }

    if (!question || typeof question.question !== 'string' || !Array.isArray(question.answers)) {
        alert(t('quiz_need_questions'));
        exitQuiz();
        return;
    }

    ticket.questions[renderQuestionIndex] = question;
    preloadUpcomingQuestionImages(ticket, currentQuestion);
    const userAnswer = answers[currentQuestion];
    const isAnswered = userAnswer !== null;
    const instantFeedbackEnabled = Boolean(getAppSetting('instantFeedback'));
    const evaluation = getAnswerEvaluation(currentQuestion);
    const answerIsCorrect = typeof evaluation?.isCorrect === 'boolean' ? evaluation.isCorrect : null;
    const shouldRevealFeedback = isAnswered && instantFeedbackEnabled && answerIsCorrect !== null;
    const canAdvance = canAdvanceCurrentQuestion();
    const isBookmarked = isCurrentQuestionBookmarked();
    const bookmarkButtonTitle = isBookmarked ? t('quiz_bookmark_remove') : t('quiz_bookmark_add');
    const bookmarkButtonMarkup = `
        <button class="btn-bookmark ${isBookmarked ? 'active' : ''}" onclick="toggleBookmark()" aria-label="${escapeHtml(bookmarkButtonTitle)}" title="${escapeHtml(bookmarkButtonTitle)}">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M5 3h10v14l-5-3-5 3V3z"/>
            </svg>
        </button>
    `;

    const content = document.getElementById('main-page');
    const timerDisplay = formatTimerDisplay(timeRemaining);

    // Question numbers indicator at the top
    let questionNumbers = '<div class="question-numbers">';
    for (let i = 0; i < questionCount; i++) {
        let className = 'question-num';

        if (i === currentQuestion) {
            className += ' current';
        }

        if (answers[i] !== null) {
            if (instantFeedbackEnabled) {
                const itemEvaluation = getAnswerEvaluation(i);
                if (itemEvaluation?.isCorrect === true) {
                    className += ' answered';
                } else if (itemEvaluation?.isCorrect === false) {
                    className += ' wrong';
                } else {
                    className += ' answered-pending';
                }
            } else {
                className += ' answered-pending';
            }
        }

        questionNumbers += `<div class="${className}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
    }
    questionNumbers += '</div>';

    const isMobileQuizLayout = window.matchMedia && window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;

    const quizHeader = isMobileQuizLayout
        ? `
            <div class="quiz-toolbar">
                <div class="quiz-toolbar-top">
                    <button class="btn-back" onclick="exitQuiz()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    
                    <div class="timer">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                            <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
                            <path d="M10 6v4l3 3"/>
                        </svg>
                        <span id="timer-display">${timerDisplay}</span>
                    </div>
                    
                    <div class="quiz-ticket-title">
                        <strong>${currentTicket}</strong>
                        <span>${t('quiz_question_short')}</span>
                    </div>

                    ${bookmarkButtonMarkup}
                    <button class="btn-finish" onclick="finishQuiz()">${t('common_finish')}</button>
                </div>
                
                ${questionNumbers}
            </div>
        `
        : `
            <div class="quiz-header">
                <button class="btn-back" onclick="exitQuiz()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                </button>
                
                <div class="timer">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
                        <path d="M10 6v4l3 3"/>
                    </svg>
                    <span id="timer-display">${timerDisplay}</span>
                </div>
                
                ${questionNumbers}
                
                <div class="quiz-info">
                    <span>${currentQuestion + 1} - ${t('quiz_question_short')}</span>
                    ${bookmarkButtonMarkup}
                    <button class="btn-finish" onclick="finishQuiz()">${t('common_finish')}</button>
                </div>
            </div>
        `;

    let answersHtml = '<div class="answers-list">';
    question.answers.forEach((answer, index) => {
        const label = 'F' + (index + 1);
        let className = 'answer-option';
        let style = '';

        // If this question was already answered, show the result
        if (isAnswered) {
            style = 'pointer-events: none;';

            if (shouldRevealFeedback && index === userAnswer) {
                className += answerIsCorrect ? ' correct' : ' wrong';
            }
            if (index === userAnswer) {
                className += ' selected';
            }
        }

        answersHtml += `
            <div class="${className}" style="${style}" onclick="selectAnswer(${index})">
                <span class="answer-label">${label}</span>
                <span class="answer-text">${answer}</span>
            </div>
        `;
    });
    answersHtml += '</div>';

    const questionBlock = isMobileQuizLayout
        ? `
            <div class="question-content">
                <div class="question-text-container">
                    <div class="question-text">${question.question}</div>
                    ${question.image ? `
                        <div class="question-image-container question-image-container-inline">
                            <img src="${question.image}" alt="${t('common_question_image')}" class="question-image">
                            
                        </div>
                    ` : ''}
                </div>
            </div>
        `
        : `
            <div class="question-content">
                ${question.image ? `
                    <div class="question-image-container">
                        <img src="${question.image}" alt="${t('common_question_image')}" class="question-image">
                    </div>
                ` : ''}
                <div class="question-text-container">
                    <div class="question-text">${question.question}</div>
                    ${answersHtml}
                </div>
            </div>
        `;

    let html = `
        <div class="quiz-container">
            ${quizHeader}
            
            <div class="question-card">
                ${questionBlock}
                
                ${shouldRevealFeedback ? `
                    <div class="question-explanation">
                        <strong>${t('quiz_explanation')}</strong>
                        <p>YHQ ${question.reference || ''}-${question.article || ''}-bandiga asosan...</p>
                    </div>
                ` : ''}
            </div>

            ${isMobileQuizLayout ? answersHtml : ''}
    `;

    html += `
            ${!canAdvance ? `
                <button class="btn-next-floating" onclick="nextQuestion()" disabled id="next-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5l7 7-7 7"/>
                    </svg>
                </button>
            ` : `
                <button class="btn-next-floating" onclick="nextQuestion()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5l7 7-7 7"/>
                    </svg>
                </button>
            `}
        </div>
    `;

    content.innerHTML = html;
    initQuizSwipeNavigation();

    // Start timer if not started
    if (!quizTimer) {
        startTimer();
    }
}

async function selectAnswer(answerIndex) {
    // Prevent selecting if already answered
    if (answers[currentQuestion] !== null) {
        return;
    }

    const targetQuestionIndex = currentQuestion;
    const instantFeedbackEnabled = Boolean(getAppSetting('instantFeedback'));
    answers[targetQuestionIndex] = answerIndex;
    answerEvaluations[targetQuestionIndex] = instantFeedbackEnabled ? { isPending: true } : null;
    showQuestion();

    if (!instantFeedbackEnabled) {
        return;
    }

    try {
        const result = await validateAnswerSelection(
            getCurrentLanguage(),
            currentQuizMode,
            currentTicket,
            targetQuestionIndex,
            answerIndex
        );
        answerEvaluations[targetQuestionIndex] = {
            isPending: false,
            isCorrect: Boolean(result.isCorrect)
        };
    } catch (error) {
        answers[targetQuestionIndex] = null;
        answerEvaluations[targetQuestionIndex] = null;
        alert('Javobni tekshirib bo‘lmadi. Qayta urinib ko‘ring.');
    }

    showQuestion();
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function nextQuestion() {
    if (!canAdvanceCurrentQuestion()) {
        return;
    }

    const questionCount = getTicketQuestionCount(currentTicket, currentQuizMode);
    if (currentQuestion < questionCount - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        finishQuiz();
    }
}

function exitQuiz() {
    stopTimer();
    document.body.classList.remove('quiz-active');

    if (quizExitState?.type === 'tickets') {
        showTicketsList(quizExitState.start, quizExitState.end, quizExitState.title, {
            ticketMode: quizExitState.ticketMode,
            titleKey: quizExitState.titleKey
        });
        return;
    }

    if (quizExitState?.type === 'search') {
        setActivePage('search');
        return;
    }

    if (quizExitState?.type === 'wrongAnswers') {
        openWrongAnswers();
        return;
    }

    if (quizExitState?.type === 'bookmarks') {
        openBookmarks();
        return;
    }

    backToMain();
}

async function finishQuiz() {
    const shouldResumeTimer = Boolean(quizTimer);
    stopTimer();

    const ticket = getQuizBankByMode(currentQuizMode)[currentTicket - 1];
    const { totalQuestions } = getTicketExamConfig(currentTicket, currentQuizMode);
    if (!ticket || totalQuestions === 0) {
        alert(t('quiz_need_questions'));
        exitQuiz();
        return;
    }

    let submitResult;
    try {
        submitResult = await submitQuizAttempt(
            getCurrentLanguage(),
            currentQuizMode,
            currentTicket,
            answers
        );
    } catch (error) {
        if (shouldResumeTimer && document.body.classList.contains('quiz-active')) {
            startTimer();
        }
        alert('Natijani tekshirib bo‘lmadi. Qayta urinib ko‘ring.');
        return;
    }

    const questionResults = submitResult.questionResults.map((item, index) => {
        const sourceMeta = getQuestionSourceMeta(currentTicket, index, currentQuizMode);
        return {
            ticket: item.ticket,
            question: item.question,
            questionText: sourceMeta?.questionData?.question || ticket.questions[index]?.question || '',
            userAnswer: answers[index],
            isWrong: item.isWrong
        };
    });

    answerEvaluations = submitResult.questionResults.map((item) => ({
        isPending: false,
        isCorrect: !item.isWrong
    }));

    updateWrongAnswersForSession(questionResults);

    // Save progress
    saveTicketProgress(currentTicket, submitResult.correct, submitResult.totalQuestions, currentQuizMode);

    // Show results
    showResults(submitResult.correct, submitResult.totalQuestions, submitResult.requiredCorrect);
}

function showResults(
    correct,
    totalQuestions = getTicketQuestionCount(currentTicket, currentQuizMode),
    requiredCorrect = getTicketExamConfig(currentTicket, currentQuizMode).requiredCorrect
) {
    stopTimer();
    document.body.classList.remove('quiz-active');

    const content = document.getElementById('main-page');
    const safeTotalQuestions = Math.max(1, totalQuestions || 0);
    const safeRequiredCorrect = Math.min(Math.max(0, requiredCorrect || 0), safeTotalQuestions);
    const passed = correct >= safeRequiredCorrect;

    const retryAction = currentQuizMode === QUIZ_MODE_FIFTY
        ? `startFiftyQuiz(${currentTicket})`
        : `startQuiz(${currentTicket})`;

    let html = `
        <div class="quiz-container">
            <div class="question-card" style="text-align: center; padding: 48px;">
                <h2 style="font-size: 36px; margin-bottom: 24px;">
                    ${passed ? t('quiz_result_congrats') : t('quiz_result_sad')}
                </h2>
                
                <div style="font-size: 72px; font-weight: 700; margin: 32px 0; background: linear-gradient(135deg, #3B82F6 0%, #00A896 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    ${correct}/${safeTotalQuestions}
                </div>
                
                <p style="font-size: 20px; color: var(--text-secondary); margin-bottom: 32px;">
                    ${passed ? t('quiz_result_passed') : t('quiz_result_need_correct', { count: safeRequiredCorrect })}
                </p>
                
                <div style="display: flex; gap: 16px; justify-content: center;">
                    <button class="btn btn-secondary" onclick="backToMain()">${t('common_home_page')}</button>
                    ${!passed ? `<button class="btn btn-primary" onclick="${retryAction}">${t('common_retry')}</button>` : ''}
                </div>
            </div>
        </div>
    `;

    content.innerHTML = html;
    updateHeaderDesktopActions();
}

async function resolveSavedQuestionMap(items, languageCode = getCurrentLanguage()) {
    if (!Array.isArray(items) || items.length === 0) {
        return new Map();
    }

    if (isLikelyNativeRuntime()) {
        try {
            const nativeMap = await fetchNativeQuestionsByRefs(items, languageCode);
            if (nativeMap instanceof Map) {
                return nativeMap;
            }
        } catch (error) {
            // Fall back to the web in-memory record path.
        }
    }

    const questionMap = new Map();
    items.forEach((item) => {
        const record = getStandardQuestionRecord(item?.ticket, item?.question);
        const question = record?.questionData ? normalizeQuestionRecordForClient(record.questionData, { hydrated: true }) : null;
        if (!question) {
            return;
        }

        questionMap.set(`${record.ticket}:${record.question}`, question);
    });

    return questionMap;
}

// Wrong answers functionality
async function openWrongAnswers() {
    if (!ensureQuestionsLoaded()) return;
    clearMobileCarouselTimer();
    const viewToken = Date.now();
    mainPageViewState = { type: 'wrongAnswers', token: viewToken };
    const wrong = getStoredWrongAnswers();
    const content = document.getElementById('main-page');

    if (wrong.length === 0) {
        content.innerHTML = `
            <div class="coming-soon">
                <h2>${t('wrong_answers_none_title')}</h2>
                <p>${t('wrong_answers_none_text')}</p>
                <button class="btn btn-primary" onclick="backToMain()" style="margin-top: 24px;">${t('common_home_page')}</button>
            </div>
        `;
        updateMobileHeaderBackButton();
        updateHeaderDesktopActions();
        return;
    }

    content.innerHTML = `
        <div class="coming-soon">
            <h2>${t('wrong_answers_title', { count: wrong.length })}</h2>
            <p>${t('search_status_results', { count: wrong.length })}</p>
        </div>
    `;

    const questionMap = await resolveSavedQuestionMap(wrong);
    if (mainPageViewState?.type !== 'wrongAnswers' || mainPageViewState?.token !== viewToken) {
        return;
    }

    let html = `
        <div class="quiz-header" style="margin-bottom: 32px;">
            <h2 style="font-size: 24px; font-weight: 700;">${t('wrong_answers_title', { count: wrong.length })}</h2>
            <div style="display: flex; gap: 12px;">
                <button class="btn btn-secondary" onclick="clearWrongAnswers()">${t('wrong_answers_clear')}</button>
                <button class="btn btn-secondary" onclick="backToMain()">${t('common_back')}</button>
            </div>
        </div>
        <div style="max-width: 900px;">
    `;

    wrong.forEach((item) => {
        const question = questionMap.get(`${item.ticket}:${item.question}`);
        if (!question) {
            return;
        }

        html += `
            <div class="question-card" style="margin-bottom: 24px;">
                <div style="color: var(--text-muted); font-size: 14px; margin-bottom: 12px;">
                    ${t('wrong_answers_card_title', { ticket: item.ticket, question: item.question })}
                </div>
                <div class="question-text">${escapeHtml(item.questionText || question.question)}</div>
                ${question.image ? `
                    <div class="question-image-container question-image-container-inline">
                        <img src="${question.image}" alt="${t('common_question_image')}" class="question-image">
                    </div>
                ` : ''}
                
                <div class="answers-list">
        `;

        question.answers.forEach((answer, i) => {
            let className = '';
            if (i === item.userAnswer) {
                className = 'wrong';
            }

            html += `
                <div class="answer-option ${className}">
                    ${escapeHtml(answer)}
                    ${i === item.userAnswer ? ' ✗' : ''}
                </div>
            `;
        });

        html += `
                </div>
                <div class="question-card-actions">
                    <button class="btn btn-primary" onclick="openSavedQuestion(${item.ticket}, ${item.question})">${t('common_open')}</button>
                </div>
            </div>
        `;
    });

    html += '</div>';
    content.innerHTML = html;
    updateMobileHeaderBackButton();
    updateHeaderDesktopActions();
}

function clearWrongAnswers() {
    localStorage.removeItem(WRONG_ANSWERS_STORAGE_KEY);
    openWrongAnswers();
}

// Bookmarks functionality
async function openBookmarks() {
    if (!ensureQuestionsLoaded()) return;
    clearMobileCarouselTimer();
    const viewToken = Date.now();
    mainPageViewState = { type: 'bookmarks', token: viewToken };
    const bookmarks = getStoredBookmarks();
    const content = document.getElementById('main-page');

    if (bookmarks.length === 0) {
        content.innerHTML = `
            <div class="coming-soon">
                <h2>${t('bookmarks_title')}</h2>
                <p>${t('bookmarks_empty_text')}</p>
                <button class="btn btn-primary" onclick="backToMain()" style="margin-top: 24px;">${t('common_home_page')}</button>
            </div>
        `;
        updateMobileHeaderBackButton();
        updateHeaderDesktopActions();
        return;
    }

    content.innerHTML = `
        <div class="coming-soon">
            <h2>${t('bookmarks_title')}</h2>
            <p>${t('search_status_results', { count: bookmarks.length })}</p>
        </div>
    `;

    const questionMap = await resolveSavedQuestionMap(bookmarks);
    if (mainPageViewState?.type !== 'bookmarks' || mainPageViewState?.token !== viewToken) {
        return;
    }

    let html = `
        <div class="quiz-header" style="margin-bottom: 32px;">
            <h2 style="font-size: 24px; font-weight: 700;">${t('bookmarks_title')}</h2>
            <div style="display: flex; gap: 12px;">
                <button class="btn btn-secondary" onclick="clearBookmarks()">${t('common_clear')}</button>
                <button class="btn btn-secondary" onclick="backToMain()">${t('common_back')}</button>
            </div>
        </div>
        <div style="max-width: 900px;">
    `;

    bookmarks.forEach((item) => {
        const question = questionMap.get(`${item.ticket}:${item.question}`);
        if (!question) {
            return;
        }

        html += `
            <div class="question-card" style="margin-bottom: 24px;">
                <div style="color: var(--text-muted); font-size: 14px; margin-bottom: 12px;">
                    ${t('wrong_answers_card_title', { ticket: item.ticket, question: item.question })}
                </div>
                <div class="question-text">${escapeHtml(question.question)}</div>
                ${question.image ? `
                    <div class="question-image-container question-image-container-inline">
                        <img src="${question.image}" alt="${t('common_question_image')}" class="question-image">
                    </div>
                ` : ''}
                <div class="question-card-actions">
                    <button class="btn btn-primary" onclick="openSavedQuestion(${item.ticket}, ${item.question})">${t('common_open')}</button>
                    <button class="btn btn-secondary" onclick="removeBookmark(${item.ticket}, ${item.question}); openBookmarks();">${t('common_remove')}</button>
                </div>
            </div>
        `;
    });

    html += '</div>';
    content.innerHTML = html;
    updateMobileHeaderBackButton();
    updateHeaderDesktopActions();
}

function saveTicketProgress(
    ticketNumber,
    correct,
    totalQuestions = getTicketQuestionCount(ticketNumber, currentQuizMode),
    quizMode = currentQuizMode
) {
    const data = readJsonStorage(TICKET_PROGRESS_STORAGE_KEY, {});
    const progressKey = getTicketProgressStorageKey(ticketNumber, quizMode);
    data[progressKey] = {
        completed: true,
        correct: correct,
        totalQuestions: totalQuestions,
        date: new Date().toISOString()
    };

    // Backward compatibility for previously stored standard progress shape.
    if (quizMode === QUIZ_MODE_STANDARD) {
        data[ticketNumber] = data[progressKey];
    }

    writeJsonStorage(TICKET_PROGRESS_STORAGE_KEY, data);
}

function loadSavedData() {
    getStoredWrongAnswers();
    getStoredBookmarks();
    readJsonStorage(TICKET_PROGRESS_STORAGE_KEY, {});
}
