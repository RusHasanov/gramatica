import { ReadingItem } from '../../types/reading';

const reading: ReadingItem = {
  id: 'a-day-at-the-university',
  title: 'A Day at the University',
  author: 'Cambridge Drill Editorial',
  source: 'Original graded text',
  license: 'Own content',
  level: 'A1-A2',
  topic: 'Учёба',
  readingMinutes: 3,
  wordCount: 265,
  descriptionRu: 'Адаптированный рассказ о распорядке студента: лекции, библиотека, работа над заданиями и подготовка к экзаменам.',
  paragraphs: [
    {
      sentences: [
        {
          en: 'Liam is a first-year student at a large university in Manchester.',
          ru: 'Лиам — первокурсник в крупном университете в Манчестере.',
        },
        {
          en: 'Every weekday morning, his alarm rings at seven o’clock, and he quickly gets ready for his classes.',
          ru: 'Каждое утро в будни его будильник звенит в семь часов, и он быстро собирается на занятия.',
        },
        {
          en: 'The university campus has modern buildings, a vast library, and several green courtyards.',
          ru: 'Студенческий кампус включает современные здания, огромную библиотеку и несколько зелёных внутренних двориков.',
        },
        {
          en: 'Today, Liam is attending his first lecture in the main hall at nine o’clock.',
          ru: 'Сегодня в девять часов Лиам посещает свою первую лекцию в главном зале.',
        },
      ],
    },
    {
      sentences: [
        {
          en: 'His professor speaks clearly and explains the difficult concepts with interesting real-life examples.',
          ru: 'Его профессор говорит понятно и объясняет сложные понятия на интересных жизненных примерах.',
        },
        {
          en: 'Liam takes neat notes in his notebook because he wants to revise them before the exam.',
          ru: 'Лиам аккуратно делает записи в тетради, потому что хочет повторить их перед экзаменом.',
        },
        {
          en: 'During the break, he meets his classmates in the student cafeteria to drink coffee and discuss the upcoming group assignment.',
          ru: 'Во время перемены он встречается с одногруппниками в студенческой столовой, чтобы выпить кофе и обсудить предстоящее групповое задание.',
        },
      ],
    },
    {
      sentences: [
        {
          en: 'In the afternoon, Liam usually spends two quiet hours in the library.',
          ru: 'Днём Лиам обычно проводит два спокойных часа в библиотеке.',
        },
        {
          en: 'The atmosphere there is completely silent, which helps him concentrate on reading academic articles.',
          ru: 'Атмосфера там совершенно тихая, что помогает ему сосредоточиться на чтении академических статей.',
        },
        {
          en: 'He has already borrowed three reference books for his history presentation on Friday.',
          ru: 'Он уже взял три справочника для своей презентации по истории в пятницу.',
        },
      ],
    },
    {
      sentences: [
        {
          en: 'By five o’clock, Liam finishes his studies and walks back to his dormitory.',
          ru: 'К пяти часам Лиам заканчивает учёбу и возвращается в общежитие.',
        },
        {
          en: 'University life is busy, but he is enjoying every single day because he is learning so many new things.',
          ru: 'Университетская жизнь насыщена, но он наслаждается каждым днём, потому что узнаёт так много нового.',
        },
      ],
    },
  ],
  glossary: {
    university: { ru: 'университет', note: 'noun' },
    campus: { ru: 'студенческий городок, кампус', note: 'noun [B1]' },
    courtyards: { ru: 'внутренние дворы', note: 'noun [B2]' },
    attending: { ru: 'посещает, присутствует на', note: 'verb [B1]' },
    lecture: { ru: 'лекция', note: 'noun [B1]' },
    professor: { ru: 'профессор, преподаватель', note: 'noun [B1]' },
    concepts: { ru: 'понятия, концепции', note: 'noun [B2]' },
    revise: { ru: 'повторять (учебный материал)', note: 'verb [B1]' },
    assignment: { ru: 'учебное задание, проект', note: 'noun [B1]' },
    atmosphere: { ru: 'атмосфера, обстановка', note: 'noun [B1]' },
    concentrate: { ru: 'сосредоточиться, концентрироваться', note: 'verb [B1]' },
    academic: { ru: 'академический, учебный', note: 'adj [B1]' },
    presentation: { ru: 'презентация, доклад', note: 'noun [B1]' },
    dormitory: { ru: 'студенческое общежитие', note: 'noun [B1]' },
    reference: { ru: 'справочный (материал)', note: 'adj [B2]' },
    borrowed: { ru: 'взял во временное пользование (в библиотеке)', note: 'verb [B1]' },
  },
  questions: [
    {
      question: 'Where does Liam study?',
      answer: 'At a university in Manchester',
      acceptedAnswers: [
        'at a university in manchester',
        'in manchester',
        'university in manchester',
        'manchester university',
        'at manchester university',
      ],
      explanationRu: 'В первом предложении текста: «Liam is a first-year student at a large university in Manchester».',
    },
    {
      question: 'Why does Liam take neat notes during the lecture?',
      answer: 'To revise them before the exam',
      acceptedAnswers: [
        'to revise them before the exam',
        'he wants to revise them before the exam',
        'to revise before the exam',
        'for the exam',
        'to revise',
      ],
      explanationRu: 'В тексте: «because he wants to revise them before the exam».',
    },
    {
      question: 'How long does Liam spend in the library in the afternoon?',
      answer: 'Two hours',
      acceptedAnswers: ['two hours', '2 hours', 'two quiet hours'],
      explanationRu: 'В тексте: «Liam usually spends two quiet hours in the library».',
    },
  ],
  gapExercises: [
    {
      id: 'read-uni-01',
      sentenceBefore: 'Today, Liam',
      sentenceAfter: 'his first lecture in the main hall at nine o’clock.',
      promptWord: '(attend)',
      correctAnswer: 'is attending',
      acceptedAnswers: ['is attending'],
      ruleExplanationRu: 'Present Continuous для действия, происходящего сегодня / запланированного на конкретный день.',
      ruleFormula: 'am / is / are + V-ing',
      hintRu: 'Слово «Today» указывает на временное действие в настоящий период.',
      russianTranslation: 'Сегодня в девять часов Лиам посещает свою первую лекцию в главном зале.',
    },
    {
      id: 'read-uni-02',
      sentenceBefore: 'In the afternoon, Liam usually',
      sentenceAfter: 'two quiet hours in the library.',
      promptWord: '(spend)',
      correctAnswer: 'spends',
      acceptedAnswers: ['spends'],
      ruleExplanationRu: 'Present Simple для регулярного повторяющегося действия с маркером «usually». Окончание -s для 3-го лица ед. ч.',
      ruleFormula: 'He / She / It + V-s',
      hintRu: 'Маркер частотности «usually» требует Present Simple.',
      russianTranslation: 'Днём Лиам обычно проводит два спокойных часа в библиотеке.',
    },
    {
      id: 'read-uni-03',
      sentenceBefore: 'He has already',
      sentenceAfter: 'three reference books for his history presentation on Friday.',
      promptWord: '(borrow)',
      correctAnswer: 'borrowed',
      acceptedAnswers: ['borrowed'],
      ruleExplanationRu: 'Present Perfect с наречием «already». Формула: have/has + Past Participle (V3 / -ed).',
      ruleFormula: 'have / has + V3 (-ed)',
      hintRu: 'Слово «already» требует 3-ю форму глагола (Past Participle).',
      russianTranslation: 'Он уже взял три справочника для своей презентации по истории в пятницу.',
    },
    {
      id: 'read-uni-04',
      sentenceBefore: 'By five o’clock, Liam',
      sentenceAfter: 'his studies and walks back to his dormitory.',
      promptWord: '(finish)',
      correctAnswer: 'finishes',
      acceptedAnswers: ['finishes'],
      ruleExplanationRu: 'Present Simple для выражения регулярного распорядка дня. К глаголам на -sh добавляется -es.',
      ruleFormula: 'V + -es (после шипящих)',
      hintRu: 'Подлежащее Liam (he), глагол оканчивается на шипящий звук -sh.',
      russianTranslation: 'К пяти часам Лиам заканчивает учёбу и возвращается в общежитие.',
    },
  ],
};

export default reading;
