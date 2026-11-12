
"use strict";

/* =============================================
   PHYSICS LAB — 3.1.1
   Электр өрісі. Потенциал. Кернеу.
   BY DARKHAN
============================================= */

const $ = id => document.getElementById(id);

const esc = value => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

/* Формулалардағы таңбалар HTML арқылы салынады. */

const V = s => `<span class="vec">${s}</span>`;
const SUB = (s, n) => `${s}<sub>${n}</sub>`;
const POW = (s, n) => `${s}<sup>${n}</sup>`;

const F = {
  vector: `${V("F")} = q${V("E")}`,
  intensity: `E = <span class="frac"><span>F</span><span>q</span></span>`,
  point: `E = <span class="frac"><span>k|Q|</span><span>r<sup>2</sup></span></span>`,
  potential: `&phi; = <span class="frac"><span>W<sub>p</sub></span><span>q</span></span>`,
  voltage: `U = &phi;<sub>1</sub> - &phi;<sub>2</sub>`,
  work: `A = qU`,
  uniform: `U = Ed`,
  superposition:
    `${V("E")} = ${V("E₁")} + ${V("E₂")} + ...`
};

/* =============================================
   САБАҚ МАЗМҰНЫ
============================================= */

const lesson = {
  title: "Электр өрісінің кернеулігі. Потенциал. Потенциалдар айырымы",

  theory: [
    {
      title: "Электр өрісі дегеніміз не?",
      definition:
        "Электр өрісі — электр зарядтары тудыратын және басқа зарядтарға күшпен әсер ететін физикалық өріс.",
      detail:
        "Зарядталған денелер бір-біріне жанаспай-ақ әсер етеді. Бұл өзара әсерлесуді электр өрісі арқылы түсіндіреміз. Электр өрісі зарядталған дененің айналасындағы кеңістікте болады. Оны көзбен тікелей көру мүмкін емес, бірақ сынақ зарядқа әсер ететін күш арқылы анықтауға болады. Электр өрісі күштік және энергетикалық сипаттамалармен зерттеледі.",
      example:
        "Зарядталған екі денені жақындатқанда олардың тартылуы немесе тебілуі — электр өрісінің әсері.",
      warning:
        "Электр өрісі мен электр тогы бір нәрсе емес.",
      formula: F.vector,
      visual: "photo"
    },
    {
      title: "Электр өрісінің күш сызықтары",
      definition:
        "Күш сызықтары — әр нүктесінде жанамасы электр өрісі кернеулігінің бағытын көрсететін шартты сызықтар.",
      detail:
        "Оң нүктелік заряд тудыратын электр өрісінің сызықтары зарядтан сыртқа бағытталады. Теріс зарядтың өріс сызықтары зарядқа қарай бағытталады. Сызықтардың жиілігі өріс кернеулігінің үлкен немесе кіші екенін салыстыруға көмектеседі. Бір нүктеде кернеулік бағыты біреу болғандықтан күш сызықтары қиылыспайды. Күш сызықтарын нақты денелер немесе бөлшектердің міндетті қозғалыс жолы деп түсінбеу қажет.",
      example:
        "Оң және теріс зарядтардың арасында сызықтар оң зарядтан теріс зарядқа бағытталады.",
      warning:
        "Күш сызығы — көрнекі модель, нақты материалдық жіп емес.",
      formula: `${V("E")} — өріс бағыты`,
      visual: "field"
    },
    {
      title: "Электр өрісінің кернеулігі",
      definition:
        "Кернеулік — электр өрісінің күштік сипаттамасы, оң сынақ зарядқа әсер ететін күштің сол зарядқа қатынасына тең.",
      detail:
        "Кернеулік E әрпімен белгіленеді. Бұл векторлық шама болғандықтан оның модулі мен бағыты болады. Сынақ заряд өте кіші болып алынады, сондықтан ол зерттелетін өрісті елеулі өзгертпейді. Егер белгілі бір нүктедегі кернеулік 500 Н/Кл болса, сол нүктеге қойылған 1 Кл оң сынақ зарядқа 500 Н электр күші әсер етер еді. Кернеулік өлшем бірлігі — Н/Кл немесе В/м.",
      example:
        "F=0,8 Н және q=0,02 Кл болса, E=0,8/0,02=40 Н/Кл.",
      warning:
        "Кернеулік векторлық шама; теріс зарядқа әсер ететін күш кернеулікке қарсы бағытталады.",
      formula: F.intensity,
      visual: "field"
    },
    {
      title: "Нүктелік заряд тудыратын өріс",
      definition:
        "Вакуумдегі нүктелік заряд өрісінің кернеулік модулі заряд модуліне тура, арақашықтық квадратына кері пропорционал.",
      detail:
        "Нүктелік заряд — өлшемі есептің шартында қарастырылатын қашықтықпен салыстырғанда өте кіші дененің моделі. Оның өріс кернеулігін анықтау үшін электростатикалық тұрақты k, заряд модулі |Q| және арақашықтық r қолданылады. k шамамен 9·10⁹ Н·м²/Кл². Қашықтық екі есе артса, өріс кернеулігі төрт есе кемиді. Сондықтан зарядқа жақын жерде өріс күштірек болады.",
      example:
        "Q=2 мкКл және r=0,3 м болса, E=200 000 Н/Кл.",
      warning:
        "Микрокулонды кулонға, сантиметрді метрге айналдыру міндетті.",
      formula: F.point,
      visual: "point"
    },
    {
      title: "Суперпозиция принципі",
      definition:
        "Бірнеше зарядтың қорытқы электр өрісінің кернеулігі жеке кернеулік векторларының қосындысына тең.",
      detail:
        "Егер бір нүктеде бірнеше зарядтың электр өрісі бар болса, әр заряд жеке кернеулік тудырады. Олардың векторлық қосындысы қорытқы кернеулікті береді. Бір түзудің бойында бір бағыттағы кернеуліктердің модульдері қосылады. Қарама-қарсы бағыттағы кернеуліктердің модульдері азайтылады. Егер векторлар бұрыш жасап орналасса, геометриялық немесе координаталық қосу әдісі қолданылады.",
      example:
        "Оңға 300 Н/Кл және солға 100 Н/Кл бағытталған кернеуліктердің қорытқысы оңға 200 Н/Кл.",
      warning:
        "Векторлардың бағытын есепке алмау қате жауапқа әкеледі.",
      formula: F.superposition,
      visual: "vectors"
    },
    {
      title: "Электрлік потенциал",
      definition:
        "Потенциал — электр өрісінің энергетикалық сипаттамасы, потенциалдық энергияның зарядқа қатынасы.",
      detail:
        "Электрлік потенциал грек әрпі φ арқылы белгіленеді. Ол скаляр шама және вольтпен өлшенеді. Өрістің бір нүктесінде зарядтың потенциалдық энергиясы сол заряд шамасына байланысты болады. Потенциалдың өзі таңдалған нүктенің энергетикалық сипаттамасын көрсетеді. Бір ғана нүктедегі потенциалдың сандық мәні нөлдік деңгейдің таңдалуына байланысты болуы мүмкін.",
      example:
        "Потенциалдық энергия 12 Дж, заряд 0,04 Кл болса, потенциал 300 В.",
      warning:
        "Потенциал скаляр, ал электр өрісінің кернеулігі векторлық шама.",
      formula: F.potential,
      visual: "potential"
    },
    {
      title: "Потенциалдар айырымы",
      definition:
        "Потенциалдар айырымы — екі нүктедегі потенциалдардың айырмасы; ол кернеу деп аталады.",
      detail:
        "Потенциалдар айырымы U әрпімен белгіленеді және вольтпен өлшенеді. Бірінші нүктенің потенциалы φ₁, екінші нүктенікі φ₂ болса, бірінші нүктеден екінші нүктеге қатысты кернеу U=φ₁−φ₂. Кернеу заряд орын ауыстырғанда электр өрісі атқаратын жұмыспен байланысты. Потенциалдар айырымы электр тізбектерінде де маңызды рөл атқарады.",
      example:
        "φ₁=350 В және φ₂=−150 В болса, U=500 В.",
      warning:
        "Есепте теріс потенциалды азайтқанда таңбаны мұқият тексеріңдер.",
      formula: F.voltage,
      visual: "potential"
    },
    {
      title: "Электр өрісінің жұмысы",
      definition:
        "Электростатикалық өрістің зарядты бір нүктеден екінші нүктеге тасымалдағанда атқаратын жұмысы заряд пен кернеудің көбейтіндісіне тең.",
      detail:
        "Электр өрісінің жұмысы A арқылы белгіленеді, өлшем бірлігі — джоуль. Электростатикалық өрісте жасалған жұмыс бастапқы және соңғы нүктелердің потенциалдарына байланысты. Заряд қандай жолмен қозғалғанына тәуелді емес. Заряд пен потенциалдар айырымының таңбаларына қарай жұмыс оң, теріс немесе нөл болуы мүмкін. Бұл ерекшелік электр өрісінің консервативті екендігін білдіреді.",
      example:
        "q=0,02 Кл және U=200 В болса, A=4 Дж.",
      warning:
        "Жұмыстың таңбасы зарядтың таңбасына және орын ауыстыру бағытына байланысты.",
      formula: F.work,
      visual: "work"
    },
    {
      title: "Біртекті электр өрісі",
      definition:
        "Біртекті электр өрісі — кернеулік векторы барлық нүктесінде бірдей болатын өріс.",
      detail:
        "Біртекті өрістің күш сызықтары бір-біріне параллель және бірдей тығыздықпен көрсетіледі. Екі үлкен параллель металл пластинаның арасында, шеттерінен алыс орналасқан аймақта, біртекті өріс жуық түрде пайда болады. Өріс бағыты бойындағы екі нүкте арақашықтығы d болса, потенциалдар айырымы U=Ed формуласына сәйкес келеді. Бұл формула электр өрісінің кернеулігін немесе арақашықтықты табуға мүмкіндік береді.",
      example:
        "E=400 В/м, d=0,5 м болса, U=200 В.",
      warning:
        "d өріс бағыты бойынша алынуы керек.",
      formula: F.uniform,
      visual: "uniform"
    },
    {
      title: "Формулаларды дұрыс пайдалану",
      definition:
        "Физикалық есепті шешу кезінде берілгендерді SI жүйесіне келтіру, формуланы таңдау және жауаптың өлшем бірлігін тексеру керек.",
      detail:
        "Алдымен есепте қандай шамалар берілгенін жазып аламыз. Нені табу керектігін анықтаймыз. Содан кейін барлық мәндерді SI жүйесіне айналдырамыз: микрокулон — кулонға, сантиметр — метрге, милликулон — кулонға. Қажет болса формуланы белгісіз шамаға қатысты түрлендіреміз. Калькулятор көмегімен сандық есептеу жасап, жауабына өлшем бірлігін қоямыз. Соңында алынған нәтижені физикалық тұрғыдан бағалаймыз.",
      example:
        "5 мкКл = 5·10⁻⁶ Кл; 12 см = 0,12 м.",
      warning:
        "Өлшем бірліктерін түрлендірмей есептеу жиі үлкен қатеге әкеледі.",
      formula:
        "Берілгені → SI → Формула → Есептеу → Жауабы",
      visual: "units"
    }
  ],

  notes: [
    [
      "Электр өрісі",
      "Электр зарядтары тудыратын және басқа зарядтарға күшпен әсер ететін физикалық өріс. Электрлік әсерлесу осы өріс арқылы жүзеге асады.",
      "Күш пен кернеулік байланысы: F = qE.",
      "Заряд таңбасы күш бағытына әсер етеді."
    ],
    [
      "Күш сызықтары",
      "Электр өрісінің бағытын бейнелеуге арналған шартты сызықтар. Оң зарядтан сыртқа, теріс зарядқа қарай бағытталады.",
      "Өріс сызығына жанама — кернеулік бағыты.",
      "Күш сызықтары қиылыспайды."
    ],
    [
      "Электр өрісінің кернеулігі",
      "Өрістің берілген нүктесінде оң сынақ зарядқа әсер ететін күштің зарядқа қатынасы.",
      "E = F/q; 1 Н/Кл = 1 В/м.",
      "Кернеулік векторлық шама."
    ],
    [
      "Нүктелік зарядтың кернеулігі",
      "Вакуумдегі нүктелік зарядтың кернеулігі зарядтың модуліне тура және арақашықтық квадратына кері пропорционал.",
      "E = k|Q|/r²; k ≈ 9·10⁹.",
      "r екі есе артса, E төрт есе кемиді."
    ],
    [
      "Суперпозиция",
      "Бірнеше заряд тудырған қорытқы кернеулік олардың жеке кернеулік векторларын қосу арқылы табылады.",
      "E = E₁ + E₂ + ... (векторлық қосу).",
      "Бағыттарды ескеру керек."
    ],
    [
      "Электрлік потенциал",
      "Өрістің энергетикалық сипаттамасы. Потенциалдық энергияның заряд шамасына қатынасымен анықталады.",
      "φ = Wp/q; өлшем бірлігі В.",
      "Потенциал скаляр шама."
    ],
    [
      "Потенциалдар айырымы",
      "Электр өрісінің бірінші және екінші нүктелеріндегі потенциалдардың айырмасы.",
      "U = φ₁ − φ₂.",
      "Кернеудің өлшем бірлігі — вольт."
    ],
    [
      "Электр өрісінің жұмысы",
      "Электростатикалық өрістің зарядты тасымалдағанда атқаратын жұмысы.",
      "A = qU; өлшем бірлігі Дж.",
      "Жұмыс оң немесе теріс болуы мүмкін."
    ],
    [
      "Біртекті электр өрісі",
      "Кернеулік векторы барлық нүктеде тұрақты болатын электр өрісі.",
      "U = Ed; E = U/d; d = U/E.",
      "d өріс бағыты бойынша өлшенеді."
    ],
    [
      "SI өлшем бірліктері",
      "Физикалық есептерде зарядты кулонмен, қашықтықты метрмен, күшті ньютонмен, жұмысты джоульмен жазамыз.",
      "1 мкКл = 10⁻⁶ Кл; 1 мКл = 10⁻³ Кл; 1 см = 0,01 м.",
      "Жауаптың өлшем бірлігі міндетті."
    ]
  ],

  problems: [
    [
      ["0,02 Кл зарядқа 0,6 Н күш әсер етеді. Өріс кернеулігін табыңдар.",
       "F = 0,6 Н; q = 0,02 Кл", "E",
       "E = F/q = 0,6/0,02 = 30 Н/Кл."],
      ["q = 0,05 Кл, U = 120 В. Электр өрісінің жұмысын табыңдар.",
       "q = 0,05 Кл; U = 120 В", "A",
       "A = qU = 0,05·120 = 6 Дж."],
      ["E = 500 Н/Кл, q = 0,004 Кл. Электр күшінің модулін табыңдар.",
       "E = 500 Н/Кл; q = 0,004 Кл", "F",
       "F = qE = 0,004·500 = 2 Н."],
      ["Бірінші нүктенің потенциалы 270 В, екіншісінікі 90 В. Кернеуді табыңдар.",
       "φ₁ = 270 В; φ₂ = 90 В", "U",
       "U = 270 − 90 = 180 В."]
    ],
    [
      ["E = 450 Н/Кл және F = 0,9 Н. Оң зарядтың шамасын милликулонмен табыңдар.",
       "E = 450 Н/Кл; F = 0,9 Н", "q",
       "q = F/E = 0,002 Кл = 2 мКл."],
      ["Біртекті өрісте U = 360 В, d = 12 см. Кернеулікті есептеңдер.",
       "U = 360 В; d = 0,12 м", "E",
       "E = U/d = 360/0,12 = 3000 В/м."],
      ["φ₁ = 350 В, φ₂ = −120 В. q = 6 мКл оң зарядты тасымалдағандағы өріс жұмысын табыңдар.",
       "φ₁ = 350 В; φ₂ = −120 В; q = 0,006 Кл",
       "U және A",
       "U = 350 − (−120) = 470 В.\nA = qU = 0,006·470 = 2,82 Дж."],
      ["E = 800 В/м. Өріс бағыты бойынша d = 25 см қашықтықтағы кернеуді табыңдар.",
       "E = 800 В/м; d = 0,25 м", "U",
       "U = Ed = 800·0,25 = 200 В."]
    ],
    [
      ["Q = 3,6 мкКл зарядтан 8,5 см қашықтықтағы кернеуліктің модулін анықтаңдар.",
       "Q = 3,6·10⁻⁶ Кл; r = 0,085 м", "E",
       "E = k|Q|/r².\nE = 9·10⁹·3,6·10⁻⁶/(0,085²).\nE ≈ 4,48·10⁶ Н/Кл."],
      ["E = 2,45·10⁴ В/м өрісінде q = 7,2 мкКл оң заряд өріс бағытымен 18,5 см орын ауыстырды. Жұмысты табыңдар.",
       "E = 24500 В/м; q = 7,2·10⁻⁶ Кл; d = 0,185 м",
       "U және A",
       "U = Ed = 4532,5 В.\nA = qU = 0,032634 Дж."],
      ["φ₁ = 1250 В, φ₂ = −840 В және q = 0,0035 Кл. Өріс жұмысын есептеңдер.",
       "φ₁ = 1250 В; φ₂ = −840 В; q = 0,0035 Кл",
       "U және A",
       "U = 1250 − (−840) = 2090 В.\nA = qU = 7,315 Дж."],
      ["Q = 8,2 мкКл нүктелік зарядтан 14 см қашықтықтағы E-ні және q = −2,5 мкКл зарядқа әсер ететін күш модулін табыңдар.",
       "Q = 8,2·10⁻⁶ Кл; r = 0,14 м; |q| = 2,5·10⁻⁶ Кл",
       "E және F",
       "E = 9·10⁹·8,2·10⁻⁶/(0,14²) ≈ 3,765·10⁶ Н/Кл.\nF = |q|E ≈ 9,41 Н."]
    ]
  ],

  quiz: [
    ["Жылдам тест", "Кернеулік қандай физикалық шама?",
      ["Скаляр", "Векторлық", "Өлшемсіз", "Тұрақты"], 1],
    ["Формуланы тап", "Кернеуліктің дұрыс формуласы?",
      ["E = F/q", "E = Fq", "E = q/F", "E = Fd"], 0],
    ["Өлшем бірлігі", "Электр өрісі кернеулігінің өлшем бірлігі?",
      ["Дж", "Кл", "Н/Кл", "А"], 2],
    ["Кім жылдам?", "Потенциал қандай шама?",
      ["Векторлық", "Скаляр", "Күш", "Үдеу"], 1],
    ["Есеп батлы", "F = 0,6 Н, q = 0,02 Кл. E қанша?",
      ["3 Н/Кл", "30 Н/Кл", "300 Н/Кл", "0,03 Н/Кл"], 1],
    ["Формула сайысы", "Электростатикалық өрістің жұмысы?",
      ["A = qU", "A = U/q", "A = q/U", "A = Fr²"], 0],
    ["Логика", "Нүктелік зарядтан r екі есе артса, E қалай өзгереді?",
      ["2 есе артады", "4 есе кемиді", "Өзгермейді", "4 есе артады"], 1],
    ["Жылдам жауап", "1 микрокулон неше кулон?",
      ["10⁻³", "10⁻⁶", "10⁶", "10⁻²"], 1],
    ["Қатені тап", "Теріс зарядқа әсер ететін күш бағыты?",
      ["E бағытымен", "E-ге қарсы", "Әрқашан жоғары", "Нөл"], 1],
    ["Есеп сайысы", "U = 200 В, d = 0,1 м. E қанша?",
      ["20 В/м", "200 В/м", "2000 В/м", "0,0005 В/м"], 2],
    ["Потенциал батлы", "φ₁ = 300 В, φ₂ = 100 В. U қанша?",
      ["400 В", "200 В", "3 В", "0 В"], 1],
    ["Физика есеп", "q = 0,01 Кл, U = 50 В. A қанша?",
      ["0,5 Дж", "5 Дж", "50 Дж", "500 Дж"], 0],
    ["Өлшемді тап", "Потенциал қандай бірлікпен өлшенеді?",
      ["Н", "В", "Кл", "А"], 1],
    ["Формула шебері", "Нүктелік заряд өрісінің кернеулік модулі?",
      ["kQ/r", "k|Q|/r²", "kr²/Q", "Qr²"], 1],
    ["Біртекті өріс", "E = 600 В/м, d = 0,5 м. U қанша?",
      ["120 В", "300 В", "600 В", "1200 В"], 1],
    ["Капитандар сайысы", "Қарама-қарсы 300 және 100 Н/Кл векторлардың қорытқы модулі?",
      ["400", "200", "30000", "0"], 1],
    ["Калькулятор батлы", "Q = 2 мкКл, r = 0,3 м. E модулі қанша?",
      ["2·10³", "2·10⁵", "2·10⁷", "2·10⁹"], 1],
    ["Финал", "Электростатикалық өрістің жұмысы неге тәуелді?",
      ["Жол ұзындығына ғана", "Бастапқы және соңғы нүктелерге", "Уақытқа ғана", "Массаға ғана"], 1]
  ],

  homework: [
    "F = 1,8 Н, q = 0,006 Кл. Өріс кернеулігін табыңдар.",
    "Q = 5,4 мкКл, r = 12 см. Нүктелік заряд өрісінің кернеулігін анықтаңдар.",
    "φ₁ = 420 В, φ₂ = −80 В және q = 0,035 Кл. Электр өрісінің жұмысын есептеңдер.",
    "E = 1800 В/м, d = 0,075 м. Потенциалдар айырымын табыңдар.",
    "Q = 7,6 мкКл, r = 0,25 м. Өріс кернеулігін және сол нүктедегі q = −3,2 мкКл зарядқа әсер ететін күш модулін есептеңдер."
  ]
};

