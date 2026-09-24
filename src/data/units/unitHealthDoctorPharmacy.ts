import { CambridgeUnit } from '../cambridgeUnits';

export const unitHealthDoctorPharmacy: CambridgeUnit = {
  id: 'unit-39-health-doctor-pharmacy',
  unitNumber: 39,
  level: 'B1-B2',
  book: 'Real Life & Situational English',
  category: 'Real Life',
  titleEn: 'Health & Pharmacy: Doctor Consultations, Symptoms & Medical Advice',
  titleRu: 'Здоровье и медицина: у врача, в аптеке, описание симптомов и предписания',
  ruleSummaryRu:
    'Медицинский английский в реальной жизни требует точного владения временами Present Perfect (продолжительность симптомов), глаголами ощущений и модальными глаголами рекомендаций и предписаний:\n\n' +
    '1. Описание продолжительности симптомов (Present Perfect with since / for):\n' +
    '   - Симптом начался в прошлом и продолжается сейчас: "I have had a severe headache since yesterday morning" (НЕ "I have headache since yesterday"!).\n' +
    '   - Длительный процесс кашля или недомогания: "I have been coughing for almost a week."\n' +
    '   - Вопрос врача: "How long have you felt this way?" / "How long have you had this fever?"\n\n' +
    '2. Описание физических ощущений и боли (Symptoms & Sensation Verbs):\n' +
    '   - Состояния: "I feel dizzy / nauseous / exhausted" (глагол feel + прилагательное).\n' +
    '   - Локализация боли: "My throat is sore", "It hurts when I swallow", "I have an ache in my lower back", "My ankle is swollen."\n' +
    '   - Простуда и вирусы: "I have caught a cold" / "I have come down with the flu."\n\n' +
    '3. Рекомендации врача (Modals for Advice & Obligation):\n' +
    '   - Мягкий совет: "You should rest and drink plenty of fluids." / "You ought to stay in bed."\n' +
    '   - Строгое медицинское предписание: "You must complete the entire course of antibiotics, even if you feel better."\n' +
    '   - Предостережение: "You must not drive while taking these tablets; they cause drowsiness."\n\n' +
    '4. В аптеке (At the Chemist\'s / Pharmacy):\n' +
    '   - Рецептурные препараты: "Do I need a prescription from a doctor for these painkillers?"\n' +
    '   - Безрецептурные средства: over-the-counter (OTC) medication.\n' +
    '   - Дозировка и прием: "Take one pill three times a day after meals." / "Apply this ointment to the skin twice daily."',
  keyFormula:
    'Симптом: I have had [pain] since/for | Ощущение: I feel dizzy / nauseous | Совет врача: You should rest / You must finish the course | Аптека: prescription / take two pills after meals',
  markerWords: [
    'I have had a headache since',
    'I feel dizzy / nauseous',
    'it hurts when I',
    'prescription',
    'antibiotics',
    'you should take',
    'you must not drive',
    'side effects / drowsiness',
  ],
  pitfallsRu:
    '1. Типичная ошибка русскоязычных: говорить "I have a headache since two days". В английском при наличии маркеров времени "since" или "for" ОБЯЗАТЕЛЕН Present Perfect: "I have HAD a headache FOR two days".\n' +
    '2. "Hurt" vs "Pain": "Pain" — это существительное ("I have a sharp pain in my knee"), а "hurt" — глагол ("My knee hurts when I walk").\n' +
    '3. "Prescription" vs "Recipe": Кулинарный рецепт для выпечки пирога — это "recipe", а медицинский рецепт от врача на лекарство — ТОЛЬКО "prescription".\n' +
    '4. "Medicine" vs "Pills": лекарство в целом — "medicine / medication", таблетка — "pill / tablet", капсула — "capsule", мазь — "ointment".',
  exercises: [
    {
      id: 'u39-ex-1',
      sentenceBefore: 'I have had a terrible throbbing headache ',
      sentenceAfter: ' yesterday morning.',
      promptWord: '(since: since / for / from)',
      correctAnswer: 'since',
      acceptedAnswers: ['since'],
      ruleExplanationRu:
        'С точкой отсчета во времени в прошлом ("yesterday morning") в Present Perfect употребляется предлог "since" (с, начиная с). Предлог "for" используется только с интервалом (for two days).',
      ruleFormula: 'Present Perfect + since + point in time',
      hintRu: 'Предлог с точки отсчета: since.',
      russianTranslation: 'У меня ужасная пульсирующая головная боль со вчерашнего утра.',
    },
    {
      id: 'u39-ex-2',
      sentenceBefore: 'How long have you ',
      sentenceAfter: ' this sharp pain in your chest?',
      promptWord: '(had: had / have / having)',
      correctAnswer: 'had',
      acceptedAnswers: ['had'],
      ruleExplanationRu:
        'Вопрос врача строится в Present Perfect: "How long have you had...?" с третьей формой глагола have (had).',
      ruleFormula: 'How long have you had + Symptom?',
      hintRu: 'Третья форма глагола have: had.',
      russianTranslation: 'Как давно у вас эта острая боль в груди?',
    },
    {
      id: 'u39-ex-3',
      sentenceBefore: 'I have been coughing persistently ',
      sentenceAfter: ' nearly two weeks.',
      promptWord: '(for: for / since / during)',
      correctAnswer: 'for',
      acceptedAnswers: ['for'],
      ruleExplanationRu:
        'С периодом продолжительности ("nearly two weeks") в Present Perfect Continuous используется предлог "for" (на протяжении).',
      ruleFormula: 'Present Perfect Continuous + for + period of time',
      hintRu: 'Предлог периода времени: for.',
      russianTranslation: 'Я непрерывно кашляю уже почти две недели.',
    },
    {
      id: 'u39-ex-4',
      sentenceBefore: 'Every time I stand up quickly, I ',
      sentenceAfter: ' very dizzy and lightheaded.',
      promptWord: '(feel: feel / felt / feeling)',
      correctAnswer: 'feel',
      acceptedAnswers: ['feel'],
      ruleExplanationRu:
        'Для описания повторяющихся физических ощущений в настоящем используется Present Simple от глагола-связки feel: "I feel dizzy" (у меня кружится голова).',
      ruleFormula: 'feel + adjective (dizzy / nauseous / weak)',
      hintRu: 'Глагол в Present Simple: feel.',
      russianTranslation: 'Каждый раз, когда я быстро встаю, у меня сильно кружится голова.',
    },
    {
      id: 'u39-ex-5',
      sentenceBefore: 'My throat is red and inflamed, and it ',
      sentenceAfter: ' every time I try to swallow food.',
      promptWord: '(hurts: hurts / hurt / hurting)',
      correctAnswer: 'hurts',
      acceptedAnswers: ['hurts'],
      ruleExplanationRu:
        'Глагол "hurt" в значении "болеть / причинять боль" согласуется с местоимением 3-го лица единственного числа it в Present Simple с окончанием -s: "it hurts".',
      ruleFormula: 'it hurts + when...',
      hintRu: 'Глагол с окончанием -s для 3-го лица: hurts.',
      russianTranslation: 'Мое горло красное и воспаленное, и мне больно каждый раз, когда я пытаюсь проглотить пищу.',
    },
    {
      id: 'u39-ex-6',
      sentenceBefore: 'I think I have come ',
      sentenceAfter: ' with a nasty seasonal virus; my whole body aches.',
      promptWord: '(down: down / up / off)',
      correctAnswer: 'down',
      acceptedAnswers: ['down'],
      ruleExplanationRu:
        'Фразовый идиоматический глагол "come down with something" означает слечь с болезнью или подхватить простуду/грипп.',
      ruleFormula: 'come down with + Illness',
      hintRu: 'Послелог фразового глагола: down.',
      russianTranslation: 'Думаю, я свалился с неприятным сезонным вирусом; у меня ломит все тело.',
    },
    {
      id: 'u39-ex-7',
      sentenceBefore: 'Please roll up your sleeve so that I can ',
      sentenceAfter: ' your blood pressure.',
      promptWord: '(check: check / look / see)',
      correctAnswer: 'check',
      acceptedAnswers: ['check', 'take', 'measure'],
      ruleExplanationRu:
        'Померить артериальное давление в английском выражается как "check / take / measure your blood pressure".',
      ruleFormula: 'check / take blood pressure',
      hintRu: 'Глагол "проверить / измерить": check (или take).',
      russianTranslation: 'Пожалуйста, закатайте рукав, чтобы я мог измерить ваше артериальное давление.',
    },
    {
      id: 'u39-ex-8',
      sentenceBefore: 'Now take a deep breath through your nose and ',
      sentenceAfter: ' it for three seconds.',
      promptWord: '(hold: hold / keep / stay)',
      correctAnswer: 'hold',
      acceptedAnswers: ['hold'],
      ruleExplanationRu:
        'Стандартная инструкция врача при аускультации легких: "Hold your breath" (задержите дыхание).',
      ruleFormula: 'hold your breath / hold it',
      hintRu: 'Глагол "удерживать": hold.',
      russianTranslation: 'Теперь сделайте глубокий вдох через нос и задержите дыхание на три секунды.',
    },
    {
      id: 'u39-ex-9',
      sentenceBefore: 'You have a mild viral infection. You ',
      sentenceAfter: ' stay in bed and drink plenty of warm fluids.',
      promptWord: '(should: should / would / might)',
      correctAnswer: 'should',
      acceptedAnswers: ['should', 'ought to'],
      ruleExplanationRu:
        'Модальный глагол "should" — самый естественный способ дать медицинский совет или рекомендацию пациента.',
      ruleFormula: 'You should + V1 (rest / drink / stay in bed)',
      hintRu: 'Модальный глагол рекомендации: should.',
      russianTranslation: 'У вас легкая вирусная инфекция. Вам следует оставаться в постели и пить много теплых жидкостей.',
    },
    {
      id: 'u39-ex-10',
      sentenceBefore: 'You ',
      sentenceAfter: ' complete the full seven-day course of antibiotics, even if the fever goes away.',
      promptWord: '(must: must / can / could)',
      correctAnswer: 'must',
      acceptedAnswers: ['must', 'have to'],
      ruleExplanationRu:
        'Категорическое требование врача или медицинское правило выражается через модальный глагол "must" (или "have to"). Нельзя прерывать курс антибиотиков.',
      ruleFormula: 'You must + complete the full course',
      hintRu: 'Модальный глагол категорического обязательства: must.',
      russianTranslation: 'Вы обязательно должны закончить полный семидневный курс антибиотиков, даже если температура спадет.',
    },
    {
      id: 'u39-ex-11',
      sentenceBefore: 'Warning: you must ',
      sentenceAfter: ' operate heavy machinery while taking this antihistamine.',
      promptWord: '(not: not / never / no)',
      correctAnswer: 'not',
      acceptedAnswers: ['not'],
      ruleExplanationRu:
        'Медицинский запрет на лекарствах формулируется через "must not" (категорически запрещено).',
      ruleFormula: 'must not + V1',
      hintRu: 'Отрицательная частица после must: not.',
      russianTranslation: 'Предупреждение: вам категорически запрещается управлять сложными механизмами во время приема этого антигистаминного препарата.',
    },
    {
      id: 'u39-ex-12',
      sentenceBefore: 'Do you have any known ',
      sentenceAfter: ' to antibiotics, such as penicillin?',
      promptWord: '(allergies: allergies / allergic / allergens)',
      correctAnswer: 'allergies',
      acceptedAnswers: ['allergies', 'allergy'],
      ruleExplanationRu:
        'Существительное во множественном числе "allergies" (аллергии) с предлогом "to": "allergies to antibiotics / penicillin".',
      ruleFormula: 'have allergies to + Medicine',
      hintRu: 'Существительное во множественном числе: allergies.',
      russianTranslation: 'Есть ли у вас известные аллергии на антибиотики, например на пенициллин?',
    },
    {
      id: 'u39-ex-13',
      sentenceBefore: 'Do I need a doctor\'s ',
      sentenceAfter: ' to purchase this medicine, or is it sold over the counter?',
      promptWord: '(prescription: prescription / recipe / bill)',
      correctAnswer: 'prescription',
      acceptedAnswers: ['prescription'],
      ruleExplanationRu:
        'Рецепт от врача на покупку лекарства в аптеке называется исключительно "prescription" (кулинарный рецепт — recipe).',
      ruleFormula: 'a doctor\'s prescription',
      hintRu: 'Медицинский рецепт: prescription.',
      russianTranslation: 'Нужен ли мне рецепт от врача, чтобы купить это лекарство, или оно продается без рецепта?',
    },
    {
      id: 'u39-ex-14',
      sentenceBefore: 'These pain relief tablets are available over the ',
      sentenceAfter: ', so you do not need to see a physician first.',
      promptWord: '(counter: counter / desk / table)',
      correctAnswer: 'counter',
      acceptedAnswers: ['counter'],
      ruleExplanationRu:
        'Идиома "over the counter" (OTC) означает безрецептурный отпуск лекарственных средств в аптеке.',
      ruleFormula: 'over the counter (OTC)',
      hintRu: 'Слово в идиоме: counter.',
      russianTranslation: 'Эти обезболивающие таблетки продаются без рецепта, поэтому вам не нужно сначала идти к врачу.',
    },
    {
      id: 'u39-ex-15',
      sentenceBefore: 'Take two capsules three times a day, preferably ',
      sentenceAfter: ' meals.',
      promptWord: '(after: after / behind / later)',
      correctAnswer: 'after',
      acceptedAnswers: ['after', 'before', 'with'],
      ruleExplanationRu:
        'Аптечное указание приема медикаментов: "after meals" (после еды) или "before meals" (до еды).',
      ruleFormula: 'take [dosage] after meals',
      hintRu: 'Предлог "после": after.',
      russianTranslation: 'Принимайте по две капсулы три раза в день, желательно после еды.',
    },
    {
      id: 'u39-ex-16',
      sentenceBefore: 'Does this medication have any noticeable side ',
      sentenceAfter: ', such as nausea or drowsiness?',
      promptWord: '(effects: effects / affects / results)',
      correctAnswer: 'effects',
      acceptedAnswers: ['effects'],
      ruleExplanationRu:
        'Побочные эффекты лекарств в медицине называются "side effects" (с существительным effect, а не глаголом affect).',
      ruleFormula: 'side effects',
      hintRu: 'Существительное "эффекты": effects.',
      russianTranslation: 'Вызывает ли это лекарство какие-либо заметные побочные эффекты, например тошноту или сонливость?',
    },
    {
      id: 'u39-ex-17',
      sentenceBefore: 'Apply a thin layer of this soothing ',
      sentenceAfter: ' to the affected skin area twice a day.',
      promptWord: '(ointment: ointment / cream / lotion)',
      correctAnswer: 'ointment',
      acceptedAnswers: ['ointment', 'cream'],
      ruleExplanationRu:
        'Медицинская мазь по-английски — "ointment" (или "cream"). Формула применения: apply to the skin.',
      ruleFormula: 'apply ointment to + skin area',
      hintRu: 'Слово "мазь": ointment.',
      russianTranslation: 'Наносите тонкий слой этой успокаивающей мази на пораженный участок кожи дважды в день.',
    },
    {
      id: 'u39-ex-18',
      sentenceBefore: 'I slipped on the icy stairs and I am afraid I have ',
      sentenceAfter: ' my ankle.',
      promptWord: '(sprained: sprained / sprain / broke)',
      correctAnswer: 'sprained',
      acceptedAnswers: ['sprained', 'twisted'],
      ruleExplanationRu:
        'Растяжение или подворачивание связок выражается глаголом "sprain" (или "twist"). В Present Perfect: "have sprained my ankle".',
      ruleFormula: 'have sprained / twisted one\'s ankle',
      hintRu: 'Причастие прошедшего времени глагола sprain: sprained.',
      russianTranslation: 'Я поскользнулся на обледенелой лестнице и, боюсь, растянул связки голеностопа (подвернул лодыжку).',
    },
    {
      id: 'u39-ex-19',
      sentenceBefore: 'We will send you for an X-',
      sentenceAfter: ' to make sure that the bone is not fractured.',
      promptWord: '(ray: ray / beam / photo)',
      correctAnswer: 'ray',
      acceptedAnswers: ['ray'],
      ruleExplanationRu:
        'Рентгеновский снимок в англоязычной медицине называется "an X-ray".',
      ruleFormula: 'an X-ray',
      hintRu: 'Вторая часть слова X-ray: ray.',
      russianTranslation: 'Мы отправим вас на рентген, чтобы убедиться, что кость не сломана.',
    },
    {
      id: 'u39-ex-20',
      sentenceBefore: 'You ought ',
      sentenceAfter: ' stay hydrated and rest your eyes if you have a migraine.',
      promptWord: '(to: to / of / for)',
      correctAnswer: 'to',
      acceptedAnswers: ['to'],
      ruleExplanationRu:
        'Модальный глагол "ought" всегда употребляется с частицей "to": "You ought to stay hydrated" (Вам следовало бы пить воду).',
      ruleFormula: 'ought to + V1',
      hintRu: 'Частица инфинитива после ought: to.',
      russianTranslation: 'Вам следовало бы поддерживать водный баланс и дать глазам отдохнуть, если у вас мигрень.',
    },
  ],
};
