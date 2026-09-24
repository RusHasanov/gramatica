import { CambridgeUnit } from '../cambridgeUnits';

export const unitImpersonalPassive: CambridgeUnit = {
  id: 'unit-32-impersonal-passive',
  unitNumber: 32,
  level: 'C1-C2',
  book: 'Hewings Advanced (Green)',
  category: 'Advanced',
  titleEn: 'Impersonal Passive: It is said that... / He is believed to have...',
  titleRu: 'Безличный и субъективный пассив с инфинитивом: It is said that..., He is believed to have...',
  ruleSummaryRu:
    'В академическом, научном и новостном регистре безличные пассивные конструкции (Impersonal / Subjective Passive) используются для передачи гипотез, общепринятых мнений, экспертных оценок и допущений без указания конкретного источника слухов или авторов мнения.\n\n' +
    '1. Безличная модель с фиктивным "It" (It is + V3 + that...):\n' +
    '   - Формула: It + is / was / has been + [said / believed / thought / reported / estimated / alleged] + that + [придаточное предложение].\n' +
    '   - "It is widely believed that dark matter constitutes approximately 85% of the total matter in the universe."\n' +
    '   - "It was once thought that the brain could not generate new neurons in adulthood."\n\n' +
    '2. Личная модель (Субъектный инфинитивный оборот — Complex Subject):\n' +
    '   - Подлежащее придаточного предложения становится главным подлежащим, за ним идет пассивный глагол сообщения + инфинитив.\n' +
    '   - А. Simple Infinitive (to + V1 / to be) — действие одновременно с сообщением или постоянный факт:\n' +
    '     * "The bioactive molecule is reported to inhibit tumor angiogenesis."\n' +
    '   - Б. Continuous Infinitive (to be + V-ing) — действие происходит прямо сейчас, в данный период:\n' +
    '     * "The Antarctic ice shelf is thought to be thinning at an accelerating rate."\n' +
    '   - В. Perfect Infinitive (to have + V3) — действие произошло РАНЬШЕ сообщения (в прошлом):\n' +
    '     * "The prehistoric hominin is believed to have crossed the land bridge thirty thousand years ago."\n' +
    '     * "The asteroid is estimated to have collided with Earth during the late Cretaceous period."\n' +
    '   - Г. Passive Infinitive (to have been + V3 / to be + V3):\n' +
    '     * "The ancient library is claimed to have been burned during the civil war."',
  keyFormula:
    'Безличный: It is/was [said/believed] that + clause\nЛичный (факт): Subject + is/was [believed] + to + V1\nЛичный (процесс): Subject + is [thought] + to be + V-ing\nЛичный (предшествование): Subject + is [reported] + to have + V3',
  markerWords: [
    'It is said that',
    'is believed to have',
    'is thought to be',
    'is reported to exhibit',
    'is estimated to have existed',
    'are claimed to have discovered',
  ],
  pitfallsRu:
    '1. Не путайте форму инфинитива: если событие произошло в прошлом относительно момента сообщения, ОБЯЗАТЕЛЕН Perfect Infinitive: "The lost city is believed TO HAVE SUNK beneath the waves" (НЕ: "to sink").\n' +
    '2. Глаголы сообщения (believe, think, report, say, consider, know, expect) согласуются с новым подлежащим: "The researchers ARE reported to have concluded..." (множественное число!).\n' +
    '3. Глагол "say" в личной модели употребляется только в пассиве ("She is said to be..."), активная структура "They say her to be" невозможна.',
  exercises: [
    {
      id: 'u32-ex-1',
      sentenceBefore: 'It is widely ',
      sentenceAfter: ' that dark matter accounts for roughly 85% of all matter in the observable universe.',
      promptWord: '(believe: believed / believing)',
      correctAnswer: 'believed',
      acceptedAnswers: ['believed'],
      ruleExplanationRu:
        'В безличной конструкции "It is widely believed that..." глагол believe стоит в форме Past Participle (3-я форма).',
      ruleFormula: 'It is + widely + V3 (believed) + that + clause',
      hintRu: '3-я форма глагола believe в пассиве: believed.',
      russianTranslation: 'Широко распространено мнение, что темная материя составляет примерно 85% всей материи в наблюдаемой Вселенной.',
    },
    {
      id: 'u32-ex-2',
      sentenceBefore: 'The prehistoric asteroid is believed to ',
      sentenceAfter: ' struck the Yucatan peninsula approximately 66 million years ago, causing mass extinction.',
      promptWord: '(have: have / be)',
      correctAnswer: 'have',
      acceptedAnswers: ['have'],
      ruleExplanationRu:
        'Поскольку удар астероида произошел 66 миллионов лет назад (в прошлом по отношению к настоящему мнению ученых), используется Perfect Infinitive: "to have struck".',
      ruleFormula: 'is believed + to have + V3 (past action)',
      hintRu: 'Перфектный инфинитив для действия в далеком прошлом: have (to have struck).',
      russianTranslation: 'Считается, что доисторический астероид врезался в полуостров Юкатан примерно 66 миллионов лет назад, вызвав массовое вымирание.',
    },
    {
      id: 'u32-ex-3',
      sentenceBefore: 'The subterranean tectonic fault line is thought to ',
      sentenceAfter: ' moving northward at an approximate rate of two centimetres per annum.',
      promptWord: '(be: be / have been)',
      correctAnswer: 'be',
      acceptedAnswers: ['be'],
      ruleExplanationRu:
        'Движение разлома продолжается в настоящий период времени (непрерывный процесс): используется Continuous Infinitive — "to be moving".',
      ruleFormula: 'is thought + to be + V-ing (continuous process)',
      hintRu: 'Инфинитив процесса: be (to be moving).',
      russianTranslation: 'Считается, что подземный тектонический разлом движется на север со скоростью приблизительно два сантиметра в год.',
    },
    {
      id: 'u32-ex-4',
      sentenceBefore: 'The newly synthesized crystalline compound is reported to ',
      sentenceAfter: ' superconducting properties at temperatures approaching absolute zero.',
      promptWord: '(exhibit: base form)',
      correctAnswer: 'exhibit',
      acceptedAnswers: ['exhibit'],
      ruleExplanationRu:
        'Для констатации общего физического свойства или постоянного факта используется Simple Infinitive: "is reported to exhibit".',
      ruleFormula: 'is reported + to + V1 (exhibit)',
      hintRu: 'Базовая форма глагола (проявлять): exhibit.',
      russianTranslation: 'Сообщается, что вновь синтезированное кристаллическое соединение проявляет свойства сверхпроводимости при температурах, близких к абсолютному нулю.',
    },
    {
      id: 'u32-ex-5',
      sentenceBefore: 'The lost royal library of Nineveh is claimed to have ',
      sentenceAfter: ' destroyed by fire during the Babylonian conquest of the Assyrian capital.',
      promptWord: '(be: been / being)',
      correctAnswer: 'been',
      acceptedAnswers: ['been'],
      ruleExplanationRu:
        'Библиотека была разрушена в прошлом (пассивное действие, предшествующее настоящему): Perfect Passive Infinitive — "to have been destroyed".',
      ruleFormula: 'is claimed + to have been + V3',
      hintRu: '3-я форма глагола to be для пассивного перфектного инфинитива: been.',
      russianTranslation: 'Утверждается, что утраченная царская библиотека Ниневии была уничтожена пожаром во время вавилонского завоевания ассирийской столицы.',
    },
    {
      id: 'u32-ex-6',
      sentenceBefore: 'It was formerly ',
      sentenceAfter: ' that adult human neurogenesis was neurobiologically impossible.',
      promptWord: '(think: thought / thinking)',
      correctAnswer: 'thought',
      acceptedAnswers: ['thought'],
      ruleExplanationRu:
        'Безличный пассив в прошедшем времени: "It was formerly thought that..." (Ранее считалось, что...).',
      ruleFormula: 'It was + adverb + thought + that + clause',
      hintRu: '3-я форма глагола think (считалось): thought.',
      russianTranslation: 'Ранее считалось, что нейрогенез у взрослых людей нейробиологически невозможен.',
    },
    {
      id: 'u32-ex-7',
      sentenceBefore: 'Neanderthal populations are now known to have ',
      sentenceAfter: ' with early anatomically modern Homo sapiens across Eurasia.',
      promptWord: '(interbreed: interbred / interbreeding)',
      correctAnswer: 'interbred',
      acceptedAnswers: ['interbred'],
      ruleExplanationRu:
        'Скрещивание происходило в палеолите (прошлое событие): Perfect Infinitive требует 3-й формы глагола (to have interbred).',
      ruleFormula: 'are known + to have + V3 (interbred)',
      hintRu: '3-я форма глагола interbreed: interbred.',
      russianTranslation: 'В настоящее время известно, что популяции неандертальцев скрещивались с первыми анатомически современными Homo sapiens по всей Евразии.',
    },
    {
      id: 'u32-ex-8',
      sentenceBefore: 'The experimental mRNA therapeutic is considered to ',
      sentenceAfter: ' remarkably safe across all phases of preclinical trials.',
      promptWord: '(be: base form)',
      correctAnswer: 'be',
      acceptedAnswers: ['be'],
      ruleExplanationRu:
        'Оценка текущего состояния безопасности препарата: Simple Infinitive "to be remarkably safe".',
      ruleFormula: 'is considered + to be + adjective',
      hintRu: 'Простой инфинитив глагола to be: be.',
      russianTranslation: 'Экспериментальный терапевтический препарат на основе мРНК считается исключительно безопасным на всех фазах доклинических испытаний.',
    },
    {
      id: 'u32-ex-9',
      sentenceBefore: 'The Indus Valley script is estimated to ',
      sentenceAfter: ' over four hundred distinct pictographic and phonetic signs.',
      promptWord: '(contain: base form)',
      correctAnswer: 'contain',
      acceptedAnswers: ['contain'],
      ruleExplanationRu:
        'Характеристика системы письменности (постоянный факт): Simple Infinitive — "to contain over four hundred signs".',
      ruleFormula: 'is estimated + to + V1 (contain)',
      hintRu: 'Инфинитив глагола содержать: contain.',
      russianTranslation: 'По оценкам специалистов, письменность долины Инда содержит более четырехсот различных пиктографических и фонетических знаков.',
    },
    {
      id: 'u32-ex-10',
      sentenceBefore: 'The missing Antarctic expedition members were presumed to have ',
      sentenceAfter: ' from severe hypothermia during the polar blizzard of 1912.',
      promptWord: '(perish: perished / perishing)',
      correctAnswer: 'perished',
      acceptedAnswers: ['perished'],
      ruleExplanationRu:
        'Гибель произошла в 1912 году: после "were presumed to have" необходима 3-я форма глагола (to have perished).',
      ruleFormula: 'were presumed + to have + V3 (perished)',
      hintRu: '3-я форма глагола perish (погибнуть): perished.',
      russianTranslation: 'Считалось, что пропавшие члены антарктической экспедиции погибли от тяжелого переохлаждения во время полярной метели 1912 года.',
    },
    {
      id: 'u32-ex-11',
      sentenceBefore: 'It has been ',
      sentenceAfter: ' that the global mean sea level will rise between 0.5 and 1.2 metres by the end of this century.',
      promptWord: '(estimate: estimated / estimating)',
      correctAnswer: 'estimated',
      acceptedAnswers: ['estimated', 'projected'],
      ruleExplanationRu:
        'Безличная конструкция в Present Perfect Passive: "It has been estimated that...".',
      ruleFormula: 'It has been + V3 (estimated) + that + clause',
      hintRu: 'Причастие прошедшего времени от estimate: estimated.',
      russianTranslation: 'Было подсчитано, что средний уровень мирового океана поднимется на 0,5–1,2 метра к концу этого столетия.',
    },
    {
      id: 'u32-ex-12',
      sentenceBefore: 'The therapeutic enzyme is understood to ',
      sentenceAfter: ' the cellular receptor, thereby preventing viral entry.',
      promptWord: '(block: base form)',
      correctAnswer: 'block',
      acceptedAnswers: ['block'],
      ruleExplanationRu:
        'Механизм биохимического действия (постоянный факт): Simple Infinitive — "is understood to block".',
      ruleFormula: 'is understood + to + V1 (block)',
      hintRu: 'Базовая форма глагола (блокировать): block.',
      russianTranslation: 'Считается понятным, что терапевтический фермент блокирует клеточный рецептор, предотвращая тем самым проникновение вируса.',
    },
    {
      id: 'u32-ex-13',
      sentenceBefore: 'The ancient bronze vessel is acknowledged to have been ',
      sentenceAfter: ' during the late Shang dynasty.',
      promptWord: '(cast: cast / casted)',
      correctAnswer: 'cast',
      acceptedAnswers: ['cast'],
      ruleExplanationRu:
        'Литье сосуда (пассив в прошлом): глагол "cast" (отливать металл) имеет неправильную форму V3 — cast (cast - cast - cast).',
      ruleFormula: 'to have been + V3 (cast)',
      hintRu: '3-я форма неправильного глагола cast (отлит): cast.',
      russianTranslation: 'Признано, что древний бронзовый сосуд был отлит в эпоху поздней династии Шан.',
    },
    {
      id: 'u32-ex-14',
      sentenceBefore: 'It is increasingly ',
      sentenceAfter: ' that epigenetic modifications play a crucial role in transgenerational stress inheritance.',
      promptWord: '(recognize: recognized / recognizing)',
      correctAnswer: 'recognized',
      acceptedAnswers: ['recognized', 'recognised'],
      ruleExplanationRu:
        'Безличный пассив: "It is increasingly recognized that..." (Все шире признается, что...).',
      ruleFormula: 'It is + adverb + V3 (recognized) + that + clause',
      hintRu: '3-я форма глагола recognize: recognized.',
      russianTranslation: 'Все шире признается, что эпигенетические модификации играют ключевую роль в наследовании стресса через поколения.',
    },
    {
      id: 'u32-ex-15',
      sentenceBefore: 'The hydrothermal vents are believed to ',
      sentenceAfter: ' sustained primordial microbial life in the prebiotic oceans of the Hadean Eon.',
      promptWord: '(have: have / be)',
      correctAnswer: 'have',
      acceptedAnswers: ['have'],
      ruleExplanationRu:
        'Поддержание жизни происходило в архейскую/гадейскую эру (далекое прошлое): Perfect Infinitive — "to have sustained".',
      ruleFormula: 'are believed + to have + V3',
      hintRu: 'Вспомогательный глагол перфектного инфинитива: have.',
      russianTranslation: 'Считается, что гидротермальные источники поддерживали первобытную микробную жизнь в добенетических океанах катархейского эона.',
    },
    {
      id: 'u32-ex-16',
      sentenceBefore: 'The newly discovered celestial object is thought to be an interstellar asteroid ',
      sentenceAfter: ' the solar system at hyperbolic speed.',
      promptWord: '(traverse: traversing / traversed)',
      correctAnswer: 'traversing',
      acceptedAnswers: ['traversing'],
      ruleExplanationRu:
        'Действие разворачивается в текущий момент: причастие на -ing (traversing the solar system — пересекающий Солнечную систему).',
      ruleFormula: 'noun + V-ing (active participle in progress)',
      hintRu: 'Причастие настоящего времени (пересекающий): traversing.',
      russianTranslation: 'Считается, что вновь открытый небесный объект представляет собой межзвездный астероид, пересекающий Солнечную систему с гиперболической скоростью.',
    },
    {
      id: 'u32-ex-17',
      sentenceBefore: 'The Renaissance treatise on optics was alleged to have ',
      sentenceAfter: ' plagiarized from an earlier Arabic manuscript by Alhazen.',
      promptWord: '(be: been / being)',
      correctAnswer: 'been',
      acceptedAnswers: ['been'],
      ruleExplanationRu:
        'Трактат был списан / украден (пассивный залог в прошлом): Perfect Passive Infinitive — "to have been plagiarized".',
      ruleFormula: 'was alleged + to have been + V3',
      hintRu: 'Глагол to be в перфектном пассивном инфинитиве: been.',
      russianTranslation: 'Утверждалось, что трактат эпохи Возрождения по оптике был сплагиатирован с более ранней арабской рукописи Альхазена.',
    },
    {
      id: 'u32-ex-18',
      sentenceBefore: 'It is hypothesized ',
      sentenceAfter: ' dark energy exerts a negative repulsive gravitational pressure across cosmic scales.',
      promptWord: '(that / which / what)',
      correctAnswer: 'that',
      acceptedAnswers: ['that'],
      ruleExplanationRu:
        'В безличной конструкции с глаголом гипотезы союзное слово — "that": "It is hypothesized that...".',
      ruleFormula: 'It is hypothesized + that + clause',
      hintRu: 'Союз в безличном обороте: that.',
      russianTranslation: 'Выдвинута гипотеза о том, что темная энергия оказывает отрицательное отталкивающее гравитационное давление в космических масштабах.',
    },
    {
      id: 'u32-ex-19',
      sentenceBefore: 'The migratory songbirds are known to navigate by ',
      sentenceAfter: ' the Earth’s geomagnetic field via cryptochrome retinal proteins.',
      promptWord: '(sense: sensing / sensed)',
      correctAnswer: 'sensing',
      acceptedAnswers: ['sensing'],
      ruleExplanationRu:
        'После предлога "by" используется герундиальная форма глагола на -ing: "by sensing the geomagnetic field".',
      ruleFormula: 'by + V-ing',
      hintRu: 'Форма на -ing после предлога by: sensing.',
      russianTranslation: 'Известно, что перелетные певчие птицы ориентируются путем восприятия геомагнитного поля Земли через белки криптохромы в сетчатке.',
    },
    {
      id: 'u32-ex-20',
      sentenceBefore: 'The archaeological monument is reported to have ',
      sentenceAfter: ' severely vandalized by looters prior to the arrival of heritage conservation authorities.',
      promptWord: '(be: been / being)',
      correctAnswer: 'been',
      acceptedAnswers: ['been'],
      ruleExplanationRu:
        'Памятник подвергся разграблению до приезда специалистов: Perfect Passive Infinitive — "to have been vandalized".',
      ruleFormula: 'is reported + to have been + V3',
      hintRu: 'Форма глагола to be в перфектном пассиве: been.',
      russianTranslation: 'Сообщается, что археологический памятник был серьезно осквернен грабителями до прибытия представителей службы охраны наследия.',
    },
    {
      id: 'u32-ex-21',
      sentenceBefore: 'It was unanimously ',
      sentenceAfter: ' by the international commission that the endangered wetlands required immediate statutory conservation status.',
      promptWord: '(conclude: concluded / concluding)',
      correctAnswer: 'concluded',
      acceptedAnswers: ['concluded'],
      ruleExplanationRu:
        'Безличный пассив в прошедшем времени: "It was unanimously concluded by the commission that...".',
      ruleFormula: 'It was + adverb + concluded + that + clause',
      hintRu: '3-я форма глагола conclude: concluded.',
      russianTranslation: 'Международная комиссия единогласно пришла к выводу о том, что находящиеся под угрозой исчезновения водно-болотные угодья требуют немедленного статуса государственной охраны.',
    },
    {
      id: 'u32-ex-22',
      sentenceBefore: 'The medieval illuminated Bible is believed to have ',
      sentenceAfter: ' in the royal scriptorium of King Charles the Bald.',
      promptWord: '(originate: originated / originating)',
      correctAnswer: 'originated',
      acceptedAnswers: ['originated'],
      ruleExplanationRu:
        'Создание рукописи произошло в IX веке (предшествование): Perfect Infinitive активного глагола originate — "to have originated".',
      ruleFormula: 'is believed + to have + V3 (originated)',
      hintRu: '3-я форма глагола originate (брать начало, возникнуть): originated.',
      russianTranslation: 'Считается, что средневековая иллюминированная Библия была создана в королевском скриптории короля Карла Лысого.',
    },
  ],
};
