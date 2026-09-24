import { CambridgeUnit } from '../cambridgeUnits';

export const unitFamilyDailyRoutine: CambridgeUnit = {
  id: 'unit-40-family-daily-routine',
  unitNumber: 40,
  level: 'A1-A2',
  book: 'Real Life & Situational English',
  category: 'Real Life',
  titleEn: 'Family, Daily Routine & Small Talk: Work-Life, Weekends & Colleagues',
  titleRu: 'Семья, распорядок дня и small talk: дом, будни, выходные и беседы с коллегами',
  ruleSummaryRu:
    'Повседневное неформальное общение объединяет Present Simple (привычки и распорядок), наречия частотности, Past Simple (обсуждение прошедших выходных) и этикетные фразы small talk у кофемашины:\n\n' +
    '1. Рассказ о семье и родственниках (Family & Relations):\n' +
    '   - Члены семьи и факты (Present Simple): "My elder brother is an engineer; he lives in Bristol with his wife and two kids."\n' +
    '   - Отношения: "I get along well with my in-laws" (Я хорошо лажу со свекрами/тестями).\n' +
    '   - Сходство: "She takes after her mother" / "He looks like his father."\n\n' +
    '2. Распорядок дня и привычки (Daily Routine & Adverbs of Frequency):\n' +
    '   - Наречия частотности ставятся ПЕРЕД смысловым глаголом, но ПОСЛЕ глагола to be: "I usually wake up at 7:00 AM", "She is always on time."\n' +
    '   - Дорога на работу: "It takes me 40 minutes to commute to work by subway."\n' +
    '   - Отдых вечером: "In the evenings, we usually unwind and prepare dinner together."\n\n' +
    '3. Выходные: прошедшие и предстоящие (Weekends):\n' +
    '   - Вопрос о прошедших выходных (Past Simple): "How was your weekend?" / "What did you get up to over the weekend?"\n' +
    '   - Типичные активности: "We had a family barbecue", "I went hiking in the hills", "I slept in on Sunday."\n' +
    '   - Планы на следующие: "Do you have any plans for the weekend?"\n\n' +
    '4. Small Talk с коллегами на работе (Workplace Coffee Break Chat):\n' +
    '   - Как идет неделя: "How’s your week going so far?"\n' +
    '   - Погода и разделительные вопросы (Tag Questions): "Lovely weather today, isn’t it?" / "Terrible rain this morning, wasn’t it?"\n' +
    '   - Обсуждение новостей или кино: "Have you seen that new documentary everyone is talking about?"\n' +
    '   - Завершение пятницы: "Have a great weekend!" — "Thanks, you too! See you on Monday!"',
  keyFormula:
    'Рутина: usually/rarely + V1 | Семья: get along well with | Выходные: What did you do over the weekend? | Разделительный вопрос: Lovely day, isn\'t it?',
  markerWords: [
    'usually / hardly ever',
    'get along with',
    'sleep in',
    'commute to work',
    'how was your weekend',
    'how is your week going',
    'isn’t it / wasn’t it',
    'have a great weekend',
  ],
  pitfallsRu:
    '1. Место наречий частотности: наречия (always, usually, often, rarely, never) ставятся ПЕРЕД обычным глаголом ("I usually wake up"), но ПОСЛЕ глагола to be ("He is always happy").\n' +
    '2. "Sleep in" vs "Oversleep": "Sleep in" — это осознанно поспать подольше в выходной день для отдыха ("On Sundays I love to sleep in"). "Oversleep" — случайно проспать будильник и опоздать на работу.\n' +
    '3. Small talk: на вопрос "How are you?" или "How’s your week going?" в англоязычной культуре не принято вываливать глубокие личные проблемы. Ответ должен быть бодрым и вежливым: "Good, thanks! Busy, but going well. How about you?".\n' +
    '4. Ответ на пожелание: когда коллега говорит "Have a nice weekend!", естественный ответ: "You too!" или "Same to you!" (НЕ "Me too!").',
  exercises: [
    {
      id: 'u40-ex-1',
      sentenceBefore: 'My elder brother lives in Manchester with his wife, and he ',
      sentenceAfter: ' as a software developer.',
      promptWord: '(works: works / work / working)',
      correctAnswer: 'works',
      acceptedAnswers: ['works'],
      ruleExplanationRu:
        'Факты и постоянные профессии в Present Simple для 3-го лица единственного числа (he) требуют окончания -s к основе глагола: "he works".',
      ruleFormula: 'He / She + V1-s (permanent job / routine)',
      hintRu: 'Глагол с окончанием -s: works.',
      russianTranslation: 'Мой старший брат живет в Манчестере со своей женой и работает разработчиком программного обеспечения.',
    },
    {
      id: 'u40-ex-2',
      sentenceBefore: 'I get along very ',
      sentenceAfter: ' with my parents-in-law; we often have Sunday lunch together.',
      promptWord: '(well: well / good / nice)',
      correctAnswer: 'well',
      acceptedAnswers: ['well'],
      ruleExplanationRu:
        'Идиома взаимоотношений: "get along well with someone" (хорошо ладить с кем-то). Наречие "well" определяет глагол get along.',
      ruleFormula: 'get along well with + someone',
      hintRu: 'Наречие "хорошо": well.',
      russianTranslation: 'Я очень хорошо лажу со своими тестем и тещей (свекром и свекровью); мы часто обедаем вместе по воскресеньям.',
    },
    {
      id: 'u40-ex-3',
      sentenceBefore: 'On weekdays, my alarm clock goes off at 6:30, and I ',
      sentenceAfter: ' wake up immediately.',
      promptWord: '(usually: usually / usual / use)',
      correctAnswer: 'usually',
      acceptedAnswers: ['usually'],
      ruleExplanationRu:
        'Наречие частотности "usually" (обычно) ставится перед смысловым глаголом wake up в Present Simple.',
      ruleFormula: 'subject + usually + V1',
      hintRu: 'Наречие "обычно": usually.',
      russianTranslation: 'По будням мой будильник звонит в 6:30, и я обычно сразу же просыпаюсь.',
    },
    {
      id: 'u40-ex-4',
      sentenceBefore: 'She hardly ',
      sentenceAfter: ' skips breakfast because she needs energy for morning meetings.',
      promptWord: '(ever: ever / never / always)',
      correctAnswer: 'ever',
      acceptedAnswers: ['ever'],
      ruleExplanationRu:
        'Устойчивое сочетание с отрицательным значением "hardly ever" означает "почти никогда" (очень редко). Не требует дополнительного отрицания.',
      ruleFormula: 'hardly ever + V1-s',
      hintRu: 'Слово в паре с hardly: ever.',
      russianTranslation: 'Она почти никогда не пропускает завтрак, потому что ей нужна энергия для утренних встреч.',
    },
    {
      id: 'u40-ex-5',
      sentenceBefore: 'How long does your daily ',
      sentenceAfter: ' to the office take by bus?',
      promptWord: '(commute: commute / travel / journey)',
      correctAnswer: 'commute',
      acceptedAnswers: ['commute', 'commute / journey'],
      ruleExplanationRu:
        'Ежедневная регулярная дорога из дома на работу и обратно в английском языке называется "commute" (daily commute).',
      ruleFormula: 'daily commute',
      hintRu: 'Слово "дорога на работу / коммьют": commute.',
      russianTranslation: 'Сколько времени занимает ваша ежедневная поездка на работу в офис на автобусе?',
    },
    {
      id: 'u40-ex-6',
      sentenceBefore: 'In the evening after work, I usually like to ',
      sentenceAfter: ' by listening to music or reading a book.',
      promptWord: '(unwind: unwind / wind / rest)',
      correctAnswer: 'unwind',
      acceptedAnswers: ['unwind', 'relax'],
      ruleExplanationRu:
        'Естественный идиоматический глагол "unwind" (или "relax") означает сбросить напряжение, расслабиться после трудового дня.',
      ruleFormula: 'unwind after work',
      hintRu: 'Глагол "расслабиться / сбросить стресс": unwind (или relax).',
      russianTranslation: 'Вечером после работы мне обычно нравится расслабиться, слушая музыку или читая книгу.',
    },
    {
      id: 'u40-ex-7',
      sentenceBefore: 'What did you get ',
      sentenceAfter: ' to over the weekend? Anything interesting?',
      promptWord: '(up: up / down / in)',
      correctAnswer: 'up',
      acceptedAnswers: ['up'],
      ruleExplanationRu:
        'Разговорная идиома small talk о выходных: "What did you get up to?" означает "Чем ты занимался? Что поделывал?".',
      ruleFormula: 'What did you get up to over the weekend?',
      hintRu: 'Послелог фразового глагола: up.',
      russianTranslation: 'Чем ты занимался на выходных? Что-нибудь интересное?',
    },
    {
      id: 'u40-ex-8',
      sentenceBefore: 'On Saturday afternoon, we had a family barbecue in the ',
      sentenceAfter: ' with our cousins.',
      promptWord: '(backyard: backyard / park / street)',
      correctAnswer: 'backyard',
      acceptedAnswers: ['backyard', 'garden'],
      ruleExplanationRu:
        'Задний двор частного дома — "backyard" (в американском) или "garden / back garden" (в британском английском).',
      ruleFormula: 'barbecue in the backyard / garden',
      hintRu: 'Слово "задний двор": backyard (или garden).',
      russianTranslation: 'В субботу днем мы устроили семейное барбекю на заднем дворе вместе с нашими двоюродными братьями и сестрами.',
    },
    {
      id: 'u40-ex-9',
      sentenceBefore: 'I was so exhausted from the workweek that on Sunday I slept ',
      sentenceAfter: ' until nearly 10 AM.',
      promptWord: '(in: in / out / up)',
      correctAnswer: 'in',
      acceptedAnswers: ['in'],
      ruleExplanationRu:
        'Фразовый глагол "sleep in" означает сладко поспать подольше в выходной, не ставя будильник.',
      ruleFormula: 'sleep in (slept in)',
      hintRu: 'Послелог сна допоздна: in.',
      russianTranslation: 'Я был настолько утомлен рабочей неделей, что в воскресенье проспал допоздна почти до 10 утра.',
    },
    {
      id: 'u40-ex-10',
      sentenceBefore: 'Do you have any exciting ',
      sentenceAfter: ' for the upcoming bank holiday weekend?',
      promptWord: '(plans: plans / idea / things)',
      correctAnswer: 'plans',
      acceptedAnswers: ['plans'],
      ruleExplanationRu:
        'Стандартный вежливый вопрос о выходных: "Do you have any plans for the weekend?" с существительным во множественном числе plans.',
      ruleFormula: 'plans for the weekend',
      hintRu: 'Существительное "планы": plans.',
      russianTranslation: 'Есть ли у вас какие-нибудь интересные планы на предстоящие длинные праздничные выходные?',
    },
    {
      id: 'u40-ex-11',
      sentenceBefore: 'Morning, Sarah! How is your week going ',
      sentenceAfter: ' far? Very busy?',
      promptWord: '(so: so / as / this)',
      correctAnswer: 'so',
      acceptedAnswers: ['so'],
      ruleExplanationRu:
        'Идиома small talk: "so far" (до сих пор, на данный момент). Вопрос: "How is your week going so far?".',
      ruleFormula: 'How is your week going so far?',
      hintRu: 'Слово в связке: so (so far).',
      russianTranslation: 'Доброе утро, Сара! Как продвигается твоя неделя на данный момент? Много дел?',
    },
    {
      id: 'u40-ex-12',
      sentenceBefore: 'It is a gorgeous sunny day outside today, ',
      sentenceAfter: ' it?',
      promptWord: '(isn\'t: isn\'t / doesn\'t / wasn\'t)',
      correctAnswer: "isn't",
      acceptedAnswers: ["isn't", 'is not'],
      ruleExplanationRu:
        'Разделительный вопрос (tag question) о погоде. Главное предложение утвердительное с "It is...", поэтому хвостик отрицательный: "isn\'t it?". Это классический способ завязать светскую беседу.',
      ruleFormula: 'It is... , isn\'t it?',
      hintRu: 'Отрицательный хвостик для It is: isn\'t.',
      russianTranslation: 'Сегодня на улице великолепный солнечный день, не правда ли?',
    },
    {
      id: 'u40-ex-13',
      sentenceBefore: 'Terrible traffic on the motorway this morning, ',
      sentenceAfter: ' it?',
      promptWord: '(wasn\'t: wasn\'t / isn\'t / didn\'t)',
      correctAnswer: "wasn't",
      acceptedAnswers: ["wasn't", 'was not'],
      ruleExplanationRu:
        'Разделительный вопрос о прошедшем событии (этим утром была ужасная пробка — There was / It was): хвостик в Past Simple — "wasn\'t it?".',
      ruleFormula: 'Past tag question: wasn\'t it?',
      hintRu: 'Хвостик в прошедшем времени: wasn\'t.',
      russianTranslation: 'Ужасные пробки были на шоссе сегодня утром, не так ли?',
    },
    {
      id: 'u40-ex-14',
      sentenceBefore: 'Have you ',
      sentenceAfter: ' that new Italian bistro around the corner from our office?',
      promptWord: '(tried: tried / try / taste)',
      correctAnswer: 'tried',
      acceptedAnswers: ['tried'],
      ruleExplanationRu:
        'Present Perfect для вопроса о жизненном опыте: "Have you tried...?" (Ты пробовал / был ли в...). Третья форма от try — tried.',
      ruleFormula: 'Have you tried + Restaurant / Food?',
      hintRu: 'Третья форма правильного глагола try: tried.',
      russianTranslation: 'Ты уже пробовал то новое итальянское бистро за углом от нашего офиса?',
    },
    {
      id: 'u40-ex-15',
      sentenceBefore: 'I am so sleepy today; I could really do ',
      sentenceAfter: ' an extra large cup of strong coffee.',
      promptWord: '(with: with / by / to)',
      correctAnswer: 'with',
      acceptedAnswers: ['with'],
      ruleExplanationRu:
        'Популярная разговорная идиома "could do with something" означает "мне бы не помешало что-то / очень хочется".',
      ruleFormula: 'could do with + Noun (coffee / a break)',
      hintRu: 'Предлог в идиоме: with.',
      russianTranslation: 'Я такой сонный сегодня; мне бы сейчас точно не помешала большая кружка крепкого кофе.',
    },
    {
      id: 'u40-ex-16',
      sentenceBefore: 'How are your children doing at school? Is your son still playing in the football ',
      sentenceAfter: '?',
      promptWord: '(team: team / group / club)',
      correctAnswer: 'team',
      acceptedAnswers: ['team', 'club'],
      ruleExplanationRu:
        'Футбольная команда в английском языке — "football team" (или "football club").',
      ruleFormula: 'in the football team',
      hintRu: 'Слово "команда": team.',
      russianTranslation: 'Как твои дети учатся в школе? Твой сын все еще играет в футбольной команде?',
    },
    {
      id: 'u40-ex-17',
      sentenceBefore: 'Are you taking any time ',
      sentenceAfter: ' during the summer holidays to go abroad?',
      promptWord: '(off: off / out / away)',
      correctAnswer: 'off',
      acceptedAnswers: ['off'],
      ruleExplanationRu:
        'Взять отгул или отпуск на работе выражается идиомой "take time off" (или "take days off").',
      ruleFormula: 'take time off',
      hintRu: 'Послелог в идиоме отпуска: off.',
      russianTranslation: 'Ты берешь отпуск летом, чтобы съездить за границу?',
    },
    {
      id: 'u40-ex-18',
      sentenceBefore: 'Have a wonderful weekend, Mark! — Thanks, you ',
      sentenceAfter: '! See you bright and early on Monday morning.',
      promptWord: '(too: too / also / either)',
      correctAnswer: 'too',
      acceptedAnswers: ['too'],
      ruleExplanationRu:
        'Этикетный ответ на пожелание приятных выходных: "You too!" (И тебе того же!). Не используйте "Me too" в ответ на пожелание.',
      ruleFormula: 'You too!',
      hintRu: 'Слово "тоже": too.',
      russianTranslation: 'Замечательных выходных, Марк! — Спасибо, и тебе тоже! Увидимся в понедельник с утра пораньше.',
    },
    {
      id: 'u40-ex-19',
      sentenceBefore: 'Neither of my parents ',
      sentenceAfter: ' coffee; they always drink green tea in the morning.',
      promptWord: '(drinks: drinks / drink / drank)',
      correctAnswer: 'drinks',
      acceptedAnswers: ['drinks', 'drink'],
      ruleExplanationRu:
        'В традиционной нормативной грамматике конструкция "neither of + plural noun" грамматически согласуется с глаголом в единственном числе: drinks (хотя в разговорной речи встречается и drink).',
      ruleFormula: 'Neither of + [plural noun] + V1-s',
      hintRu: 'Форма глагола для единственного числа в Present Simple: drinks.',
      russianTranslation: 'Никто из моих родителей не пьет кофе; по утрам они всегда пьют зеленый чай.',
    },
    {
      id: 'u40-ex-20',
      sentenceBefore: 'Who does your daughter take ',
      sentenceAfter: ' most — you or her mother?',
      promptWord: '(after: after / from / on)',
      correctAnswer: 'after',
      acceptedAnswers: ['after'],
      ruleExplanationRu:
        'Фразовый глагол "take after someone" означает пойти в кого-то (в характере или внешности), унаследовать черты родственника.',
      ruleFormula: 'take after + someone',
      hintRu: 'Послелог фразового глагола "пойти в кого-то": after.',
      russianTranslation: 'В кого ваша дочь больше пошла — в вас или в свою мать?',
    },
  ],
};
