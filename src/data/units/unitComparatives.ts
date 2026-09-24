import { CambridgeUnit } from '../cambridgeUnits';

export const unitComparatives: CambridgeUnit = {
  id: 'unit-21-comparatives-superlatives',
  unitNumber: 21,
  level: 'B1-B2',
  book: 'Murphy English Grammar in Use (Blue)',
  category: 'Adjectives & Comparisons',
  titleEn: 'Comparatives & Superlatives: -er / more, -est / most, as...as, the...the..., much / far + comparative',
  titleRu: 'Степени сравнения: сравнительная и превосходная, as...as, the...the..., усилители much и far',
  ruleSummaryRu:
    '1. Сравнительная степень (Comparative):\n' +
    '   - Короткие слова (1 слог и 2 слога на -y): суффикс -er (faster, colder, easier, healthier, earlier).\n' +
    '   - Длинные слова (2+ слогов): more + прилагательное/наречие (more demanding, more reliable, more efficiently).\n' +
    '   - Исключения: good/well -> better; bad/badly -> worse; far -> further / farther; little -> less; much/many -> more.\n' +
    '2. Превосходная степень (Superlative):\n' +
    '   - С обязательным артиклем the: the fastest, the healthiest, the most rigorous, the best, the worst, the furthest.\n' +
    '3. Сравнение равенства и неравенства (as...as / not as...as):\n' +
    '   - as + исходная форма + as (такой же ... как): "Her spoken English is as fluent as her sister\'s."\n' +
    '   - not as / not so + исходная форма + as (не такой ... как): "The oral exam was not as difficult as we feared."\n' +
    '4. Конструкция "чем..., тем..." (The... the...):\n' +
    '   - the + comparative ..., the + comparative ...: "The sooner we start, the earlier we finish." / "The more data we analyze, the clearer the outcome becomes."\n' +
    '5. Усилители сравнительной степени:\n' +
    '   - Сравнительную степень усиливают словами much, far, a lot, significantly, slightly, a bit (например: far more effective, much easier, slightly higher). Слово "very" перед сравнительной степенью использовать ЗАПРЕЩЕНО ("very better" — грубая ошибка; правильно: "much better").',
  keyFormula:
    'Сравнение: -er than / more ... than | Превосходная: the -est / the most ... | Равенство: as ... as / not as ... as | Чем..., тем...: The + comparative, the + comparative | Усиление: much / far + comparative',
  markerWords: [
    'than',
    'the most / the -est',
    'as ... as',
    'not as ... as',
    'the more ..., the more ...',
    'the sooner ..., the better',
    'much / far / a lot + comparative',
    'further / worse / better',
  ],
  pitfallsRu:
    '1. Никогда не говорите "very more" или "very better"! Сравнительную степень усиливают ТОЛЬКО: much better, far more expensive, a lot faster.\n' +
    '2. В превосходной степени не забывайте определенный артикль "the": "He is the best candidate" (НЕ: "He is best candidate").\n' +
    '3. В конструкции "as ... as" между "as" ставится исходная форма прилагательного, а НЕ сравнительная: "as fast as" (НЕ: "as faster as").\n' +
    '4. В конструкции "The sooner, the better" оба слова стоят в сравнительной степени с артиклем the.',
  exercises: [
    {
      id: 'u21-ex-1',
      sentenceBefore: 'This new MRI scanner provides ',
      sentenceAfter: ' images than the previous generation system.',
      promptWord: '(comparative: clear)',
      correctAnswer: 'clearer',
      acceptedAnswers: ['clearer'],
      ruleExplanationRu:
        'Односложное прилагательное "clear" образует сравнительную степень при помощи суффикса -er: clearer.',
      ruleFormula: 'clear + -er = clearer than',
      hintRu: 'Односложное прилагательное clear образует степень через суффикс -er.',
      russianTranslation:
        'Этот новый МРТ-сканер дает более четкие снимки, чем система предыдущего поколения.',
    },
    {
      id: 'u21-ex-2',
      sentenceBefore: 'Conducting clinical trials across three continents proved to be ',
      sentenceAfter: ' than the steering committee originally anticipated.',
      promptWord: '(comparative: complicated)',
      correctAnswer: 'more complicated',
      acceptedAnswers: ['more complicated'],
      ruleExplanationRu:
        'Многосложные прилагательные (complicated) образуют сравнительную степень с помощью "more": more complicated than.',
      ruleFormula: 'more + многосложное прил. + than',
      hintRu: 'Многосложное прилагательное (complicated) требует more.',
      russianTranslation:
        'Проведение клинических испытаний на трех континентах оказалось более сложным, чем изначально предполагал руководящий комитет.',
    },
    {
      id: 'u21-ex-3',
      sentenceBefore: 'Despite severe supply shortages, our team achieved ',
      sentenceAfter: ' financial quarter in the history of the medical division.',
      promptWord: '(superlative: good)',
      correctAnswer: 'the best',
      acceptedAnswers: ['the best', 'best'],
      ruleExplanationRu:
        'Исключение: good -> better -> the best. В превосходной степени требуется определенный артикль the.',
      ruleFormula: 'the + best',
      hintRu: 'Превосходная степень от неправильного прилагательного good.',
      russianTranslation:
        'Несмотря на серьезные перебои с поставками, наша команда показала лучший финансовый квартал в истории медицинского подразделения.',
    },
    {
      id: 'u21-ex-4',
      sentenceBefore: 'The patient reported that the second medication had ',
      sentenceAfter: ' side effects than the initial prescription.',
      promptWord: '(comparative: bad)',
      correctAnswer: 'worse',
      acceptedAnswers: ['worse'],
      ruleExplanationRu:
        'Исключение: bad -> worse -> the worst. Сравнительная степень от bad — worse (НЕ: badder / more bad).',
      ruleFormula: 'bad -> worse than',
      hintRu: 'Неправильное прилагательное bad в сравнительной степени.',
      russianTranslation:
        'Пациент сообщил, что у второго лекарства были более тяжелые побочные эффекты, чем у первоначального назначения.',
    },
    {
      id: 'u21-ex-5',
      sentenceBefore: 'The revised diagnostic protocol is ',
      sentenceAfter: ' the gold-standard biopsy test.',
      promptWord: '(as...as: accurate)',
      correctAnswer: 'as accurate as',
      acceptedAnswers: ['as accurate as'],
      ruleExplanationRu:
        'Конструкция равенства "as ... as" выражает одинаковую степень признака. Прилагательное стоит в базовой форме (as accurate as).',
      ruleFormula: 'as + базовая форма прил. + as',
      hintRu: 'Конструкция сравнения равенства: as + accurate + as.',
      russianTranslation:
        'Обновленный диагностический протокол столь же точен, как и биопсия, являющаяся золотым стандартом.',
    },
    {
      id: 'u21-ex-6',
      sentenceBefore: 'Working remotely from the countryside is ',
      sentenceAfter: ' commuting into central London every weekday.',
      promptWord: '(not as...as: stressful)',
      correctAnswer: 'not as stressful as',
      acceptedAnswers: ['not as stressful as', 'not so stressful as'],
      ruleExplanationRu:
        'Отрицательное сравнение: not as + базовая форма + as (не такой стрессовый, как).',
      ruleFormula: 'not as + adjective + as',
      hintRu: 'Отрицательная сравнительная конструкция: not as stressful as.',
      russianTranslation:
        'Удаленная работа из сельской местности не столь стрессовая, как ежедневные поездки на работу в центр Лондона.',
    },
    {
      id: 'u21-ex-7',
      sentenceBefore: 'The laparoscopic procedure is ',
      sentenceAfter: ' than open-cavity abdominal surgery.',
      promptWord: '(far + comparative: invasive)',
      correctAnswer: 'far less invasive',
      acceptedAnswers: ['far less invasive', 'far more invasive'],
      ruleExplanationRu:
        'Для усиления сравнительной степени перед less/more ставится far или much (far less invasive = гораздо менее инвазивная).',
      ruleFormula: 'far + less/more + adjective + than',
      hintRu: 'Усиление сравнительной степени словом far (far less invasive).',
      russianTranslation:
        'Лапароскопическая процедура гораздо менее инвазивна, чем открытая полостная операция на брюшной полости.',
    },
    {
      id: 'u21-ex-8',
      sentenceBefore: 'According to the peer-reviewed ranking, Oxford remains ',
      sentenceAfter: ' medical faculty in the United Kingdom.',
      promptWord: '(superlative: prestigious)',
      correctAnswer: 'the most prestigious',
      acceptedAnswers: ['the most prestigious', 'most prestigious'],
      ruleExplanationRu:
        'Превосходная степень для многосложных прилагательных образуется при помощи "the most": the most prestigious.',
      ruleFormula: 'the most + многосложное прилагательное',
      hintRu: 'Превосходная степень многосложного слова: the most prestigious.',
      russianTranslation:
        'Согласно экспертному рейтингу, Оксфорд остается самым престижным медицинским факультетом в Соединенном Королевстве.',
    },
    {
      id: 'u21-ex-9',
      sentenceBefore: '',
      sentenceAfter: ' we submit our grant proposal to the European commission, the higher our chances of securing funding.',
      promptWord: '(the...: early)',
      correctAnswer: 'The earlier',
      acceptedAnswers: ['The earlier', 'the earlier'],
      ruleExplanationRu:
        'В двойной сравнительной конструкции "чем..., тем..." используется "The + comparative": early -> earlier -> The earlier.',
      ruleFormula: 'The + comparative (earlier) ..., the + comparative ...',
      hintRu: 'Конструкция "чем раньше, тем...": The earlier.',
      russianTranslation:
        'Чем раньше мы подадим заявку на грант в Европейскую комиссию, тем выше наши шансы на получение финансирования.',
    },
    {
      id: 'u21-ex-10',
      sentenceBefore: 'The more clinical data our AI model ingested, ',
      sentenceAfter: ' its diagnostic predictions became.',
      promptWord: '(the...: accurate)',
      correctAnswer: 'the more accurate',
      acceptedAnswers: ['the more accurate', 'The more accurate'],
      ruleExplanationRu:
        'Вторая часть конструкции "The more ..., the ...": the more accurate (чем больше данных, тем точнее становились прогнозы).',
      ruleFormula: 'the more ... + the more accurate ...',
      hintRu: 'Вторая часть конструкции "The more ..., the more accurate ...".',
      russianTranslation:
        'Чем больше клинических данных усваивала наша модель ИИ, тем точнее становились ее диагностические прогнозы.',
    },
    {
      id: 'u21-ex-11',
      sentenceBefore: 'Electric vehicles are becoming ',
      sentenceAfter: ' with each passing year as battery technology improves.',
      promptWord: '(comparative: affordable)',
      correctAnswer: 'more affordable',
      acceptedAnswers: ['more affordable'],
      ruleExplanationRu:
        'Многосложное прилагательное affordable образует сравнительную степень через "more affordable".',
      ruleFormula: 'more + affordable',
      hintRu: 'Сравнительная степень многосложного слова (more affordable).',
      russianTranslation:
        'Электромобили с каждым годом становятся доступнее по цене по мере совершенствования аккумуляторных технологий.',
    },
    {
      id: 'u21-ex-12',
      sentenceBefore: 'Taking the high-speed Eurostar train is ',
      sentenceAfter: ' than driving across France in a diesel car.',
      promptWord: '(much + comparative: fast)',
      correctAnswer: 'much faster',
      acceptedAnswers: ['much faster'],
      ruleExplanationRu:
        'Для усиления сравнительной степени коротких прилагательных используется "much + -er" (much faster = гораздо быстрее). Говорить "very faster" категорически нельзя.',
      ruleFormula: 'much + comparative (fast + -er)',
      hintRu: 'Усиление словом much перед сравнительной формой faster.',
      russianTranslation:
        'Поездка на скоростном поезде Eurostar гораздо быстрее, чем поездка на дизельном автомобиле через всю Францию.',
    },
    {
      id: 'u21-ex-13',
      sentenceBefore: 'Until we receive the lab results, we cannot make any ',
      sentenceAfter: ' assumptions regarding the virus mutation.',
      promptWord: '(comparative: far)',
      correctAnswer: 'further',
      acceptedAnswers: ['further', 'farther'],
      ruleExplanationRu:
        'Для значения "дальнейший / дополнительный" в абстрактном смысле используется форма "further" (further assumptions / further information).',
      ruleFormula: 'far -> further (в значении "дальнейший")',
      hintRu: 'Сравнительная форма far в переносном значении (дальнейшие предположения).',
      russianTranslation:
        'Пока мы не получим лабораторные результаты, мы не можем делать никаких дальнейших предположений касательно мутации вируса.',
    },
    {
      id: 'u21-ex-14',
      sentenceBefore: 'This winter was recorded as ',
      sentenceAfter: ' season in Scandinavia over the past fifty years.',
      promptWord: '(superlative: cold)',
      correctAnswer: 'the coldest',
      acceptedAnswers: ['the coldest', 'coldest'],
      ruleExplanationRu:
        'Односложное прилагательное cold образует превосходную степень с артиклем the и суффиксом -est: the coldest.',
      ruleFormula: 'the + cold + -est = the coldest',
      hintRu: 'Односложное прилагательное в превосходной степени с the.',
      russianTranslation:
        'Эта зима была зафиксирована как самое холодное время года в Скандинавии за последние пятьдесят лет.',
    },
    {
      id: 'u21-ex-15',
      sentenceBefore: 'The final round of the medical residency interview was ',
      sentenceAfter: ' any of the candidates had predicted.',
      promptWord: '(far + comparative: demanding)',
      correctAnswer: 'far more demanding',
      acceptedAnswers: ['far more demanding'],
      ruleExplanationRu:
        'Усилитель "far" ставится перед "more demanding" (гораздо более требовательный).',
      ruleFormula: 'far + more + demanding + than',
      hintRu: 'Усиление через far для многосложного слова: far more demanding.',
      russianTranslation:
        'Заключительный этап собеседования в ординатуру оказался куда более требовательным, чем ожидал кто-либо из кандидатов.',
    },
    {
      id: 'u21-ex-16',
      sentenceBefore: 'The second edition of the textbook is ',
      sentenceAfter: ' the first edition that was printed in 2018.',
      promptWord: '(not as...as: comprehensive)',
      correctAnswer: 'not as comprehensive as',
      acceptedAnswers: ['not as comprehensive as', 'not so comprehensive as'],
      ruleExplanationRu:
        'Конструкция отрицательного сравнения: not as comprehensive as (не такой исчерпывающий / всеобъемлющий, как).',
      ruleFormula: 'not as + adjective + as',
      hintRu: 'Отрицательное сравнение: not as comprehensive as.',
      russianTranslation:
        'Второе издание учебника не столь всеобъемлющее, как первое издание, напечатанное в 2018 году.',
    },
    {
      id: 'u21-ex-17',
      sentenceBefore: '',
      sentenceAfter: ' the candidate prepares for the technical examination, the less nervous they feel on the test day.',
      promptWord: '(the...: thorough)',
      correctAnswer: 'The more thoroughly',
      acceptedAnswers: ['The more thoroughly', 'the more thoroughly', 'The more thorough', 'the more thorough'],
      ruleExplanationRu:
        'Конструкция "The more thoroughly ... the less ...": наречие thoroughly образует степень с more: The more thoroughly.',
      ruleFormula: 'The more + adverb + subject + verb',
      hintRu: 'Чем основательнее кандидат готовится: The more thoroughly.',
      russianTranslation:
        'Чем тщательнее кандидат готовится к техническому экзамену, тем меньше он нервничает в день тестирования.',
    },
    {
      id: 'u21-ex-18',
      sentenceBefore: 'Traveling off-peak proved to be ',
      sentenceAfter: ' than booking peak holiday flights.',
      promptWord: '(significantly + comparative: cheap)',
      correctAnswer: 'significantly cheaper',
      acceptedAnswers: ['significantly cheaper'],
      ruleExplanationRu:
        'Наречие significantly усиливает сравнительную форму cheaper (significantly cheaper = существенно дешевле).',
      ruleFormula: 'significantly + cheap + -er',
      hintRu: 'Усилитель significantly + сравнительная форма cheaper.',
      russianTranslation:
        'Поездка вне пикового сезона оказалась существенно дешевле, чем бронирование рейсов в разгар праздников.',
    },
    {
      id: 'u21-ex-19',
      sentenceBefore: 'Among all the candidates we interviewed for the fellowship, Maria was clearly ',
      sentenceAfter: '.',
      promptWord: '(superlative: qualified)',
      correctAnswer: 'the most qualified',
      acceptedAnswers: ['the most qualified', 'most qualified'],
      ruleExplanationRu:
        'Превосходная степень для многосложного причастия/прилагательного qualified: the most qualified.',
      ruleFormula: 'the most + qualified',
      hintRu: 'Превосходная степень с the: the most qualified.',
      russianTranslation:
        'Среди всех кандидатов, прошедших собеседование на получение стипендии, Мария была явно самой квалифицированной.',
    },
    {
      id: 'u21-ex-20',
      sentenceBefore: 'The patient felt ',
      sentenceAfter: ' after resting for forty-eight hours and following the hydration plan.',
      promptWord: '(comparative: healthy)',
      correctAnswer: 'healthier',
      acceptedAnswers: ['healthier'],
      ruleExplanationRu:
        'Двусложное прилагательное, оканчивающееся на согласный + y (healthy), меняет "y" на "i" и принимает суффикс -er: healthier.',
      ruleFormula: 'health + -y -> health + -ier',
      hintRu: 'Двусложное слово на -y меняет букву на -ier: healthier.',
      russianTranslation:
        'Пациент почувствовал себя более здоровым после сорокавосьмичасового отдыха и соблюдения плана регидратации.',
    },
    {
      id: 'u21-ex-21',
      sentenceBefore: 'The updated algorithm processes complex astronomical datasets ',
      sentenceAfter: ' the legacy batch system.',
      promptWord: '(much + comparative: efficiently)',
      correctAnswer: 'much more efficiently than',
      acceptedAnswers: ['much more efficiently than', 'much more efficiently'],
      ruleExplanationRu:
        'Наречие efficiently образует сравнительную степень "more efficiently", усиливается словом "much" и требует союза "than".',
      ruleFormula: 'much + more efficiently + than',
      hintRu: 'Наречие с усилителем: much more efficiently (than).',
      russianTranslation:
        'Обновленный алгоритм обрабатывает сложные астрономические массивы данных гораздо эффективнее, чем унаследованная пакетная система.',
    },
    {
      id: 'u21-ex-22',
      sentenceBefore: '',
      sentenceAfter: ' you submit the visa application, the sooner your biometric appointment will be scheduled.',
      promptWord: '(the...: soon)',
      correctAnswer: 'The sooner',
      acceptedAnswers: ['The sooner', 'the sooner'],
      ruleExplanationRu:
        'Классическая парная сравнительная конструкция "The sooner ..., the sooner ...": The + sooner.',
      ruleFormula: 'The sooner + subject + verb, the sooner ...',
      hintRu: 'Конструкция "чем скорее...": The sooner.',
      russianTranslation:
        'Чем скорее вы подадите заявление на визу, тем быстрее будет назначено время для сдачи биометрических данных.',
    },
  ],
};
