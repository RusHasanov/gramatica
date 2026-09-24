import { CambridgeUnit } from '../cambridgeUnits';

export const unitConferenceNetworking: CambridgeUnit = {
  id: 'unit-35-conference-networking',
  unitNumber: 35,
  level: 'B1-B2',
  book: 'Cambridge English for Scientists',
  category: 'Real Life',
  titleEn: 'Conference Networking: Introductions, Elevator Pitch, Exchanging Contacts & Coffee Break',
  titleRu: 'Нетворкинг на конференции: знакомство, рассказ о себе, обмен контактами и кофе-брейк',
  ruleSummaryRu:
    'Академический нетворкинг во время кофе-брейков, постеров и конференционных ужинов строится на балансе непринужденности (small talk) и профессиональной содержательности (elevator pitch). В англоязычной научной среде ценится открытость, умение без лишнего пафоса объяснить суть своего исследования и предложить сотрудничество.\n\n' +
    '1. Как завязать разговор на кофе-брейке (Breaking the Ice & Small Talk):\n' +
    '   - "Mind if I join you?" (Не возражаете, если я присоединюсь? — вежливый вопрос с Mind if...)\n' +
    '   - "How are you finding the conference so far?" (Как вам конференция до сих пор? — Present Continuous для оценки текущего впечатления)\n' +
    '   - Комплимент докладу: "Excuse me, I really enjoyed your talk on CRISPR this morning."\n\n' +
    '2. Представление себя и лаборатории (Self-Introduction & Affiliation):\n' +
    '   - "I am a postdoctoral researcher at the Max Planck Institute." (предлог at для института/университета)\n' +
    '   - "I work in Dr. Miller’s lab, focusing primarily on..."\n' +
    '   - "My research focuses on / is centered around..." (предлог on после focus)\n\n' +
    '3. Краткий питч своего исследования (The 30-Second Elevator Pitch):\n' +
    '   - "In a nutshell, we are trying to develop a biocompatible hydrogel for..."\n' +
    '   - "What we basically do is synthesize novel peptides that target..." (эмфатический wh-cleft)\n' +
    '   - "We are currently investigating whether..." (Present Continuous для текущей фазы проекта)\n\n' +
    '4. Поиск точек соприкосновения (Finding Common Ground):\n' +
    '   - "I came across your recent paper in Nature — the methodology was brilliant."\n' +
    '   - "Do you also happen to use high-throughput screening in your assays?"\n\n' +
    '5. Обмен контактами и предложение сотрудничества (Follow-up & Staying in Touch):\n' +
    '   - "We should definitely stay in touch."\n' +
    '   - "Do you happen to have a card on you, or can I scan your LinkedIn QR code?"\n' +
    '   - "Would you be interested in having a quick call sometime next week?"\n' +
    '   - "I will make sure to email you our preprint as soon as it is uploaded."',
  keyFormula:
    'Знакомство: Mind if I join you? | Институт: I am at [University] in [City] | Тематика: My research focuses on + V-ing | Питч: In a nutshell, we are working on... | Контакты: Do you happen to have a card? / Let’s stay in touch',
  markerWords: [
    'Mind if I join you',
    'How are you finding the conference',
    'My research focuses on',
    'In a nutshell',
    'Do you happen to have a card',
    'We should definitely stay in touch',
  ],
  pitfallsRu:
    '1. Ответ на "Do you mind if I sit here?" или "Mind if I join you?": если вы рады компании, говорите "Not at all, please go ahead" или "Of course, please have a seat". Если ответить "Yes", это буквально значит «Да, я возражаю, не садитесь»!\n' +
    '2. Предлог после глагола focus: строго "focuses ON" (НЕ "focuses in" или "at").\n' +
    '3. Не начинайте нетворкинг с монолога на 10 минут. Расскажите краткую суть за 30-40 секунд и задайте встречный вопрос собеседнику: "What about your group? What are you guys currently working on?"',
  exercises: [
    {
      id: 'u35-ex-1',
      sentenceBefore: 'Excuse me, do you ',
      sentenceAfter: ' if I join you at this table? Everywhere else seems to be taken.',
      promptWord: '(mind: mind / matter)',
      correctAnswer: 'mind',
      acceptedAnswers: ['mind'],
      ruleExplanationRu:
        'Вежливая формула подсесть за столик во время кофе-брейка: "Do you mind if I join you?". Глагол mind означает «возражать».',
      ruleFormula: 'Do you mind if I + V1...?',
      hintRu: 'Глагол «возражать» в вежливом вопросе: mind.',
      russianTranslation: 'Прошу прощения, вы не против, если я присяду к вам за этот столик? Похоже, везде уже всё занято.',
    },
    {
      id: 'u35-ex-2',
      sentenceBefore: 'How are you ',
      sentenceAfter: ' the conference so far? Have you seen any standout presentations today?',
      promptWord: '(find: finding / find)',
      correctAnswer: 'finding',
      acceptedAnswers: ['finding'],
      ruleExplanationRu:
        'Идиома смолл-тока: "How are you finding something?" означает "Как вам это нравится / какие впечатления?". Форма Present Continuous — finding.',
      ruleFormula: 'How are you finding + [event] so far?',
      hintRu: 'Форма глагола find на -ing: finding.',
      russianTranslation: 'Как вам конференция на данный момент? Видели сегодня какие-нибудь особенно яркие доклады?',
    },
    {
      id: 'u35-ex-3',
      sentenceBefore: 'I really enjoyed your keynote address this morning. The spectrographic data you presented ',
      sentenceAfter: ' truly fascinating.',
      promptWord: '(be: past tense)',
      correctAnswer: 'were',
      acceptedAnswers: ['were', 'was'],
      ruleExplanationRu:
        'Слово "data" в академическом дискурсе грамматически является множественным числом (данные были): were.',
      ruleFormula: 'data + were + adjective',
      hintRu: 'Прошедшая форма to be во множественном числе: were.',
      russianTranslation: 'Мне очень понравился ваш пленарный доклад сегодня утром. Спектрографические данные, которые вы представили, были поистине захватывающими.',
    },
    {
      id: 'u35-ex-4',
      sentenceBefore: 'Hi, my name is Elena. I am a postdoctoral researcher ',
      sentenceAfter: ' the University of Cambridge in the Department of Biochemistry.',
      promptWord: '(preposition: at / on / in)',
      correctAnswer: 'at',
      acceptedAnswers: ['at'],
      ruleExplanationRu:
        'При указании принадлежности к учреждению или университету (affiliation) нормативным предлогом является "at": "researcher at the University".',
      ruleFormula: 'researcher at + [Institution]',
      hintRu: 'Предлог места работы/учебы при университете: at.',
      russianTranslation: 'Здравствуйте, меня зовут Елена. Я постдок в Кембриджском университете на кафедре биохимии.',
    },
    {
      id: 'u35-ex-5',
      sentenceBefore: 'My primary research project focuses ',
      sentenceAfter: ' developing targeted drug delivery systems using lipid nanoparticles.',
      promptWord: '(preposition: on / in / at)',
      correctAnswer: 'on',
      acceptedAnswers: ['on'],
      ruleExplanationRu:
        'Глагол focus строго управляет предлогом "on": "focuses on developing...". За предлогом следует герундий на -ing.',
      ruleFormula: 'focus on + V-ing / noun',
      hintRu: 'Предлог после глагола focus: on.',
      russianTranslation: 'Мой основной исследовательский проект сосредоточен на разработке систем адресной доставки лекарств с использованием липидных наночастиц.',
    },
    {
      id: 'u35-ex-6',
      sentenceBefore: 'In a ',
      sentenceAfter: ', what we are trying to do is replace toxic lithium-ion solvents with organic electrolytes.',
      promptWord: '(nutshell: nutshell / nutshells)',
      correctAnswer: 'nutshell',
      acceptedAnswers: ['nutshell'],
      ruleExplanationRu:
        'Идиома краткого объяснения сути: "in a nutshell" (в двух словах, вкратце). Незаменима для 30-секундного питча у постера.',
      ruleFormula: 'In a nutshell, + clause',
      hintRu: 'Слово в идиоме «в двух словах / кратко»: nutshell.',
      russianTranslation: 'В двух словах: то, что мы пытаемся сделать, — это заменить токсичные литий-ионные растворители органическими электролитами.',
    },
    {
      id: 'u35-ex-7',
      sentenceBefore: 'I came ',
      sentenceAfter: ' your paper on microfluidic cell sorting last month, and we actually cited it in our recent preprint.',
      promptWord: '(preposition: across / by / into)',
      correctAnswer: 'across',
      acceptedAnswers: ['across'],
      ruleExplanationRu:
        'Фразовый глагол "come across" означает наткнуться, случайно прочитать, обнаружить: "I came across your paper".',
      ruleFormula: 'come across + paper / article',
      hintRu: 'Послелог фразового глагола наткнуться/встретить: across (come across).',
      russianTranslation: 'В прошлом месяце я наткнулся на вашу статью по микрофлюидной сортировке клеток, и мы на самом деле процитировали ее в нашем недавнем препринте.',
    },
    {
      id: 'u35-ex-8',
      sentenceBefore: 'What kind of techniques ',
      sentenceAfter: ' your laboratory typically employ for single-molecule imaging?',
      promptWord: '(do / does: auxiliary verb)',
      correctAnswer: 'does',
      acceptedAnswers: ['does'],
      ruleExplanationRu:
        'Подлежащее "your laboratory" стоит в единственном числе (3-е лицо), поэтому в вопросе Present Simple вспомогательный глагол — does.',
      ruleFormula: 'What kind of techniques does + singular subject + employ?',
      hintRu: 'Вспомогательный глагол для 3-го лица единственного числа: does.',
      russianTranslation: 'Какие методы ваша лаборатория обычно применяет для визуализации единичных молекул?',
    },
    {
      id: 'u35-ex-9',
      sentenceBefore: 'Do you ',
      sentenceAfter: ' to have a business card on you, or could I scan your LinkedIn QR code?',
      promptWord: '(happen: happen / happening)',
      correctAnswer: 'happen',
      acceptedAnswers: ['happen'],
      ruleExplanationRu:
        'Вежливый оборот "Do you happen to have...?" (Случайно у вас нет...?). После вспомогательного глагола Do используется базовая форма happen.',
      ruleFormula: 'Do you happen to have + noun?',
      hintRu: 'Базовая форма глагола в вежливом вопросе: happen.',
      russianTranslation: 'У вас случайно нет с собой визитки, или я могу отсканировать QR-код вашего профиля в LinkedIn?',
    },
    {
      id: 'u35-ex-10',
      sentenceBefore: 'We should definitely ',
      sentenceAfter: ' in touch. There seems to be a lot of potential synergy between our respective groups.',
      promptWord: '(stay: stay / staying)',
      correctAnswer: 'stay',
      acceptedAnswers: ['stay', 'keep'],
      ruleExplanationRu:
        'Идиома поддержания связи: "stay in touch" или "keep in touch". После модального глагола should используется bare infinitive: stay.',
      ruleFormula: 'should definitely stay/keep in touch',
      hintRu: 'Глагол оставаться на связи: stay (или keep).',
      russianTranslation: 'Нам определенно стоит оставаться на связи. Похоже, между нашими группами существует большой синергетический потенциал.',
    },
    {
      id: 'u35-ex-11',
      sentenceBefore: 'Would you be interested in ',
      sentenceAfter: ' a brief virtual meeting sometime next month to discuss potential collaborative grants?',
      promptWord: '(have: having / have)',
      correctAnswer: 'having',
      acceptedAnswers: ['having'],
      ruleExplanationRu:
        'После предлога "in" глагол ВСЕГДА принимает герундиальную форму на -ing: "interested in having a brief meeting".',
      ruleFormula: 'interested in + V-ing',
      hintRu: 'Герундий от have: having.',
      russianTranslation: 'Были бы вы заинтересованы в короткой онлайн-встрече в следующем месяце, чтобы обсудить возможные совместные заявки на гранты?',
    },
    {
      id: 'u35-ex-12',
      sentenceBefore: 'I am currently ',
      sentenceAfter: ' for a collaborative partner who has expertise in cryo-electron microscopy.',
      promptWord: '(look: looking / looked)',
      correctAnswer: 'looking',
      acceptedAnswers: ['looking'],
      ruleExplanationRu:
        'Действие происходит в текущий период жизни (поиск научного партнера): Present Continuous — "I am currently looking for...".',
      ruleFormula: 'am currently looking for + noun',
      hintRu: 'Форма на -ing: looking.',
      russianTranslation: 'В настоящее время я ищу партнера для сотрудничества, обладающего опытом в криоэлектронной микроскопии.',
    },
    {
      id: 'u35-ex-13',
      sentenceBefore: 'I will make sure to ',
      sentenceAfter: ' you a copy of the manuscript as soon as our co-authors give the final sign-off.',
      promptWord: '(send: send / sending)',
      correctAnswer: 'send',
      acceptedAnswers: ['send'],
      ruleExplanationRu:
        'После выражения "make sure to..." используется инфинитив: send. Это надежное обещание прислать рукопись.',
      ruleFormula: 'make sure to + V1 (send)',
      hintRu: 'Базовая форма глагола отправить: send.',
      russianTranslation: 'Я обязательно отправлю вам копию рукописи, как только соавторы дадут окончательное согласование.',
    },
    {
      id: 'u35-ex-14',
      sentenceBefore: 'Are you ',
      sentenceAfter: ' a poster at the evening reception today?',
      promptWord: '(present: presenting / presented)',
      correctAnswer: 'presenting',
      acceptedAnswers: ['presenting'],
      ruleExplanationRu:
        'Вопрос о запланированном действии на сегодняшний вечер (future arrangement): Present Continuous — "Are you presenting...?".',
      ruleFormula: 'Are you presenting + noun + today?',
      hintRu: 'Форма на -ing для запланированного действия: presenting.',
      russianTranslation: 'Вы представляете стендовый доклад сегодня на вечернем приеме?',
    },
    {
      id: 'u35-ex-15',
      sentenceBefore: 'It was an absolute pleasure ',
      sentenceAfter: ' you in person after reading so many of your publications over the years.',
      promptWord: '(meet: meeting / to meet)',
      correctAnswer: 'to meet',
      acceptedAnswers: ['to meet', 'meeting'],
      ruleExplanationRu:
        'Формула вежливого завершения разговора: "It was a pleasure to meet you (in person)".',
      ruleFormula: 'It was a pleasure to meet you',
      hintRu: 'Инфинитив глагола встретить: to meet.',
      russianTranslation: 'Было огромным удовольствием познакомиться с вами лично после стольких лет чтения ваших публикаций.',
    },
    {
      id: 'u35-ex-16',
      sentenceBefore: 'Have you had a chance to ',
      sentenceAfter: ' Dr. Tanaka’s poster on neural stem cell differentiation yet?',
      promptWord: '(see: see / seen)',
      correctAnswer: 'see',
      acceptedAnswers: ['see'],
      ruleExplanationRu:
        'В идиоматическом обороте "have a chance to..." после частицы to используется начальная форма (инфинитив): see.',
      ruleFormula: 'have a chance to + V1',
      hintRu: 'Инфинитив после to: see.',
      russianTranslation: 'У вас уже была возможность посмотреть постер доктора Танаки по дифференцировке нервных стволовых клеток?',
    },
    {
      id: 'u35-ex-17',
      sentenceBefore: 'We have actually been facing a similar hurdle with sample purification. How did your group manage to ',
      sentenceAfter: ' that issue?',
      promptWord: '(overcome: overcome / overcoming)',
      correctAnswer: 'overcome',
      acceptedAnswers: ['overcome', 'resolve', 'solve'],
      ruleExplanationRu:
        'После конструкции "manage to..." используется инфинитив: overcome (преодолеть). Обсуждение общих технических сложностей — отличный повод для сближения ученых.',
      ruleFormula: 'manage to + V1 (overcome / resolve)',
      hintRu: 'Инфинитив глагола преодолеть: overcome.',
      russianTranslation: 'Мы на самом деле столкнулись с похожим препятствием при очистке образцов. Как вашей группе удалось преодолеть эту проблему?',
    },
    {
      id: 'u35-ex-18',
      sentenceBefore: 'Let me give you my card so you have my direct email ',
      sentenceAfter: '.',
      promptWord: '(address: address / location)',
      correctAnswer: 'address',
      acceptedAnswers: ['address'],
      ruleExplanationRu:
        'Коллокация: "direct email address" (прямой адрес электронной почты).',
      ruleFormula: 'direct email address',
      hintRu: 'Слово «адрес»: address.',
      russianTranslation: 'Позвольте дать вам мою визитку, чтобы у вас был мой прямой адрес электронной почты.',
    },
    {
      id: 'u35-ex-19',
      sentenceBefore: 'I would be delighted to put you in ',
      sentenceAfter: ' with our computational modeling specialist back in Berlin.',
      promptWord: '(touch: touch / contact)',
      correctAnswer: 'touch',
      acceptedAnswers: ['touch', 'contact'],
      ruleExplanationRu:
        'Идиома "put someone in touch with..." означает свести, связать кого-то с третьим лицом для сотрудничества.',
      ruleFormula: 'put someone in touch/contact with someone',
      hintRu: 'Слово в идиоме «связать с кем-то»: touch (или contact).',
      russianTranslation: 'Я был бы рад связать вас с нашим специалистом по компьютерному моделированию в Берлине.',
    },
    {
      id: 'u35-ex-20',
      sentenceBefore: 'Do you mind if I ask what computational cluster you ',
      sentenceAfter: ' for those molecular dynamics simulations?',
      promptWord: '(use: used / use)',
      correctAnswer: 'used',
      acceptedAnswers: ['used', 'use'],
      ruleExplanationRu:
        'Вопрос о завершенном моделировании, результаты которого только что обсуждались: Past Simple — used (или use о постоянной практике).',
      ruleFormula: 'what cluster you used...',
      hintRu: 'Прошедшая форма глагола use: used.',
      russianTranslation: 'Вы не возражаете, если я спрошу, какой вычислительный кластер вы использовали для этих симуляций молекулярной динамики?',
    },
    {
      id: 'u35-ex-21',
      sentenceBefore: 'Enjoy the rest of the conference, and I look forward to ',
      sentenceAfter: ' from you soon!',
      promptWord: '(hear: hearing / hear)',
      correctAnswer: 'hearing',
      acceptedAnswers: ['hearing'],
      ruleExplanationRu:
        'Грамматическая ловушка: фраза "look forward to" требует герундия на -ing (to здесь предлог, а не инфинитивная частица): "look forward to hearing from you".',
      ruleFormula: 'look forward to + V-ing',
      hintRu: 'Форма глагола hear на -ing: hearing.',
      russianTranslation: 'Хорошего продолжения конференции, и с нетерпением жду весточки от вас в скором времени!',
    },
    {
      id: 'u35-ex-22',
      sentenceBefore: 'Could we connect on LinkedIn so we can keep track of each other’s upcoming ',
      sentenceAfter: '?',
      promptWord: '(publications: publications / publishes)',
      correctAnswer: 'publications',
      acceptedAnswers: ['publications', 'papers'],
      ruleExplanationRu:
        'Существительное во множественном числе: publications (публикации). Отслеживание новых статей коллег через соцсети — стандартная практика нетворкинга.',
      ruleFormula: 'keep track of each other’s publications',
      hintRu: 'Существительное «публикации»: publications.',
      russianTranslation: 'Можем ли мы добавиться друг к другу в LinkedIn, чтобы следить за выходом будущих публикаций друг друга?',
    },
  ],
};
