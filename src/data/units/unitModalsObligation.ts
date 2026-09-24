import { CambridgeUnit } from '../cambridgeUnits';

export const unitModalsObligation: CambridgeUnit = {
  id: 'unit-22-modals-obligation',
  unitNumber: 22,
  level: 'B1-B2',
  book: 'Murphy English Grammar in Use (Blue)',
  category: 'Modals',
  titleEn: 'Modals of Obligation & Advice: must / have to / should / mustn’t / don’t have to / had better',
  titleRu: 'Модальные глаголы обязательства и совета: must, have to, should, mustn’t, don’t have to, had better',
  ruleSummaryRu:
    '1. must vs have to (долженствование):\n' +
    '   - must: личная внутренняя убежденность говорящего ("I must call my mother tonight") или строгое письменное предписание закона/инструкции ("All visitors must sign in"). У must нет формы прошедшего времени — в прошлом используется ТОЛЬКО had to!\n' +
    '   - have to / has to: внешнее обязательство, продиктованное правилами, законом, договором или обстоятельствами ("At our hospital, nurses have to wear surgical scrubs"; "She has to renew her medical license annually").\n' +
    '2. mustn\'t vs don\'t have to (Критическое различие!):\n' +
    '   - mustn\'t (= must not): строжайший ЗАПРЕТ ("You mustn\'t touch the sterile instruments" = Нельзя! Запрещено!).\n' +
    '   - don\'t have to / doesn\'t have to: ОТСУТСТВИЕ НЕОБХОДИМОСТИ ("You don\'t have to attend the optional workshop" = Не нужно, необязательно; нет необходимости, но если хочешь — можешь).\n' +
    '3. should / shouldn\'t (совет и рекомендация):\n' +
    '   - should + V1: рекомендация, как поступить правильно или разумно ("You look exhausted; you should take a rest").\n' +
    '   - shouldn\'t + V1: совет не совершать действие ("You shouldn\'t skip breakfast before donating blood").\n' +
    '4. had better / \'d better (настоятельный совет с угрозой последствий):\n' +
    '   - had better + V1 (БЕЗ частицы "to"!): настоятельное предупреждение в конкретной ситуации ("We had better leave now, or we will miss the boarding call").\n' +
    '   - Отрицание: had better not + V1 ("You had better not mention the audit to the team yet").',
  keyFormula:
    'Внешний закон: have to + V1 | Внутренний долг/приказ: must + V1 | Прошедшее: had to | Запрет: mustn\'t + V1 | Необязательно: don\'t have to + V1 | Совет: should + V1 | Срочный совет: had better + V1',
  markerWords: [
    'must (внутренний долг / строгое правило)',
    'have to / has to (внешний регламент / закон)',
    'had to (обязанность в прошлом)',
    "mustn't (категорический запрет)",
    "don't have to / doesn't have to (не требуется, необязательно)",
    'should / shouldn’t (рекомендация / совет)',
    'had better / had better not (срочный совет с риском)',
  ],
  pitfallsRu:
    '1. Никогда не путайте "mustn\'t" и "don\'t have to"! "You mustn\'t smoke here" = Курить строго запрещено! "You don\'t have to pay" = Оплачивать не обязательно (это бесплатно).\n' +
    '2. В прошедшем времени у глагола "must" нет формы "musted" — обязательно используется "had to": "Yesterday I had to stay at the clinic until 9 PM".\n' +
    '3. После "had better" частица "to" НЕ ставится: "You had better go" (НЕ: "You had better to go").\n' +
    '4. Отрицание от had better — "had better not" (НЕ: "didn\'t had better").',
  exercises: [
    {
      id: 'u22-ex-1',
      sentenceBefore: 'All researchers working in the biosafety level 4 facility ',
      sentenceAfter: ' wear positive-pressure protective suits at all times.',
      promptWord: '(must / should / had better)',
      correctAnswer: 'must',
      acceptedAnswers: ['must', 'have to'],
      ruleExplanationRu:
        'Строгое официальное правило безопасности и категорическое требование регламента выражается модальным глаголом must (или have to).',
      ruleFormula: 'must + V1 (строгое предписание регламента)',
      hintRu: 'Строгое требование официальной инструкции по технике безопасности.',
      russianTranslation:
        'Все исследователи, работающие в лаборатории 4-го уровня биобезопасности, обязаны постоянно носить защитные костюмы с избыточным давлением.',
    },
    {
      id: 'u22-ex-2',
      sentenceBefore: 'You ',
      sentenceAfter: ' print your boarding pass; presenting the digital QR code on your smartphone is sufficient.',
      promptWord: "(mustn't / don't have to / shouldn't)",
      correctAnswer: "don't have to",
      acceptedAnswers: ["don't have to", 'do not have to'],
      ruleExplanationRu:
        'Здесь выражается отсутствие необходимости (не нужно, необязательно): распечатывать билет не требуется, так как достаточно QR-кода на телефоне.',
      ruleFormula: "don't have to + V1 (нет необходимости)",
      hintRu: 'Нет необходимости (необязательно, можно не распечатывать).',
      russianTranslation:
        'Вам не обязательно распечатывать посадочный талон: достаточно предъявить электронный QR-код на смартфоне.',
    },
    {
      id: 'u22-ex-3',
      sentenceBefore: 'Hospital visitors ',
      sentenceAfter: ' enter the intensive care unit without sanitizing their hands and donning sterile shoe covers.',
      promptWord: "(mustn't / don't have to / shouldn't)",
      correctAnswer: "mustn't",
      acceptedAnswers: ["mustn't", 'must not'],
      ruleExplanationRu:
        'Строжайший запрет (категорически запрещено входить без дезинфекции) передается формой "mustn\'t" (must not).',
      ruleFormula: "mustn't + V1 (категорический запрет)",
      hintRu: 'Категорический запрет в медицинском учреждении.',
      russianTranslation:
        'Посетителям больницы категорически запрещено входить в отделение интенсивной терапии без дезинфекции рук и надевания стерильных бахил.',
    },
    {
      id: 'u22-ex-4',
      sentenceBefore: 'We ',
      sentenceAfter: ' leave for the airport right away, otherwise we are going to get trapped in rush-hour gridlock.',
      promptWord: '(had better / should / have to)',
      correctAnswer: 'had better',
      acceptedAnswers: ['had better', "'d better"],
      ruleExplanationRu:
        'Конструкция "had better" выражает настоятельный совет в конкретной ситуации с прямой угрозой негативных последствий ("иначе застрянем в пробке").',
      ruleFormula: 'had better + V1 (срочный совет во избежание беды)',
      hintRu: 'Настоятельный совет во избежание опоздания: had better / \'d better.',
      russianTranslation:
        'Нам лучше выехать в аэропорт прямо сейчас, иначе мы застрянем в глухой пробке в час пик.',
    },
    {
      id: 'u22-ex-5',
      sentenceBefore: 'Because the laboratory power grid experienced an unexpected surge yesterday, the engineers ',
      sentenceAfter: ' recalibrate all the centrifuges.',
      promptWord: '(must / have to / had to / should)',
      correctAnswer: 'had to',
      acceptedAnswers: ['had to'],
      ruleExplanationRu:
        'В прошедшем времени (yesterday) модальный глагол must НЕ имеет формы. Обязательство в прошлом выражается ТОЛЬКО формой "had to".',
      ruleFormula: 'had to + V1 (обязанность в прошедшем времени)',
      hintRu: 'Прошедшее время (yesterday) — у must нет формы прошедшего, используйте had to.',
      russianTranslation:
        'Поскольку вчера в электросети лаборатории произошел неожиданный скачок напряжения, инженерам пришлось заново калибровать все центрифуги.',
    },
    {
      id: 'u22-ex-6',
      sentenceBefore: 'You have been coughing persistently for two weeks; you really ',
      sentenceAfter: ' schedule an appointment with a pulmonologist.',
      promptWord: '(should / have to / had to)',
      correctAnswer: 'should',
      acceptedAnswers: ['should', 'ought to'],
      ruleExplanationRu:
        'Для выражения дружеского совета и медицинской рекомендации используется "should" (или "ought to").',
      ruleFormula: 'should + V1 (рекомендация / совет)',
      hintRu: 'Совет и рекомендация обратиться к врачу: should.',
      russianTranslation:
        'Ты непрерывно кашляешь уже две недели; тебе действительно стоит записаться на прием к пульмонологу.',
    },
    {
      id: 'u22-ex-7',
      sentenceBefore: 'According to civil aviation regulations, airline pilots ',
      sentenceAfter: ' undergo rigorous medical examinations every six months.',
      promptWord: '(have to / must / should)',
      correctAnswer: 'have to',
      acceptedAnswers: ['have to', 'must'],
      ruleExplanationRu:
        'Внешнее требование закона и отраслевого регламента обычно выражается глаголом "have to" (или "must" в официальных документах).',
      ruleFormula: 'have to + V1 (внешнее правило / регламент)',
      hintRu: 'Внешнее требование авиационных правил: have to / must.',
      russianTranslation:
        'Согласно правилам гражданской авиации, пилоты авиалиний обязаны проходить строгое медицинское освидетельствование каждые шесть месяцев.',
    },
    {
      id: 'u22-ex-8',
      sentenceBefore: 'The conference registration is completely free for PhD candidates, so you ',
      sentenceAfter: ' pay the standard delegate fee.',
      promptWord: "(don't have to / mustn't / shouldn't)",
      correctAnswer: "don't have to",
      acceptedAnswers: ["don't have to", 'do not have to'],
      ruleExplanationRu:
        'Отсутствие необходимости: аспирантам платить взнос не требуется (don\'t have to pay).',
      ruleFormula: "don't have to + V1",
      hintRu: 'Отсутствие финансовой необходимости (не нужно платить).',
      russianTranslation:
        'Регистрация на конференцию абсолютно бесплатна для аспирантов, поэтому вам не нужно оплачивать стандартный делегатский взнос.',
    },
    {
      id: 'u22-ex-9',
      sentenceBefore: 'You ',
      sentenceAfter: ' forget to attach the ethics committee approval letter to the clinical application, or it will be rejected.',
      promptWord: '(had better not / should not / do not have to)',
      correctAnswer: 'had better not',
      acceptedAnswers: ['had better not', "'d better not"],
      ruleExplanationRu:
        'Настоятельное предостережение с конкретной угрозой отказа ("иначе заявку отклонят") выражается через "had better not".',
      ruleFormula: 'had better not + V1',
      hintRu: 'Настоятельное предупреждение во избежание отклонения заявки: had better not.',
      russianTranslation:
        'Тебе лучше не забыть прикрепить письмо с одобрением комитета по этике к клинической заявке, иначе ее отклонят.',
    },
    {
      id: 'u22-ex-10',
      sentenceBefore: 'Pediatricians emphasize that parents ',
      sentenceAfter: ' give aspirin to children recovering from viral infections due to Reye’s syndrome risk.',
      promptWord: "(mustn't / don't have to / wouldn't)",
      correctAnswer: "mustn't",
      acceptedAnswers: ["mustn't", 'must not', 'should not', "shouldn't"],
      ruleExplanationRu:
        'Категорический медицинский запрет из-за опасности для жизни выражается через "mustn\'t" (must not).',
      ruleFormula: "mustn't + V1 (строгий запрет)",
      hintRu: 'Строгий медицинский запрет (нельзя давать аспирин).',
      russianTranslation:
        'Педиатры подчеркивают, что родителям категорически нельзя давать аспирин детям, выздоравливающим от вирусных инфекций, из-за риска синдрома Рея.',
    },
    {
      id: 'u22-ex-11',
      sentenceBefore: 'Since tomorrow is an official national holiday, our research assistants ',
      sentenceAfter: ' come into the laboratory.',
      promptWord: "(don't have to / mustn't / shouldn't)",
      correctAnswer: "don't have to",
      acceptedAnswers: ["don't have to", 'do not have to'],
      ruleExplanationRu:
        'В праздничный день нет обязательства приходить на работу: don\'t have to (не обязаны / могут не приходить).',
      ruleFormula: "don't have to + V1",
      hintRu: 'Нет обязанности приходить на работу в праздник.',
      russianTranslation:
        'Поскольку завтра официальный государственный праздник, нашим научным ассистентам не нужно приходить в лабораторию.',
    },
    {
      id: 'u22-ex-12',
      sentenceBefore: 'When traveling across the Schengen Area, non-EU passport holders ',
      sentenceAfter: ' carry their physical passports and biometric residency permits.',
      promptWord: '(have to / had to / should)',
      correctAnswer: 'have to',
      acceptedAnswers: ['have to', 'must'],
      ruleExplanationRu:
        'Требование миграционного законодательства (внешнее правило): have to carry.',
      ruleFormula: 'have to + V1 (законодательное требование)',
      hintRu: 'Юридическое требование миграционного контроля: have to / must.',
      russianTranslation:
        'При перемещении по Шенгенской зоне владельцы паспортов стран, не входящих в ЕС, обязаны иметь при себе физические паспорта и биометрические виды на жительство.',
    },
    {
      id: 'u22-ex-13',
      sentenceBefore: 'The patient had already completed a full course of antibiotics in May, so she ',
      sentenceAfter: ' repeat the medication in June.',
      promptWord: "(didn't have to / mustn't / shouldn't)",
      correctAnswer: "didn't have to",
      acceptedAnswers: ["didn't have to", 'did not have to'],
      ruleExplanationRu:
        'Отсутствие необходимости в прошедшем времени выражается через "didn\'t have to" (не нужно было повторять курс).',
      ruleFormula: "didn't have to + V1 (в прошедшем времени)",
      hintRu: 'Прошедшее время: не требовалось повторять прием лекарств.',
      russianTranslation:
        'Пациентка уже прошла полный курс антибиотиков в мае, поэтому ей не пришлось повторять прием препарата в июне.',
    },
    {
      id: 'u22-ex-14',
      sentenceBefore: 'You look utterly exhausted after that 14-hour neurosurgery shift; you ',
      sentenceAfter: ' take tomorrow morning off.',
      promptWord: '(should / must / have to)',
      correctAnswer: 'should',
      acceptedAnswers: ['should', 'ought to'],
      ruleExplanationRu:
        'Дружеский совет и забота о коллеге: should take tomorrow morning off (тебе стоит взять утро выходного).',
      ruleFormula: 'should + V1 (совет / рекомендация)',
      hintRu: 'Рекомендация и совет отдохнуть: should.',
      russianTranslation:
        'Ты выглядишь совершенно измотанным после 14-часового дежурства по нейрохирургии; тебе стоит взять завтрашнее утро для отдыха.',
    },
    {
      id: 'u22-ex-15',
      sentenceBefore: 'Employees ',
      sentenceAfter: ' disclose confidential patient clinical data to unauthorized third parties under any circumstances.',
      promptWord: "(mustn't / don't have to / had better)",
      correctAnswer: "mustn't",
      acceptedAnswers: ["mustn't", 'must not'],
      ruleExplanationRu:
        'Абсолютный юридический и этический запрет (ни при каких обстоятельствах нельзя разглашать тайну) передается формой "mustn\'t" / "must not".',
      ruleFormula: "mustn't + V1 (строгий запрет)",
      hintRu: 'Категорический юридический запрет на разглашение тайны.',
      russianTranslation:
        'Сотрудникам категорически запрещено разглашать конфиденциальные клинические данные пациентов неуполномоченным третьим лицам ни при каких обстоятельствах.',
    },
    {
      id: 'u22-ex-16',
      sentenceBefore: 'We ',
      sentenceAfter: ' verify the cryogenic freezer temperature immediately; the alarm has already beeped twice.',
      promptWord: '(had better / should / could)',
      correctAnswer: 'had better',
      acceptedAnswers: ['had better', "'d better"],
      ruleExplanationRu:
        'Срочная тревожная ситуация, требующая немедленных действий во избежание гибели ценных образцов: had better verify.',
      ruleFormula: 'had better + V1 (срочная необходимость во избежание ущерба)',
      hintRu: 'Срочный совет при сработавшей сигнализации: had better / \'d better.',
      russianTranslation:
        'Нам лучше немедленно проверить температуру криогенной морозильной камеры: сигнализация уже пропищала дважды.',
    },
    {
      id: 'u22-ex-17',
      sentenceBefore: 'Our cloud storage tier was automatically upgraded by the university IT department, so we ',
      sentenceAfter: ' delete our archived research datasets.',
      promptWord: "(didn't have to / mustn't / had to)",
      correctAnswer: "didn't have to",
      acceptedAnswers: ["didn't have to", 'did not have to'],
      ruleExplanationRu:
        'Действие в прошлом: благодаря автоматическому обновлению тарифа ученым не потребовалось удалять архивные данные (didn\'t have to delete).',
      ruleFormula: "didn't have to + V1",
      hintRu: 'Прошедшее время: не было необходимости удалять данные.',
      russianTranslation:
        'Наш тариф облачного хранилища был автоматически повышен IT-отделом университета, поэтому нам не пришлось удалять архивные исследовательские массивы данных.',
    },
    {
      id: 'u22-ex-18',
      sentenceBefore: 'Before submitting your doctoral dissertation, you ',
      sentenceAfter: ' have an experienced academic proofreader review your bibliography citations.',
      promptWord: '(should / must / have to)',
      correctAnswer: 'should',
      acceptedAnswers: ['should', 'ought to'],
      ruleExplanationRu:
        'Рекомендация для достижения наилучшего результата: should have a proofreader review.',
      ruleFormula: 'should + V1 (академический совет)',
      hintRu: 'Совет и рекомендация перед сдачей диссертации: should.',
      russianTranslation:
        'Перед подачей докторской диссертации вам стоит попросить опытного академического корректора проверить библиографические ссылки.',
    },
    {
      id: 'u22-ex-19',
      sentenceBefore: 'You ',
      sentenceAfter: ' leave your laptop unattended in the hotel lobby while attending the conference dinner.',
      promptWord: '(had better not / should not / do not have to)',
      correctAnswer: 'had better not',
      acceptedAnswers: ['had better not', "'d better not", "shouldn't", 'should not'],
      ruleExplanationRu:
        'Предостережение от рискованного поведения (ноутбук могут украсть): had better not leave.',
      ruleFormula: 'had better not + V1',
      hintRu: 'Предупреждение об опасности кражи: had better not.',
      russianTranslation:
        'Вам лучше не оставлять ноутбук без присмотра в вестибюле отеля во время посещения праздничного ужина конференции.',
    },
    {
      id: 'u22-ex-20',
      sentenceBefore: 'Because the patient’s oxygen saturation dropped sharply during the flight, the captain ',
      sentenceAfter: ' make an emergency landing in Munich.',
      promptWord: '(had to / must / should / has to)',
      correctAnswer: 'had to',
      acceptedAnswers: ['had to'],
      ruleExplanationRu:
        'В прошедшем времени (dropped during the flight) вынужденная необходимость выражается ТОЛЬКО формой "had to".',
      ruleFormula: 'had to + V1 (вынужденная необходимость в прошлом)',
      hintRu: 'Прошедшее время: капитан был вынужден совершить посадку (had to).',
      russianTranslation:
        'Поскольку насыщение крови кислородом у пассажира резко упало во время полета, капитану пришлось совершить экстренную посадку в Мюнхене.',
    },
    {
      id: 'u22-ex-21',
      sentenceBefore: 'The company handbook clearly states that contractors ',
      sentenceAfter: ' work on weekends unless expressly requested by the client director.',
      promptWord: "(don't have to / mustn't / shouldn't)",
      correctAnswer: "don't have to",
      acceptedAnswers: ["don't have to", 'do not have to'],
      ruleExplanationRu:
        'Отсутствие обязанности работать по выходным: don\'t have to work.',
      ruleFormula: "don't have to + V1",
      hintRu: 'Отсутствие обязательства работать в выходные дни: don\'t have to.',
      russianTranslation:
        'В регламенте компании четко указано, что подрядчики не обязаны работать по выходным, если только об этом прямо не попросит директор со стороны клиента.',
    },
    {
      id: 'u22-ex-22',
      sentenceBefore: 'Laboratory staff ',
      sentenceAfter: ' consume food, beverages, or store personal snacks inside chemical reagent preparation rooms.',
      promptWord: "(mustn't / don't have to / should)",
      correctAnswer: "mustn't",
      acceptedAnswers: ["mustn't", 'must not'],
      ruleExplanationRu:
        'Категорический санитарный запрет на прием пищи в зоне химических реактивов: mustn\'t consume.',
      ruleFormula: "mustn't + V1 (категорический запрет)",
      hintRu: 'Категорический санитарный запрет: mustn\'t / must not.',
      russianTranslation:
        'Персоналу лаборатории категорически запрещено употреблять пищу, напитки или хранить личные продукты питания в помещениях приготовления химических реактивов.',
    },
  ],
};
