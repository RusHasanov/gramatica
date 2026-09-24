import { CambridgeUnit } from '../cambridgeUnits';

export const unitParticipleClauses: CambridgeUnit = {
  id: 'unit-31-participle-clauses',
  unitNumber: 31,
  level: 'C1-C2',
  book: 'Hewings Advanced (Green)',
  category: 'Advanced',
  titleEn: 'Participle Clauses: Present, Past and Perfect Participles',
  titleRu: 'Причастные обороты (Participle Clauses): Having finished, Written in..., Not knowing...',
  ruleSummaryRu:
    'Причастные обороты (Participle Clauses) — один из главных инструментов академического и научного стиля в английском языке. Они позволяют сжимать сложные придаточные предложения времени, причины, условия и уступки в емкие причастные конструкции.\n\n' +
    '1. Present Participle (V-ing — активный залог, одновременность или причина):\n' +
    '   - Одновременное действие: "Examining the tissue under an electron microscope, the pathologist observed severe cellular apoptosis." (= While he was examining...)\n' +
    '   - Причина (вместо because/since/as): "Knowing that the isotope was volatile, the technicians handled the canister with extreme caution." (= Because they knew...)\n\n' +
    '2. Past Participle (V3 / -ed — пассивный залог):\n' +
    '   - Сокращение пассивных конструкций: "Extracted from ancient permafrost, the viral strain possessed intact genetic material." (= After it had been extracted...)\n' +
    '   - Условие или уступка с союзами: "Although questioned by several reviewers, the mathematical lemma remained undisputed." (= Although it was questioned...)\n\n' +
    '3. Perfect Participle (Having + V3 — активный; Having been + V3 — пассивный):\n' +
    '   - Подчеркивает, что действие в причастном обороте полностью завершилось ДО действия в главном предложении (временное предшествование):\n' +
    '     * Актив: "Having sequenced the Neanderthal genome, Svante Pääbo compared it against contemporary modern human populations."\n' +
    '     * Пассив: "Having been bombarded with high-energy protons, the target atom underwent nuclear fission."\n\n' +
    '4. Отрицание в причастных оборотах (Not / Never ставятся ПЕРЕД причастием):\n' +
    '   - "Not wishing to contaminate the sterile culture, the lab assistant changed latex gloves twice."\n' +
    '   - "Never having observed such anomalous stellar luminosities before, the astronomers re-calibrated the spectroscope."',
  keyFormula:
    'Активное предшествование: Having + V3 | Пассивное предшествование: Having been + V3 | Одновременность / Причина: V-ing | Пассив: V3 / -ed | Отрицание: Not / Never + Participle',
  markerWords: [
    'Having analyzed / Having completed',
    'Having been exposed / Having been synthesized',
    'Not knowing / Not having',
    'Treated with / Discovered in',
    'Examining / Considering / Lacking',
  ],
  pitfallsRu:
    '1. Ошибка "Dangling Participle" (висячее причастие): субъект действия в причастном обороте ОБЯЗАН совпадать с грамматическим подлежащим главного предложения: "Looking through the microscope, the cells were stained" — ошибка! Правильно: "Looking through the microscope, the biologist observed stained cells".\n' +
    '2. Частица "not" ВСЕГДА предшествует причастию: "Not knowing" (НЕ: "Knowing not"), "Not having been informed" (НЕ: "Having not been informed").\n' +
    '3. Не путайте простой V-ing (одновременность) и Having + V3 (завершенное предшествование). Если одно действие является необходимым завершенным условием для второго, используется Perfect Participle.',
  exercises: [
    {
      id: 'u31-ex-1',
      sentenceBefore: '',
      sentenceAfter: ' completed the genomic sequencing of the extinct hominin, the paleoanthropologists published their findings in Nature.',
      promptWord: '(have: Having / Have / Had)',
      correctAnswer: 'Having',
      acceptedAnswers: ['Having', 'having'],
      ruleExplanationRu:
        'Для выражения действия, завершившегося ДО начала следующего действия в прошлом (активное предшествование), используется Perfect Participle: "Having completed...".',
      ruleFormula: 'Having + V3, Subject + V2',
      hintRu: 'Причастие предшествования (активный залог): Having completed.',
      russianTranslation: 'Завершив геномное секвенирование вымершего гоминина, палеоантропологи опубликовали свои выводы в журнале Nature.',
    },
    {
      id: 'u31-ex-2',
      sentenceBefore: '',
      sentenceAfter: ' in a remote Himalayan cave in 1924, the ancient Sanskrit manuscript had been miraculously preserved by the arid mountain climate.',
      promptWord: '(discover: Discovered / Discovering / Having discovered)',
      correctAnswer: 'Discovered',
      acceptedAnswers: ['Discovered', 'discovered'],
      ruleExplanationRu:
        'Подлежащее "the ancient Sanskrit manuscript" является объектом, над которым совершили действие (пассивный залог). Для сокращения пассивного придаточного используется Past Participle (V3): Discovered.',
      ruleFormula: 'Past Participle (V3), Subject + Passive Verb',
      hintRu: 'Пассивное причастие прошедшего времени: Discovered.',
      russianTranslation: 'Обнаруженная в отдаленной гималайской пещере в 1924 году, древняя санскритская рукопись чудом сохранилась благодаря засушливому горному климату.',
    },
    {
      id: 'u31-ex-3',
      sentenceBefore: '',
      sentenceAfter: ' knowing how to stabilize the runaway exothermic reaction, the chemical engineers immediately evacuated the experimental facility.',
      promptWord: '(not / know: Not knowing / Knowing not)',
      correctAnswer: 'Not knowing',
      acceptedAnswers: ['Not knowing'],
      ruleExplanationRu:
        'Отрицательная форма причастного оборота причины образуется постановкой частицы "Not" строго перед причастием настоящего времени: "Not knowing...".',
      ruleFormula: 'Not + V-ing, Subject + V2',
      hintRu: 'Отрицание перед причастием: Not knowing.',
      russianTranslation: 'Не зная, как стабилизировать неуправляемую экзотермическую реакцию, инженеры-химики немедленно эвакуировали экспериментальный комплекс.',
    },
    {
      id: 'u31-ex-4',
      sentenceBefore: '',
      sentenceAfter: ' subjected to intense ionizing radiation in the synchrotron chamber, the graphene lattice developed micro-fractures.',
      promptWord: '(have: Having been / Being / Having)',
      correctAnswer: 'Having been',
      acceptedAnswers: ['Having been', 'having been'],
      ruleExplanationRu:
        'Действие совершено над решеткой графена в прошлом (пассив) и полностью предшествовало появлению микротрещин: пассивный Perfect Participle — "Having been subjected".',
      ruleFormula: 'Having been + V3, Subject + V2',
      hintRu: 'Перфектное причастие в пассивном залоге: Having been.',
      russianTranslation: 'Подвергнувшись интенсивному ионизирующему излучению в камере синхротрона, графеновая решетка покрылась микротрещинами.',
    },
    {
      id: 'u31-ex-5',
      sentenceBefore: '',
      sentenceAfter: ' the anomalous spectral absorption lines, the astrophysicist realized that the distant quasar was shrouded in neutral hydrogen gas.',
      promptWord: '(examine: Examining / Examined)',
      correctAnswer: 'Examining',
      acceptedAnswers: ['Examining', 'examining'],
      ruleExplanationRu:
        'Действие происходит одновременно с осознанием факта ученым (активный залог): используется Present Participle (Examining).',
      ruleFormula: 'V-ing, Subject + V2',
      hintRu: 'Причастие настоящего времени в активном залоге: Examining.',
      russianTranslation: 'Исследуя аномальные спектральные линии поглощения, астрофизик осознал, что далекий квазар окутан облаком нейтрального водорода.',
    },
    {
      id: 'u31-ex-6',
      sentenceBefore: '',
      sentenceAfter: ' having encountered such an aggressive multidrug-resistant bacterium in clinical practice, the chief epidemiologist convened an urgent consultation.',
      promptWord: '(never: Never / Not)',
      correctAnswer: 'Never',
      acceptedAnswers: ['Never', 'never'],
      ruleExplanationRu:
        'Слово "Never" ставится перед Perfect Participle для подчеркивания абсолютного отсутствия предшествующего опыта: "Never having encountered...".',
      ruleFormula: 'Never having + V3, Subject + V2',
      hintRu: 'Отрицательное наречие перед перфектным причастием: Never.',
      russianTranslation: 'Никогда прежде не сталкиваясь в клинической практике со столь агрессивной полирезистентной бактерией, главный эпидемиолог созвал срочный консилиум.',
    },
    {
      id: 'u31-ex-7',
      sentenceBefore: '',
      sentenceAfter: ' with a high concentration of sodium borohydride, the synthetic ester was reduced to its corresponding primary alcohol.',
      promptWord: '(treat: Treated / Treating)',
      correctAnswer: 'Treated',
      acceptedAnswers: ['Treated', 'treated'],
      ruleExplanationRu:
        'Сложный эфир (the synthetic ester) был обработан реагентом (пассивное действие): используется Past Participle — Treated.',
      ruleFormula: 'Treated with + reagent, Subject + was V3',
      hintRu: 'Пассивное причастие от глагола treat: Treated.',
      russianTranslation: 'Будучи обработан высокой концентрацией борогидрида натрия, синтетический сложный эфир восстановился до соответствующего первичного спирта.',
    },
    {
      id: 'u31-ex-8',
      sentenceBefore: '',
      sentenceAfter: ' formulated the mathematical axioms for non-Euclidean geometry, Bernhard Riemann revolutionized modern mathematical physics.',
      promptWord: '(have: Having / Had)',
      correctAnswer: 'Having',
      acceptedAnswers: ['Having', 'having'],
      ruleExplanationRu:
        'Формулирование аксиом предшествовало революции в физике: Perfect Participle active — "Having formulated".',
      ruleFormula: 'Having + V3, Subject + V2',
      hintRu: 'Перфектное причастие: Having.',
      russianTranslation: 'Сформулировав математические аксиомы неевклидовой геометрии, Бернхард Риман произвел революцию в современной математической физике.',
    },
    {
      id: 'u31-ex-9',
      sentenceBefore: '',
      sentenceAfter: ' wishing to prejudice the outcome of the randomized double-blind trial, the research director concealed the patient allocation codes.',
      promptWord: '(not / wish: Not wishing / Wishing not)',
      correctAnswer: 'Not wishing',
      acceptedAnswers: ['Not wishing'],
      ruleExplanationRu:
        'Причастный оборот причины с отрицанием: "Not" ставится перед формой на -ing: "Not wishing...".',
      ruleFormula: 'Not + V-ing, Subject + V2',
      hintRu: 'Отрицание перед причастием настоящего времени: Not wishing.',
      russianTranslation: 'Не желая повлиять на исход рандомизированного двойного слепого исследования, научный руководитель засекретил коды распределения пациентов.',
    },
    {
      id: 'u31-ex-10',
      sentenceBefore: '',
      sentenceAfter: ' in 1896 by Henri Becquerel, natural radioactivity initially puzzled the scientific community.',
      promptWord: '(discover: Discovered / Discovering)',
      correctAnswer: 'Discovered',
      acceptedAnswers: ['Discovered', 'discovered'],
      ruleExplanationRu:
        'Естественная радиоактивность была открыта (пассивный залог по отношению к подлежащему): Past Participle — Discovered.',
      ruleFormula: 'Discovered in [year] by [agent], Subject + V2',
      hintRu: 'Пассивное причастие прошедшего времени: Discovered.',
      russianTranslation: 'Открытая в 1896 году Анри Беккерелем, естественная радиоактивность поначалу озадачила научное сообщество.',
    },
    {
      id: 'u31-ex-11',
      sentenceBefore: '',
      sentenceAfter: ' across numerous longitudinal studies, the neurodevelopmental hypothesis has gained widespread empirical support.',
      promptWord: '(replicate: Replicated / Replicating)',
      correctAnswer: 'Replicated',
      acceptedAnswers: ['Replicated', 'replicated'],
      ruleExplanationRu:
        'Гипотеза была воспроизведена (пассивное значение): Past Participle — Replicated.',
      ruleFormula: 'Replicated across + studies, Subject + has V3',
      hintRu: 'Пассивное причастие от глагола replicate: Replicated.',
      russianTranslation: 'Будучи воспроизведенной в многочисленных лонгитюдных исследованиях, нейроонтогенетическая гипотеза получила широкую эмпирическую поддержку.',
    },
    {
      id: 'u31-ex-12',
      sentenceBefore: '',
      sentenceAfter: ' been rejected by three prominent journals, the groundbreaking paper was eventually accepted by Science.',
      promptWord: '(have: Having / Have)',
      correctAnswer: 'Having',
      acceptedAnswers: ['Having', 'having'],
      ruleExplanationRu:
        'Предшествование в пассиве: "Having been rejected..." (после того как статья была отвергнута тремя журналами).',
      ruleFormula: 'Having been + V3, Subject + was V3',
      hintRu: 'Перфектное пассивное причастие: Having.',
      russianTranslation: 'Будучи отклоненной тремя авторитетными журналами, эта новаторская статья в итоге была принята изданием Science.',
    },
    {
      id: 'u31-ex-13',
      sentenceBefore: '',
      sentenceAfter: ' adequate computational processing capacity, the meteorologists could not execute high-resolution climate simulations.',
      promptWord: '(lack: Lacking / Lacked)',
      correctAnswer: 'Lacking',
      acceptedAnswers: ['Lacking', 'lacking'],
      ruleExplanationRu:
        'Причинный оборот (поскольку им не хватало вычислительной мощности): активное причастие настоящего времени — Lacking.',
      ruleFormula: 'Lacking + object, Subject + could not V1',
      hintRu: 'Причастие на -ing от глагола lack: Lacking.',
      russianTranslation: 'Испытывая нехватку достаточной вычислительной мощности, метеорологи не смогли запустить климатические симуляции высокого разрешения.',
    },
    {
      id: 'u31-ex-14',
      sentenceBefore: '',
      sentenceAfter: ' for more than three centuries beneath volcanic ash, the ancient Roman frescoes retained their vibrant chromatic intensity.',
      promptWord: '(bury: Buried / Burying)',
      correctAnswer: 'Buried',
      acceptedAnswers: ['Buried', 'buried'],
      ruleExplanationRu:
        'Фрески были погребены под пеплом (пассивный залог): Past Participle — Buried.',
      ruleFormula: 'Buried for + time, Subject + V2',
      hintRu: 'Пассивная 3-я форма глагола bury: Buried.',
      russianTranslation: 'Погребенные более трех столетий под вулканическим пеплом, древнеримские фрески сохранили свою яркую насыщенность цветов.',
    },
    {
      id: 'u31-ex-15',
      sentenceBefore: '',
      sentenceAfter: ' spent six months excavating the Neolithic settlement, the archaeological team unearthered several polished jade ceremonial axes.',
      promptWord: '(have: Having / Had)',
      correctAnswer: 'Having',
      acceptedAnswers: ['Having', 'having'],
      ruleExplanationRu:
        'Команда археологов сначала провела шесть месяцев на раскопках, а затем нашла топоры: активный Perfect Participle — Having spent.',
      ruleFormula: 'Having + V3 (spent), Subject + V2',
      hintRu: 'Перфектное причастие: Having.',
      russianTranslation: 'Проведя шесть месяцев на раскопках неолитического поселения, группа археологов извлекла на свет несколько ритуальных топоров из полированного нефрита.',
    },
    {
      id: 'u31-ex-16',
      sentenceBefore: '',
      sentenceAfter: ' possessing the requisite biosafety level-4 accreditation, the visiting postdoctoral fellow was denied access to the biocontainment laboratory.',
      promptWord: '(not / possess: Not possessing / Possessing not)',
      correctAnswer: 'Not possessing',
      acceptedAnswers: ['Not possessing'],
      ruleExplanationRu:
        'Отрицательный причастный оборот причины: "Not possessing..." (поскольку он не обладал необходимой аккредитацией).',
      ruleFormula: 'Not possessing + object, Subject + was V3',
      hintRu: 'Отрицание перед причастием настоящего времени: Not possessing.',
      russianTranslation: 'Не обладая необходимой аккредитацией 4-го уровня биобезопасности, приглашенный постдок получил отказ в доступе в лабораторию биологической изоляции.',
    },
    {
      id: 'u31-ex-17',
      sentenceBefore: '',
      sentenceAfter: ' to cryogenic temperatures below 4 Kelvin, the ceramic composite became superconducting with zero electrical resistance.',
      promptWord: '(cool: Cooled / Cooling)',
      correctAnswer: 'Cooled',
      acceptedAnswers: ['Cooled', 'cooled'],
      ruleExplanationRu:
        'Керамический композит охладили (пассивное состояние/условие): Past Participle — Cooled.',
      ruleFormula: 'Cooled to + temperature, Subject + became + adjective',
      hintRu: 'Пассивное причастие прошедшего времени от глагола cool: Cooled.',
      russianTranslation: 'Будучи охлажденным до криогенных температур ниже 4 Кельвинов, керамический композит перешел в сверхпроводящее состояние с нулевым электрическим сопротивлением.',
    },
    {
      id: 'u31-ex-18',
      sentenceBefore: '',
      sentenceAfter: ' synthesized the novel polymer in sufficient quantities, the bioengineers commenced biocompatibility tests in vivo.',
      promptWord: '(have: Having / Had)',
      correctAnswer: 'Having',
      acceptedAnswers: ['Having', 'having'],
      ruleExplanationRu:
        'Синтез полимера был полностью завершен до начала испытаний: Perfect Participle — "Having synthesized".',
      ruleFormula: 'Having + V3, Subject + V2',
      hintRu: 'Причастие предшествования: Having.',
      russianTranslation: 'Синтезировав новый полимер в достаточном количестве, биоинженеры приступили к тестам на биосовместимость in vivo.',
    },
    {
      id: 'u31-ex-19',
      sentenceBefore: '',
      sentenceAfter: ' in an airtight vacuum chamber, the volatile isotope decayed at its standard half-life rate.',
      promptWord: '(seal: Sealed / Sealing)',
      correctAnswer: 'Sealed',
      acceptedAnswers: ['Sealed', 'sealed'],
      ruleExplanationRu:
        'Изотоп был герметично запечатан (пассивный залог): Past Participle — Sealed.',
      ruleFormula: 'Sealed in + container, Subject + V2',
      hintRu: 'Пассивное причастие от seal: Sealed.',
      russianTranslation: 'Запечатанный в герметичной вакуумной камере, летучий изотоп распадался со своей стандартной скоростью периода полураспада.',
    },
    {
      id: 'u31-ex-20',
      sentenceBefore: '',
      sentenceAfter: ' having received formal ethical clearance from the institutional oversight panel, the oncologists halted patient enrollment immediately.',
      promptWord: '(not: Not / No)',
      correctAnswer: 'Not',
      acceptedAnswers: ['Not', 'not'],
      ruleExplanationRu:
        'Отрицание перед Perfect Participle строится с помощью отрицательной частицы "Not": "Not having received...".',
      ruleFormula: 'Not having + V3, Subject + V2',
      hintRu: 'Отрицательная частица перед перфектным причастием: Not.',
      russianTranslation: 'Не получив официального этического одобрения от комиссии институционального контроля, онкологи немедленно остановили набор пациентов.',
    },
    {
      id: 'u31-ex-21',
      sentenceBefore: '',
      sentenceAfter: ' by deep ocean seismic tremors, the underwater acoustic sensors transmitted automated tsunami alerts to coastal monitoring stations.',
      promptWord: '(trigger: Triggered / Triggering)',
      correctAnswer: 'Triggered',
      acceptedAnswers: ['Triggered', 'triggered'],
      ruleExplanationRu:
        'Датчики были активированы (приведены в действие) подземными толчками (пассив): Past Participle — Triggered.',
      ruleFormula: 'Triggered by + agent, Subject + V2',
      hintRu: 'Пассивная форма от trigger: Triggered.',
      russianTranslation: 'Сработав от глубоководных сейсмических толчков, подводные акустические датчики передали автоматические сигналы цунами на станции прибрежного мониторинга.',
    },
    {
      id: 'u31-ex-22',
      sentenceBefore: '',
      sentenceAfter: ' analyzed the isotopic composition of the basaltic core samples, the geochemists revised their model of volcanic mantle dynamics.',
      promptWord: '(have: Having / Had)',
      correctAnswer: 'Having',
      acceptedAnswers: ['Having', 'having'],
      ruleExplanationRu:
        'Завершив анализ изотопного состава, ученые скорректировали модель: Perfect Participle — "Having analyzed...".',
      ruleFormula: 'Having + V3, Subject + V2',
      hintRu: 'Перфектное причастие в активном залоге: Having.',
      russianTranslation: 'Проанализировав изотопный состав образцов базальтового керна, геохимики пересмотрели свою модель динамики вулканической мантии.',
    },
  ],
};
