import { ReadingItem } from '../../types/reading';

const reading: ReadingItem = {
  id: 'asking-for-directions-in-london',
  title: 'Asking for Directions in London',
  author: 'Cambridge Drill Editorial',
  source: 'Original graded text',
  license: 'Own content',
  level: 'B1-B2',
  topic: 'Путешествия',
  readingMinutes: 3,
  wordCount: 290,
  descriptionRu: 'Адаптированный живой текст уровня B1-B2 об ориентировании в Лондоне, поездке в метро и вежливых вопросах прохожим.',
  paragraphs: [
    {
      sentences: [
        {
          en: 'When Marco stepped out of the historic King’s Cross station, the morning drizzle was gently covering the bustling London pavement.',
          ru: 'Когда Марко вышел из исторического вокзала Кингс-Кросс, утренний моросящий дождь мягко покрывал оживлённый лондонский тротуар.',
        },
        {
          en: 'He looked at his smartphone screen, but his battery had unexpectedly drained to barely three percent.',
          ru: 'Он посмотрел на экран смартфона, но его батарея неожиданно разрядилась почти до трёх процентов.',
        },
        {
          en: 'He needed to reach the British Library within twenty minutes, yet the winding streets and heavy traffic left him completely disoriented.',
          ru: 'Ему нужно было добраться до Британской библиотеки за двадцать минут, однако извилистые улицы и плотное движение совершенно дезориентировали его.',
        },
      ],
    },
    {
      sentences: [
        {
          en: 'Approaching an elderly pedestrian carrying a black umbrella, Marco politely inquired: “Excuse me, could you possibly tell me the quickest way to Euston Road?”',
          ru: 'Подойдя к пожилому пешеходу с чёрным зонтом, Марко вежливо спросил: «Простите, не могли бы вы подсказать мне самый быстрый путь к Юстон-роуд?»',
        },
        {
          en: 'The Londoner smiled warmly and provided crystal-clear directions with characteristic British courtesy.',
          ru: 'Лондонец тепло улыбнулся и дал предельно ясные указания с характерной британской вежливостью.',
        },
        {
          en: '“Go straight ahead past the modern office building, take the second turning on your left, and cross at the designated pedestrian crossing.”',
          ru: '«Идите прямо мимо современного офисного здания, поверните на втором повороте налево и перейдите дорогу по пешеходному переходу».',
        },
      ],
    },
    {
      sentences: [
        {
          en: 'Following the gentleman’s precise guidance, Marco soon spotted the distinctive red brick facade of St Pancras Renaissance Hotel.',
          ru: 'Следуя точным указаниям джентльмена, Марко вскоре заметил характерный фасад из красного кирпича отеля St Pancras Renaissance.',
        },
        {
          en: 'Nearby, an entrance to the Underground station offered an alternative route in case the weather deteriorated further.',
          ru: 'Рядом вход на станцию метро предлагал альтернативный маршрут на случай, если погода испортится ещё сильнее.',
        },
        {
          en: 'However, Marco decided to proceed on foot because walking through central London offered memorable glimpses of urban heritage.',
          ru: 'Однако Марко решил продолжить путь пешком, поскольку прогулка по центру Лондона открывала памятные виды на городское наследие.',
        },
      ],
    },
    {
      sentences: [
        {
          en: 'Ten minutes later, he reached the grand gates of the British Library precisely on time.',
          ru: 'Через десять минут он дошёл до парадных ворот Британской библиотеки точно вовремя.',
        },
        {
          en: 'Asking for directions in an unfamiliar city had not only solved his immediate dilemma but had also created a pleasant human connection.',
          ru: 'Обращение за подсказкой дороги в незнакомом городе не только решило его сиюминутную проблему, но и подарило приятное человеческое общение.',
        },
      ],
    },
  ],
  glossary: {
    drizzle: { ru: 'моросящий дождь, изморось', note: 'noun [B2]' },
    bustling: { ru: 'оживлённый, суетливый, шумный', note: 'adj [B2]' },
    pavement: { ru: 'тротуар (BrE)', note: 'noun [B1]' },
    drained: { ru: 'разрядилась, иссякла (о батарее)', note: 'verb [B2]' },
    disoriented: { ru: 'дезориентированный, сбитый с толку', note: 'adj [B2]' },
    pedestrian: { ru: 'пешеход', note: 'noun [B1]' },
    inquired: { ru: 'поинтересовался, спросил', note: 'verb [B2]' },
    courtesy: { ru: 'вежливость, учтивость', note: 'noun [B2/C1]' },
    designated: { ru: 'обозначенный, выделенный (о переходе)', note: 'adj [B2]' },
    distinctive: { ru: 'характерный, отличительный', note: 'adj [B2]' },
    facade: { ru: 'фасад здания', note: 'noun [B2]' },
    underground: { ru: 'метро (лондонская подземка, «the Tube»)', note: 'noun [B1]' },
    deteriorated: { ru: 'ухудшилась (о погоде, состоянии)', note: 'verb [B2/C1]' },
    proceed: { ru: 'продолжать движение, следовать далее', note: 'verb [B2]' },
    heritage: { ru: 'наследие (культурное, архитектурное)', note: 'noun [B2]' },
    dilemma: { ru: 'дилемма, затруднительное положение', note: 'noun [B2]' },
  },
  questions: [
    {
      question: 'Why couldn’t Marco use his smartphone for navigation?',
      answer: 'His battery had drained to three percent',
      acceptedAnswers: [
        'his battery had drained to three percent',
        'the battery was empty',
        'his battery had drained',
        'his battery was dead',
        'battery drained',
      ],
      explanationRu: 'В тексте: «his battery had unexpectedly drained to barely three percent».',
    },
    {
      question: 'Which landmark was Marco trying to reach?',
      answer: 'The British Library',
      acceptedAnswers: [
        'the british library',
        'british library',
      ],
      explanationRu: 'В тексте: «He needed to reach the British Library within twenty minutes».',
    },
    {
      question: 'Did Marco take the Underground or walk on foot?',
      answer: 'He walked on foot',
      acceptedAnswers: [
        'he walked on foot',
        'he walked',
        'on foot',
        'he decided to proceed on foot',
      ],
      explanationRu: 'В тексте: «However, Marco decided to proceed on foot».',
    },
  ],
  gapExercises: [
    {
      id: 'read-lon-01',
      sentenceBefore: 'When Marco arrived at the station, the morning drizzle',
      sentenceAfter: 'gently covering the pavement.',
      promptWord: '(be)',
      correctAnswer: 'was',
      acceptedAnswers: ['was'],
      ruleExplanationRu: 'Past Continuous (was + covering) для описания погоды и атмосферы на момент прибытия.',
      ruleFormula: 'was / were + V-ing',
      hintRu: 'Подлежащее «the morning drizzle» в единственном числе требует глагола «was».',
      russianTranslation: 'Когда Марко прибыл на вокзал, утренний моросящий дождь мягко покрывал тротуар.',
    },
    {
      id: 'read-lon-02',
      sentenceBefore: 'Marco approached the gentleman because his phone battery',
      sentenceAfter: 'completely flat.',
      promptWord: '(go)',
      correctAnswer: 'had gone',
      acceptedAnswers: ['had gone'],
      ruleExplanationRu: 'Past Perfect для действия, произошедшего раньше другого действия в прошлом (батарея разрядилась до того, как он подошёл к прохожему).',
      ruleFormula: 'had + V3 (Past Perfect)',
      hintRu: 'Действие разрядки произошло предшествующим образом.',
      russianTranslation: 'Марко подошёл к джентльмену, потому что батарея его телефона полностью разрядилась.',
    },
    {
      id: 'read-lon-03',
      sentenceBefore: '“Excuse me, could you possibly tell me where the British Library',
      sentenceAfter: '?”',
      promptWord: '(be)',
      correctAnswer: 'is',
      acceptedAnswers: ['is'],
      ruleExplanationRu: 'Косвенный вопрос (Indirect Question). В придаточном вопросе сохраняется прямой порядок слов: where + subject + verb (где библиотека находится сейчас).',
      ruleFormula: 'Could you tell me where + S + V?',
      hintRu: 'В вежливом косвенном вопросе порядок слов прямой (subject + is).',
      russianTranslation: '«Простите, не могли бы вы подсказать мне, где находится Британская библиотека?»',
    },
    {
      id: 'read-lon-04',
      sentenceBefore: 'Marco decided that he would walk rather than',
      sentenceAfter: 'the crowded underground train.',
      promptWord: '(take)',
      correctAnswer: 'take',
      acceptedAnswers: ['take'],
      ruleExplanationRu: 'Инфинитив без частицы «to» (bare infinitive) после конструкции «rather than».',
      ruleFormula: 'would rather / rather than + V',
      hintRu: 'После союза «rather than» используется начальная форма глагола без to.',
      russianTranslation: 'Марко решил, что пойдёт пешком, вместо того чтобы садиться на переполненный поезд метро.',
    },
  ],
};

export default reading;
