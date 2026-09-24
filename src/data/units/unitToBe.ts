import { CambridgeUnit } from '../cambridgeUnits';

export const unitToBe: CambridgeUnit = {
  id: 'unit-23-to-be-present',
  unitNumber: 23,
  level: 'A1-A2',
  book: 'Murphy Essential (Red)',
  category: 'Tenses',
  titleEn: 'Present: am / is / are (Affirmative, Negative, Questions)',
  titleRu: 'Глагол to be в настоящем времени: am, is, are, отрицания и вопросы',
  ruleSummaryRu:
    'Глагол to be (быть, являться, находиться) связывает подлежащее со свойством, профессией, возрастом или местом. В русском языке мы часто опускаем его ("Я доктор", "Она дома"), но в английском глагол ОБЯЗАТЕЛЕН!\n\n' +
    '1. Утверждение:\n' +
    '   - I am (\'m): I am 25 years old / I\'m hungry.\n' +
    '   - He / She / It is (\'s): He is a teacher / She\'s at home / It is cold today.\n' +
    '   - We / You / They are (\'re): We are ready / You\'re late / They are from Italy.\n\n' +
    '2. Отрицание (добавляем not после глагола):\n' +
    '   - I am not (\'m not): I am not tired.\n' +
    '   - He / She / It is not (isn\'t / \'s not): He isn\'t at work today.\n' +
    '   - We / You / They are not (aren\'t / \'re not): They aren\'t ready yet.\n\n' +
    '3. Вопросы (выносим am / is / are в самое начало перед подлежащим):\n' +
    '   - Am I late? — Yes, you are. / No, you aren\'t.\n' +
    '   - Is your mother at home? — Yes, she is. / No, she isn\'t.\n' +
    '   - Are you tired? — Yes, I am. / No, I\'m not.\n' +
    '   - С вопросительными словами: Where is the key? Why are you angry? How old are you?',
  keyFormula:
    'Утверждение: I am / He, She, It is / We, You, They are | Отрицание: am not / isn\'t / aren\'t | Вопрос: Am / Is / Are + подлежащее...?',
  markerWords: [
    'I am / I\'m',
    'he is / he\'s',
    'she is / she\'s',
    'it is / it\'s',
    'we are / we\'re',
    'they are / they\'re',
    'isn\'t / aren\'t',
    'Where is...? / Are you...?',
  ],
  pitfallsRu:
    '1. В русском языке мы говорим: "Мне холодно", "Мне 20 лет", "Я голоден". В английском это состояния человека с глаголом to be: "I am cold" (НЕ: "I have cold"), "I am 20 years old" (НЕ: "I have 20"), "I am hungry".\n' +
    '2. В вопросе глагол to be сам выходит на первое место! Вспомогательные глаголы do или does здесь НЕ НУЖНЫ: "Are you a student?" (НЕ: "Do you are a student?").\n' +
    '3. В кратких положительных ответах сокращения не используются: "Yes, I am" (НЕ: "Yes, I\'m"); "Yes, he is" (НЕ: "Yes, he\'s").',
  exercises: [
    {
      id: 'u23-ex-1',
      sentenceBefore: 'Hello! I ',
      sentenceAfter: ' Anna, and I am from Spain.',
      promptWord: '(be)',
      correctAnswer: 'am',
      acceptedAnswers: ['am', "'m"],
      ruleExplanationRu:
        'С местоимением "I" (я) в настоящем времени используется форма глагола to be — "am" (или сокращенно "\'m").',
      ruleFormula: 'I + am / I\'m',
      hintRu: 'Форма глагола to be для местоимения I (я).',
      russianTranslation: 'Привет! Я Анна, и я из Испании.',
    },
    {
      id: 'u23-ex-2',
      sentenceBefore: 'My brother ',
      sentenceAfter: ' twenty-two years old, and he is a university student.',
      promptWord: '(be)',
      correctAnswer: 'is',
      acceptedAnswers: ['is', "'s"],
      ruleExplanationRu:
        'Подлежащее "My brother" можно заменить на местоимение "he" (он, 3-е лицо ед. число). С he используется форма "is".',
      ruleFormula: 'he / she / it + is',
      hintRu: 'Брат (он, 3-е лицо единственного числа) -> глагол is.',
      russianTranslation: 'Моему брату двадцать два года, и он студент университета.',
    },
    {
      id: 'u23-ex-3',
      sentenceBefore: 'We ',
      sentenceAfter: ' very tired after our long walk in the park.',
      promptWord: '(be)',
      correctAnswer: 'are',
      acceptedAnswers: ['are', "'re"],
      ruleExplanationRu:
        'С местоимением "we" (мы) во множественном числе используется форма глагола to be — "are" (или сокращенно "\'re").',
      ruleFormula: 'we / you / they + are',
      hintRu: 'Местоимение we (мы) требует форму are.',
      russianTranslation: 'Мы очень устали после долгой прогулки по парку.',
    },
    {
      id: 'u23-ex-4',
      sentenceBefore: 'I ',
      sentenceAfter: ' hungry, but I am very thirsty.',
      promptWord: '(not / be)',
      correctAnswer: "am not",
      acceptedAnswers: ["am not", "'m not"],
      ruleExplanationRu:
        'Отрицательная форма для I образуется добавлением "not": "I am not" или сокращенно "I\'m not".',
      ruleFormula: 'I + am not / I\'m not',
      hintRu: 'Отрицание с местоимением I: am not или \'m not.',
      russianTranslation: 'Я не голоден, но очень хочу пить.',
    },
    {
      id: 'u23-ex-5',
      sentenceBefore: 'The weather is warm today; it ',
      sentenceAfter: ' cold at all.',
      promptWord: '(not / be)',
      correctAnswer: "isn't",
      acceptedAnswers: ["isn't", 'is not', "'s not"],
      ruleExplanationRu:
        'С местоимением "it" отрицание образуется как "is not" или чаще сокращенно "isn\'t" ("\'s not").',
      ruleFormula: 'it + is not / isn\'t',
      hintRu: 'Отрицание с it: isn\'t или is not.',
      russianTranslation: 'Погода сегодня теплая; совсем не холодно.',
    },
    {
      id: 'u23-ex-6',
      sentenceBefore: 'Tom and Sarah are on holiday, so they ',
      sentenceAfter: ' at the office today.',
      promptWord: '(not / be)',
      correctAnswer: "aren't",
      acceptedAnswers: ["aren't", 'are not', "'re not"],
      ruleExplanationRu:
        'Подлежащее "Tom and Sarah" — это они (they). Отрицание: "are not" или сокращенно "aren\'t".',
      ruleFormula: 'they + are not / aren\'t',
      hintRu: 'Они (Tom and Sarah) во множественном числе в отрицании: aren\'t.',
      russianTranslation: 'Том и Сара в отпуске, поэтому их нет сегодня в офисе.',
    },
    {
      id: 'u23-ex-7',
      sentenceBefore: '',
      sentenceAfter: ' you ready to order your lunch, or do you need more time?',
      promptWord: '(be)',
      correctAnswer: 'Are',
      acceptedAnswers: ['Are', 'are'],
      ruleExplanationRu:
        'В вопросе с местоимением "you" глагол "Are" выходит на первое место перед подлежащим.',
      ruleFormula: 'Are + you + ...?',
      hintRu: 'Вопрос к you: вынесите Are на первое место.',
      russianTranslation: 'Вы готовы заказать обед или вам нужно еще время?',
    },
    {
      id: 'u23-ex-8',
      sentenceBefore: '',
      sentenceAfter: ' your father at home right now, or is he still at work?',
      promptWord: '(be)',
      correctAnswer: 'Is',
      acceptedAnswers: ['Is', 'is'],
      ruleExplanationRu:
        'Подлежащее "your father" — это he (он). В вопросе форма "Is" выносится на первое место перед подлежащим.',
      ruleFormula: 'Is + he/she/it + ...?',
      hintRu: 'Твой папа (he) в вопросе требует Is в начале предложения.',
      russianTranslation: 'Твой папа сейчас дома или он еще на работе?',
    },
    {
      id: 'u23-ex-9',
      sentenceBefore: 'Where ',
      sentenceAfter: ' my car keys? I cannot find them anywhere.',
      promptWord: '(be)',
      correctAnswer: 'are',
      acceptedAnswers: ['are'],
      ruleExplanationRu:
        'Подлежащее "my car keys" стоит во множественном числе (они / they). В специальном вопросе после "Where" ставится "are".',
      ruleFormula: 'Where + are + множественное число...?',
      hintRu: 'Ключи (keys) во множественном числе, поэтому форма are.',
      russianTranslation: 'Где мои ключи от машины? Я нигде не могу их найти.',
    },
    {
      id: 'u23-ex-10',
      sentenceBefore: 'What time ',
      sentenceAfter: ' the next English lesson this afternoon?',
      promptWord: '(be)',
      correctAnswer: 'is',
      acceptedAnswers: ['is'],
      ruleExplanationRu:
        'Подлежащее "the next English lesson" — это единственное число (it). Поэтому после вопросительной фразы "What time" ставится "is".',
      ruleFormula: 'What time + is + единственное число...?',
      hintRu: 'Урок (lesson) в единственном числе (it) требует is.',
      russianTranslation: 'В какое время следующий урок английского сегодня днем?',
    },
    {
      id: 'u23-ex-11',
      sentenceBefore: 'Please close the window. I ',
      sentenceAfter: ' very cold.',
      promptWord: '(be)',
      correctAnswer: 'am',
      acceptedAnswers: ['am', "'m"],
      ruleExplanationRu:
        'В английском о чувстве холода говорят через to be: "I am cold" (мне холодно). С местоимением I используется am.',
      ruleFormula: 'I am / I\'m + cold',
      hintRu: 'Мне холодно = I am cold (с I пишется am или \'m).',
      russianTranslation: 'Пожалуйста, закрой окно. Мне очень холодно.',
    },
    {
      id: 'u23-ex-12',
      sentenceBefore: 'The shoes look nice, but they ',
      sentenceAfter: ' very comfortable to walk in.',
      promptWord: '(not / be)',
      correctAnswer: "aren't",
      acceptedAnswers: ["aren't", 'are not'],
      ruleExplanationRu:
        'Подлежащее "they" (туфли). Отрицание образуется формой "are not" или "aren\'t".',
      ruleFormula: 'they + aren\'t / are not',
      hintRu: 'Отрицание для they (туфли): aren\'t или are not.',
      russianTranslation: 'Туфли выглядят красиво, но ходить в них не очень удобно.',
    },
    {
      id: 'u23-ex-13',
      sentenceBefore: 'Look at the sky! The dark clouds mean it ',
      sentenceAfter: ' going to rain soon.',
      promptWord: '(be)',
      correctAnswer: 'is',
      acceptedAnswers: ['is', "'s"],
      ruleExplanationRu:
        'С безличным местоимением "it" используется форма глагола to be — "is" (сокращенно "\'s").',
      ruleFormula: 'it + is / it\'s',
      hintRu: 'С местоимением it форма глагола to be — is.',
      russianTranslation: 'Посмотри на небо! Темные тучи означают, что скоро пойдет дождь.',
    },
    {
      id: 'u23-ex-14',
      sentenceBefore: 'Why ',
      sentenceAfter: ' you so quiet this evening? Is everything okay?',
      promptWord: '(be)',
      correctAnswer: 'are',
      acceptedAnswers: ['are'],
      ruleExplanationRu:
        'В вопросительном предложении с местоимением "you" после слова "Why" ставится форма "are".',
      ruleFormula: 'Why + are + you + ...?',
      hintRu: 'В вопросе к you используется форма are.',
      russianTranslation: 'Почему ты такой тихий сегодня вечером? Все в порядке?',
    },
    {
      id: 'u23-ex-15',
      sentenceBefore: 'This coffee is too sweet; it ',
      sentenceAfter: ' good for my diet.',
      promptWord: '(not / be)',
      correctAnswer: "isn't",
      acceptedAnswers: ["isn't", 'is not', "'s not"],
      ruleExplanationRu:
        'С местоимением "it" отрицание пишется как "isn\'t" или "is not".',
      ruleFormula: 'it + isn\'t / is not',
      hintRu: 'Отрицание от is: isn\'t или is not.',
      russianTranslation: 'Этот кофе слишком сладкий; он не подходит для моей диеты.',
    },
    {
      id: 'u23-ex-16',
      sentenceBefore: 'How old ',
      sentenceAfter: ' your grandparents? They look so healthy and energetic!',
      promptWord: '(be)',
      correctAnswer: 'are',
      acceptedAnswers: ['are'],
      ruleExplanationRu:
        'Подлежащее "your grandparents" (твои бабушка и дедушка) стоит во множественном числе (they). Поэтому в вопросе используется "are".',
      ruleFormula: 'How old + are + they...?',
      hintRu: 'Бабушка и дедушка (grandparents) — множественное число (they), поэтому are.',
      russianTranslation: 'Сколько лет твоим бабушке и дедушке? Они выглядят такими здоровыми и энергичными!',
    },
    {
      id: 'u23-ex-17',
      sentenceBefore: 'Do not worry about the luggage; we ',
      sentenceAfter: ' in a hurry.',
      promptWord: '(not / be)',
      correctAnswer: "aren't",
      acceptedAnswers: ["aren't", 'are not', "'re not"],
      ruleExplanationRu:
        'С местоимением "we" отрицание образуется как "aren\'t" или "are not".',
      ruleFormula: 'we + aren\'t / are not',
      hintRu: 'Отрицание с we: aren\'t или are not.',
      russianTranslation: 'Не беспокойся о багаже; мы не спешим.',
    },
    {
      id: 'u23-ex-18',
      sentenceBefore: '',
      sentenceAfter: ' this your notebook on the kitchen table, or is it mine?',
      promptWord: '(be)',
      correctAnswer: 'Is',
      acceptedAnswers: ['Is', 'is'],
      ruleExplanationRu:
        'Подлежащее "this notebook" стоит в единственном числе (it). Вопрос начинается с глагола "Is".',
      ruleFormula: 'Is + this + существительное...?',
      hintRu: 'Вопрос о предмете в единственном числе: начните с Is.',
      russianTranslation: 'Это твоя тетрадь на кухонном столе или моя?',
    },
    {
      id: 'u23-ex-19',
      sentenceBefore: 'I am an architect, and my two sisters ',
      sentenceAfter: ' schoolteachers.',
      promptWord: '(be)',
      correctAnswer: 'are',
      acceptedAnswers: ['are'],
      ruleExplanationRu:
        'Подлежащее "my two sisters" (мои две сестры) — это множественное число (they). Форма глагола — "are".',
      ruleFormula: 'множественное число + are',
      hintRu: 'Две сестры (they) требуют форму are.',
      russianTranslation: 'Я архитектор, а две мои сестры — школьные учительницы.',
    },
    {
      id: 'u23-ex-20',
      sentenceBefore: 'Excuse me, ',
      sentenceAfter: ' the museum open on Sunday mornings?',
      promptWord: '(be)',
      correctAnswer: 'is',
      acceptedAnswers: ['is', 'Is'],
      ruleExplanationRu:
        'Подлежащее "the museum" — единственное число (it). Вопрос требует формы "is" перед подлежащим.',
      ruleFormula: 'is + the museum + ...?',
      hintRu: 'Музей (it) в вопросе требует форму is.',
      russianTranslation: 'Простите, музей открыт по воскресеньям утром?',
    },
    {
      id: 'u23-ex-21',
      sentenceBefore: 'I promise I ',
      sentenceAfter: ' angry with you; I am just very tired.',
      promptWord: '(not / be)',
      correctAnswer: "am not",
      acceptedAnswers: ["am not", "'m not"],
      ruleExplanationRu:
        'Отрицание с местоимением I: "am not" или сокращенно "\'m not".',
      ruleFormula: 'I + am not / \'m not',
      hintRu: 'Отрицание с I: am not или \'m not.',
      russianTranslation: 'Обещаю, я не злюсь на тебя; я просто очень устал.',
    },
    {
      id: 'u23-ex-22',
      sentenceBefore: 'The train station ',
      sentenceAfter: ' far from our hotel; we can easily walk there in five minutes.',
      promptWord: '(not / be)',
      correctAnswer: "isn't",
      acceptedAnswers: ["isn't", 'is not', "'s not"],
      ruleExplanationRu:
        'Подлежащее "The train station" (вокзал) — 3-е лицо ед. ч. (it). Отрицание: "isn\'t" или "is not".',
      ruleFormula: 'the station + isn\'t / is not',
      hintRu: 'Вокзал (it) в отрицании: isn\'t или is not.',
      russianTranslation: 'Вокзал находится недалеко от нашего отеля; мы легко дойдем туда пешком за пять минут.',
    },
  ],
};