/* =============================================
   СУРЕТТЕР ЖӘНЕ ФИЗИКАЛЫҚ СХЕМАЛАР
============================================= */

const FIELD_PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/3/30/Semolina-grains-on-castor-oil-dipole-field.jpg";

function pointDiagram() {
  const lines = [];

  for (let i = 0; i < 12; i++) {
    const angle = i * Math.PI / 6;
    const x1 = 180 + 42 * Math.cos(angle);
    const y1 = 120 + 42 * Math.sin(angle);
    const x2 = 180 + 93 * Math.cos(angle);
    const y2 = 120 + 93 * Math.sin(angle);

    lines.push(`
      <line x1="${x1}" y1="${y1}"
            x2="${x2}" y2="${y2}"
            stroke="#1684ce" stroke-width="3"
            marker-end="url(#arrowPoint)"/>
    `);
  }

  return `
    <svg viewBox="0 0 360 240"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowPoint" markerWidth="7"
          markerHeight="7" refX="6" refY="3"
          orient="auto">
          <path d="M0 0 L6 3 L0 6"
                stroke="#1684ce" fill="none"/>
        </marker>
      </defs>
      ${lines.join("")}
      <circle cx="180" cy="120" r="29"
              fill="#e35c6b"/>
      <text x="180" y="132" font-size="40"
            fill="white" text-anchor="middle">+</text>
    </svg>
  `;
}

