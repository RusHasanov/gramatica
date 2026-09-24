import { CambridgeUnit } from '../cambridgeUnits';

export const unitConferencePresentation: CambridgeUnit = {
  id: 'unit-33-conference-presentation',
  unitNumber: 33,
  level: 'B1-B2',
  book: 'Cambridge English for Scientists',
  category: 'Real Life',
  titleEn: 'Conference Presentation: Opening, Methodology, Results & Slide Transitions',
  titleRu: 'Доклад на научной конференции: начало, методология, результаты и переходы',
  ruleSummaryRu:
    'Выступление на международной научной конференции требует владения устойчивыми речевыми формулами (signposting language) и правильного выбора грамматических конструкций в зависимости от этапа доклада:\n\n' +
    '1. Вступление и приветствие (Opening & Purpose):\n' +
    '   - Приветствие и цель: "Today I would like to talk about..." / "The purpose of this talk is to present..."\n' +
    '   - Вежливая благодарность организаторам: "First, I would like to thank the organizing committee for inviting me."\n' +
    '   - Презентация структуры (Outline): "I have divided my presentation into three main parts: first... second... and finally..."\n\n' +
    '2. Переходы между слайдами (Signposting & Transitions):\n' +
    '   - Переход к новому разделу: "Let’s now turn to / Let’s move on to the experimental setup."\n' +
    '   - Привлечение внимания к слайду: "As you can see on this slide..." / "If you look at the diagram on the right..."\n' +
    '   - Отсылка к сказанному ранее: "As I mentioned earlier in the introduction..."\n\n' +
    '3. Описание методов и протоколов (Methodology — Past Simple Passive):\n' +
    '   - В академическом английском методы описываются в прошедшем времени страдательного залога (Past Simple Passive: was / were + V3), чтобы подчеркнуть объективность процесса, а не личность экспериментатора: "The blood samples were collected...", "The temperature was maintained at 25°C."\n\n' +
    '4. Презентация результатов и графиков (Results & Data):\n' +
    '   - Что показывает график (Present Simple): "Figure 2 shows / illustrates / depicts the correlation between..."\n' +
    '   - Что мы только что открыли или доказали (Present Perfect): "We have identified a novel biomarker that has not been described previously."\n\n' +
    '5. Заключение (Conclusion & Wrap-up):\n' +
    '   - Подведение итогов: "To sum up / In conclusion, our findings demonstrate that..."\n' +
    '   - Завершение и приглашение к вопросам: "Thank you for your attention. I would be glad to take any questions."',
  keyFormula:
    'Цель: would like to + V1 | Переход: Let us now turn / move to... | Методы: was / were + V3 | Графики: Figure shows that... | Итог: In conclusion / To conclude',
  markerWords: [
    'I would like to present',
    'As you can see on this slide',
    'Let’s turn to / Moving on to',
    'The samples were prepared',
    'This graph illustrates that',
    'I would be happy to take your questions',
  ],
  pitfallsRu:
    '1. Ошибка в предлоге при обращении к слайду: говорят "ON this slide" (НЕ "in this slide").\n' +
    '2. Описание эксперимента: избегайте постоянного "We did this, we took that" — в научном сообществе нормой является безличный Past Simple Passive ("Measurements were taken", "Data were normalized"). Помните, что слово "data" в строго академическом стиле часто согласуется во множественном числе ("data were", а не "data was").\n' +
    '3. Завершение доклада: не говорите грубое "That is all" или "I finished". Общепринятый научный этикет требует: "Thank you for your attention. I would be happy to answer any questions."',
  exercises: [
    {
      id: 'u33-ex-1',
      sentenceBefore: 'Good morning, everyone. Today I would ',
      sentenceAfter: ' to present the preliminary results of our three-year clinical trial.',
      promptWord: '(like: like / liked / liking)',
      correctAnswer: 'like',
      acceptedAnswers: ['like'],
      ruleExplanationRu:
        'Формула вежливого открытия доклада: "I would like to + V1". Модальная конструкция "would like to" звучит профессионально и уважительно к аудитории.',
      ruleFormula: 'I would like to + V1',
      hintRu: 'Вежливый оборот начала презентации: like.',
      russianTranslation: 'Доброе утро, уважаемые коллеги. Сегодня я хотел бы представить предварительные результаты нашего трехлетнего клинического испытания.',
    },
    {
      id: 'u33-ex-2',
      sentenceBefore: 'First of all, I would like to thank the organizing committee ',
      sentenceAfter: ' giving me the opportunity to speak at this prestigious symposium.',
      promptWord: '(preposition: for / to / on)',
      correctAnswer: 'for',
      acceptedAnswers: ['for'],
      ruleExplanationRu:
        'Глагол благодарить управляет предлогом for: "thank somebody FOR doing something". Это стандартный протокол научной вежливости.',
      ruleFormula: 'thank someone for + V-ing',
      hintRu: 'Предлог после глагола thank: for.',
      russianTranslation: 'Прежде всего, я хотел бы поблагодарить организационный комитет за предоставленную мне возможность выступить на этом престижном симпозиуме.',
    },
    {
      id: 'u33-ex-3',
      sentenceBefore: 'The main purpose of our study ',
      sentenceAfter: ' to evaluate the environmental impact of microplastic accumulation in marine sediments.',
      promptWord: '(be: present tense)',
      correctAnswer: 'is',
      acceptedAnswers: ['is'],
      ruleExplanationRu:
        'Формулировка исследовательской цели в настоящем времени: "The main purpose of our study is to...".',
      ruleFormula: 'The purpose of our study is to + V1',
      hintRu: 'Глагол to be в настоящем времени для единственного числа (purpose): is.',
      russianTranslation: 'Основная цель нашего исследования — оценить экологическое воздействие накопления микропластика в морских донных отложениях.',
    },
    {
      id: 'u33-ex-4',
      sentenceBefore: 'I have divided my presentation ',
      sentenceAfter: ' four main sections: theoretical background, methodology, experimental results, and future directions.',
      promptWord: '(preposition: into / in / on)',
      correctAnswer: 'into',
      acceptedAnswers: ['into'],
      ruleExplanationRu:
        'Глагол делить на части в английском языке требует предлога into: "divide something INTO sections". На слайде с планом это классическая фраза.',
      ruleFormula: 'divide ... into + parts',
      hintRu: 'Предлог разделения на части: into.',
      russianTranslation: 'Я разделил свой доклад на четыре основные части: теоретические основы, методология, экспериментальные результаты и перспективы дальнейшей работы.',
    },
    {
      id: 'u33-ex-5',
      sentenceBefore: 'Let us now ',
      sentenceAfter: ' to the experimental setup we designed for high-pressure cryogenic testing.',
      promptWord: '(turn: turn / turned / turning)',
      correctAnswer: 'turn',
      acceptedAnswers: ['turn'],
      ruleExplanationRu:
        'Фраза перехода между разделами и слайдами: "Let us now turn to..." (Давайте перейдем к...). После побудительной конструкции "Let us / Let’s" используется голый инфинитив (bare infinitive).',
      ruleFormula: 'Let us (now) turn to + [Topic]',
      hintRu: 'Глагол перехода в базовой форме: turn.',
      russianTranslation: 'Давайте теперь перейдем к экспериментальной установке, которую мы сконструировали для испытаний при высоком давлении и криогенных температурах.',
    },
    {
      id: 'u33-ex-6',
      sentenceBefore: 'All blood samples ',
      sentenceAfter: ' collected at 4°C and immediately centrifuged to prevent enzymatic degradation.',
      promptWord: '(be: past tense)',
      correctAnswer: 'were',
      acceptedAnswers: ['were'],
      ruleExplanationRu:
        'В разделе "Методы" (Methodology) процедуры описываются в Past Simple Passive. Подлежащее "samples" во множественном числе требует формы "were".',
      ruleFormula: 'Plural Subject + were + V3 (collected)',
      hintRu: 'Форма прошедшего времени глагола to be во множественном числе: were.',
      russianTranslation: 'Все образцы крови собирались при температуре 4°C и немедленно центрифугировались во избежание ферментативной деградации.',
    },
    {
      id: 'u33-ex-7',
      sentenceBefore: 'As you can see ',
      sentenceAfter: ' this slide, the bar chart illustrates a marked divergence between the two cohorts.',
      promptWord: '(preposition: on / in / at)',
      correctAnswer: 'on',
      acceptedAnswers: ['on'],
      ruleExplanationRu:
        'В английском языке к слайдам презентации ВСЕГДА применяется предлог "on": "on this slide" (НЕ "in this slide"). Это важнейшая конвенция научных выступлений.',
      ruleFormula: 'on this slide',
      hintRu: 'Предлог для слайда: on.',
      russianTranslation: 'Как вы можете видеть на этом слайде, столбчатая диаграмма демонстрирует заметное расхождение между двумя когортами.',
    },
    {
      id: 'u33-ex-8',
      sentenceBefore: 'The solid blue line on the graph ',
      sentenceAfter: ' the baseline temperature, whereas the red dashed line indicates the modified variant.',
      promptWord: '(represent: represents / represented)',
      correctAnswer: 'represents',
      acceptedAnswers: ['represents'],
      ruleExplanationRu:
        'Когда спикер описывает то, что изображено на слайде прямо сейчас перед аудиторией, используется Present Simple: "The line represents...".',
      ruleFormula: 'Subject + V-s (presents / indicates / represents)',
      hintRu: 'Настоящее простое время глагола represent для 3-го лица: represents.',
      russianTranslation: 'Сплошная синяя линия на графике представляет базовую температуру, тогда как красная пунктирная линия обозначает модифицированный вариант.',
    },
    {
      id: 'u33-ex-9',
      sentenceBefore: 'Moving ',
      sentenceAfter: ' to our next slide, let us examine the spectrographic analysis in greater detail.',
      promptWord: '(preposition: on / in / to)',
      correctAnswer: 'on',
      acceptedAnswers: ['on'],
      ruleExplanationRu:
        'Устойчивая фраза перехода (signpost phrase): "Moving on to..." (Переходя к следующему вопросу/слайду). Фразовый глагол move on означает движение вперед по презентации.',
      ruleFormula: 'Moving on to + [Next Item]',
      hintRu: 'Послелог фразового глагола: on (moving on).',
      russianTranslation: 'Переходя к нашему следующему слайду, давайте подробнее рассмотрим данные спектрографического анализа.',
    },
    {
      id: 'u33-ex-10',
      sentenceBefore: 'As I ',
      sentenceAfter: ' earlier in my talk, the previous computational model had substantial limitations regarding turbulence modeling.',
      promptWord: '(mention: mentioned / mention)',
      correctAnswer: 'mentioned',
      acceptedAnswers: ['mentioned'],
      ruleExplanationRu:
        'Отсылка к сказанному ранее во время текущего доклада оформляется в Past Simple: "As I mentioned earlier..." (Как я упомянул ранее).',
      ruleFormula: 'As I mentioned earlier...',
      hintRu: 'Прошедшая форма глагола mention: mentioned.',
      russianTranslation: 'Как я упомянул ранее в своем выступлении, предшествующая вычислительная модель имела существенные ограничения в отношении моделирования турбулентности.',
    },
    {
      id: 'u33-ex-11',
      sentenceBefore: 'We have recently ',
      sentenceAfter: ' a novel synthetic catalyst that accelerates reaction rates tenfold.',
      promptWord: '(develop: developed / developing)',
      correctAnswer: 'developed',
      acceptedAnswers: ['developed'],
      ruleExplanationRu:
        'Когда ученый сообщает о свежем научном открытии как о текущем достижении команды с маркером "recently", используется Present Perfect: have recently developed.',
      ruleFormula: 'have recently + V3',
      hintRu: '3-я форма глагола develop: developed.',
      russianTranslation: 'Недавно мы разработали новый синтетический катализатор, который ускоряет скорость реакции в десять раз.',
    },
    {
      id: 'u33-ex-12',
      sentenceBefore: 'If you look ',
      sentenceAfter: ' the upper right-hand quadrant of the diagram, you will notice an anomalous cluster of data points.',
      promptWord: '(preposition: at / on / to)',
      correctAnswer: 'at',
      acceptedAnswers: ['at'],
      ruleExplanationRu:
        'Глагол смотреть на что-либо в презентации требует предлога at: "look at the upper quadrant / look at the chart".',
      ruleFormula: 'look at + [visual element]',
      hintRu: 'Предлог после глагола look: at.',
      russianTranslation: 'Если вы посмотрите на правый верхний квадрант диаграммы, то заметите аномальное скопление точек данных.',
    },
    {
      id: 'u33-ex-13',
      sentenceBefore: 'To put this finding into ',
      sentenceAfter: ', the energy savings are equivalent to the annual electricity consumption of a medium-sized city.',
      promptWord: '(perspective: perspective / prospect)',
      correctAnswer: 'perspective',
      acceptedAnswers: ['perspective'],
      ruleExplanationRu:
        'Идиоматическая академическая фраза "To put this into perspective..." используется, чтобы помочь аудитории осознать реальный масштаб абстрактных цифр.',
      ruleFormula: 'To put this (finding / figure) into perspective...',
      hintRu: 'Слово во фразе "поместить в контекст / сопоставить с понятным": perspective.',
      russianTranslation: 'Чтобы представить этот результат в понятном масштабе, отмечу: экономия энергии эквивалентна годовому потреблению электричества городом средних размеров.',
    },
    {
      id: 'u33-ex-14',
      sentenceBefore: 'The experiment was ',
      sentenceAfter: ' three consecutive times under strictly identical laboratory conditions.',
      promptWord: '(repeat: repeated / repeating)',
      correctAnswer: 'repeated',
      acceptedAnswers: ['repeated'],
      ruleExplanationRu:
        'В описании воспроизводимости опыта используется пассив: "The experiment was repeated..." (Past Simple Passive).',
      ruleFormula: 'was + repeated (V3)',
      hintRu: '3-я форма глагола repeat: repeated.',
      russianTranslation: 'Эксперимент был повторен три раза подряд в строго идентичных лабораторных условиях.',
    },
    {
      id: 'u33-ex-15',
      sentenceBefore: 'What is particularly noteworthy about this outcome ',
      sentenceAfter: ' that the reaction occurred without any external heating.',
      promptWord: '(be: present tense)',
      correctAnswer: 'is',
      acceptedAnswers: ['is'],
      ruleExplanationRu:
        'Cleft-структура для привлечения внимания аудитории: "What is particularly noteworthy... IS that...".',
      ruleFormula: 'What is noteworthy is that + clause',
      hintRu: 'Связочный глагол настоящего времени: is.',
      russianTranslation: 'Что особенно примечательно в этом результате, так это то, что реакция протекала без какого-либо внешнего нагрева.',
    },
    {
      id: 'u33-ex-16',
      sentenceBefore: 'I would now like to draw your attention ',
      sentenceAfter: ' the unexpected spike in sensor readings shown in Figure 4.',
      promptWord: '(preposition: to / on / at)',
      correctAnswer: 'to',
      acceptedAnswers: ['to'],
      ruleExplanationRu:
        'Устойчивое выражение привлечения внимания аудитории: "draw your attention TO something". Предлог strictly "to".',
      ruleFormula: 'draw someone’s attention to + noun',
      hintRu: 'Предлог направления внимания: to.',
      russianTranslation: 'Теперь я хотел бы обратить ваше внимание на неожиданный скачок в показаниях датчиков, показанный на рисунке 4.',
    },
    {
      id: 'u33-ex-17',
      sentenceBefore: 'These empirical data strongly ',
      sentenceAfter: ' our initial working hypothesis regarding cellular signaling pathways.',
      promptWord: '(support: support / supports)',
      correctAnswer: 'support',
      acceptedAnswers: ['support'],
      ruleExplanationRu:
        'В академической традиции существительное "data" во множественном числе (множественное от datum): "These data support...".',
      ruleFormula: 'Plural Subject (data) + V1 (support)',
      hintRu: 'Глагол без окончания -s, так как data — множественное число: support.',
      russianTranslation: 'Эти эмпирические данные убедительно подтверждают нашу первоначальную рабочую гипотезу относительно путей клеточной сигнализации.',
    },
    {
      id: 'u33-ex-18',
      sentenceBefore: 'Before I conclude, I would like to ',
      sentenceAfter: ' the indispensable contributions of our graduate students and laboratory technicians.',
      promptWord: '(acknowledge: acknowledge / acknowledging)',
      correctAnswer: 'acknowledge',
      acceptedAnswers: ['acknowledge'],
      ruleExplanationRu:
        'Традиционный блок благодарностей (Acknowledgements) в конце доклада: "I would like to acknowledge..." (Я бы хотел отметить вклад/поблагодарить).',
      ruleFormula: 'would like to + acknowledge',
      hintRu: 'Глагол признать/отметить заслуги в инфинитиве: acknowledge.',
      russianTranslation: 'Прежде чем завершить, я хотел бы отметить неоценимый вклад наших аспирантов и лабораторных техников.',
    },
    {
      id: 'u33-ex-19',
      sentenceBefore: 'To sum ',
      sentenceAfter: ', our approach offers a scalable, cost-effective alternative to conventional lithography methods.',
      promptWord: '(preposition: up / down / on)',
      correctAnswer: 'up',
      acceptedAnswers: ['up'],
      ruleExplanationRu:
        'Идиома подведения итогов выступления: "To sum up..." (Подводя итог / Резюмируя).',
      ruleFormula: 'To sum up, + sentence',
      hintRu: 'Послелог идиомы подведения итогов: up (to sum up).',
      russianTranslation: 'Подводя итог, можно сказать, что наш подход предлагает масштабируемую и экономически эффективную альтернативу традиционным методам литографии.',
    },
    {
      id: 'u33-ex-20',
      sentenceBefore: 'In ',
      sentenceAfter: ', the proposed algorithm significantly outperforms existing baselines across all benchmark datasets.',
      promptWord: '(conclusion: conclusion / concluding)',
      correctAnswer: 'conclusion',
      acceptedAnswers: ['conclusion'],
      ruleExplanationRu:
        'Классическая заключительная связка: "In conclusion, ..." (В заключение).',
      ruleFormula: 'In conclusion, + main clause',
      hintRu: 'Существительное в клише "в заключение": conclusion.',
      russianTranslation: 'В заключение хочу подчеркнуть, что предложенный алгоритм существенно превосходит существующие базовые решения по всем эталонным наборам данных.',
    },
    {
      id: 'u33-ex-21',
      sentenceBefore: 'Thank you very much for your ',
      sentenceAfter: '. I will be delighted to take any questions you might have.',
      promptWord: '(attention: attention / attendance)',
      correctAnswer: 'attention',
      acceptedAnswers: ['attention'],
      ruleExplanationRu:
        'Общепринятая формула вежливости в финале презентации: "Thank you for your attention" (Благодарю за внимание). "Attendance" означает присутствие на мероприятии, а благодарят именно за внимание.',
      ruleFormula: 'Thank you for your attention.',
      hintRu: 'Слово «внимание»: attention.',
      russianTranslation: 'Большое спасибо за ваше внимание. Я буду рад ответить на любые вопросы, которые у вас могут возникнуть.',
    },
    {
      id: 'u33-ex-22',
      sentenceBefore: 'I would be happy to answer any questions or clarify any ',
      sentenceAfter: ' regarding our methodology.',
      promptWord: '(points: points / pointers)',
      correctAnswer: 'points',
      acceptedAnswers: ['points'],
      ruleExplanationRu:
        'Стандартное академическое приглашение к дискуссии: "clarify any points" (пояснить любые пункты/моменты).',
      ruleFormula: 'clarify any points',
      hintRu: 'Существительное пункты/вопросы: points.',
      russianTranslation: 'Я с удовольствием отвечу на любые вопросы или поясню любые моменты, касающиеся нашей методологии.',
    },
  ],
};
