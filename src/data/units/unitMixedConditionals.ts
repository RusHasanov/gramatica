import { CambridgeUnit } from '../cambridgeUnits';

export const unitMixedConditionals: CambridgeUnit = {
  id: 'unit-30-mixed-conditionals' as const,
  unitNumber: 30,
  level: 'C1-C2',
  book: 'Hewings Advanced (Green)',
  category: 'Advanced',
  titleEn: 'Mixed Conditionals: Hypothetical Past & Present Interactions',
  titleRu: 'Смешанные условные предложения (Mixed Conditionals): связь нереального прошлого и настоящего',
  ruleSummaryRu:
    'Смешанные условные предложения (Mixed Conditionals) связывают нереальное условие в одном временном плане с нереальным следствием в другом временном плане.\n\n' +
    '1. Тип 1: Прошедшее условие -> Настоящее следствие (Past Condition -> Present Result):\n' +
    '   - Если бы в прошлом произошло (или не произошло) действие, то сейчас положение дел было бы иным.\n' +
    '   - Придаточное (If-clause): Past Perfect (had + V3 / had been).\n' +
    '   - Главное предложение: would / could / might + V1 (bare infinitive).\n' +
    '   - Маркеры в главном: now, today, currently, at present.\n' +
    '   - Пример: "If the climatologists had not modeled the oceanic warming ten years ago, global temperature projections would not be so accurate today."\n' +
    '   - Инверсия: "Had the researchers not synthesized the antibody earlier, the epidemic would now be uncontrollable."\n\n' +
    '2. Тип 2: Постоянное / Настоящее свойство -> Прошедшее следствие (Present/General Condition -> Past Result):\n' +
    '   - Если бы субъект обладал определенным постоянным свойством или находился в ином состоянии сейчас, то в прошлом он поступил бы иначе.\n' +
    '   - Придаточное (If-clause): Past Simple / Subjunctive Were (were / were not).\n' +
    '   - Главное предложение: would / could / might + have + V3.\n' +
    '   - Пример: "If the viral spike protein were less prone to mutation, immunologists would have developed a definitive universal vaccine years ago."\n' +
    '   - Инверсия: "Were the composite ceramic less brittle, the spacecraft would not have suffered hull fracture upon atmospheric re-entry."',
  keyFormula:
    'Past -> Present: If + had + V3, ... would + V1 (now)\nPresent/General -> Past: If + were / Past Simple, ... would have + V3 (then)',
  markerWords: [
    'now / today / currently (в главном предложении Типа 1)',
    'If ... had + V3 ... would be',
    'If ... were ... would have been',
    'Had S (not) + V3, S would + V1',
    'Were it not for ... S would have + V3',
  ],
  pitfallsRu:
    '1. Не путайте чистый 3rd Conditional (прошлое -> прошлое: If had done, would have done) со смешанным (прошлое -> настоящее: If had done, would do NOW).\n' +
    '2. В придаточном условия сослагательного наклонения для 1 и 3 лица единственного числа академической нормой является "were", а не "was": "If the alloy were more ductile..." (НЕ: "was").\n' +
    '3. Внимание на модальные оттенки: "could + V1" выражает возможность в настоящем, "might + V1" — предположение с меньшей вероятностью.',
  exercises: [
    {
      id: 'u30-ex-1',
      sentenceBefore: 'If the laboratory had properly calibrated the mass spectrometer last Friday, the current analytical readings ',
      sentenceAfter: ' much more consistent.',
      promptWord: '(be: would be / would have been)',
      correctAnswer: 'would be',
      acceptedAnswers: ['would be'],
      ruleExplanationRu:
        'Условие относится к прошлому (had properly calibrated last Friday), а следствие — к текущему моменту (the current readings), поэтому используется would + V1: would be.',
      ruleFormula: 'If + had + V3, S + would + V1 (now)',
      hintRu: 'Нереальное следствие в настоящем времени: would be.',
      russianTranslation: 'Если бы лаборатория должным образом откалибровала масс-спектрометр в прошлую пятницу, текущие аналитические показания были бы гораздо более стабильными.',
    },
    {
      id: 'u30-ex-2',
      sentenceBefore: 'If human mitochondrial DNA ',
      sentenceAfter: ' so highly conserved across evolutionary generations, phylogeneticists would not have been able to trace ancient human migrations with such precision.',
      promptWord: '(not / be: were not / had not been)',
      correctAnswer: 'were not',
      acceptedAnswers: ['were not', "weren't"],
      ruleExplanationRu:
        'Консервативность ДНК — это постоянное биологическое свойство (General / Present state), поэтому в придаточном используется Past Subjunctive: were not (а следствие в прошлом: would not have been able).',
      ruleFormula: 'If + were not (general trait), S + would have + V3',
      hintRu: 'Постоянное свойство генома: were not.',
      russianTranslation: 'Если бы митохондриальная ДНК человека не была столь высококонсервативной на протяжении эволюционных поколений, филогенетики не смогли бы проследить древние миграции человека с такой точностью.',
    },
    {
      id: 'u30-ex-3',
      sentenceBefore: 'Had the epidemiological task force not intervened immediately after the index case was identified, the metropolitan hospital system ',
      sentenceAfter: ' completely overwhelmed right now.',
      promptWord: '(be: would be / would have been)',
      correctAnswer: 'would be',
      acceptedAnswers: ['would be'],
      ruleExplanationRu:
        'Инвертированное условие в прошлом (Had they not intervened) влияет на положение дел "right now" (прямо сейчас), требуя формы смешанного типа: would be.',
      ruleFormula: 'Had + S + not + V3, S + would be + now',
      hintRu: 'Следствие в настоящий момент (right now): would be.',
      russianTranslation: 'Если бы эпидемиологическая рабочая группа не вмешалась немедленно после выявления нулевого пациента, система столичных больниц была бы полностью перегружена прямо сейчас.',
    },
    {
      id: 'u30-ex-4',
      sentenceBefore: 'If the planetary core ',
      sentenceAfter: ' a dynamic magnetic dynamo, the solar wind would have stripped away the Martian atmosphere billions of years ago.',
      promptWord: '(possess: possessed / had possessed)',
      correctAnswer: 'possessed',
      acceptedAnswers: ['possessed'],
      ruleExplanationRu:
        'Речь идет о постоянном свойстве планетарного ядра (Present/General state): "If the planetary core possessed...". В главном предложении результат в далеком прошлом: would have stripped away.',
      ruleFormula: 'If + Past Simple (general property), S + would have + V3',
      hintRu: 'Постоянное свойство (Past Simple): possessed.',
      russianTranslation: 'Если бы планетарное ядро обладало динамическим магнитным динамо, солнечный ветер не сорвал бы марсианскую атмосферу миллиарды лет назад.',
    },
    {
      id: 'u30-ex-5',
      sentenceBefore: 'If the peer reviewers had caught the methodological discrepancy in the regression analysis, the authors ',
      sentenceAfter: ' currently defending their retracted publication before the university ethics board.',
      promptWord: '(not / be: would not be / would not have been)',
      correctAnswer: 'would not be',
      acceptedAnswers: ['would not be', "wouldn't be"],
      ruleExplanationRu:
        'Прошедшее нереальное условие (had caught) соотносится с текущим положением дел (currently defending): отрицание "would not be".',
      ruleFormula: 'If + had + V3, S + would not be + currently V-ing',
      hintRu: 'Следствие в текущий момент (currently): would not be.',
      russianTranslation: 'Если бы рецензенты вовремя заметили методологическое расхождение в регрессионном анализе, авторы не защищали бы сейчас свою отозванную публикацию перед университетской комиссией по этике.',
    },
    {
      id: 'u30-ex-6',
      sentenceBefore: 'If the computational linguist ',
      sentenceAfter: ' so deeply versed in comparative Semitic morphology, she would never have deciphered the bilingual Ugaritic tablet last winter.',
      promptWord: '(not / be: were not / had not been)',
      correctAnswer: 'were not',
      acceptedAnswers: ['were not', "weren't"],
      ruleExplanationRu:
        'Глубокая эрудиция и компетенция лингвиста — постоянная характеристика интеллекта (Present state): "were not". Результат имел место прошлой зимой: would never have deciphered.',
      ruleFormula: 'If + were not (permanent attribute), S + would have + V3',
      hintRu: 'Постоянная характеристика субъекта: were not.',
      russianTranslation: 'Если бы лингвист-компаративист не разбиралась столь глубоко в сравнительной семитской морфологии, она никогда бы не расшифровала двуязычную угаритскую табличку прошлой зимой.',
    },
    {
      id: 'u30-ex-7',
      sentenceBefore: 'Had the seismic reinforcement girders not been installed during the 2018 retrofitting, the skyscraper ',
      sentenceAfter: ' still standing after today’s magnitude 7.4 earthquake.',
      promptWord: '(not / be: would not be / would not have been)',
      correctAnswer: 'would not be',
      acceptedAnswers: ['would not be', "wouldn't be"],
      ruleExplanationRu:
        'Действие по установке балок произошло в 2018 году (had not been installed), а состояние "still standing" относится к настоящему моменту: would not be.',
      ruleFormula: 'Had + S + not been + V3, S + would not be + now',
      hintRu: 'Нереальное состояние здания сейчас: would not be.',
      russianTranslation: 'Если бы во время модернизации 2018 года не были установлены сейсмоусиливающие балки, небоскреб не стоял бы на месте после сегодняшнего землетрясения магнитудой 7,4.',
    },
    {
      id: 'u30-ex-8',
      sentenceBefore: 'If the neural network architecture ',
      sentenceAfter: ' so computationally resource-intensive, our research group would have deployed the diagnostic model on mobile devices six months ago.',
      promptWord: '(not / be: were not / had not been)',
      correctAnswer: 'were not',
      acceptedAnswers: ['were not', "weren't"],
      ruleExplanationRu:
        'Ресурсоемкость архитектуры — это внутреннее перманентное техническое свойство модели (were not). Следствие относится к периоду шесть месяцев назад (would have deployed).',
      ruleFormula: 'If + were not (inherent property), S + would have + V3',
      hintRu: 'Постоянное техническое свойство нейросети: were not.',
      russianTranslation: 'Если бы архитектура нейросети не была столь требовательной к вычислительным ресурсам, наша исследовательская группа развернула бы диагностическую модель на мобильных устройствах еще полгода назад.',
    },
    {
      id: 'u30-ex-9',
      sentenceBefore: 'If the environmental protection agency had banned perfluoroalkyl substances twenty years ago, these bioaccumulative toxins ',
      sentenceAfter: ' detectable in the bloodstream of 98% of the adult population today.',
      promptWord: '(not / be: would not be / would not have been)',
      correctAnswer: 'would not be',
      acceptedAnswers: ['would not be', "wouldn't be"],
      ruleExplanationRu:
        'Запрет мог произойти 20 лет назад (had banned), но токсины обнаруживаются сегодня (detectable... today): mixed conditional с "would not be".',
      ruleFormula: 'If + had + V3, S + would not be + today',
      hintRu: 'Следствие в настоящий день (today): would not be.',
      russianTranslation: 'Если бы агентство по охране окружающей среды запретило перфторалкильные соединения двадцать лет назад, эти биоаккумулирующие токсины не обнаруживались бы сегодня в крови 98% взрослого населения.',
    },
    {
      id: 'u30-ex-10',
      sentenceBefore: 'If the superalloy ',
      sentenceAfter: ' such extraordinary tensile strength at temperatures exceeding 1200°C, the turbine blades would have melted during the atmospheric re-entry test.',
      promptWord: '(not / exhibit: did not exhibit / had not exhibited)',
      correctAnswer: 'did not exhibit',
      acceptedAnswers: ['did not exhibit'],
      ruleExplanationRu:
        'Сверхпрочность сплава — фундаментальное физико-химическое свойство материала (Present/General condition: did not exhibit). Следствие имело место во время прошлых испытаний: would have melted.',
      ruleFormula: 'If + did not exhibit (general property), S + would have + V3',
      hintRu: 'Постоянное физическое свойство материала (Past Simple): did not exhibit.',
      russianTranslation: 'Если бы суперсплав не обладал столь исключительным пределом прочности при растяжении при температуре свыше 1200°C, лопатки турбины расплавились бы во время испытания на вход в плотные слои атмосферы.',
    },
    {
      id: 'u30-ex-11',
      sentenceBefore: 'Had the patient’s renal biopsy been analyzed twenty-four hours earlier, the nephrologist ',
      sentenceAfter: ' capable of reversing the acute tubular necrosis right now.',
      promptWord: '(be: would be / would have been)',
      correctAnswer: 'would be',
      acceptedAnswers: ['would be', 'might be', 'could be'],
      ruleExplanationRu:
        'Анализ был сделан раньше в прошлом (Had ... been analyzed), а способность обратить процесс вспять рассматривается в настоящем (right now): would be.',
      ruleFormula: 'Had + S + been + V3, S + would be + right now',
      hintRu: 'Возможность в настоящем (right now): would be.',
      russianTranslation: 'Если бы биопсия почки пациента была проанализирована на двадцать четыре часа раньше, нефролог был бы способен обратить вспять острый канальцевый некроз прямо сейчас.',
    },
    {
      id: 'u30-ex-12',
      sentenceBefore: 'If modern macroeconomic theory ',
      sentenceAfter: ' capable of accounting for nonlinear behavioral panics, central banks would have anticipated the 2008 liquidity crunch.',
      promptWord: '(be: were / had been)',
      correctAnswer: 'were',
      acceptedAnswers: ['were'],
      ruleExplanationRu:
        'Теоретическая модель и ее возможности оцениваются как общее состояние науки (If theory were capable). Следствие относится к кризису 2008 года: would have anticipated.',
      ruleFormula: 'If + were + capable, S + would have + V3',
      hintRu: 'Общее состояние научной теории (Subjunctive): were.',
      russianTranslation: 'Если бы современная макроэкономическая теория была способна учитывать нелинейные поведенческие паники, центральные банки предвидели бы кризис ликвидности 2008 года.',
    },
    {
      id: 'u30-ex-13',
      sentenceBefore: 'If the astrophysicists had detected the anomalous orbital perturbation in 2019, the tracking consortium ',
      sentenceAfter: ' frantically calculating the collision trajectory of the asteroid at this very moment.',
      promptWord: '(not / be: would not be / would not have been)',
      correctAnswer: 'would not be',
      acceptedAnswers: ['would not be', "wouldn't be"],
      ruleExplanationRu:
        'Обнаружение в 2019 году (had detected) сопоставляется с происходящим вычислением в данную минуту (at this very moment): would not be.',
      ruleFormula: 'If + had + V3, S + would not be + V-ing at this moment',
      hintRu: 'Следствие в данный момент (at this very moment): would not be.',
      russianTranslation: 'Если бы астрофизики зафиксировали аномальное орбитальное возмущение в 2019 году, консорциум слежения не рассчитывал бы лихорадочно траекторию столкновения астероида в этот самый момент.',
    },
    {
      id: 'u30-ex-14',
      sentenceBefore: 'Were the deep mantle convection plumes not ',
      sentenceAfter: ' continuous heat toward the continental lithosphere, the rift valley would have stabilized millennia ago.',
      promptWord: '(transfer: transferring / transferred)',
      correctAnswer: 'transferring',
      acceptedAnswers: ['transferring'],
      ruleExplanationRu:
        'Конструкция сослагательного наклонения с инверсией и длительностью: "Were [subject] not transferring continuous heat...". Процесс продолжается непрерывно.',
      ruleFormula: 'Were + S + not transferring..., S + would have + V3',
      hintRu: 'Причастие настоящего времени в длительном процессе: transferring.',
      russianTranslation: 'Если бы мантийные конвекционные плюмы не передавали непрерывное тепло континентальной литосфере, рифтовая долина стабилизировалась бы тысячелетия назад.',
    },
    {
      id: 'u30-ex-15',
      sentenceBefore: 'If the pharmaceutical consortium had not secured an exclusive patent twenty years ago, generic life-saving antibiotics ',
      sentenceAfter: ' readily accessible and affordable to vulnerable developing nations today.',
      promptWord: '(be: would be / would have been)',
      correctAnswer: 'would be',
      acceptedAnswers: ['would be'],
      ruleExplanationRu:
        'Прошедшее нереальное условие (had not secured 20 years ago) и следствие в сегодняшнем дне (accessible today): would be.',
      ruleFormula: 'If + had not + V3, S + would be + today',
      hintRu: 'Следствие сегодня (today): would be.',
      russianTranslation: 'Если бы фармацевтический консорциум не закрепил за собой эксклюзивный патент двадцать лет назад, жизненно важные антибиотики-дженерики были бы легкодоступны и недороги для уязвимых развивающихся стран сегодня.',
    },
    {
      id: 'u30-ex-16',
      sentenceBefore: 'If the principal investigator ',
      sentenceAfter: ' so obstinately dogmatic regarding the validity of his hypothesis, he would have accepted the contradictory spectrographic data presented last semester.',
      promptWord: '(not / be: were not / had not been)',
      correctAnswer: 'were not',
      acceptedAnswers: ['were not', "weren't"],
      ruleExplanationRu:
        'Упрямый и догматичный характер исследователя — постоянная черта личности (were not). Следствие — отвергнутые в прошлом семестре данные (would have accepted).',
      ruleFormula: 'If + were not (personality trait), S + would have + V3',
      hintRu: 'Постоянная черта характера ученого: were not.',
      russianTranslation: 'Если бы главный исследователь не был столь упрямо догматичен в отношении обоснованности своей гипотезы, он принял бы противоречащие ей спектрографические данные, представленные в прошлом семестре.',
    },
    {
      id: 'u30-ex-17',
      sentenceBefore: 'Had the Cryo-EM imaging apparatus not malfunctioned during the crystallization phase, the research team ',
      sentenceAfter: ' publish the atomic coordinates of the ribosome complex in Nature this week.',
      promptWord: '(can: could / could have)',
      correctAnswer: 'could',
      acceptedAnswers: ['could'],
      ruleExplanationRu:
        'Поломка аппарата случилась на этапе кристаллизации (прошлое: Had not malfunctioned), а возможность опубликовать статью существует на этой неделе (this week): форма could (эквивалент would be able to).',
      ruleFormula: 'Had + S + not + V3, S + could + V1 + this week',
      hintRu: 'Возможность в настоящем времени (на этой неделе): could.',
      russianTranslation: 'Если бы аппарат криоэлектронной микроскопии не вышел из строя во время фазы кристаллизации, исследовательская группа могла бы опубликовать атомные координаты рибосомного комплекса в Nature уже на этой неделе.',
    },
    {
      id: 'u30-ex-18',
      sentenceBefore: 'If the enzyme ',
      sentenceAfter: ' an optimum catalytic threshold at neutral pH, the biochemical reaction would have stalled when the buffer acidified yesterday.',
      promptWord: '(not / maintain: did not maintain / had not maintained)',
      correctAnswer: 'did not maintain',
      acceptedAnswers: ['did not maintain'],
      ruleExplanationRu:
        'Биохимическое свойство фермента поддерживать оптимум при нейтральном pH — фундаментальная константа (did not maintain). Остановка реакции рассматривается в прошедшем времени: would have stalled.',
      ruleFormula: 'If + did not maintain (biochemical constant), S + would have + V3',
      hintRu: 'Постоянная физиологическая характеристика фермента: did not maintain.',
      russianTranslation: 'Если бы фермент не сохранял оптимальный каталитический порог при нейтральном рН, биохимическая реакция остановилась бы, когда буфер подкислился вчера.',
    },
    {
      id: 'u30-ex-19',
      sentenceBefore: 'If quantum entanglement had been completely disproven by Bell’s theorem experiments, quantum teleportation ',
      sentenceAfter: ' considered a viable technological paradigm in contemporary theoretical physics.',
      promptWord: '(not / be: would not be / would not have been)',
      correctAnswer: 'would not be',
      acceptedAnswers: ['would not be', "wouldn't be"],
      ruleExplanationRu:
        'Гипотетическое опровержение в прошлом (had been disproven) сопоставляется с современным статусом теории (in contemporary theoretical physics): would not be.',
      ruleFormula: 'If + had been + V3, S + would not be + in contemporary physics',
      hintRu: 'Современный статус (contemporary): would not be.',
      russianTranslation: 'Если бы квантовая запутанность была полностью опровергнута экспериментами с теоремой Белла, квантовая телепортация не считалась бы жизнеспособной технологической парадигмой в современной теоретической физике.',
    },
    {
      id: 'u30-ex-20',
      sentenceBefore: 'If the Antarctic ice shelf were not structurally resilient, centuries of ocean circulation ',
      sentenceAfter: ' its bedrock grounding line long ago.',
      promptWord: '(erode: would erode / would have eroded)',
      correctAnswer: 'would have eroded',
      acceptedAnswers: ['would have eroded'],
      ruleExplanationRu:
        'Устойчивость шельфа — текущее геофизическое состояние (were not resilient), а размыв линии опирания на дно произошел бы давно (long ago): would have eroded.',
      ruleFormula: 'If + were not (present state), S + would have + V3 (long ago)',
      hintRu: 'Следствие в давнем прошлом (long ago): would have eroded.',
      russianTranslation: 'Если бы антарктический шельфовый ледник не обладал структурной устойчивостью, столетия океанической циркуляции уже давно размыли бы его линию опирания на коренные породы.',
    },
    {
      id: 'u30-ex-21',
      sentenceBefore: 'Had the European central banking authorities raised prime interest rates eighteen months ago, inflationary pressures in the consumer sector ',
      sentenceAfter: ' considerably less severe at present.',
      promptWord: '(be: would be / would have been)',
      correctAnswer: 'would be',
      acceptedAnswers: ['would be'],
      ruleExplanationRu:
        'Поднятие ставок произошло 18 месяцев назад (Had raised 18 months ago), а инфляционное давление оценивается в настоящий момент (at present): would be.',
      ruleFormula: 'Had + S + V3, S + would be + at present',
      hintRu: 'Следствие в настоящий момент (at present): would be.',
      russianTranslation: 'Если бы европейские центральные банковские власти повысили ключевые процентные ставки восемнадцать месяцев назад, инфляционное давление в потребительском секторе было бы значительно менее острым в настоящее время.',
    },
    {
      id: 'u30-ex-22',
      sentenceBefore: 'If archaeological stratigraphy ',
      sentenceAfter: ' inherently ambiguous in alluvial floodplains, the excavation team would have established the precise ceramic chronosequence during their previous expedition.',
      promptWord: '(not / be: were not / had not been)',
      correctAnswer: 'were not',
      acceptedAnswers: ['were not', "weren't"],
      ruleExplanationRu:
        'Неоднозначность аллювиальной стратиграфии — неотъемлемое свойство речных пойм (were not). Экспедиция и установление хронологии происходили в прошлом: would have established.',
      ruleFormula: 'If + were not (inherent nature), S + would have + V3',
      hintRu: 'Неотъемлемое свойство ландшафта: were not.',
      russianTranslation: 'Если бы археологическая стратиграфия не была по своей сути неоднозначной в аллювиальных поймах рек, группа раскопок установила бы точную керамическую хронопоследовательность еще во время своей предыдущей экспедиции.',
    },
  ],
};
