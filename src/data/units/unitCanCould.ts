import { CambridgeUnit } from '../cambridgeUnits';

export const unitCanCould: CambridgeUnit = {
  id: 'unit-26-can-could',
  unitNumber: 26,
  level: 'A1-A2',
  book: 'Murphy Essential (Red)',
  category: 'Modals',
  titleEn: 'can / can’t / could (Ability, Permission, Polite Requests)',
  titleRu: 'Модальные глаголы can, can’t, could: умения, возможности и вежливые просьбы',
  ruleSummaryRu:
    '1. can (могу, умею):\n' +
    '   - Выражает физическую или умственную способность, а также возможность что-то сделать прямо сейчас или вообще: I can swim, she can speak Spanish.\n' +
    '   - Форма can одинакова для всех лиц (I, you, he, she, it, we, they). Окончание -s НЕ добавляется: He can play chess (НЕ "He cans").\n' +
    '   - После can смысловой глагол всегда стоит в начальной форме БЕЗ частицы "to": I can drive (НЕ "I can to drive").\n\n' +
    '2. can\'t / cannot (не могу, не умею):\n' +
    '   - Отрицание: I can\'t find my keys / She can\'t come to the party tonight.\n\n' +
    '3. could / couldn\'t (умел, мог в прошлом):\n' +
    '   - Прошедшая форма от can — could: When I was six, I could already read books.\n' +
    '   - Отрицание в прошлом — couldn\'t (could not): Yesterday I was ill, so I couldn\'t go to school.\n\n' +
    '4. Вежливые просьбы с could и can:\n' +
    '   - Для вежливой просьбы в настоящем времени используется "Could you...?" (звучит вежливее, чем Can): Could you open the door, please? / Could I have a glass of water?',
  keyFormula:
    'Утверждение: can + V1 (без to) | Отрицание: can\'t / cannot + V1 | Прошедшее: could / couldn\'t + V1 | Просьба: Could you + V1...?',
  markerWords: [
    'can (умею, могу)',
    "can't (не умею, не могу)",
    'could (мог, умел в прошлом)',
    "couldn't (не мог, не умел в прошлом)",
    'Could you please...?',
    'Can I...?',
  ],
  pitfallsRu:
    '1. После can и could НИКОГДА не ставится частица "to": "I can swim" (НЕ: "I can to swim").\n' +
    '2. У глагола can нет формы с окончанием -s: "She can speak" (НЕ: "She cans speak").\n' +
    '3. В вопросах can и could сами выходят на первое место перед подлежащим без вспомогательных глаголов do/does/did: "Can you help me?" (НЕ: "Do you can help me?").',
  exercises: [
    {
      id: 'u26-ex-1',
      sentenceBefore: 'David is very musical; he ',
      sentenceAfter: ' play the piano and the guitar very well.',
      promptWord: '(can / could)',
      correctAnswer: 'can',
      acceptedAnswers: ['can'],
      ruleExplanationRu:
        'Глагол "can" выражает умение в настоящем времени. Он одинаков для всех лиц (he can play).',
      ruleFormula: 'he + can + V1',
      hintRu: 'Способность/умение в настоящем времени: can.',
      russianTranslation: 'Дэвид очень музыкален; он умеет играть на пианино и гитаре очень хорошо.',
    },
    {
      id: 'u26-ex-2',
      sentenceBefore: 'I am sorry, but I ',
      sentenceAfter: ' hear you because the music in this cafe is too loud.',
      promptWord: '(not / can)',
      correctAnswer: "can't",
      acceptedAnswers: ["can't", 'cannot'],
      ruleExplanationRu:
        'Отрицательная форма "can\'t" (или "cannot") выражает невозможность совершить действие прямо сейчас.',
      ruleFormula: 'I + can\'t + V1',
      hintRu: 'Отрицание: не могу тебя слышать -> can\'t или cannot.',
      russianTranslation: 'Извини, но я не слышу тебя, потому что музыка в этом кафе слишком громкая.',
    },
    {
      id: 'u26-ex-3',
      sentenceBefore: '',
      sentenceAfter: ' you please pass me the salt from the other side of the table?',
      promptWord: '(could / do)',
      correctAnswer: 'Could',
      acceptedAnswers: ['Could', 'could', 'Can', 'can'],
      ruleExplanationRu:
        'Для вежливой просьбы используется конструкция "Could you please...?" (или "Can you...?").',
      ruleFormula: 'Could you + V1...?',
      hintRu: 'Вежливая просьба за столом начинается со слова Could.',
      russianTranslation: 'Не могли бы вы передать мне соль с другой стороны стола, пожалуйста?',
    },
    {
      id: 'u26-ex-4',
      sentenceBefore: 'When my grandmother was twenty years old, she ',
      sentenceAfter: ' run five kilometres without feeling tired.',
      promptWord: '(can / past)',
      correctAnswer: 'could',
      acceptedAnswers: ['could'],
      ruleExplanationRu:
        'В прошедшем времени (when she was twenty) способность выражается формой "could" (прошедшее время от can).',
      ruleFormula: 'could + V1 (способность в прошлом)',
      hintRu: 'Прошедшее время (когда бабушке было двадцать): форма could.',
      russianTranslation: 'Когда моей бабушке было двадцать лет, она могла пробежать пять километров и не устать.',
    },
    {
      id: 'u26-ex-5',
      sentenceBefore: 'We looked for my car keys for half an hour, but we ',
      sentenceAfter: ' find them anywhere.',
      promptWord: '(not / can / past)',
      correctAnswer: "couldn't",
      acceptedAnswers: ["couldn't", 'could not'],
      ruleExplanationRu:
        'Отрицание физической возможности в прошедшем времени передается через "couldn\'t" (could not).',
      ruleFormula: 'subject + couldn\'t + V1',
      hintRu: 'Не могли найти в прошлом: couldn\'t find.',
      russianTranslation: 'Мы искали мои ключи от машины полчаса, но так и не смогли их нигде найти.',
    },
    {
      id: 'u26-ex-6',
      sentenceBefore: '',
      sentenceAfter: ' you speak any other foreign languages besides English and Spanish?',
      promptWord: '(can)',
      correctAnswer: 'Can',
      acceptedAnswers: ['Can', 'can'],
      ruleExplanationRu:
        'Вопрос об умении строится выносом "Can" на первое место перед подлежащим "you".',
      ruleFormula: 'Can + you + V1...?',
      hintRu: 'Вопрос о навыке: начните с Can.',
      russianTranslation: 'Ты умеешь говорить на каких-нибудь других иностранных языках, кроме английского и испанского?',
    },
    {
      id: 'u26-ex-7',
      sentenceBefore: 'Tom broke his right arm last week, so he ',
      sentenceAfter: ' write his essays by hand.',
      promptWord: '(not / can)',
      correctAnswer: "can't",
      acceptedAnswers: ["can't", 'cannot'],
      ruleExplanationRu:
        'Из-за сломанной руки Том сейчас не может писать: отрицание "can\'t" (cannot).',
      ruleFormula: 'he + can\'t + V1',
      hintRu: 'Сейчас не может писать: can\'t или cannot.',
      russianTranslation: 'Том сломал правую руку на прошлой неделе, поэтому сейчас он не может писать эссе от руки.',
    },
    {
      id: 'u26-ex-8',
      sentenceBefore: 'Excuse me, sir, ',
      sentenceAfter: ' I borrow your blue pen for one minute, please?',
      promptWord: '(could / can)',
      correctAnswer: 'Could',
      acceptedAnswers: ['Could', 'could', 'Can', 'can'],
      ruleExplanationRu:
        'Вежливая просьба о разрешении взять предмет: "Could I borrow...?" или "Can I borrow...?".',
      ruleFormula: 'Could / Can + I + V1...?',
      hintRu: 'Вежливая просьба одолжить ручку: Could I / Can I.',
      russianTranslation: 'Простите, сэр, могу я одолжить вашу синюю ручку на одну минуту, пожалуйста?',
    },
    {
      id: 'u26-ex-9',
      sentenceBefore: 'My little sister is only four years old, so she ',
      sentenceAfter: ' swim yet without armbands.',
      promptWord: '(not / can)',
      correctAnswer: "can't",
      acceptedAnswers: ["can't", 'cannot'],
      ruleExplanationRu:
        'Неумение в настоящем времени: can\'t (cannot) swim.',
      ruleFormula: 'she + can\'t + V1',
      hintRu: 'Пока еще не умеет: can\'t или cannot.',
      russianTranslation: 'Моей младшей сестре всего четыре года, поэтому она пока не умеет плавать без нарукавников.',
    },
    {
      id: 'u26-ex-10',
      sentenceBefore: 'Last night I was so worried about the exam that I ',
      sentenceAfter: ' sleep at all.',
      promptWord: '(not / can / past)',
      correctAnswer: "couldn't",
      acceptedAnswers: ["couldn't", 'could not'],
      ruleExplanationRu:
        'Прошедшее время (last night): невозможность уснуть выражается формой "couldn\'t" (could not).',
      ruleFormula: 'I + couldn\'t + sleep',
      hintRu: 'Прошедшее время (прошлой ночью не смог уснуть): couldn\'t.',
      russianTranslation: 'Прошлой ночью я так волновался из-за экзамена, что совсем не мог уснуть.',
    },
    {
      id: 'u26-ex-11',
      sentenceBefore: 'Birds ',
      sentenceAfter: ' fly, but penguins and ostriches cannot.',
      promptWord: '(can)',
      correctAnswer: 'can',
      acceptedAnswers: ['can'],
      ruleExplanationRu:
        'Общее природное умение и способность выражается глаголом "can": birds can fly.',
      ruleFormula: 'birds + can + fly',
      hintRu: 'Умеют летать: can.',
      russianTranslation: 'Птицы умеют летать, а пингвины и страусы не могут.',
    },
    {
      id: 'u26-ex-12',
      sentenceBefore: '',
      sentenceAfter: ' you tell me the way to the central library, please?',
      promptWord: '(could / can)',
      correctAnswer: 'Could',
      acceptedAnswers: ['Could', 'could', 'Can', 'can'],
      ruleExplanationRu:
        'Вежливый вопрос к прохожему на улице строится через "Could you tell me...?" или "Can you tell me...?".',
      ruleFormula: 'Could you + tell me...?',
      hintRu: 'Вежливый вопрос прохожему: Could you tell me...?',
      russianTranslation: 'Не могли бы вы подсказать мне дорогу к центральной библиотеке, пожалуйста?',
    },
    {
      id: 'u26-ex-13',
      sentenceBefore: 'I have lost my glasses, so I ',
      sentenceAfter: ' read the small print in this newspaper.',
      promptWord: '(not / can)',
      correctAnswer: "can't",
      acceptedAnswers: ["can't", 'cannot'],
      ruleExplanationRu:
        'Невозможность читать прямо сейчас без очков: "can\'t" (cannot).',
      ruleFormula: 'I + can\'t + read',
      hintRu: 'Не могу читать без очков: can\'t или cannot.',
      russianTranslation: 'Я потерял очки, поэтому не могу прочитать мелкий шрифт в этой газете.',
    },
    {
      id: 'u26-ex-14',
      sentenceBefore: 'When my uncle was young, he was very athletic; he ',
      sentenceAfter: ' swim across the entire lake.',
      promptWord: '(can / past)',
      correctAnswer: 'could',
      acceptedAnswers: ['could'],
      ruleExplanationRu:
        'Физическая способность в прошлом (when my uncle was young): форма "could".',
      ruleFormula: 'he + could + swim',
      hintRu: 'Способность в прошлом (когда дядя был молод): could.',
      russianTranslation: 'Когда мой дядя был молод, он был очень спортивным; он мог переплыть все озеро.',
    },
    {
      id: 'u26-ex-15',
      sentenceBefore: 'The restaurant was completely booked, so we ',
      sentenceAfter: ' get a table for dinner.',
      promptWord: '(not / can / past)',
      correctAnswer: "couldn't",
      acceptedAnswers: ["couldn't", 'could not'],
      ruleExplanationRu:
        'Прошедшее время (the restaurant was booked): мы не смогли получить столик — "couldn\'t" (could not).',
      ruleFormula: 'we + couldn\'t + get',
      hintRu: 'Прошедшее время: не смогли занять столик -> couldn\'t.',
      russianTranslation: 'Ресторан был полностью забронирован, поэтому мы не смогли получить столик на ужин.',
    },
    {
      id: 'u26-ex-16',
      sentenceBefore: 'Anna has lived in Rome for three years, so she ',
      sentenceAfter: ' understand everyday Italian conversations easily.',
      promptWord: '(can)',
      correctAnswer: 'can',
      acceptedAnswers: ['can'],
      ruleExplanationRu:
        'Умение понимать язык в настоящее время: can understand.',
      ruleFormula: 'she + can + understand',
      hintRu: 'Умеет понимать: can understand.',
      russianTranslation: 'Анна живет в Риме три года, поэтому легко понимает повседневные разговоры на итальянском.',
    },
    {
      id: 'u26-ex-17',
      sentenceBefore: '',
      sentenceAfter: ' you ride a bicycle when you were seven years old?',
      promptWord: '(could / past)',
      correctAnswer: 'Could',
      acceptedAnswers: ['Could', 'could'],
      ruleExplanationRu:
        'Вопрос о способности в прошлом (when you were seven): глагол "Could" выносится в начало предложения.',
      ruleFormula: 'Could + you + ride... in the past?',
      hintRu: 'Вопрос о навыке в детстве (в 7 лет): Could you ride...?',
      russianTranslation: 'Ты умел кататься на велосипеде, когда тебе было семь лет?',
    },
    {
      id: 'u26-ex-18',
      sentenceBefore: 'This suitcase is too heavy for me; I ',
      sentenceAfter: ' lift it by myself.',
      promptWord: '(not / can)',
      correctAnswer: "can't",
      acceptedAnswers: ["can't", 'cannot'],
      ruleExplanationRu:
        'Физическая невозможность поднять чемодан прямо сейчас: can\'t lift.',
      ruleFormula: 'I + can\'t + lift',
      hintRu: 'Не могу поднять сейчас: can\'t или cannot.',
      russianTranslation: 'Этот чемодан слишком тяжелый для меня; я не могу поднять его в одиночку.',
    },
    {
      id: 'u26-ex-19',
      sentenceBefore: '',
      sentenceAfter: ' you turn down the television a little bit? I am on the telephone.',
      promptWord: '(could / can)',
      correctAnswer: 'Could',
      acceptedAnswers: ['Could', 'could', 'Can', 'can'],
      ruleExplanationRu:
        'Вежливая просьба убавить громкость: "Could you turn down...?" или "Can you turn down...?".',
      ruleFormula: 'Could you + V1...?',
      hintRu: 'Вежливая просьба: Could you / Can you.',
      russianTranslation: 'Не мог бы ты сделать телевизор немного потише? Я говорю по телефону.',
    },
    {
      id: 'u26-ex-20',
      sentenceBefore: 'The fog was so thick yesterday morning that drivers ',
      sentenceAfter: ' see more than ten metres ahead.',
      promptWord: '(not / can / past)',
      correctAnswer: "couldn't",
      acceptedAnswers: ["couldn't", 'could not'],
      ruleExplanationRu:
        'Прошедшее время (yesterday morning): водители не могли видеть сквозь туман — "couldn\'t" (could not).',
      ruleFormula: 'drivers + couldn\'t + see',
      hintRu: 'Не могли видеть вчера утром: couldn\'t.',
      russianTranslation: 'Вчера утром туман был настолько густым, что водители не могли видеть дальше чем на десять метров вперед.',
    },
    {
      id: 'u26-ex-21',
      sentenceBefore: 'Do not worry about the luggage; my father ',
      sentenceAfter: ' give us a lift in his car.',
      promptWord: '(can)',
      correctAnswer: 'can',
      acceptedAnswers: ['can'],
      ruleExplanationRu:
        'Возможность помочь в настоящем: my father can give us a lift.',
      ruleFormula: 'he + can + give',
      hintRu: 'Отец может подвезти: can give.',
      russianTranslation: 'Не беспокойся о багаже; мой папа может подвезти нас на своей машине.',
    },
    {
      id: 'u26-ex-22',
      sentenceBefore: 'I had a terrible sore throat on Monday, so I ',
      sentenceAfter: ' sing in the school choir rehearsal.',
      promptWord: '(not / can / past)',
      correctAnswer: "couldn't",
      acceptedAnswers: ["couldn't", 'could not'],
      ruleExplanationRu:
        'Невозможность петь в прошедший понедельник из-за боли в горле: "couldn\'t" (could not).',
      ruleFormula: 'I + couldn\'t + sing',
      hintRu: 'Прошедшее время (в понедельник не смог петь): couldn\'t.',
      russianTranslation: 'В понедельник у меня ужасно болело горло, поэтому я не смог петь на репетиции школьного хора.',
    },
  ],
};
