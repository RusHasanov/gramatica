import { CambridgeUnit } from '../cambridgeUnits';

export const unitThereIsSomeAny: CambridgeUnit = {
  id: 'unit-25-there-is-some-any',
  unitNumber: 25,
  level: 'A1-A2',
  book: 'Murphy Essential (Red)',
  category: 'Articles & Prepositions',
  titleEn: 'there is / there are, some / any (Affirmative, Negative, Questions)',
  titleRu: 'Конструкция there is / there are и слова some / any',
  ruleSummaryRu:
    '1. there is vs there are (указывают на наличие или нахождение предмета где-то):\n' +
    '   - there is (сокращенно there\'s): используется для одного предмета (ед. число) или для неисчисляемых понятий (молоко, сыр, вода, деньги, время):\n' +
    '     * There is a big supermarket across the street.\n' +
    '     * There is some milk in the fridge.\n' +
    '   - there are: используется для нескольких предметов (множественное число):\n' +
    '     * There are three bedrooms in the house.\n' +
    '     * There are some good books on the shelf.\n' +
    '   - Отрицание: there isn\'t (ед. число/неисчисляемое) и there aren\'t (мн. число):\n' +
    '     * There isn\'t any bread on the table.\n' +
    '     * There aren\'t any free tables in the restaurant.\n' +
    '   - Вопросы (глагол is или are выходит на первое место):\n' +
    '     * Is there a pharmacy near here? — Yes, there is. / No, there isn\'t.\n' +
    '     * Are there any apples left? — Yes, there are. / No, there aren\'t.\n\n' +
    '2. some vs any (несколько, немного, сколько-нибудь):\n' +
    '   - some: употребляется в утвердительных предложениях с неисчисляемыми существительными и существительными во мн. числе:\n' +
    '     * We bought some cheese and some apples.\n' +
    '     * Исключение: some используется в вежливых просьбах и предложениях угощения: "Would you like some tea?", "Can I have some water, please?".\n' +
    '   - any: употребляется в вопросах и отрицаниях:\n' +
    '     * Do you have any milk? / Are there any questions?\n' +
    '     * There aren\'t any shops open late / I don\'t have any money.',
  keyFormula:
    'Ед. ч. и неисчисляемые: There is / There isn\'t / Is there...? | Мн. ч.: There are / There aren\'t / Are there...? | Утверждение: some | Отрицание и вопрос: any | Угощение/просьба: Would you like some...?',
  markerWords: [
    'there is / there\'s',
    'there are',
    'there isn\'t / there aren\'t',
    'Is there...? / Are there...?',
    'some (в утверждениях)',
    'any (в вопросах и отрицаниях)',
    'Would you like some...?',
  ],
  pitfallsRu:
    '1. Не путайте "there is" и "it is": "There is a cafe near here" (где-то находится кафе — факт наличия). "It is very cosy" (оно очень уютное — свойство этого кафе).\n' +
    '2. Если перечисляется несколько предметов, форма глагола согласуется с ПЕРВЫМ существительным: "There is a table and four chairs" (так как сначала идет a table — ед. ч.).\n' +
    '3. В вопросах-угощениях "Would you like some coffee?" используется именно "some", а не "any", потому что мы предлагаем конкретную чашку кофе и ожидаем утвердительный ответ.',
  exercises: [
    {
      id: 'u25-ex-1',
      sentenceBefore: 'Look! ',
      sentenceAfter: ' a beautiful black cat sitting on the garden fence.',
      promptWord: '(there is / there are)',
      correctAnswer: 'There is',
      acceptedAnswers: ['There is', "There's", 'there is', "there's"],
      ruleExplanationRu:
        'Подлежащее "a beautiful black cat" стоит в единственном числе (одна кошка), поэтому используется конструкция "There is" (или "There\'s").',
      ruleFormula: 'There is + единственное число',
      hintRu: 'Одна кошка (a cat) в единственном числе -> There is или There\'s.',
      russianTranslation: 'Посмотри! На садовом заборе сидит красивая черная кошка.',
    },
    {
      id: 'u25-ex-2',
      sentenceBefore: 'In our new neighbourhood, ',
      sentenceAfter: ' two lovely green parks where children can play safely.',
      promptWord: '(there is / there are)',
      correctAnswer: 'there are',
      acceptedAnswers: ['there are', 'There are'],
      ruleExplanationRu:
        'Существительное "two lovely green parks" стоит во множественном числе (два парка), поэтому используется "there are".',
      ruleFormula: 'there are + множественное число',
      hintRu: 'Два парка (parks) — множественное число, требуется there are.',
      russianTranslation: 'В нашем новом районе есть два прекрасных зеленых парка, где дети могут безопасно играть.',
    },
    {
      id: 'u25-ex-3',
      sentenceBefore: 'I am going to the bakery because there isn’t ',
      sentenceAfter: ' bread left in the kitchen.',
      promptWord: '(some / any)',
      correctAnswer: 'any',
      acceptedAnswers: ['any'],
      ruleExplanationRu:
        'В отрицательных предложениях со словом "isn\'t" вместо some используется "any": there isn\'t any bread (нет никакого хлеба).',
      ruleFormula: 'отрицание (not) + any + неисчисляемое/мн. число',
      hintRu: 'Отрицательное предложение (there isn\'t) требует any.',
      russianTranslation: 'Я иду в булочную, потому что на кухне не осталось хлеба.',
    },
    {
      id: 'u25-ex-4',
      sentenceBefore: 'We bought ',
      sentenceAfter: ' fresh strawberries and oranges at the farmers’ market this morning.',
      promptWord: '(some / any)',
      correctAnswer: 'some',
      acceptedAnswers: ['some'],
      ruleExplanationRu:
        'В утвердительном предложении перед существительными во множественном числе (strawberries, oranges) используется "some" (несколько, немного).',
      ruleFormula: 'утверждение + some + мн. число',
      hintRu: 'Утвердительное предложение о покупке клубники требует some.',
      russianTranslation: 'Мы купили немного свежей клубники и апельсинов на фермерском рынке сегодня утром.',
    },
    {
      id: 'u25-ex-5',
      sentenceBefore: 'Excuse me, ',
      sentenceAfter: ' a chemist or pharmacy near this railway station?',
      promptWord: '(is there / are there)',
      correctAnswer: 'is there',
      acceptedAnswers: ['is there', 'Is there'],
      ruleExplanationRu:
        'Вопрос о наличии одного объекта в единственном числе ("a chemist", аптека) строится через "is there": Is there a chemist...?',
      ruleFormula: 'Is there + a/an + ед. число...?',
      hintRu: 'Аптека (a chemist) в единственном числе: вопрос начинается с is there.',
      russianTranslation: 'Простите, есть ли аптека рядом с этим железнодорожным вокзалом?',
    },
    {
      id: 'u25-ex-6',
      sentenceBefore: '',
      sentenceAfter: ' any questions about the homework before we finish the lesson?',
      promptWord: '(is there / are there)',
      correctAnswer: 'Are there',
      acceptedAnswers: ['Are there', 'are there'],
      ruleExplanationRu:
        'Существительное "questions" стоит во множественном числе (вопросы). Вопрос начинается с "Are there".',
      ruleFormula: 'Are there + any + множественное число...?',
      hintRu: 'Вопросы (questions) во множественном числе: Are there any questions...?',
      russianTranslation: 'Есть ли какие-нибудь вопросы по домашнему заданию, прежде чем мы закончим урок?',
    },
    {
      id: 'u25-ex-7',
      sentenceBefore: 'The fridge is completely empty; ',
      sentenceAfter: ' any eggs or butter for breakfast.',
      promptWord: "(there isn't / there aren't)",
      correctAnswer: "there aren't",
      acceptedAnswers: ["there aren't", 'there are not', 'There aren\'t', 'There are not'],
      ruleExplanationRu:
        'Первое существительное в перечислении "eggs" стоит во множественном числе (яйца). В отрицании используется "there aren\'t any eggs".',
      ruleFormula: "there aren't + any + множественное число",
      hintRu: 'Яйца (eggs) во множественном числе: there aren\'t any eggs.',
      russianTranslation: 'Холодильник совершенно пуст; на завтрак нет яиц и масла.',
    },
    {
      id: 'u25-ex-8',
      sentenceBefore: 'Do you have ',
      sentenceAfter: ' brothers or sisters living in the same town as you?',
      promptWord: '(some / any)',
      correctAnswer: 'any',
      acceptedAnswers: ['any'],
      ruleExplanationRu:
        'В вопросительных предложениях с исчисляемыми существительными во множественном числе используется "any": Do you have any brothers...?',
      ruleFormula: 'вопрос + any + мн. число',
      hintRu: 'В вопросительном предложении о братьях и сестрах используется any.',
      russianTranslation: 'У тебя есть братья или сестры, живущие в одном городе с тобой?',
    },
    {
      id: 'u25-ex-9',
      sentenceBefore: 'You look thirsty after running. Would you like ',
      sentenceAfter: ' cold apple juice?',
      promptWord: '(some / any)',
      correctAnswer: 'some',
      acceptedAnswers: ['some'],
      ruleExplanationRu:
        'Исключение: в вежливых предложениях угощения с конструкцией "Would you like...?" используется "some", а не "any".',
      ruleFormula: 'Would you like + some + неисчисляемое/мн. число?',
      hintRu: 'Вежливое предложение напитка (угощение) требует слова some.',
      russianTranslation: 'Ты выглядишь истомленным жаждой после пробежки. Хочешь холодного яблочного сока?',
    },
    {
      id: 'u25-ex-10',
      sentenceBefore: 'Be quiet, please! ',
      sentenceAfter: ' a sleeping baby in the next room.',
      promptWord: '(there is / there are)',
      correctAnswer: 'There is',
      acceptedAnswers: ['There is', "There's", 'there is', "there's"],
      ruleExplanationRu:
        'Подлежащее "a sleeping baby" стоит в единственном числе (один ребенок), поэтому используется "There is" или "There\'s".',
      ruleFormula: 'There is + a + ед. число',
      hintRu: 'Один спящий малыш (a baby) — форма There is или There\'s.',
      russianTranslation: 'Потише, пожалуйста! В соседней комнате спит ребенок.',
    },
    {
      id: 'u25-ex-11',
      sentenceBefore: 'At the international conference, ',
      sentenceAfter: ' more than three hundred scientists from twenty countries.',
      promptWord: '(there is / there are)',
      correctAnswer: 'there are',
      acceptedAnswers: ['there are', 'There are'],
      ruleExplanationRu:
        'Существительное "scientists" (ученые) стоит во множественном числе (более трехсот ученых), поэтому используется "there are".',
      ruleFormula: 'there are + мн. число',
      hintRu: 'Более трехсот ученых (scientists) — множественное число, требуется there are.',
      russianTranslation: 'На международной конференции присутствуют более трехсот ученых из двадцати стран.',
    },
    {
      id: 'u25-ex-12',
      sentenceBefore: 'I checked my bag, but there ',
      sentenceAfter: ' money in my wallet to buy the ticket.',
      promptWord: '(be / no / some / any)',
      correctAnswer: 'was no',
      acceptedAnswers: ['was no', 'is no', "isn't any", "wasn't any"],
      ruleExplanationRu:
        'Для неисчисляемого слова money можно сказать "there is no money" или "there isn\'t any money" (или в прошлом was no / wasn\'t any).',
      ruleFormula: 'there is/was + no money',
      hintRu: 'Денег нет (слово money неисчисляемое): is no или isn\'t any.',
      russianTranslation: 'Я проверил сумку, но в моем кошельке нет денег на покупку билета.',
    },
    {
      id: 'u25-ex-13',
      sentenceBefore: 'Could you give me ',
      sentenceAfter: ' advice on how to improve my spoken English pronunciation?',
      promptWord: '(some / any)',
      correctAnswer: 'some',
      acceptedAnswers: ['some'],
      ruleExplanationRu:
        'В вежливых просьбах с "Could you give me...?" / "Can I have...?" используется слово "some": give me some advice.',
      ruleFormula: 'вежливая просьба + some + неисчисляемое',
      hintRu: 'Вежливая просьба дать совет: Could you give me some advice...?',
      russianTranslation: 'Не могли бы вы дать мне совет по улучшению произношения в разговорном английском?',
    },
    {
      id: 'u25-ex-14',
      sentenceBefore: 'I am sorry, but there ',
      sentenceAfter: ' any petrol left in the tank; we must stop at the next station.',
      promptWord: "(isn't / aren't)",
      correctAnswer: "isn't",
      acceptedAnswers: ["isn't", 'is not'],
      ruleExplanationRu:
        'Существительное "petrol" (бензин) — неисчисляемое (ед. число), поэтому отрицание строится через "there isn\'t any petrol".',
      ruleFormula: "there isn't + any + неисчисляемое",
      hintRu: 'Бензин (petrol) — неисчисляемое, поэтому isn\'t.',
      russianTranslation: 'Извините, но в баке не осталось бензина; нам нужно остановиться на следующей заправке.',
    },
    {
      id: 'u25-ex-15',
      sentenceBefore: '',
      sentenceAfter: ' any good Italian restaurants in this part of town?',
      promptWord: '(is there / are there)',
      correctAnswer: 'Are there',
      acceptedAnswers: ['Are there', 'are there'],
      ruleExplanationRu:
        'Существительное "restaurants" (рестораны) стоит во множественном числе. Вопрос начинается со слов "Are there any...".',
      ruleFormula: 'Are there + any + множественное число...?',
      hintRu: 'Рестораны (restaurants) — множественное число, вопрос: Are there.',
      russianTranslation: 'Есть ли хорошие итальянские рестораны в этой части города?',
    },
    {
      id: 'u25-ex-16',
      sentenceBefore: 'We have ',
      sentenceAfter: ' free time before the train arrives, so we can visit the cafe.',
      promptWord: '(some / any)',
      correctAnswer: 'some',
      acceptedAnswers: ['some'],
      ruleExplanationRu:
        'В утвердительном предложении перед неисчисляемым существительным "free time" (свободное время) используется "some": have some free time.',
      ruleFormula: 'утверждение + some + неисчисляемое',
      hintRu: 'Утвердительное предложение (у нас есть немного времени): some.',
      russianTranslation: 'У нас есть немного свободного времени до прибытия поезда, поэтому мы можем зайти в кафе.',
    },
    {
      id: 'u25-ex-17',
      sentenceBefore: 'It is a small village; ',
      sentenceAfter: ' only one post office and a bakery here.',
      promptWord: '(there is / there are)',
      correctAnswer: 'there is',
      acceptedAnswers: ['there is', "there's", 'There is', "There's"],
      ruleExplanationRu:
        'При перечислении глагол согласуется с первым предметом: "only one post office" (единственное число), поэтому используется "there is" ("there\'s").',
      ruleFormula: 'there is + a single item (one post office)',
      hintRu: 'Только одно почтовое отделение (one post office) — ед. число: there is.',
      russianTranslation: 'Это маленькая деревня; здесь только одно почтовое отделение и булочная.',
    },
    {
      id: 'u25-ex-18',
      sentenceBefore: 'There aren’t ',
      sentenceAfter: ' letters for you in today’s mail delivery.',
      promptWord: '(some / any)',
      correctAnswer: 'any',
      acceptedAnswers: ['any'],
      ruleExplanationRu:
        'В отрицательном предложении с "aren\'t" перед существительным во множественном числе используется "any": there aren\'t any letters.',
      ruleFormula: "aren't + any + мн. число",
      hintRu: 'Отрицание (aren\'t) требует слова any: aren\'t any letters.',
      russianTranslation: 'В сегодняшней почте нет писем для вас.',
    },
    {
      id: 'u25-ex-19',
      sentenceBefore: '',
      sentenceAfter: ' a good dental clinic on the main high street?',
      promptWord: '(is there / are there)',
      correctAnswer: 'Is there',
      acceptedAnswers: ['Is there', 'is there'],
      ruleExplanationRu:
        'Вопрос о наличии одной стоматологической клиники (a clinic — ед. ч.) начинается с "Is there".',
      ruleFormula: 'Is there + a + ед. число...?',
      hintRu: 'Одна стоматологическая клиника в вопросе: Is there...?',
      russianTranslation: 'Есть ли хорошая стоматологическая клиника на главной улице?',
    },
    {
      id: 'u25-ex-20',
      sentenceBefore: 'In our company office, ',
      sentenceAfter: ' twenty modern computers and two colour printers.',
      promptWord: '(there is / there are)',
      correctAnswer: 'there are',
      acceptedAnswers: ['there are', 'There are'],
      ruleExplanationRu:
        'Существительное "twenty modern computers" (двадцать компьютеров) стоит во множественном числе, поэтому используется "there are".',
      ruleFormula: 'there are + множественное число',
      hintRu: 'Двадцать компьютеров (computers) — множественное число, поэтому there are.',
      russianTranslation: 'В офисе нашей компании двадцать современных компьютеров и два цветных принтера.',
    },
    {
      id: 'u25-ex-21',
      sentenceBefore: 'I cannot write the message because I do not have ',
      sentenceAfter: ' paper or a pen.',
      promptWord: '(some / any)',
      correctAnswer: 'any',
      acceptedAnswers: ['any'],
      ruleExplanationRu:
        'Отрицание "do not have" требует слова "any" перед неисчисляемым словом paper: do not have any paper.',
      ruleFormula: 'do not have + any + неисчисляемое',
      hintRu: 'Отрицание (do not have) требует any: do not have any paper.',
      russianTranslation: 'Я не могу написать сообщение, потому что у меня нет бумаги или ручки.',
    },
    {
      id: 'u25-ex-22',
      sentenceBefore: 'Can I have ',
      sentenceAfter: ' sugar in my coffee, please?',
      promptWord: '(some / any)',
      correctAnswer: 'some',
      acceptedAnswers: ['some'],
      ruleExplanationRu:
        'В вежливой просьбе "Can I have...?" используется слово "some" (Can I have some sugar, please?).',
      ruleFormula: 'Can I have + some + неисчисляемое?',
      hintRu: 'Вежливая просьба положить сахар требует слова some.',
      russianTranslation: 'Можно мне немного сахара в кофе, пожалуйста?',
    },
  ],
};