function diagram(type) {
  if (type === "field" || type === "point") {
    return pointDiagram();
  }

  if (type === "vectors") {
    return `
      <svg viewBox="0 0 360 240">
        <line x1="150" y1="85" x2="310" y2="85"
          stroke="#087dcc" stroke-width="5"/>
        <polygon points="310,76 330,85 310,94"
          fill="#087dcc"/>
        <line x1="150" y1="150" x2="72" y2="150"
          stroke="#d84257" stroke-width="5"/>
        <polygon points="72,141 52,150 72,159"
          fill="#d84257"/>
        <text x="230" y="63" font-size="27"
          fill="#087dcc">E1</text>
        <text x="85" y="184" font-size="27"
          fill="#d84257">E2</text>
        <text x="180" y="220" text-anchor="middle"
          font-size="22">Бағыттарды ескер!</text>
      </svg>`;
  }

  if (type === "potential" || type === "work") {
    return `
      <svg viewBox="0 0 360 240">
        <rect x="20" y="45" width="125" height="145"
          rx="15" fill="#dcefff" stroke="#62a4d3"/>
        <rect x="215" y="45" width="125" height="145"
          rx="15" fill="#e0f8eb" stroke="#52b78a"/>
        <text x="82" y="116" font-size="33"
          text-anchor="middle" fill="#087dcc">φ1</text>
        <text x="277" y="116" font-size="33"
          text-anchor="middle" fill="#15844c">φ2</text>
        <path d="M154 115 H204" stroke="#087dcc"
          stroke-width="5"/>
        <polygon points="204,106 219,115 204,124"
          fill="#087dcc"/>
        <text x="180" y="222" text-anchor="middle"
          font-size="24">U = φ1 − φ2</text>
      </svg>`;
  }

  if (type === "uniform") {
    return `
      <svg viewBox="0 0 360 240">
        <rect x="33" y="24" width="13" height="185"
          rx="4" fill="#e35c6b"/>
        <rect x="314" y="24" width="13" height="185"
          rx="4" fill="#087dcc"/>
        ${[65,110,155].map(y => `
          <line x1="68" y1="${y}" x2="282" y2="${y}"
            stroke="#1684ce" stroke-width="4"/>
          <polygon points="282,${y-9} 300,${y} 282,${y+9}"
            fill="#1684ce"/>
        `).join("")}
        <text x="32" y="18" font-size="22">+</text>
        <text x="314" y="18" font-size="22">−</text>
        <text x="180" y="228" text-anchor="middle"
          font-size="24">E →</text>
      </svg>`;
  }

  return `
    <svg viewBox="0 0 360 240">
      <text x="180" y="65" text-anchor="middle"
        font-size="29" fill="#087dcc">мкКл → Кл</text>
      <text x="180" y="122" text-anchor="middle"
        font-size="29" fill="#14824a">см → м</text>
      <text x="180" y="183" text-anchor="middle"
        font-size="25" fill="#d33449">SI жүйесі</text>
    </svg>`;
}

