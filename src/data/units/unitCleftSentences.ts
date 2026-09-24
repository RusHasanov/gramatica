import { CambridgeUnit } from '../cambridgeUnits';

export const unitCleftSentences: CambridgeUnit = {
  id: 'unit-29-cleft-sentences',
  unitNumber: 29,
  level: 'C1-C2',
  book: 'Hewings Advanced (Green)',
  category: 'Advanced',
  titleEn: 'Cleft Sentences: It-clefts, Wh-clefts & Emphatic Structures',
  titleRu: 'Расщепленные предложения (Cleft Sentences): It is/was... that, Wh-clefts, All I did...',
  ruleSummaryRu:
    'Расщепленные предложения (Cleft sentences) используются в академическом и формальном английском для смыслового выделения (эмфазы) конкретного компонента высказывания — подлежащего, дополнения, обстоятельства или целого действия.\n\n' +
    '1. It-clefts (it is / was + выделяемый элемент + that / who):\n' +
    '   - Формула: It + is/was + [выделяемый член предложения] + that/who + [остальная часть].\n' +
    '   - Примеры:\n' +
    '     * Обычное: "Dr. Franklin discovered the diffraction pattern in 1952."\n' +
    '     * Cleft: "It was in 1952 that Dr. Franklin discovered the diffraction pattern." (акцент на времени)\n' +
    '     * Cleft: "It was Dr. Franklin who discovered the diffraction pattern." (акцент на авторе)\n' +
    '   - В формальном академическом регистре союзное слово "that" является стандартным даже для неодушевленных обстоятельств места и времени ("It was in the laboratory that...").\n\n' +
    '2. Wh-clefts (Pseudo-clefts c "What"):\n' +
    '   - Формула: What + [придаточное предложение] + is/was + [фокусная информация].\n' +
    '   - "What the peer review panel contested was the statistical methodology, not the empirical data."\n' +
    '   - Обратный wh-cleft (Reverse cleft): "[Элемент] + is/was what + ...": "Thermal instability was what triggered the cascade."\n\n' +
    '3. Ограничительные и именные cleft-структуры:\n' +
    '   - All (that) ... is/was ...: "All the investigators did was analyze the flight telemetry."\n' +
    '   - The only thing (that) ... is/was ...: "The only thing the team lacked was computational bandwidth."\n' +
    '   - The reason why ... is/was that ...: "The reason why the alloy degraded was that moisture penetrated the seal."\n' +
    '   - The person who ... was ...: "The scientist who formulated the hypothesis was Svante Arrhenius."',
  keyFormula:
    'It + is/was + [Focus] + that/who... | What + clause + is/was + [Focus] | All + clause + is/was + [Infinitive/Focus]',
  markerWords: [
    'It is ... that',
    'It was ... who / that',
    'What ... is / was',
    'All that ... did was',
    'The reason why ... is that',
    'The only thing ... was',
  ],
  pitfallsRu:
    '1. В It-clefts с обстоятельствами места и времени часто ошибочно используют where или when. В академическом регистре нормативным является союз "that": "It was in 1928 that Fleming discovered penicillin" (НЕ: "when Fleming discovered").\n' +
    '2. Согласование времени глагола to be в cleft-конструкции: если базовое действие в прошлом, вводная связка ВСЕГДА в прошедшем времени: "It WAS the control group that showed no improvement" (НЕ: "It is... showed").\n' +
    '3. После конструкций "All he did was..." инфинитив может употребляться как с частицей to, так и без неё (bare infinitive): "All they did was compare / to compare the cohorts."',
  exercises: [
    {
      id: 'u29-ex-1',
      sentenceBefore: 'It was ',
      sentenceAfter: ' 1953 that Watson and Crick published their landmark paper on the double helix structure of DNA.',
      promptWord: '(preposition: in / on / at)',
      correctAnswer: 'in',
      acceptedAnswers: ['in'],
      ruleExplanationRu:
        'В It-cleft для выделения обстоятельства времени используется предлог времени "in" перед годом: "It was in 1953 that...".',
      ruleFormula: 'It was in [year] that + clause',
      hintRu: 'Выделение года в cleft-предложении: предлог in.',
      russianTranslation: 'Именно в 1953 году Уотсон и Крик опубликовали свою эпохальную статью о структуре двойной спирали ДНК.',
    },
    {
      id: 'u29-ex-2',
      sentenceBefore: 'It was the lead biochemist ',
      sentenceAfter: ' first isolated the bioactive compound from the rare alpine fungus.',
      promptWord: '(who / which / what)',
      correctAnswer: 'who',
      acceptedAnswers: ['who', 'that'],
      ruleExplanationRu:
        'Для выделения одушевленного субъекта (the lead biochemist) в cleft-предложении используется относительное местоимение "who" (или нейтральное "that").',
      ruleFormula: 'It was + [person] + who/that + V2',
      hintRu: 'Выделение лица (биохимика): союзное слово who или that.',
      russianTranslation: 'Именно ведущий биохимик впервые выделил биоактивное соединение из редкого альпийского гриба.',
    },
    {
      id: 'u29-ex-3',
      sentenceBefore: 'What the econometric model failed to ',
      sentenceAfter: ' was the catastrophic disruption to the global supply chain.',
      promptWord: '(predict / predict: base form)',
      correctAnswer: 'predict',
      acceptedAnswers: ['predict'],
      ruleExplanationRu:
        'В структуре Wh-cleft: "What the econometric model failed to predict was...". После инфинитивной частицы to используется базовая форма глагола predict.',
      ruleFormula: 'What + S + failed to + V1 + was + [Focus]',
      hintRu: 'Глагол в базовой форме после failed to: predict (предсказать).',
      russianTranslation: 'Чего эконометрическая модель не сумела предсказать, так это катастрофического сбоя в глобальных цепочках поставок.',
    },
    {
      id: 'u29-ex-4',
      sentenceBefore: 'All the clinical trial participants had to ',
      sentenceAfter: ' was complete an online symptom questionnaire once every forty-eight hours.',
      promptWord: '(do / bare or to-infinitive)',
      correctAnswer: 'do',
      acceptedAnswers: ['do'],
      ruleExplanationRu:
        'В конструкции "All [subject] had to do was..." смысловой глагол в придаточном предложении — do.',
      ruleFormula: 'All + S + had to do + was + V1',
      hintRu: 'Вспомогательный глагол в обороте "All they had to...": do.',
      russianTranslation: 'Все, что участникам клинических испытаний требовалось делать, — это заполнять онлайн-анкету симптомов раз в 48 часов.',
    },
    {
      id: 'u29-ex-5',
      sentenceBefore: 'It was not until the late nineteenth century ',
      sentenceAfter: ' the germ theory of disease achieved universal consensus among medical practitioners.',
      promptWord: '(that / when / which)',
      correctAnswer: 'that',
      acceptedAnswers: ['that'],
      ruleExplanationRu:
        'В классической эмфатической конструкции "It was not until [time] that..." нормативным коннектором является союз "that" (не when!).',
      ruleFormula: 'It was not until [time] that + clause',
      hintRu: 'Нормативный союз после конструкции "It was not until...": that.',
      russianTranslation: 'Лишь в конце девятнадцатого века микробная теория болезней получила всеобщее признание среди практикующих врачей.',
    },
    {
      id: 'u29-ex-6',
      sentenceBefore: 'The reason why the semiconductor overheated ',
      sentenceAfter: ' that the thermoelectric cooling matrix had malfunctioned.',
      promptWord: '(be: past tense)',
      correctAnswer: 'was',
      acceptedAnswers: ['was'],
      ruleExplanationRu:
        'Поскольку базовое событие (the semiconductor overheated) относится к прошедшему времени, глагол-связка в cleft-структуре согласуется в Past Simple: was.',
      ruleFormula: 'The reason why + Past Simple + was that...',
      hintRu: 'Глагол to be в прошедшем времени для единственного числа (the reason): was.',
      russianTranslation: 'Причина перегрева полупроводника заключалась в том, что термоэлектрическая матрица охлаждения вышла из строя.',
    },
    {
      id: 'u29-ex-7',
      sentenceBefore: 'It is the synthesis of quantitative empirical data with qualitative ethnography ',
      sentenceAfter: ' distinguishes this sociological monograph from previous studies.',
      promptWord: '(that / what / who)',
      correctAnswer: 'that',
      acceptedAnswers: ['that', 'which'],
      ruleExplanationRu:
        'В It-cleft при выделении неодушевленного подлежащего (the synthesis of empirical data) используется союз "that" (или "which").',
      ruleFormula: 'It is + [Thing/Focus] + that + V-s',
      hintRu: 'Выделение неодушевленного подлежащего в It-cleft: that.',
      russianTranslation: 'Именно синтез количественных эмпирических данных с качественной этнографией отличает эту социологическую монографию от предшествующих исследований.',
    },
    {
      id: 'u29-ex-8',
      sentenceBefore: 'What struck the astrophysicists most forcibly ',
      sentenceAfter: ' the unexpected asymmetry in the cosmic microwave background radiation.',
      promptWord: '(be: past tense)',
      correctAnswer: 'was',
      acceptedAnswers: ['was'],
      ruleExplanationRu:
        'В Wh-cleft предложении с прошедшим временем (struck) и фокусом на единичном явлении (the unexpected asymmetry) глагол-связка имеет форму "was".',
      ruleFormula: 'What struck S + was + [Singular Noun Phrase]',
      hintRu: 'Форма прошедшего времени глагола to be: was.',
      russianTranslation: 'Что более всего поразило астрофизиков, так это неожиданная асимметрия в реликтовом космическом излучении.',
    },
    {
      id: 'u29-ex-9',
      sentenceBefore: 'It was ',
      sentenceAfter: ' profound reluctance that the ethics committee granted conditional approval for the gene-editing experiment.',
      promptWord: '(preposition: with / in / at)',
      correctAnswer: 'with',
      acceptedAnswers: ['with'],
      ruleExplanationRu:
        'Выделяется адвербиальная фраза "with profound reluctance" (с глубокой неохотой): "It was with profound reluctance that...".',
      ruleFormula: 'It was with [noun] that + clause',
      hintRu: 'Предлог образа действия (с неохотой): with.',
      russianTranslation: 'Лишь с глубокой неохотой этический комитет предоставил условное одобрение на эксперимент по редактированию генома.',
    },
    {
      id: 'u29-ex-10',
      sentenceBefore: 'The only thing the research team could not quantify ',
      sentenceAfter: ' the subjective psychological distress experienced by long-duration spaceflight crews.',
      promptWord: '(be: past tense)',
      correctAnswer: 'was',
      acceptedAnswers: ['was'],
      ruleExplanationRu:
        'Подлежащее cleft-конструкции "The only thing" требует формы единственного числа прошедшего времени "was".',
      ruleFormula: 'The only thing + S + could not V + was + [Focus]',
      hintRu: 'Единственное число прошедшего времени связочного глагола: was.',
      russianTranslation: 'Единственное, что исследовательская группа не смогла измерить количественно, — это субъективный психологический дистресс экипажей длительных космических полетов.',
    },
    {
      id: 'u29-ex-11',
      sentenceBefore: 'A sudden drop in core reactor pressure was ',
      sentenceAfter: ' prompted the safety systems to initiate an emergency shutdown.',
      promptWord: '(what / that / which)',
      correctAnswer: 'what',
      acceptedAnswers: ['what'],
      ruleExplanationRu:
        'В обратной cleft-конструкции (Reverse Wh-cleft): [Focus] + was + WHAT + clause ("A sudden drop... was WHAT prompted...").',
      ruleFormula: '[Noun Phrase] + was what + V2...',
      hintRu: 'Местоимение в обратном псевдо-cleft: what (то, что).',
      russianTranslation: 'Внезапное падение давления в активной зоне реактора — вот что побудило системы безопасности инициировать аварийную остановку.',
    },
    {
      id: 'u29-ex-12',
      sentenceBefore: 'It is not the lack of theoretical coherence, but the absence of replicable evidence, ',
      sentenceAfter: ' undermines the string theory hypothesis.',
      promptWord: '(that / which / what)',
      correctAnswer: 'that',
      acceptedAnswers: ['that'],
      ruleExplanationRu:
        'Конструкция "It is not X, but Y that...": нормативный союз для связывания противопоставленного элемента с глаголом — "that".',
      ruleFormula: 'It is not X, but Y that + V-s',
      hintRu: 'Союзное слово в эмфатической структуре: that.',
      russianTranslation: 'Не недостаток теоретической стройности, а отсутствие воспроизводимых доказательств подрывает гипотезу теории струн.',
    },
    {
      id: 'u29-ex-13',
      sentenceBefore: 'The place ',
      sentenceAfter: ' the earliest proto-cuneiform clay tablets were excavated was the ancient Mesopotamian city of Uruk.',
      promptWord: '(where / which / that)',
      correctAnswer: 'where',
      acceptedAnswers: ['where'],
      ruleExplanationRu:
        'В именной cleft-структуре с "The place" для указания на место действия используется относительное наречие "where".',
      ruleFormula: 'The place where + clause + was + [Location]',
      hintRu: 'Относительное наречие места: where.',
      russianTranslation: 'Местом, где были раскопаны самые ранние прото-клинописные глиняные таблички, был древний месопотамский город Урук.',
    },
    {
      id: 'u29-ex-14',
      sentenceBefore: 'What these evolutionary biologists are attempting to explain ',
      sentenceAfter: ' the emergence of reciprocal altruism among non-kin primates.',
      promptWord: '(be: present tense)',
      correctAnswer: 'is',
      acceptedAnswers: ['is'],
      ruleExplanationRu:
        'В Wh-cleft настоящем времени с фокусом на одном абстрактном процессе (the emergence) используется связка "is".',
      ruleFormula: 'What S + are attempting + is + [Singular Focus]',
      hintRu: 'Глагол to be в настоящем времени для единственного числа: is.',
      russianTranslation: 'То, что пытаются объяснить эти эволюционные биологи, — это возникновение взаимного альтруизма среди неродственных приматов.',
    },
    {
      id: 'u29-ex-15',
      sentenceBefore: 'It was precisely because of microscopic fissures in the titanium turbine blades ',
      sentenceAfter: ' the prototype engine suffered catastrophic decompression at supersonic velocity.',
      promptWord: '(that / why / which)',
      correctAnswer: 'that',
      acceptedAnswers: ['that'],
      ruleExplanationRu:
        'В It-cleft с обстоятельством причины (because of microscopic fissures) стандартным союзом в академической речи остается "that" (не why!).',
      ruleFormula: 'It was because of [noun] that + clause',
      hintRu: 'Союзное слово в cleft-предложении: that.',
      russianTranslation: 'Именно из-за микроскопических трещин в титановых лопатках турбины двигатель прототипа испытал катастрофическую декомпрессию на сверхзвуковой скорости.',
    },
    {
      id: 'u29-ex-16',
      sentenceBefore: 'All the geneticists needed to demonstrate their thesis ',
      sentenceAfter: ' a statistically robust sample size across diverse geographic demographics.',
      promptWord: '(be: past tense)',
      correctAnswer: 'was',
      acceptedAnswers: ['was'],
      ruleExplanationRu:
        'В конструкции "All [subject] needed ... was [singular noun phrase]" глагол связка в прошлом — "was".',
      ruleFormula: 'All S + needed + was + [Noun Phrase]',
      hintRu: 'Форма глагола to be в прошедшем времени: was.',
      russianTranslation: 'Все, что генетикам требовалось для доказательства своего тезиса, — это статистически надежный объем выборки по различным географическим популяциям.',
    },
    {
      id: 'u29-ex-17',
      sentenceBefore: 'It was during the third glacial maximum ',
      sentenceAfter: ' Neanderthal populations adapted specialized nasal morphology for hyper-arid cold climates.',
      promptWord: '(that / when / which)',
      correctAnswer: 'that',
      acceptedAnswers: ['that'],
      ruleExplanationRu:
        'В формальном It-cleft при выделении предложной фразы времени (during the third glacial maximum) используется союз "that".',
      ruleFormula: 'It was during [period] that + clause',
      hintRu: 'Нормативный союз cleft-предложения: that.',
      russianTranslation: 'Именно во время третьего ледникового максимума популяции неандертальцев выработали специализированное строение носовой полости для сверхзасушливого холодного климата.',
    },
    {
      id: 'u29-ex-18',
      sentenceBefore: 'The individual ',
      sentenceAfter: ' spearheaded the synthesis of modern quantum electrodynamics was Richard Feynman.',
      promptWord: '(who / which / whose)',
      correctAnswer: 'who',
      acceptedAnswers: ['who', 'that'],
      ruleExplanationRu:
        'В именной cleft-конструкции "The individual who spearheaded..." используется относительное местоимение "who" для лица.',
      ruleFormula: 'The individual who + V2 + was + [Name]',
      hintRu: 'Местоимение для лица (ученого): who или that.',
      russianTranslation: 'Лицом, возглавившим синтез современной квантовой электродинамики, был Ричард Фейнман.',
    },
    {
      id: 'u29-ex-19',
      sentenceBefore: 'What neurodegenerative disorders such as Alzheimer’s fundamentally impair ',
      sentenceAfter: ' synaptic plasticity in hippocampal dendritic spines.',
      promptWord: '(be: present tense)',
      correctAnswer: 'is',
      acceptedAnswers: ['is'],
      ruleExplanationRu:
        'В Wh-cleft предложении придаточное с "What" трактуется как концептуальное единство, требующее глагола-связки в единственном числе "is".',
      ruleFormula: 'What S + impair + is + [Focus]',
      hintRu: 'Форма настоящего времени глагола to be: is.',
      russianTranslation: 'То, что нейродегенеративные расстройства, такие как болезнь Альцгеймера, коренным образом нарушают, — это синаптическая пластичность в дендритных шипиках гиппокампа.',
    },
    {
      id: 'u29-ex-20',
      sentenceBefore: 'It was through meticulous radiometric dating of zircon crystals ',
      sentenceAfter: ' geochemists established the revised antiquity of the lunar crust.',
      promptWord: '(that / how / which)',
      correctAnswer: 'that',
      acceptedAnswers: ['that'],
      ruleExplanationRu:
        'Выделение обстоятельства образа действия/способа (through meticulous radiometric dating) в It-cleft оформляется союзом "that".',
      ruleFormula: 'It was through [method] that + clause',
      hintRu: 'Союзное слово в академическом It-cleft: that.',
      russianTranslation: 'Именно благодаря тщательному радиометрическому датированию кристаллов циркона геохимики установили скорректированный возраст лунной коры.',
    },
    {
      id: 'u29-ex-21',
      sentenceBefore: 'All the archival historian did was ',
      sentenceAfter: ' cross-reference the confidential ministerial diplomatic cables with the published cabinet minutes.',
      promptWord: '(cross-reference: bare infinitive)',
      correctAnswer: 'cross-reference',
      acceptedAnswers: ['cross-reference', 'to cross-reference'],
      ruleExplanationRu:
        'После "All [subject] did was..." используется инфинитив без частицы to (bare infinitive) или с ней: cross-reference.',
      ruleFormula: 'All S + did was + (to) V1',
      hintRu: 'Инфинитив глагола (сопоставить перекрестно): cross-reference.',
      russianTranslation: 'Все, что сделал архивист-историк, — это перекрестно сопоставил секретные министерские дипломатические депеши с опубликованными протоколами заседаний кабинета.',
    },
    {
      id: 'u29-ex-22',
      sentenceBefore: 'It was to the philosophical axioms of Baruch Spinoza ',
      sentenceAfter: ' Albert Einstein frequently appealed when discussing cosmological determinism.',
      promptWord: '(that / which / what)',
      correctAnswer: 'that',
      acceptedAnswers: ['that'],
      ruleExplanationRu:
        'В It-cleft при выделении предложного косвенного дополнения ("to the philosophical axioms...") связь осуществляется через "that".',
      ruleFormula: 'It was to [Focus] that + clause',
      hintRu: 'Союзное слово в It-cleft: that.',
      russianTranslation: 'Именно к философским аксиомам Баруха Спинозы Альберт Эйнштейн часто апеллировал при обсуждении космологического детерминизма.',
    },
  ],
};
