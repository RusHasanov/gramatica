import { ReadingItem } from '../../types/reading';

const reading: ReadingItem = {
  id: 'at-the-conference',
  title: 'At the Conference',
  author: 'Cambridge Drill Editorial',
  source: 'Original graded text',
  license: 'Own content',
  level: 'B1-B2',
  topic: 'Работа',
  readingMinutes: 3,
  wordCount: 285,
  descriptionRu: 'Деловой текст уровня B1-B2 о международной технологической конференции, ключевых докладах и профессиональном нетворкинге.',
  paragraphs: [
    {
      sentences: [
        {
          en: 'Last Thursday, Elena arrived at the Queen Elizabeth II Centre in Westminster to participate in an international tech conference.',
          ru: 'В прошлый четверг Елена прибыла в конференц-центр королевы Елизаветы II в Вестминстере для участия в международной технологической конференции.',
        },
        {
          en: 'After completing her registration at the reception desk, she received her attendee badge and a comprehensive event schedule.',
          ru: 'Завершив регистрацию на стойке информации, она получила свой бейдж участника и подробное расписание мероприятий.',
        },
        {
          en: 'More than five hundred professionals from across Europe had gathered to discuss future trends in software engineering and artificial intelligence.',
          ru: 'Более пятисот специалистов со всей Европы собрались, чтобы обсудить будущие тенденции в разработке программного обеспечения и искусственном интеллекте.',
        },
      ],
    },
    {
      sentences: [
        {
          en: 'The opening keynote presentation delivered valuable insights into modern cloud architecture.',
          ru: 'Вступительный пленарный доклад предоставил ценные выводы о современной облачной архитектуре.',
        },
        {
          en: 'The speaker highlighted that companies must adapt rapidly to emerging technologies if they wish to remain competitive in global markets.',
          ru: 'Докладчик подчеркнул, что компаниям необходимо быстро адаптироваться к новым технологиям, если они хотят оставаться конкурентоспособными на глобальных рынках.',
        },
        {
          en: 'Elena took detailed notes on her tablet and prepared two questions for the subsequent panel discussion.',
          ru: 'Елена делала подробные заметки на планшете и подготовила два вопроса для последующей панельной дискуссии.',
        },
      ],
    },
    {
      sentences: [
        {
          en: 'During the scheduled networking lunch, Elena met several engineers who were developing innovative educational platforms.',
          ru: 'Во время запланированного обеда для нетворкинга Елена познакомилась с несколькими инженерами, разрабатывавшими инновационные образовательные платформы.',
        },
        {
          en: 'They exchanged digital business cards and agreed to collaborate on an open-source project later this year.',
          ru: 'Они обменялись цифровыми визитками и договорились о совместной работе над проектом с открытым исходным кодом позже в этом году.',
        },
        {
          en: 'Face-to-face interaction provided a unique opportunity to build trust and discuss intricate technical challenges that are difficult to resolve remotely.',
          ru: 'Личное общение предоставило уникальную возможность укрепить доверие и обсудить сложные технические задачи, которые трудно решить удалённо.',
        },
      ],
    },
    {
      sentences: [
        {
          en: 'By the time the final workshop concluded, Elena felt inspired and energised.',
          ru: 'К моменту окончания заключительного мастер-класса Елена чувствовала себя вдохновлённой и полной энергии.',
        },
        {
          en: 'Attending professional conferences requires significant preparation, but the acquired knowledge and connections make every minute worthwhile.',
          ru: 'Участие в профессиональных конференциях требует существенной подготовки, но полученные знания и контакты оправдывают каждую минуту.',
        },
      ],
    },
  ],
  glossary: {
    participate: { ru: 'участвовать, принимать участие', note: 'verb [B1]' },
    registration: { ru: 'регистрация', note: 'noun [B1]' },
    attendee: { ru: 'участник, присутствующий', note: 'noun [B2]' },
    comprehensive: { ru: 'всесторонний, подробный, исчерпывающий', note: 'adj [B2]' },
    insights: { ru: 'инсайты, ценные наблюдения, понимание сути', note: 'noun [B2]' },
    architecture: { ru: 'архитектура (в том числе ПО)', note: 'noun [B2]' },
    emerging: { ru: 'зарождающийся, развивающийся, новый', note: 'adj [B2]' },
    competitive: { ru: 'конкурентоспособный', note: 'adj [B1]' },
    subsequent: { ru: 'последующий, следующий далее', note: 'adj [B2]' },
    networking: { ru: 'нетворкинг, установление деловых связей', note: 'noun [B2]' },
    innovative: { ru: 'инновационный, передовой', note: 'adj [B2]' },
    collaborate: { ru: 'сотрудничать, работать совместно', note: 'verb [B2]' },
    intricate: { ru: 'сложный, запутанный, витиеватый', note: 'adj [B2/C1]' },
    worthwhile: { ru: 'стоящий, оправдывающий затраты', note: 'adj [B2]' },
    acquired: { ru: 'приобретённый, полученный', note: 'adj [B2]' },
    workshop: { ru: 'семинар, мастер-класс, практикум', note: 'noun [B1]' },
  },
  questions: [
    {
      question: 'Where did the conference take place?',
      answer: 'At the Queen Elizabeth II Centre in Westminster',
      acceptedAnswers: [
        'at the queen elizabeth ii centre in westminster',
        'queen elizabeth ii centre',
        'in westminster',
        'at the queen elizabeth ii centre',
      ],
      explanationRu: 'В первом предложении: «at the Queen Elizabeth II Centre in Westminster».',
    },
    {
      question: 'What did the opening keynote presentation focus on?',
      answer: 'Modern cloud architecture',
      acceptedAnswers: [
        'modern cloud architecture',
        'cloud architecture',
        'insights into modern cloud architecture',
      ],
      explanationRu: 'В тексте: «delivered valuable insights into modern cloud architecture».',
    },
    {
      question: 'What did Elena and the other engineers agree to do?',
      answer: 'To collaborate on an open-source project',
      acceptedAnswers: [
        'to collaborate on an open-source project',
        'collaborate on an open-source project',
        'collaborate on an open source project',
        'work on an open-source project',
      ],
      explanationRu: 'В тексте: «agreed to collaborate on an open-source project later this year».',
    },
  ],
  gapExercises: [
    {
      id: 'read-conf-01',
      sentenceBefore: 'More than five hundred professionals from across Europe',
      sentenceAfter: 'to discuss future trends in software engineering.',
      promptWord: '(gather)',
      correctAnswer: 'had gathered',
      acceptedAnswers: ['had gathered'],
      ruleExplanationRu: 'Past Perfect для действия, которое завершилось до указанного момента в прошлом (до прибытия Елены на конференцию).',
      ruleFormula: 'had + Past Participle (V3 / -ed)',
      hintRu: 'Действие сбора участников произошло раньше, чем Елена прибыла на конференцию.',
      russianTranslation: 'Более пятисот специалистов со всей Европы собрались, чтобы обсудить будущие тенденции в разработке ПО.',
    },
    {
      id: 'read-conf-02',
      sentenceBefore: 'Elena took detailed notes on her tablet while the speaker',
      sentenceAfter: 'the new software architecture.',
      promptWord: '(explain)',
      correctAnswer: 'was explaining',
      acceptedAnswers: ['was explaining'],
      ruleExplanationRu: 'Past Continuous с союзом «while» для длительного фонового действия в прошлом.',
      ruleFormula: 'was / were + V-ing',
      hintRu: 'Союз «while» указывает на параллельное протяжённое действие в прошлом.',
      russianTranslation: 'Елена делала подробные заметки на планшете, пока спикер объяснял новую архитектуру программного обеспечения.',
    },
    {
      id: 'read-conf-03',
      sentenceBefore: 'They agreed to collaborate on a project and decided that they',
      sentenceAfter: 'online again the following Monday.',
      promptWord: '(meet)',
      correctAnswer: 'would meet',
      acceptedAnswers: ['would meet'],
      ruleExplanationRu: 'Future in the Past («would meet») при согласовании времён после прошедшего времени главного предложения («decided that...»).',
      ruleFormula: 'would + V (Future in the Past)',
      hintRu: 'После прошедшего времени в главном предложении «will» переходит в «would».',
      russianTranslation: 'Они договорились о совместной работе и решили, что снова встретятся онлайн в следующий понедельник.',
    },
    {
      id: 'read-conf-04',
      sentenceBefore: 'By the time the final workshop concluded, Elena',
      sentenceAfter: 'contacts with five prospective partners.',
      promptWord: '(already / establish)',
      correctAnswer: 'had already established',
      acceptedAnswers: ['had already established'],
      ruleExplanationRu: 'Past Perfect с предлогом времени «By the time + Past Simple».',
      ruleFormula: 'had + already + V3',
      hintRu: 'Конструкция «By the time ... concluded» требует Past Perfect.',
      russianTranslation: 'К моменту окончания заключительного мастер-класса Елена уже наладила контакты с пятью потенциальными партнёрами.',
    },
  ],
};

export default reading;
