import { CambridgeUnit } from '../cambridgeUnits';

export const unitAcademicCorrespondence: CambridgeUnit = {
  id: 'unit-36-academic-correspondence',
  unitNumber: 36,
  level: 'B1-B2',
  book: 'Cambridge English for Scientists',
  category: 'Real Life',
  titleEn: 'Academic Correspondence: Emails to Editors, Reviewers, Data Requests & Collaboration',
  titleRu: 'Научная переписка: письмо редактору, ответы рецензентам, запрос данных и вежливые формулы',
  ruleSummaryRu:
    'Деловая и академическая переписка на английском языке подчиняется строгим конвенциям вежливости, четкости и такта. Ошибки в регистре могут привести к затягиванию ревью или отказу в предоставлении ценных данных.\n\n' +
    '1. Сопроводительное письмо редактору журнала (Cover Letter to Editor):\n' +
    '   - Обращение: "Dear Dr. [Surname]" или "Dear Editor-in-Chief," (НЕ: "Dear Mister"!).\n' +
    '   - Прикрепление файла: "Please find attached / enclosed our manuscript entitled..."\n' +
    '   - Обоснование новизны и соответствия журналу: "We believe our findings will be of great interest to the readership of [Journal Name]."\n' +
    '   - Декларация об отсутствии двойной подачи: "This manuscript has not been published previously and is not currently under consideration elsewhere."\n\n' +
    '2. Ответы на замечания рецензентов (Response to Reviewers):\n' +
    '   - Благодарность за критику: "We would like to thank the reviewers for their constructive comments and helpful suggestions."\n' +
    '   - Согласие и внесенные правки (Present Perfect): "We have revised the text accordingly..." / "As suggested by Reviewer 1, we have performed additional control experiments."\n' +
    '   - Вежливое несогласие: "While we appreciate the reviewer’s perspective, we respectfully disagree because..."\n\n' +
    '3. Запрос данных, протоколов или материалов (Data & Protocol Requests):\n' +
    '   - "I am writing to inquire whether you would be willing to share the raw dataset..."\n' +
    '   - "We would be exceedingly grateful if you could provide the plasmid construct described in your 2024 publication."\n' +
    '   - Обещание цитировать: "We will, of course, fully acknowledge and cite your paper in any resulting publications."\n\n' +
    '4. Вежливые заключительные формулы (Polite Closings):\n' +
    '   - "Thank you for your time and consideration."\n' +
    '   - "Please do not hesitate to contact me should you require any further information." (инверсия вместо if)\n' +
    '   - "Sincerely yours," / "Best regards,"',
  keyFormula:
    'Письмо: Please find attached... | Редактору: under consideration elsewhere | Рецензентам: We have revised... as suggested | Вежливое несогласие: We respectfully disagree | Просьба: I am writing to inquire whether you would be willing to... | Подпись: Sincerely / Best regards',
  markerWords: [
    'Please find enclosed our manuscript',
    'Under consideration elsewhere',
    'We thank the reviewer for their constructive comments',
    'We have revised the manuscript accordingly',
    'Would you be willing to share',
    'Please do not hesitate to contact me',
  ],
  pitfallsRu:
    '1. В ответе рецензенту нельзя писать эмоционально или раздраженно ("You clearly misunderstood our point"). Всегда используйте формулу вежливого дипломатичного уточнения: "We apologize if this point was unclear in the original manuscript. We have now clarified the explanation in Section 2.3."\n' +
    '2. Оборот "look forward to": после него ВСЕГДА идет герундий (-ing) или существительное: "I look forward to HEARING from you" (НЕ: "to hear").\n' +
    '3. Запятая после заключительной фразы: "Sincerely," или "Best regards," — запятая обязательна по англо-американскому стандарту.',
  exercises: [
    {
      id: 'u36-ex-1',
      sentenceBefore: 'Dear Dr. Henderson, please find ',
      sentenceAfter: ' our manuscript entitled "Novel Catalytic Pathways in Methane Conversion" for consideration in Chemical Science.',
      promptWord: '(attach: attached / attaching)',
      correctAnswer: 'attached',
      acceptedAnswers: ['attached', 'enclosed'],
      ruleExplanationRu:
        'Формула прикрепления документа в сопроводительном письме: "Please find attached / enclosed...". Причастие attached определяет отправляемый файл.',
      ruleFormula: 'Please find attached / enclosed + noun',
      hintRu: 'Причастие «прикрепленный»: attached (или enclosed).',
      russianTranslation: 'Уважаемый доктор Хендерсон, направляю вам в приложении нашу рукопись под названием «Новые каталитические пути конверсии метана» для рассмотрения в журнале Chemical Science.',
    },
    {
      id: 'u36-ex-2',
      sentenceBefore: 'We confirm that this manuscript has not been published previously and is not under ',
      sentenceAfter: ' for publication elsewhere.',
      promptWord: '(consider: consideration / considered)',
      correctAnswer: 'consideration',
      acceptedAnswers: ['consideration'],
      ruleExplanationRu:
        'Обязательная декларация этики публикаций: "under consideration elsewhere" (находится на рассмотрении в другом месте).',
      ruleFormula: 'under consideration elsewhere',
      hintRu: 'Существительное от consider (рассмотрение): consideration.',
      russianTranslation: 'Мы подтверждаем, что эта рукопись ранее не публиковалась и в настоящее время не находится на рассмотрении в других изданиях.',
    },
    {
      id: 'u36-ex-3',
      sentenceBefore: 'We would like to thank both reviewers for their constructive comments, which have substantially ',
      sentenceAfter: ' the quality of our manuscript.',
      promptWord: '(improve: improved / improving)',
      correctAnswer: 'improved',
      acceptedAnswers: ['improved'],
      ruleExplanationRu:
        'В ответе рецензентам (Response to Reviewers): Present Perfect после have — "have substantially improved" (существенно улучшили качество).',
      ruleFormula: 'have + adverb + improved (V3)',
      hintRu: '3-я форма глагола improve: improved.',
      russianTranslation: 'Мы хотели бы поблагодарить обоих рецензентов за конструктивные комментарии, которые существенно повысили качество нашей рукописи.',
    },
    {
      id: 'u36-ex-4',
      sentenceBefore: 'As ',
      sentenceAfter: ' by Reviewer 1, we have added three additional control groups to eliminate potential bias.',
      promptWord: '(suggest: suggested / suggesting)',
      correctAnswer: 'suggested',
      acceptedAnswers: ['suggested', 'recommended'],
      ruleExplanationRu:
        'Классическая вводная конструкция согласия с рецензентом: "As suggested by Reviewer 1, we have..." (Как и рекомендовал рецензент 1).',
      ruleFormula: 'As suggested by Reviewer X, we have + V3',
      hintRu: 'Форма причастия прошедшего времени от suggest: suggested.',
      russianTranslation: 'Как и предложил рецензент 1, мы добавили три дополнительные контрольные группы, чтобы исключить потенциальную предвзятость.',
    },
    {
      id: 'u36-ex-5',
      sentenceBefore: 'We have revised the text ',
      sentenceAfter: ' and highlighted all modifications in blue font in the updated manuscript.',
      promptWord: '(accord: accordingly / according)',
      correctAnswer: 'accordingly',
      acceptedAnswers: ['accordingly'],
      ruleExplanationRu:
        'Наречие "accordingly" (соответствующим образом / в соответствии с рекомендациями) является стандартом ответа на рецензию: "revised the text accordingly".',
      ruleFormula: 'revised the text accordingly',
      hintRu: 'Наречие «соответствующим образом»: accordingly.',
      russianTranslation: 'Мы внесли соответствующие исправления в текст и выделили все изменения синим шрифтом в обновленной версии рукописи.',
    },
    {
      id: 'u36-ex-6',
      sentenceBefore: 'While we understand the reviewer’s concern, we respectfully ',
      sentenceAfter: ' with the assertion that the sample size is inadequate for this effect size.',
      promptWord: '(agree: disagree / agree)',
      correctAnswer: 'disagree',
      acceptedAnswers: ['disagree'],
      ruleExplanationRu:
        'Формула академического вежливого несогласия: "we respectfully disagree with the assertion..." (мы с уважением не согласны с утверждением).',
      ruleFormula: 'respectfully disagree with + assertion/point',
      hintRu: 'Глагол не соглашаться с приставкой dis-: disagree.',
      russianTranslation: 'Хотя мы понимаем обеспокоенность рецензента, мы с уважением не согласны с утверждением о том, что размер выборки недостаточен для такой величины эффекта.',
    },
    {
      id: 'u36-ex-7',
      sentenceBefore: 'I am writing to ',
      sentenceAfter: ' whether you would be willing to share the raw RNA-sequencing FASTQ files referenced in your 2024 paper.',
      promptWord: '(inquire: inquire / inquiry)',
      correctAnswer: 'inquire',
      acceptedAnswers: ['inquire', 'enquire'],
      ruleExplanationRu:
        'Формальный запрос данных или протокола начинается с: "I am writing to inquire whether..." (Я пишу, чтобы узнать / осведомиться).',
      ruleFormula: 'I am writing to inquire whether...',
      hintRu: 'Глагол «осведомиться / поинтересоваться»: inquire (или enquire).',
      russianTranslation: 'Я пишу вам, чтобы узнать, не будете ли вы столь любезны поделиться необработанными FASTQ-файлами секвенирования РНК, упомянутыми в вашей статье 2024 года.',
    },
    {
      id: 'u36-ex-8',
      sentenceBefore: 'We would be extremely ',
      sentenceAfter: ' if you could send us the detailed synthesis protocol for the chiral ligand.',
      promptWord: '(grate: grateful / grate)',
      correctAnswer: 'grateful',
      acceptedAnswers: ['grateful'],
      ruleExplanationRu:
        'Вежливая просьба: "We would be extremely grateful if you could...". Прилагательное "grateful" пишется через "-ate-", а не "-eat-".',
      ruleFormula: 'would be grateful if you could + V1',
      hintRu: 'Прилагательное «благодарный»: grateful.',
      russianTranslation: 'Мы были бы чрезвычайно признательны, если бы вы смогли выслать нам подробный протокол синтеза хирального лиганда.',
    },
    {
      id: 'u36-ex-9',
      sentenceBefore: 'Any resulting publication will, of course, fully acknowledge and ',
      sentenceAfter: ' your laboratory’s original methodology.',
      promptWord: '(cite: cite / citing)',
      correctAnswer: 'cite',
      acceptedAnswers: ['cite', 'credit'],
      ruleExplanationRu:
        'Обещание академического цитирования при запросе чужих данных: "acknowledge and cite your methodology". После модального глагола will — bare infinitive.',
      ruleFormula: 'will acknowledge and cite + source',
      hintRu: 'Инфинитив глагола цитировать: cite.',
      russianTranslation: 'Любая последующая публикация, разумеется, будет в полной мере содержать благодарность и цитировать оригинальную методику вашей лаборатории.',
    },
    {
      id: 'u36-ex-10',
      sentenceBefore: 'Please do not ',
      sentenceAfter: ' to contact me if you need any additional experimental details or clarification.',
      promptWord: '(hesitate: hesitate / hesitating)',
      correctAnswer: 'hesitate',
      acceptedAnswers: ['hesitate'],
      ruleExplanationRu:
        'Классическая формула вежливости в конце академического письма: "Please do not hesitate to contact me" (Пожалуйста, не стесняйтесь обращаться ко мне).',
      ruleFormula: 'Please do not hesitate to + V1',
      hintRu: 'Глагол сомневаться/колебаться: hesitate.',
      russianTranslation: 'Пожалуйста, не колеблясь обращайтесь ко мне, если вам потребуются какие-либо дополнительные экспериментальные подробности или разъяснения.',
    },
    {
      id: 'u36-ex-11',
      sentenceBefore: '',
      sentenceAfter: ' you require any further documentation, we will be happy to provide it promptly.',
      promptWord: '(should: Should / If)',
      correctAnswer: 'Should',
      acceptedAnswers: ['Should', 'should'],
      ruleExplanationRu:
        'Формальная инверсия условного предложения 1-го типа (вместо "If you should require..."): "Should you require any further documentation...". Звучит предельно вежливо и профессионально.',
      ruleFormula: 'Should + Subject + require..., main clause',
      hintRu: 'Инвертированный модальный глагол условия: Should.',
      russianTranslation: 'Если вам потребуется какая-либо дополнительная документация, мы с радостью предоставим ее незамедлительно.',
    },
    {
      id: 'u36-ex-12',
      sentenceBefore: 'Thank you in ',
      sentenceAfter: ' for your time, assistance, and guidance with this matter.',
      promptWord: '(advance: advance / advanced)',
      correctAnswer: 'advance',
      acceptedAnswers: ['advance'],
      ruleExplanationRu:
        'Устойчивое выражение "thank you in advance" (заблаговременно благодарю вас).',
      ruleFormula: 'thank you in advance for + noun',
      hintRu: 'Слово в связке «заранее»: advance (in advance).',
      russianTranslation: 'Заранее благодарю вас за ваше время, помощь и содействие в этом вопросе.',
    },
    {
      id: 'u36-ex-13',
      sentenceBefore: 'I look forward to ',
      sentenceAfter: ' your decision in due course.',
      promptWord: '(receive: receiving / receive)',
      correctAnswer: 'receiving',
      acceptedAnswers: ['receiving', 'hearing'],
      ruleExplanationRu:
        'В выражении "look forward to" слово "to" является предлогом, поэтому после него обязательно употребляется герундий (-ing): receiving.',
      ruleFormula: 'look forward to receiving / hearing',
      hintRu: 'Форма глагола receive на -ing: receiving.',
      russianTranslation: 'С нетерпением ожидаю вашего решения в надлежащее время.',
    },
    {
      id: 'u36-ex-14',
      sentenceBefore: 'We apologize for any ',
      sentenceAfter: ' caused by the minor typographical errors in Table 2.',
      promptWord: '(convenience: inconvenience / convenient)',
      correctAnswer: 'inconvenience',
      acceptedAnswers: ['inconvenience'],
      ruleExplanationRu:
        'Академическое извинение за опечатки или накладки: "apologize for any inconvenience caused". Приставка in- образует отрицательное существительное "неудобство".',
      ruleFormula: 'apologize for any inconvenience caused',
      hintRu: 'Существительное «неудобство»: inconvenience.',
      russianTranslation: 'Мы приносим извинения за любые неудобства, вызванные незначительными опечатками в таблице 2.',
    },
    {
      id: 'u36-ex-15',
      sentenceBefore: 'Could you please confirm receipt ',
      sentenceAfter: ' our revised manuscript and response document?',
      promptWord: '(preposition: of / for / to)',
      correctAnswer: 'of',
      acceptedAnswers: ['of'],
      ruleExplanationRu:
        'Существительное "receipt" (получение) управляет предлогом "of": "confirm receipt OF something".',
      ruleFormula: 'confirm receipt of + noun',
      hintRu: 'Предлог после слова receipt: of.',
      russianTranslation: 'Не могли бы вы подтвердить получение нашей исправленной рукописи и документа с ответами рецензентам?',
    },
    {
      id: 'u36-ex-16',
      sentenceBefore: 'We believe that our study fits well within the ',
      sentenceAfter: ' and aims of the journal, particularly in the domain of bioinorganic catalysis.',
      promptWord: '(scope: scope / scale)',
      correctAnswer: 'scope',
      acceptedAnswers: ['scope'],
      ruleExplanationRu:
        'Коллокация научного издательского процесса: "aims and scope of the journal" (цели и тематические рамки журнала).',
      ruleFormula: 'within the scope and aims of the journal',
      hintRu: 'Термин тематического охвата журнала: scope.',
      russianTranslation: 'Мы полагаем, что наше исследование хорошо вписывается в тематические рамки и цели журнала, особенно в области бионеорганического катализа.',
    },
    {
      id: 'u36-ex-17',
      sentenceBefore: 'I would be grateful if you could let me know whether you might have thirty minutes to ',
      sentenceAfter: ' a potential collaborative grant application.',
      promptWord: '(discuss: discuss / discussing)',
      correctAnswer: 'discuss',
      acceptedAnswers: ['discuss'],
      ruleExplanationRu:
        'После инфинитивной частицы to используется начальная форма глагола: discuss (обсудить).',
      ruleFormula: 'thirty minutes to discuss + topic',
      hintRu: 'Инфинитив глагола обсудить: discuss.',
      russianTranslation: 'Я был бы признателен, если бы вы сообщили мне, найдется ли у вас тридцать минут для обсуждения потенциальной совместной заявки на грант.',
    },
    {
      id: 'u36-ex-18',
      sentenceBefore: 'With regard to the mechanism, we have expanded Section 4.2 to provide a more detailed theoretical ',
      sentenceAfter: '.',
      promptWord: '(explain: explanation / explaining)',
      correctAnswer: 'explanation',
      acceptedAnswers: ['explanation'],
      ruleExplanationRu:
        'Существительное от глагола explain: explanation (более подробное теоретическое объяснение).',
      ruleFormula: 'detailed theoretical explanation',
      hintRu: 'Существительное «объяснение»: explanation.',
      russianTranslation: 'Что касается механизма, мы расширили раздел 4.2, чтобы предоставить более подробное теоретическое объяснение.',
    },
    {
      id: 'u36-ex-19',
      sentenceBefore: 'Please accept my apologies for the delay in ',
      sentenceAfter: ' to your email; I was conducting fieldwork in the Arctic.',
      promptWord: '(reply: replying / reply)',
      correctAnswer: 'replying',
      acceptedAnswers: ['replying', 'responding'],
      ruleExplanationRu:
        'После предлога "in" используется форма на -ing: "delay in replying / responding to your email" (задержка с ответом на ваше письмо).',
      ruleFormula: 'delay in replying/responding to + email',
      hintRu: 'Форма глагола reply на -ing: replying.',
      russianTranslation: 'Пожалуйста, примите мои извинения за задержку с ответом на ваше письмо; я находился на полевых исследованиях в Арктике.',
    },
    {
      id: 'u36-ex-20',
      sentenceBefore: 'We have taken all reviewer criticisms into ',
      sentenceAfter: ' when preparing this revised submission.',
      promptWord: '(consider: consideration / considered)',
      correctAnswer: 'consideration',
      acceptedAnswers: ['consideration', 'account'],
      ruleExplanationRu:
        'Идиома "take something into consideration / account" (принять во внимание, учесть).',
      ruleFormula: 'take criticisms into consideration/account',
      hintRu: 'Существительное в идиоме «принять во внимание»: consideration (или account).',
      russianTranslation: 'Мы приняли во внимание все критические замечания рецензентов при подготовке этой исправленной версии статьи.',
    },
    {
      id: 'u36-ex-21',
      sentenceBefore: 'Thank you once again for considering our work for ',
      sentenceAfter: ' in Journal of Molecular Biology.',
      promptWord: '(publish: publication / publishing)',
      correctAnswer: 'publication',
      acceptedAnswers: ['publication'],
      ruleExplanationRu:
        'После предлога for для обозначения факта публикации используется существительное "publication": "for publication in [Journal]".',
      ruleFormula: 'for publication in + [Journal Name]',
      hintRu: 'Существительное «публикация»: publication.',
      russianTranslation: 'Еще раз спасибо за рассмотрение нашей работы к публикации в Journal of Molecular Biology.',
    },
    {
      id: 'u36-ex-22',
      sentenceBefore: 'Sincerely ',
      sentenceAfter: ', Dr. Anna Kowalski, Lead Principal Investigator.',
      promptWord: '(yours: yours / your)',
      correctAnswer: 'yours',
      acceptedAnswers: ['yours'],
      ruleExplanationRu:
        'Традиционная концовка официального письма: "Sincerely yours," (Искренне ваш, с уважением). Запятая ставится после yours.',
      ruleFormula: 'Sincerely yours, + Name',
      hintRu: 'Форма местоимения в подписи «искренне ваш»: yours.',
      russianTranslation: 'Искренне ваша, доктор Анна Ковальски, ведущий главный исследователь.',
    },
  ],
};
