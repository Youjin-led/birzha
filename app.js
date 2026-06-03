const registryBase = 'https://www1.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=';
const cartKey = 'znakvsem-cart-v1';
const favoritesKey = 'znakvsem-favorites-v1';
const customKey = 'znakvsem-custom-v1';
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
  { id: '1063814', classes: [17, 19, 35, 36, 37, 39], price: 'от 90 тыс. за каждый класс', minPrice: 90000, discount: true, business: ['строительство', 'недвижимость', 'услуги'] },
  { id: '1089437', classes: [3, 5, 9, 11, 18, 25, 28, 30, 35, 42], price: 'от 250 тыс. руб. за класс', minPrice: 250000, discount: true, business: ['косметика', 'одежда', 'маркетплейсы', 'IT'] },
  { id: '2024725226', classes: [44, 45], price: 'от 140 тыс. за класс', minPrice: 140000, discount: false, business: ['медицина', 'юридические услуги'] },
  { id: '1113022', classes: [4, 5, 6, 9, 10, 11, 14, 17, 18, 19, 21, 23, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['маркетплейсы', 'товары', 'электроника'] },
  { id: '1112709', classes: [7, 9, 12], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['техника', 'транспорт'] },
  { id: '1111040', classes: [3, 7, 8, 9, 11, 12, 16, 21, 35, 42, 44, 45], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['косметика', 'товары для дома', 'IT'] },
  { id: '1019012', classes: [2, 4, 7, 9, 10, 11, 12, 18, 21, 23, 24, 25, 29, 30, 31, 32, 33, 34, 37, 42, 43], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['еда', 'одежда', 'техника', 'рестораны'] },
  { id: '1025932', classes: [3, 8, 12, 21, 25], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['косметика', 'одежда', 'товары для дома'] },
  { id: '1034847', classes: [3], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['косметика'] },
  { id: '1025451', classes: [3, 9, 42], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['косметика', 'IT'] },
  { id: '1104685', classes: [11, 21, 24, 25], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['товары для дома', 'одежда'] },
  { id: '1096071', classes: [1, 2, 3, 4, 7, 8, 9, 11, 12, 16, 18, 21, 24, 25, 29, 30, 31, 32, 33], price: '350 000 руб.', minPrice: 350000, discount: false, business: ['еда', 'одежда', 'товары', 'маркетплейсы'] },
  { id: '972991', classes: [3, 7, 9, 21, 25], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['косметика', 'одежда', 'товары для дома'] },
  { id: '970982', classes: [1, 2, 4, 8, 9, 10, 11, 14, 16, 18, 21, 22, 23, 24, 28, 29, 31, 32, 34], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['товары', 'еда', 'техника'] },
  { id: '1002509', classes: [1, 2, 3, 5, 6, 8, 10, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 31, 32], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['товары', 'одежда', 'медицина'] },
  { id: '972459', classes: [3, 8, 21], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['косметика', 'товары для дома'] },
  { id: '971753', classes: [3, 12, 14, 16, 18, 21, 35], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['косметика', 'аксессуары', 'маркетплейсы'] },
  { id: '971330', classes: [1, 2, 3, 5, 7, 8, 9, 12, 14, 16, 18, 21, 23, 24, 25, 29, 31, 32, 33], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['еда', 'одежда', 'товары'] },
  { id: '971529', classes: [2, 3, 7, 8, 9, 12, 14, 21, 23, 24, 25, 29, 30, 31, 32, 33, 35], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['еда', 'одежда', 'маркетплейсы'] },
  { id: '970741', classes: [2, 7, 8, 9, 11, 14, 21, 29, 30, 31, 32, 33], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['еда', 'техника', 'товары для дома'] },
  { id: '994332', classes: [1, 2, 3, 9, 12, 14, 18, 23, 24, 25, 35], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['одежда', 'маркетплейсы', 'косметика'] },
  { id: '1038656', classes: [3, 11, 25], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['косметика', 'одежда'] },
  { id: '969608', classes: [1, 4, 6, 7, 8, 9, 10, 14, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['товары', 'еда', 'одежда'] },
  { id: '994011', classes: [3, 7, 8, 9, 10, 11, 12, 18, 21, 23, 24, 25, 29, 30, 31, 32, 33, 35, 37, 43], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['еда', 'рестораны', 'маркетплейсы'] },
  { id: '969606', classes: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 16, 20, 21, 22, 23, 24, 28, 29, 30, 31, 32, 33, 34], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['еда', 'товары', 'медицина'] },
  { id: '969190', classes: [1, 2, 3, 4, 5, 6, 8, 10, 14, 16, 18, 20, 21, 22, 23, 24, 28, 29], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['товары', 'косметика', 'аксессуары'] },
  { id: '1088573', classes: [2, 3, 6, 7, 8, 10, 12, 15, 20, 22, 23, 26, 29, 30, 32, 33, 34, 36, 38, 39, 40, 43, 44, 45], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['еда', 'услуги', 'медицина', 'логистика'] },
  { id: '1064987', classes: [2, 3, 7, 8, 9, 10, 11, 12, 18, 20, 21, 24, 25, 31, 32, 33, 34, 35, 37, 43], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['еда', 'одежда', 'маркетплейсы', 'рестораны'] },
  { id: '919273', classes: [5, 13, 15, 18, 19, 23, 26, 27, 28, 31, 36, 38, 40, 45], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['медицина', 'финансы', 'услуги'] },
  { id: '906596', classes: [1, 2, 6, 8, 10, 13, 15, 16, 17, 19, 22, 23, 24, 26, 27, 28, 29, 31, 32, 33, 37, 38, 39, 40, 41, 44], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['еда', 'строительство', 'логистика', 'обучение'] }
];

const sourceTrademarkIds = new Set(sourceTrademarks.map((item) => item.id));

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
  return [...sourceTrademarks.filter((item) => !customIds.has(item.id)), ...custom].map((item, index) => ({
    order: index + 1,
    ...item,
    title: item.title || `Знак №${item.id}`,
    logo: item.logo || makeLogoText(item, index),
    image: item.image || (sourceTrademarkIds.has(item.id) ? `assets/catalog/tm-${item.id}.jpg` : undefined),
    registry: item.registry || `${registryBase}${encodeURIComponent(item.id)}`
  }));
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
    return `${item.title} №${item.id}; МКТУ: ${classes}; ${item.price}; ${item.registry}`;
  }).join('\n');

  return {
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

function matchesSearch(item, query) {
  if (!query) return true;
  const haystack = [
    item.title,
    item.id,
    item.price,
    item.business.join(' '),
    item.classes.join(' ')
  ].join(' ');
  const normalizedHaystack = normalize(haystack);
  const translitHaystack = transliterate(haystack);
  const normalizedQuery = normalize(query);
  const translitQuery = transliterate(query);
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
    node.querySelector('[data-title]').textContent = item.title;
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
    ...items.map((item) => `${item.title}: МКТУ ${getSelectedClasses(item).join(', ')}; ${item.registry}`)
  ].join('\n');
  cartItems.innerHTML = items.length
    ? items.map((item) => `
      <div class="cart-item">
        <div>
          <strong>${item.title}</strong>
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

  searchInput?.addEventListener('input', (event) => {
    state.search = event.target.value.trim();
    state.page = 1;
    renderCatalog();
  });
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
    document.querySelector('[data-admin-status]').textContent = 'Знак добавлен в локальный каталог.';
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

renderFilters();
initFromUrl();
renderMktuDirectory();
bindControls();
bindForms();
updateCart();
renderCatalog();
renderAdminList();

if (window.location.hash) {
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
