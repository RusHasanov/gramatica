import { CambridgeUnit } from '../cambridgeUnits';

export const unitPresentSimpleBasic: CambridgeUnit = {
  id: 'unit-24-present-simple-basic',
  unitNumber: 24,
  level: 'A1-A2',
  book: 'Murphy Essential (Red)',
  category: 'Tenses',
  titleEn: 'Present Simple: I work / he works / do / does / don’t / doesn’t',
  titleRu: 'Настоящее простое время (Present Simple): утверждения, отрицания и вопросы',
  ruleSummaryRu:
    'Present Simple используется для регулярных действий, привычек, хобби и постоянных фактов (то, что происходит вообще, каждый день, обычно, часто).\n\n' +
    '1. Утверждение:\n' +
    '   - С местоимениями I / you / we / they глагол берется в начальной форме: I work, we live in London, they play tennis.\n' +
    '   - С местоимениями he / she / it к глаголу ОБЯЗАТЕЛЬНО добавляется окончание -s или -es:\n' +
    '     * Обычные глаголы: work -> works, live -> lives, read -> reads.\n' +
    '     * После -ch, -sh, -ss, -x, -o: watch -> watches, wash -> washes, pass -> passes, go -> goes, do -> does.\n' +
    '     * Согласный + y переходит в -ies: study -> studies, fly -> flies (но play -> plays, buy -> buys).\n' +
    '     * Исключение: have -> has (He has a car).\n\n' +
    '2. Отрицание (появляются вспомогательные глаголы don\'t или doesn\'t):\n' +
    '   - I / you / we / they + don\'t (do not) + глагол: I don\'t drink coffee.\n' +
    '   - He / she / it + doesn\'t (does not) + глагол БЕЗ буквы -s: He doesn\'t work on Sundays. (Буква -s "убежала" в does!).\n\n' +
    '3. Вопросы (вспомогательный глагол Do или Does выходит в самое начало перед подлежащим):\n' +
    '   - Do + you / we / they + глагол: Do you speak English? — Yes, I do. / No, I don\'t.\n' +
    '   - Does + he / she / it + глагол БЕЗ -s: Does she play the piano? — Yes, she does. / No, she doesn\'t.\n' +
    '   - С вопросительными словами: Where do you live? What time does the shop open?',
  keyFormula:
    'Утверждение: I/we/they + V1 | He/she/it + V-s/-es | Отрицание: don\'t / doesn\'t + V1 | Вопрос: Do / Does + подлежащее + V1?',
  markerWords: [
    'always (всегда)',
    'usually (обычно)',
    'often (часто)',
    'sometimes (иногда)',
    'never (никогда)',
    'every day / every week (каждый день / неделю)',
    'on Mondays (по понедельникам)',
  ],
  pitfallsRu:
    '1. Главная ошибка новичков: забывать букву -s у местоимений he/she/it: "He work in a bank" — ошибка; правильно: "He works".\n' +
    '2. В отрицаниях и вопросах после doesn\'t или does смысловой глагол теряет букву -s: "He doesn\'t works" — ошибка; правильно: "He doesn\'t work".\n' +
    '3. Не путайте to be и обычные глаголы: нельзя говорить "I am work in a bank" или "Do you are happy?". Если есть действие (работать, читать, жить) — используйте Present Simple с do/does!',
  exercises: [
    {
      id: 'u24-ex-1',
      sentenceBefore: 'My brother Alex ',
      sentenceAfter: ' in a large computer company in the city centre.',
      promptWord: '(work)',
      correctAnswer: 'works',
      acceptedAnswers: ['works'],
      ruleExplanationRu:
        'Подлежащее "Alex" — это он (he, 3-е лицо ед. число). В Present Simple к глаголу прибавляется окончание -s: work -> works.',
      ruleFormula: 'he/she/it + V-s',
      hintRu: 'Alex (он) в настоящем времени требует окончания -s у глагола work.',
      russianTranslation: 'Мой брат Алекс работает в крупной компьютерной компании в центре города.',
    },
    {
      id: 'u24-ex-2',
      sentenceBefore: 'I always ',
      sentenceAfter: ' two cups of green tea with honey every morning.',
      promptWord: '(drink)',
      correctAnswer: 'drink',
      acceptedAnswers: ['drink'],
      ruleExplanationRu:
        'С местоимением "I" (я) глагол используется в начальной форме без каких-либо окончаний: I drink.',
      ruleFormula: 'I + V1 (начальная форма)',
      hintRu: 'С местоимением I глагол остается в базовой форме: drink.',
      russianTranslation: 'Я всегда выпиваю две чашки зеленого чая с медом каждое утро.',
    },
    {
      id: 'u24-ex-3',
      sentenceBefore: 'My sister Emma is very hardworking; she ',
      sentenceAfter: ' French and German at university.',
      promptWord: '(study)',
      correctAnswer: 'studies',
      acceptedAnswers: ['studies'],
      ruleExplanationRu:
        'Глагол study оканчивается на согласную букву "d" + "y". В форме he/she/it буква "y" меняется на "i" и добавляется -es: study -> studies.',
      ruleFormula: 'согласный + y -> -ies (study -> studies)',
      hintRu: 'С Emma (она) глагол study меняет букву y на -ies: studies.',
      russianTranslation: 'Моя сестра Эмма очень трудолюбива; она изучает французский и немецкий языки в университете.',
    },
    {
      id: 'u24-ex-4',
      sentenceBefore: 'My parents do not drink tea, but they ',
      sentenceAfter: ' fresh coffee every day.',
      promptWord: '(like)',
      correctAnswer: 'like',
      acceptedAnswers: ['like'],
      ruleExplanationRu:
        'Подлежащее "My parents" (мои родители) — это они (they). С they глагол пишется в начальной форме без буквы -s.',
      ruleFormula: 'they + V1',
      hintRu: 'Родители (they) — множественное число, глагол без окончания: like.',
      russianTranslation: 'Мои родители не пьют чай, но они любят свежий кофе каждый день.',
    },
    {
      id: 'u24-ex-5',
      sentenceBefore: 'Tom is very careful with his money; he ',
      sentenceAfter: ' buy expensive clothes.',
      promptWord: '(not / buy)',
      correctAnswer: "doesn't buy",
      acceptedAnswers: ["doesn't buy", 'does not buy'],
      ruleExplanationRu:
        'С местоимением "he" отрицание образуется при помощи "doesn\'t" (does not) + начальная форма глагола без -s: doesn\'t buy.',
      ruleFormula: 'he/she/it + doesn\'t + V1',
      hintRu: 'Отрицание для he: вспомогательный глагол doesn\'t + buy.',
      russianTranslation: 'Том очень бережлив с деньгами; он не покупает дорогую одежду.',
    },
    {
      id: 'u24-ex-6',
      sentenceBefore: 'We live near the office, so we ',
      sentenceAfter: ' need a car to get to work.',
      promptWord: '(not / need)',
      correctAnswer: "don't need",
      acceptedAnswers: ["don't need", 'do not need'],
      ruleExplanationRu:
        'С местоимением "we" (мы) отрицание образуется с помощью "don\'t" (do not) + базовая форма глагола: don\'t need.',
      ruleFormula: 'we + don\'t + V1',
      hintRu: 'Отрицание с местоимением we: don\'t need.',
      russianTranslation: 'Мы живем рядом с офисом, поэтому нам не нужна машина, чтобы добираться на работу.',
    },
    {
      id: 'u24-ex-7',
      sentenceBefore: '',
      sentenceAfter: ' you play tennis on weekends, or do you prefer swimming?',
      promptWord: '(you / play)',
      correctAnswer: 'Do you play',
      acceptedAnswers: ['Do you play', 'do you play'],
      ruleExplanationRu:
        'Вопрос к местоимению "you" в Present Simple начинается со вспомогательного глагола "Do" + подлежащее + смысловой глагол: Do you play...?',
      ruleFormula: 'Do + you + V1...?',
      hintRu: 'Общий вопрос к you: вспомогательный глагол Do + you + play.',
      russianTranslation: 'Ты играешь в теннис по выходным или предпочитаешь плавание?',
    },
    {
      id: 'u24-ex-8',
      sentenceBefore: '',
      sentenceAfter: ' your brother live in London or in Manchester?',
      promptWord: '(your brother / live)',
      correctAnswer: 'Does your brother live',
      acceptedAnswers: ['Does your brother live', 'does your brother live'],
      ruleExplanationRu:
        'Подлежащее "your brother" — это он (he). В вопросе используется вспомогательный глагол "Does", а смысловой глагол live остается без окончания -s!',
      ruleFormula: 'Does + he + V1...?',
      hintRu: 'Вопрос о брате (he): вспомогательный Does + your brother + live (без -s).',
      russianTranslation: 'Твой брат живет в Лондоне или в Манчестере?',
    },
    {
      id: 'u24-ex-9',
      sentenceBefore: 'Where ',
      sentenceAfter: ' during your summer holidays?',
      promptWord: '(you / go)',
      correctAnswer: 'do you go',
      acceptedAnswers: ['do you go'],
      ruleExplanationRu:
        'В специальном вопросе со словом "Where" порядок слов: Where + вспомогательный глагол "do" + подлежащее "you" + глагол "go".',
      ruleFormula: 'Where + do + you + V1...?',
      hintRu: 'Специальный вопрос: Where + do you go...?',
      russianTranslation: 'Куда ты обычно ездишь во время летнего отпуска?',
    },
    {
      id: 'u24-ex-10',
      sentenceBefore: 'What time ',
      sentenceAfter: ' in the morning on weekdays?',
      promptWord: '(the bank / open)',
      correctAnswer: 'does the bank open',
      acceptedAnswers: ['does the bank open'],
      ruleExplanationRu:
        'Подлежащее "the bank" — это оно (it, ед. число). Порядок слов: What time + does + the bank + open (без -s)?',
      ruleFormula: 'What time + does + it + V1...?',
      hintRu: 'Банк (it) требует вспомогательный глагол does: does the bank open.',
      russianTranslation: 'В какое время банк открывается по утрам в будние дни?',
    },
    {
      id: 'u24-ex-11',
      sentenceBefore: 'My father is a doctor, and he ',
      sentenceAfter: ' care of patients in a children’s hospital.',
      promptWord: '(take)',
      correctAnswer: 'takes',
      acceptedAnswers: ['takes'],
      ruleExplanationRu:
        'С местоимением "he" (отец) глагол take получает окончание -s: takes care of.',
      ruleFormula: 'he + V-s (take -> takes)',
      hintRu: 'Отец (he) в Present Simple: глагол take получает окончание -s (takes).',
      russianTranslation: 'Мой отец — врач, и он заботится о пациентах в детской больнице.',
    },
    {
      id: 'u24-ex-12',
      sentenceBefore: 'David does not watch TV very often, but he ',
      sentenceAfter: ' the news online every morning.',
      promptWord: '(read)',
      correctAnswer: 'reads',
      acceptedAnswers: ['reads'],
      ruleExplanationRu:
        'Подлежащее David (он, he) требует окончания -s у глагола read: reads.',
      ruleFormula: 'he + reads',
      hintRu: 'David (he) в утвердительном предложении: глагол reads.',
      russianTranslation: 'Дэвид не часто смотрит телевизор, но каждое утро читает новости онлайн.',
    },
    {
      id: 'u24-ex-13',
      sentenceBefore: 'I am vegetarian, so I ',
      sentenceAfter: ' eat meat or fish.',
      promptWord: '(not / eat)',
      correctAnswer: "don't eat",
      acceptedAnswers: ["don't eat", 'do not eat'],
      ruleExplanationRu:
        'С местоимением I отрицание образуется через "don\'t eat" (do not eat).',
      ruleFormula: 'I + don\'t + V1',
      hintRu: 'Отрицание с местоимением I: don\'t eat.',
      russianTranslation: 'Я вегетарианец, поэтому я не ем мясо или рыбу.',
    },
    {
      id: 'u24-ex-14',
      sentenceBefore: 'Sarah loves baking; she often ',
      sentenceAfter: ' delicious chocolate cookies for our family.',
      promptWord: '(make)',
      correctAnswer: 'makes',
      acceptedAnswers: ['makes'],
      ruleExplanationRu:
        'С местоимением "she" (Sarah) глагол make получает окончание -s: makes.',
      ruleFormula: 'she + makes',
      hintRu: 'Sarah (she) требует букву -s у глагола: makes.',
      russianTranslation: 'Сара обожает печь; она часто делает вкусное шоколадное печенье для нашей семьи.',
    },
    {
      id: 'u24-ex-15',
      sentenceBefore: 'The postman usually ',
      sentenceAfter: ' the morning letters at 8:30 AM.',
      promptWord: '(deliver)',
      correctAnswer: 'delivers',
      acceptedAnswers: ['delivers'],
      ruleExplanationRu:
        'Подлежащее "The postman" (почтальон) — 3-е лицо ед. ч. (he). Глагол принимает окончание -s: delivers.',
      ruleFormula: 'he + delivers',
      hintRu: 'Почтальон (he) в Present Simple: delivers.',
      russianTranslation: 'Почтальон обычно доставляет утренние письма в 8:30 утра.',
    },
    {
      id: 'u24-ex-16',
      sentenceBefore: 'My colleagues are very friendly; they never ',
      sentenceAfter: ' about small problems.',
      promptWord: '(complain)',
      correctAnswer: 'complain',
      acceptedAnswers: ['complain'],
      ruleExplanationRu:
        'Подлежащее "My colleagues" (коллеги) — они (they, мн. число). Глагол используется в базовой форме: complain.',
      ruleFormula: 'they + complain',
      hintRu: 'Коллеги (they) — множественное число, глагол без окончания: complain.',
      russianTranslation: 'Мои коллеги очень дружелюбны; они никогда не жалуются по мелочам.',
    },
    {
      id: 'u24-ex-17',
      sentenceBefore: '',
      sentenceAfter: ' your parents speak any foreign languages?',
      promptWord: '(your parents / speak)',
      correctAnswer: 'Do your parents speak',
      acceptedAnswers: ['Do your parents speak', 'do your parents speak'],
      ruleExplanationRu:
        'Подлежащее "your parents" (твои родители) — это они (they, мн. ч.). Вопрос строится с вспомогательным глаголом "Do": Do your parents speak...?',
      ruleFormula: 'Do + they + V1...?',
      hintRu: 'Родители (they) во множественном числе требуют вспомогательный глагол Do.',
      russianTranslation: 'Твои родители говорят на каких-нибудь иностранных языках?',
    },
    {
      id: 'u24-ex-18',
      sentenceBefore: 'My little nephew loves cartoons, but he ',
      sentenceAfter: ' scary films.',
      promptWord: '(not / watch)',
      correctAnswer: "doesn't watch",
      acceptedAnswers: ["doesn't watch", 'does not watch'],
      ruleExplanationRu:
        'Подлежащее "he" (племянник). Отрицание: "doesn\'t watch" (глагол watch без окончания -s, так как окончание уже в does).',
      ruleFormula: 'he + doesn\'t + V1',
      hintRu: 'Отрицание для he: doesn\'t watch.',
      russianTranslation: 'Мой маленький племянник обожает мультфильмы, но не смотрит страшные фильмы.',
    },
    {
      id: 'u24-ex-19',
      sentenceBefore: 'How often ',
      sentenceAfter: ' the dentist for a routine check-up?',
      promptWord: '(you / visit)',
      correctAnswer: 'do you visit',
      acceptedAnswers: ['do you visit'],
      ruleExplanationRu:
        'Вопрос к местоимению "you" со словосочетанием "How often": How often + do + you + visit...?',
      ruleFormula: 'How often + do + you + V1...?',
      hintRu: 'Вопрос к you: How often + do you visit...?',
      russianTranslation: 'Как часто ты посещаешь стоматолога для планового осмотра?',
    },
    {
      id: 'u24-ex-20',
      sentenceBefore: 'Michael has a guitar, but he ',
      sentenceAfter: ' it very often.',
      promptWord: '(not / play)',
      correctAnswer: "doesn't play",
      acceptedAnswers: ["doesn't play", 'does not play'],
      ruleExplanationRu:
        'С местоимением "he" (Michael) отрицание строится с помощью "doesn\'t" + базовая форма "play": doesn\'t play.',
      ruleFormula: 'he + doesn\'t + play',
      hintRu: 'Отрицание с he: doesn\'t play.',
      russianTranslation: 'У Майкла есть гитара, но он не играет на ней очень часто.',
    },
    {
      id: 'u24-ex-21',
      sentenceBefore: 'The local market ',
      sentenceAfter: ' fresh fruits, vegetables, and warm bread every morning.',
      promptWord: '(sell)',
      correctAnswer: 'sells',
      acceptedAnswers: ['sells'],
      ruleExplanationRu:
        'Подлежащее "The local market" (рынок) — единственное число (it). Глагол принимает окончание -s: sells.',
      ruleFormula: 'it + sells',
      hintRu: 'Рынок (it) в Present Simple: глагол sells с буквой -s.',
      russianTranslation: 'Местный рынок продает свежие фрукты, овощи и теплый хлеб каждое утро.',
    },
    {
      id: 'u24-ex-22',
      sentenceBefore: '',
      sentenceAfter: ' it rain a lot in your hometown during the autumn?',
      promptWord: '(does / it)',
      correctAnswer: 'Does it',
      acceptedAnswers: ['Does it', 'does it'],
      ruleExplanationRu:
        'Вопрос о погоде с безличным местоимением "it" строится с помощью вспомогательного глагола "Does": Does it rain...?',
      ruleFormula: 'Does + it + V1...?',
      hintRu: 'Вопрос о погоде с местоимением it начинается с Does: Does it rain...?',
      russianTranslation: 'В твоем родном городе часто идет дождь осенью?',
    },
  ],
};
