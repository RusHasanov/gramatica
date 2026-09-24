import { CambridgeUnit } from '../cambridgeUnits';

export const unitConferenceQA: CambridgeUnit = {
  id: 'unit-34-conference-qa',
  unitNumber: 34,
  level: 'B1-B2',
  book: 'Cambridge English for Scientists',
  category: 'Real Life',
  titleEn: 'Q&A Session: Asking Questions, Clarifying, Responding & Acknowledging Limitations',
  titleRu: 'Вопросы после доклада (Q&A): как спросить, ответить, переспросить и признать ограничения',
  ruleSummaryRu:
    'Секция вопросов и ответов (Q&A session) — одна из наиболее стрессовых ситуаций для исследователя. Здесь требуется умение быстро ориентироваться, вежливо задавать вопросы из зала, грамотно переспрашивать и научно обоснованно защищать или признавать границы своего исследования (hedging).\n\n' +
    '1. Как задать вопрос докладчику из зала (Asking Questions):\n' +
    '   - Вежливое начало: "Thank you for an intriguing talk."\n' +
    '   - Косвенный вопрос (Indirect Question): "I was wondering if you could clarify how you measured..." (обратите внимание: порядок слов прямой, без инверсии did/do!)\n' +
    '   - Модальные глаголы вежливости: "Could you elaborate on...?" / "May I ask whether...?"\n\n' +
    '2. Как поблагодарить за вопрос и взять паузу для размышления (Buying Time & Complimenting):\n' +
    '   - "Thank you, that is an excellent question."\n' +
    '   - "I am very glad you brought that up."\n' +
    '   - "That is indeed a crucial point that we debated extensively in our lab."\n\n' +
    '3. Как переспросить или уточнить вопрос (Clarifying & Checking Understanding):\n' +
    '   - "Could you speak into the microphone, please?"\n' +
    '   - "If I understand your question correctly, you are asking whether..."\n' +
    '   - "Are you referring to the in vitro experiments or the in vivo trials?"\n\n' +
    '4. Как честно и профессионально признать ограничение исследования (Acknowledging Limitations & Hedging):\n' +
    '   - Нельзя говорить "I don’t know" и замыкаться. В научном сообществе говорят:\n' +
    '   - "To be completely honest, we have not tested that specific scenario yet." (Present Perfect)\n' +
    '   - "That was slightly beyond the scope of our current project, but it would certainly be worth investigating."\n' +
    '   - "I don’t have those exact figures at hand, but I would be happy to discuss them after the session."\n\n' +
    '5. Несогласие и дискуссия (Polite Disagreement & Parking):\n' +
    '   - "I see what you mean, but our findings seem to suggest otherwise."\n' +
    '   - "Perhaps we could continue this interesting discussion over coffee so we don’t run over time."',
  keyFormula:
    'Вопрос из зала: I was wondering if you could + V1... | Благодарность: Thank you for bringing that up | Переспрос: If I understand correctly, you are asking... | Ограничение: We have not tested... yet / That is beyond our scope',
  markerWords: [
    'Could you clarify',
    'I was wondering if',
    'That is a very good point',
    'We have not tested that yet',
    'Beyond the scope of our study',
    'Perhaps we could discuss this offline',
  ],
  pitfallsRu:
    '1. Ошибка в порядке слов косвенного вопроса: "I was wondering how DID you calculate" — грубая ошибка! Правильно: "I was wondering how YOU CALCULATED the error margin" (прямой порядок слов без вспомогательного глагола did).\n' +
    '2. Никогда не отвечайте на сложный вопрос просто "I don\'t know". Используйте профессиональные формулы: "That is an intriguing question. We haven\'t examined that particular aspect yet, but it represents a promising direction for future research."\n' +
    '3. Предлог в выражении "за рамками исследования": "beyond the scope of our study" (НЕ: "out of scope" или "outside of").',
  exercises: [
    {
      id: 'u34-ex-1',
      sentenceBefore: 'Thank you for a fascinating talk. Could you please ',
      sentenceAfter: ' how you accounted for potential confounding variables in the second trial?',
      promptWord: '(clarify: clarify / clarified / clarifying)',
      correctAnswer: 'clarify',
      acceptedAnswers: ['clarify'],
      ruleExplanationRu:
        'После вежливого модального глагола "Could you please..." используется голый инфинитив: clarify. Это ключевой академический глагол для просьбы разъяснить непонятный момент.',
      ruleFormula: 'Could you please + V1 (clarify)',
      hintRu: 'Глагол «разъяснить» в базовой форме: clarify.',
      russianTranslation: 'Спасибо за увлекательный доклад. Не могли бы вы пояснить, как вы учли потенциальные вмешивающиеся факторы во втором испытании?',
    },
    {
      id: 'u34-ex-2',
      sentenceBefore: 'I was wondering if you ',
      sentenceAfter: ' considered testing the polymer membrane under elevated hydrostatic pressure.',
      promptWord: '(have: had / have)',
      correctAnswer: 'had',
      acceptedAnswers: ['had', 'have'],
      ruleExplanationRu:
        'Конструкция вежливого вопроса: "I was wondering if you had considered...". Использование Past Continuous (was wondering) и Past Perfect (had considered) смягчает вопрос, делая его некатегоричным.',
      ruleFormula: 'I was wondering if you had considered + V-ing',
      hintRu: 'Прошедшая форма вспомогательного главода в вежливом вопросе: had.',
      russianTranslation: 'Мне было интересно, рассматривали ли вы возможность тестирования полимерной мембраны при повышенном гидростатическом давлении?',
    },
    {
      id: 'u34-ex-3',
      sentenceBefore: 'Thank you, that is an excellent question. I am very glad you ',
      sentenceAfter: ' that up.',
      promptWord: '(bring: brought / bring)',
      correctAnswer: 'brought',
      acceptedAnswers: ['brought'],
      ruleExplanationRu:
        'Академическая идиома благодарности за вопрос: "I am glad you brought that up" (Я очень рад, что вы подняли этот вопрос). Фразовый глагол bring up в прошедшем времени — brought up.',
      ruleFormula: 'glad you brought that up',
      hintRu: 'Прошедшая форма от bring (поднять вопрос): brought.',
      russianTranslation: 'Спасибо, это отличный вопрос. Я очень рад, что вы затронули эту тему.',
    },
    {
      id: 'u34-ex-4',
      sentenceBefore: 'If I understand your question ',
      sentenceAfter: ', you are asking whether the reaction rate remains linear at higher temperatures.',
      promptWord: '(correct: correctly / correct)',
      correctAnswer: 'correctly',
      acceptedAnswers: ['correctly'],
      ruleExplanationRu:
        'Формула проверки понимания вопроса: "If I understand your question correctly...". Наречие образ действия "correctly" определяет глагол understand.',
      ruleFormula: 'If I understand your question correctly, you are asking...',
      hintRu: 'Наречие «правильно / верно»: correctly.',
      russianTranslation: 'Если я правильно понимаю ваш вопрос, вы спрашиваете, остается ли скорость реакции линейной при более высоких температурах?',
    },
    {
      id: 'u34-ex-5',
      sentenceBefore: 'To be completely honest, we have not ',
      sentenceAfter: ' that specific combination of reagents yet.',
      promptWord: '(test: tested / testing)',
      correctAnswer: 'tested',
      acceptedAnswers: ['tested'],
      ruleExplanationRu:
        'Признание границ текущей работы: "We have not tested ... yet" (Present Perfect с маркером yet). Это звучит профессионально и честно.',
      ruleFormula: 'have not + V3 + yet',
      hintRu: '3-я форма глагола test: tested.',
      russianTranslation: 'Если быть до конца честным, мы еще не тестировали эту конкретную комбинацию реагентов.',
    },
    {
      id: 'u34-ex-6',
      sentenceBefore: 'That question is slightly ',
      sentenceAfter: ' the scope of our current research project, but it is certainly an important consideration.',
      promptWord: '(preposition: beyond / out / outside)',
      correctAnswer: 'beyond',
      acceptedAnswers: ['beyond'],
      ruleExplanationRu:
        'Устойчивое академическое выражение для ограничения темы: "beyond the scope of our study / research" (за пределами рамок нашего исследования).',
      ruleFormula: 'beyond the scope of + noun',
      hintRu: 'Предлог «за рамками / за пределами»: beyond.',
      russianTranslation: 'Этот вопрос несколько выходит за рамки нашего текущего исследовательского проекта, однако это, безусловно, важный аспект.',
    },
    {
      id: 'u34-ex-7',
      sentenceBefore: 'I do not have the exact statistical figures ',
      sentenceAfter: ' hand right now, but I would be glad to check my notebook and email them to you.',
      promptWord: '(preposition: at / in / on)',
      correctAnswer: 'at',
      acceptedAnswers: ['at'],
      ruleExplanationRu:
        'Идиома "at hand" означает "под рукой, при себе в данный момент": "I don\'t have the figures at hand".',
      ruleFormula: 'at hand (под рукой)',
      hintRu: 'Предлог в идиоме «под рукой»: at (at hand).',
      russianTranslation: 'У меня нет сейчас под рукой точных статистических цифр, но я с удовольствием сверюсь со своими записями и отправлю их вам по электронной почте.',
    },
    {
      id: 'u34-ex-8',
      sentenceBefore: 'Could you please speak a little louder or speak into the microphone? It is difficult to ',
      sentenceAfter: ' you at the back of the auditorium.',
      promptWord: '(hear: hear / listen)',
      correctAnswer: 'hear',
      acceptedAnswers: ['hear'],
      ruleExplanationRu:
        'Физическая способность воспринимать звук выражается глаголом "hear" (слышать), а не "listen" (слушать намеренно).',
      ruleFormula: 'difficult to hear someone',
      hintRu: 'Глагол физического слуха: hear.',
      russianTranslation: 'Не могли бы вы говорить немного громче или в микрофон? В задней части аудитории вас плохо слышно.',
    },
    {
      id: 'u34-ex-9',
      sentenceBefore: 'Are you ',
      sentenceAfter: ' to the initial baseline measurements or to the post-treatment observation period?',
      promptWord: '(refer: referring / referred)',
      correctAnswer: 'referring',
      acceptedAnswers: ['referring'],
      ruleExplanationRu:
        'Уточняющий вопрос о том, что имеет в виду спрашивающий прямо сейчас (Present Continuous): "Are you referring to...?".',
      ruleFormula: 'Are you referring to + [Option A] or [Option B]?',
      hintRu: 'Форма глагола refer на -ing: referring.',
      russianTranslation: 'Вы имеете в виду первоначальные базовые измерения или период наблюдения после проведенного лечения?',
    },
    {
      id: 'u34-ex-10',
      sentenceBefore: 'I see your point, ',
      sentenceAfter: ' our experimental findings seem to point towards an alternative interpretation.',
      promptWord: '(conjunction: but / although / because)',
      correctAnswer: 'but',
      acceptedAnswers: ['but', 'yet', 'however'],
      ruleExplanationRu:
        'Вежливое несогласие начинается с признания логики оппонента ("I see your point"), за которым следует противительный союз "but...".',
      ruleFormula: 'I see your point, but...',
      hintRu: 'Противительный союз: but.',
      russianTranslation: 'Я понимаю вашу точку зрения, но наши экспериментальные результаты, похоже, указывают на альтернативную интерпретацию.',
    },
    {
      id: 'u34-ex-11',
      sentenceBefore: 'That is a very intriguing observation. Could you elaborate ',
      sentenceAfter: ' what theoretical model you used to arrive at that estimate?',
      promptWord: '(preposition: on / in / at)',
      correctAnswer: 'on',
      acceptedAnswers: ['on'],
      ruleExplanationRu:
        'Глагол elaborate в значении "подробнее рассказать / развить мысль" строго управляет предлогом "on": "elaborate on something".',
      ruleFormula: 'elaborate on + noun / wh-clause',
      hintRu: 'Предлог после глагола elaborate: on.',
      russianTranslation: 'Это очень интригующее наблюдение. Не могли бы вы подробнее рассказать о том, какую теоретическую модель вы использовали, чтобы прийти к такой оценке?',
    },
    {
      id: 'u34-ex-12',
      sentenceBefore: 'We did not include elderly patients in this initial cohort ',
      sentenceAfter: ' of ethical constraints imposed by the clinical review board.',
      promptWord: '(because: because / cause)',
      correctAnswer: 'because',
      acceptedAnswers: ['because'],
      ruleExplanationRu:
        'Предложная связка причины: "because of + noun" (из-за этических ограничений).',
      ruleFormula: 'because of + noun phrase',
      hintRu: 'Слово в связке «из-за»: because (because of).',
      russianTranslation: 'Мы не включили пожилых пациентов в эту первоначальную когорту из-за этических ограничений, наложенных комиссией клинического контроля.',
    },
    {
      id: 'u34-ex-13',
      sentenceBefore: 'I would be interested to know ',
      sentenceAfter: ' the synthesis process is reproducible at an industrial manufacturing scale.',
      promptWord: '(whether / that / what)',
      correctAnswer: 'whether',
      acceptedAnswers: ['whether', 'if'],
      ruleExplanationRu:
        'Вежливый косвенный вопрос с выбором «да/нет»: "I would be interested to know whether / if...". В академической речи "whether" предпочтительнее "if".',
      ruleFormula: 'interested to know whether + clause',
      hintRu: 'Союзное слово «ли»: whether.',
      russianTranslation: 'Мне было бы интересно узнать, воспроизводим ли процесс синтеза в промышленных масштабах производства.',
    },
    {
      id: 'u34-ex-14',
      sentenceBefore: 'Perhaps we could discuss this further ',
      sentenceAfter: ' the upcoming coffee break so that we stay on schedule?',
      promptWord: '(preposition: during / at / on)',
      correctAnswer: 'during',
      acceptedAnswers: ['during', 'over'],
      ruleExplanationRu:
        'Дипломатичный перенос длинного спора на кофе-брейк: "during the coffee break" или "over coffee". Это помогает уложиться в регламент секции.',
      ruleFormula: 'discuss this further during the break / over coffee',
      hintRu: 'Предлог «во время»: during (или over).',
      russianTranslation: 'Возможно, мы могли бы обсудить это подробнее во время предстоящего кофе-брейка, чтобы не выбиваться из регламента?',
    },
    {
      id: 'u34-ex-15',
      sentenceBefore: 'You raised a very valid concern regarding sample size. In fact, we are currently ',
      sentenceAfter: ' data for an expanded follow-up study.',
      promptWord: '(collect: collecting / collected)',
      correctAnswer: 'collecting',
      acceptedAnswers: ['collecting'],
      ruleExplanationRu:
        'Действие разворачивается в настоящее время (currently): Present Continuous — "we are currently collecting data".',
      ruleFormula: 'are currently + V-ing',
      hintRu: 'Глагол в форме Present Continuous: collecting.',
      russianTranslation: 'Вы подняли очень обоснованное беспокойство касательно размера выборки. На самом деле мы в настоящее время собираем данные для расширенного последующего исследования.',
    },
    {
      id: 'u34-ex-16',
      sentenceBefore: 'I am afraid that falls outside the ',
      sentenceAfter: ' of what our computational cluster was equipped to simulate.',
      promptWord: '(realm: realm / region)',
      correctAnswer: 'realm',
      acceptedAnswers: ['realm', 'scope'],
      ruleExplanationRu:
        'Идиома "falls outside the realm / scope of..." (находится за пределами области возможностей).',
      ruleFormula: 'falls outside the realm/scope of...',
      hintRu: 'Слово «область / сфера возможностей»: realm (или scope).',
      russianTranslation: 'Боюсь, это выходит за рамки того, что наш вычислительный кластер был способен смоделировать.',
    },
    {
      id: 'u34-ex-17',
      sentenceBefore: 'May I ask ',
      sentenceAfter: ' algorithm you utilized for dimensionality reduction before running the neural network?',
      promptWord: '(which / what / who)',
      correctAnswer: 'which',
      acceptedAnswers: ['which', 'what'],
      ruleExplanationRu:
        'Вежливый вопрос с выбором из известных алгоритмов (PCA, t-SNE, UMAP и т.д.): "Which algorithm did you utilize...?".',
      ruleFormula: 'May I ask which + noun + you utilized...',
      hintRu: 'Вопросительное местоимение выбора: which.',
      russianTranslation: 'Могу я спросить, какой именно алгоритм снижения размерности вы применили перед запуском нейросети?',
    },
    {
      id: 'u34-ex-18',
      sentenceBefore: 'We acknowledge that our dataset had certain ',
      sentenceAfter: ', particularly with regard to geographical representation.',
      promptWord: '(limitations: limitations / limits)',
      correctAnswer: 'limitations',
      acceptedAnswers: ['limitations'],
      ruleExplanationRu:
        'В академическом дискурсе внутренние методические недостатки исследования принято называть словом "limitations" (ограничения исследования), а не физическими "limits".',
      ruleFormula: 'acknowledge that the study had limitations',
      hintRu: 'Академический термин для ограничений работы: limitations.',
      russianTranslation: 'Мы признаем, что наш массив данных имел определенные ограничения, в особенности касательно географической репрезентативности.',
    },
    {
      id: 'u34-ex-19',
      sentenceBefore: 'Did I answer your question ',
      sentenceAfter: ', or would you like me to clarify that secondary mechanism further?',
      promptWord: '(adequate: adequately / adequate)',
      correctAnswer: 'adequately',
      acceptedAnswers: ['adequately', 'satisfactorily'],
      ruleExplanationRu:
        'Вежливая проверка у спикера: "Did I answer your question adequately?" (Достаточно ли полно я ответил на ваш вопрос?). Наречие определяет глагол answer.',
      ruleFormula: 'Did I answer your question adequately?',
      hintRu: 'Наречие «адекватно / в достаточной мере»: adequately.',
      russianTranslation: 'Я ответил на ваш вопрос в достаточной мере, или вы хотите, чтобы я подробнее пояснил второй механизм?',
    },
    {
      id: 'u34-ex-20',
      sentenceBefore: 'That is a novel angle that had not ',
      sentenceAfter: ' to us during the experimental design stage.',
      promptWord: '(occur: occurred / occur)',
      correctAnswer: 'occurred',
      acceptedAnswers: ['occurred'],
      ruleExplanationRu:
        'Идиома "it had not occurred to us" (это не приходило нам в голову / мы об этом не подумали). 3-я форма глагола occur с удвоением: occurred.',
      ruleFormula: 'had not occurred to someone',
      hintRu: 'Форма V3 глагола occur с удвоенной r: occurred.',
      russianTranslation: 'Это свежий взгляд, который не приходил нам в голову на этапе планирования эксперимента.',
    },
    {
      id: 'u34-ex-21',
      sentenceBefore: 'If you would like to see the raw spectrographic data, please drop ',
      sentenceAfter: ' my poster tomorrow afternoon at session B.',
      promptWord: '(preposition: by / in / on)',
      correctAnswer: 'by',
      acceptedAnswers: ['by'],
      ruleExplanationRu:
        'Фразовый глагол "drop by" означает заглянуть ненадолго, подойти: "drop by my poster / my lab".',
      ruleFormula: 'drop by + location/poster',
      hintRu: 'Послелог фразового глагола заглянуть: by (drop by).',
      russianTranslation: 'Если вы хотите взглянуть на необработанные спектрографические данные, пожалуйста, подойдите к моему стендовому докладу завтра во второй половине дня на секции B.',
    },
    {
      id: 'u34-ex-22',
      sentenceBefore: 'We would certainly welcome the opportunity to ',
      sentenceAfter: ' with your group on replicating this assay.',
      promptWord: '(collaborate: collaborate / collaborating)',
      correctAnswer: 'collaborate',
      acceptedAnswers: ['collaborate'],
      ruleExplanationRu:
        'После "opportunity to..." используется инфинитив: collaborate (сотрудничать). Это открытый сигнал к коллаборации после удачного вопроса.',
      ruleFormula: 'opportunity to collaborate with someone',
      hintRu: 'Инфинитив глагола сотрудничать: collaborate.',
      russianTranslation: 'Мы были бы определенно рады возможности посотрудничать с вашей группой в воспроизведении этого анализа.',
    },
  ],
};
