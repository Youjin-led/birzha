const registryBase = 'https://www1.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=';
const cartKey = 'znakvsem-cart-v1';
const favoritesKey = 'znakvsem-favorites-v1';
const customKey = 'znakvsem-custom-v1';
const cookieConsentKey = 'znakvsem_cookie_consent';
const cookieAcceptedAtKey = 'znakvsem_cookie_accepted_at';
const cookieLandingKey = 'znakvsem_landing_page';
const cookieReferrerKey = 'znakvsem_referrer';
const trackingCookieKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'yclid', 'gclid'];
const patentvsemLeadUrl = 'https://patentvsem.ru/tovarniy-znak';
const leadActions = {
  buy: {
    label: 'Покупка готового товарного знака',
    title: 'Заявка на покупку товарного знака'
  },
  consult: {
    label: 'Бесплатная консультация по товарным знакам',
    title: 'Бесплатная консультация'
  },
  registration: {
    label: 'Ускоренная регистрация товарного знака',
    title: 'Ускоренная регистрация за 3 месяца'
  },
  place: {
    label: 'Размещение знака на бирже',
    title: 'Разместить знак на бирже'
  }
};

const sourceTrademarks = [
  {
    "id": "001",
    "registryId": "1222556",
    "sourceId": "1252",
    "title": "Знак №001",
    "logo": "Vinobrand",
    "classes": [
      3,
      14,
      18,
      25,
      35,
      40
    ],
    "price": "от 300 тыс. руб.",
    "minPrice": 300000,
    "discount": false,
    "business": [
      "косметика",
      "аксессуары",
      "одежда",
      "маркетплейсы"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1222556&TypeFile=html"
  },
  {
    "id": "002",
    "registryId": "1046145",
    "sourceId": "1251",
    "title": "Знак №002",
    "logo": "Первая глазная клиника",
    "classes": [
      9,
      35,
      44
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы",
      "медицина"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1046145",
    "description": "Продается товарный знак «Первая глазная клиника».Регистрационный номер 1046145 (срок действия до 27.11.2033).Классы МКТУ -9,35,44.Вместе с ТЗ продается вывеска, логотип, домен, история в Яндекс-Директ с 2013 года."
  },
  {
    "id": "003",
    "registryId": "1140278",
    "sourceId": "1249",
    "title": "Знак №003",
    "logo": "bebe_deco®",
    "classes": [
      6,
      9,
      11,
      14,
      16,
      18,
      20,
      21,
      25,
      27,
      35,
      40,
      42
    ],
    "price": "от 1,15 млн руб.",
    "minPrice": 1150000,
    "discount": false,
    "business": [
      "детские товары",
      "маркетплейсы",
      "строительство",
      "IT"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1140278",
    "description": "bebe_deco® — зарегистрированный ТЗ с международным потенциалом в нише детских товаров, мебели и декора. 13 классов МКТУ для масштабирования бренда в e-commerce, производстве, retail и маркетплейсах. Домены: bebe-deco.shop, bebe-deco.ru, и Telegram с контентом на несколько мес — в комплекте."
  },
  {
    "id": "004",
    "registryId": "665758",
    "sourceId": "1146",
    "title": "Знак №004",
    "logo": "ТРИ ГНОМА",
    "classes": [
      25,
      28,
      35,
      41,
      43
    ],
    "price": "от 12 млн руб.",
    "minPrice": 12000000,
    "discount": false,
    "business": [
      "IT",
      "одежда",
      "детские товары",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=665758",
    "description": "Товарный знак Три Гнома (4 варианта) + доменыЧетыре свидетельства: № 563452 МКТУ 25,28,35,41,43. № 864052 МКТУ 28,35.№ 667558 МКТУ 25,35,41,43.№ 918431 МКТУ 28,35. С ними три домена trignoma.ru, тригнома.рфgnomshop.ruДомены работают давно. Хорошо проиндексированы.Условия обсуждаемы"
  },
  {
    "id": "005",
    "registryId": "254018",
    "sourceId": "1106",
    "title": "Знак №005",
    "logo": "ТРАНСАЭРО TRANSAERO",
    "classes": [
      6,
      7,
      12,
      14,
      16,
      18,
      20,
      21,
      24,
      25,
      26,
      34,
      37,
      39,
      41,
      42,
      43
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "строительство",
      "техника",
      "транспорт",
      "аксессуары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=254018",
    "description": "В продаже весь бренд \"Трансаэро\", а именно- 4 товарных знака:№222074, МКТУ- 37;39;41;42;43№254018, МКТУ-6;7;12;14;16;18;20;21;24;25;26;34;37;39;41;42;43№110410, МКТУ- 6;17;12;14;16;18;21;24;25;26;34;38;42№530358, МКТУ- 12;14;16;18;20;21;24;25;26;39;41;42;43Узнаваемость в 2016г- 94% населения РФ"
  },
  {
    "id": "006",
    "registryId": "525024",
    "sourceId": "1065",
    "title": "Знак №006",
    "logo": "СИЛА В ПРАВДЕ",
    "classes": [
      9,
      16,
      25,
      26
    ],
    "price": "от 12 млн руб.",
    "minPrice": 12000000,
    "discount": false,
    "business": [
      "IT",
      "образование",
      "одежда"
    ],
    "registry": "http://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=525024",
    "description": "Продается товарный знак - национальная идея России - вместе с прибыльным бизнесом по продаже патриотических товаров массового спроса."
  },
  {
    "id": "007",
    "registryId": "949436",
    "sourceId": "1036",
    "title": "Знак №007",
    "logo": "ТВОРИ",
    "classes": [
      2,
      9,
      16,
      25,
      28,
      35,
      39,
      40,
      41,
      42,
      43,
      45
    ],
    "price": "от 120 млн руб.",
    "minPrice": 120000000,
    "discount": false,
    "business": [
      "ремонт",
      "IT",
      "образование",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=949436",
    "description": "Товарный знак \"Твори\", плюс доменное имя твори.рф12 классов МКТУ. Говорящий и призывающий к действию товарный знак \"Твори\" один из фундаментальных и нише образующих товарных знаков."
  },
  {
    "id": "008",
    "registryId": "2024719853",
    "sourceId": "838",
    "title": "Знак №008",
    "logo": "ИСКАНДЕР ISKANDER",
    "classes": [
      8
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTMAP&rn=1895&DocNumber=2024719853"
  },
  {
    "id": "009",
    "registryId": "1101731",
    "sourceId": "794",
    "title": "Знак №009",
    "logo": "PROFIBEST",
    "classes": [
      3,
      5,
      8
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1101731"
  },
  {
    "id": "010",
    "registryId": "1104631",
    "sourceId": "793",
    "title": "Знак №010",
    "logo": "RUSLIKE",
    "classes": [
      3,
      5
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "косметика",
      "медицина"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1104631"
  },
  {
    "id": "011",
    "registryId": "1101397",
    "sourceId": "792",
    "title": "Знак №011",
    "logo": "UDIVILI",
    "classes": [
      3,
      5,
      18,
      25
    ],
    "price": "от 150 тыс. руб.",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1101397"
  },
  {
    "id": "012",
    "registryId": "1079379",
    "sourceId": "753",
    "title": "Знак №012",
    "logo": "VUDARE",
    "classes": [
      3,
      8,
      25
    ],
    "price": "от 150 тыс. руб.",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "косметика",
      "товары",
      "одежда"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1079379&TypeFile=html"
  },
  {
    "id": "013",
    "registryId": "1052356",
    "sourceId": "683",
    "title": "Знак №013",
    "logo": "STARTOVALI",
    "classes": [
      3,
      5
    ],
    "price": "от 150 тыс. руб.",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "косметика",
      "медицина"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1052356&TypeFile=html"
  },
  {
    "id": "014",
    "registryId": "999115",
    "sourceId": "645",
    "title": "Знак №014",
    "logo": "FLINSKAP",
    "classes": [
      3,
      25
    ],
    "price": "от 100 тыс. руб. за класс",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "косметика",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=999115",
    "description": "Цена указана за один класс МКТУ"
  },
  {
    "id": "015",
    "registryId": "1018856",
    "sourceId": "621",
    "title": "Знак №015",
    "logo": "KRUTFIT",
    "classes": [
      9,
      25
    ],
    "price": "от 150 тыс. руб.",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "IT",
      "одежда"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1018856&TypeFile=html"
  },
  {
    "id": "016",
    "registryId": "996648",
    "sourceId": "563",
    "title": "Знак №016",
    "logo": "SLIPFIT",
    "classes": [
      3,
      14
    ],
    "price": "от 100 тыс. руб.",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "косметика",
      "аксессуары"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=996648&TypeFile=html"
  },
  {
    "id": "017",
    "registryId": "990322",
    "sourceId": "545",
    "title": "Знак №017",
    "logo": "SONKAP",
    "classes": [
      3
    ],
    "price": "от 100 тыс. руб.",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "косметика"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=990322"
  },
  {
    "id": "018",
    "registryId": "986539",
    "sourceId": "528",
    "title": "Знак №018",
    "logo": "BROSNAMI",
    "classes": [
      3,
      5,
      8,
      9,
      12,
      18,
      25,
      32,
      43
    ],
    "price": "от 100 тыс. руб.",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "товары",
      "IT"
    ],
    "registry": "https://www1.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=986539&TypeFile=html",
    "description": "Оригинальное название для вашей продукции. Слово воспроизводит словосочетание БРО С НАМИ."
  },
  {
    "id": "019",
    "registryId": "977106",
    "sourceId": "503",
    "title": "Знак №019",
    "logo": "HIMARS",
    "classes": [
      8,
      32,
      33,
      34
    ],
    "price": "от 300 тыс. руб.",
    "minPrice": 300000,
    "discount": false,
    "business": [
      "товары",
      "еда"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=977106&TypeFile=html"
  },
  {
    "id": "020",
    "registryId": "970257",
    "sourceId": "458",
    "title": "Знак №020",
    "logo": "SKALBER",
    "classes": [
      3,
      18
    ],
    "price": "от 100 тыс. руб.",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "косметика",
      "одежда"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=970257&TypeFile=html"
  },
  {
    "id": "021",
    "registryId": "537618",
    "sourceId": "386",
    "title": "Знак №021",
    "logo": "STARLOUD",
    "classes": [
      32,
      33
    ],
    "price": "от 100 тыс. руб.",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=537618"
  },
  {
    "id": "022",
    "registryId": "913066",
    "sourceId": "332",
    "title": "Знак №022",
    "logo": "Табакомания",
    "classes": [
      34,
      35
    ],
    "price": "от 100 тыс. руб.",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "товары",
      "маркетплейсы"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=913066&TypeFile=html"
  },
  {
    "id": "023",
    "registryId": "912992",
    "sourceId": "330",
    "title": "Знак №023",
    "logo": "РОСИНАНТ ROSINANT",
    "classes": [
      3,
      25,
      28,
      32,
      33,
      34
    ],
    "price": "от 100 тыс. руб.",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "косметика",
      "одежда",
      "детские товары",
      "еда"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=912992&TypeFile=html"
  },
  {
    "id": "024",
    "registryId": "493114",
    "sourceId": "1258",
    "title": "Знак №024",
    "logo": "ТЕРМОТЕХ",
    "classes": [
      6,
      11,
      35,
      37,
      39,
      40,
      42
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "строительство",
      "товары для дома",
      "маркетплейсы",
      "логистика"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=493114",
    "description": "ТЕРМОТЕХ"
  },
  {
    "id": "025",
    "registryId": "677414",
    "sourceId": "1257",
    "title": "Знак №025",
    "logo": "Таруска",
    "classes": [
      29,
      30,
      35
    ],
    "price": "от 990 тыс. руб.",
    "minPrice": 990000,
    "discount": false,
    "business": [
      "еда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=677414"
  },
  {
    "id": "026",
    "registryId": "927536",
    "sourceId": "1256",
    "title": "Знак №026",
    "logo": "Лебедёнок",
    "classes": [
      24,
      25,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "товары для дома",
      "одежда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=927536"
  },
  {
    "id": "027",
    "registryId": "1217080",
    "sourceId": "1255",
    "title": "Знак №027",
    "logo": "TITULFACE",
    "classes": [
      3,
      18,
      25,
      44
    ],
    "price": "от 950 тыс. руб.",
    "minPrice": 950000,
    "discount": false,
    "business": [
      "косметика",
      "одежда",
      "медицина"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1217080",
    "description": "TITULFACE - королевское, знатное лицо. Залог успеха и признания в любой деятельности. В комплекте дизайнерский брендбук, фирменные цвета и шрифты, готовый макет визиток, косметичек, футболок, халатов, подарочных пакетов и сертификатов. Звоните, отвечу"
  },
  {
    "id": "028",
    "registryId": "1218402",
    "sourceId": "1254",
    "title": "Знак №028",
    "logo": "Joymee",
    "classes": [
      10,
      12,
      30,
      32
    ],
    "price": "от 210 тыс. руб. за класс",
    "minPrice": 210000,
    "discount": false,
    "business": [
      "медицина",
      "транспорт",
      "еда"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1218402&TypeFile=html",
    "description": "210.000 рублей за один класс МКТУ"
  },
  {
    "id": "029",
    "registryId": "844087",
    "sourceId": "1247",
    "title": "Знак №029",
    "logo": "VV AUTO",
    "classes": [
      35,
      36,
      37,
      39
    ],
    "price": "от 60 тыс. руб.",
    "minPrice": 60000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "финансы",
      "строительство",
      "логистика"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=844087",
    "description": "Интересный товарный знак для услуг, связанных с авто. Все элементы охраняемые."
  },
  {
    "id": "030",
    "registryId": "1008817",
    "sourceId": "1244",
    "title": "Знак №030",
    "logo": "MAGGUSHA",
    "classes": [
      3,
      4,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "косметика",
      "товары",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1008817"
  },
  {
    "id": "031",
    "registryId": "1030827",
    "sourceId": "1243",
    "title": "Знак №031",
    "logo": "SKIDBERRY",
    "classes": [
      9,
      25,
      29,
      35,
      39
    ],
    "price": "от 65 млн руб.",
    "minPrice": 65000000,
    "discount": false,
    "business": [
      "IT",
      "одежда",
      "еда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1030827",
    "description": "Товарный знак идеально подходит для магазина, сервиса скидок и т.п. Также продаются домены в зонах ru, com, рф"
  },
  {
    "id": "032",
    "registryId": "960693",
    "sourceId": "1241",
    "title": "Знак №032",
    "logo": "TECHNODEUS",
    "classes": [
      9,
      35,
      41
    ],
    "price": "от 2,5 млн руб.",
    "minPrice": 2500000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы",
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=960693",
    "description": "Продается товарный знак TECHNODEUS. Классы МКТУ: 09, 35, 41. Подходит для электроники, гаджетов, интернет-магазина, e-commerce, IT и техномедиа. Возможен торг."
  },
  {
    "id": "033",
    "registryId": "1206728",
    "sourceId": "1240",
    "title": "Знак №033",
    "logo": "BARMUS",
    "classes": [
      35,
      36,
      37,
      39,
      41,
      42,
      43,
      45
    ],
    "price": "от 21 млн руб.",
    "minPrice": 21000000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "финансы",
      "строительство",
      "логистика"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1206728"
  },
  {
    "id": "034",
    "registryId": "469625",
    "sourceId": "1238",
    "title": "Знак №034",
    "logo": "ШОКОЛАДНЫЙ КАРАВАН",
    "classes": [
      30
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=469625"
  },
  {
    "id": "035",
    "registryId": "524518",
    "sourceId": "1237",
    "title": "Знак №035",
    "logo": "Ёкки",
    "classes": [
      3,
      38,
      42,
      43
    ],
    "price": "от 500 тыс. руб.",
    "minPrice": 500000,
    "discount": false,
    "business": [
      "косметика",
      "связь",
      "IT",
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=524518",
    "description": "товарный знак предназначен для производства товаров и оказания широкого спектра услуг, в т. ч. в области гостиниц и общепита. В стоимость включены домены екки.рф и ёкки.рф, yokky.ru c хорошей органической выдачей в поисковиках. Цена с НДС 22%."
  },
  {
    "id": "036",
    "registryId": "818002",
    "sourceId": "1236",
    "title": "Знак №036",
    "logo": "Пеленгас",
    "classes": [
      35,
      43
    ],
    "price": "от 400 тыс. руб.",
    "minPrice": 400000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы",
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=818002",
    "description": "торговый знак зарегистрирован для розничной, оптовой и дистанционной торговли, деятельности общепита. В цену входит еще торговый знак №820337 \"Остановка пеленгас\" в 35 и 43 классах и домены: пеленгас.рус, pelengas.su, беленгас.рус,беленгас.рф, пиленгас.рус, пиленгас.рф. Цена с НДС 22%."
  },
  {
    "id": "037",
    "registryId": "1204234",
    "sourceId": "1235",
    "title": "Знак №037",
    "logo": "MYLINE",
    "classes": [
      18,
      25,
      35
    ],
    "price": "от 120 тыс. руб.",
    "minPrice": 120000,
    "discount": false,
    "business": [
      "одежда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1204235",
    "description": "Моя Линия"
  },
  {
    "id": "038",
    "registryId": "1204107",
    "sourceId": "1230",
    "title": "Знак №038",
    "logo": "Моя Слада",
    "classes": [
      30
    ],
    "price": "от 1,5 млн руб.",
    "minPrice": 1500000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1204107",
    "description": "В паре с этим знаком предлагается дополнительно N 691154, класс 30-й"
  },
  {
    "id": "039",
    "registryId": "888817",
    "sourceId": "1229",
    "title": "Знак №039",
    "logo": "Многознай",
    "classes": [
      16,
      28,
      35,
      41,
      42
    ],
    "price": "от 300 тыс. руб.",
    "minPrice": 300000,
    "discount": false,
    "business": [
      "образование",
      "детские товары",
      "маркетплейсы",
      "IT"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=888817"
  },
  {
    "id": "040",
    "registryId": "1133798",
    "sourceId": "1228",
    "title": "Знак №040",
    "logo": "NASTILE",
    "classes": [
      16,
      18
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "образование",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1133798"
  },
  {
    "id": "041",
    "registryId": "391055",
    "sourceId": "1227",
    "title": "Знак №041",
    "logo": "ARISTOCRAT",
    "classes": [
      18
    ],
    "price": "от 5 млн руб.",
    "minPrice": 5000000,
    "discount": false,
    "business": [
      "IT",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=391055",
    "description": "С 2009г, продлен до 2028г. Возможна, продажа частями. При продаже частями, цена договорная. Полный перечь товаров по ссылке из реестра товарных знаков. Есть одноимённый аккаунт в VK и домен aristocrat.su + товарные запасы под этим брендом."
  },
  {
    "id": "042",
    "registryId": "866610",
    "sourceId": "1226",
    "title": "Знак №042",
    "logo": "SHTORNADO",
    "classes": [
      24,
      35,
      40
    ],
    "price": "от 3,5 млн руб.",
    "minPrice": 3500000,
    "discount": false,
    "business": [
      "IT",
      "товары для дома",
      "маркетплейсы",
      "производство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=866610",
    "description": "Зapeгиcтpирован в 2022 году. Имеется одноименный домен зоне .ru , почта на Яндекс. Полный перечень товаров и услуг указанных классов можно по ссылке из реестра товарных знаков."
  },
  {
    "id": "043",
    "registryId": "184585",
    "sourceId": "1225",
    "title": "Знак №043",
    "logo": "VIP",
    "classes": [
      18
    ],
    "price": "от 8 млн руб.",
    "minPrice": 8000000,
    "discount": false,
    "business": [
      "IT",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=184585/2",
    "description": "Продлевался в 2017г. Ознакомится с полным перечнем товаров и услуг можно по ссылке из реестра товарных знаков. Есть действующий Интернет-магазин, одноимённые домены( сайты)в зоне .ru и .рф Готовый бизнес с большими запасами товара. Аккаунты в соцсетях."
  },
  {
    "id": "044",
    "registryId": "406347",
    "sourceId": "1224",
    "title": "Знак №044",
    "logo": "Мыловаров",
    "classes": [
      3,
      35
    ],
    "price": "от 5,5 млн руб.",
    "minPrice": 5500000,
    "discount": false,
    "business": [
      "IT",
      "косметика",
      "маркетплейсы"
    ],
    "registry": "http://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=406347",
    "description": "К торговой марке прилагается домен: www.milovarov.ru"
  },
  {
    "id": "045",
    "registryId": "1133866",
    "sourceId": "1223",
    "title": "Знак №045",
    "logo": "Чертог Чаровницы",
    "classes": [
      4,
      21,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "товары",
      "товары для дома",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1133866"
  },
  {
    "id": "046",
    "registryId": "1068984",
    "sourceId": "1195",
    "title": "Знак №046",
    "logo": "Kenberry",
    "classes": [
      3,
      32,
      33
    ],
    "price": "от 2,5 млн руб.",
    "minPrice": 2500000,
    "discount": false,
    "business": [
      "косметика",
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1068987"
  },
  {
    "id": "047",
    "registryId": "1056995",
    "sourceId": "1194",
    "title": "Знак №047",
    "logo": "Badenhealth",
    "classes": [
      3,
      5
    ],
    "price": "от 3 млн руб.",
    "minPrice": 3000000,
    "discount": false,
    "business": [
      "косметика",
      "медицина"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1056996"
  },
  {
    "id": "048",
    "registryId": "1010862",
    "sourceId": "1193",
    "title": "Знак №048",
    "logo": "Healthbaden",
    "classes": [
      3,
      5
    ],
    "price": "от 3 млн руб.",
    "minPrice": 3000000,
    "discount": false,
    "business": [
      "косметика",
      "медицина"
    ],
    "registry": "http://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1010862"
  },
  {
    "id": "049",
    "registryId": "1004531",
    "sourceId": "1192",
    "title": "Знак №049",
    "logo": "Женя+Тоня",
    "classes": [
      32,
      33
    ],
    "price": "от 1,5 млн руб.",
    "minPrice": 1500000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1004532"
  },
  {
    "id": "050",
    "registryId": "1195986",
    "sourceId": "1191",
    "title": "Знак №050",
    "logo": "Энерджинн",
    "classes": [
      32,
      33
    ],
    "price": "от 25 млн руб.",
    "minPrice": 25000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1195986"
  },
  {
    "id": "051",
    "registryId": "1068988",
    "sourceId": "1190",
    "title": "Знак №051",
    "logo": "Фарт",
    "classes": [
      32,
      33
    ],
    "price": "от 25 млн руб.",
    "minPrice": 25000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1068988"
  },
  {
    "id": "052",
    "registryId": "1056995",
    "sourceId": "1189",
    "title": "Знак №052",
    "logo": "Enerjinn",
    "classes": [
      3
    ],
    "price": "от 25 млн руб.",
    "minPrice": 25000000,
    "discount": false,
    "business": [
      "косметика"
    ],
    "registry": "http://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1056995"
  },
  {
    "id": "053",
    "registryId": "1011982",
    "sourceId": "1188",
    "title": "Знак №053",
    "logo": "Доктор Джунг-Ли",
    "classes": [
      2,
      29,
      30,
      32,
      33,
      35,
      43
    ],
    "price": "от 15 млн руб.",
    "minPrice": 15000000,
    "discount": false,
    "business": [
      "ремонт",
      "еда",
      "маркетплейсы",
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1011982"
  },
  {
    "id": "054",
    "registryId": "1032360",
    "sourceId": "1186",
    "title": "Знак №054",
    "logo": "Animated gems",
    "classes": [
      6,
      14,
      26
    ],
    "price": "от 50 тыс. руб. за класс",
    "minPrice": 50000,
    "discount": false,
    "business": [
      "строительство",
      "аксессуары",
      "одежда"
    ],
    "registry": "https://www.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1032360&TypeFile=html",
    "description": "Ознакомится с полным перечнем товаров и услуг указанных классов можно по ссылке из реестра товарных знаков. Цена указана за один класс МКТУ."
  },
  {
    "id": "055",
    "registryId": "1086592",
    "sourceId": "1185",
    "title": "Знак №055",
    "logo": "Tamarix",
    "classes": [
      2,
      4,
      10,
      11,
      17,
      21,
      28
    ],
    "price": "от 50 тыс. руб. за класс",
    "minPrice": 50000,
    "discount": false,
    "business": [
      "ремонт",
      "товары",
      "медицина",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1086592&TypeFile=html",
    "description": "Ознакомится с полным перечнем товаров и услуг указанных классов можно по ссылке из реестра товарных знаков. Цена указана за один класс МКТУ."
  },
  {
    "id": "056",
    "registryId": "1086610",
    "sourceId": "1184",
    "title": "Знак №056",
    "logo": "Femerol",
    "classes": [
      5
    ],
    "price": "от 50 тыс. руб. за класс",
    "minPrice": 50000,
    "discount": false,
    "business": [
      "медицина"
    ],
    "registry": "https://www1.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1086610&TypeFile=html",
    "description": "Ознакомится с полным перечнем товаров и услуг указанных классов можно по ссылке из реестра товарных знаков. Цена указана за один класс МКТУ."
  },
  {
    "id": "057",
    "registryId": "900979",
    "sourceId": "1183",
    "title": "Знак №057",
    "logo": "Albemar",
    "classes": [
      2,
      10,
      11,
      28,
      31
    ],
    "price": "от 50 тыс. руб. за класс",
    "minPrice": 50000,
    "discount": false,
    "business": [
      "ремонт",
      "медицина",
      "товары для дома",
      "детские товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=900979",
    "description": "Ознакомится с полным перечнем товаров и услуг указанных классов можно по ссылке из реестра товарных знаков. Цена указана за один класс МКТУ."
  },
  {
    "id": "058",
    "registryId": "1046796",
    "sourceId": "1182",
    "title": "Знак №058",
    "logo": "Londra",
    "classes": [
      5,
      10,
      11,
      14,
      16,
      21,
      31
    ],
    "price": "от 50 тыс. руб. за класс",
    "minPrice": 50000,
    "discount": false,
    "business": [
      "медицина",
      "товары для дома",
      "аксессуары",
      "образование"
    ],
    "registry": "https://www1.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1046796&TypeFile=html",
    "description": "Ознакомится с полным перечнем товаров и услуг указанных классов можно по ссылке из реестра товарных знаков. Цена указана за один класс МКТУ."
  },
  {
    "id": "059",
    "registryId": "905646",
    "sourceId": "1181",
    "title": "Знак №059",
    "logo": "Tasker",
    "classes": [
      1,
      2,
      4
    ],
    "price": "от 50 тыс. руб. за класс",
    "minPrice": 50000,
    "discount": false,
    "business": [
      "производство",
      "ремонт",
      "товары"
    ],
    "registry": "https://www1.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=905646&TypeFile=html",
    "description": "Ознакомится с полным перечнем товаров и услуг указанных классов можно по ссылке из реестра товарных знаков. Цена указана за один класс МКТУ."
  },
  {
    "id": "060",
    "registryId": "902590",
    "sourceId": "1180",
    "title": "Знак №060",
    "logo": "Lumpa",
    "classes": [
      2,
      32
    ],
    "price": "от 50 тыс. руб. за класс",
    "minPrice": 50000,
    "discount": false,
    "business": [
      "ремонт",
      "еда"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=902590&TypeFile=html",
    "description": "Ознакомится с полным перечнем товаров и услуг указанных классов можно по ссылке из реестра товарных знаков. Цена указана за один класс МКТУ."
  },
  {
    "id": "061",
    "registryId": "1004217",
    "sourceId": "1179",
    "title": "Знак №061",
    "logo": "FIRSEL",
    "classes": [
      3,
      10,
      17,
      18,
      20,
      25
    ],
    "price": "от 50 тыс. руб. за класс",
    "minPrice": 50000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "строительство",
      "одежда"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1004217&TypeFile=html",
    "description": "Ознакомится с полным перечнем товаров и услуг указанных классов можно по ссылке из реестра товарных знаков. Цена указана за один класс МКТУ."
  },
  {
    "id": "062",
    "registryId": "1036016",
    "sourceId": "1178",
    "title": "Знак №062",
    "logo": "БАРДАЧОК",
    "classes": [
      9,
      12,
      28
    ],
    "price": "от 50 тыс. руб. за класс",
    "minPrice": 50000,
    "discount": false,
    "business": [
      "IT",
      "транспорт",
      "детские товары"
    ],
    "registry": "https://www.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1036016&TypeFile=html",
    "description": "Ознакомится с полным перечнем товаров и услуг указанных классов можно по ссылке из реестра товарных знаков. Цена указана за один класс МКТУ."
  },
  {
    "id": "063",
    "registryId": "1019980",
    "sourceId": "1177",
    "title": "Знак №063",
    "logo": "TOREX",
    "classes": [
      14
    ],
    "price": "от 50 тыс. руб. за класс",
    "minPrice": 50000,
    "discount": false,
    "business": [
      "аксессуары"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1019980&TypeFile=html",
    "description": "Ознакомится с полным перечнем товаров и услуг указанных классов можно по ссылке из реестра товарных знаков. Цена указана за один класс МКТУ."
  },
  {
    "id": "064",
    "registryId": "1004206",
    "sourceId": "1176",
    "title": "Знак №064",
    "logo": "STARLEK",
    "classes": [
      21
    ],
    "price": "от 50 тыс. руб. за класс",
    "minPrice": 50000,
    "discount": false,
    "business": [
      "товары для дома"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1004206&TypeFile=html",
    "description": "Ознакомится с полным перечнем товаров и услуг указанных классов можно по ссылке из реестра товарных знаков. Цена указана за один класс МКТУ."
  },
  {
    "id": "065",
    "registryId": "1006446",
    "sourceId": "1175",
    "title": "Знак №065",
    "logo": "TAMFET",
    "classes": [
      3,
      5,
      11,
      21
    ],
    "price": "от 50 тыс. руб. за класс",
    "minPrice": 50000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "товары для дома"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1006446&TypeFile=html",
    "description": "Ознакомится с полным перечнем товаров и услуг указанных классов можно по ссылке из реестра товарных знаков. Цена указана за один класс МКТУ."
  },
  {
    "id": "066",
    "registryId": "989808",
    "sourceId": "1174",
    "title": "Знак №066",
    "logo": "Resmot",
    "classes": [
      5,
      19,
      21,
      28,
      34
    ],
    "price": "от 50 тыс. руб. за класс",
    "minPrice": 50000,
    "discount": false,
    "business": [
      "медицина",
      "строительство",
      "товары для дома",
      "детские товары"
    ],
    "registry": "https://www1.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=989808&TypeFile=html",
    "description": "Ознакомится с полным перечнем товаров и услуг указанных классов можно по ссылке из реестра товарных знаков. Цена указана за один класс МКТУ."
  },
  {
    "id": "067",
    "registryId": "1196860",
    "sourceId": "1168",
    "title": "Знак №067",
    "logo": "Волжское здоровье",
    "classes": [
      31,
      35,
      39
    ],
    "price": "от 550 тыс. руб.",
    "minPrice": 550000,
    "discount": false,
    "business": [
      "еда",
      "маркетплейсы",
      "логистика"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1196860",
    "description": "Классы 31,35,39. Два года на рынке России, Беларуссии, Казахстана."
  },
  {
    "id": "068",
    "registryId": "1213089",
    "sourceId": "1167",
    "title": "Знак №068",
    "logo": "ПУСТЯЧОК",
    "classes": [
      3,
      5,
      10,
      14,
      28,
      32
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "аксессуары",
      "детские товары"
    ],
    "registry": "https://www.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1213089&TypeFile=html"
  },
  {
    "id": "069",
    "registryId": "1212649",
    "sourceId": "1152",
    "title": "Знак №069",
    "logo": "Miapera",
    "classes": [
      5
    ],
    "price": "от 550 тыс. руб.",
    "minPrice": 550000,
    "discount": false,
    "business": [
      "медицина"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1212649&TypeFile=html",
    "description": "Продается товарный знак Miapera (МКТУ 5). Регистрация в патентом бюро Железно, в стоимость включена процедура переоформления действует до 2035 г. Не использовался Передача по договору отчужденияДля связи пишите в мессенджер"
  },
  {
    "id": "070",
    "registryId": "1211015",
    "sourceId": "1151",
    "title": "Знак №070",
    "logo": "Елена Федотова",
    "classes": [
      41
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1211015",
    "description": "БУКВА Ч ЖЁЛТО -ОРАНЖЕВОГО ЦВЕТА"
  },
  {
    "id": "071",
    "registryId": "1124353",
    "sourceId": "1145",
    "title": "Знак №071",
    "logo": "SANAN",
    "classes": [
      9,
      11,
      35,
      37
    ],
    "price": "от 2 млн руб.",
    "minPrice": 1999999,
    "discount": false,
    "business": [
      "IT",
      "товары для дома",
      "маркетплейсы",
      "строительство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1124353",
    "description": "Совместно с торговым знаком будут переданы доменные имена SANAN.RU САНАН.РФ и никнейм в Telegram @SANAN"
  },
  {
    "id": "072",
    "registryId": "938880",
    "sourceId": "1143",
    "title": "Знак №072",
    "logo": "Траектория мышления",
    "classes": [
      41
    ],
    "price": "от 400 тыс. руб.",
    "minPrice": 400000,
    "discount": false,
    "business": [
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=938880",
    "description": "Товарный знак зарегистрирован, принадлежит центру интеллектуального развития детей с нейроподходом. Товарный знак стал узнаваем в Москве, в САО довольно популярен"
  },
  {
    "id": "073",
    "registryId": "1186033",
    "sourceId": "1142",
    "title": "Знак №073",
    "logo": "Dumkies",
    "classes": [
      9,
      16,
      28
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "образование",
      "детские товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1186033",
    "description": "Торговая марка не использовалась. Имеется профессиональная дизайн айдентика."
  },
  {
    "id": "074",
    "registryId": "732838",
    "sourceId": "1139",
    "title": "Знак №074",
    "logo": "RELIWIN",
    "classes": [
      3,
      5
    ],
    "price": "от 50 тыс. руб.",
    "minPrice": 50000,
    "discount": false,
    "business": [
      "косметика",
      "медицина"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=732838",
    "description": "Товарный знак для продажи косметических или лекарственных препаратов"
  },
  {
    "id": "075",
    "registryId": "765088",
    "sourceId": "1137",
    "title": "Знак №075",
    "logo": "CELENTANI",
    "classes": [
      43
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=765088"
  },
  {
    "id": "076",
    "registryId": "1185137",
    "sourceId": "1136",
    "title": "Знак №076",
    "logo": "OUABA",
    "classes": [8, 11, 25, 30],
    "price": "от 190 тыс. руб. за класс",
    "minPrice": 190000,
    "discount": false,
    "business": ["товары", "товары для дома", "одежда", "еда"],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1185137",
    "description": "190.000 за класс или 420.000 ₽ за все классы"
  },
  {
    "id": "077",
    "registryId": "1196146",
    "sourceId": "1135",
    "title": "Знак №077",
    "logo": "AXILA",
    "classes": [
      3,
      10,
      14,
      32
    ],
    "price": "от 180 тыс. руб.",
    "minPrice": 180000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "аксессуары",
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1196146"
  },
  {
    "id": "078",
    "registryId": "931425",
    "sourceId": "1134",
    "title": "Знак №078",
    "logo": "LOVE and LEMONS",
    "classes": [
      3,
      14,
      25,
      26
    ],
    "price": "от 450 тыс. руб.",
    "minPrice": 450000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "косметика",
      "аксессуары",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=931425",
    "description": "Продается товарный знак LOVE & LEMONS (МКТУ 3,14,25,26). Регистрация в Федеральная служба по интеллектуальной собственности, действует до 2032 г. Использовался для продаж одежды на Wildberries (~4000 шт.). Подходит для бренда и маркетплейсов. Передача по договору отчуждения."
  },
  {
    "id": "079",
    "registryId": "960859",
    "sourceId": "1133",
    "title": "Знак №079",
    "logo": "ASRV",
    "classes": [
      25
    ],
    "price": "от 3,5 млн руб.",
    "minPrice": 3500000,
    "discount": false,
    "business": [
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=960859",
    "description": "ASRV — бренд спортивной одежды с международным звучанием.Короткое и сильное название, идеально для запуска и масштабирования в нише activewear."
  },
  {
    "id": "080",
    "registryId": "887931",
    "sourceId": "1132",
    "title": "Знак №080",
    "logo": "SCANDI СКАНДИ ВСЕ ЛУЧШЕЕ В ДОМ",
    "classes": [
      21
    ],
    "price": "от 2,75 млн руб.",
    "minPrice": 2750000,
    "discount": false,
    "business": [
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=887931",
    "description": "Название легко запоминается, звучит международно и подходит для масштабирования на любые рынки."
  },
  {
    "id": "081",
    "registryId": "1198284",
    "sourceId": "1131",
    "title": "Знак №081",
    "logo": "Selfie Code",
    "classes": [
      9,
      14,
      18,
      25,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "аксессуары",
      "одежда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1198284",
    "description": "Селфи-Код Selfie-Code. Магазин одежды и не только. Много открытых классов."
  },
  {
    "id": "082",
    "registryId": "1169596",
    "sourceId": "1130",
    "title": "Знак №082",
    "logo": "КИРДЫК",
    "classes": [
      5,
      13
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "медицина",
      "спорт"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1169596"
  },
  {
    "id": "083",
    "registryId": "1169592",
    "sourceId": "1129",
    "title": "Знак №083",
    "logo": "КУКОЛКА",
    "classes": [
      9
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1169592"
  },
  {
    "id": "084",
    "registryId": "1199119",
    "sourceId": "1128",
    "title": "Знак №084",
    "logo": "МОСКОВИТ",
    "classes": [
      4,
      7,
      11,
      13,
      19,
      32,
      36
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "товары",
      "техника",
      "товары для дома",
      "спорт"
    ],
    "registry": "https://www1.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1199119&TypeFile=html",
    "description": "Древнерусское название жителей Московского княжества. В странах Востока и Европы московитами называли всех русских людей."
  },
  {
    "id": "085",
    "registryId": "630105",
    "sourceId": "1127",
    "title": "Знак №085",
    "logo": "ЧЕРНЫЙ ПРИНЦ",
    "classes": [
      32
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=630105",
    "description": "В 2027 году бренду исполняется 30 лет. Темное пиво лауреат много наград производилось в Великом Новгороде, Егорьевске, Калуге, Липецке, Новосибирске, Хабаровске, а также в Республике Беларусь и на Украине. В настоящее время производится в Калуге и Николаеве (Украина)."
  },
  {
    "id": "086",
    "registryId": "157339",
    "sourceId": "1126",
    "title": "Знак №086",
    "logo": "ПИВО СОФИЙСКОЕ ЗОЛОТОЕ",
    "classes": [
      32,
      42
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда",
      "IT"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=157339",
    "description": "В 2027 году бренду исполняется 30 лет. Светлое пиво лагер до 2019 года производилось в Великом Новгороде, продавалось в Новгородской,Псковской, Ленинградской, Смоленской, Тверской и других областях."
  },
  {
    "id": "087",
    "registryId": "872414",
    "sourceId": "1125",
    "title": "Знак №087",
    "logo": "МАПО",
    "classes": [
      41
    ],
    "price": "от 5 млн руб.",
    "minPrice": 5000000,
    "discount": false,
    "business": [
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=872414"
  },
  {
    "id": "088",
    "registryId": "972799",
    "sourceId": "1121",
    "title": "Знак №088",
    "logo": "WHITEHORNS",
    "classes": [
      3,
      4,
      11,
      16,
      20,
      21,
      25,
      35
    ],
    "price": "от 500 тыс. руб.",
    "minPrice": 500000,
    "discount": false,
    "business": [
      "IT",
      "косметика",
      "товары",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=972799",
    "description": "+ одноименный домен : www.whitehorns.ru"
  },
  {
    "id": "089",
    "registryId": "897361",
    "sourceId": "1120",
    "title": "Знак №089",
    "logo": "Мирное небо",
    "classes": [
      25,
      35,
      41
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "одежда",
      "маркетплейсы",
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=897361",
    "description": "Товарный знак «МИРНОЕ НЕБО» в классах (МКТУ):25 — одежда, обувь, головные уборы.35 — управление бизнесом, организация бизнеса, бизнес-администрирование, офисная служба.41 — воспитание, образование, развлечения, организация спортивных и культурно-просветительных мероприятий."
  },
  {
    "id": "090",
    "registryId": "1194683",
    "sourceId": "1118",
    "title": "Знак №090",
    "logo": "МНОГОМЯСОВ MNOGOMYASOV",
    "classes": [
      5,
      29,
      31
    ],
    "price": "от 20 млн руб.",
    "minPrice": 20000000,
    "discount": false,
    "business": [
      "IT",
      "медицина",
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1194683",
    "description": "Бренд с названием Многомясов/ Mnogomyasov идеально подходит для мясных и рыбных продуктов, сосисок, консервов, хот-догов, протеиновых смесей и кормов для животных.❇️продажа бренда с доменом .ru, .com и ТГ,ВК❇️ отдельного класса❇️ лизинг отдельных классов от 1 года.Пишите, цену обсудим."
  },
  {
    "id": "091",
    "registryId": "1056099",
    "sourceId": "1116",
    "title": "Знак №091",
    "logo": "LIOF",
    "classes": [
      20
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1056099",
    "description": "+ домен"
  },
  {
    "id": "092",
    "registryId": "789988",
    "sourceId": "1115",
    "title": "Знак №092",
    "logo": "Medweek",
    "classes": [4, 8, 11, 20, 21, 34, 35],
    "price": "от 2,9 млн руб.",
    "minPrice": 2900000,
    "discount": false,
    "business": ["товары", "товары для дома", "маркетплейсы"],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=789988",
    "description": "Продаётся зарегистрированный товарный знак Medweek (действует с 2020 года) с полным пакетом бренд-активов. Разрабатывался бренд американским дизайнером под инвестиционный проект с большими инвестиционными вложениями в маркетинг и репутацию около 4 000 000руб."
  },
  {
    "id": "093",
    "registryId": "687627",
    "sourceId": "1113",
    "title": "Знак №093",
    "logo": "FAGUS",
    "classes": [
      4,
      8,
      11,
      20,
      21,
      34,
      35
    ],
    "price": "от 34 млн руб.",
    "minPrice": 34000000,
    "discount": false,
    "business": [
      "товары",
      "товары для дома",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=687627"
  },
  {
    "id": "094",
    "registryId": "1147131",
    "sourceId": "1112",
    "title": "Знак №094",
    "logo": "Rospolka.ru",
    "classes": [
      9,
      35,
      38,
      42
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы",
      "связь"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1147131",
    "description": "Уникальный торговый знак для маркировки товаров российских производителей в соответствии с законом «О российской полке»"
  },
  {
    "id": "095",
    "registryId": "1142990",
    "sourceId": "1111",
    "title": "Знак №095",
    "logo": "Российская полка",
    "classes": [
      9,
      35,
      38,
      42
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы",
      "связь"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1142990",
    "description": "Эксклюзивный товарный знак для использования в акциях по продвижению товаров российских производителей в соответствии с законом «О российской полке»"
  },
  {
    "id": "096",
    "registryId": "685142",
    "sourceId": "1110",
    "title": "Знак №096",
    "logo": "Прамс",
    "classes": [
      35
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "детские товары",
      "IT",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=685142",
    "description": "ПРАМС — короткий и легко запоминающийся бренд для детских товаров и колясок. Название ассоциируется с prams (детские коляски). Подходит для запуска продаж на маркетплейсах и интернет-магазина. В комплекте домены prams.ru, прамс.рф и готовый графический логотип для упаковки, вывески и онлайн-витрин."
  },
  {
    "id": "097",
    "registryId": "1150747",
    "sourceId": "1109",
    "title": "Знак №097",
    "logo": "Пекарычъ",
    "classes": [
      30,
      35,
      43
    ],
    "price": "от 5 млн руб.",
    "minPrice": 4999000,
    "discount": false,
    "business": [
      "IT",
      "еда",
      "маркетплейсы",
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1150747",
    "description": "Продается товарный знак «ПекарычЪ»!Запустите свою сеть кондитерских, пекарни, кафе и т.д. с готовым, брендом — это не просто название, это маркетинговый актив!Так же под бренд зарезервированы домены: 1) пекарычъ.рф; 2) pecarych.ru; 3) pekarych.ru.Цена указана за все классы, включая домены."
  },
  {
    "id": "098",
    "registryId": "828535",
    "sourceId": "1108",
    "title": "Знак №098",
    "logo": "Thy Natural Cosmetic",
    "classes": [
      3
    ],
    "price": "от 150 тыс. руб.",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "косметика"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=828535"
  },
  {
    "id": "099",
    "registryId": "1187881",
    "sourceId": "1105",
    "title": "Знак №099",
    "logo": "RONCADO",
    "classes": [
      9,
      11,
      18,
      25
    ],
    "price": "от 250 тыс. руб. за класс",
    "minPrice": 250000,
    "discount": false,
    "business": [
      "IT",
      "товары для дома",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1187881",
    "description": "230.000 за один класс или 500.000 все классы)"
  },
  {
    "id": "100",
    "registryId": "1131907",
    "sourceId": "1104",
    "title": "Знак №100",
    "logo": "BODYSENSE aesthetic",
    "classes": [
      3,
      5,
      30,
      35,
      41,
      44
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "косметика",
      "медицина",
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1131907",
    "description": "ТЗ не использовался, чистая история. с ТЗ вы получаете: готовый сайт, с доменом; брендбук;типографика;проходимость кабинетов,услуги,контакты поставщиков,фин модель,ца,окупаемостьПродажа знака через продажу ООО(чистое,без долгов и пр).Фин. деятельность по ООО не велась."
  },
  {
    "id": "101",
    "registryId": "508876",
    "sourceId": "1103",
    "title": "Знак №101",
    "logo": "тоТсамый",
    "classes": [
      35,
      42,
      44
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "IT",
      "медицина"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=508876"
  },
  {
    "id": "102",
    "registryId": "858592",
    "sourceId": "1100",
    "title": "Знак №102",
    "logo": "Магазин детских товаров КИНДЕРМАГ.",
    "classes": [
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=858592",
    "description": "Также имеется домен сайта kindermag.ru"
  },
  {
    "id": "103",
    "registryId": "701618",
    "sourceId": "1099",
    "title": "Знак №103",
    "logo": "BUTIK",
    "classes": [
      35
    ],
    "price": "от 340 тыс. руб.",
    "minPrice": 340000,
    "discount": false,
    "business": [
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=701618",
    "description": "Сильный, узнаваемый бренд с историей и лояльной аудиторией Москвы и области. Проверенное имя, которое позволяет дороже продавать и экономить на продвижении."
  },
  {
    "id": "104",
    "registryId": "646006",
    "sourceId": "1093",
    "title": "Знак №104",
    "logo": "Свадебный салон АЙВОРИ",
    "classes": [
      25,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "одежда",
      "маркетплейсы"
    ],
    "registry": "#"
  },
  {
    "id": "105",
    "registryId": "662616",
    "sourceId": "1082",
    "title": "Знак №105",
    "logo": "PriceAdvice, ПрайсЭдвайс",
    "classes": [9, 35, 36, 38, 41],
    "price": "от 549 тыс. руб.",
    "minPrice": 549000,
    "discount": false,
    "business": ["IT", "маркетплейсы", "финансы", "связь"],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=662616",
    "description": "Продажа путем передачи 100% доли в ООО \"ПрайсЭдвайс\" - ИНН 9723036196, дата регистрации - 04.10.2017.Белая, без долгов, с небольшими оборотами, нулевка. УСН 6% (доходы).Смена директора обязательна. Юридический адрес может быть сохранен."
  },
  {
    "id": "106",
    "registryId": "1039068",
    "sourceId": "1066",
    "title": "Знак №106",
    "logo": "ТЕХНОМЕД",
    "classes": [
      35,
      44
    ],
    "price": "от 2 млн руб.",
    "minPrice": 2000000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "медицина"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1039068",
    "description": "Товарный знак ТЕХНОМЕД: для производства, продажи медицинской техники и оборудования. Для фармацевтической промышленности, для телемедицины, для ремонта мед.оборудования и т.д. Возможна продажа вместе с юр.лицом (10 лет)."
  },
  {
    "id": "107",
    "registryId": "895953",
    "sourceId": "1064",
    "title": "Знак №107",
    "logo": "Fanrong",
    "classes": [
      7,
      9,
      11,
      12,
      27,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "техника",
      "IT",
      "товары для дома",
      "транспорт"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=895953",
    "description": "Продам Товарный знак (Fanrong), так же есть Таможенные сертификаты, по кузовным автозапчастям, фары фонари"
  },
  {
    "id": "108",
    "registryId": "1091781",
    "sourceId": "1062",
    "title": "Знак №108",
    "logo": "ЛЮБАВИЦА со времен былинных славит",
    "classes": [1, 2, 3, 4, 5, 24, 25, 29, 30, 31, 32, 33, 35, 37, 41, 43, 44],
    "price": "от 950 тыс. руб.",
    "minPrice": 950000,
    "discount": false,
    "business": ["еда", "маркетплейсы", "рестораны", "медицина"],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1091781",
    "description": "Два свидетельства на товарный знак с разными логотипами: № 1091781 (17 классов: 1, 2, 3, 4, 5, 24, 25, 29, 30, 31, 32, 33, 35, 37, 41, 43, 44) и № 663491 (5 классов: 29, 30, 32, 35, 43). Есть домен ЛЮБАВИЦА.РФЦена указана за все классы."
  },
  {
    "id": "109",
    "registryId": "886986",
    "sourceId": "1061",
    "title": "Знак №109",
    "logo": "ЛЕСОРУБКА не руби с плеча",
    "classes": [2, 3, 5, 6, 8, 11, 19, 20, 25, 35, 37, 40, 44],
    "price": "от 250 тыс. руб.",
    "minPrice": 250000,
    "discount": false,
    "business": ["строительство", "товары для дома", "маркетплейсы", "медицина"],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=886986",
    "description": "Три свидетельства на регистрацию товарного знака: № 886986 (классы: 20, 25, 35, 37, 40, 44); № 1043498 (классы: 5, 35) и № 886987 (классы: 2, 3, 6, 8, 11, 19)Цена указана за все классы."
  },
  {
    "id": "110",
    "registryId": "1127631",
    "sourceId": "1050",
    "title": "Знак №110",
    "logo": "Сувантола",
    "classes": [
      35,
      36,
      39,
      41,
      43
    ],
    "price": "от 4 млн руб.",
    "minPrice": 4000000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы",
      "финансы",
      "логистика"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1127631",
    "description": "Идеальный тур.бренд для Карелии и Карельского перешейка. Аутентичен истории края. Предложение включает: лого и слоган, легенду, домен, старт. ивент, авторское сопровождение, программу развития. Подробности по запросу на почту."
  },
  {
    "id": "111",
    "registryId": "517771",
    "sourceId": "1048",
    "title": "Знак №111",
    "logo": "INFINITEALOE",
    "classes": [
      3
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "косметика"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=517771"
  },
  {
    "id": "112",
    "registryId": "1109840",
    "sourceId": "1045",
    "title": "Знак №112",
    "logo": "РУССКИЙ ЗВЕРЬ",
    "classes": [
      18,
      25
    ],
    "price": "от 950 тыс. руб.",
    "minPrice": 950000,
    "discount": false,
    "business": [
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1109840",
    "description": "Создавался для бренда одежды «русский зверь». Одежда патриотической направленности.В цену входит:Страница в ВКЛичный кабинет на «озон» Остаток нераспроданных вещей."
  },
  {
    "id": "113",
    "registryId": "927872",
    "sourceId": "1044",
    "title": "Знак №113",
    "logo": "МАМА ПИЖАМА",
    "classes": [
      25
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "IT",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=927872",
    "description": "Продажа действующего ТЗ МАМА ПИЖАМА, до 2032 г., с историей. Под ТЗ продавалась одежда на российских маркетплейсах, без рекламаций и негативной репутации. Готовое решение для старта бизнеса. В подарок — домен mamapizhama.com."
  },
  {
    "id": "114",
    "registryId": "925038",
    "sourceId": "1043",
    "title": "Знак №114",
    "logo": "MYHEALTHMARATHON",
    "classes": [
      5,
      25,
      30,
      32
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "IT",
      "медицина",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=925038",
    "description": "Продажа действующего товарного знака MYHEALTHMARATHON, до 2032 г., с историей. Под ТЗ продавались БАД на российских маркетплейсах, без рекламаций и негативной репутации. Готовое решение для старта бизнеса. В подарок — домен mhmarathon.ru."
  },
  {
    "id": "115",
    "registryId": "876030",
    "sourceId": "1041",
    "title": "Знак №115",
    "logo": "Универмаг ШОК ЦЕНА",
    "classes": [
      35,
      39
    ],
    "price": "от 250 тыс. руб.",
    "minPrice": 250000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "логистика"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=876030",
    "description": "Словосочетание Универмаг ШОК ЦЕНА, где слово \"Универмаг\" является неохраняемым элементом. Товарный знак продается совместно с товарным знаком 425409 (надпись \"ШОК ЦЕНА\" белыми буквами, вписанная в красное сердечко. Общая стоимость двух знаков 500 т. руб."
  },
  {
    "id": "116",
    "registryId": "783632",
    "sourceId": "1040",
    "title": "Знак №116",
    "logo": "СПЗ 9",
    "classes": [
      7,
      35,
      37
    ],
    "price": "от 1,5 млн руб.",
    "minPrice": 1500000,
    "discount": false,
    "business": [
      "техника",
      "маркетплейсы",
      "строительство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=783632",
    "description": "Обозначение товарного знака выполнено в виде изобразительного элемента и буквенно-цифровой аббревиатуры. Изобразительный элемент представляет собой в виде трех синих подшипников. Буквенно-цифровая аббревиатура сокращенное название организации СПЗ 9."
  },
  {
    "id": "117",
    "registryId": "1182227",
    "sourceId": "1039",
    "title": "Знак №117",
    "logo": "REGALIA",
    "classes": [
      2,
      3,
      4,
      6,
      7,
      8,
      9,
      17,
      18,
      19,
      21,
      24,
      32,
      36,
      41,
      42,
      43,
      45
    ],
    "price": "от 190 тыс. руб.",
    "minPrice": 190000,
    "discount": false,
    "business": [
      "ремонт",
      "косметика",
      "товары",
      "строительство"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1182227&TypeFile=html",
    "description": "Регалия - это предмет царской власти, к примеру корона. Также это награда, знак отличия, право на получение определенных доходов. Таким образом, товары и услуги, маркированные данным брендом, могут восприниматься потребителями как царская привилегия, награда, поощрение."
  },
  {
    "id": "118",
    "registryId": "1147661",
    "sourceId": "1038",
    "title": "Знак №118",
    "logo": "Гламурр",
    "classes": [
      3,
      5,
      21,
      28,
      31
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "товары для дома",
      "детские товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1147661",
    "description": "Здравствуйте! В наименовании читается мурчание кошки - ГлаМурр. Торговый знак подойдет для линейки зоотоваров: корма, товары для ухода, игрушки, косметические и антипаразитарные средства (шампуни, ошейники)."
  },
  {
    "id": "119",
    "registryId": "1008595",
    "sourceId": "1037",
    "title": "Знак №119",
    "logo": "ЗДРАВНИК",
    "classes": [
      3,
      5,
      10,
      35,
      44
    ],
    "price": "от 38 млн руб.",
    "minPrice": 38000000,
    "discount": false,
    "business": [
      "IT",
      "косметика",
      "медицина",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1008595",
    "description": "Здравник — славянский оберег, дарует здоровье и долголетие. Вместе со здоровьем, приходит и всё остальное — удача, богатство, исполнение желаний, счастье. Запоминающееся осмысленное название + раскрученные домены в главных доменных зонах .ru и .рф = успех! Ранее ТЗ принадлежал крупной аптечной сети."
  },
  {
    "id": "120",
    "registryId": "1180163",
    "sourceId": "1035",
    "title": "Знак №120",
    "logo": "hotwec",
    "classes": [
      8,
      9,
      11,
      25
    ],
    "price": "от 250 тыс. руб. за класс",
    "minPrice": 250000,
    "discount": false,
    "business": [
      "товары",
      "IT",
      "товары для дома",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1180163",
    "description": "250.000₽ за один класс МКТУ"
  },
  {
    "id": "121",
    "registryId": "1047077",
    "sourceId": "1034",
    "title": "Знак №121",
    "logo": "repeat the look",
    "classes": [
      25
    ],
    "price": "от 15 млн руб.",
    "minPrice": 15000000,
    "discount": false,
    "business": [
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1047077"
  },
  {
    "id": "122",
    "registryId": "1177657",
    "sourceId": "1033",
    "title": "Знак №122",
    "logo": "JUH",
    "classes": [
      7
    ],
    "price": "от 450 тыс. руб.",
    "minPrice": 450000,
    "discount": false,
    "business": [
      "техника"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1177657",
    "description": "Редкий трёхзначный смысловой товарный знак JUH в категории популярных расходников и автозапчастей: фильтра салона, воздушные, масляные, свечи зажигания, детали подвески, уплотнители, ремни приводные, радиаторы, инструменты"
  },
  {
    "id": "123",
    "registryId": "922174",
    "sourceId": "1030",
    "title": "Знак №123",
    "logo": "ТИМКА",
    "classes": [
      5,
      31,
      35
    ],
    "price": "от 15 млн руб.",
    "minPrice": 15000000,
    "discount": false,
    "business": [
      "IT",
      "медицина",
      "еда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=922174",
    "description": "Идеальное название для любых зоотоваров, кормов для животных и магазинов. 2021776812 МКТУ 35 на всю розничную и оптовую торговлю под данной торговой маркой, 2022745487 МКТУ 5 и 31 на производство кормов для животных и лекарственных средств! Короткий домен timka.ru!Рассмотрим варианты."
  },
  {
    "id": "124",
    "registryId": "1176610",
    "sourceId": "1027",
    "title": "Знак №124",
    "logo": "GELFEN",
    "classes": [
      8,
      10,
      20,
      25
    ],
    "price": "от 200 тыс. руб. за класс",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "товары",
      "медицина",
      "товары для дома",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1176610",
    "description": "200000 рублей за один класс МКТУ, за все классы 400000 руб."
  },
  {
    "id": "125",
    "registryId": "1175060",
    "sourceId": "1026",
    "title": "Знак №125",
    "logo": "SUVIS",
    "classes": [
      12,
      18,
      28,
      30
    ],
    "price": "от 200 тыс. руб. за класс",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "транспорт",
      "одежда",
      "детские товары",
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1175060",
    "description": "200000 рублей за один класс МКТУ, за все классы 400000 руб."
  },
  {
    "id": "126",
    "registryId": "1008302",
    "sourceId": "1025",
    "title": "Знак №126",
    "logo": "Руснить",
    "classes": [
      23,
      24,
      25,
      26,
      35
    ],
    "price": "от 600 тыс. руб.",
    "minPrice": 600000,
    "discount": false,
    "business": [
      "IT",
      "одежда",
      "товары для дома",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1008302",
    "description": "Бренд создавался для производства и продажи текстиля для дома и нательного белья первого слоя. Домен rusnit.shop. \"Руснить\" - начни день с комфорта! Товарный знак создавался с глубокой философией и ценностями."
  },
  {
    "id": "127",
    "registryId": "1153831",
    "sourceId": "1023",
    "title": "Знак №127",
    "logo": "Morbidezza",
    "classes": [
      29,
      30
    ],
    "price": "от 150 тыс. руб.",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1153831",
    "description": "Продается эксклюзивный товарный знак для кондитерских изделий! Этот знак идеально подойдет для вашей продукции: от пирожных и тортов до зефира, снэков и сухофруктов, чайных, кофейных напитков. Зарегистрированный и готовый к использованию."
  },
  {
    "id": "128",
    "registryId": "909814",
    "sourceId": "1021",
    "title": "Знак №128",
    "logo": "ZEPTA",
    "classes": [
      35,
      40,
      42
    ],
    "price": "от 250 тыс. руб.",
    "minPrice": 250000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "производство",
      "IT"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=909814",
    "description": "ZEPTA — полный цикл решений для вашего бизнеса: от управления, рекламы и аналитики до высокотехнологичной обработки материалов и IT-разработок.Для реального покупателя возможен торг."
  },
  {
    "id": "129",
    "registryId": "1169865",
    "sourceId": "1020",
    "title": "Знак №129",
    "logo": "РелайфМед",
    "classes": [
      3,
      5,
      10
    ],
    "price": "от 150 тыс. руб.",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "косметика",
      "медицина"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1169865",
    "description": "150 000 за каждый класс"
  },
  {
    "id": "130",
    "registryId": "788368",
    "sourceId": "1018",
    "title": "Знак №130",
    "logo": "ПРОФЕССОРИКИ",
    "classes": [
      41
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=788368",
    "description": "Словесный знак41 - воспитание; образование; организация спортивных и культурно-просветительных мероприятий; развлечения."
  },
  {
    "id": "131",
    "registryId": "1168809",
    "sourceId": "1016",
    "title": "Знак №131",
    "logo": "Техпроф",
    "classes": [
      6,
      7,
      11,
      12,
      19,
      35,
      37
    ],
    "price": "от 130 млн руб.",
    "minPrice": 130000000,
    "discount": false,
    "business": [
      "IT",
      "строительство",
      "техника",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1168809",
    "description": "Ищете готовый актив с мощным рыночным потенциалом? Представляем к продаже торговую марку «ТЕХПРОФ» вместе с доменом техпроф.рф — идеальное решение для бизнеса в промышленном и строительном секторе.Название «ТЕХПРОФ» ассоциируется с технологичностью и профессионализмом, что упрощает выход на рынок."
  },
  {
    "id": "132",
    "registryId": "1049114",
    "sourceId": "1013",
    "title": "Знак №132",
    "logo": "МОДНАЯ ПЛАНЕТА",
    "classes": [
      18,
      24,
      25,
      35
    ],
    "price": "от 10 млн руб.",
    "minPrice": 10000000,
    "discount": false,
    "business": [
      "одежда",
      "товары для дома",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1049114"
  },
  {
    "id": "133",
    "registryId": "1094912",
    "sourceId": "1011",
    "title": "Знак №133",
    "logo": "ZAKIDON ЗАКИДОН",
    "classes": [
      30,
      32,
      33,
      34,
      35,
      41,
      43,
      44
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда",
      "товары",
      "маркетплейсы",
      "образование"
    ],
    "registry": "https://www1.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1094912&TypeFile=html"
  },
  {
    "id": "134",
    "registryId": "829230",
    "sourceId": "1009",
    "title": "Знак №134",
    "logo": "Realtech",
    "classes": [
      36,
      37
    ],
    "price": "от 1 млн руб.",
    "minPrice": 1000000,
    "discount": false,
    "business": [
      "финансы",
      "строительство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=829230"
  },
  {
    "id": "135",
    "registryId": "1097308",
    "sourceId": "1008",
    "title": "Знак №135",
    "logo": "WindWalker",
    "classes": [
      11,
      18,
      25,
      28,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "товары для дома",
      "одежда",
      "детские товары",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1097308"
  },
  {
    "id": "136",
    "registryId": "1110350",
    "sourceId": "1007",
    "title": "Знак №136",
    "logo": "Hedonist Home",
    "classes": [
      7,
      11
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "техника",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1110350",
    "description": "Товарный знак HEDONIST HOME зарегистрирован и готов к передаче прав новому владельцу. Он может использоваться для всей категории товаров бытовой техники, кухни и дома. В комплекте: Полный брендбук (47 страниц), Аналитика рынка (74 страницы), Готовые карточки маркетплейсов."
  },
  {
    "id": "137",
    "registryId": "1124739",
    "sourceId": "1006",
    "title": "Знак №137",
    "logo": "РЫБАКИ НА ВОЛГЕ",
    "classes": [
      8,
      21,
      24,
      25,
      29,
      30,
      31,
      32,
      33,
      35,
      41
    ],
    "price": "от 20 млн руб.",
    "minPrice": 20000000,
    "discount": false,
    "business": [
      "рестораны",
      "товары",
      "товары для дома",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1124739",
    "description": "«Рыбаки на Волге» отражает множество смыслов, воплощает: силу природы Волги; ценность человеческого труда и традиций; красоту русского пейзажа. Может успешно использован в разных сферах: рестораны, продукты питания , туризм, гостиницы, сувениры, услуги организационный мероприятий , одежда и др."
  },
  {
    "id": "138",
    "registryId": "752076",
    "sourceId": "1005",
    "title": "Знак №138",
    "logo": "БУДНИ BUDNI",
    "classes": [
      25,
      35,
      40
    ],
    "price": "от 3 млн руб.",
    "minPrice": 3000000,
    "discount": false,
    "business": [
      "одежда",
      "маркетплейсы",
      "производство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=752076",
    "description": "Реальная торговая марка, под которой выпускалась женская одежда."
  },
  {
    "id": "139",
    "registryId": "1159348",
    "sourceId": "999",
    "title": "Знак №139",
    "logo": "ИДИБЕГИ",
    "classes": [
      3,
      5,
      9,
      18,
      25,
      28,
      29,
      30,
      32,
      38,
      39,
      41,
      43
    ],
    "price": "от 100 млн руб.",
    "minPrice": 100000000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "IT",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1159348",
    "description": "Представляем Вашему вниманию уникальный ТЗ - ИДИБЕГИ.ТЗ максимально трансформируется под различные виды деятельности - товары для животных, сумки, одежда, обувь, игрушки, энергетики, доставка, образование, фитнес.ТЗ зарегистрирован на кириллице и латынице.Домены - .РФ/.RUПродажа лотом"
  },
  {
    "id": "140",
    "registryId": "540996",
    "sourceId": "998",
    "title": "Знак №140",
    "logo": "ARTWING",
    "classes": [
      42
    ],
    "price": "от 15 млн руб.",
    "minPrice": 15000000,
    "discount": false,
    "business": [
      "IT"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=540996",
    "description": "Продается торговый знак Artwing и домен www.artwing.ru"
  },
  {
    "id": "141",
    "registryId": "1152361",
    "sourceId": "997",
    "title": "Знак №141",
    "logo": "KITTRAVEL НОВЫЕ ГОРИЗОНТЫ С КОМФОР",
    "classes": [
      39
    ],
    "price": "от 5,2 млн руб.",
    "minPrice": 5200000,
    "discount": false,
    "business": [
      "логистика"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1152361",
    "description": "Аренда домов на колесах, прицепов-автодомов, кемперов,автомобилей, туристического оборудования. Интеллектуальная собственность может быть продана как вместе с транспортными средствами и цифровыми каналами, так и отдельно"
  },
  {
    "id": "142",
    "registryId": "1166887",
    "sourceId": "996",
    "title": "Знак №142",
    "logo": "VASALO",
    "classes": [
      3,
      11,
      20
    ],
    "price": "от 210 тыс. руб. за класс",
    "minPrice": 210000,
    "discount": false,
    "business": [
      "косметика",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1166887",
    "description": "цена за класс - 210.000 рублей; 25 класс - 250.000 рублей"
  },
  {
    "id": "143",
    "registryId": "1131075",
    "sourceId": "995",
    "title": "Знак №143",
    "logo": "ПИВЧЕНЬКИ",
    "classes": [
      30
    ],
    "price": "от 12,65 млн руб.",
    "minPrice": 12653000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "http://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1131075",
    "description": "Продается товарный знак «Пивченьки» — усиливайте позиции на рынке пивных закусок!Расширьте или запустите свою линейку продуктов с готовым, узнаваемым брендом. «Пивченьки» — это не просто название, это маркетинговый актив!"
  },
  {
    "id": "144",
    "registryId": "503345",
    "sourceId": "994",
    "title": "Знак №144",
    "logo": "Изобразительный элемент \"Домики\"",
    "classes": [
      6,
      11,
      16,
      17,
      19,
      35,
      37,
      38,
      42
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "строительство",
      "товары для дома",
      "образование",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=503345"
  },
  {
    "id": "145",
    "registryId": "1071344",
    "sourceId": "992",
    "title": "Знак №145",
    "logo": "БАНАНОВЫЕ МОЗГИ",
    "classes": [
      1,
      2,
      3,
      4,
      5,
      9,
      10,
      15,
      16,
      21,
      25,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "производство",
      "ремонт",
      "косметика",
      "товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1071344"
  },
  {
    "id": "146",
    "registryId": "932099",
    "sourceId": "991",
    "title": "Знак №146",
    "logo": "Агролайф",
    "classes": [
      7,
      11,
      12,
      35
    ],
    "price": "от 1 млн руб.",
    "minPrice": 1000000,
    "discount": false,
    "business": [
      "техника",
      "товары для дома",
      "транспорт",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=932099",
    "description": "АГРОЛАЙФ — ОТЛИЧНЫЙ ТОВАРНЫЙ ЗНАК ДЛЯ АГРОСФЕРЫ."
  },
  {
    "id": "147",
    "registryId": "444057",
    "sourceId": "989",
    "title": "Знак №147",
    "logo": "PITON",
    "classes": [
      18,
      25
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=444057",
    "description": "Пpoдaётcя тoвapный знaк PITON (18, 25 MKTУ). Отличнoe peшeниe для бpeндa oдeжды, oбуви, aкceccуapoв из кoжи. Яркий, aгpeссивный имидж, зaщитa бpeндa. Цeнa пo зaпpocу."
  },
  {
    "id": "148",
    "registryId": "956766",
    "sourceId": "988",
    "title": "Знак №148",
    "logo": "BEFASHION",
    "classes": [
      16,
      18,
      25,
      30,
      35,
      43
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "образование",
      "одежда",
      "еда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=956766",
    "description": "Продaм тoвapный знaк BEFASHION (18, 25, 16, 30, 35, 43 MKTУ). Идeaлeн для мoднoгo бизнeca, oдeжды, aкceccуapoв, рeклaмы и eды. Bыгоднoe влoжeниe, зaщитa бpeндa, pacшиpeниe вoзмoжнocтeй. Дeтaли пo зaпpocу!2 свидетельства: 956766,496250"
  },
  {
    "id": "149",
    "registryId": "1144288",
    "sourceId": "987",
    "title": "Знак №149",
    "logo": "LVL",
    "classes": [
      3,
      5,
      35
    ],
    "price": "от 80 тыс. руб.",
    "minPrice": 80000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1144288",
    "description": "Оригинальный,креативный,комбинированный.Зарегистрирован в Роспатенте 01.09.2025гДата истечения срока действия исключительного права 17.06.2034г.Знак новый,без истории,почти не использовался. Пока регистрировался,отпала необходимость.Продажа осуществляется по договору об отчуждении"
  },
  {
    "id": "150",
    "registryId": "671853",
    "sourceId": "986",
    "title": "Знак №150",
    "logo": "АлкоМир",
    "classes": [
      32,
      33,
      35
    ],
    "price": "от 9,5 млн руб.",
    "minPrice": 9500000,
    "discount": false,
    "business": [
      "еда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=671853",
    "description": "Продам товарный знак"
  },
  {
    "id": "151",
    "registryId": "1117948",
    "sourceId": "985",
    "title": "Знак №151",
    "logo": "WENFILL",
    "classes": [
      9,
      11,
      12,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "товары для дома",
      "транспорт",
      "маркетплейсы"
    ],
    "registry": "http://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1117948",
    "description": "Действующий товарный знак для автозапчастей, вентиляторов . Торговая вывеска."
  },
  {
    "id": "152",
    "registryId": "377946",
    "sourceId": "984",
    "title": "Знак №152",
    "logo": "SHIBATO",
    "classes": [
      7,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "техника",
      "маркетплейсы"
    ],
    "registry": "http://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=377946",
    "description": "Действующий товарный знак с изображением для автомобильных запчастей, названия магазина."
  },
  {
    "id": "153",
    "registryId": "214264",
    "sourceId": "983",
    "title": "Знак №153",
    "logo": "Wendox",
    "classes": [
      9,
      11,
      14
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "товары для дома",
      "аксессуары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=214264",
    "description": "Товарный знак с изображением, имеет положительную историю, хорошие отзывы / часы, метеостанции, термометры. Есть домен, действующий сайт."
  },
  {
    "id": "154",
    "registryId": "311444",
    "sourceId": "982",
    "title": "Знак №154",
    "logo": "ATOMIC",
    "classes": [
      9,
      11
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "товары для дома"
    ],
    "registry": "http://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=311444",
    "description": "Товарный знак с положительной историей/ метеостанции, барометры, термометры, фонари"
  },
  {
    "id": "155",
    "registryId": "1112563",
    "sourceId": "981",
    "title": "Знак №155",
    "logo": "Daisy Mitchell",
    "classes": [
      3,
      14,
      18,
      25,
      35
    ],
    "price": "от 150 тыс. руб.",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "косметика",
      "аксессуары",
      "одежда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1112563",
    "description": "Продаётся зарегистрированный бренд Daizy Mitchell (классы 3, 14, 18, 25, 35). Идеален для моды, аксессуаров, косметики и ритейла. Широкая охрана, стильное имя, готов к коммерциализации и развитию как premium /lifestyle бренд."
  },
  {
    "id": "156",
    "registryId": "359983",
    "sourceId": "974",
    "title": "Знак №156",
    "logo": "Provocante",
    "classes": [
      14,
      18,
      24,
      25,
      26,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "аксессуары",
      "одежда",
      "товары для дома",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=359983"
  },
  {
    "id": "157",
    "registryId": "937965",
    "sourceId": "971",
    "title": "Знак №157",
    "logo": "WE2",
    "classes": [
      5,
      10
    ],
    "price": "от 100 тыс. руб.",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "медицина"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=937965",
    "description": "Бренд секс игрушек основан на игре слов \"Мы вдвоем/ мы тоже\", зарегистрирован до 29.11.2032г."
  },
  {
    "id": "158",
    "registryId": "660813",
    "sourceId": "970",
    "title": "Знак №158",
    "logo": "ЭлНика",
    "classes": [
      9,
      35,
      37,
      42
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы",
      "строительство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=660813",
    "description": "Продажа товарного знака ЭлНика, а также : компании ООО ЭлНика (существует с 2003 года), домена elnica.ru, интернет-магазин ElNica на Озон с дизайнерскими карточками товаров - продажа электротехнической продукции . Значение ЭлНика : электроника Победы."
  },
  {
    "id": "159",
    "registryId": "1154424",
    "sourceId": "969",
    "title": "Знак №159",
    "logo": "TeamUp",
    "classes": [
      9,
      38,
      42,
      45
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "связь",
      "юридические услуги"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1154424&TypeFile=html"
  },
  {
    "id": "160",
    "registryId": "1151983",
    "sourceId": "968",
    "title": "Знак №160",
    "logo": "Green vibe",
    "classes": [
      9,
      29,
      30,
      31,
      35,
      36,
      37,
      39
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "еда",
      "маркетплейсы",
      "финансы"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1151983&TypeFile=html",
    "description": "Товарный знак отлично подойдёт для маркировки продуктов питания, магазина здорового питания, наименования управляющей компании, наименования жилого комплекса и др. Услуги по регистрации отчуждения в подарок."
  },
  {
    "id": "161",
    "registryId": "929942",
    "sourceId": "966",
    "title": "Знак №161",
    "logo": "АвтоВыбор",
    "classes": [
      9,
      35,
      41,
      42
    ],
    "price": "от 9,99 млн руб.",
    "minPrice": 9990000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы",
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=929942",
    "description": "Универсальные товарные знаки для всей автоиндустрии. Текстовый + изобразительный (отдельно). Бренд подходит для e-commerce, автоподбора и сервисов. Помимо ТЗ в продаже все активы нового проекта для проверки автомобиля (приложение, сайт, домены, база данных, каналы). Возможна продажа любых комбинаций"
  },
  {
    "id": "162",
    "registryId": "643307",
    "sourceId": "964",
    "title": "Знак №162",
    "logo": "МЯСНАЯ УСАДЬБА",
    "classes": [
      29,
      35,
      39
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда",
      "маркетплейсы",
      "логистика"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=643307"
  },
  {
    "id": "163",
    "registryId": "984864",
    "sourceId": "959",
    "title": "Знак №163",
    "logo": "Cthulhu",
    "classes": [
      9,
      25,
      35,
      41,
      43,
      45
    ],
    "price": "от 249 990 руб.",
    "minPrice": 249990,
    "discount": false,
    "business": [
      "IT",
      "одежда",
      "маркетплейсы",
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=984864"
  },
  {
    "id": "164",
    "registryId": "1005846",
    "sourceId": "958",
    "title": "Знак №164",
    "logo": "Флеш-Рояль",
    "classes": [
      9,
      18,
      25,
      41,
      45
    ],
    "price": "от 249 990 руб.",
    "minPrice": 249990,
    "discount": false,
    "business": [
      "IT",
      "одежда",
      "образование",
      "юридические услуги"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1005846"
  },
  {
    "id": "165",
    "registryId": "1005466",
    "sourceId": "957",
    "title": "Знак №165",
    "logo": "Фитоняшка",
    "classes": [
      28,
      41,
      43,
      44
    ],
    "price": "от 249 990 руб.",
    "minPrice": 249990,
    "discount": false,
    "business": [
      "детские товары",
      "образование",
      "рестораны",
      "медицина"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1005466"
  },
  {
    "id": "166",
    "registryId": "1150749",
    "sourceId": "955",
    "title": "Знак №166",
    "logo": "Svechu",
    "classes": [
      8,
      10,
      14,
      25
    ],
    "price": "от 160 тыс. руб. за класс",
    "minPrice": 160000,
    "discount": false,
    "business": [
      "товары",
      "медицина",
      "аксессуары",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1150749",
    "description": "160.000 рублей за класс или 260.000 все классы"
  },
  {
    "id": "167",
    "registryId": "631523",
    "sourceId": "954",
    "title": "Знак №167",
    "logo": "PILLAR",
    "classes": [
      7,
      11,
      19,
      20,
      35,
      37,
      42
    ],
    "price": "от 500 тыс. руб.",
    "minPrice": 500000,
    "discount": false,
    "business": [
      "техника",
      "товары для дома",
      "строительство",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=631523"
  },
  {
    "id": "168",
    "registryId": "934944",
    "sourceId": "953",
    "title": "Знак №168",
    "logo": "Счастье не за горами",
    "classes": [
      25
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "одежда"
    ],
    "registry": "http://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=934944"
  },
  {
    "id": "169",
    "registryId": "1036835",
    "sourceId": "952",
    "title": "Знак №169",
    "logo": "Счастье не за горами",
    "classes": [
      8,
      16,
      18,
      20,
      26,
      41
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "товары",
      "образование",
      "одежда",
      "товары для дома"
    ],
    "registry": "http://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1036835"
  },
  {
    "id": "170",
    "registryId": "994964",
    "sourceId": "951",
    "title": "Знак №170",
    "logo": "MOUNTAMO",
    "classes": [
      21,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "товары для дома",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=994964"
  },
  {
    "id": "171",
    "registryId": "943176",
    "sourceId": "950",
    "title": "Знак №171",
    "logo": "Robert Duva",
    "classes": [
      18,
      24,
      25
    ],
    "price": "от 1,5 млн руб.",
    "minPrice": 1500000,
    "discount": false,
    "business": [
      "IT",
      "одежда",
      "товары для дома"
    ],
    "registry": "http://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=943176",
    "description": "Товарный знак бренда женской одежды. В комплекте идёт домен RobertDuva.ru"
  },
  {
    "id": "172",
    "registryId": "1131258",
    "sourceId": "948",
    "title": "Знак №172",
    "logo": "ЕДУБЕРУ",
    "classes": [
      9,
      35,
      39,
      41
    ],
    "price": "от 1000 млн руб.",
    "minPrice": 1000000000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы",
      "логистика",
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1131258",
    "description": "Представляем Вам ТЗ \"ЕДУБЕРУ\"- превосходный актив для устойчивого старта и дальнейшего роста в отрасли доставки еды и ритейла продуктов питания. Идеален для нового агрегатора доставки еды, а также для создания удобной сети продуктовых магазинов формта шаговой доступности"
  },
  {
    "id": "173",
    "registryId": "887039",
    "sourceId": "946",
    "title": "Знак №173",
    "logo": "DOCAR",
    "classes": [
      11,
      12
    ],
    "price": "от 10 млн руб.",
    "minPrice": 10000000,
    "discount": false,
    "business": [
      "IT",
      "товары для дома",
      "транспорт"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=887039",
    "description": "Предлагаем вашему вниманию исключительное предложение – торговую марку \"DOCAR\" домен \"ДОКАР.РФ\"и \"DOCAR.RU\" . Эта комбинация идеально подходит для бизнеса, связанного с продажей автозапчастей, комплектующих и товаров для ремонта."
  },
  {
    "id": "174",
    "registryId": "1000331",
    "sourceId": "943",
    "title": "Знак №174",
    "logo": "kupi-beri",
    "classes": [
      35,
      39
    ],
    "price": "от 550 тыс. руб.",
    "minPrice": 550000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы",
      "логистика"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1000331",
    "description": "Продам товарный знак КУПИ-БЕРИ на латинице и кириллице и домен kupi-beri.ru. Готовый легко запоминающийся бренд для создания любых интернет магазинов, маркетплейсов. Подойдёт для открытия оптово-розничного магазина. Или сдам в аренду. Все расходы по переоформлению знака осуществляет покупатель."
  },
  {
    "id": "175",
    "registryId": "1015440",
    "sourceId": "942",
    "title": "Знак №175",
    "logo": "DOMILUN",
    "classes": [
      3,
      14,
      25,
      26
    ],
    "price": "от 280 тыс. руб.",
    "minPrice": 280000,
    "discount": false,
    "business": [
      "косметика",
      "аксессуары",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1015440"
  },
  {
    "id": "176",
    "registryId": "1129939",
    "sourceId": "941",
    "title": "Знак №176",
    "logo": "BAZA-PUTNIK",
    "classes": [
      6,
      38
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "строительство",
      "связь"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1129939",
    "description": "BAZA-PUTNIK Классы 06. 38. Товарный знак не использовался.Ознакомиться с полным перечнем товаров и услуг указанных классов можно по ссылке из реестра товарных знаков."
  },
  {
    "id": "177",
    "registryId": "389849",
    "sourceId": "939",
    "title": "Знак №177",
    "logo": "EPOS ® / ЭПОС ®",
    "classes": [
      9,
      35,
      37,
      38,
      42
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы",
      "строительство",
      "связь"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=389849",
    "description": "Торговая марка международного уровня: компьютерное POS-оборудование для HORECA и точек продаж (RU); аудиоакустика (UK); наушники и гарнитуры для геймеров (DK). Приоритет и исключительное право на товарный знак на территории России. Домены верхнего уровня. Товарный знак в гражданском обороте 20 лет."
  },
  {
    "id": "178",
    "registryId": "1084693",
    "sourceId": "936",
    "title": "Знак №178",
    "logo": "ПРИШЛО ВРЕМЯ ДОСТАВИТЬ СЕБЕ УДОВОЛ",
    "classes": [
      29,
      30,
      32,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1084693",
    "description": "Готовый слоган с мощным эмоциональным посылом, создающий мгновенную связь с потребителем. Высокая универсальность для запуска бренда в сегментах: от продуктов питания и косметики до услуг и товаров для дома. Позволяет быстро вывести на рынок новый продукт или провести успешный ребрендинг!"
  },
  {
    "id": "179",
    "registryId": "1033624",
    "sourceId": "935",
    "title": "Знак №179",
    "logo": "сила муки",
    "classes": [
      30,
      35
    ],
    "price": "от 10 млн руб.",
    "minPrice": 10000000,
    "discount": false,
    "business": [
      "еда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1033624",
    "description": "Товарный знак не использовался. Есть разработанный бренд бук."
  },
  {
    "id": "180",
    "registryId": "802390",
    "sourceId": "934",
    "title": "Знак №180",
    "logo": "РЫБУС",
    "classes": [
      29,
      35,
      43
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "еда",
      "маркетплейсы",
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=802390",
    "description": "Бренд имеет позитивную историю Бар/магазин в г. Сочи! Присвоенная классификация позволяет вести бизнес в сфере: баров, пабов, ресторанов, магазинов по реализации морепродуктов и пр.. Имеется одноименный домен Рыбус.рус"
  },
  {
    "id": "181",
    "registryId": "714198",
    "sourceId": "933",
    "title": "Знак №181",
    "logo": "LAJI",
    "classes": [
      9,
      12,
      16,
      17,
      18,
      27,
      35,
      37,
      38,
      39
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "транспорт",
      "образование",
      "строительство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=714198"
  },
  {
    "id": "182",
    "registryId": "1134029",
    "sourceId": "932",
    "title": "Знак №182",
    "logo": "Comfyland",
    "classes": [
      20,
      24,
      35,
      41
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "товары для дома",
      "маркетплейсы",
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1134029"
  },
  {
    "id": "183",
    "registryId": "1134790",
    "sourceId": "931",
    "title": "Знак №183",
    "logo": "STATUSNO",
    "classes": [
      25,
      35,
      37
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "одежда",
      "маркетплейсы",
      "строительство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1134790"
  },
  {
    "id": "184",
    "registryId": "992255",
    "sourceId": "929",
    "title": "Знак №184",
    "logo": "БонБуассон",
    "classes": [
      32
    ],
    "price": "от 20 млн руб.",
    "minPrice": 20000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=992255",
    "description": "Продам широко известную торговую марку по производству безалкогольных напитков и питьевой воды."
  },
  {
    "id": "185",
    "registryId": "1000482",
    "sourceId": "928",
    "title": "Знак №185",
    "logo": "ЦИТАТЫ",
    "classes": [
      3,
      5,
      6,
      7,
      10,
      11,
      16,
      18,
      20,
      21,
      24,
      28,
      30,
      35,
      39,
      42
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "строительство",
      "техника"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1000482",
    "description": "Комбинированный знакЧерный, белый цвет"
  },
  {
    "id": "186",
    "registryId": "1087471",
    "sourceId": "926",
    "title": "Знак №186",
    "logo": "OKSIA",
    "classes": [
      5,
      35
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "медицина",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1087471"
  },
  {
    "id": "187",
    "registryId": "1135090",
    "sourceId": "925",
    "title": "Знак №187",
    "logo": "GETGURU",
    "classes": [
      7,
      9,
      35
    ],
    "price": "от 200 тыс. руб. за класс",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "техника",
      "IT",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1135090",
    "description": "200 тыс за класс или 340 тыс за все классы"
  },
  {
    "id": "188",
    "registryId": "952745",
    "sourceId": "924",
    "title": "Знак №188",
    "logo": "Qotton",
    "classes": [
      3,
      5,
      10,
      16
    ],
    "price": "от 5 млн руб.",
    "minPrice": 5000000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=952745"
  },
  {
    "id": "189",
    "registryId": "1103373",
    "sourceId": "923",
    "title": "Знак №189",
    "logo": "ФРЕДДИ КЛЮКВЕР",
    "classes": [
      29,
      30,
      31,
      32,
      33
    ],
    "price": "от 500 тыс. руб.",
    "minPrice": 500000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1103373",
    "description": "Предлагается к продаже (совместному использованию) товарный знак \"ФРЕДДИ КЛЮКВЕР\".* Напитки, содержащие спирт, экстракты и эссенции для их изготовления, алкогольные коктейли* Безалкогольные напитки: соки, минеральные воды, газированные напитки, сиропы, коктейл"
  },
  {
    "id": "190",
    "registryId": "1126988",
    "sourceId": "921",
    "title": "Знак №190",
    "logo": "JOVIA",
    "classes": [
      2,
      17,
      23,
      26
    ],
    "price": "от 120 тыс. руб. за класс",
    "minPrice": 120000,
    "discount": false,
    "business": [
      "ремонт",
      "строительство",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1126988",
    "description": "Ознакомится с полным перечнем товаров и услуг указанных классов можно по ссылке из реестра товарных знаков.Цена указана за один класс МКТУ."
  },
  {
    "id": "191",
    "registryId": "1126989",
    "sourceId": "920",
    "title": "Знак №191",
    "logo": "ODALIE",
    "classes": [
      11,
      18,
      21,
      24,
      28
    ],
    "price": "от 120 тыс. руб. за класс",
    "minPrice": 120000,
    "discount": false,
    "business": [
      "товары для дома",
      "одежда",
      "детские товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1126989",
    "description": "Ознакомиться с полным перечнем товаров и услуг указанных классов можно по ссылке из реестра товарных знаков. Цена указана за один класс МКТУ."
  },
  {
    "id": "192",
    "registryId": "1109103",
    "sourceId": "919",
    "title": "Знак №192",
    "logo": "XYLIA",
    "classes": [
      3,
      5,
      9
    ],
    "price": "от 120 тыс. руб. за класс",
    "minPrice": 120000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "IT"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1109103",
    "description": "Ознакомиться с полным перечнем товаров и услуг указанных классов можно по ссылке из реестра товарных знаков. Цена указана за один класс МКТУ."
  },
  {
    "id": "193",
    "registryId": "1126990",
    "sourceId": "918",
    "title": "Знак №193",
    "logo": "NEST",
    "classes": [
      8,
      12,
      29
    ],
    "price": "от 150 тыс. руб. за класс",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "товары",
      "транспорт",
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1126990",
    "description": "Ознакомиться с полным перечнем товаров и услуг указанных классов можно по ссылке из реестра товарных знаков. Цена указана за один класс МКТУ."
  },
  {
    "id": "194",
    "registryId": "461149",
    "sourceId": "917",
    "title": "Знак №194",
    "logo": "Мастерская Бизнеса",
    "classes": [
      35,
      42,
      45
    ],
    "price": "от 3,5 млн руб.",
    "minPrice": 3500000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "IT",
      "юридические услуги"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=461149"
  },
  {
    "id": "195",
    "registryId": "1015152",
    "sourceId": "914",
    "title": "Знак №195",
    "logo": "Откуда Приходим Туда же Уходим",
    "classes": [
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1015152",
    "description": "Откуда Приходим Туда же Уходим"
  },
  {
    "id": "196",
    "registryId": "1094171",
    "sourceId": "912",
    "title": "Знак №196",
    "logo": "Kaolin’ (Ка линь)",
    "classes": [
      21,
      35,
      41
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "товары для дома",
      "маркетплейсы",
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1094171",
    "description": "Ранее знак использовался: - в творческом пространстве, где располагался магазин и производство, проводились общеобразовательные и рекламные мероприятия: - в онлайн магазинах (продажа посуды и предметов интерьера)"
  },
  {
    "id": "197",
    "registryId": "856717",
    "sourceId": "911",
    "title": "Знак №197",
    "logo": "Город скидок",
    "classes": [
      35,
      41
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=856717",
    "description": "Универсальный торговый знак для использования в широком круге городских акциях и обозначениях, карточных и скидочных программ"
  },
  {
    "id": "198",
    "registryId": "854174",
    "sourceId": "910",
    "title": "Знак №198",
    "logo": "Собери скидки 50% sale",
    "classes": [
      35,
      41
    ],
    "price": "от 175 500 руб.",
    "minPrice": 175500,
    "discount": false,
    "business": [
      "маркетплейсы",
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=854174",
    "description": "Торговый знак для скидочных объявлений и акций, дающий право на использование иностранного слова SALE"
  },
  {
    "id": "199",
    "registryId": "881944",
    "sourceId": "909",
    "title": "Знак №199",
    "logo": "Сбереги скидки",
    "classes": [
      35,
      41
    ],
    "price": "от 175 500 руб.",
    "minPrice": 175500,
    "discount": false,
    "business": [
      "маркетплейсы",
      "образование"
    ],
    "registry": "http://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=881944",
    "description": "Товарный знак- эффективный слоган для проведения рекламных и маркетинговых кампаний и акций, в том числе при участии Сбербанка"
  },
  {
    "id": "200",
    "registryId": "760452",
    "sourceId": "908",
    "title": "Знак №200",
    "logo": "ТОПВАЛЕНКИ",
    "classes": [
      25
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "одежда"
    ],
    "registry": "http://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=760452",
    "description": "Торговый знак ТопВаленки в 2020 г, но существует на рынке с 2014 года, как интернет-магазин www.top-valenki.ru . Торговый знак узнаваем в категории валенки , валяные тапочки и войлочная обувь.С ТК передаем интернет-магазин с клиентской базой, кабинет Озон и WB,Яндекс маркет, доменные почты, и др"
  },
  {
    "id": "201",
    "registryId": "490526",
    "sourceId": "905",
    "title": "Знак №201",
    "logo": "Мон Ами Mon Amie",
    "classes": [
      42,
      44
    ],
    "price": "от 9 млн руб.",
    "minPrice": 9000000,
    "discount": false,
    "business": [
      "IT",
      "медицина"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=490526",
    "description": "Дружелюбное, доверительное, благозвучное и стильное название в сфере красоты, косметологии, СПА и медицины (кл. 44), а также технологий и инноваций (кл. 42). Возможен торг."
  },
  {
    "id": "202",
    "registryId": "779104",
    "sourceId": "904",
    "title": "Знак №202",
    "logo": "ПЛАТОНОВСКАЯ",
    "classes": [
      5,
      32,
      35,
      39
    ],
    "price": "от 60 тыс. руб.",
    "minPrice": 60000,
    "discount": false,
    "business": [
      "медицина",
      "еда",
      "маркетплейсы",
      "логистика"
    ],
    "registry": "#"
  },
  {
    "id": "203",
    "registryId": "1036082",
    "sourceId": "903",
    "title": "Знак №203",
    "logo": "KORA",
    "classes": [
      1,
      2,
      4,
      5,
      6,
      7,
      8,
      9,
      11,
      14,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      27,
      28,
      34
    ],
    "price": "от 150 тыс. руб. за класс",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "производство",
      "ремонт",
      "товары",
      "медицина"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1036082",
    "description": "Цена указана за 1 класс МКТУ. Есть ограничения в классе 3 и 5 (несколько исключений)"
  },
  {
    "id": "204",
    "registryId": "1111832",
    "sourceId": "902",
    "title": "Знак №204",
    "logo": "Polestar",
    "classes": [
      37
    ],
    "price": "от 50 млн руб.",
    "minPrice": 50000000,
    "discount": false,
    "business": [
      "строительство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1111832",
    "description": "ремонт и техническое обслуживание автомобилей"
  },
  {
    "id": "205",
    "registryId": "978871",
    "sourceId": "899",
    "title": "Знак №205",
    "logo": "Myshkina.ma",
    "classes": [
      16,
      28,
      41
    ],
    "price": "от 45 тыс. руб.",
    "minPrice": 45000,
    "discount": false,
    "business": [
      "образование",
      "детские товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=978871",
    "description": "Продам товарный знак Myshkina.ma № 978871, зарегистрирован 7 ноября 2023 года по 16, 28 и 41 классам МКТУ. Использовался для продажи детских гайдов."
  },
  {
    "id": "206",
    "registryId": "920016",
    "sourceId": "898",
    "title": "Знак №206",
    "logo": "KUTINOFF BIO",
    "classes": [
      5,
      29,
      30,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "медицина",
      "еда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=920016"
  },
  {
    "id": "207",
    "registryId": "912125",
    "sourceId": "897",
    "title": "Знак №207",
    "logo": "ДЕДАВЕДА",
    "classes": [
      5,
      29,
      30,
      35
    ],
    "price": "от 333 тыс. руб.",
    "minPrice": 333000,
    "discount": false,
    "business": [
      "медицина",
      "еда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=912125",
    "description": "Чистый знак"
  },
  {
    "id": "208",
    "registryId": "757061",
    "sourceId": "896",
    "title": "Знак №208",
    "logo": "Линия стекла. Сбор и утилизация.",
    "classes": [
      40
    ],
    "price": "от 250 тыс. руб.",
    "minPrice": 250000,
    "discount": false,
    "business": [
      "производство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=757061",
    "description": "Комбинированное обозначение, состоящее из словесных и изобразительных элементов. Словесный элемент «ЛИНИЯ СТЕКЛА» выполнен оригинальным шрифтом буквами кириллицы. Буквы данного словесного элемента имеют стилистическую отрисовку, создающую ассоциации с обломками стекла, из которых сложены буквы."
  },
  {
    "id": "209",
    "registryId": "1085193",
    "sourceId": "895",
    "title": "Знак №209",
    "logo": "Zichimax",
    "classes": [
      3,
      9,
      14,
      16,
      25,
      35
    ],
    "price": "от 100 тыс. руб.",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "косметика",
      "IT",
      "аксессуары",
      "образование"
    ],
    "registry": "http://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1085193",
    "description": "Продам товарный знак Zichimax.Классы МКТУ: 03, 09, 14, 16, 25, 35Парфюмерия, крема, обувь, одежда, канцелярия, ювелирные изделия, часы, реклама/интернет и др.Также с ТЗ отдам блог о моде и одежде на одноименном домене в ru зоне.Бонусом отдам страницы в соц.сетях.Цена целиком 490.000₽"
  },
  {
    "id": "210",
    "registryId": "1093231",
    "sourceId": "894",
    "title": "Знак №210",
    "logo": "VOCA",
    "classes": [
      10
    ],
    "price": "от 150 тыс. руб.",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "медицина"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1093231",
    "description": "150.000 рублей"
  },
  {
    "id": "211",
    "registryId": "962906",
    "sourceId": "893",
    "title": "Знак №211",
    "logo": "Princess of North",
    "classes": [
      3,
      14,
      21,
      25,
      33
    ],
    "price": "от 180 тыс. руб. за класс",
    "minPrice": 180000,
    "discount": false,
    "business": [
      "косметика",
      "аксессуары",
      "товары для дома",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=962906",
    "description": "180.000 рублей за класс"
  },
  {
    "id": "212",
    "registryId": "1094787",
    "sourceId": "892",
    "title": "Знак №212",
    "logo": "Greenville",
    "classes": [
      8,
      11
    ],
    "price": "от 200 тыс. руб. за класс",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "товары",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1094787",
    "description": "200.000 рублей за класс или 320.000 за все классы"
  },
  {
    "id": "213",
    "registryId": "1019253",
    "sourceId": "891",
    "title": "Знак №213",
    "logo": "CREXIA",
    "classes": [
      5,
      7,
      42
    ],
    "price": "от 170 тыс. руб.",
    "minPrice": 170000,
    "discount": false,
    "business": [
      "медицина",
      "техника",
      "IT"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1019253",
    "description": "170.000 рублей"
  },
  {
    "id": "214",
    "registryId": "1111178",
    "sourceId": "890",
    "title": "Знак №214",
    "logo": "CAJACO",
    "classes": [
      12,
      15,
      20
    ],
    "price": "от 180 тыс. руб. за класс",
    "minPrice": 180000,
    "discount": false,
    "business": [
      "транспорт",
      "музыка",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=",
    "description": "180.000 рублей за класс"
  },
  {
    "id": "215",
    "registryId": "1119514",
    "sourceId": "889",
    "title": "Знак №215",
    "logo": "VIDIVA",
    "classes": [
      3,
      9,
      14
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "косметика",
      "IT",
      "аксессуары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1119514",
    "description": "цена договорная, зависит от класса"
  },
  {
    "id": "216",
    "registryId": "1122309",
    "sourceId": "888",
    "title": "Знак №216",
    "logo": "Reznu",
    "classes": [
      7,
      8,
      10,
      25
    ],
    "price": "от 170 тыс. руб. за класс",
    "minPrice": 170000,
    "discount": false,
    "business": [
      "техника",
      "товары",
      "медицина",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1122309",
    "description": "170.000 рублей за класс"
  },
  {
    "id": "217",
    "registryId": "1119511",
    "sourceId": "887",
    "title": "Знак №217",
    "logo": "MIAMINT",
    "classes": [
      3,
      10,
      11,
      28
    ],
    "price": "от 190 тыс. руб. за класс",
    "minPrice": 190000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "товары для дома",
      "детские товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=",
    "description": "190.000 рублей за класс или 350.000 за все классы"
  },
  {
    "id": "218",
    "registryId": "1119692",
    "sourceId": "886",
    "title": "Знак №218",
    "logo": "Ruvi",
    "classes": [
      14,
      21,
      25
    ],
    "price": "от 200 тыс. руб. за класс",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "аксессуары",
      "товары для дома",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1119692",
    "description": "200.000 рублей за класс"
  },
  {
    "id": "219",
    "registryId": "1122738",
    "sourceId": "885",
    "title": "Знак №219",
    "logo": "ENASKY",
    "classes": [
      10,
      12,
      19,
      25
    ],
    "price": "от 150 тыс. руб. за класс",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "медицина",
      "транспорт",
      "строительство",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1122738",
    "description": "150.000 рублей за класс"
  },
  {
    "id": "220",
    "registryId": "1015626",
    "sourceId": "884",
    "title": "Знак №220",
    "logo": "Шах Кебаб",
    "classes": [
      43
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1015626",
    "description": "название знака говорит само за себя"
  },
  {
    "id": "221",
    "registryId": "686814",
    "sourceId": "883",
    "title": "Знак №221",
    "logo": "EXTREME KAMCHATKA",
    "classes": [
      39
    ],
    "price": "от 150 тыс. руб.",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "логистика"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=686814"
  },
  {
    "id": "222",
    "registryId": "1099574",
    "sourceId": "879",
    "title": "Знак №222",
    "logo": "В МИРЕ ЛЮДЕЙ",
    "classes": [
      38,
      41
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "связь",
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1099574",
    "description": "Товарный знак «в мире людей» создан для телепередач про путешествия, блогеров-путешественников, научно-познавательных передач, развлекательные про путешествия, трансляций телепередач или программ, в том числе по Интернет, по сети мобильной связи и других средств массовой информации"
  },
  {
    "id": "223",
    "registryId": "918136",
    "sourceId": "878",
    "title": "Знак №223",
    "logo": "LEVIGO",
    "classes": [
      18,
      24,
      25
    ],
    "price": "от 100 тыс. руб.",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "одежда",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=918136"
  },
  {
    "id": "224",
    "registryId": "847907",
    "sourceId": "877",
    "title": "Знак №224",
    "logo": "FRESH FABRIC ФРЕШ ФАБРИК",
    "classes": [
      5,
      29,
      30,
      31,
      32,
      40,
      43
    ],
    "price": "от 2,5 млн руб.",
    "minPrice": 2500000,
    "discount": false,
    "business": [
      "медицина",
      "еда",
      "производство",
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=847907",
    "description": "Товарный знак имеет срок регистрации до 19.05.2031 г. с возможностью дальнейшего продления."
  },
  {
    "id": "225",
    "registryId": "709996",
    "sourceId": "876",
    "title": "Знак №225",
    "logo": "Candice",
    "classes": [
      30,
      35
    ],
    "price": "от 10 млн руб.",
    "minPrice": 10000000,
    "discount": false,
    "business": [
      "еда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=709996",
    "description": "Товарный знак имеет положительную репутацию на маркетплейсах (OZON, Яндекс.Маркет, Самокат) и в торговых сетях (Окей, Перекресток и др.)."
  },
  {
    "id": "226",
    "registryId": "1004989",
    "sourceId": "875",
    "title": "Знак №226",
    "logo": "Гриффоника",
    "classes": [
      18,
      19,
      20,
      31,
      35
    ],
    "price": "от 300 тыс. руб.",
    "minPrice": 300000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "одежда",
      "строительство",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1004989",
    "description": "Срок действия тз до 11.05.2033 г.(далее продление каждые 10 лет)Оформлялся для производства и продажи товаров на маркетплейсах и в зоомагазинах"
  },
  {
    "id": "227",
    "registryId": "965836",
    "sourceId": "873",
    "title": "Знак №227",
    "logo": "МАГНИТРОН",
    "classes": [
      16,
      28
    ],
    "price": "от 500 тыс. руб.",
    "minPrice": 500000,
    "discount": false,
    "business": [
      "образование",
      "детские товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=965836",
    "description": "Брэнд игрушек, конструкторов, развивашек."
  },
  {
    "id": "228",
    "registryId": "953209",
    "sourceId": "872",
    "title": "Знак №228",
    "logo": "СЕМИЦВЕТИК",
    "classes": [
      2,
      14,
      16,
      28
    ],
    "price": "от 500 тыс. руб.",
    "minPrice": 500000,
    "discount": false,
    "business": [
      "ремонт",
      "аксессуары",
      "образование",
      "детские товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=953209",
    "description": "Брэнд красок, ювелирных изделий, принадлежностей для рисования, игр и игрушек."
  },
  {
    "id": "229",
    "registryId": "898130",
    "sourceId": "871",
    "title": "Знак №229",
    "logo": "УФТАНМА / UFTANMA",
    "classes": [
      14,
      24,
      25
    ],
    "price": "от 1 млн руб.",
    "minPrice": 1000000,
    "discount": false,
    "business": [
      "аксессуары",
      "товары для дома",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=898130",
    "description": "Два свидетельства на русском и английском языках. Брэнд одежды, текстиля, украшений, бижутерии."
  },
  {
    "id": "230",
    "registryId": "865426",
    "sourceId": "870",
    "title": "Знак №230",
    "logo": "Душевная посуда",
    "classes": [
      21
    ],
    "price": "от 6 млн руб.",
    "minPrice": 6000000,
    "discount": false,
    "business": [
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=865426",
    "description": "изделия бытовые керамические; изделия из фарфора, керамики, фаянса, терракота или стекла художественные; посуда для тепловой обработки пищи; посуда столовая, за исключением ножей, вилок и ложек; посуда фарфоровая; посуда фаянсовая; посуда хрустальная [стеклянная] и другое."
  },
  {
    "id": "231",
    "registryId": "1081872",
    "sourceId": "869",
    "title": "Знак №231",
    "logo": "i NEED HELP",
    "classes": [
      35
    ],
    "price": "от 100 млн руб.",
    "minPrice": 100000000,
    "discount": false,
    "business": [
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1081872",
    "description": "Продаётся свидетельство на товарный знак i need help"
  },
  {
    "id": "232",
    "registryId": "1112023",
    "sourceId": "867",
    "title": "Знак №232",
    "logo": "YARKAYAYA",
    "classes": [
      18,
      25
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1112023",
    "description": "Торговый знак YARKAYAYA классы МКТУ: 18 , 25. Есть также домен WWW.YARKAYAYA.RU, YARKAYAYA.COM и сайт для продвижения бренда"
  },
  {
    "id": "233",
    "registryId": "1015944",
    "sourceId": "866",
    "title": "Знак №233",
    "logo": "МАРВАЛИКИ",
    "classes": [
      25
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "детские товары",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1015944",
    "description": "Бренд детской одежды"
  },
  {
    "id": "234",
    "registryId": "678944",
    "sourceId": "848",
    "title": "Знак №234",
    "logo": "ЗлатКомБанк",
    "classes": [
      36
    ],
    "price": "от 99 тыс. руб.",
    "minPrice": 99000,
    "discount": false,
    "business": [
      "IT",
      "финансы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=678944",
    "description": "Товарный банковский знак: \"ЗлатКомБанк\" и права на доменное имя: ЗлатКомБанк.РФСфера применения: коммерческий банк, банковская деятельность, денежные займы, микрозаймы, ломбард, инвесткомпания, привлечение инвестиций в драгоценные металлы, обмен валют, кредитование, лизинг, брокерская деятельность"
  },
  {
    "id": "235",
    "registryId": "599268",
    "sourceId": "847",
    "title": "Знак №235",
    "logo": "Таларии",
    "classes": [
      35,
      39,
      41
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "логистика",
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=599268"
  },
  {
    "id": "236",
    "registryId": "627376",
    "sourceId": "846",
    "title": "Знак №236",
    "logo": "Таларии",
    "classes": [
      35,
      39,
      41
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "логистика",
      "образование"
    ],
    "registry": "http://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=627376"
  },
  {
    "id": "237",
    "registryId": "740743",
    "sourceId": "844",
    "title": "Знак №237",
    "logo": "Дикая морковь. Цветы и настроение",
    "classes": [
      35,
      39,
      42
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "логистика",
      "IT"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=740743"
  },
  {
    "id": "238",
    "registryId": "748105",
    "sourceId": "843",
    "title": "Знак №238",
    "logo": "Дикая морковь. Цветы и настроение",
    "classes": [
      35,
      39,
      42
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "логистика",
      "IT"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=748105"
  },
  {
    "id": "239",
    "registryId": "968873",
    "sourceId": "833",
    "title": "Знак №239",
    "logo": "Coffee Mount",
    "classes": [
      30,
      43
    ],
    "price": "от 300 тыс. руб.",
    "minPrice": 300000,
    "discount": false,
    "business": [
      "еда",
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=968873",
    "description": "Отличное название для кофейни. Легко запоминается, не сложное. Мы сменили род деятельности, поэтому с товарным знаком расстаëмся. Графическое изображение было разработано дизайнерским бюро. Так же передам в использование."
  },
  {
    "id": "240",
    "registryId": "1093155",
    "sourceId": "831",
    "title": "Знак №240",
    "logo": "Удалой-жажду долой!",
    "classes": [
      32,
      33
    ],
    "price": "от 500 тыс. руб.",
    "minPrice": 500000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1093155",
    "description": "Словесный знак"
  },
  {
    "id": "241",
    "registryId": "1093700",
    "sourceId": "827",
    "title": "Знак №241",
    "logo": "Апельсинарка",
    "classes": [
      30
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1093700",
    "description": "Обозначение «АПЕЛЬСИНАРКА», выполненное прописными буквами кириллического алфавита. В отношении заявленных товаров обозначение является фантазийным."
  },
  {
    "id": "242",
    "registryId": "1104217",
    "sourceId": "826",
    "title": "Знак №242",
    "logo": "ANSIO",
    "classes": [
      9,
      18,
      19
    ],
    "price": "от 200 тыс. руб. за класс",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "IT",
      "одежда",
      "строительство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1104217",
    "description": "200.000 рублей за класс"
  },
  {
    "id": "243",
    "registryId": "1100714",
    "sourceId": "825",
    "title": "Знак №243",
    "logo": "VOXED",
    "classes": [
      9,
      21
    ],
    "price": "от 200 тыс. руб. за класс",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "IT",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1100714",
    "description": "200000 рублей за класс"
  },
  {
    "id": "244",
    "registryId": "1102488",
    "sourceId": "820",
    "title": "Знак №244",
    "logo": "Моё Эго",
    "classes": [
      3,
      5,
      10,
      14,
      18,
      20,
      24,
      25,
      29,
      30,
      32,
      33,
      35,
      43,
      44
    ],
    "price": "от 190 тыс. руб.",
    "minPrice": 190000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "аксессуары",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1102488",
    "description": "Идеально подойдет для различных товаров и услуг, в т.ч. косметики, одежды, еды, салонов красоты. На подсознании, потребляя товары и услуги, мы стремимся удовлетворить собственное эго. \"Моё Эго\" про качественное удовлетворение собств. потребностей через товары и услуги, маркированных данным брендом."
  },
  {
    "id": "245",
    "registryId": "1032615",
    "sourceId": "811",
    "title": "Знак №245",
    "logo": "SWOKS",
    "classes": [
      3,
      8,
      10,
      21,
      35
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "косметика",
      "товары",
      "медицина",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1032615"
  },
  {
    "id": "246",
    "registryId": "751482",
    "sourceId": "796",
    "title": "Знак №246",
    "logo": "PiFняшка",
    "classes": [
      35,
      43
    ],
    "price": "от 150 тыс. руб.",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=751482",
    "description": "Комбинированный знак, включающий слово PiFняшка"
  },
  {
    "id": "247",
    "registryId": "770397",
    "sourceId": "791",
    "title": "Знак №247",
    "logo": "Настоящий источник",
    "classes": [
      32
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=770397",
    "description": "Приоритет товарного знака 31 января 2020г. Зарегистрировано в Государственном реестре товарных знаков и знаков обслуживания РФ 06 августа 2020г. Знак синий, оттенки синего, белый!"
  },
  {
    "id": "248",
    "registryId": "947540",
    "sourceId": "786",
    "title": "Знак №248",
    "logo": "Новорижский детский сад",
    "classes": [
      41
    ],
    "price": "от 15 млн руб.",
    "minPrice": 15000000,
    "discount": false,
    "business": [
      "детские товары",
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=947540",
    "description": "Продам товарный знак Новорижский детский сад"
  },
  {
    "id": "249",
    "registryId": "907871",
    "sourceId": "775",
    "title": "Знак №249",
    "logo": "ПАТРИОН",
    "classes": [
      6,
      9,
      11,
      19,
      35,
      37
    ],
    "price": "от 17,6 млн руб.",
    "minPrice": 17600000,
    "discount": false,
    "business": [
      "строительство",
      "IT",
      "товары для дома",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=907871&TypeFile=html",
    "description": "Продажа товарного знака от юрлица с НДС. Классы МКТУ: 06, 09, 11, 19, 35, 37. Срок действия - 1.06.2032г.В работе не использовался. Продажа со всеми зарегистрированными доменами.По договору можете начинать сразу использовать."
  },
  {
    "id": "250",
    "registryId": "576702",
    "sourceId": "774",
    "title": "Знак №250",
    "logo": "ГРИЛЬБЕРИ",
    "classes": [
      43
    ],
    "price": "от 300 тыс. руб.",
    "minPrice": 300000,
    "discount": false,
    "business": [
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=576702"
  },
  {
    "id": "251",
    "registryId": "315538",
    "sourceId": "773",
    "title": "Знак №251",
    "logo": "Дружба народов",
    "classes": [
      43
    ],
    "price": "от 350 тыс. руб.",
    "minPrice": 350000,
    "discount": false,
    "business": [
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=315538"
  },
  {
    "id": "252",
    "registryId": "526134",
    "sourceId": "767",
    "title": "Знак №252",
    "logo": "Блин Дог",
    "classes": [
      29
    ],
    "price": "от 900 тыс. руб.",
    "minPrice": 900000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=526134",
    "description": "540 Изображение (воспроизведение) товарного знака, знака обслуживания"
  },
  {
    "id": "253",
    "registryId": "1054445",
    "sourceId": "766",
    "title": "Знак №253",
    "logo": "annuaki",
    "classes": [
      3,
      9,
      25
    ],
    "price": "от 150 тыс. руб. за класс",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "косметика",
      "IT",
      "одежда"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1054445&TypeFile=html",
    "description": "150.000 рублей за класс или 250.000 рублей за все классы"
  },
  {
    "id": "254",
    "registryId": "1066567",
    "sourceId": "765",
    "title": "Знак №254",
    "logo": "VESSONO",
    "classes": [
      9,
      14
    ],
    "price": "от 200 тыс. руб. за класс",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "IT",
      "аксессуары"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1066567&TypeFile=html",
    "description": "Цена указана за один класс МКТУ"
  },
  {
    "id": "255",
    "registryId": "1067470",
    "sourceId": "763",
    "title": "Знак №255",
    "logo": "OGUA",
    "classes": [
      3,
      7,
      9
    ],
    "price": "от 170 тыс. руб. за класс",
    "minPrice": 170000,
    "discount": false,
    "business": [
      "косметика",
      "техника",
      "IT"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1067470&TypeFile=html",
    "description": "Цена указана за один класс МКТУ"
  },
  {
    "id": "256",
    "registryId": "1080020",
    "sourceId": "756",
    "title": "Знак №256",
    "logo": "aselix",
    "classes": [
      3,
      14
    ],
    "price": "от 160 тыс. руб. за класс",
    "minPrice": 160000,
    "discount": false,
    "business": [
      "косметика",
      "аксессуары"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1080020&TypeFile=html",
    "description": "цена указа за один класс МКТУ"
  },
  {
    "id": "257",
    "registryId": "994074",
    "sourceId": "754",
    "title": "Знак №257",
    "logo": "Прянотека",
    "classes": [
      1,
      9,
      10,
      17,
      18,
      25,
      32,
      43
    ],
    "price": "от 3,5 млн руб.",
    "minPrice": 3500000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "производство",
      "IT",
      "медицина"
    ],
    "registry": "https://www1.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=994074&TypeFile=html",
    "description": "Товарный знак создавался для продажи специй под СТМ на маркетплейсах. ТЗ прекрасно себя зарекомендовал и бренд стал узнаваемым. На текущий момент у ТЗ Прянотека есть магазин на вайлдбириз и соц сети."
  },
  {
    "id": "258",
    "registryId": "1061541",
    "sourceId": "722",
    "title": "Знак №258",
    "logo": "Aggiozatti",
    "classes": [
      1,
      2,
      3,
      4,
      5,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      16,
      17,
      18,
      20,
      21,
      24,
      25,
      27,
      28,
      37,
      39,
      40,
      44
    ],
    "price": "от 100 тыс. руб. за класс",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "производство",
      "ремонт",
      "косметика",
      "товары"
    ],
    "registry": "http://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1061541",
    "description": "Комбинированный ТЗ до 2034г. в 1,2,3,4,5,7,8,9,10,11,12,13,16,17,18,20,21,24,25,27,28,37,39,40,44 классах МКТУ. Цена 100тыс руб. за 1 класс МКТУ"
  },
  {
    "id": "259",
    "registryId": "1047078",
    "sourceId": "721",
    "title": "Знак №259",
    "logo": "Thermience",
    "classes": [
      3,
      10,
      24,
      25
    ],
    "price": "от 100 тыс. руб. за класс",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "товары для дома",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1047078",
    "description": "словесное обозначение ТЗ в классах МКТУ 3, 10, 24, 25 отлично подойдет для брендирования продукции. Цена 100тыс руб. за 1 класс МКТУ"
  },
  {
    "id": "260",
    "registryId": "1064605",
    "sourceId": "720",
    "title": "Знак №260",
    "logo": "ZeeZeeGo",
    "classes": [
      3,
      5,
      12,
      18,
      20,
      21,
      25,
      28,
      31
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "транспорт",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1064605",
    "description": "Комбинированный ТЗ в 3,5,12,18,20,21,25,28,31 классах МКТУ. Запоминающееся название и трогательное графическое изображение, прекрасно подойдет для брендирования товаров для животных . Цена 200тыс.руб за 1класс МКТУ."
  },
  {
    "id": "261",
    "registryId": "1046605",
    "sourceId": "719",
    "title": "Знак №261",
    "logo": "Нежная История",
    "classes": [
      3,
      5,
      10,
      20,
      24,
      25,
      28
    ],
    "price": "от 200 тыс. руб. за класс",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "IT",
      "косметика",
      "медицина",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1046605",
    "description": "комбинированный ТЗ до 2033г, классы МКТУ 3, 5, 10, 20, 24, 25, 28; домены Нежная-история .дети, -.рус, -.РФ. Цена 200 тыс.руб. указана за один класс МКТУ"
  },
  {
    "id": "262",
    "registryId": "1054966",
    "sourceId": "718",
    "title": "Знак №262",
    "logo": "Мистер Приклейкин",
    "classes": [
      1,
      2,
      12,
      16,
      17,
      28
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "IT",
      "производство",
      "ремонт",
      "транспорт"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1054966",
    "description": "Комбинированный ТЗ , в классах МКТУ 1,2,12,16,17,28, домены Prikleikin.ru, prikleykin.ru, приклейкин.expert, -.life, -. дети, -.РФ,-.top; proklei. Pro, проклей.рус, expert,top,про-клей.expert, -.рф,-. top, Цена 200тыс.руб за 1класс МКТУ.указана за 1"
  },
  {
    "id": "263",
    "registryId": "787984",
    "sourceId": "717",
    "title": "Знак №263",
    "logo": "BTS",
    "classes": [
      9,
      35,
      41
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы",
      "образование"
    ],
    "registry": "http://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=787984",
    "description": "товарный знак N: 787984Дата истечения срока действия исключительного права: 12.03.2030Приоритет: 12.03.2020Дата государственной регистрации: 10.12.2020Комбинированный знакНеохраняемые элементы товарного знака: Буквы BTS."
  },
  {
    "id": "264",
    "registryId": "1064726",
    "sourceId": "715",
    "title": "Знак №264",
    "logo": "kan kan",
    "classes": [
      14,
      18,
      26,
      35
    ],
    "price": "от 4,99 млн руб.",
    "minPrice": 4990000,
    "discount": false,
    "business": [
      "IT",
      "аксессуары",
      "одежда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1064726",
    "description": "Продаётся товарный знак kan kan и домен kankan.ru. Срок действия товарного знака до 12.10.2033. Зарегистрирован на юридическое лицо."
  },
  {
    "id": "265",
    "registryId": "1065872",
    "sourceId": "710",
    "title": "Знак №265",
    "logo": "A part of you",
    "classes": [
      5
    ],
    "price": "от 500 тыс. руб.",
    "minPrice": 500000,
    "discount": false,
    "business": [
      "медицина"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1065872&TypeFile=html",
    "description": "Продаю Товарный знак \"A part of you\"Перевод \"Часть тебя\" .Есть свидетельство Роспатента, от 28.11.24 года. Класс МКТУ 05. Я собственник. Разумный торг."
  },
  {
    "id": "266",
    "registryId": "661683",
    "sourceId": "709",
    "title": "Знак №266",
    "logo": "DARЫ",
    "classes": [
      29,
      30,
      31,
      32
    ],
    "price": "от 5,35 млн руб.",
    "minPrice": 5350000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=661683",
    "description": "Бренд здорового питания (снэки , чипсы , козинаки , трюфели , десерты , мороженое ) АзбукаВкуса, ВкусВилл , Окей и розница . По классам большой спектр."
  },
  {
    "id": "267",
    "registryId": "842258",
    "sourceId": "704",
    "title": "Знак №267",
    "logo": "Я САМ",
    "classes": [
      20
    ],
    "price": "от 4,2 млн руб.",
    "minPrice": 4200000,
    "discount": false,
    "business": [
      "детские товары",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=842258",
    "description": "Детская мебель. оборот по бренду более 120 000 000 р в год.https://www1.fips.ru/registers-doc-view/fips_servlet класы"
  },
  {
    "id": "268",
    "registryId": "1062706",
    "sourceId": "703",
    "title": "Знак №268",
    "logo": "MALLAX",
    "classes": [
      6,
      21,
      25
    ],
    "price": "от 220 тыс. руб. за класс",
    "minPrice": 220000,
    "discount": false,
    "business": [
      "строительство",
      "товары для дома",
      "одежда"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1062706&TypeFile=html",
    "description": "Цена указана за один класс МКТУ"
  },
  {
    "id": "269",
    "registryId": "406629",
    "sourceId": "691",
    "title": "Знак №269",
    "logo": "Альфамед",
    "classes": [
      5,
      35,
      39
    ],
    "price": "от 95 тыс. руб.",
    "minPrice": 95000,
    "discount": false,
    "business": [
      "медицина",
      "маркетплейсы",
      "логистика"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=406629",
    "description": "Словесный товарный знак"
  },
  {
    "id": "270",
    "registryId": "653768",
    "sourceId": "690",
    "title": "Знак №270",
    "logo": "Гранелла / Granella",
    "classes": [
      30
    ],
    "price": "от 1 млн руб.",
    "minPrice": 1000000,
    "discount": false,
    "business": [
      "IT",
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=653768",
    "description": "Зарегистрирован по 30 классу. Тестили и проверяли по макаронным изделиям, муке, крупам и прочей бакалее и не только. Целевая аудитория голосовала и выбирала это название из десятков других. Зарегестрированы и доменные имена в зонах .ру и. ru"
  },
  {
    "id": "271",
    "registryId": "771831",
    "sourceId": "688",
    "title": "Знак №271",
    "logo": "Гармошка Garmoshka",
    "classes": [
      33
    ],
    "price": "от 1 млн руб.",
    "minPrice": 1000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=771831",
    "description": "«Гармошка»(Garmoshka)-это не просто имя на бутылке, а залог успеха в мире алкогольной индустрии. Она формирует доверие потребителей, создает уникальный имидж и помогает выделиться на фоне конкурентов. Бренд «Гармошка» ассоциируется с качественными алкогольными напитками, которые передают дух России."
  },
  {
    "id": "272",
    "registryId": "1056693",
    "sourceId": "687",
    "title": "Знак №272",
    "logo": "SANITAS",
    "classes": [
      25,
      29,
      30,
      32,
      34
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "одежда",
      "еда",
      "товары"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1056693&TypeFile=html",
    "description": "Идеальный товарный знак для тех, кто хочет не только картинку но и смысл. В переводе с латыни SANITAS - означает ЗДОРОВЬЕ. Цена указана за 1 класс. Торг возможен. Правообладатель в Москве."
  },
  {
    "id": "273",
    "registryId": "1053270",
    "sourceId": "684",
    "title": "Знак №273",
    "logo": "REGALUX",
    "classes": [
      3,
      4,
      7,
      9,
      14,
      16,
      18,
      24,
      25,
      35,
      37,
      42,
      43,
      45
    ],
    "price": "от 100 тыс. руб.",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "косметика",
      "товары",
      "техника",
      "IT"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1053270&TypeFile=html",
    "description": "Идеально подойдет для различных товаров и услуг класса \"люкс\", светильников, отелей. Название происходит от «Регалии люкса», подчеркивая премиальный характер бренда. Благозвучие обеспечивается чередованием звонких согласных и гласных звуков. Имя способно стать основой сильного бренда."
  },
  {
    "id": "274",
    "registryId": "707332",
    "sourceId": "679",
    "title": "Знак №274",
    "logo": "General Cool",
    "classes": [
      9,
      11,
      17,
      35,
      37,
      40,
      42
    ],
    "price": "от 52 млн руб.",
    "minPrice": 52000000,
    "discount": false,
    "business": [
      "IT",
      "товары для дома",
      "строительство",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=707332"
  },
  {
    "id": "275",
    "registryId": "1032993",
    "sourceId": "677",
    "title": "Знак №275",
    "logo": "DOMUS GOODS",
    "classes": [
      9,
      35
    ],
    "price": "от 980 тыс. руб.",
    "minPrice": 980000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1032993",
    "description": "Пpодaётcя зaрeгиcтрированный тoваpный знак DOMUS GOODS.Срок действия до 13.07.2033 г.Пepеход пpaва на товарный знак происходит через юридическую компанию, дополнительные расходы на переоформление 15-20 т.р.Небольшой торг уместен."
  },
  {
    "id": "276",
    "registryId": "574331",
    "sourceId": "675",
    "title": "Знак №276",
    "logo": "Квадратура",
    "classes": [
      35,
      36,
      37
    ],
    "price": "от 10 млн руб.",
    "minPrice": 10000000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "финансы",
      "строительство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=574331",
    "description": "- Уникальное, запоминающееся название прекрасно сочетается с графическим оформлением;- Само слово \"Квадратура\", согласно сервису Яндекса «WordStat», ищется около 70000 раз по России каждый месяц;- Созвучно известному мебельному центру \"Кубатура\" в СПБ."
  },
  {
    "id": "277",
    "registryId": "351151",
    "sourceId": "674",
    "title": "Знак №277",
    "logo": "Государев Характер",
    "classes": [
      16,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      43
    ],
    "price": "от 490 тыс. руб.",
    "minPrice": 490000,
    "discount": false,
    "business": [
      "образование",
      "еда",
      "товары",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=351151",
    "description": "Хороший слоган для многих ТЗ"
  },
  {
    "id": "278",
    "registryId": "306309",
    "sourceId": "670",
    "title": "Знак №278",
    "logo": "царёвка",
    "classes": [
      16,
      29,
      30,
      31,
      32,
      33,
      34,
      35
    ],
    "price": "от 9 млн руб.",
    "minPrice": 9000000,
    "discount": false,
    "business": [
      "образование",
      "еда",
      "товары",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=306309",
    "description": "Предлагаем ТЗ Царёвка tsarevka.ru с 2011 г. по 2024г., производилась водка, продавалась в крупнейших сетях России, в Казахстане. Предлагается в комплекте с форма комплектом для производства стекла и готовый дизайн, Презентацию товара направлю по запросу."
  },
  {
    "id": "279",
    "registryId": "1043217",
    "sourceId": "664",
    "title": "Знак №279",
    "logo": "Piaona",
    "classes": [
      25,
      32
    ],
    "price": "от 150 тыс. руб. за класс",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "одежда",
      "еда"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1043217&TypeFile=html",
    "description": "Цена указана за один класс МКТУ"
  },
  {
    "id": "280",
    "registryId": "1039304",
    "sourceId": "663",
    "title": "Знак №280",
    "logo": "GUVIAL",
    "classes": [
      3,
      9,
      21
    ],
    "price": "от 150 тыс. руб. за класс",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "косметика",
      "IT",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1039304",
    "description": "Цена указана за один класс МКТУ"
  },
  {
    "id": "281",
    "registryId": "570331",
    "sourceId": "662",
    "title": "Знак №281",
    "logo": "SOLDAT",
    "classes": [
      8,
      9,
      11,
      13,
      28,
      35
    ],
    "price": "от 350 тыс. руб.",
    "minPrice": 350000,
    "discount": false,
    "business": [
      "товары",
      "IT",
      "товары для дома",
      "спорт"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=570331",
    "description": "Продам товарный знак \"SOLDAT\" + 2 ДОМЕНА для сайта к нему в ПОДАРОК! 1) SOL-DAT.RU 2) SOL-DAT.ONLINE Так же возможно использование доменов: SOLDAT.RU, SOLDAT.COM, SOLDAT.PRO, возможна аренда знака, торг."
  },
  {
    "id": "282",
    "registryId": "721204",
    "sourceId": "661",
    "title": "Знак №282",
    "logo": "THE COCK",
    "classes": [
      32,
      35,
      43
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "еда",
      "маркетплейсы",
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=721204",
    "description": "Комбинированный ТЗ. Бренд имеет позитивную историю! Использовался в довольно известном пабе в г. Белгород и г. Курск (высокий рейтинг/отзывы). Имеется одноименный домен: THECOCK.RU А также домены (под различные направления): BARTHECOCK.RU BEERTHECOCK.RU THECOCKBAR.RU THECOCKBEER.RU THECOCKPUB.RU"
  },
  {
    "id": "283",
    "registryId": "965800",
    "sourceId": "656",
    "title": "Знак №283",
    "logo": "Emdelur",
    "classes": [
      3,
      4,
      5,
      35
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "косметика",
      "товары",
      "медицина",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=965800"
  },
  {
    "id": "284",
    "registryId": "964936",
    "sourceId": "655",
    "title": "Знак №284",
    "logo": "ilyte",
    "classes": [
      7,
      9
    ],
    "price": "от 9 млн руб.",
    "minPrice": 9000000,
    "discount": false,
    "business": [
      "техника",
      "IT"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=964936",
    "description": "Домен SAMLIGHT и samlight.ru Товарный знак и домен очень на слуху в определенных кругах, так как моя компания представлена на рынке более 35 лет. Ассоциируется с качественным светодиодным профессиональным оборудованием, которое присутствует в театрах страны, в студиях ТВ каналов и иных учреждениях"
  },
  {
    "id": "285",
    "registryId": "848424",
    "sourceId": "654",
    "title": "Знак №285",
    "logo": "Bonnetreeka",
    "classes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      35
    ],
    "price": "от 35 тыс. руб. за класс",
    "minPrice": 35000,
    "discount": false,
    "business": [
      "производство",
      "ремонт",
      "косметика",
      "товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=848424",
    "description": "Товарный знак 28 классов, цена указана за один класс"
  },
  {
    "id": "286",
    "registryId": "1037651",
    "sourceId": "653",
    "title": "Знак №286",
    "logo": "Марка Здоровья",
    "classes": [
      10,
      44
    ],
    "price": "от 190 тыс. руб.",
    "minPrice": 190000,
    "discount": false,
    "business": [
      "медицина"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1037651",
    "description": "Идеально подойдет для товаров и оборудования медицинского назначения: слуховых аппаратов, бандажей, глюкометров, имплантов, ингаляторов, капельниц, приборов для массажа, термометров и других.Дизайн подчеркивает заботу о здоровье человека."
  },
  {
    "id": "287",
    "registryId": "688383",
    "sourceId": "648",
    "title": "Знак №287",
    "logo": "C’cups",
    "classes": [
      16,
      30,
      32,
      35,
      40,
      42,
      43
    ],
    "price": "от 1 млн руб.",
    "minPrice": 1000000,
    "discount": false,
    "business": [
      "образование",
      "еда",
      "маркетплейсы",
      "производство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=688383"
  },
  {
    "id": "288",
    "registryId": "350744",
    "sourceId": "647",
    "title": "Знак №288",
    "logo": "Солнцедар",
    "classes": [
      29,
      30,
      31
    ],
    "price": "от 2 млн руб.",
    "minPrice": 2000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=350744",
    "description": "Продажа товарного знака \"Солнцедар\"Включает в себя 3 класса МКТУ:29, 30, 31"
  },
  {
    "id": "289",
    "registryId": "972871",
    "sourceId": "646",
    "title": "Знак №289",
    "logo": "1K2",
    "classes": [
      18,
      24,
      25
    ],
    "price": "от 250 тыс. руб.",
    "minPrice": 250000,
    "discount": false,
    "business": [
      "одежда",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=972871",
    "description": "Есть графический знак (зарегистрирован)"
  },
  {
    "id": "290",
    "registryId": "1029864",
    "sourceId": "636",
    "title": "Знак №290",
    "logo": "Вкус Вегас",
    "classes": [
      29,
      31,
      32
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1029864&TypeFile=html",
    "description": "Комбинированный товарный знак «Вкус Вегас» идеально подойдет для еды, фаст-фуда, консервированной продукции, орешков и семечек, чипсов, напитков.Название и дизайн ассоциируются с ярким праздничным вкусом, оставляющим насыщенное послевкусие."
  },
  {
    "id": "291",
    "registryId": "1025584",
    "sourceId": "631",
    "title": "Знак №291",
    "logo": "Серебряное око",
    "classes": [
      40
    ],
    "price": "от 11 млн руб.",
    "minPrice": 11000000,
    "discount": false,
    "business": [
      "производство"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1025584&TypeFile=html",
    "description": "Основной смысл заключён в самом треугольнике, он символизирует три равновозможные грани, словно три ипостаси самого господа : Отца, Сына, Святого Духа. Этим определена мощная энергия. Око изображено в единственном числе не случайно, это говорит о том, что видит Всевышний не может быть двойственным"
  },
  {
    "id": "292",
    "registryId": "1019875",
    "sourceId": "624",
    "title": "Знак №292",
    "logo": "OPERUS",
    "classes": [
      9,
      11,
      21
    ],
    "price": "от 180 тыс. руб. за класс",
    "minPrice": 180000,
    "discount": false,
    "business": [
      "IT",
      "товары для дома"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1019875&TypeFile=html",
    "description": "Ознакомится с полным перечнем товаров и услуг указанных классов можно по ссылке из реестра товарных знаков.Цена указана за один класс МКТУ."
  },
  {
    "id": "293",
    "registryId": "1013674",
    "sourceId": "617",
    "title": "Знак №293",
    "logo": "Мастера выпечки",
    "classes": [
      30
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1013674",
    "description": "Вместе с товарным знаком в продажу входит домен: мастеравыпечки.рф"
  },
  {
    "id": "294",
    "registryId": "1013839",
    "sourceId": "613",
    "title": "Знак №294",
    "logo": "Марка стиля",
    "classes": [
      3,
      14,
      18,
      24,
      25,
      35,
      37,
      42
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "косметика",
      "аксессуары",
      "одежда",
      "товары для дома"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1013839&TypeFile=html",
    "description": "Словесный товарный знак «МАРКА СТИЛЯ» идеально подойдет для одежды и текстиля, ювелирных изделий и бижутерии, уходовой косметики, услуг дизайна и магазинов стильных аксессуаров.Название говорит само за себя, подчеркивая индивидуальность, привлекательность и качество продвигаемой продукции."
  },
  {
    "id": "295",
    "registryId": "912501",
    "sourceId": "596",
    "title": "Знак №295",
    "logo": "Russhelf",
    "classes": [
      9,
      35,
      36,
      38,
      41,
      42,
      45
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы",
      "финансы",
      "связь"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=912501",
    "description": "Уникальный торговый знак российского континентального шельфа"
  },
  {
    "id": "296",
    "registryId": "638848",
    "sourceId": "592",
    "title": "Знак №296",
    "logo": "Гусятино",
    "classes": [
      29,
      31
    ],
    "price": "от 100 тыс. руб.",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=638848",
    "description": "Производитель полуфабрикатов из мяса гуся. Дизайн, упаковка разработаны в в соответствии с предпочтениями потребителя, очень достойно выглядит. Торговый знак легко запоминается и вызывает однозначные ассоциации с натуральным продуктом. упаковка в подарок"
  },
  {
    "id": "297",
    "registryId": "1007826",
    "sourceId": "591",
    "title": "Знак №297",
    "logo": "PinkEL",
    "classes": [
      2,
      10,
      25,
      28,
      34
    ],
    "price": "от 140 тыс. руб. за класс",
    "minPrice": 140000,
    "discount": false,
    "business": [
      "ремонт",
      "медицина",
      "одежда",
      "детские товары"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1007826&TypeFile=html",
    "description": "Цена за один класс МКТУ 140 тыс руб."
  },
  {
    "id": "298",
    "registryId": "880495",
    "sourceId": "589",
    "title": "Знак №298",
    "logo": "DELASUNO",
    "classes": [
      8,
      18,
      21,
      25,
      28
    ],
    "price": "от 5 млн руб.",
    "minPrice": 5000000,
    "discount": false,
    "business": [
      "товары",
      "одежда",
      "товары для дома",
      "детские товары"
    ],
    "registry": "http://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=880495"
  },
  {
    "id": "299",
    "registryId": "806524",
    "sourceId": "588",
    "title": "Знак №299",
    "logo": "NaturaBashkiria",
    "classes": [
      3,
      30,
      31
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "косметика",
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=806524"
  },
  {
    "id": "300",
    "registryId": "1004317",
    "sourceId": "584",
    "title": "Знак №300",
    "logo": "МЯСНАЯ ЗНАТЬ",
    "classes": [
      29,
      30,
      31,
      35,
      43
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда",
      "маркетплейсы",
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=1004317",
    "description": "Идеально подойдет для мясных полуфабрикатов, пельменей, колбас, кафе, продовольственных магазинов, кормов для животных."
  },
  {
    "id": "301",
    "registryId": "963095",
    "sourceId": "583",
    "title": "Знак №301",
    "logo": "JE VOLE",
    "classes": [
      3,
      21
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "косметика",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=963095",
    "description": "Продам зарегистрированный товарный знак \"JE VOLE\"классы МКТУ 3 и 21. Под брендом выпускалась органическая косметика."
  },
  {
    "id": "302",
    "registryId": "345290",
    "sourceId": "582",
    "title": "Знак №302",
    "logo": "МОЗЕР",
    "classes": [
      14,
      16,
      18,
      35,
      37
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "аксессуары",
      "образование",
      "одежда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=345290",
    "description": "Один из самых известных , эксклюзивных и дорогих действующих часовых и ювелирных брендов. Действует в России более 30 лет. Изделия можно увидеть в музеях , у Президентов нескольких стран ,Английском королевском доме и у многих других известных людей. Много различных информационных материалов ."
  },
  {
    "id": "303",
    "registryId": "706401",
    "sourceId": "580",
    "title": "Знак №303",
    "logo": "Beauty Zone",
    "classes": [
      3,
      8,
      42,
      44
    ],
    "price": "от 25 млн руб.",
    "minPrice": 25000000,
    "discount": false,
    "business": [
      "косметика",
      "товары",
      "IT",
      "медицина"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=706401",
    "description": "Товарный знак зарегистрирован с 2018 года , под данным знаком выпускается косметика"
  },
  {
    "id": "304",
    "registryId": "912125",
    "sourceId": "579",
    "title": "Знак №304",
    "logo": "ДЕДАВЕДА",
    "classes": [
      5,
      29,
      30,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "медицина",
      "еда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=912125"
  },
  {
    "id": "305",
    "registryId": "713963",
    "sourceId": "578",
    "title": "Знак №305",
    "logo": "ALFASTERON",
    "classes": [
      5,
      29
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "медицина",
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=713963",
    "description": "+ Доменное имя : alfasteron.ru"
  },
  {
    "id": "306",
    "registryId": "698395",
    "sourceId": "577",
    "title": "Знак №306",
    "logo": "BITAMIN",
    "classes": [
      3,
      5,
      30,
      32,
      35
    ],
    "price": "от 7,5 млн руб.",
    "minPrice": 7500000,
    "discount": false,
    "business": [
      "IT",
      "косметика",
      "медицина",
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=698395",
    "description": "Работающий бренд с товарным остатком и доменам : bitamin.ru"
  },
  {
    "id": "307",
    "registryId": "1003221",
    "sourceId": "576",
    "title": "Знак №307",
    "logo": "candy&kenny",
    "classes": [
      14,
      18
    ],
    "price": "от 140 тыс. руб. за класс",
    "minPrice": 140000,
    "discount": false,
    "business": [
      "аксессуары",
      "одежда"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1003221&TypeFile=html",
    "description": "Цена 140 тыс руб за один класс МКТУ"
  },
  {
    "id": "308",
    "registryId": "305472",
    "sourceId": "573",
    "title": "Знак №308",
    "logo": "ВПРОК",
    "classes": [
      36
    ],
    "price": "от 150 тыс. руб.",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "финансы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=305472",
    "description": "Комбинированный товарный знак, включающий в себя два основных изобразительных элемента. Первый элемент представляет собой стилизованную букву \"О\", которая воспринимается также и как стилизованный \"мешок\" с горловиной и завязками. Второй изобразительный элемент - дугообразный элемент под буквами."
  },
  {
    "id": "309",
    "registryId": "938584",
    "sourceId": "572",
    "title": "Знак №309",
    "logo": "ВЕГАЗАВРИЯ",
    "classes": [
      29,
      30,
      35
    ],
    "price": "от 20 млн руб.",
    "minPrice": 20000000,
    "discount": false,
    "business": [
      "IT",
      "еда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=938584",
    "description": "Известный узнаваемый продуктовый бренд для людей, которые придерживаются вегетарианства и веганства. Широкий охват на маркетплейсах по РФ и СНГ. Бескрайнее дальнейшее развитие продуктов под данным товарным знаком. Зарегистрированный домен рф."
  },
  {
    "id": "310",
    "registryId": "951190",
    "sourceId": "571",
    "title": "Знак №310",
    "logo": "Meider cosmetics",
    "classes": [
      3,
      5,
      21,
      35
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "товары для дома",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=951190"
  },
  {
    "id": "311",
    "registryId": "537283",
    "sourceId": "569",
    "title": "Знак №311",
    "logo": "DELFINO",
    "classes": [
      21
    ],
    "price": "от 100 тыс. руб.",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=537283"
  },
  {
    "id": "312",
    "registryId": "543568",
    "sourceId": "568",
    "title": "Знак №312",
    "logo": "ZERBENN",
    "classes": [
      11,
      21,
      35
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "IT",
      "товары для дома",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=543568",
    "description": "Зарегистрировано доменное имя zerbenn.ru"
  },
  {
    "id": "313",
    "registryId": "1000973",
    "sourceId": "567",
    "title": "Знак №313",
    "logo": "SANDLEMON",
    "classes": [
      3,
      18,
      25
    ],
    "price": "от 180 тыс. руб.",
    "minPrice": 180000,
    "discount": false,
    "business": [
      "косметика",
      "одежда"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=1000973&TypeFile=html",
    "description": "Продается за 3 класс МКТУ - 180.000₽ а 18 и 25 классы- 210.000₽"
  },
  {
    "id": "314",
    "registryId": "877029",
    "sourceId": "566",
    "title": "Знак №314",
    "logo": "ПРОДАВЕЦ ВОЗДУХА",
    "classes": [
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=877029"
  },
  {
    "id": "315",
    "registryId": "781752",
    "sourceId": "562",
    "title": "Знак №315",
    "logo": "Speeco",
    "classes": [
      41
    ],
    "price": "от 128 тыс. руб.",
    "minPrice": 128000,
    "discount": false,
    "business": [
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=781752",
    "description": "Фирменный стиль: вся полиграфия выполненная на высочайшем уровне, передадим все в исходниках. Это и буклет, и макеты фото с фотосессии, сертификаты, дипломы и макеты наружной рекламы."
  },
  {
    "id": "316",
    "registryId": "791363",
    "sourceId": "561",
    "title": "Знак №316",
    "logo": "ВОН ТЕ-Е",
    "classes": [
      31
    ],
    "price": "от 500 тыс. руб.",
    "minPrice": 500000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=791363",
    "description": "Товарный знак на семечки жаренные ВОН ТЕ-Е"
  },
  {
    "id": "317",
    "registryId": "865531",
    "sourceId": "558",
    "title": "Знак №317",
    "logo": "ZaimoVed",
    "classes": [
      9,
      36
    ],
    "price": "от 1 млн руб.",
    "minPrice": 1000000,
    "discount": false,
    "business": [
      "IT",
      "финансы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=865531",
    "description": "Продам товарный знак вместе с доменом Zaimoved.comКлассы МКТУ 09, 36.Данный товарный знак отлично походит для сервиса микрозаймов, сервиса по подбору займов, деньги под проценты, займ под недвижимость и авто"
  },
  {
    "id": "318",
    "registryId": "608024",
    "sourceId": "556",
    "title": "Знак №318",
    "logo": "диВох",
    "classes": [
      16,
      35
    ],
    "price": "от 550 тыс. руб.",
    "minPrice": 550000,
    "discount": false,
    "business": [
      "образование",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=608024",
    "description": "Продаем уникальный торговый знак, в переводе с идиша Неделя."
  },
  {
    "id": "319",
    "registryId": "798625",
    "sourceId": "554",
    "title": "Знак №319",
    "logo": "CHEESE PEOPLE",
    "classes": [
      29,
      30,
      35,
      43
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда",
      "маркетплейсы",
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=798625",
    "description": "Продается товарный знак, есть визуальная концепция ТЗ и упаковки."
  },
  {
    "id": "320",
    "registryId": "966264",
    "sourceId": "553",
    "title": "Знак №320",
    "logo": "Awetto",
    "classes": [
      20
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=966264"
  },
  {
    "id": "321",
    "registryId": "737154",
    "sourceId": "551",
    "title": "Знак №321",
    "logo": "FG VISTA",
    "classes": [
      35,
      38
    ],
    "price": "от 1 млн руб.",
    "minPrice": 1000000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы",
      "связь"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=737154",
    "description": "Продаётся товарный знак, домен fgvista.ru, уникальная IT платформа и ООО."
  },
  {
    "id": "322",
    "registryId": "908929",
    "sourceId": "549",
    "title": "Знак №322",
    "logo": "LACAGE Moscow",
    "classes": [
      24,
      25
    ],
    "price": "от 370 тыс. руб.",
    "minPrice": 370000,
    "discount": false,
    "business": [
      "товары для дома",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=908929",
    "description": "Продается товарный знак, текстильная промышленность 24 и 25 класс. узнаваемый бренд в инстаграмме и на маркет плейсах."
  },
  {
    "id": "323",
    "registryId": "934651",
    "sourceId": "536",
    "title": "Знак №323",
    "logo": "XIWARA",
    "classes": [
      18,
      25,
      28
    ],
    "price": "от 180 тыс. руб.",
    "minPrice": 180000,
    "discount": false,
    "business": [
      "одежда",
      "детские товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=934651"
  },
  {
    "id": "324",
    "registryId": "513174",
    "sourceId": "507",
    "title": "Знак №324",
    "logo": "IT ВAGGAGЕ",
    "classes": [
      18
    ],
    "price": "от 5,9 млн руб.",
    "minPrice": 5900000,
    "discount": false,
    "business": [
      "IT",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=513174",
    "description": "Зapeгиcтpирован в 2013 году. Ширoко известен в IТ среде. Aктивные продажи ведутcя.Имeются вce юридичеcкиe документы на право собcтвенноcти и иcпользoвaниe тoваpного знака . Есть одноимённые домены на сайт .ru и .соm(4 шт). Есть похожий ТЗ в юрисдикции Гонконга, на физ.лицо, удобно под роялти"
  },
  {
    "id": "325",
    "registryId": "872128",
    "sourceId": "506",
    "title": "Знак №325",
    "logo": "Dелигра",
    "classes": [
      9,
      35,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45
    ],
    "price": "от 320 тыс. руб.",
    "minPrice": 320000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы",
      "строительство",
      "связь"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=872128",
    "description": "Товарный знак зарегистрирован 4 февраля 2021 г. Нигде не использовался."
  },
  {
    "id": "326",
    "registryId": "921693",
    "sourceId": "505",
    "title": "Знак №326",
    "logo": "BINGSU (БИНСУ)",
    "classes": [
      30,
      35,
      43
    ],
    "price": "от 3,5 млн руб.",
    "minPrice": 3500000,
    "discount": false,
    "business": [
      "еда",
      "маркетплейсы",
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=921693",
    "description": "Прoдаетcя товарный знак (бренд) коpейcкогo и азиатcкoгo стритфудa, Бинcу (BINGSU). B цeну включен сайт , уникaльнaя pецептуpа блюд и напитков , полный перeход права влaдения товарным знакoм пo всем класcaм. Пoлнaя консультация пo oткpытию в вашeм гoроде кафе. Bыезд Шeф-пoвaрa c обучeнием pецeптoв"
  },
  {
    "id": "327",
    "registryId": "958039",
    "sourceId": "504",
    "title": "Знак №327",
    "logo": "TERRYOTIS",
    "classes": [
      12,
      18,
      20,
      21,
      28
    ],
    "price": "от 180 тыс. руб.",
    "minPrice": 180000,
    "discount": false,
    "business": [
      "транспорт",
      "одежда",
      "товары для дома",
      "детские товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=958039",
    "description": "Товарный знак зарегистрирован 20.06.2023г. Нигде не использовался. Можно использовать для производства товаров для животных"
  },
  {
    "id": "328",
    "registryId": "839850",
    "sourceId": "502",
    "title": "Знак №328",
    "logo": "Мастер Шурик",
    "classes": [
      2,
      8,
      11,
      35
    ],
    "price": "от 90 тыс. руб.",
    "minPrice": 90000,
    "discount": false,
    "business": [
      "ремонт",
      "товары",
      "товары для дома",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=839850",
    "description": "В комплекте:1. Вывеска2. Флешки3. Футболки4. Карандаши, ручки5. Брендбук"
  },
  {
    "id": "329",
    "registryId": "908496",
    "sourceId": "501",
    "title": "Знак №329",
    "logo": "PRISLI",
    "classes": [
      3
    ],
    "price": "от 3 млн руб.",
    "minPrice": 3000000,
    "discount": false,
    "business": [
      "косметика"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=908496",
    "description": "Бренд «Prisli» — российский производитель и поставщик бытовой химии и моющих средств. Производство базируется в г. Краснодаре. ТЗ продается с договорами на торговые сети, стартовая стоимость 3 000 000 рублей. +1% от оборота."
  },
  {
    "id": "330",
    "registryId": "952745",
    "sourceId": "498",
    "title": "Знак №330",
    "logo": "Qotton",
    "classes": [
      3,
      5,
      10,
      16
    ],
    "price": "от 1 млн руб.",
    "minPrice": 1000000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=952745",
    "description": "Бренд продажи и производства товаров личной гигиены."
  },
  {
    "id": "331",
    "registryId": "558510",
    "sourceId": "497",
    "title": "Знак №331",
    "logo": "ШОКОЛАКОМКИ",
    "classes": [
      30
    ],
    "price": "от 180 тыс. руб.",
    "minPrice": 180000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=558510",
    "description": "Товарный знак \"ШОКОЛАКОМКИ\" для кондитерскиз изделий"
  },
  {
    "id": "332",
    "registryId": "558090",
    "sourceId": "495",
    "title": "Знак №332",
    "logo": "ШОКОПУЗИКИ",
    "classes": [
      30
    ],
    "price": "от 250 тыс. руб.",
    "minPrice": 250000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=558090",
    "description": "Товарный знак \"ШОКОПУЗИКИ\" для кондитерских изделий."
  },
  {
    "id": "333",
    "registryId": "970757",
    "sourceId": "476",
    "title": "Знак №333",
    "logo": "МАРКА ВКУСА",
    "classes": [
      30,
      31,
      32,
      33,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=970757",
    "description": "Комбинированный знак (защищены название и дизайн). Название подчеркивает лучшие вкусовые характеристики продукции, а дизайн отражает экологичность и натуральность продуктов, продвигаемых под данным брендом.При необходимости дизайн можно изменить и по желанию легко зарегистрировать в Роспатенте."
  },
  {
    "id": "334",
    "registryId": "749125",
    "sourceId": "475",
    "title": "Знак №334",
    "logo": "Жажда Странствий",
    "classes": [
      3,
      9,
      16,
      18,
      20,
      35,
      38,
      41
    ],
    "price": "от 2,8 млн руб.",
    "minPrice": 2800500,
    "discount": false,
    "business": [
      "косметика",
      "IT",
      "образование",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=749125",
    "description": "Устоявшееся выражение, рассчитан на потребителя из стран советского блока. 2-а домена возрастом более 3-х лет. Возможна передача файла ИМ. Возможна передача КТ с хорошим рейтингом на OZON. Покупателю, при необходимости, дам пояснения концепции в каждом классе. Лого переработан, вышлю по запросу"
  },
  {
    "id": "335",
    "registryId": "952341",
    "sourceId": "474",
    "title": "Знак №335",
    "logo": "Staffscan",
    "classes": [
      36,
      38,
      39,
      41,
      42,
      43,
      45
    ],
    "price": "от 250 тыс. руб.",
    "minPrice": 250000,
    "discount": false,
    "business": [
      "IT",
      "финансы",
      "связь",
      "логистика"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=952341",
    "description": "Продаeтcя уникальный зaрегистрирoванный в Pоспaтенте торговый знак (бpeнд) StaffScan (наименовaние и лoгoтип).Дaта регистpaции в Рoспатентe 23.07.2023 г. TP регистpирoвался в кaчecтве бpeнда проверки/оцeнки/подборa пеpcоналa.K ТЗ прилагается доменное имя staffscan.ru (дата рег. 25.07.19)"
  },
  {
    "id": "336",
    "registryId": "945338",
    "sourceId": "473",
    "title": "Знак №336",
    "logo": "Promeans",
    "classes": [
      24,
      25,
      26,
      40,
      42
    ],
    "price": "от 250 тыс. руб.",
    "minPrice": 250000,
    "discount": false,
    "business": [
      "товары для дома",
      "одежда",
      "производство",
      "IT"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=945338",
    "description": "Пpoдaется уникaльный заpегистрирoванный в Pоспaтeнтe тopгoвый знaк (бpeнд) Promeаns (наименoваниe и лoгoтип).Регистриpoвалcя в качествa бренда пpофeccионaльнoй oдежды.Дата pегиcтрации в Pocпатeнтe 01.06.2023 г. K ТЗ тaкже прилaгaетcя доменное имя promeans.ru (дата регистрации 23.08.22)"
  },
  {
    "id": "337",
    "registryId": "487334",
    "sourceId": "472",
    "title": "Знак №337",
    "logo": "FIORELINE",
    "classes": [
      11,
      35
    ],
    "price": "от 400 тыс. руб.",
    "minPrice": 400000,
    "discount": false,
    "business": [
      "товары для дома",
      "маркетплейсы"
    ],
    "registry": "#"
  },
  {
    "id": "338",
    "registryId": "432491",
    "sourceId": "471",
    "title": "Знак №338",
    "logo": "IORE",
    "classes": [
      11,
      35
    ],
    "price": "от 400 тыс. руб.",
    "minPrice": 400000,
    "discount": false,
    "business": [
      "товары для дома",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=432491"
  },
  {
    "id": "339",
    "registryId": "436277",
    "sourceId": "470",
    "title": "Знак №339",
    "logo": "LORE",
    "classes": [
      11,
      35
    ],
    "price": "от 1 млн руб.",
    "minPrice": 1000000,
    "discount": false,
    "business": [
      "товары для дома",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=436277",
    "description": "Более 500 отзывов на товар под данным ТЗ на маркетплейсах."
  },
  {
    "id": "340",
    "registryId": "443161",
    "sourceId": "469",
    "title": "Знак №340",
    "logo": "FIORE",
    "classes": [
      9,
      35
    ],
    "price": "от 300 тыс. руб.",
    "minPrice": 300000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=443161"
  },
  {
    "id": "341",
    "registryId": "592600",
    "sourceId": "449",
    "title": "Знак №341",
    "logo": "GREEN PLANET",
    "classes": [
      3,
      5,
      10,
      28,
      29,
      30,
      39,
      43,
      44
    ],
    "price": "от 57 млн руб.",
    "minPrice": 57000000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "детские товары",
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=592600"
  },
  {
    "id": "342",
    "registryId": "960411",
    "sourceId": "439",
    "title": "Знак №342",
    "logo": "EKSILIUM",
    "classes": [
      2,
      6,
      8,
      10,
      14,
      20,
      22,
      24,
      25,
      28,
      29,
      30,
      31,
      32,
      33,
      34
    ],
    "price": "от 150 тыс. руб.",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "ремонт",
      "строительство",
      "товары",
      "медицина"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=960411&TypeFile=html"
  },
  {
    "id": "343",
    "registryId": "969099",
    "sourceId": "438",
    "title": "Знак №343",
    "logo": "REFILAN",
    "classes": [
      3,
      4,
      6,
      7,
      8,
      10,
      11,
      14,
      16,
      18,
      20,
      21,
      22,
      23,
      24,
      25,
      28,
      29,
      30,
      31,
      32,
      33,
      34
    ],
    "price": "от 150 тыс. руб.",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "косметика",
      "товары",
      "строительство",
      "техника"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=969099&TypeFile=html"
  },
  {
    "id": "344",
    "registryId": "969422",
    "sourceId": "431",
    "title": "Знак №344",
    "logo": "KENBACI",
    "classes": [
      3,
      14,
      25,
      28
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "косметика",
      "аксессуары",
      "одежда",
      "детские товары"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=969422&TypeFile=html",
    "description": "Цена договорная (от 140 до 180 тыс в зависимости от класса)"
  },
  {
    "id": "345",
    "registryId": "896794",
    "sourceId": "430",
    "title": "Знак №345",
    "logo": "VICOSI",
    "classes": [
      9,
      16,
      35,
      41
    ],
    "price": "от 300 тыс. руб.",
    "minPrice": 300000,
    "discount": false,
    "business": [
      "IT",
      "образование",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=896794",
    "description": "Вместе с товарным знаком также прилагается одноименный домен .RU Можно писать по указанному номеру телефона в вотсап/телеграмм. ТЗ действителен до 16 сентября 2031 года."
  },
  {
    "id": "346",
    "registryId": "789934",
    "sourceId": "429",
    "title": "Знак №346",
    "logo": "PROFAPP",
    "classes": [
      9,
      16,
      35,
      38
    ],
    "price": "от 39,5 млн руб.",
    "minPrice": 39500000,
    "discount": false,
    "business": [
      "IT",
      "образование",
      "маркетплейсы",
      "связь"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=789934",
    "description": "Запатентованный товарный знак.Классы МКТУ 9, 16, 35, 38Действует до 18.09.2030 г. с возможностью пролонгации."
  },
  {
    "id": "347",
    "registryId": "942446",
    "sourceId": "426",
    "title": "Знак №347",
    "logo": "МультиNail",
    "classes": [
      3,
      41,
      44
    ],
    "price": "от 150 тыс. руб.",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "косметика",
      "образование",
      "медицина"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=942446",
    "description": "Использовался в период оказания услуг по обучению в школе маникюра. Срок действия до 10.11.2031 г."
  },
  {
    "id": "348",
    "registryId": "875892",
    "sourceId": "425",
    "title": "Знак №348",
    "logo": "Любимикс (LUBIMIX)",
    "classes": [
      35
    ],
    "price": "от 149 тыс. руб.",
    "minPrice": 149000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=875892",
    "description": "Брэнд новый, регистрировали для сухофруктов и миксов на основе сухофруктов и мюслей. Бонусом отдам домены (lubimix.ru) и (любимикс.рф)"
  },
  {
    "id": "349",
    "registryId": "917891",
    "sourceId": "424",
    "title": "Знак №349",
    "logo": "NEO VIZUS",
    "classes": [
      9,
      38
    ],
    "price": "от 20 млн руб.",
    "minPrice": 20000000,
    "discount": false,
    "business": [
      "IT",
      "связь"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=917891",
    "description": "Приборы и инструменты научные, исследовательские, навигационные, геодезические, фотографические, кинематографические, аудиовизуальные, оптические, для взвешивания, измерения, сигнализации, обнаружения, тестирования, спасания и обучения; приборы и инструменты для передачи, распределения, трансформаци"
  },
  {
    "id": "350",
    "registryId": "876548",
    "sourceId": "422",
    "title": "Знак №350",
    "logo": "AQUA",
    "classes": [
      28
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "детские товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=876548"
  },
  {
    "id": "351",
    "registryId": "962906",
    "sourceId": "418",
    "title": "Знак №351",
    "logo": "Princess of North",
    "classes": [
      3,
      14,
      21,
      25,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "косметика",
      "аксессуары",
      "товары для дома",
      "одежда"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=962906&TypeFile=html",
    "description": "Цена зависит от класса, от 160 до 230 тыс за класс"
  },
  {
    "id": "352",
    "registryId": "958579",
    "sourceId": "417",
    "title": "Знак №352",
    "logo": "Mr. Мебелевъ",
    "classes": [
      20,
      35
    ],
    "price": "от 300 тыс. руб.",
    "minPrice": 300000,
    "discount": false,
    "business": [
      "товары для дома",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=958579",
    "description": "Название соответствует поисковым запросам, что повышает поисковую выдачу сайта. Логин к сайту идёт бонусом mr-mebelev.ru"
  },
  {
    "id": "353",
    "registryId": "623290",
    "sourceId": "413",
    "title": "Знак №353",
    "logo": "СервизЪ",
    "classes": [
      35
    ],
    "price": "от 50 тыс. руб.",
    "minPrice": 50000,
    "discount": false,
    "business": [
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=623290"
  },
  {
    "id": "354",
    "registryId": "825723",
    "sourceId": "411",
    "title": "Знак №354",
    "logo": "Jolabougie",
    "classes": [
      3,
      4,
      35
    ],
    "price": "от 340 тыс. руб.",
    "minPrice": 340000,
    "discount": false,
    "business": [
      "косметика",
      "товары",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=825723",
    "description": "Срок до 2031г."
  },
  {
    "id": "355",
    "registryId": "781573",
    "sourceId": "410",
    "title": "Знак №355",
    "logo": "BlackSeaLab",
    "classes": [
      3
    ],
    "price": "от 550 тыс. руб.",
    "minPrice": 550000,
    "discount": false,
    "business": [
      "косметика"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=781573",
    "description": "Продам готовую концепцию магазина натуральной концепции, зарегистрированный товарный знак, разработаны полиграфия и сувенирная продукция, выпущена и успешно продаётся линейка по уходу за лицом, действующие аккаунты. В подарок вывеска."
  },
  {
    "id": "356",
    "registryId": "579718",
    "sourceId": "407",
    "title": "Знак №356",
    "logo": "КЛАСС-МАРКЕТ",
    "classes": [
      35
    ],
    "price": "от 369 тыс. руб.",
    "minPrice": 369000,
    "discount": false,
    "business": [
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=579718",
    "description": "Понятный, доброжелательный знак, который сейчас практически не реально зарегистрировать из-за его простоты. Активно и успешно использовался на протяжении более чем 15 лет для магазинов формата дрогери. В дополнение к нему идёт сайт с одноимённым названием."
  },
  {
    "id": "357",
    "registryId": "533420",
    "sourceId": "402",
    "title": "Знак №357",
    "logo": "FIRST style",
    "classes": [
      25,
      26,
      28,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "одежда",
      "детские товары",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=533420",
    "description": "Первый стиль, знаку 6 лет использовался в интернет магазине итальянской премиальной детской одежды. Уникальность -зарегистрировано с полностью охраняемыми словесными элементами. Домен first-style.ru"
  },
  {
    "id": "358",
    "registryId": "941511",
    "sourceId": "396",
    "title": "Знак №358",
    "logo": "DivanPro",
    "classes": [
      35
    ],
    "price": "от 500 тыс. руб.",
    "minPrice": 500000,
    "discount": false,
    "business": [
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=941511",
    "description": "Продается товарный знак DivanPro. Зарегистрирован в 35 классе МКТУ. Отлично подойдет для мебельного маркетплейса или магазина мебели."
  },
  {
    "id": "359",
    "registryId": "930645",
    "sourceId": "394",
    "title": "Знак №359",
    "logo": "KEBELES",
    "classes": [
      3
    ],
    "price": "от 60 тыс. руб.",
    "minPrice": 60000,
    "discount": false,
    "business": [
      "косметика"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=930645",
    "description": "Комбинированный товарный знак. Приоритет от 13.10.2022 г. Срок действия до 13.10.2032 г."
  },
  {
    "id": "360",
    "registryId": "672365",
    "sourceId": "392",
    "title": "Знак №360",
    "logo": "IMPULSEFITEMS",
    "classes": [
      41
    ],
    "price": "от 100 тыс. руб.",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=672365"
  },
  {
    "id": "361",
    "registryId": "865824",
    "sourceId": "391",
    "title": "Знак №361",
    "logo": "ZVEZDOPAD",
    "classes": [
      41
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=865824",
    "description": "Товарный знак зарегистрирован в отношении услуг 41 класса МКТУ."
  },
  {
    "id": "362",
    "registryId": "878807",
    "sourceId": "389",
    "title": "Знак №362",
    "logo": "Manifattura \"ALGERO\"",
    "classes": [
      18,
      24,
      25,
      40
    ],
    "price": "от 150 тыс. руб. за класс",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "IT",
      "одежда",
      "товары для дома",
      "производство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=878807",
    "description": "Бренд домашнего текстиля, одежды и товаров для дома, доступен домен algerotextile.com. Цена указана за один класс МКТУ."
  },
  {
    "id": "363",
    "registryId": "919522",
    "sourceId": "388",
    "title": "Знак №363",
    "logo": "Vega Fitness",
    "classes": [
      41
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=919522",
    "description": "Товарный знак, логотип, адрес сайта."
  },
  {
    "id": "364",
    "registryId": "815352",
    "sourceId": "378",
    "title": "Знак №364",
    "logo": "Свобода Слова",
    "classes": [
      32,
      33
    ],
    "price": "от 1 млн руб.",
    "minPrice": 1000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=815352"
  },
  {
    "id": "365",
    "registryId": "929127",
    "sourceId": "377",
    "title": "Знак №365",
    "logo": "929127",
    "classes": [
      16
    ],
    "price": "от 240 млн руб.",
    "minPrice": 240000000,
    "discount": false,
    "business": [
      "образование"
    ],
    "registry": "http://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=929127",
    "description": "В продажу представлен уникальный Товарный знак известного бренда. Обладатель данного знака получает узнаваемый бренд, который известен практически каждому на территории РФ. Огромный потенциал развития в самых популярных направлениях - одежда, канцелярия и игрушки. Номер 929127."
  },
  {
    "id": "366",
    "registryId": "752469",
    "sourceId": "372",
    "title": "Знак №366",
    "logo": "SMARTWEAR",
    "classes": [
      9,
      10,
      11,
      14,
      18,
      25,
      35,
      40
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "медицина",
      "товары для дома",
      "аксессуары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=752469",
    "description": "Будущее уже тутЛиния «умная одежда» активно развивается по всему мируи представлена в таких странах, как США, Франция, Италия,Корея. Мы предлагаем Вам стать владельцем торговогознака «Smartwear» на территории Российской Федерации.Номера ТЗ: 752469, 831416"
  },
  {
    "id": "367",
    "registryId": "718536",
    "sourceId": "370",
    "title": "Знак №367",
    "logo": "KUCHENCHEF",
    "classes": [
      11,
      21,
      35
    ],
    "price": "от 900 тыс. руб.",
    "minPrice": 900000,
    "discount": false,
    "business": [
      "товары для дома",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=718536"
  },
  {
    "id": "368",
    "registryId": "685485",
    "sourceId": "367",
    "title": "Знак №368",
    "logo": "VILLA ANAPA",
    "classes": [
      33
    ],
    "price": "от 500 тыс. руб.",
    "minPrice": 500000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=685485",
    "description": "Товарный знак, уникальное наименование и изображение (32,33 классы). Зарегистрирован на ООО, компания не действовала, сдавали нулевые отчеты, все вовремя, задолженностей нет. Возможна продажа вместе с юридическим лицом."
  },
  {
    "id": "369",
    "registryId": "815352",
    "sourceId": "366",
    "title": "Знак №369",
    "logo": "СВОБОДА СЛОВА",
    "classes": [
      32,
      33
    ],
    "price": "от 750 тыс. руб.",
    "minPrice": 750000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=815352",
    "description": "Товарный знак зарегистрирован по классу 32( воды, пиво , квас, аперитивы...) 33 класс (Водка, вина, виски и т.д.)"
  },
  {
    "id": "370",
    "registryId": "930253",
    "sourceId": "365",
    "title": "Знак №370",
    "logo": "ХЛЕБАНОВО",
    "classes": [
      29,
      30,
      35,
      43
    ],
    "price": "от 450 тыс. руб.",
    "minPrice": 450000,
    "discount": false,
    "business": [
      "IT",
      "еда",
      "маркетплейсы",
      "рестораны"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=930253&TypeFile=html",
    "description": "Товарный знак «ХЛЕБАНОВО» - содержательный, колоритный, благозвучный. Слово легко запоминается и простое для продвижения. Зарегистрировано доменное имя."
  },
  {
    "id": "371",
    "registryId": "910012",
    "sourceId": "344",
    "title": "Знак №371",
    "logo": "BE WITCH",
    "classes": [
      3,
      35
    ],
    "price": "от 180 тыс. руб.",
    "minPrice": 180000,
    "discount": false,
    "business": [
      "косметика",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=910012",
    "description": "Производство и продажа косметических средств"
  },
  {
    "id": "372",
    "registryId": "563051",
    "sourceId": "340",
    "title": "Знак №372",
    "logo": "Jazz&wine",
    "classes": [
      41,
      43
    ],
    "price": "от 350 тыс. руб.",
    "minPrice": 350000,
    "discount": false,
    "business": [
      "образование",
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=563051",
    "description": "Товарный знак. Может быть использован как название ресторана, event площадки, винного бутика И так далее ."
  },
  {
    "id": "373",
    "registryId": "512532",
    "sourceId": "339",
    "title": "Знак №373",
    "logo": "Amilu",
    "classes": [
      25
    ],
    "price": "от 1 млн руб.",
    "minPrice": 1000000,
    "discount": false,
    "business": [
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=512532",
    "description": "Продам бренд одежды AMILU, Одежда, обувь, головные уборы. Подойдёт для производителей , поставщиков , продавцов, дизайнеров, модельеров, конструкторов, разработчиков женской одежды."
  },
  {
    "id": "374",
    "registryId": "335361",
    "sourceId": "337",
    "title": "Знак №374",
    "logo": "Винная история, Wine story",
    "classes": [
      43
    ],
    "price": "от 650 тыс. руб.",
    "minPrice": 650000,
    "discount": false,
    "business": [
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=335361",
    "description": "Продаются два товарных знака. Российский: Винная история 335361 и международный: Wine story 951871"
  },
  {
    "id": "375",
    "registryId": "835560",
    "sourceId": "335",
    "title": "Знак №375",
    "logo": "NEOTREND",
    "classes": [
      9,
      18,
      21,
      24,
      25
    ],
    "price": "от 60 тыс. руб. за класс",
    "minPrice": 60000,
    "discount": false,
    "business": [
      "IT",
      "одежда",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=835560",
    "description": "Торговая марка ассоциируется с новизной, новым направлением, интригует, заинтересовывает, продаёт сама себя. Может успешно применяться для продвижения различных категорий товаров.Цена указана за 1 класс, цена за всю торговую марку 250 т.р."
  },
  {
    "id": "376",
    "registryId": "757497",
    "sourceId": "333",
    "title": "Знак №376",
    "logo": "MEDICARI",
    "classes": [
      44
    ],
    "price": "от 99 тыс. руб.",
    "minPrice": 99000,
    "discount": false,
    "business": [
      "медицина"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=757497",
    "description": "Медицинский центр"
  },
  {
    "id": "377",
    "registryId": "912135",
    "sourceId": "327",
    "title": "Знак №377",
    "logo": "Умный ёжик",
    "classes": [
      41,
      44
    ],
    "price": "от 100 тыс. руб.",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "детские товары",
      "образование",
      "медицина"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=912135&TypeFile=html",
    "description": "Комбинированный товарный знак, для бренда детской школы творчества, дошкольного и школьного дополнительного образования."
  },
  {
    "id": "378",
    "registryId": "425627",
    "sourceId": "326",
    "title": "Знак №378",
    "logo": "Volary",
    "classes": [
      25,
      35
    ],
    "price": "от 3,5 млн руб.",
    "minPrice": 3500000,
    "discount": false,
    "business": [
      "IT",
      "одежда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=425627",
    "description": "Разработка и производство женского верхнего трикотажа. Вместе с одноименным доменом Volary.ru"
  },
  {
    "id": "379",
    "registryId": "908424",
    "sourceId": "323",
    "title": "Знак №379",
    "logo": "LAVISH KING",
    "classes": [
      29,
      30
    ],
    "price": "от 80 тыс. руб.",
    "minPrice": 80000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=908424"
  },
  {
    "id": "380",
    "registryId": "910547",
    "sourceId": "322",
    "title": "Знак №380",
    "logo": "ALCEDO",
    "classes": [
      10,
      11,
      25
    ],
    "price": "от 130 тыс. руб.",
    "minPrice": 130000,
    "discount": false,
    "business": [
      "медицина",
      "товары для дома",
      "одежда"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=910547&TypeFile=html"
  },
  {
    "id": "381",
    "registryId": "857535",
    "sourceId": "321",
    "title": "Знак №381",
    "logo": "KIVEX",
    "classes": [
      18,
      21,
      25,
      28
    ],
    "price": "от 700 тыс. руб.",
    "minPrice": 700000,
    "discount": false,
    "business": [
      "одежда",
      "товары для дома",
      "детские товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=857535",
    "description": "ТЗ идеально подходит для производства одежды, нижнего белья, спортивных аксессуаров и тренажеров"
  },
  {
    "id": "382",
    "registryId": "903123",
    "sourceId": "318",
    "title": "Знак №382",
    "logo": "Хлебный Рай",
    "classes": [
      31,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=903123",
    "description": "Продам товарный знак Хлебный Рай по 31,35 МКТУ"
  },
  {
    "id": "383",
    "registryId": "570724",
    "sourceId": "317",
    "title": "Знак №383",
    "logo": "StreetMarket",
    "classes": [
      29,
      30,
      35,
      43
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда",
      "маркетплейсы",
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=570724",
    "description": "Товарный знак хорошо подходит для розничной сети или сети кафетериев, кафе, кофеен. Также хорошая марка для служб доставки, дарк-сторов. Продуктов со своей торговой маркой. https://drive.google.com/file/d/171k4UeXdHbaPasPwjIk7Y0ck3eBDJTyc/view?usp=share_link"
  },
  {
    "id": "384",
    "registryId": "897206",
    "sourceId": "316",
    "title": "Знак №384",
    "logo": "ВКУСНЯЧИЙ ВКУС",
    "classes": [
      29,
      30
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=897206"
  },
  {
    "id": "385",
    "registryId": "874645",
    "sourceId": "315",
    "title": "Знак №385",
    "logo": "“Shatskikh design \"",
    "classes": [
      18,
      25
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=874645",
    "description": "Продаю товарный знак, очень схожь, с мировым брендом, как визуально, так и по звучанию, классы МКТУ самые востребованные направления, разработан и зарегестрирован также логотип, могу выслать на почту по желанию, возможна скидка по цене. Звоните отвечу на любые вопросы."
  },
  {
    "id": "386",
    "registryId": "905646",
    "sourceId": "314",
    "title": "Знак №386",
    "logo": "TASKER",
    "classes": [
      1,
      2,
      4,
      11
    ],
    "price": "от 130 тыс. руб.",
    "minPrice": 130000,
    "discount": false,
    "business": [
      "производство",
      "ремонт",
      "товары",
      "товары для дома"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=905646&TypeFile=html"
  },
  {
    "id": "387",
    "registryId": "778723",
    "sourceId": "313",
    "title": "Знак №387",
    "logo": "HOLNESS",
    "classes": [
      3,
      44
    ],
    "price": "от 890 тыс. руб.",
    "minPrice": 890000,
    "discount": false,
    "business": [
      "IT",
      "косметика",
      "медицина"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=778723",
    "description": "Продается зарегистрированный товарный знак HOLNESS. Для использования в медицине, косметологии и индустрии красоты, SPA и т.п. Вариант использования: HOLNESS CLINIC. HOLNESS - этимологический аналог от WELNESS (WELLNESS). HOL - от \"Холистика\" (холистический), имеется графический логотип и домен."
  },
  {
    "id": "388",
    "registryId": "902590",
    "sourceId": "312",
    "title": "Знак №388",
    "logo": "LUMPA",
    "classes": [
      2,
      32
    ],
    "price": "от 130 тыс. руб.",
    "minPrice": 130000,
    "discount": false,
    "business": [
      "ремонт",
      "еда"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=902590&TypeFile=html"
  },
  {
    "id": "389",
    "registryId": "900979",
    "sourceId": "309",
    "title": "Знак №389",
    "logo": "ALBEMAR",
    "classes": [
      2,
      10,
      11,
      28,
      31
    ],
    "price": "от 130 тыс. руб.",
    "minPrice": 130000,
    "discount": false,
    "business": [
      "ремонт",
      "медицина",
      "товары для дома",
      "детские товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=900979"
  },
  {
    "id": "390",
    "registryId": "888937",
    "sourceId": "308",
    "title": "Знак №390",
    "logo": "NEHOLODNO",
    "classes": [
      25,
      35
    ],
    "price": "от 1,1 млн руб.",
    "minPrice": 1100000,
    "discount": false,
    "business": [
      "одежда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=888937",
    "description": "Бренд зимней одежды"
  },
  {
    "id": "391",
    "registryId": "882739",
    "sourceId": "307",
    "title": "Знак №391",
    "logo": "ЧИТАЙКОФЕ",
    "classes": [
      41,
      43
    ],
    "price": "от 1,1 млн руб.",
    "minPrice": 1100000,
    "discount": false,
    "business": [
      "образование",
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=882739",
    "description": "Кофейня нового формата, объединяющая место где можно насладиться прекрасным кофе и почитать либо приобрести любимую книгу. И кофейня, и магазин, и изба-читальня!"
  },
  {
    "id": "392",
    "registryId": "858019",
    "sourceId": "306",
    "title": "Знак №392",
    "logo": "LIBRANCH",
    "classes": [
      29,
      30,
      31,
      35
    ],
    "price": "от 100 тыс. руб.",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "IT",
      "еда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=858019",
    "description": "Домен: libranch.ru"
  },
  {
    "id": "393",
    "registryId": "440473",
    "sourceId": "305",
    "title": "Знак №393",
    "logo": "Helga / Хельга",
    "classes": [
      25
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=440473"
  },
  {
    "id": "394",
    "registryId": "652795",
    "sourceId": "302",
    "title": "Знак №394",
    "logo": "НАШЕ!",
    "classes": [
      2,
      17,
      19
    ],
    "price": "от 150 тыс. руб.",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "ремонт",
      "строительство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=652795",
    "description": "Приобрести можно как весь товарный знак, так и частями:один любой класс - 150 000 руб.два любых класса - 250 000 руб.весь товарный знак - 300 000 руб."
  },
  {
    "id": "395",
    "registryId": "821962",
    "sourceId": "301",
    "title": "Знак №395",
    "logo": "Ваши яйца здесь !",
    "classes": [
      35
    ],
    "price": "от 5 млн руб.",
    "minPrice": 5000000,
    "discount": false,
    "business": [
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=821962",
    "description": "Ваши яйца здесь !"
  },
  {
    "id": "396",
    "registryId": "883771",
    "sourceId": "300",
    "title": "Знак №396",
    "logo": "РАДОСТЬ ЗДОРОВЬЯ",
    "classes": [
      5,
      28,
      29,
      30,
      32,
      35,
      44
    ],
    "price": "от 67 млн руб.",
    "minPrice": 67000000,
    "discount": false,
    "business": [
      "медицина",
      "детские товары",
      "еда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=883771",
    "description": "Медицинские центры, аптеки, фитнес-центры, производство и реализация лекарств. Фито-чаи и различные сборы, спорт. питание и тренажёры. Бакалея. Детское питание. Минеральные и столовые воды, соки и напитки, молочная продукция. Растительные масла, кондитерские изделия, специи, товары личной гигиены..."
  },
  {
    "id": "397",
    "registryId": "706981",
    "sourceId": "299",
    "title": "Знак №397",
    "logo": "ЗдОрово ЗдорОво",
    "classes": [
      29,
      30,
      31,
      35
    ],
    "price": "от 150 тыс. руб.",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "еда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=706981",
    "description": "ЗОЖ товарный знак: полезное питание, магазин"
  },
  {
    "id": "398",
    "registryId": "572668",
    "sourceId": "297",
    "title": "Знак №398",
    "logo": "КУПИСАМ",
    "classes": [
      35,
      39
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "логистика"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=572668"
  },
  {
    "id": "399",
    "registryId": "548554",
    "sourceId": "296",
    "title": "Знак №399",
    "logo": "24CONTACT",
    "classes": [
      35,
      38,
      41,
      42
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "связь",
      "образование",
      "IT"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=548554",
    "description": "2 домена, аккаунты в соцсетях, видео заставка (интро). Продлевать в ноябре 2023 г. Бонусом профессиональная доработка фирменного стиля под ваш бизнес или продукт, 1 консультация по стратегическому маркетингу, позиционированию, УТП, отстройке от конкурентов, упаковке, дизайну."
  },
  {
    "id": "400",
    "registryId": "536713",
    "sourceId": "295",
    "title": "Знак №400",
    "logo": "Настоящее золото",
    "classes": [
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=536713&TypeFile=html",
    "description": "Продам либо сдам в аренду(по договоренности) бренд «Настоящее золото». Правообладатель- Дюднев Владимир Николаевич. Бренд с сильным продвижением в розничной продажах в Туле."
  },
  {
    "id": "401",
    "registryId": "879091",
    "sourceId": "293",
    "title": "Знак №401",
    "logo": "Adeola",
    "classes": [
      3,
      5,
      9,
      12,
      18,
      25,
      28,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "IT",
      "транспорт"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=879091"
  },
  {
    "id": "402",
    "registryId": "885266",
    "sourceId": "291",
    "title": "Знак №402",
    "logo": "Товарный знак \"ОБЪЕДИНЯЯ ВЫГОДУ\"",
    "classes": [
      9,
      16,
      35,
      36,
      38,
      39,
      41,
      42,
      45
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "образование",
      "маркетплейсы",
      "финансы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=885266",
    "description": "Практически в каждом рекламном ролике нас заманивают ВЫГОДОЙ!!Уникальный, легко запоминаемый товарный знак! Это словосочетание можно поставить в один ранг с \"Он такой один\" Тинькофф и \"На твоей стороне\" Билайн. Специально подобранные классы МКТУ! Два свидетельства: 885266, 833960"
  },
  {
    "id": "403",
    "registryId": "729935",
    "sourceId": "290",
    "title": "Знак №403",
    "logo": "BAGBELT magicsteeltouch",
    "classes": [
      6,
      14,
      18,
      20,
      25,
      26
    ],
    "price": "от 150 тыс. руб.",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "строительство",
      "аксессуары",
      "одежда",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=729935",
    "description": "товарный знак"
  },
  {
    "id": "404",
    "registryId": "860455",
    "sourceId": "288",
    "title": "Знак №404",
    "logo": "Rinevis",
    "classes": [
      1,
      2,
      3,
      4,
      8,
      10,
      14,
      15,
      18,
      20,
      21,
      22,
      23,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      36,
      38,
      39,
      43,
      44
    ],
    "price": "от 250 тыс. руб.",
    "minPrice": 250000,
    "discount": false,
    "business": [
      "производство",
      "ремонт",
      "косметика",
      "товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=860455"
  },
  {
    "id": "405",
    "registryId": "862381",
    "sourceId": "287",
    "title": "Знак №405",
    "logo": "Evirnes",
    "classes": [
      1,
      2,
      4,
      5,
      6,
      7,
      10,
      12,
      13,
      15,
      17,
      19,
      22,
      23,
      24,
      26,
      27,
      29,
      30,
      31,
      32,
      34,
      43,
      44,
      45
    ],
    "price": "от 180 тыс. руб.",
    "minPrice": 180000,
    "discount": false,
    "business": [
      "IT",
      "производство",
      "ремонт",
      "товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=862381",
    "description": "Доступны домены: Evirnes.ru Evirnes.com"
  },
  {
    "id": "406",
    "registryId": "882186",
    "sourceId": "286",
    "title": "Знак №406",
    "logo": "Riaven",
    "classes": [
      2,
      3,
      4,
      6,
      8,
      10,
      13,
      14,
      15,
      16,
      18,
      22,
      23,
      24,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      38,
      39,
      40,
      41,
      43,
      44,
      45
    ],
    "price": "от 180 тыс. руб.",
    "minPrice": 180000,
    "discount": false,
    "business": [
      "IT",
      "ремонт",
      "косметика",
      "товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=882186",
    "description": "Доступны домены: riaven.ru riaven.com"
  },
  {
    "id": "407",
    "registryId": "882724",
    "sourceId": "285",
    "title": "Знак №407",
    "logo": "Marsilen",
    "classes": [
      2,
      4,
      6,
      7,
      8,
      9,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      26,
      27,
      28,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      43,
      45
    ],
    "price": "от 180 тыс. руб.",
    "minPrice": 180000,
    "discount": false,
    "business": [
      "IT",
      "ремонт",
      "товары",
      "строительство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=882724",
    "description": "Доступны домены: Marsilen.ru, Marsilen.com"
  },
  {
    "id": "408",
    "registryId": "635290",
    "sourceId": "284",
    "title": "Знак №408",
    "logo": "Домой Доставим",
    "classes": [
      35,
      39,
      42,
      43
    ],
    "price": "от 550 тыс. руб.",
    "minPrice": 550000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "логистика",
      "IT",
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=635290",
    "description": "Можем также продать брендбук по данному товарному знаку и соответствующие домены (9 шт)."
  },
  {
    "id": "409",
    "registryId": "866757",
    "sourceId": "282",
    "title": "Знак №409",
    "logo": "6 сторон",
    "classes": [
      36,
      37
    ],
    "price": "от 5 млн руб.",
    "minPrice": 5000000,
    "discount": false,
    "business": [
      "финансы",
      "строительство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=866757",
    "description": "6 сторон - это не просто красивое название,а концептуальный товарный знак. Он вобрал в себя многогранность форм.Он геометрично точен и имеет глубокий смысл. Впрочем вы и сами это видите"
  },
  {
    "id": "410",
    "registryId": "880700",
    "sourceId": "281",
    "title": "Знак №410",
    "logo": "MIAUCAT",
    "classes": [
      1,
      3,
      4,
      20,
      21,
      28,
      29,
      30,
      31,
      32,
      33,
      40
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "производство",
      "косметика",
      "товары",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=880700",
    "description": "Одно из направлений это интернет-магазин OZON по продаже наполнителя для кошачьих туалетов и товаров для грызунов.Второе основное направление это продажа топливных гранул светлых пеллет."
  },
  {
    "id": "411",
    "registryId": "667260",
    "sourceId": "280",
    "title": "Знак №411",
    "logo": "СТРОИТИ",
    "classes": [
      6,
      35,
      37
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "строительство",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=667260",
    "description": "Строити - старославянская форма глагола \"строить\". Верность традициям добротной стройки. Логотип динамичный и современный, роза ветров - символ всесторонней деятельности, движения, развития. Цвета: красный - энергичность, сила, чёрный и жёлтый - цвета строительной отрасли, стихии земли, белый."
  },
  {
    "id": "412",
    "registryId": "445861",
    "sourceId": "278",
    "title": "Знак №412",
    "logo": "Синица",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=445861",
    "description": "продажа товарного знака, пресс формы оригинальной эксклюзивной бутылки и пробки. Фото и дополнительная информация по запросу."
  },
  {
    "id": "413",
    "registryId": "437344",
    "sourceId": "277",
    "title": "Знак №413",
    "logo": "финал, Finale",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=437344",
    "description": "Продажа товарного знака, плюс пресс формы на эксклюзивную бутылку в виде факела и пробку."
  },
  {
    "id": "414",
    "registryId": "759889",
    "sourceId": "276",
    "title": "Знак №414",
    "logo": "Monblange",
    "classes": [
      3,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "косметика",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=759889",
    "description": "Monblange cosmetics. Имеется домен monblange.ru, Inst: monblange_rus, monblange_cosmetic, monblange_"
  },
  {
    "id": "415",
    "registryId": "859825",
    "sourceId": "273",
    "title": "Знак №415",
    "logo": "ПриМАГНИТь скидку",
    "classes": [
      35,
      41
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=859825",
    "description": "Торговый знак для проведения рекламно-маркетинговых акций и программ, в том числе для работы по продвижению сети Магнит"
  },
  {
    "id": "416",
    "registryId": "248413",
    "sourceId": "272",
    "title": "Знак №416",
    "logo": "Мэтр Вкуса",
    "classes": [
      29,
      30,
      32,
      43
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "еда",
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=248413/1",
    "description": "домены: мэтрвкуса.рф и metrmkysa.ru"
  },
  {
    "id": "417",
    "registryId": "404735",
    "sourceId": "267",
    "title": "Знак №417",
    "logo": "TORNADO",
    "classes": [
      1,
      7,
      9,
      37
    ],
    "price": "от 500 тыс. руб.",
    "minPrice": 500000,
    "discount": false,
    "business": [
      "производство",
      "техника",
      "IT",
      "строительство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=404735",
    "description": "Продается товарный знак ТОРНАДО"
  },
  {
    "id": "418",
    "registryId": "639426",
    "sourceId": "264",
    "title": "Знак №418",
    "logo": "KEKC EVENT",
    "classes": [
      41
    ],
    "price": "от 369 тыс. руб.",
    "minPrice": 369000,
    "discount": false,
    "business": [
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=639426",
    "description": "Мы 10 лет занимались event marketing Организовали и провели более 500 событий в 5 регионах, 30 городахБолее 30 авторских программ и фестивалейШирокий спектр возможной деятельности с торговым знаком"
  },
  {
    "id": "419",
    "registryId": "2021727529",
    "sourceId": "263",
    "title": "Знак №419",
    "logo": "VIONA",
    "classes": [
      1,
      2,
      3,
      4,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      19,
      20,
      21,
      22,
      23,
      26,
      27,
      28,
      34,
      36,
      37,
      38,
      40,
      41,
      43,
      45
    ],
    "price": "от 10 млн руб.",
    "minPrice": 10000000,
    "discount": false,
    "business": [
      "производство",
      "ремонт",
      "косметика",
      "товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTMAP&rn=1895&DocNumber=2021727529",
    "description": "Торговый знак с 32 мкту из 45."
  },
  {
    "id": "420",
    "registryId": "614784",
    "sourceId": "262",
    "title": "Знак №420",
    "logo": "OFFONIKA",
    "classes": [
      9,
      35,
      37
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы",
      "строительство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=614784",
    "description": "Дополнительно входят бренд- бук интернет магазин и домены offonika.ru, offonika.com."
  },
  {
    "id": "421",
    "registryId": "630858",
    "sourceId": "260",
    "title": "Знак №421",
    "logo": "Молекула",
    "classes": [
      28,
      38,
      41
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "детские товары",
      "связь",
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=630858"
  },
  {
    "id": "422",
    "registryId": "694338",
    "sourceId": "259",
    "title": "Знак №422",
    "logo": "Red pepper",
    "classes": [
      8,
      29,
      30,
      35
    ],
    "price": "от 280 тыс. руб.",
    "minPrice": 280000,
    "discount": false,
    "business": [
      "товары",
      "еда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=694338",
    "description": "Здравствуйте! Продаю товарный знак действующий до 16 октября 2027 года."
  },
  {
    "id": "423",
    "registryId": "659125",
    "sourceId": "258",
    "title": "Знак №423",
    "logo": "Просто чудо",
    "classes": [
      29
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=659125"
  },
  {
    "id": "424",
    "registryId": "865656",
    "sourceId": "257",
    "title": "Знак №424",
    "logo": "Velirus",
    "classes": [
      2,
      3,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      31,
      33,
      34,
      38,
      40,
      41,
      43,
      44
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "IT",
      "ремонт",
      "косметика",
      "строительство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=865656",
    "description": "Домены: Velirus.ru Velirus.com"
  },
  {
    "id": "425",
    "registryId": "867809",
    "sourceId": "256",
    "title": "Знак №425",
    "logo": "Новые горизонты",
    "classes": [
      1,
      2,
      3,
      5,
      6,
      7,
      8,
      10,
      11,
      13,
      14,
      15,
      19,
      20,
      22,
      23,
      24,
      26,
      29,
      30,
      31,
      32,
      33,
      34,
      40,
      43,
      44,
      45
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "производство",
      "ремонт",
      "косметика",
      "медицина"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=867809&TypeFile=html"
  },
  {
    "id": "426",
    "registryId": "794532",
    "sourceId": "254",
    "title": "Знак №426",
    "logo": "Розовые сады Италии",
    "classes": [
      35,
      39,
      44
    ],
    "price": "от 270 тыс. руб.",
    "minPrice": 270000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "логистика",
      "медицина"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=794532",
    "description": "Товарный знак шикарно подойдет для ведения ЦВЕТОЧНОГО БИЗНЕСА в самом широком его проявлении, в том числе для выращивания цветов на собственных плантациях, ландшафтного дизайна и цветочного искусства."
  },
  {
    "id": "427",
    "registryId": "863073",
    "sourceId": "253",
    "title": "Знак №427",
    "logo": "ХРАПАНУДЖИ",
    "classes": [
      20,
      24,
      35
    ],
    "price": "от 150 тыс. руб.",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "товары для дома",
      "маркетплейсы"
    ],
    "registry": "https://new.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=863073&TypeFile=html",
    "description": "Товарный знак для подушек, постельного белья, мебели и сопутствующих товаров, а также соответствующих магазинов."
  },
  {
    "id": "428",
    "registryId": "816953",
    "sourceId": "250",
    "title": "Знак №428",
    "logo": "HYBRID SERVICE",
    "classes": [
      4,
      9,
      41,
      42
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "товары",
      "IT",
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=816953"
  },
  {
    "id": "429",
    "registryId": "607798",
    "sourceId": "249",
    "title": "Знак №429",
    "logo": "TECHAGENT ТЕХАГЕНТ",
    "classes": [
      7,
      8,
      35,
      42
    ],
    "price": "от 30 млн руб.",
    "minPrice": 30000000,
    "discount": false,
    "business": [
      "техника",
      "товары",
      "маркетплейсы",
      "IT"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=607798",
    "description": "К продаже торговый знак TECHAGENT и ТЕХАГЕНТ в Российской и международных юрисдикциях плюс слоган “My digital life” и одноименные доменные имена. Домены: www.techagent.com, .net, .ru, .me, .pro, .eu, .сn., in"
  },
  {
    "id": "430",
    "registryId": "734302",
    "sourceId": "246",
    "title": "Знак №430",
    "logo": "ПЛАНЕТА МАРКЕТИНГА",
    "classes": [
      9,
      35,
      38,
      41,
      42
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы",
      "связь",
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=734302",
    "description": "Плюс доменные имена: планетамаркетинга.рф, планета-маркетинга.рф, planetamarketinga.ru, planeta-marketinga.ru, marketingplanet.ru, marketing-planet.ru"
  },
  {
    "id": "431",
    "registryId": "832640",
    "sourceId": "217",
    "title": "Знак №431",
    "logo": "SLADCOIN",
    "classes": [
      30
    ],
    "price": "от 500 тыс. руб.",
    "minPrice": 500000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=832640"
  },
  {
    "id": "432",
    "registryId": "442596",
    "sourceId": "215",
    "title": "Знак №432",
    "logo": "Империя Дерева",
    "classes": [
      19,
      20,
      35,
      37,
      40
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "строительство",
      "товары для дома",
      "маркетплейсы",
      "производство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=442596"
  },
  {
    "id": "433",
    "registryId": "823166",
    "sourceId": "214",
    "title": "Знак №433",
    "logo": "Пожуем Поживем",
    "classes": [
      29,
      30,
      31,
      32,
      35,
      39,
      40,
      43
    ],
    "price": "от 1,75 млн руб.",
    "minPrice": 1750000,
    "discount": false,
    "business": [
      "еда",
      "маркетплейсы",
      "логистика",
      "производство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=823166"
  },
  {
    "id": "434",
    "registryId": "843396",
    "sourceId": "212",
    "title": "Знак №434",
    "logo": "Мистер Пастилкин",
    "classes": [
      29,
      30
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=843396"
  },
  {
    "id": "435",
    "registryId": "547611",
    "sourceId": "203",
    "title": "Знак №435",
    "logo": "ШТОРОМАНИЯ",
    "classes": [
      24,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "товары для дома",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=547611"
  },
  {
    "id": "436",
    "registryId": "547610",
    "sourceId": "202",
    "title": "Знак №436",
    "logo": "КНИГОМАНИЯ",
    "classes": [
      16,
      35
    ],
    "price": "от 547 610 руб.",
    "minPrice": 547610,
    "discount": false,
    "business": [
      "образование",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=547610"
  },
  {
    "id": "437",
    "registryId": "514772",
    "sourceId": "201",
    "title": "Знак №437",
    "logo": "Znakoff & Patentoff",
    "classes": [
      16,
      35,
      45
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "образование",
      "маркетплейсы",
      "юридические услуги"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=514772"
  },
  {
    "id": "438",
    "registryId": "513750",
    "sourceId": "200",
    "title": "Знак №438",
    "logo": "Patentoff",
    "classes": [
      45
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "юридические услуги"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=513750"
  },
  {
    "id": "439",
    "registryId": "516313",
    "sourceId": "199",
    "title": "Знак №439",
    "logo": "ЛЮБИМЫЙ ПАТЕНТ",
    "classes": [
      45
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "юридические услуги"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=516313"
  },
  {
    "id": "440",
    "registryId": "535757",
    "sourceId": "198",
    "title": "Знак №440",
    "logo": "БАНКОМАНИЯ",
    "classes": [
      36
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "финансы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=535757"
  },
  {
    "id": "441",
    "registryId": "541637",
    "sourceId": "197",
    "title": "Знак №441",
    "logo": "ДВА СЕРДЦА",
    "classes": [
      43
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=541637"
  },
  {
    "id": "442",
    "registryId": "540911",
    "sourceId": "196",
    "title": "Знак №442",
    "logo": "ХОЛОСТЯКИ",
    "classes": [
      43
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=540911"
  },
  {
    "id": "443",
    "registryId": "555315",
    "sourceId": "195",
    "title": "Знак №443",
    "logo": "ПОРТФЕЛЬ",
    "classes": [
      42,
      45
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "юридические услуги"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=555315"
  },
  {
    "id": "444",
    "registryId": "574560",
    "sourceId": "194",
    "title": "Знак №444",
    "logo": "БРЕНДОМАНИЯ",
    "classes": [
      16,
      35,
      42,
      45
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "образование",
      "маркетплейсы",
      "IT",
      "юридические услуги"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=574560"
  },
  {
    "id": "445",
    "registryId": "520276",
    "sourceId": "193",
    "title": "Знак №445",
    "logo": "Изобразительный товарный знак \"Пти",
    "classes": [
      7,
      9,
      35,
      36,
      38,
      42
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "техника",
      "IT",
      "маркетплейсы",
      "финансы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=520276"
  },
  {
    "id": "446",
    "registryId": "354727",
    "sourceId": "192",
    "title": "Знак №446",
    "logo": "Изобразительный товарный знак \"Лев",
    "classes": [
      9,
      35,
      36,
      38,
      42
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы",
      "финансы",
      "связь"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=354727"
  },
  {
    "id": "447",
    "registryId": "904965",
    "sourceId": "191",
    "title": "Знак №447",
    "logo": "Arviden",
    "classes": [
      1,
      2,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      19,
      21,
      22,
      23,
      24,
      26,
      27,
      28,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      45
    ],
    "price": "от 180 тыс. руб.",
    "minPrice": 180000,
    "discount": false,
    "business": [
      "производство",
      "ремонт",
      "товары",
      "медицина"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=904965"
  },
  {
    "id": "448",
    "registryId": "799796",
    "sourceId": "189",
    "title": "Знак №448",
    "logo": "EDOMAN",
    "classes": [
      39,
      43
    ],
    "price": "от 295 тыс. руб.",
    "minPrice": 295000,
    "discount": false,
    "business": [
      "логистика",
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=799796"
  },
  {
    "id": "449",
    "registryId": "711866",
    "sourceId": "187",
    "title": "Знак №449",
    "logo": "Барский Станъ",
    "classes": [
      29,
      30,
      32
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=711866"
  },
  {
    "id": "450",
    "registryId": "658030",
    "sourceId": "186",
    "title": "Знак №450",
    "logo": "Опара-городок",
    "classes": [
      11,
      12,
      14,
      15,
      16,
      20,
      21,
      22,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      35,
      38,
      41,
      43,
      44
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "товары для дома",
      "транспорт",
      "аксессуары",
      "музыка"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=658030"
  },
  {
    "id": "451",
    "registryId": "198024",
    "sourceId": "185",
    "title": "Знак №451",
    "logo": "ЗДРАВУШКА",
    "classes": [
      3,
      5,
      29,
      30,
      32,
      35,
      42
    ],
    "price": "от 25 млн руб.",
    "minPrice": 25000000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "еда",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=198024"
  },
  {
    "id": "452",
    "registryId": "709020",
    "sourceId": "184",
    "title": "Знак №452",
    "logo": "Ather",
    "classes": [
      5,
      9,
      11,
      21,
      35,
      41,
      42,
      44
    ],
    "price": "от 150 тыс. руб.",
    "minPrice": 150000,
    "discount": false,
    "business": [
      "медицина",
      "IT",
      "товары для дома",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=709020"
  },
  {
    "id": "453",
    "registryId": "927310",
    "sourceId": "172",
    "title": "Знак №453",
    "logo": "Edvinton",
    "classes": [
      1,
      2,
      3,
      4,
      6,
      12,
      13,
      15,
      17,
      19,
      20,
      23,
      24,
      26,
      28,
      29,
      30,
      31,
      32,
      34,
      35,
      37,
      40,
      43,
      44
    ],
    "price": "от 250 тыс. руб.",
    "minPrice": 250000,
    "discount": false,
    "business": [
      "производство",
      "ремонт",
      "косметика",
      "товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=927310"
  },
  {
    "id": "454",
    "registryId": "736810",
    "sourceId": "170",
    "title": "Знак №454",
    "logo": "Цветочный центр ГринВИД",
    "classes": [
      31
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=736810"
  },
  {
    "id": "455",
    "registryId": "642264",
    "sourceId": "168",
    "title": "Знак №455",
    "logo": "Ликёръ-ка",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=642264"
  },
  {
    "id": "456",
    "registryId": "516357",
    "sourceId": "166",
    "title": "Знак №456",
    "logo": "HOBBART",
    "classes": [
      2,
      16
    ],
    "price": "от 1,2 млн руб.",
    "minPrice": 1200000,
    "discount": false,
    "business": [
      "ремонт",
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=516357"
  },
  {
    "id": "457",
    "registryId": "595341",
    "sourceId": "165",
    "title": "Знак №457",
    "logo": "SOLARE VITE",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=595341"
  },
  {
    "id": "458",
    "registryId": "626987",
    "sourceId": "164",
    "title": "Знак №458",
    "logo": "VINORIO",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=626987"
  },
  {
    "id": "459",
    "registryId": "597411",
    "sourceId": "163",
    "title": "Знак №459",
    "logo": "Солнечный край",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=597411"
  },
  {
    "id": "460",
    "registryId": "795815",
    "sourceId": "162",
    "title": "Знак №460",
    "logo": "Dopi-Why",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=795815"
  },
  {
    "id": "461",
    "registryId": "757291",
    "sourceId": "161",
    "title": "Знак №461",
    "logo": "ПАЛЬМИРА",
    "classes": [
      34
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "товары"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=757291"
  },
  {
    "id": "462",
    "registryId": "724242",
    "sourceId": "160",
    "title": "Знак №462",
    "logo": "Три косы",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=724242"
  },
  {
    "id": "463",
    "registryId": "728249",
    "sourceId": "159",
    "title": "Знак №463",
    "logo": "Сенокосный",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=728249"
  },
  {
    "id": "464",
    "registryId": "748213",
    "sourceId": "158",
    "title": "Знак №464",
    "logo": "ДЖАЗОВЫЙ СТАНДАРТ",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=748213"
  },
  {
    "id": "465",
    "registryId": "703470",
    "sourceId": "157",
    "title": "Знак №465",
    "logo": "СТАРАЯ ДАЧА",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=703470"
  },
  {
    "id": "466",
    "registryId": "399129",
    "sourceId": "156",
    "title": "Знак №466",
    "logo": "ХЛЕБНАЯ ПОРА",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=399129"
  },
  {
    "id": "467",
    "registryId": "399085",
    "sourceId": "155",
    "title": "Знак №467",
    "logo": "ХЛЕБНАЯ ИСТОРИЯ",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=399085"
  },
  {
    "id": "468",
    "registryId": "388663",
    "sourceId": "154",
    "title": "Знак №468",
    "logo": "ЯДРЁНЫЙ КОРЕНЬ",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=388663"
  },
  {
    "id": "469",
    "registryId": "364012",
    "sourceId": "153",
    "title": "Знак №469",
    "logo": "ЯДРЁНЫЙ КОРЕНЬ",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=364012"
  },
  {
    "id": "470",
    "registryId": "664215",
    "sourceId": "152",
    "title": "Знак №470",
    "logo": "Вместе мы сила",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=664215"
  },
  {
    "id": "471",
    "registryId": "716375",
    "sourceId": "151",
    "title": "Знак №471",
    "logo": "Садовая дача",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=716375"
  },
  {
    "id": "472",
    "registryId": "712383",
    "sourceId": "150",
    "title": "Знак №472",
    "logo": "Курортная дача",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=712383"
  },
  {
    "id": "473",
    "registryId": "753269",
    "sourceId": "149",
    "title": "Знак №473",
    "logo": "ЧЁРНЫЙ АЛМАЗ",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=753269"
  },
  {
    "id": "474",
    "registryId": "753268",
    "sourceId": "148",
    "title": "Знак №474",
    "logo": "ЛУБЯНСКАЯ",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=753268"
  },
  {
    "id": "475",
    "registryId": "422963",
    "sourceId": "147",
    "title": "Знак №475",
    "logo": "ЗЕФИР",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=422963"
  },
  {
    "id": "476",
    "registryId": "710968",
    "sourceId": "146",
    "title": "Знак №476",
    "logo": "COVENANT",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=710968"
  },
  {
    "id": "477",
    "registryId": "642959",
    "sourceId": "145",
    "title": "Знак №477",
    "logo": "НАРОДНАЯ МАРКА",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=642959"
  },
  {
    "id": "478",
    "registryId": "383732",
    "sourceId": "144",
    "title": "Знак №478",
    "logo": "ПРИЦЕЛЬНАЯ",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=383732"
  },
  {
    "id": "479",
    "registryId": "384303",
    "sourceId": "143",
    "title": "Знак №479",
    "logo": "ОГНЕСТРЕЛЬНАЯ",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=384303"
  },
  {
    "id": "480",
    "registryId": "363897",
    "sourceId": "142",
    "title": "Знак №480",
    "logo": "КАНТЕМИРОВСКАЯ",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=363897"
  },
  {
    "id": "481",
    "registryId": "383726",
    "sourceId": "141",
    "title": "Знак №481",
    "logo": "ДИВИЗИОННАЯ ЗАЛПОВАЯ",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=383726"
  },
  {
    "id": "482",
    "registryId": "410329",
    "sourceId": "140",
    "title": "Знак №482",
    "logo": "ХОРОШАЯ МОЯ!",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=410329"
  },
  {
    "id": "483",
    "registryId": "514138",
    "sourceId": "139",
    "title": "Знак №483",
    "logo": "СОЛОВЬИНЫЙ КРАЙ",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=514138"
  },
  {
    "id": "484",
    "registryId": "410328",
    "sourceId": "138",
    "title": "Знак №484",
    "logo": "БЕРЁЗОВАЯ ПЕСНЯ",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=410328"
  },
  {
    "id": "485",
    "registryId": "404315",
    "sourceId": "137",
    "title": "Знак №485",
    "logo": "ХЛЕБНАЯ ДУША",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=404315"
  },
  {
    "id": "486",
    "registryId": "428422",
    "sourceId": "136",
    "title": "Знак №486",
    "logo": "Свой Аршинъ",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=428422"
  },
  {
    "id": "487",
    "registryId": "399129",
    "sourceId": "135",
    "title": "Знак №487",
    "logo": "ХЛЕБНАЯ ПОРА",
    "classes": [
      32
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=399129"
  },
  {
    "id": "488",
    "registryId": "399085",
    "sourceId": "134",
    "title": "Знак №488",
    "logo": "ХЛЕБНАЯ ИСТОРИЯ",
    "classes": [
      32
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=399085"
  },
  {
    "id": "489",
    "registryId": "597056",
    "sourceId": "132",
    "title": "Знак №489",
    "logo": "от Олешки",
    "classes": [
      28,
      29,
      30,
      31
    ],
    "price": "от 850 млн руб.",
    "minPrice": 850000000,
    "discount": false,
    "business": [
      "детские товары",
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=597056"
  },
  {
    "id": "490",
    "registryId": "632454",
    "sourceId": "131",
    "title": "Знак №490",
    "logo": "Magnum",
    "classes": [
      9,
      11,
      21
    ],
    "price": "от 5 млн руб.",
    "minPrice": 5000000,
    "discount": false,
    "business": [
      "IT",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=632454"
  },
  {
    "id": "491",
    "registryId": "806802",
    "sourceId": "127",
    "title": "Знак №491",
    "logo": "ХОРОШОПИНГ",
    "classes": [
      35
    ],
    "price": "от 3,99 млн руб.",
    "minPrice": 3990000,
    "discount": false,
    "business": [
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=806802"
  },
  {
    "id": "492",
    "registryId": "807737",
    "sourceId": "122",
    "title": "Знак №492",
    "logo": "CHOOSE LIFE Выбери жизнь (цветная ",
    "classes": [
      35,
      41,
      44
    ],
    "price": "от 300 тыс. руб.",
    "minPrice": 300000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "образование",
      "медицина"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=807737"
  },
  {
    "id": "493",
    "registryId": "724440",
    "sourceId": "110",
    "title": "Знак №493",
    "logo": "Азбука Брендов",
    "classes": [
      35
    ],
    "price": "от 1 млн руб.",
    "minPrice": 1000000,
    "discount": false,
    "business": [
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=724440"
  },
  {
    "id": "494",
    "registryId": "823703",
    "sourceId": "109",
    "title": "Знак №494",
    "logo": "Kuleroff",
    "classes": [
      37
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "строительство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=823703"
  },
  {
    "id": "495",
    "registryId": "602906",
    "sourceId": "105",
    "title": "Знак №495",
    "logo": "Солнечная Манечка",
    "classes": [
      29
    ],
    "price": "от 70 тыс. руб.",
    "minPrice": 70000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=602906"
  },
  {
    "id": "496",
    "registryId": "602040",
    "sourceId": "101",
    "title": "Знак №496",
    "logo": "Бурёнушка",
    "classes": [
      29,
      40
    ],
    "price": "от 200 тыс. руб.",
    "minPrice": 200000,
    "discount": false,
    "business": [
      "еда",
      "производство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=602040"
  },
  {
    "id": "497",
    "registryId": "763868",
    "sourceId": "99",
    "title": "Знак №497",
    "logo": "BLACK BLANK",
    "classes": [
      3,
      9,
      11,
      15,
      16,
      18,
      25
    ],
    "price": "от 235 тыс. руб.",
    "minPrice": 235000,
    "discount": false,
    "business": [
      "косметика",
      "IT",
      "товары для дома",
      "музыка"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=763868"
  },
  {
    "id": "498",
    "registryId": "843471",
    "sourceId": "98",
    "title": "Знак №498",
    "logo": "Love's Empire",
    "classes": [
      16,
      21,
      25
    ],
    "price": "от 170 тыс. руб.",
    "minPrice": 170000,
    "discount": false,
    "business": [
      "образование",
      "товары для дома",
      "одежда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=843471"
  },
  {
    "id": "499",
    "registryId": "494650",
    "sourceId": "97",
    "title": "Знак №499",
    "logo": "Красный угол",
    "classes": [
      43
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=494650"
  },
  {
    "id": "500",
    "registryId": "847664",
    "sourceId": "95",
    "title": "Знак №500",
    "logo": "GUANGMED",
    "classes": [
      3,
      5,
      10,
      28,
      35,
      44
    ],
    "price": "от 260 тыс. руб.",
    "minPrice": 260000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "детские товары",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=847664"
  },
  {
    "id": "501",
    "registryId": "807352",
    "sourceId": "93",
    "title": "Знак №501",
    "logo": "Cherry Toys",
    "classes": [
      28,
      35
    ],
    "price": "от 100 тыс. руб.",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "детские товары",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=807352"
  },
  {
    "id": "502",
    "registryId": "755188",
    "sourceId": "90",
    "title": "Знак №502",
    "logo": "Камуфляжка",
    "classes": [
      33
    ],
    "price": "от 80 тыс. руб.",
    "minPrice": 80000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=755188"
  },
  {
    "id": "503",
    "registryId": "589686",
    "sourceId": "87",
    "title": "Знак №503",
    "logo": "Телехит",
    "classes": [
      16,
      35
    ],
    "price": "от 450 тыс. руб.",
    "minPrice": 450000,
    "discount": false,
    "business": [
      "образование",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=589686"
  },
  {
    "id": "504",
    "registryId": "660320",
    "sourceId": "86",
    "title": "Знак №504",
    "logo": "ЯРЧЕ",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=660320"
  },
  {
    "id": "505",
    "registryId": "656587",
    "sourceId": "85",
    "title": "Знак №505",
    "logo": "По рюмашке",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=656587"
  },
  {
    "id": "506",
    "registryId": "654112",
    "sourceId": "84",
    "title": "Знак №506",
    "logo": "Вековой дуб",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=654112"
  },
  {
    "id": "507",
    "registryId": "647782",
    "sourceId": "83",
    "title": "Знак №507",
    "logo": "Семь сопок",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=647782"
  },
  {
    "id": "508",
    "registryId": "644487",
    "sourceId": "82",
    "title": "Знак №508",
    "logo": "ARTEGGIO",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=644487"
  },
  {
    "id": "509",
    "registryId": "639086",
    "sourceId": "81",
    "title": "Знак №509",
    "logo": "Белая Цапля",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=639086"
  },
  {
    "id": "510",
    "registryId": "639085",
    "sourceId": "80",
    "title": "Знак №510",
    "logo": "MissKiss",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=639085"
  },
  {
    "id": "511",
    "registryId": "633026",
    "sourceId": "79",
    "title": "Знак №511",
    "logo": "Северная проба",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=633026"
  },
  {
    "id": "512",
    "registryId": "619694",
    "sourceId": "78",
    "title": "Знак №512",
    "logo": "McKelty&Sons",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=619694"
  },
  {
    "id": "513",
    "registryId": "619172",
    "sourceId": "77",
    "title": "Знак №513",
    "logo": "Uttermans&Sons",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=619172"
  },
  {
    "id": "514",
    "registryId": "619170",
    "sourceId": "76",
    "title": "Знак №514",
    "logo": "Трактат чистоты",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=619170"
  },
  {
    "id": "515",
    "registryId": "618094",
    "sourceId": "75",
    "title": "Знак №515",
    "logo": "Bottleton",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=618094"
  },
  {
    "id": "516",
    "registryId": "607352",
    "sourceId": "74",
    "title": "Знак №516",
    "logo": "Свеженика",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=607352"
  },
  {
    "id": "517",
    "registryId": "603271",
    "sourceId": "73",
    "title": "Знак №517",
    "logo": "Маёвка",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=603271"
  },
  {
    "id": "518",
    "registryId": "602899",
    "sourceId": "72",
    "title": "Знак №518",
    "logo": "Парилка",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=602899"
  },
  {
    "id": "519",
    "registryId": "597943",
    "sourceId": "71",
    "title": "Знак №519",
    "logo": "Морской порт",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=597943"
  },
  {
    "id": "520",
    "registryId": "596577",
    "sourceId": "70",
    "title": "Знак №520",
    "logo": "ЮЗГРАММ",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=596577"
  },
  {
    "id": "521",
    "registryId": "595636",
    "sourceId": "69",
    "title": "Знак №521",
    "logo": "BerryMeister",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=595636"
  },
  {
    "id": "522",
    "registryId": "594870",
    "sourceId": "68",
    "title": "Знак №522",
    "logo": "Рыбный порт",
    "classes": [
      32,
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=594870"
  },
  {
    "id": "523",
    "registryId": "595639",
    "sourceId": "67",
    "title": "Знак №523",
    "logo": "Ценолёт комбинированный",
    "classes": [
      29,
      30,
      31,
      32,
      33,
      34,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда",
      "товары",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=595639"
  },
  {
    "id": "524",
    "registryId": "594302",
    "sourceId": "66",
    "title": "Знак №524",
    "logo": "Ценолёт",
    "classes": [
      29,
      30,
      31,
      32,
      33,
      34,
      35
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда",
      "товары",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=594302"
  },
  {
    "id": "525",
    "registryId": "591728",
    "sourceId": "65",
    "title": "Знак №525",
    "logo": "Звезда Анаит (этикетка)",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=591728"
  },
  {
    "id": "526",
    "registryId": "578728",
    "sourceId": "64",
    "title": "Знак №526",
    "logo": "Звезда Анаит",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=578728"
  },
  {
    "id": "527",
    "registryId": "581070",
    "sourceId": "63",
    "title": "Знак №527",
    "logo": "Villa Tomani",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=581070"
  },
  {
    "id": "528",
    "registryId": "578641",
    "sourceId": "62",
    "title": "Знак №528",
    "logo": "Ewige Liebe",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=578641"
  },
  {
    "id": "529",
    "registryId": "562091",
    "sourceId": "61",
    "title": "Знак №529",
    "logo": "Гордость Востока",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=562091"
  },
  {
    "id": "530",
    "registryId": "546281",
    "sourceId": "60",
    "title": "Знак №530",
    "logo": "Сорок узлов",
    "classes": [
      33
    ],
    "price": "по договоренности",
    "minPrice": 1000000000000,
    "discount": false,
    "business": [
      "еда"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=546281"
  },
  {
    "id": "531",
    "registryId": "486217",
    "sourceId": "57",
    "title": "Знак №531",
    "logo": "Смотри, что будет!",
    "classes": [
      16,
      35
    ],
    "price": "от 350 тыс. руб.",
    "minPrice": 350000,
    "discount": false,
    "business": [
      "образование",
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=486217"
  },
  {
    "id": "532",
    "registryId": "335435",
    "sourceId": "56",
    "title": "Знак №532",
    "logo": "Покупайка",
    "classes": [
      16
    ],
    "price": "от 300 тыс. руб.",
    "minPrice": 300000,
    "discount": false,
    "business": [
      "образование"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=335435"
  },
  {
    "id": "533",
    "registryId": "730456",
    "sourceId": "55",
    "title": "Знак №533",
    "logo": "Товарный знак ИНАЯ РЕАЛЬНОСТЬ",
    "classes": [
      3,
      5,
      9,
      10,
      11,
      14,
      16,
      18,
      21,
      24,
      25,
      26,
      28,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45
    ],
    "price": "от 3,12 млн руб.",
    "minPrice": 3120000,
    "discount": false,
    "business": [
      "косметика",
      "медицина",
      "IT",
      "товары для дома"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=730456"
  },
  {
    "id": "534",
    "registryId": "604326",
    "sourceId": "52",
    "title": "Знак №534",
    "logo": "Товарный знак Life-News",
    "classes": [
      41,
      42,
      45
    ],
    "price": "от 350 тыс. руб.",
    "minPrice": 350000,
    "discount": false,
    "business": [
      "образование",
      "IT",
      "юридические услуги"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=604326"
  },
  {
    "id": "535",
    "registryId": "816127",
    "sourceId": "49",
    "title": "Знак №535",
    "logo": "Товарный знак Мистер Канцелярофф",
    "classes": [
      35
    ],
    "price": "от 100 тыс. руб.",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "маркетплейсы"
    ],
    "registry": "https://www1.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=816127&TypeFile=html"
  },
  {
    "id": "536",
    "registryId": "319610",
    "sourceId": "48",
    "title": "Знак №536",
    "logo": "Товарный знак GALACOM (ГАЛАКОМ)",
    "classes": [
      9,
      35,
      37,
      38,
      42
    ],
    "price": "от 90 тыс. руб.",
    "minPrice": 90000,
    "discount": false,
    "business": [
      "IT",
      "маркетплейсы",
      "строительство",
      "связь"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=319610"
  },
  {
    "id": "537",
    "registryId": "563051",
    "sourceId": "46",
    "title": "Знак №537",
    "logo": "Товарный знак Jazz&Wine",
    "classes": [
      41,
      43
    ],
    "price": "от 1 млн руб.",
    "minPrice": 1000000,
    "discount": false,
    "business": [
      "образование",
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=563051"
  },
  {
    "id": "538",
    "registryId": "444283",
    "sourceId": "45",
    "title": "Знак №538",
    "logo": "Изображение \"ЧАСЫ ЗАКОН-ПОРЯДОК-НА",
    "classes": [
      35,
      36,
      45
    ],
    "price": "от 100 тыс. руб.",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "финансы",
      "юридические услуги"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=444283"
  },
  {
    "id": "539",
    "registryId": "436630",
    "sourceId": "44",
    "title": "Знак №539",
    "logo": "Товарный знак LAW-CONTROL.RU",
    "classes": [
      35,
      36,
      45
    ],
    "price": "от 100 тыс. руб.",
    "minPrice": 100000,
    "discount": false,
    "business": [
      "маркетплейсы",
      "финансы",
      "юридические услуги"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=436630"
  },
  {
    "id": "540",
    "registryId": "333405",
    "sourceId": "40",
    "title": "Знак №540",
    "logo": "Товарный знак СТЕКЛОГРАД",
    "classes": [
      12,
      19,
      20,
      37,
      40
    ],
    "price": "от 1,2 млн руб.",
    "minPrice": 1200000,
    "discount": false,
    "business": [
      "транспорт",
      "строительство",
      "товары для дома",
      "производство"
    ],
    "registry": "https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&rn=1895&DocNumber=333405"
  },
  {
    "id": "541",
    "registryId": "842153",
    "sourceId": "32",
    "title": "Знак №541",
    "logo": "Товарный знак Удмуртские перепечи",
    "classes": [
      30,
      43
    ],
    "price": "от 300 тыс. руб.",
    "minPrice": 300000,
    "discount": false,
    "business": [
      "еда",
      "рестораны"
    ],
    "registry": "https://www1.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=842153&TypeFile=html"
  }
];

const sourceTrademarkImageIds = new Set(["1002509", "1019012", "1025451", "1025932", "1034847", "1038656", "1063814", "1064987", "1088573", "1089437", "1096071", "1104685", "1111040", "1112709", "1113022", "2024725226", "906596", "919273", "969190", "969606", "969608", "970741", "970982", "971330", "971529", "971753", "972459", "972991", "994011", "994332"]);

const mktuClasses = [
  { id: 1, type: 'goods', title: 'Химические продукты', description: 'Химикаты для промышленности, науки, фотографии, сельского хозяйства и садоводства.', examples: ['удобрения', 'клеи промышленные', 'химические добавки', 'сырье для производства'], keywords: 'химия удобрения клеи реагенты промышленность' },
  { id: 2, type: 'goods', title: 'Краски и защитные покрытия', description: 'Краски, лаки, антикоррозийные составы, красители, чернила и смолы.', examples: ['краски', 'лаки', 'морилки', 'чернила для печати'], keywords: 'краска лак покрытие чернила краситель ремонт' },
  { id: 3, type: 'goods', title: 'Косметика и бытовая химия', description: 'Косметические и туалетные средства, парфюмерия, средства для чистки и ухода.', examples: ['кремы', 'шампуни', 'духи', 'зубные пасты', 'чистящие средства'], keywords: 'косметика шампунь крем духи мыло уборка бытовая химия' },
  { id: 4, type: 'goods', title: 'Масла, топливо и свечи', description: 'Технические масла, смазки, топливо, осветительные материалы и свечи.', examples: ['бензин', 'моторные масла', 'смазки', 'свечи'], keywords: 'масло топливо бензин свечи смазка' },
  { id: 5, type: 'goods', title: 'Фармацевтика и БАДы', description: 'Лекарственные препараты, медицинские средства, БАДы, антисептики и товары гигиены.', examples: ['лекарства', 'витамины', 'пластыри', 'дезинфицирующие средства'], keywords: 'лекарство витамины бад аптека пластырь медицина' },
  { id: 6, type: 'goods', title: 'Металлы и изделия из металла', description: 'Обычные металлы, строительные металлические материалы и небольшие металлические изделия.', examples: ['металлопрокат', 'трубы', 'замки', 'скобяные изделия'], keywords: 'металл трубы замки крепеж строительство' },
  { id: 7, type: 'goods', title: 'Машины и станки', description: 'Машины, станки, двигатели, насосы, инструменты с механическим приводом.', examples: ['станки', 'насосы', 'компрессоры', 'электроинструмент'], keywords: 'станок машина насос компрессор инструмент оборудование' },
  { id: 8, type: 'goods', title: 'Ручные инструменты', description: 'Ручные инструменты, ножевые изделия, бритвы и приборы для ухода.', examples: ['ножи', 'ножницы', 'бритвы', 'ручной инструмент'], keywords: 'нож ножницы бритва инструмент маникюр' },
  { id: 9, type: 'goods', title: 'Электроника и ПО', description: 'Компьютеры, программы, приборы, приложения, носители данных и научное оборудование.', examples: ['приложения', 'смартфоны', 'камеры', 'ПО', 'электронные устройства'], keywords: 'приложение программа софт электроника компьютер камера прибор' },
  { id: 10, type: 'goods', title: 'Медицинское оборудование', description: 'Хирургические, медицинские, стоматологические и ветеринарные аппараты и инструменты.', examples: ['медицинские приборы', 'стоматологическое оборудование', 'ортопедические изделия'], keywords: 'медицинское оборудование стоматология приборы ортопедия' },
  { id: 11, type: 'goods', title: 'Освещение, отопление и сантехника', description: 'Приборы для освещения, нагрева, охлаждения, вентиляции, водоснабжения и санитарии.', examples: ['лампы', 'кондиционеры', 'котлы', 'сантехника'], keywords: 'свет лампа отопление кондиционер сантехника вентиляция' },
  { id: 12, type: 'goods', title: 'Транспорт', description: 'Транспортные средства и аппараты для передвижения по земле, воде или воздуху.', examples: ['автомобили', 'велосипеды', 'запчасти', 'лодки'], keywords: 'авто транспорт велосипед запчасти лодка' },
  { id: 13, type: 'goods', title: 'Оружие и пиротехника', description: 'Огнестрельное оружие, боеприпасы, взрывчатые вещества и фейерверки.', examples: ['оружие', 'патроны', 'фейерверки'], keywords: 'оружие патроны пиротехника фейерверк' },
  { id: 14, type: 'goods', title: 'Ювелирные изделия и часы', description: 'Драгоценные металлы, ювелирные изделия, часы и украшения.', examples: ['кольца', 'часы', 'бижутерия', 'драгоценности'], keywords: 'ювелирка часы украшения кольцо браслет' },
  { id: 15, type: 'goods', title: 'Музыкальные инструменты', description: 'Музыкальные инструменты, аксессуары и принадлежности для музыкантов.', examples: ['гитары', 'пианино', 'струны', 'синтезаторы'], keywords: 'музыка гитара пианино инструмент струны' },
  { id: 16, type: 'goods', title: 'Бумага, печать и канцелярия', description: 'Бумага, печатная продукция, канцелярские товары, упаковочные материалы.', examples: ['книги', 'блокноты', 'наклейки', 'канцелярия'], keywords: 'бумага книги канцелярия упаковка печать наклейки' },
  { id: 17, type: 'goods', title: 'Резина, пластмассы и изоляция', description: 'Каучук, резина, пластмассы в производстве, изоляционные и гибкие материалы.', examples: ['уплотнители', 'пластиковые полуфабрикаты', 'изоляция'], keywords: 'резина пластик изоляция уплотнитель' },
  { id: 18, type: 'goods', title: 'Кожа, сумки и зонты', description: 'Кожа, изделия из кожи, багаж, сумки, кошельки, зонты и трости.', examples: ['сумки', 'рюкзаки', 'кошельки', 'зонты'], keywords: 'сумка рюкзак кошелек кожа зонт' },
  { id: 19, type: 'goods', title: 'Строительные материалы', description: 'Неметаллические строительные материалы, конструкции, камень, цемент и стекло.', examples: ['плитка', 'цемент', 'окна', 'строительные панели'], keywords: 'стройматериалы плитка цемент окна недвижимость' },
  { id: 20, type: 'goods', title: 'Мебель и предметы интерьера', description: 'Мебель, зеркала, рамы, изделия из дерева, пластика и аналогичных материалов.', examples: ['мебель', 'матрасы', 'зеркала', 'полки'], keywords: 'мебель интерьер матрас зеркало шкаф' },
  { id: 21, type: 'goods', title: 'Посуда и товары для дома', description: 'Домашняя утварь, кухонная посуда, контейнеры, стекло, фарфор и щетки.', examples: ['посуда', 'кружки', 'контейнеры', 'щетки'], keywords: 'посуда кухня кружка контейнер дом' },
  { id: 22, type: 'goods', title: 'Веревки, тенты и мешки', description: 'Канаты, сети, палатки, навесы, мешки и набивочные материалы.', examples: ['тенты', 'сети', 'мешки', 'веревки'], keywords: 'тент сеть мешок веревка палатка' },
  { id: 23, type: 'goods', title: 'Пряжа и нити', description: 'Пряжа и нити для текстильного использования.', examples: ['пряжа', 'нитки', 'волокна'], keywords: 'пряжа нитки текстиль вязание' },
  { id: 24, type: 'goods', title: 'Ткани и текстиль', description: 'Ткани, текстильные изделия, постельное белье и бытовой текстиль.', examples: ['ткани', 'пледы', 'постельное белье', 'шторы'], keywords: 'ткань текстиль белье штора плед' },
  { id: 25, type: 'goods', title: 'Одежда и обувь', description: 'Одежда, обувь, головные уборы и аксессуары для носки.', examples: ['одежда', 'обувь', 'футболки', 'куртки', 'головные уборы'], keywords: 'одежда обувь футболка куртка шапка fashion' },
  { id: 26, type: 'goods', title: 'Галантерея и украшения для одежды', description: 'Кружева, пуговицы, застежки, искусственные цветы, аксессуары для волос.', examples: ['пуговицы', 'молнии', 'заколки', 'нашивки'], keywords: 'пуговица молния заколка аксессуары одежда' },
  { id: 27, type: 'goods', title: 'Ковры и покрытия', description: 'Ковры, маты, линолеум, обои и покрытия для полов и стен.', examples: ['ковры', 'линолеум', 'обои', 'коврики'], keywords: 'ковер обои линолеум покрытие пол' },
  { id: 28, type: 'goods', title: 'Игрушки и спорттовары', description: 'Игры, игрушки, спортивные товары, украшения для праздников.', examples: ['игрушки', 'настольные игры', 'спортинвентарь', 'елочные украшения'], keywords: 'игрушки игры спорт фитнес инвентарь' },
  { id: 29, type: 'goods', title: 'Мясо, рыба и готовые продукты', description: 'Мясо, рыба, птица, молочные продукты, консервы, обработанные фрукты и овощи.', examples: ['мясо', 'рыба', 'сыр', 'йогурт', 'консервы'], keywords: 'еда мясо рыба молоко сыр продукты' },
  { id: 30, type: 'goods', title: 'Кофе, чай, сладости и выпечка', description: 'Кофе, чай, какао, хлеб, кондитерские изделия, крупы, специи и соусы.', examples: ['кофе', 'чай', 'хлеб', 'сладости', 'соусы'], keywords: 'кофе чай хлеб сладости специи соус продукты' },
  { id: 31, type: 'goods', title: 'Сельхозпродукты и растения', description: 'Необработанные сельскохозяйственные продукты, живые растения, корма и семена.', examples: ['растения', 'семена', 'корма', 'свежие фрукты'], keywords: 'растения семена корм фрукты сельхоз' },
  { id: 32, type: 'goods', title: 'Напитки без алкоголя', description: 'Пиво, безалкогольные напитки, воды, соки, сиропы и составы для напитков.', examples: ['вода', 'соки', 'лимонады', 'пиво безалкогольное'], keywords: 'напитки вода сок лимонад пиво' },
  { id: 33, type: 'goods', title: 'Алкогольные напитки', description: 'Алкогольные напитки, кроме пива, винные и крепкие напитки.', examples: ['вино', 'водка', 'ликеры', 'коктейли'], keywords: 'алкоголь вино водка ликер' },
  { id: 34, type: 'goods', title: 'Табак и курительные принадлежности', description: 'Табак, заменители табака, сигареты, электронные сигареты и аксессуары.', examples: ['сигареты', 'табак', 'вейпы', 'зажигалки'], keywords: 'табак сигареты вейп зажигалка' },
  { id: 35, type: 'services', title: 'Реклама, торговля и маркетплейсы', description: 'Реклама, управление бизнесом, офисные функции, розничная и онлайн-торговля.', examples: ['интернет-магазин', 'маркетинг', 'продвижение', 'розница'], keywords: 'реклама маркетинг магазин маркетплейс продажи бизнес' },
  { id: 36, type: 'services', title: 'Финансы, страхование и недвижимость', description: 'Финансовые услуги, страхование, банковские операции, оценка и недвижимость.', examples: ['страхование', 'банк', 'ипотека', 'аренда недвижимости'], keywords: 'финансы банк страхование недвижимость аренда' },
  { id: 37, type: 'services', title: 'Строительство и ремонт', description: 'Строительные, монтажные, ремонтные и установочные работы.', examples: ['строительство', 'ремонт', 'монтаж', 'сервис оборудования'], keywords: 'ремонт строительство монтаж сервис' },
  { id: 38, type: 'services', title: 'Связь и телекоммуникации', description: 'Услуги связи, передача данных, телекоммуникации и доступ к сетям.', examples: ['мобильная связь', 'интернет-провайдер', 'передача сообщений'], keywords: 'связь интернет провайдер телеком сообщения' },
  { id: 39, type: 'services', title: 'Транспортировка и доставка', description: 'Перевозка, упаковка, хранение товаров, доставка и организация путешествий.', examples: ['доставка', 'логистика', 'такси', 'склад', 'туры'], keywords: 'доставка логистика перевозка такси склад туризм' },
  { id: 40, type: 'services', title: 'Обработка материалов', description: 'Обработка, переработка, печать, производство на заказ и кастомизация материалов.', examples: ['печать', 'пошив на заказ', 'переработка', 'гравировка'], keywords: 'печать производство обработка переработка гравировка' },
  { id: 41, type: 'services', title: 'Образование, спорт и развлечения', description: 'Обучение, организация мероприятий, спорт, культура, развлечения и публикации.', examples: ['курсы', 'школы', 'фитнес', 'концерты', 'онлайн-обучение'], keywords: 'образование курсы школа спорт фитнес мероприятия' },
  { id: 42, type: 'services', title: 'IT, наука и дизайн', description: 'Разработка ПО, SaaS, технологические услуги, научные исследования, дизайн и экспертиза.', examples: ['разработка сайтов', 'SaaS', 'дизайн', 'научные исследования'], keywords: 'it софт разработка сайт приложение дизайн saas наука' },
  { id: 43, type: 'services', title: 'Рестораны, кафе и гостиницы', description: 'Услуги питания, временного проживания, кейтеринга и бронирования.', examples: ['кафе', 'рестораны', 'отели', 'доставка еды', 'кейтеринг'], keywords: 'кафе ресторан отель гостиница еда доставка кейтеринг' },
  { id: 44, type: 'services', title: 'Медицина, красота и ветеринария', description: 'Медицинские, косметологические, ветеринарные, санитарные и SPA-услуги.', examples: ['клиника', 'салон красоты', 'стоматология', 'SPA', 'ветеринария'], keywords: 'медицина клиника салон красота стоматология spa ветеринария' },
  { id: 45, type: 'services', title: 'Юридические и охранные услуги', description: 'Юридические услуги, безопасность, лицензирование, сопровождение и персональные услуги.', examples: ['юристы', 'охрана', 'лицензирование', 'патентные услуги'], keywords: 'юрист право охрана безопасность патент лицензия' }
];

const mktuClassDetails = {
  15: {
    explanation: 'Класс включает, в основном, музыкальные инструменты, их части и аксессуары.',
    includes: [
      'инструменты музыкальные механические и их принадлежности, например: шарманки, механические пианино, регуляторы интенсивности механических пианино, роботизированные ударные',
      'шкатулки музыкальные',
      'инструменты музыкальные электрические и электронные',
      'струны, язычки, колышки и педали для музыкальных инструментов',
      'камертоны, ключи для настройки',
      'канифоль для струнных музыкальных инструментов'
    ],
    terms: [
      'аккордеоны', 'арфы', 'балалайки [струнные музыкальные инструменты]', 'банджо', 'бандонеоны',
      'барабаны [инструменты музыкальные]', 'басы [инструменты музыкальные]', 'букцины [трубы]',
      'бунчуки [инструменты музыкальные]', 'варганы [инструменты музыкальные]', 'виолы', 'волос конский для смычков',
      'волынки', 'гармоники', 'гармоники мелодические', 'гитары', 'гобои', 'гонги', 'горны',
      'группы ударных инструментов роботизированные [музыкальные инструменты]', 'драм-машины',
      'инструменты музыкальные', 'инструменты музыкальные для детей', 'инструменты музыкальные струнные',
      'инструменты музыкальные электронные', 'инструменты язычковые духовые', 'камертоны',
      'канифоль для струнных музыкальных инструментов', 'карильоны [инструменты музыкальные]', 'кастаньеты',
      'кетгут для музыкальных инструментов', 'клавиатуры для музыкальных инструментов', 'клавиши для фортепьяно',
      'клапаны для музыкальных инструментов', 'кларнеты', 'ключи для настройки струнных инструментов',
      'кожа для барабанов', 'колки для музыкальных инструментов', 'колокольчики [инструменты музыкальные]',
      'контрабасы', 'концертино', 'корнет-а-пистоны [инструменты музыкальные]', 'ксилофоны',
      'ленты для записи мелодий для механических музыкальных инструментов', 'лиры', 'литавры [инструменты музыкальные]',
      'мандолины', 'медиаторы для струнных инструментов', 'мехи для музыкальных инструментов',
      'молоточки для музыкальных инструментов', 'мундштуки для духовых инструментов', 'окарины', 'органы',
      'палочки барабанные', 'палочки дирижерские', 'педали для музыкальных инструментов',
      'пипы [китайские гитары]', 'подбородники для скрипок', 'подставки для музыкальных инструментов',
      'приспособления для переворачивания нот', 'пюпитры нотные', 'саксофоны', 'синтезаторы',
      'скрипки', 'смычки для музыкальных инструментов', 'струны для арф', 'струны для музыкальных инструментов',
      'тамбурины', 'тамтамы', 'тромбоны [инструменты музыкальные]', 'трубы [инструменты музыкальные]',
      'флейты', 'фортепьяно', 'футляры для музыкальных инструментов', 'цитры', 'чаши поющие',
      'шарманки', 'шкатулки музыкальные'
    ]
  }
};

const state = {
  search: '',
  classFilter: '',
  discountFilter: '',
  businessFilter: '',
  sort: 'default',
  page: 1,
  perPage: 24,
  action: 'buy',
  intent: leadActions.buy.label,
  favorites: loadList(favoritesKey),
  cart: loadList(cartKey),
  selectedClasses: {},
  mktuActive: 35
};

const grid = document.querySelector('[data-grid]');
const template = document.querySelector('[data-card-template]');
const resultCount = document.querySelector('[data-result-count]');
const classFilter = document.querySelector('[data-class-filter]');
const businessFilter = document.querySelector('[data-business-filter]');
const searchInput = document.querySelector('[data-search]');
const discountFilter = document.querySelector('[data-discount-filter]');
const sortSelect = document.querySelector('[data-sort]');
const cartCount = document.querySelector('[data-cart-count]');
const modal = document.querySelector('[data-modal]');
const modalTitle = document.querySelector('[data-modal-title]');
const cartItems = document.querySelector('[data-cart-items]');
const intentInput = document.querySelector('[data-intent-input]');
const selectedInput = document.querySelector('[data-selected-input]');
const pagination = document.querySelector('[data-pagination]');
const adminSection = document.querySelector('[data-admin-section]');
const adminList = document.querySelector('[data-admin-list]');
const exportCustomButton = document.querySelector('[data-export-custom]');
const mktuSearch = document.querySelector('[data-mktu-search]');
const mktuGoods = document.querySelector('[data-mktu-goods]');
const mktuServices = document.querySelector('[data-mktu-services]');
const mktuResults = document.querySelector('[data-mktu-results]');
const mktuDetail = document.querySelector('[data-mktu-detail]');

function loadList(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

function saveList(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function allTrademarks() {
  const custom = loadList(customKey);
  const customIds = new Set(custom.map((item) => item.id));
  return [...sourceTrademarks.filter((item) => !customIds.has(item.id)), ...custom].map((item, index) => {
    const registryId = item.registryId || item.certificate || item.id;
    return {
      order: index + 1,
      ...item,
      registryId,
      title: item.title || `Знак №${item.id}`,
      logo: item.logo || makeLogoText(item, index),
      image: item.image || (sourceTrademarkImageIds.has(registryId) ? `assets/catalog/tm-${registryId}.jpg` : undefined),
      registry: item.registry || `${registryBase}${encodeURIComponent(registryId)}`
    };
  });
}

function escapeHtml(value) {
  return `${value}`.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[char]);
}

function renderAdminList() {
  if (!adminList) return;
  const custom = loadList(customKey);
  if (!custom.length) {
    adminList.innerHTML = '<p class="admin-empty">Пока нет локально добавленных карточек.</p>';
    if (exportCustomButton) exportCustomButton.disabled = true;
    return;
  }

  if (exportCustomButton) exportCustomButton.disabled = false;
  adminList.innerHTML = custom.map((item) => `
    <article class="admin-item">
      <div>
        <strong>${escapeHtml(item.title || `Знак №${item.id}`)}</strong>
        <span>№${escapeHtml(item.id)} · МКТУ: ${escapeHtml(item.classes.join(', '))}</span>
        <span>${escapeHtml(item.price)} · ${escapeHtml(item.business.join(', '))}</span>
      </div>
      <button type="button" data-delete-custom="${escapeHtml(item.id)}">Удалить</button>
    </article>
  `).join('');

  adminList.querySelectorAll('[data-delete-custom]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.deleteCustom;
      saveList(customKey, loadList(customKey).filter((item) => item.id !== id));
      document.querySelector('[data-admin-status]').textContent = `Карточка №${id} удалена из локального каталога.`;
      refreshFilters();
      renderCatalog();
      renderAdminList();
    });
  });
}

function exportCustomCards() {
  const custom = loadList(customKey);
  if (!custom.length) return;
  const blob = new Blob([JSON.stringify(custom, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'birzha-custom-trademarks.json';
  link.click();
  URL.revokeObjectURL(url);
}

function makeLogoText(item, index) {
  const words = ['NOVA', 'AURA', 'MEDIX', 'COSMO', 'FIT', 'KIDS', 'HOME', 'SOFT', 'CAFE', 'SPORT', 'BEAUTY', 'TRADE'];
  const business = item.business?.[0] || '';
  if (business.toLowerCase().includes('космет')) return 'COSMO';
  if (business.toLowerCase().includes('мед')) return 'MEDIX';
  if (business.toLowerCase().includes('еда') || business.toLowerCase().includes('ресторан')) return 'CAFE';
  if (business.toLowerCase().includes('it')) return 'SOFT';
  return words[index % words.length];
}

function getTrademarkTitle(item) {
  return `Знак №${item.registryId || item.id}`;
}

function parseList(value) {
  return `${value}`.split(',').map((item) => item.trim()).filter(Boolean);
}

function parseClasses(value) {
  return parseList(value).map((item) => Number(item)).filter(Boolean);
}

function getMinPrice(value) {
  const match = `${value}`.replace(/\s/g, '').match(/\d+/);
  return match ? Number(match[0]) : 100000;
}

function getCatalogShuffleKey(item) {
  return (Number(item.id) * 73) % 541;
}

function getSelectedClasses(item) {
  const stored = state.selectedClasses[item.id];
  return stored?.length ? stored : item.classes.map(String);
}

function setSelectedClass(id, value, checked) {
  const item = allTrademarks().find((entry) => entry.id === id);
  if (!item) return;
  const current = new Set(getSelectedClasses(item));
  if (checked) {
    current.add(value);
  } else {
    current.delete(value);
  }
  state.selectedClasses[id] = current.size ? [...current] : item.classes.map(String);
  updateCart();
}

function getCartItems() {
  return allTrademarks().filter((item) => state.cart.includes(item.id));
}

function buildPatentvsemUrl(action, payload = {}) {
  const params = new URLSearchParams();
  params.set('source', 'znakvsem');
  params.set('action', action);
  params.set('action_title', leadActions[action]?.label || state.intent);

  Object.entries(payload).forEach(([key, value]) => {
    if (value) params.set(key, value);
  });

  return `${patentvsemLeadUrl}?${params.toString()}`;
}

function redirectToPatentvsem(action, payload = {}) {
  window.location.href = buildPatentvsemUrl(action, payload);
}

function setSiteCookie(name, value, days = 365) {
  const maxAge = Math.max(1, days) * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
}

function getSiteCookie(name) {
  const prefix = `${name}=`;
  return document.cookie
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(prefix))
    ?.slice(prefix.length) || '';
}

function hasCookieConsent() {
  return decodeURIComponent(getSiteCookie(cookieConsentKey)) === 'accepted';
}

function captureAttributionCookies() {
  if (!hasCookieConsent()) return;
  const params = new URLSearchParams(window.location.search);

  if (!getSiteCookie(cookieLandingKey)) {
    setSiteCookie(cookieLandingKey, window.location.href);
  }
  if (document.referrer && !getSiteCookie(cookieReferrerKey)) {
    setSiteCookie(cookieReferrerKey, document.referrer);
  }

  trackingCookieKeys.forEach((key) => {
    const value = params.get(key);
    if (value) setSiteCookie(`znakvsem_${key}`, value);
  });
}

function getLeadTrackingPayload() {
  if (!hasCookieConsent()) return { cookie_consent: 'not_accepted' };
  const payload = {
    cookie_consent: 'accepted',
    cookie_accepted_at: decodeURIComponent(getSiteCookie(cookieAcceptedAtKey)),
    landing_page: decodeURIComponent(getSiteCookie(cookieLandingKey)),
    referrer: decodeURIComponent(getSiteCookie(cookieReferrerKey))
  };

  trackingCookieKeys.forEach((key) => {
    const value = decodeURIComponent(getSiteCookie(`znakvsem_${key}`));
    if (value) payload[key] = value;
  });

  return payload;
}

function initCookieConsent() {
  if (hasCookieConsent()) {
    captureAttributionCookies();
    return;
  }

  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-live', 'polite');
  banner.innerHTML = `
    <div>
      <strong>Cookies</strong>
      <p>Мы используем cookies, чтобы запоминать источник перехода и улучшать обработку заявок.</p>
    </div>
    <div class="cookie-actions">
      <a href="privacy.html">Политика</a>
      <button class="button button-dark" type="button" data-cookie-accept>Принять</button>
    </div>
  `;
  document.body.appendChild(banner);
  banner.querySelector('[data-cookie-accept]')?.addEventListener('click', () => {
    setSiteCookie(cookieConsentKey, 'accepted');
    setSiteCookie(cookieAcceptedAtKey, new Date().toISOString());
    captureAttributionCookies();
    banner.remove();
  });
}

function getHeaderOffset() {
  const header = document.querySelector('.site-header');
  return (header?.getBoundingClientRect().height || 0) + 18;
}

function scrollToTarget(target, updateHash = true, behavior = 'smooth') {
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.pageYOffset - getHeaderOffset();
  window.scrollTo({ top: Math.max(0, top), behavior });
  if (updateHash && target.id) {
    history.pushState(null, '', `#${target.id}`);
  }
}

function getCartPayload(form) {
  const data = new FormData(form);
  const items = getCartItems();
  const selected = items.map((item) => {
    const classes = getSelectedClasses(item).join(', ');
    return `${getTrademarkTitle(item)}; внутренний ID: ${item.id}; МКТУ: ${classes}; ${item.price}; ${item.registry}`;
  }).join('\n');

  return {
    ...getLeadTrackingPayload(),
    name: data.get('name')?.trim(),
    phone: data.get('phone')?.trim(),
    email: data.get('email')?.trim(),
    comment: data.get('comment')?.trim(),
    selected,
    selected_count: items.length ? String(items.length) : '',
    intent: state.intent
  };
}

function getPlacePayload(form) {
  const data = new FormData(form);
  return {
    ...getLeadTrackingPayload(),
    name: data.get('name')?.trim(),
    phone: data.get('phone')?.trim(),
    email: data.get('email')?.trim(),
    certificate: data.get('certificate')?.trim(),
    description: data.get('description')?.trim(),
    intent: leadActions.place.label
  };
}

function transliterate(value) {
  const map = {
    а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z', и: 'i', й: 'i',
    к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f',
    х: 'h', ц: 'c', ч: 'ch', ш: 'sh', щ: 'sch', ы: 'y', э: 'e', ю: 'yu', я: 'ya'
  };
  return value.toLowerCase().replace(/[ъь]/g, '').split('').map((char) => map[char] || char).join('');
}

function normalize(value) {
  return `${value}`.toLowerCase().replace(/ё/g, 'е');
}

function getMktuClass(id) {
  const item = mktuClasses.find((entry) => entry.id === Number(id));
  if (!item) return undefined;
  return {
    ...item,
    ...(mktuClassDetails[item.id] || {})
  };
}

function matchesMktuSearch(item, query) {
  if (!query) return true;
  const haystack = [
    item.id,
    item.title,
    item.description,
    item.examples.join(' '),
    item.keywords
  ].join(' ');
  const normalizedHaystack = normalize(haystack);
  const translitHaystack = transliterate(haystack);
  const normalizedQuery = normalize(query);
  const translitQuery = transliterate(query);
  return normalizedHaystack.includes(normalizedQuery) || translitHaystack.includes(translitQuery);
}

function renderMktuButton(item) {
  const active = item.id === Number(state.mktuActive) ? ' is-active' : '';
  return `<button class="mktu-number${active}" type="button" data-mktu-number="${item.id}" aria-label="Класс МКТУ ${item.id}">${item.id}</button>`;
}

function renderMktuDetail(item = getMktuClass(state.mktuActive)) {
  if (!mktuDetail || !item) return;
  const typeLabel = item.type === 'goods' ? 'Товары' : 'Услуги';
  const explanation = item.explanation || item.description;
  const includes = item.includes || item.examples.map((example) => `${example} и близкие по назначению товары или услуги`);
  const terms = item.terms || item.examples;
  mktuDetail.innerHTML = `
    <span>${typeLabel}</span>
    <h4>Класс ${item.id}. ${item.title}</h4>
    <section class="mktu-detail-block">
      <h5>Пояснения</h5>
      <p>${explanation}</p>
    </section>
    <section class="mktu-detail-block">
      <h5><strong>+</strong> К классу относятся, в частности:</h5>
      <ul>${includes.map((line) => `<li>${line}</li>`).join('')}</ul>
    </section>
    <section class="mktu-detail-block">
      <h5>${typeLabel}</h5>
      <p class="mktu-terms">${terms.join('; ')}.</p>
    </section>
    <div class="mktu-detail-actions">
      <button class="button button-dark" type="button" data-mktu-filter="${item.id}">Показать знаки в каталоге</button>
      <button class="button button-outline" type="button" data-mktu-consult>Уточнить класс</button>
    </div>
  `;
}

function renderMktuDirectory(query = '') {
  if (!mktuGoods || !mktuServices || !mktuResults) return;
  const goods = mktuClasses.filter((item) => item.type === 'goods');
  const services = mktuClasses.filter((item) => item.type === 'services');
  const filtered = mktuClasses.filter((item) => matchesMktuSearch(item, query)).slice(0, 8);

  mktuGoods.innerHTML = goods.map(renderMktuButton).join('');
  mktuServices.innerHTML = services.map(renderMktuButton).join('');
  mktuResults.innerHTML = query
    ? filtered.map((item) => `<button type="button" data-mktu-number="${item.id}">Класс ${item.id} · ${item.title}</button>`).join('')
    : '';
  renderMktuDetail();
}

function selectMktuClass(id, shouldScroll = false) {
  const item = getMktuClass(id);
  if (!item) return;
  state.mktuActive = item.id;
  renderMktuDirectory(mktuSearch?.value.trim() || '');
  if (shouldScroll) scrollToTarget(document.querySelector('#mktu-directory'));
}

function filterCatalogByMktu(id) {
  state.classFilter = String(id);
  state.page = 1;
  if (classFilter) classFilter.value = state.classFilter;
  renderCatalog();
  const catalog = document.querySelector('#catalog');
  if (catalog) {
    scrollToTarget(catalog);
  } else {
    window.location.href = `catalog.html?mktu=${encodeURIComponent(state.classFilter)}`;
  }
}

function parseCatalogSearch(query) {
  const classes = [];
  const textTokens = [];
  const tokens = String(query || '').split(/[\s,;]+/).filter(Boolean);

  tokens.forEach((token) => {
    const normalizedToken = normalize(token).replace(/[.:№#-]+$/g, '');
    if (!normalizedToken || normalizedToken === 'мкту') return;

    const classMatch = normalizedToken.match(/^(?:мкту)?(\d{1,2})$/);
    if (classMatch) {
      const classId = Number(classMatch[1]);
      if (classId >= 1 && classId <= 45 && !classes.includes(classId) && classes.length < 5) {
        classes.push(classId);
      }
      return;
    }

    textTokens.push(token);
  });

  return {
    classes,
    text: textTokens.join(' ').trim()
  };
}

function getClassSearchText(classes) {
  return classes.map((id) => {
    const item = getMktuClass(id);
    if (!item) return String(id);
    return [
      item.id,
      item.title,
      item.description,
      item.keywords,
      ...(item.examples || []),
      ...(item.includes || []),
      ...(item.goods || [])
    ].join(' ');
  }).join(' ');
}

function matchesSearch(item, query) {
  const parsed = parseCatalogSearch(query);
  if (!parsed.classes.length && !parsed.text) return true;
  if (!parsed.classes.every((classId) => item.classes.includes(classId))) return false;
  if (!parsed.text) return true;
  const normalizedQuery = normalize(parsed.text);
  if (/^\d{3}$/.test(normalizedQuery)) return item.id === normalizedQuery;

  const haystack = [
    item.title,
    item.logo,
    item.id,
    item.registryId,
    item.sourceId,
    item.price,
    item.description,
    item.registry,
    item.business.join(' '),
    item.classes.join(' '),
    getClassSearchText(item.classes)
  ].join(' ');
  const normalizedHaystack = normalize(haystack);
  const translitHaystack = transliterate(haystack);
  const translitQuery = transliterate(parsed.text);
  return normalizedHaystack.includes(normalizedQuery) || translitHaystack.includes(translitQuery);
}

function filteredTrademarks() {
  const list = allTrademarks().filter((item) => {
    const classMatch = !state.classFilter || item.classes.includes(Number(state.classFilter));
    const discountMatch = state.discountFilter !== 'discount' || item.discount;
    const businessMatch = !state.businessFilter || item.business.includes(state.businessFilter);
    return classMatch && discountMatch && businessMatch && matchesSearch(item, state.search);
  });

  if (state.sort === 'price-asc') {
    list.sort((a, b) => a.minPrice - b.minPrice);
  }
  if (state.sort === 'classes-desc') {
    list.sort((a, b) => b.classes.length - a.classes.length);
  }
  if (state.sort === 'default') {
    list.sort((a, b) => getCatalogShuffleKey(a) - getCatalogShuffleKey(b));
  }
  return list;
}

function renderFilters() {
  if (!classFilter || !businessFilter) return;
  const classes = [...new Set(allTrademarks().flatMap((item) => item.classes))].sort((a, b) => a - b);
  const businesses = [...new Set(allTrademarks().flatMap((item) => item.business))].sort((a, b) => a.localeCompare(b, 'ru'));

  classFilter.insertAdjacentHTML('beforeend', classes.map((item) => `<option value="${item}">${item}</option>`).join(''));
  businessFilter.insertAdjacentHTML('beforeend', businesses.map((item) => `<option value="${item}">${item}</option>`).join(''));
}

function refreshFilters() {
  if (!classFilter || !businessFilter) return;
  classFilter.querySelectorAll('option:not(:first-child)').forEach((option) => option.remove());
  businessFilter.querySelectorAll('option:not(:first-child)').forEach((option) => option.remove());
  renderFilters();
}

function renderCatalog() {
  if (!grid || !template || !resultCount || !pagination) return;
  const list = filteredTrademarks();
  const pageCount = Math.max(1, Math.ceil(list.length / state.perPage));
  if (state.page > pageCount) state.page = pageCount;
  const start = (state.page - 1) * state.perPage;
  const visible = list.slice(start, start + state.perPage);
  grid.innerHTML = '';
  resultCount.textContent = `Показано: ${visible.length} из ${list.length}; всего в базе ${allTrademarks().length}`;

  if (!visible.length) {
    grid.innerHTML = '<p class="empty">По этим фильтрам ничего не найдено.</p>';
    pagination.innerHTML = '';
    return;
  }

  visible.forEach((item) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const favoriteButton = node.querySelector('[data-favorite]');
    const inFavorites = state.favorites.includes(item.id);

    const logoNode = node.querySelector('[data-logo]');
    logoNode.innerHTML = item.image
      ? `<img src="${item.image}" alt="${item.title}"><span>№${item.id}</span>`
      : `<strong>${item.logo}</strong><span>№${item.id}</span>`;
    node.querySelector('[data-title]').textContent = getTrademarkTitle(item);
    node.querySelector('[data-registry]').href = item.registry;
    node.querySelector('[data-classes]').innerHTML = item.classes.map((value) => `<span>${value}</span>`).join('');
    node.querySelector('[data-business]').textContent = item.business.join(', ');
    node.querySelector('[data-price]').textContent = item.price;
    node.querySelector('[data-discount]').textContent = item.discount ? 'скидка' : '';
    favoriteButton.classList.toggle('is-active', inFavorites);
    favoriteButton.textContent = inFavorites ? '♥' : '♡';

    favoriteButton.addEventListener('click', () => toggleFavorite(item.id));
    node.querySelector('[data-buy]').addEventListener('click', () => addToCart(item.id, true, 'buy'));
    node.querySelector('[data-consult]').addEventListener('click', () => addToCart(item.id, true, 'consult'));
    grid.appendChild(node);
  });
  renderPagination(pageCount);
}

function renderPagination(pageCount) {
  if (!pagination) return;
  pagination.innerHTML = '';
  if (pageCount < 2) return;
  for (let index = 1; index <= pageCount; index += 1) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = index;
    button.classList.toggle('is-active', index === state.page);
    button.addEventListener('click', () => {
      state.page = index;
      renderCatalog();
      document.querySelector('#catalog')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    pagination.appendChild(button);
  }
}

function toggleFavorite(id) {
  state.favorites = state.favorites.includes(id)
    ? state.favorites.filter((item) => item !== id)
    : [...state.favorites, id];
  saveList(favoritesKey, state.favorites);
  renderCatalog();
}

function addToCart(id, open = false, action = state.action) {
  state.action = action;
  state.intent = leadActions[action]?.label || state.intent;
  if (!state.cart.includes(id)) {
    state.cart.push(id);
    saveList(cartKey, state.cart);
  }
  updateCart();
  if (open) openCart();
}

function removeFromCart(id) {
  state.cart = state.cart.filter((item) => item !== id);
  delete state.selectedClasses[id];
  saveList(cartKey, state.cart);
  updateCart();
}

function updateCart() {
  if (cartCount) cartCount.textContent = state.cart.length;
  if (!cartItems || !intentInput || !selectedInput) return;
  const items = getCartItems();
  intentInput.value = state.intent;
  selectedInput.value = [
    `Цель заявки: ${state.intent}`,
    ...items.map((item) => `${getTrademarkTitle(item)}; внутренний ID ${item.id}: МКТУ ${getSelectedClasses(item).join(', ')}; ${item.registry}`)
  ].join('\n');
  cartItems.innerHTML = items.length
    ? items.map((item) => `
      <div class="cart-item">
        <div>
          <strong>${getTrademarkTitle(item)}</strong>
          <div>${item.price}</div>
          <div class="cart-class-picker">
            <span>Выберите классы МКТУ</span>
            <div>
              ${item.classes.map((value) => {
                const classValue = String(value);
                const checked = getSelectedClasses(item).includes(classValue) ? 'checked' : '';
                return `<label><input type="checkbox" data-cart-class data-id="${item.id}" value="${classValue}" ${checked}>${classValue}</label>`;
              }).join('')}
            </div>
          </div>
        </div>
        <button type="button" data-remove="${item.id}">Убрать</button>
      </div>
    `).join('')
    : '<p>Опишите задачу в комментарии, и мы подберем знак из каталога или закрытой базы.</p>';

  cartItems.querySelectorAll('[data-remove]').forEach((button) => {
    button.addEventListener('click', () => removeFromCart(button.dataset.remove));
  });
  cartItems.querySelectorAll('[data-cart-class]').forEach((input) => {
    input.addEventListener('change', () => setSelectedClass(input.dataset.id, input.value, input.checked));
  });
}

function openCart(action = state.action) {
  if (!modal || !modalTitle) return;
  state.action = action;
  state.intent = leadActions[action]?.label || state.intent;
  modalTitle.textContent = leadActions[action]?.title || 'Заявка на товарные знаки';
  updateCart();
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = '';
}

function bindControls() {
  const adminEnabled = new URLSearchParams(window.location.search).get('admin') === '1';
  if (adminSection && adminEnabled) {
    adminSection.hidden = false;
  }

  const updateSearch = (event) => {
    state.search = event.target.value.trim();
    state.page = 1;
    renderCatalog();
  };
  searchInput?.addEventListener('input', updateSearch);
  searchInput?.addEventListener('search', updateSearch);
  searchInput?.addEventListener('change', updateSearch);
  classFilter?.addEventListener('change', (event) => {
    state.classFilter = event.target.value;
    state.page = 1;
    renderCatalog();
  });
  discountFilter?.addEventListener('change', (event) => {
    state.discountFilter = event.target.value;
    state.page = 1;
    renderCatalog();
  });
  businessFilter?.addEventListener('change', (event) => {
    state.businessFilter = event.target.value;
    state.page = 1;
    renderCatalog();
  });
  sortSelect?.addEventListener('change', (event) => {
    state.sort = event.target.value;
    state.page = 1;
    renderCatalog();
  });
  document.querySelector('[data-reset]')?.addEventListener('click', () => {
    state.search = '';
    state.classFilter = '';
    state.discountFilter = '';
    state.businessFilter = '';
    state.sort = 'default';
    state.page = 1;
    if (searchInput) searchInput.value = '';
    if (classFilter) classFilter.value = '';
    if (discountFilter) discountFilter.value = '';
    if (businessFilter) businessFilter.value = '';
    if (sortSelect) sortSelect.value = 'default';
    renderCatalog();
  });
  document.querySelectorAll('[data-open-cart]').forEach((button) => {
    button.addEventListener('click', () => openCart('buy'));
  });
  document.querySelectorAll('[data-open-lead]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      openCart('consult');
    });
  });
  document.querySelectorAll('[data-open-registration]').forEach((button) => {
    button.addEventListener('click', () => openCart('registration'));
  });
  document.querySelectorAll('[data-mktu-preview]').forEach((button) => {
    button.addEventListener('click', () => selectMktuClass(button.dataset.mktuPreview, true));
  });
  [mktuGoods, mktuServices, mktuResults].forEach((container) => {
    container?.addEventListener('click', (event) => {
      const button = event.target.closest('[data-mktu-number]');
      if (!button) return;
      selectMktuClass(button.dataset.mktuNumber);
    });
  });
  mktuSearch?.addEventListener('input', (event) => {
    renderMktuDirectory(event.target.value.trim());
  });
  mktuDetail?.addEventListener('click', (event) => {
    const filterButton = event.target.closest('[data-mktu-filter]');
    if (filterButton) {
      filterCatalogByMktu(filterButton.dataset.mktuFilter);
      return;
    }
    if (event.target.closest('[data-mktu-consult]')) {
      openCart('consult');
    }
  });
  document.querySelectorAll('[data-mktu-select]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      state.classFilter = event.currentTarget.dataset.mktuSelect;
      state.page = 1;
      if (classFilter) classFilter.value = state.classFilter;
      renderCatalog();
      const catalog = document.querySelector('#catalog');
      if (catalog) {
        scrollToTarget(catalog);
      } else {
        window.location.href = `catalog.html?mktu=${encodeURIComponent(state.classFilter)}`;
      }
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (link.matches('[data-open-lead], [data-mktu-select]')) return;
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      scrollToTarget(target);
    });
  });
  document.querySelector('[data-close-cart]')?.addEventListener('click', closeCart);
  modal?.addEventListener('click', (event) => {
    if (event.target === modal) closeCart();
  });
}

function bindForms() {
  document.querySelector('[data-lead-form]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = document.querySelector('[data-lead-status]');
    if (status) status.textContent = 'Перенаправляем в ПатентВсем...';
    redirectToPatentvsem(state.action, getCartPayload(event.currentTarget));
  });

  document.querySelector('[data-place-form]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = document.querySelector('[data-place-status]');
    if (status) status.textContent = 'Перенаправляем в ПатентВсем...';
    redirectToPatentvsem('place', getPlacePayload(event.currentTarget));
  });

  const adminForm = document.querySelector('[data-admin-form]');
  if (!adminForm) return;

  adminForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const certificate = form.get('certificate').trim();
    const registry = form.get('registry').trim();
    const business = parseList(form.get('business'));
    const item = {
      id: certificate,
      title: form.get('title').trim(),
      classes: parseClasses(form.get('classes')),
      price: form.get('price').trim(),
      minPrice: getMinPrice(form.get('price')),
      discount: form.get('discount') === 'on',
      business,
      logo: form.get('logo').trim() || undefined,
      image: form.get('image').trim() || undefined,
      description: form.get('description').trim() || undefined,
      registry: registry || `${registryBase}${encodeURIComponent(certificate)}`
    };
    if (!item.classes.length || !item.business.length) {
      document.querySelector('[data-admin-status]').textContent = 'Заполните классы МКТУ и направление бизнеса через запятую.';
      return;
    }
    const custom = loadList(customKey).filter((stored) => stored.id !== item.id);
    custom.push(item);
    saveList(customKey, custom);
    event.currentTarget.reset();
    const status = document.querySelector('[data-admin-status]');
    if (status) status.textContent = 'Знак добавлен в локальный каталог.';
    refreshFilters();
    renderCatalog();
    renderAdminList();
  });

  if (exportCustomButton) {
    exportCustomButton.addEventListener('click', exportCustomCards);
  }
}

function initFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const mktu = params.get('mktu');
  if (mktu && mktuClasses.some((item) => String(item.id) === String(mktu))) {
    state.classFilter = String(mktu);
    state.mktuActive = Number(mktu);
    if (classFilter) classFilter.value = state.classFilter;
  }
}

function restoreHashPosition() {
  if (!window.location.hash) return;
  [80, 450].forEach((delay) => {
    window.setTimeout(() => {
      scrollToTarget(document.querySelector(window.location.hash), false, 'auto');
    }, delay);
  });
  window.addEventListener('load', () => {
    window.setTimeout(() => {
      scrollToTarget(document.querySelector(window.location.hash), false, 'auto');
    }, 700);
  });
}

function initApp() {
  renderFilters();
  initFromUrl();
  renderMktuDirectory();
  bindControls();
  bindForms();
  updateCart();
  renderCatalog();
  renderAdminList();
  restoreHashPosition();
  initCookieConsent();
}

initApp();