function makeVisual(type) {
  if (type === "photo") {
    return `
      <div class="visual">
        <img class="physics-photo"
          src="${FIELD_PHOTO}"
          alt="Электр өрісінің күш сызықтары"
          onerror="
            this.style.display='none';
            this.nextElementSibling.hidden=false;
          ">
        <div hidden>${pointDiagram()}</div>
        <p class="image-caption">
          Электр өрісінің зертханалық фотосуреті.
          Wikimedia Commons.
        </p>
      </div>`;
  }

  return `<div class="visual">${diagram(type)}</div>`;
}

/* =============================================
   ОҚУШЫЛАР, ҚАТЫСУ, ҮШ КОМАНДА
============================================= */

const initialNames = [
  "Рамазан", "Тұрғанжан", "Нұрай", "Әлқуат",
  "Шырай", "Гүлсезім", "Маржан", "Мариям",
  "Жансая", "Азиза", "Ақсезім", "Нұрболсын",
  "Ақнұр", "Іңкәр", "Асхат", "Аяжан",
  "Мирас", "Санжар", "Ерасыл", "Нұрасыл",
  "Расул", "Айнұр", "Дархан", "Айкерім"
];

const STORE = "physics311_fixed_";

function load(key, fallback) {
  try {
    const v = localStorage.getItem(STORE + key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
}

let students = load(
  "students",
  initialNames.map((name, i) => ({
    id: i + 1,
    name,
    present: true
  }))
);

let teams = load("teams", [[], [], []]);
let scores = [0, 0, 0];
let answered = {};
let speakerHistory = [[], [], []];
let currentSpeaker = "";
let currentPage = 0;
let pages = [];
let advanceTimer = null;
let zCounter = 100;
const startedAt = Date.now();

function save() {
  localStorage.setItem(
    STORE + "students",
    JSON.stringify(students)
  );
  localStorage.setItem(
    STORE + "teams",
    JSON.stringify(teams)
  );
}

function showPanel(id) {
  const el = $(id);
  el.classList.remove("hidden");
  el.style.zIndex = ++zCounter;
}

function hidePanel(id) {
  $(id).classList.add("hidden");
}

function openAttendance() {
  drawAttendance();
  showPanel("attendancePanel");
}

function drawAttendance() {
  $("attendanceList").innerHTML = students.map(s => `
    <div class="student-row">
      <input type="checkbox"
        ${s.present ? "checked" : ""}
        onchange="setPresent(${s.id},this.checked)">
      <span>${esc(s.name)}</span>
      <button onclick="removeStudent(${s.id})">
        Өшіру
      </button>
    </div>
  `).join("");

  const count = students.filter(s => s.present).length;

  $("attendanceCount").textContent =
    `Барлығы: ${students.length} | ` +
    `Бар: ${count} | ` +
    `Жоқ: ${students.length - count}`;
}

function markAll(value) {
  students.forEach(s => s.present = value);
  resetTeamsAndGame();
  drawAttendance();
}

function setPresent(id, value) {
  const student = students.find(s => s.id === id);
  if (student) student.present = value;
  resetTeamsAndGame();
  drawAttendance();
}

function addStudent() {
  const input = $("newStudent");
  const name = input.value.trim();

  if (!name) return;

  if (students.some(s =>
    s.name.toLocaleLowerCase("kk") ===
    name.toLocaleLowerCase("kk")
  )) {
    alert("Бұл есім тізімде бар.");
    return;
  }

  const newId = students.length
    ? Math.max(...students.map(s => s.id)) + 1
    : 1;

  students.push({
    id: newId,
    name,
    present: true
  });

  input.value = "";
  resetTeamsAndGame();
  drawAttendance();
}

function removeStudent(id) {
  students = students.filter(s => s.id !== id);
  resetTeamsAndGame();
  drawAttendance();
}

function resetTeamsAndGame() {
  stopAutoAdvance();
  teams = [[], [], []];
  scores = [0, 0, 0];
  answered = {};
  speakerHistory = [[], [], []];
  currentSpeaker = "";
  save();
  drawTeams();
  renderPage();
}

function presentStudents() {
  return students.filter(s => s.present);
}

function randomTeams(openWindow = false) {
  const list = [...presentStudents()];

  if (list.length === 0) {
    alert("Сабаққа келген оқушыларды белгілеңіз.");
    return;
  }

  // Фишер-Йейтс кездейсоқ араластыруы.
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }

  teams = [[], [], []];

  list.forEach((student, i) => {
    teams[i % 3].push(student.id);
  });

  stopAutoAdvance();
  scores = [0, 0, 0];
  answered = {};
  speakerHistory = [[], [], []];

  save();

  if (isQuizPage()) {
    currentSpeaker = pickSpeaker(teamForQuestion(quizIndex()));
  }

  drawTeams();
  renderPage();

  if (openWindow) {
    hidePanel("attendancePanel");
    showPanel("teamsPanel");
  }
}

function namesInTeam(teamIndex) {
  return teams[teamIndex]
    .map(id => students.find(s => s.id === id))
    .filter(s => s && s.present)
    .map(s => s.name);
}

function drawTeams() {
  $("teamLists").innerHTML = [0, 1, 2].map(i => `
    <div class="team-card" style="margin-bottom:15px">
      <h3>${i + 1}-команда</h3>
      <p>
        ${namesInTeam(i).map(esc).join(", ") ||
        "Бұл командада оқушы жоқ"}
      </p>
      <div class="score">${scores[i]} ұпай</div>
    </div>
  `).join("");
}

function openTeams() {
  drawTeams();
  showPanel("teamsPanel");
}

function teamForQuestion(index) {
  return index % 3;
}

function pickSpeaker(teamIndex) {
  const names = namesInTeam(teamIndex);

  if (names.length === 0) return "Қатысушы жоқ";

  let pool = names.filter(
    name => !speakerHistory[teamIndex].includes(name)
  );

  if (pool.length === 0) {
    speakerHistory[teamIndex] = [];
    pool = names;
  }

  const name = pool[Math.floor(Math.random() * pool.length)];
  speakerHistory[teamIndex].push(name);

  return name;
}

/* =============================================
   САБАҚ БЕТТЕРІ
============================================= */

function introPage() {
  return `
    <section class="slide">
      <span class="eyebrow">ФИЗИКА • 3.1.1</span>
      <div class="card">
        <h1>${esc(lesson.title)}</h1>

        <div class="definition">
          <p class="green">
            Электр өрісінің күштік және энергетикалық
            қасиеттерін үйренеміз.
          </p>
        </div>

        <div class="formula">
          ${F.intensity} &nbsp; ${F.work}
        </div>

        <div class="grid-two">
          <div class="example">
            <p>📘 Түсіндірме, конспект, 12 есеп</p>
          </div>
          <div class="definition">
            <p>🏆 3 команда, 18 ойын сұрағы</p>
          </div>
        </div>

        <p class="blue">
          1-курс • 80 минут • By Darkhan
        </p>
      </div>
    </section>`;
}

function theoryPage(t, i) {
  return `
    <section class="slide">
      <span class="eyebrow">
        ТҮСІНДІРМЕ ${i + 1}/${lesson.theory.length}
      </span>

      <h2>${esc(t.title)}</h2>

      <div class="card">
        <div class="definition">
          <p class="green">${esc(t.definition)}</p>
        </div>

        <div class="photo-layout">
          ${makeVisual(t.visual)}

          <div>
            <p>${esc(t.detail)}</p>
          </div>
        </div>

        <div class="formula">${t.formula}</div>

        <div class="example">
          <p class="gold">
            Мысал: ${esc(t.example)}
          </p>
        </div>

        <div class="warning">
          <p class="red">
            Маңызды: ${esc(t.warning)}
          </p>
        </div>
      </div>
    </section>`;
}

function notebookPage(part) {
  const first = part * 2;

  return `
    <section class="slide">
      <span class="eyebrow">ДӘПТЕРГЕ ЖАЗЫП АЛ</span>
      <h2>📘 Конспект — ${part + 1}-бөлім</h2>

      ${lesson.notes.slice(first, first + 2)
        .map((n, i) => `
          <div class="notebook-item">
            <div class="notebook-number">
              ${first + i + 1}. ${esc(n[0])}
            </div>

            <p class="green">${esc(n[1])}</p>
            <p class="blue">${esc(n[2])}</p>
            <p class="red">${esc(n[3])}</p>
          </div>
        `).join("")}
    </section>`;
}

function problemPage(level, part) {
  const labels = [
    "🟢 1-деңгей — Оңай",
    "🟡 2-деңгей — Орташа",
    "🔴 3-деңгей — Күрделі"
  ];

  const offset = part * 2;

  return `
    <section class="slide">
      <span class="level ${["easy","medium","hard"][level]}">
        ${labels[level]}
      </span>

      <h2>✍️ Дәптерде шығарылатын есептер</h2>

      ${level === 2 ? `
        <div class="example">
          <p class="gold">
            🧮 Калькуляторды қолданыңдар.
            Барлық шешу қадамын дәптерге жазыңдар.
          </p>
        </div>
      ` : ""}

      ${lesson.problems[level]
        .slice(offset, offset + 2)
        .map((p, i) => `
          <div class="problem-card">
            <p class="problem-title">
              ${offset + i + 1}-есеп. ${esc(p[0])}
            </p>

            <div class="problem-data">
              <span class="blue">Берілгені:</span>
              ${esc(p[1])}
            </div>

            <div class="problem-data">
              <span class="green">Табу керек:</span>
              ${esc(p[2])}
            </div>

            <p>
              SI → Формула → Түрлендіру → Шешуі → Жауабы
            </p>

            <button onclick="toggleAnswer('ans_${level}_${part}_${i}')">
              Жауапты көрсету
            </button>

            <div class="answer hidden"
                 id="ans_${level}_${part}_${i}">
              ${esc(p[3])}
            </div>
          </div>
        `).join("")}
    </section>`;
}

function toggleAnswer(id) {
  $(id).classList.toggle("hidden");
}

function quizStart() {
  const notePages = Math.ceil(lesson.notes.length / 2);
  const problemPages = lesson.problems.reduce(
    (sum, group) => sum + Math.ceil(group.length / 2),
    0
  );

  return 1 + lesson.theory.length +
    notePages + problemPages;
}

function quizIndex() {
  return currentPage - quizStart();
}

function isQuizPage() {
  return quizIndex() >= 0 &&
    quizIndex() < lesson.quiz.length;
}

function quizPage(item, index) {
  const [type, question, options, correct] = item;
  const team = teamForQuestion(index);
  const result = answered[index];

  return `
    <section class="slide">
      <span class="eyebrow">
        КОМАНДАЛЫҚ ОЙЫН ${index + 1}/${lesson.quiz.length}
      </span>

      <h2>🏆 ${esc(type)}</h2>

      <div class="team-turn">
        ${[0, 1, 2].map(t => `
          <span class="turn-pill ${t === team ? "active" : ""}">
            ${t + 1}-команда • ${scores[t]} ұпай
          </span>
        `).join("")}
      </div>

      <div class="player-banner">
        <strong>${team + 1}-команданың кезегі</strong>
        <p>
          🎲 Жауап беретін оқушы:
          <b>${esc(currentSpeaker || "Таңдалуда...")}</b>
        </p>
      </div>

      <div class="card">
        <p class="quiz-question">
          ${esc(question)}
        </p>

        <div class="choices">
          ${options.map((option, i) => `
            <button
              class="choice
                ${result && i === correct ? "correct" : ""}
                ${result &&
                  i === result.choice &&
                  i !== correct ? "wrong" : ""}"
              onclick="submitAnswer(${index},${i})"
              ${result ? "disabled" : ""}>
              ${"ABCD"[i]}. ${esc(option)}
            </button>
          `).join("")}
        </div>

        ${result ? `
          <div class="answer">
            ${result.choice === correct
              ? "✅ Дұрыс! +10 ұпай"
              : "❌ Қате жауап"}

            Дұрыс жауап: ${esc(options[correct])}
          </div>

          <p class="blue">
            Келесі командаға автоматты өтеді...
          </p>
        ` : ""}
      </div>
    </section>`;
}

function summaryPage() {
  const highest = Math.max(...scores);

  return `
    <section class="slide">
      <span class="eyebrow">САБАҚ ҚОРЫТЫНДЫСЫ</span>
      <h2>🏆 Командалардың нәтижелері</h2>

      <div class="grid-three">
        ${scores.map((score, i) => `
          <div class="team-card">
            <h3>${i + 1}-команда</h3>
            <div class="score">${score} ұпай</div>
            <p>
              ${score === highest && score > 0
                ? "🏅 Ең жоғары нәтиже"
                : "Жарайсыңдар!"}
            </p>
          </div>
        `).join("")}
      </div>

      <div class="card">
        <h3>Қорытынды сұрақтар</h3>

        <p>Электр өрісінің кернеулігі дегеніміз не?</p>
        <p>Потенциал мен потенциалдар айырымының айырмашылығы қандай?</p>
        <p>Қай есепте формуланы түрлендіруге тура келді?</p>

        <button onclick="restartGame()">
          🔄 Ойынды қайта бастау
        </button>
      </div>
    </section>`;
}

function homeworkPage() {
  return `
    <section class="slide">
      <span class="eyebrow">ҮЙ ТАПСЫРМАСЫ</span>
      <h2>🏠 Дәптерге шығарылатын есептер</h2>

      <div class="card">
        <ol>
          ${lesson.homework.map(task => `
            <li>${esc(task)}</li>
          `).join("")}
        </ol>

        <div class="warning">
          <p class="red">
            Берілгені, SI жүйесі, формула,
            түрлендіру, есептеу және жауап
            міндетті түрде жазылсын.
          </p>
        </div>
      </div>

      <p class="blue">
        Сау болыңыздар! By Darkhan
      </p>
    </section>`;
}

function buildPages() {
  pages = [
    introPage(),

    ...lesson.theory.map(theoryPage),

    ...Array.from(
      { length: Math.ceil(lesson.notes.length / 2) },
      (_, i) => notebookPage(i)
    ),

    ...lesson.problems.flatMap((group, level) =>
      Array.from(
        { length: Math.ceil(group.length / 2) },
        (_, part) => problemPage(level, part)
      )
    ),

    ...lesson.quiz.map(quizPage),

    summaryPage(),
    homeworkPage()
  ];
}

function renderPage() {
  buildPages();

  currentPage = Math.max(
    0,
    Math.min(currentPage, pages.length - 1)
  );

  $("screen").innerHTML = pages[currentPage];

  $("pageLabel").textContent =
    `${currentPage + 1} / ${pages.length}`;

  $("progressFill").style.width =
    `${100 * (currentPage + 1) / pages.length}%`;
}

function stopAutoAdvance() {
  if (advanceTimer !== null) {
    clearTimeout(advanceTimer);
    advanceTimer = null;
  }
}

function changePage(direction) {
  stopAutoAdvance();

  const previous = currentPage;

  currentPage = Math.max(
    0,
    Math.min(pages.length - 1, currentPage + direction)
  );

  if (currentPage !== previous && isQuizPage()) {
    currentSpeaker = pickSpeaker(
      teamForQuestion(quizIndex())
    );
  }

  renderPage();
}

function submitAnswer(index, choice) {
  if (answered[index]) return;

  const currentTeam = teamForQuestion(index);

  if (!namesInTeam(currentTeam).length) {
    alert("Оқушыларды үш командаға бөліңіз.");
    openAttendance();
    return;
  }

  const correct = lesson.quiz[index][3];

  answered[index] = {
    team: currentTeam,
    choice
  };

  if (choice === correct) {
    scores[currentTeam] += 10;
  }

  renderPage();
  drawTeams();

  // Жауаптан кейін келесі команда автоматты шығады.
  advanceTimer = setTimeout(() => {
    advanceTimer = null;

    if (currentPage !== quizStart() + index) return;

    currentPage = Math.min(
      currentPage + 1,
      pages.length - 1
    );

    if (isQuizPage()) {
      currentSpeaker = pickSpeaker(
        teamForQuestion(quizIndex())
      );
    }

    renderPage();
  }, 2500);
}

function restartGame() {
  stopAutoAdvance();
  scores = [0, 0, 0];
  answered = {};
  speakerHistory = [[], [], []];

  if (isQuizPage()) {
    currentSpeaker = pickSpeaker(
      teamForQuestion(quizIndex())
    );
  }

  renderPage();
  drawTeams();
}

/* =============================================
   ЕРКІН ҚОЗҒАЛАТЫН ТЕРЕЗЕЛЕР
============================================= */

document.querySelectorAll(".floating").forEach(panel => {
  let dragging = false;
  let offsetX = 0;
  let offsetY = 0;

  panel.addEventListener("pointerdown", e => {
    // Батырма мен енгізу өрістері басыла беруі тиіс.
    if (e.target.closest(
      "button,input,select,textarea,label,a"
    )) return;

    const box = panel.getBoundingClientRect();

    offsetX = e.clientX - box.left;
    offsetY = e.clientY - box.top;
    dragging = true;

    panel.style.zIndex = ++zCounter;
    panel.setPointerCapture(e.pointerId);

    e.preventDefault();
  });

  panel.addEventListener("pointermove", e => {
    if (!dragging) return;

    const x = Math.max(
      0,
      Math.min(
        innerWidth - panel.offsetWidth,
        e.clientX - offsetX
      )
    );

    const y = Math.max(
      0,
      Math.min(
        innerHeight - panel.offsetHeight,
        e.clientY - offsetY
      )
    );

    panel.style.left = x + "px";
    panel.style.top = y + "px";
    panel.style.right = "auto";
  });

  panel.addEventListener("pointerup", () => {
    dragging = false;
  });

  panel.addEventListener("pointercancel", () => {
    dragging = false;
  });
});

/* =============================================
   МАТЕМАТИКАЛЫҚ КАЛЬКУЛЯТОР
============================================= */

let mathExpression = "";

const mathButtons = [
  "7", "8", "9", "÷",
  "4", "5", "6", "×",
  "1", "2", "3", "−",
  "0", ".", "(", ")",
  "+", "^", "√", "π",
  "sin", "cos", "tan", "log",
  "ln", "C", "⌫", "="
];

$("mathKeys").innerHTML = mathButtons.map(key => `
  <button onclick="mathPress('${key}')">
    ${key}
  </button>
`).join("");

function mathPress(key) {
  if (key === "C") {
    mathExpression = "";
    $("mathResult").textContent = "Тазаланды.";
  } else if (key === "⌫") {
    mathExpression = mathExpression.slice(0, -1);
  } else if (key === "=") {
    try {
      const answer = evaluateMath(mathExpression);

      $("mathResult").textContent =
        "Жауабы: " + Number(answer.toPrecision(12));
    } catch {
      $("mathResult").textContent =
        "Өрнекті тексеріңіз.";
    }
    return;
  } else if (
    ["√", "sin", "cos", "tan", "log", "ln"]
      .includes(key)
  ) {
    mathExpression += key + "(";
  } else {
    mathExpression += key;
  }

  $("mathDisplay").value = mathExpression;
}

/* eval қолданбайтын өрнек парсері */

function evaluateMath(expression) {
  const source = expression
    .replaceAll("×", "*")
    .replaceAll("÷", "/")
    .replaceAll("−", "-")
    .replaceAll("π", String(Math.PI))
    .replace(/\s+/g, "");

  const tokens = source.match(
    /(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|√|sin|cos|tan|log|ln|[()+\-*/^]/gi
  );

  if (!tokens || tokens.join("") !== source) {
    throw Error("Белгісіз таңба");
  }

  let position = 0;

  function atom() {
    const token = tokens[position++];

    if (token === "(") {
      const value = add();
      if (tokens[position++] !== ")") {
        throw Error("Жақша");
      }
      return value;
    }

    if (
      token !== undefined &&
      !Number.isNaN(Number(token))
    ) {
      return Number(token);
    }

    if (
      ["√", "sin", "cos", "tan", "log", "ln"]
        .includes(token)
    ) {
      if (tokens[position++] !== "(") {
        throw Error("Функция");
      }

      const x = add();

      if (tokens[position++] !== ")") {
        throw Error("Жақша");
      }

      if (token === "√") return Math.sqrt(x);
      if (token === "sin") return Math.sin(x * Math.PI / 180);
      if (token === "cos") return Math.cos(x * Math.PI / 180);
      if (token === "tan") return Math.tan(x * Math.PI / 180);
      if (token === "log") return Math.log10(x);
      if (token === "ln") return Math.log(x);
    }

    throw Error("Қате мән");
  }

  function power() {
    let value = atom();

    if (tokens[position] === "^") {
      position++;
      value = Math.pow(value, unary());
    }

    return value;
  }

  function unary() {
    if (tokens[position] === "-") {
      position++;
      return -unary();
    }

    if (tokens[position] === "+") {
      position++;
      return unary();
    }

    return power();
  }

  function multiply() {
    let value = unary();

    while (["*", "/"].includes(tokens[position])) {
      const operator = tokens[position++];
      const right = unary();

      value = operator === "*"
        ? value * right
        : value / right;
    }

    return value;
  }

  function add() {
    let value = multiply();

    while (["+", "-"].includes(tokens[position])) {
      const operator = tokens[position++];
      const right = multiply();

      value = operator === "+"
        ? value + right
        : value - right;
    }

    return value;
  }

  const result = add();

  if (
    position !== tokens.length ||
    !Number.isFinite(result)
  ) {
    throw Error("Нәтиже анықталмаған");
  }

  return result;
}

/* =============================================
   ФИЗИКАЛЫҚ КАЛЬКУЛЯТОР
============================================= */

const formulas = [
  {
    name: "Кернеулік E = F/q",
    vars: ["E", "F", "q"],
    units: ["Н/Кл", "Н", "Кл"],
    solve: (v, x) =>
      x === "E" ? v.F / v.q :
      x === "F" ? v.E * v.q :
      v.F / v.E
  },
  {
    name: "Нүктелік заряд E = k|Q|/r²",
    vars: ["E", "Q", "r"],
    units: ["Н/Кл", "Кл (модулі)", "м"],
    solve: (v, x) =>
      x === "E"
        ? 9e9 * Math.abs(v.Q) / v.r ** 2
        : x === "Q"
          ? v.E * v.r ** 2 / 9e9
          : Math.sqrt(9e9 * Math.abs(v.Q) / v.E)
  },
  {
    name: "Электр жұмысы A = qU",
    vars: ["A", "q", "U"],
    units: ["Дж", "Кл", "В"],
    solve: (v, x) =>
      x === "A" ? v.q * v.U :
      x === "q" ? v.A / v.U :
      v.A / v.q
  },
  {
    name: "Біртекті өріс U = Ed",
    vars: ["U", "E", "d"],
    units: ["В", "В/м", "м"],
    solve: (v, x) =>
      x === "U" ? v.E * v.d :
      x === "E" ? v.U / v.d :
      v.U / v.E
  },
  {
    name: "Потенциал phi = W/q",
    vars: ["phi", "W", "q"],
    units: ["В", "Дж", "Кл"],
    solve: (v, x) =>
      x === "phi" ? v.W / v.q :
      x === "W" ? v.phi * v.q :
      v.W / v.phi
  },
  {
    name: "Кернеу U = phi1 - phi2",
    vars: ["U", "phi1", "phi2"],
    units: ["В", "В", "В"],
    solve: (v, x) =>
      x === "U" ? v.phi1 - v.phi2 :
      x === "phi1" ? v.U + v.phi2 :
      v.phi1 - v.U
  }
];

function selectFormula() {
  const formula = formulas[
    Number($("formulaSelect").value)
  ];

  $("unknownSelect").innerHTML =
    formula.vars.map(name => `
      <option value="${name}">${name}</option>
    `).join("");

  drawPhysicsFields();
}

function drawPhysicsFields() {
  const formula = formulas[
    Number($("formulaSelect").value)
  ];

  const unknown = $("unknownSelect").value;

  $("physicsFields").innerHTML =
    formula.vars
      .filter(name => name !== unknown)
      .map(name => {
        const unit =
          formula.units[formula.vars.indexOf(name)];

        return `
          <label>${name} (${esc(unit)})</label>
          <input
            id="phys_${name}"
            type="number"
            step="any"
            placeholder="${name} мәнін енгізіңіз">
        `;
      }).join("");

  $("physicsResult").textContent =
    "Берілген шамаларды SI жүйесінде енгізіңіз.";
}

function calculatePhysics() {
  const formula = formulas[
    Number($("formulaSelect").value)
  ];

  const unknown = $("unknownSelect").value;
  const values = {};

  for (const name of formula.vars) {
    if (name === unknown) continue;

    const raw = $("phys_" + name).value.trim();

    if (raw === "") {
      $("physicsResult").textContent =
        "Барлық белгілі шамаларды енгізіңіз.";
      return;
    }

    values[name] = Number(raw);
  }

  try {
    const answer = formula.solve(values, unknown);

    if (!Number.isFinite(answer)) {
      throw Error("Нәтиже анықталмаған");
    }

    const unit =
      formula.units[formula.vars.indexOf(unknown)];

    $("physicsResult").textContent =
      `Формула: ${formula.name}\n\n` +
      "Берілгені:\n" +
      Object.entries(values)
        .map(([name, value]) => `${name} = ${value}`)
        .join("\n") +
      `\n\nТабу керек: ${unknown}\n` +
      `Жауабы: ${unknown} = ` +
      `${Number(answer.toPrecision(10))} ${unit}`;
  } catch {
    $("physicsResult").textContent =
      "Есептеу мүмкін емес. Мәндерді тексеріңіз.";
  }
}

/* =============================================
   БАСТАПҚЫ ЖҮКТЕУ
============================================= */

// Калькулятор формулаларын қосу
$("formulaSelect").innerHTML =
  formulas.map((f, i) => `
    <option value="${i}">${esc(f.name)}</option>
  `).join("");

selectFormula();

// Оқушылар тізімі
drawAttendance();

// Егер команда құрамы әлі жасалмаса немесе
// қатысушылар өзгерсе, автоматты қайта бөлу.
const activeIds = presentStudents().map(s => s.id);
const assignedIds = teams.flat();

const validTeams =
  assignedIds.length === activeIds.length &&
  new Set(assignedIds).size === assignedIds.length &&
  activeIds.every(id => assignedIds.includes(id));

if (!validTeams && activeIds.length > 0) {
  randomTeams(false);
}

drawTeams();
renderPage();

// Сабақ уақыты
setInterval(() => {
  const seconds = Math.floor(
    (Date.now() - startedAt) / 1000
  );

  $("timer").textContent =
    String(Math.floor(seconds / 60)).padStart(2, "0") +
    ":" +
    String(seconds % 60).padStart(2, "0");
}, 1000);

/* =================================
   ҚАЗІРГІ НАҚТЫ УАҚЫТ
   Алматы — Asia/Almaty
================================= */

function updateCurrentTime() {
  const now = new Date();

  const time = new Intl.DateTimeFormat("kk-KZ", {
    timeZone: "Asia/Almaty",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  }).format(now);

  document.getElementById("currentTime").textContent = time;
}

// Сайт ашылғанда бірден көрсетіледі.
updateCurrentTime();

// Әр секунд сайын жаңартылады.
setInterval(updateCurrentTime, 1000);

