import { CambridgeUnit } from '../cambridgeUnits';

export const unitCountableUncountable: CambridgeUnit = {
  id: 'unit-28-much-many-few-little',
  unitNumber: 28,
  level: 'A1-A2',
  book: 'Murphy Essential (Red)',
  category: 'Articles & Prepositions',
  titleEn: 'Countable & Uncountable: much / many / a lot of / a few / a little',
  titleRu: 'Исчисляемые и неисчисляемые: much, many, a lot of, a few, a little',
  ruleSummaryRu:
    '1. Исчисляемые существительные (Countable nouns):\n' +
    '   - Это предметы, которые можно сосчитать: one book, two books; an apple, three apples; a car, four cars.\n' +
    '   - Много: many (в вопросах и отрицаниях) или a lot of (в утверждениях):\n' +
    '     * How many students are there? / We don\'t have many apples. / She has a lot of friends.\n' +
    '   - Мало / несколько: a few (несколько, немного, но достаточно) или few (очень мало, недостаточно):\n' +
    '     * I have a few questions. / There are very few buses on Sundays.\n\n' +
    '2. Неисчисляемые существительные (Uncountable nouns):\n' +
    '   - Это жидкости, продукты, вещества, материалы и абстрактные понятия, которые нельзя сосчитать поштучно: water, milk, coffee, tea, bread, cheese, sugar, money, time, traffic, music, advice, information.\n' +
    '   - Они используются ТОЛЬКО в единственном числе (не имеют окончания -s).\n' +
    '   - Много: much (в вопросах и отрицаниях) или a lot of (в утверждениях):\n' +
    '     * How much time do we have? / I don\'t drink much coffee. / He has a lot of money.\n' +
    '   - Мало / немного: a little (немного, чуть-чуть, но достаточно) или little (очень мало):\n' +
    '     * Can I have a little milk in my tea? / We have very little time left.\n\n' +
    '3. How many...? vs How much...?:\n' +
    '   - How many + существительное во мн. числе (штуки): How many days? How many brothers do you have?\n' +
    '   - How much + неисчисляемое (объем/количество/цена): How much water? How much does this coat cost?',
  keyFormula:
    'Исчисляемые (штуки): many (вопрос/отрицание) | a lot of (утверждение) | a few (несколько) | How many...?\nНеисчисляемые (вещества): much (вопрос/отрицание) | a lot of (утверждение) | a little (чуть-чуть) | How much...?',
  markerWords: [
    'How many...? (сколько штук?)',
    'How much...? (сколько объема/денег?)',
    'many (много для исчисляемых)',
    'much (много для неисчисляемых)',
    'a lot of (много для всех в утверждениях)',
    'a few (несколько)',
    'a little (немного/чуть-чуть)',
  ],
  pitfallsRu:
    '1. В утвердительных предложениях естественнее говорить "a lot of", чем "much": "I have a lot of work" (НЕ: "I have much work").\n' +
    '2. Слово "money" (деньги) в английском языке НЕИСЧИСЛЯЕМОЕ! Говорим: "How much money?" и "a lot of money" (НЕ: "How many money?").\n' +
    '3. Слово "bread" (хлеб) тоже неисчисляемое: "a little bread", "much bread" (НЕ: "a few breads").\n' +
    '4. Не путайте "a few" и "a little": перед словами во множественном числе на -s (books, cars, days) ставится "a few", а перед веществами (water, milk, sugar) — "a little".',
  exercises: [
    {
      id: 'u28-ex-1',
      sentenceBefore: 'Excuse me, how ',
      sentenceAfter: ' does this leather jacket cost?',
      promptWord: '(much / many)',
      correctAnswer: 'much',
      acceptedAnswers: ['much'],
      ruleExplanationRu:
        'Вопрос о стоимости и цене всегда задается с помощью "How much...?" (сколько стоит).',
      ruleFormula: 'How much does it cost?',
      hintRu: 'Вопрос о цене товара: How much.',
      russianTranslation: 'Простите, сколько стоит эта кожаная куртка?',
    },
    {
      id: 'u28-ex-2',
      sentenceBefore: 'How ',
      sentenceAfter: ' foreign languages can your elder brother speak fluently?',
      promptWord: '(much / many)',
      correctAnswer: 'many',
      acceptedAnswers: ['many'],
      ruleExplanationRu:
        'Существительное "languages" (языки) исчисляемое и стоит во множественном числе, поэтому используется "How many".',
      ruleFormula: 'How many + исчисляемое во мн. числе',
      hintRu: 'Языки (languages) можно сосчитать: How many.',
      russianTranslation: 'На скольких иностранных языках свободно говорит твой старший брат?',
    },
    {
      id: 'u28-ex-3',
      sentenceBefore: 'We have to hurry up; we do not have ',
      sentenceAfter: ' time before our flight starts boarding.',
      promptWord: '(much / many)',
      correctAnswer: 'much',
      acceptedAnswers: ['much'],
      ruleExplanationRu:
        'Слово "time" (время) — неисчисляемое. В отрицательном предложении используется "much": do not have much time.',
      ruleFormula: 'not + much + неисчисляемое (time)',
      hintRu: 'Время (time) — неисчисляемое существительное: much time.',
      russianTranslation: 'Мы должны поторопиться; у нас не так много времени до начала посадки на наш рейс.',
    },
    {
      id: 'u28-ex-4',
      sentenceBefore: 'Would you like ',
      sentenceAfter: ' milk in your black coffee, or do you take it black?',
      promptWord: '(a few / a little)',
      correctAnswer: 'a little',
      acceptedAnswers: ['a little'],
      ruleExplanationRu:
        'Слово "milk" (молоко) — неисчисляемое вещество (жидкость). Для значения "немного / чуть-чуть" используется "a little".',
      ruleFormula: 'a little + неисчисляемое (milk)',
      hintRu: 'Молоко — жидкость (неисчисляемое), поэтому a little.',
      russianTranslation: 'Хотите немного молока в черный кофе или пьете без него?',
    },
    {
      id: 'u28-ex-5',
      sentenceBefore: 'I am new in this city, but I already have ',
      sentenceAfter: ' good friends at my university.',
      promptWord: '(a few / a little)',
      correctAnswer: 'a few',
      acceptedAnswers: ['a few'],
      ruleExplanationRu:
        'Слово "friends" (друзья) — исчисляемое существительное во множественном числе. Для значения "несколько" используется "a few".',
      ruleFormula: 'a few + исчисляемое во мн. числе (friends)',
      hintRu: 'Друзья (friends) — исчисляемое во множественном числе: a few.',
      russianTranslation: 'Я новичок в этом городе, но у меня уже есть несколько хороших друзей в университете.',
    },
    {
      id: 'u28-ex-6',
      sentenceBefore: 'There aren’t ',
      sentenceAfter: ' cars on the road early on Sunday morning.',
      promptWord: '(much / many)',
      correctAnswer: 'many',
      acceptedAnswers: ['many'],
      ruleExplanationRu:
        'Существительное "cars" (машины) стоит во множественном числе. В отрицании используется "many cars".',
      ruleFormula: "aren't + many + мн. число (cars)",
      hintRu: 'Машины (cars) — исчисляемое существительное: many.',
      russianTranslation: 'Ранним воскресным утром на дороге не так много машин.',
    },
    {
      id: 'u28-ex-7',
      sentenceBefore: 'David is very popular at work; he has ',
      sentenceAfter: ' interesting ideas for our new project.',
      promptWord: '(a lot of / much)',
      correctAnswer: 'a lot of',
      acceptedAnswers: ['a lot of', 'lots of'],
      ruleExplanationRu:
        'В утвердительных предложениях для большого количества обычно используется "a lot of" (или "lots of").',
      ruleFormula: 'утверждение + a lot of + существительное',
      hintRu: 'В утвердительном предложении "много идей": a lot of.',
      russianTranslation: 'Дэвид очень популярен на работе; у него много интересных идей для нашего нового проекта.',
    },
    {
      id: 'u28-ex-8',
      sentenceBefore: 'How ',
      sentenceAfter: ' cups of coffee do you drink during a normal working day?',
      promptWord: '(much / many)',
      correctAnswer: 'many',
      acceptedAnswers: ['many'],
      ruleExplanationRu:
        'Слово "cups" (чашки) исчисляемое (cups of coffee). С исчисляемыми используется "How many".',
      ruleFormula: 'How many + cups',
      hintRu: 'Чашки кофе (cups) можно сосчитать поштучно: How many.',
      russianTranslation: 'Сколько чашек кофе ты выпиваешь в течение обычного рабочего дня?',
    },
    {
      id: 'u28-ex-9',
      sentenceBefore: 'I only need ',
      sentenceAfter: ' minutes to finish packing my suitcase.',
      promptWord: '(a few / a little)',
      correctAnswer: 'a few',
      acceptedAnswers: ['a few'],
      ruleExplanationRu:
        'Слово "minutes" (минуты) — исчисляемое во множественном числе. "Несколько минут" = "a few minutes".',
      ruleFormula: 'a few + minutes (исчисляемое)',
      hintRu: 'Минуты (minutes) во множественном числе: a few.',
      russianTranslation: 'Мне нужно всего несколько минут, чтобы закончить собирать чемодан.',
    },
    {
      id: 'u28-ex-10',
      sentenceBefore: 'Can you lend me ten pounds? I do not have ',
      sentenceAfter: ' cash in my wallet.',
      promptWord: '(much / many)',
      correctAnswer: 'much',
      acceptedAnswers: ['much'],
      ruleExplanationRu:
        'Слово "cash" (наличные деньги) — неисчисляемое. В отрицании используется "much cash".',
      ruleFormula: 'not + much + cash',
      hintRu: 'Наличные (cash) — неисчисляемое: much.',
      russianTranslation: 'Можешь одолжить мне десять фунтов? У меня не так много наличных в кошельке.',
    },
    {
      id: 'u28-ex-11',
      sentenceBefore: 'We took ',
      sentenceAfter: ' wonderful photographs during our holiday in the mountains.',
      promptWord: '(a lot of / much)',
      correctAnswer: 'a lot of',
      acceptedAnswers: ['a lot of', 'lots of', 'many'],
      ruleExplanationRu:
        'В утвердительном предложении перед существительным во множественном числе (photographs) естественно использовать "a lot of".',
      ruleFormula: 'a lot of + photographs',
      hintRu: 'В утвердительном предложении: a lot of (много фотографий).',
      russianTranslation: 'Мы сделали много замечательных фотографий во время нашего отпуска в горах.',
    },
    {
      id: 'u28-ex-12',
      sentenceBefore: 'I speak ',
      sentenceAfter: ' Spanish, so I can order food and ask for directions in Madrid.',
      promptWord: '(a few / a little)',
      correctAnswer: 'a little',
      acceptedAnswers: ['a little'],
      ruleExplanationRu:
        'Язык как знание (Spanish) — неисчисляемое понятие. "Немного говорю по-испански" = "speak a little Spanish".',
      ruleFormula: 'speak + a little + язык',
      hintRu: 'Немного говорю на языке: a little Spanish.',
      russianTranslation: 'Я немного говорю по-испански, поэтому могу заказать еду и спросить дорогу в Мадриде.',
    },
    {
      id: 'u28-ex-13',
      sentenceBefore: 'How ',
      sentenceAfter: ' sugar do you put in your mug of morning tea?',
      promptWord: '(much / many)',
      correctAnswer: 'much',
      acceptedAnswers: ['much'],
      ruleExplanationRu:
        'Слово "sugar" (сахар) — неисчисляемое вещество. Вопрос о количестве: "How much sugar...?".',
      ruleFormula: 'How much + неисчисляемое (sugar)',
      hintRu: 'Сахар (sugar) — неисчисляемое: How much.',
      russianTranslation: 'Сколько сахара ты кладешь в кружку утреннего чая?',
    },
    {
      id: 'u28-ex-14',
      sentenceBefore: 'There were very ',
      sentenceAfter: ' people at the museum this morning, so we enjoyed the art in silence.',
      promptWord: '(few / little)',
      correctAnswer: 'few',
      acceptedAnswers: ['few'],
      ruleExplanationRu:
        'Слово "people" (люди) — исчисляемое существительное во множественном числе. "Очень мало людей" = "very few people".',
      ruleFormula: 'very few + исчисляемое во мн. числе (people)',
      hintRu: 'Люди (people) — исчисляемое во множественном числе: very few.',
      russianTranslation: 'Этим утром в музее было очень мало людей, поэтому мы наслаждались искусством в тишине.',
    },
    {
      id: 'u28-ex-15',
      sentenceBefore: 'The soup is delicious, but it needs ',
      sentenceAfter: ' more salt.',
      promptWord: '(a few / a little)',
      correctAnswer: 'a little',
      acceptedAnswers: ['a little'],
      ruleExplanationRu:
        'Слово "salt" (соль) — неисчисляемое вещество. "Немного больше соли" = "a little more salt".',
      ruleFormula: 'a little + неисчисляемое (salt)',
      hintRu: 'Соль — неисчисляемое вещество: a little.',
      russianTranslation: 'Суп очень вкусный, но в него нужно положить чуть-чуть больше соли.',
    },
    {
      id: 'u28-ex-16',
      sentenceBefore: 'How ',
      sentenceAfter: ' bedrooms does your new flat have?',
      promptWord: '(much / many)',
      correctAnswer: 'many',
      acceptedAnswers: ['many'],
      ruleExplanationRu:
        'Существительное "bedrooms" (спальни) исчисляемое и стоит во множественном числе: How many bedrooms...?',
      ruleFormula: 'How many + bedrooms',
      hintRu: 'Спальни (bedrooms) можно сосчитать: How many.',
      russianTranslation: 'Сколько спален в вашей новой квартире?',
    },
    {
      id: 'u28-ex-17',
      sentenceBefore: 'We drank ',
      sentenceAfter: ' fresh water after our long hike in the hot sun.',
      promptWord: '(a lot of / many)',
      correctAnswer: 'a lot of',
      acceptedAnswers: ['a lot of', 'lots of'],
      ruleExplanationRu:
        'Слово "water" (вода) — неисчисляемое. В утверждении "много воды" используется "a lot of" (слово many с водой использовать нельзя!).',
      ruleFormula: 'a lot of + water (неисчисляемое)',
      hintRu: 'Много воды в утверждении: a lot of water.',
      russianTranslation: 'Мы выпили много свежей воды после долгого похода под жарким солнцем.',
    },
    {
      id: 'u28-ex-18',
      sentenceBefore: 'Anna bought ',
      sentenceAfter: ' sweet apples to bake an apple pie.',
      promptWord: '(a few / a little)',
      correctAnswer: 'a few',
      acceptedAnswers: ['a few'],
      ruleExplanationRu:
        'Слово "apples" (яблоки) исчисляемое во множественном числе: "a few apples" (несколько яблок).',
      ruleFormula: 'a few + исчисляемое во мн. числе (apples)',
      hintRu: 'Яблоки (apples) — исчисляемое во множественном числе: a few.',
      russianTranslation: 'Анна купила несколько сладких яблок, чтобы испечь яблочный пирог.',
    },
    {
      id: 'u28-ex-19',
      sentenceBefore: 'I am not very hungry, so I will only have ',
      sentenceAfter: ' soup for dinner.',
      promptWord: '(a few / a little)',
      correctAnswer: 'a little',
      acceptedAnswers: ['a little'],
      ruleExplanationRu:
        'Слово "soup" (суп) — неисчисляемое. "Немного супа" = "a little soup".',
      ruleFormula: 'a little + неисчисляемое (soup)',
      hintRu: 'Суп (soup) — неисчисляемое существительное: a little.',
      russianTranslation: 'Я не очень голоден, поэтому съем лишь немного супа на ужин.',
    },
    {
      id: 'u28-ex-20',
      sentenceBefore: 'How ',
      sentenceAfter: ' days are you planning to stay in Edinburgh?',
      promptWord: '(much / many)',
      correctAnswer: 'many',
      acceptedAnswers: ['many'],
      ruleExplanationRu:
        'Слово "days" (дни) исчисляемое во множественном числе: How many days...?',
      ruleFormula: 'How many + days',
      hintRu: 'Дни (days) можно сосчитать: How many.',
      russianTranslation: 'Сколько дней вы планируете провести в Эдинбурге?',
    },
    {
      id: 'u28-ex-21',
      sentenceBefore: 'There is not ',
      sentenceAfter: ' traffic on the highway at night.',
      promptWord: '(much / many)',
      correctAnswer: 'much',
      acceptedAnswers: ['much'],
      ruleExplanationRu:
        'Слово "traffic" (дорожное движение) в английском всегда неисчисляемое. Отрицание: "not much traffic".',
      ruleFormula: 'not + much + traffic',
      hintRu: 'Движение транспорта (traffic) — неисчисляемое: much.',
      russianTranslation: 'Ночью на шоссе не так много движения.',
    },
    {
      id: 'u28-ex-22',
      sentenceBefore: 'We have got ',
      sentenceAfter: ' eggs left in the carton, so we can make pancakes for breakfast.',
      promptWord: '(a few / a little)',
      correctAnswer: 'a few',
      acceptedAnswers: ['a few'],
      ruleExplanationRu:
        'Слово "eggs" (яйца) исчисляемое во множественном числе. "Несколько яиц" = "a few eggs".',
      ruleFormula: 'a few + eggs',
      hintRu: 'Яйца (eggs) — исчисляемое во множественном числе: a few.',
      russianTranslation: 'У нас осталось несколько яиц в упаковке, так что мы можем приготовить блинчики на завтрак.',
    },
  ],
};
