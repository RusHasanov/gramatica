import { CambridgeUnit } from '../cambridgeUnits';

export const unitRelativeClauses: CambridgeUnit = {
  id: 'unit-20-relative-clauses',
  unitNumber: 20,
  level: 'B1-B2',
  book: 'Murphy English Grammar in Use (Blue)',
  category: 'Clauses & Gerunds',
  titleEn: 'Relative Clauses: who / which / that / whose / where (Defining & Non-defining)',
  titleRu: 'Относительные придаточные: who, which, that, whose, where (определительные и неопределительные)',
  ruleSummaryRu:
    '1. Defining relative clauses (определительные придаточные): дают необходимую идентифицирующую информацию о лице или предмете. Запятыми НЕ выделяются!\n' +
    '   - Для людей: who или that ("The surgeon who/that performed the operation...").\n' +
    '   - Для предметов/идей: which или that ("The research paper which/that won the prize...").\n' +
    '   - Притяжательное значение (чей/чья/чьи): whose ("A patient whose blood tests improved...").\n' +
    '   - Для мест: where ("The diagnostic centre where we had the scan...").\n' +
    '   - Опущение местоимения: если who/which/that является дополнением (object), его можно опустить: "The colleague (who) I emailed yesterday".\n' +
    '2. Non-defining relative clauses (неопределительные придаточные): сообщают дополнительную (extra) информацию. На письме ВСЕГДА выделяются запятыми!\n' +
    '   - Для людей: ТОЛЬКО who (слово that использовать СТРОГО ЗАПРЕЩЕНО!).\n' +
    '   - Для вещей: ТОЛЬКО which (слово that использовать СТРОГО ЗАПРЕЩЕНО!).\n' +
    '   - Для мест: where.\n' +
    '   - Для притяжания: whose.\n' +
    '   - Ссылка на всю предшествующую ситуацию: which ("The experiment failed, which was very disappointing").\n' +
    '   - Опускать относительное местоимение в non-defining clauses НЕЛЬЗЯ!',
  keyFormula:
    'Люди: who / that (в non-defining ТОЛЬКО who) | Вещи: which / that (в non-defining ТОЛЬКО which) | Чей: whose + сущ. | Место: where | Вся ситуация: , which ...',
  markerWords: [
    'who (для людей)',
    'which (для неодушевленных)',
    'that (для людей и вещей, только без запятых!)',
    'whose (чей/чья/чьи)',
    'where (место действия)',
    ', which... (относящееся ко всей фразе)',
  ],
  pitfallsRu:
    '1. В предложениях с запятыми (Non-defining clauses) НИКОГДА нельзя писать "that". Только "who" (для людей) или "which" (для вещей). Например: "Dr. Watson, who is our lead surgeon, ..." (НЕ that!).\n' +
    '2. Не путайте whose (чей, притяжательное) и who\'s (сокращение от who is / who has).\n' +
    '3. Не путайте where (где) и which: если после названия места стоит глагол без предлога ("The hospital which was renovated in 2023"), используется which/that, а where используется, когда внутри придаточного кто-то совершает действие в этом месте ("The hospital where Dr. Chen works").\n' +
    '4. Если относительное местоимение относится ко всей предыдущей фразе, используется ТОЛЬКО ", which" (НЕ ", what").',
  exercises: [
    {
      id: 'u20-ex-1',
      sentenceBefore: 'Dr. Evelyn Vance, ',
      sentenceAfter: ' delivered the opening keynote address on neuroplasticity, is a world-renowned researcher.',
      promptWord: '(who / which / whose / where)',
      correctAnswer: 'who',
      acceptedAnswers: ['who'],
      ruleExplanationRu:
        'Это non-defining relative clause (выделено запятыми и сообщает дополнительную информацию об известном человеке). Для людей в таких придаточных используется ТОЛЬКО "who" (слово "that" использовать с запятыми запрещено!).',
      ruleFormula: 'Имя собственное, + who + глагол, ...',
      hintRu: 'Человек в предложении с запятыми (non-defining). Слово that здесь запрещено!',
      russianTranslation:
        'Доктор Эвелин Вэнс, которая выступила с вступительным пленарным докладом о нейропластичности, является всемирно известным исследователем.',
    },
    {
      id: 'u20-ex-2',
      sentenceBefore: 'The clinical study ',
      sentenceAfter: ' was published in The Lancet sparked an intensive international scientific debate.',
      promptWord: '(who / which / that / whose)',
      correctAnswer: 'which',
      acceptedAnswers: ['which', 'that'],
      ruleExplanationRu:
        'В определяющем придаточном (defining relative clause) без запятых для неодушевленных существительных (the study) допустимы как "which", так и "that".',
      ruleFormula: 'существительное (вещь) + which / that + глагол',
      hintRu: 'Неодушевленный предмет (исследование) в определяющем придаточном.',
      russianTranslation:
        'Клиническое исследование, которое было опубликовано в журнале The Lancet, вызвало интенсивные международные научные дебаты.',
    },
    {
      id: 'u20-ex-3',
      sentenceBefore: 'Professor Higgins, ',
      sentenceAfter: ' latest book on generative artificial intelligence became a bestseller, will chair the ethics symposium.',
      promptWord: '(who / which / whose / where)',
      correctAnswer: 'whose',
      acceptedAnswers: ['whose'],
      ruleExplanationRu:
        'Притяжательное относительное местоимение "whose" выражает принадлежность (чей / чья: professor Higgins -> whose latest book). Оно сочетается с существительным без артикля.',
      ruleFormula: 'лицо, + whose + существительное, ...',
      hintRu: 'Притяжательное значение (чья последняя книга).',
      russianTranslation:
        'Профессор Хиггинс, чья последняя книга о генеративном искусственном интеллекте стала бестселлером, возглавит симпозиум по этике.',
    },
    {
      id: 'u20-ex-4',
      sentenceBefore: 'The biomedical research laboratory ',
      sentenceAfter: ' the vaccine trials are being conducted meets the highest biosafety standards.',
      promptWord: '(who / which / whose / where)',
      correctAnswer: 'where',
      acceptedAnswers: ['where'],
      ruleExplanationRu:
        'Местоимение "where" используется для указания места, в котором происходит действие (в которой проводятся испытания = in which the trials are being conducted).',
      ruleFormula: 'место + where + подлежащее + глагол',
      hintRu: 'Обозначение места, где происходит действие.',
      russianTranslation:
        'Биомедицинская исследовательская лаборатория, где проводятся испытания вакцины, соответствует высочайшим стандартам биобезопасности.',
    },
    {
      id: 'u20-ex-5',
      sentenceBefore: 'Our morning flight to Zurich was cancelled due to fog, ',
      sentenceAfter: ' meant we missed the opening ceremony of the conference.',
      promptWord: '(which / that / what / whose)',
      correctAnswer: 'which',
      acceptedAnswers: ['which'],
      ruleExplanationRu:
        'Когда относительное местоимение относится ко всей предшествующей ситуации (отмена рейса), используется ТОЛЬКО ", which". Слово "what" или "that" здесь использовать грамматически неверно.',
      ruleFormula: 'фраза, + which + глагол (значение "что и послужило причиной")',
      hintRu: 'Относится ко всей предыдущей ситуации через запятую (что и привело к...).',
      russianTranslation:
        'Наш утренний рейс в Цюрих отменили из-за тумана, из-за чего мы пропустили церемонию открытия конференции.',
    },
    {
      id: 'u20-ex-6',
      sentenceBefore: 'The senior software architect ',
      sentenceAfter: ' designed the microservices infrastructure has just accepted a position in Singapore.',
      promptWord: '(who / which / whose / where)',
      correctAnswer: 'who',
      acceptedAnswers: ['who', 'that'],
      ruleExplanationRu:
        'Для обозначения людей в определяющем придаточном (defining clause) используется "who" (или разговорное "that").',
      ruleFormula: 'человек + who / that + глагол',
      hintRu: 'Человек (архитектор ПО) выполняет действие.',
      russianTranslation:
        'Ведущий архитектор программного обеспечения, который спроектировал микросервисную инфраструктуру, только что принял предложение о работе в Сингапуре.',
    },
    {
      id: 'u20-ex-7',
      sentenceBefore: 'The historic university archive, ',
      sentenceAfter: ' houses original 17th-century botanical manuscripts, is undergoing urgent climate-control restoration.',
      promptWord: '(who / which / that / where)',
      correctAnswer: 'which',
      acceptedAnswers: ['which'],
      ruleExplanationRu:
        'Придаточное выделено запятыми (non-defining) и относится к неодушевленному объекту (the archive). В таких случаях допустимо ТОЛЬКО "which". Слово "that" после запятой использовать нельзя!',
      ruleFormula: 'вещь, + which + глагол, ...',
      hintRu: 'Неодушевленный предмет между запятыми. Слово that после запятой недопустимо!',
      russianTranslation:
        'Исторический архив университета, в котором хранятся оригинальные ботанические рукописи XVII века, проходит срочную реставрацию системы климат-контроля.',
    },
    {
      id: 'u20-ex-8',
      sentenceBefore: 'We interviewed three pediatricians, ',
      sentenceAfter: ' all recommended establishing a consistent bedtime routine for the toddler.',
      promptWord: '(who / which / that / where)',
      correctAnswer: 'who',
      acceptedAnswers: ['who'],
      ruleExplanationRu:
        'После запятой при описании людей используется "who". Слово that в non-defining clauses не используется.',
      ruleFormula: 'люди, + who + глагол',
      hintRu: 'Относится к людям (pediatricians) в предложении с запятой.',
      russianTranslation:
        'Мы проконсультировались с тремя педиатрами, которые все порекомендовали установить стабильный режим отхода ко сну для малыша.',
    },
    {
      id: 'u20-ex-9',
      sentenceBefore: 'The tech startup ',
      sentenceAfter: ' founders both graduated from MIT raised twelve million dollars in Series A funding.',
      promptWord: '(who / which / whose / where)',
      correctAnswer: 'whose',
      acceptedAnswers: ['whose'],
      ruleExplanationRu:
        'Местоимение "whose" обозначает принадлежность: основатели которого (the startup\'s founders -> whose founders).',
      ruleFormula: 'существительное + whose + существительное',
      hintRu: 'Притяжательное отношение (основатели которого).',
      russianTranslation:
        'Технологический стартап, основатели которого оба окончили Массачусетский технологический институт, привлек 12 миллионов долларов инвестиций серии А.',
    },
    {
      id: 'u20-ex-10',
      sentenceBefore: 'The seaside rehabilitation resort ',
      sentenceAfter: ' my uncle recovered from his cardiovascular surgery offers tailored thermal therapy.',
      promptWord: '(who / which / whose / where)',
      correctAnswer: 'where',
      acceptedAnswers: ['where'],
      ruleExplanationRu:
        'Используется "where", так как придаточное указывает на локацию, в которой происходило действие (where my uncle recovered).',
      ruleFormula: 'место + where + подлежащее + глагол',
      hintRu: 'Место, где дядя восстанавливался после операции.',
      russianTranslation:
        'Приморский реабилитационный курорт, где мой дядя восстанавливался после кардиохирургической операции, предлагает индивидуальную термальную терапию.',
    },
    {
      id: 'u20-ex-11',
      sentenceBefore: 'My colleague failed to back up the financial spreadsheets, ',
      sentenceAfter: ' created an enormous amount of unnecessary stress for the auditing team.',
      promptWord: '(which / that / what / whose)',
      correctAnswer: 'which',
      acceptedAnswers: ['which'],
      ruleExplanationRu:
        'Относительное придаточное относится ко всему действию главной части предложения ("не сделал резервную копию"), поэтому связывается через ", which".',
      ruleFormula: 'предшествующее событие, + which + глагол',
      hintRu: 'Относится ко всему предшествующему факту целиком.',
      russianTranslation:
        'Мой коллега не сделал резервную копию финансовых таблиц, что создало колоссальное количество ненужного стресса для аудиторской команды.',
    },
    {
      id: 'u20-ex-12',
      sentenceBefore: 'The oncology patient ',
      sentenceAfter: ' MRI scan revealed no further progression was discharged yesterday afternoon.',
      promptWord: '(who / which / whose / where)',
      correctAnswer: 'whose',
      acceptedAnswers: ['whose'],
      ruleExplanationRu:
        'Притяжательное "whose" соединяет пациента и результат его МРТ-сканирования (the patient\'s MRI scan -> whose MRI scan).',
      ruleFormula: 'пациент + whose + существительное',
      hintRu: 'Притяжательное местоимение: МРТ-снимок которого.',
      russianTranslation:
        'Онкологический пациент, чей снимок МРТ не выявил дальнейшего прогрессирования болезни, был выписан вчера днем.',
    },
    {
      id: 'u20-ex-13',
      sentenceBefore: 'Geneva, ',
      sentenceAfter: ' the headquarters of the World Health Organization is situated, hosts dozens of global health summits annually.',
      promptWord: '(which / where / that / whose)',
      correctAnswer: 'where',
      acceptedAnswers: ['where'],
      ruleExplanationRu:
        'В данном случае Женева рассматривается как место, где расположена штаб-квартира ВОЗ (where the headquarters is situated = in which it is situated).',
      ruleFormula: 'город, + where + подлежащее + сказуемое, ...',
      hintRu: 'Указание на место (где расположена штаб-квартира).',
      russianTranslation:
        'Женева, где находится штаб-квартира Всемирной организации здравоохранения, ежегодно принимает десятки всемирных саммитов по здравоохранению.',
    },
    {
      id: 'u20-ex-14',
      sentenceBefore: 'The machine-learning algorithm ',
      sentenceAfter: ' our team developed predicts patient readmission rates with 94% accuracy.',
      promptWord: '(who / which / that / whose)',
      correctAnswer: 'which',
      acceptedAnswers: ['which', 'that'],
      ruleExplanationRu:
        'Для неодушевленного существительного (the algorithm) в определяющем придаточном можно использовать "which" или "that".',
      ruleFormula: 'вещь + which / that + подлежащее + сказуемое',
      hintRu: 'Неодушевленный предмет (алгоритм) в роли дополнения.',
      russianTranslation:
        'Алгоритм машинного обучения, который разработала наша команда, прогнозирует вероятность повторной госпитализации пациентов с точностью 94%.',
    },
    {
      id: 'u20-ex-15',
      sentenceBefore: 'Dr. Marcus Holloway, ',
      sentenceAfter: ' has published over eighty peer-reviewed papers on quantum cryptography, was awarded the Turing Medal.',
      promptWord: '(who / which / that / whose)',
      correctAnswer: 'who',
      acceptedAnswers: ['who'],
      ruleExplanationRu:
        'В non-defining relative clause (выделено запятыми) для человека допустимо ТОЛЬКО "who". Слово "that" с запятыми использовать грамматически недопустимо.',
      ruleFormula: 'Имя, + who + глагол, ...',
      hintRu: 'Человек в придаточном предложении с запятыми (non-defining).',
      russianTranslation:
        'Доктор Маркус Холлоуэй, опубликовавший более восьмидесяти рецензируемых статей по квантовой криптографии, был удостоен медали Тьюринга.',
    },
    {
      id: 'u20-ex-16',
      sentenceBefore: 'We decided to stay at an eco-lodge ',
      sentenceAfter: ' solar panels generate all the electricity needed for heating and lighting.',
      promptWord: '(who / which / whose / where)',
      correctAnswer: 'whose',
      acceptedAnswers: ['whose'],
      ruleExplanationRu:
        'Местоимение "whose" может использоваться и для неодушевленных предметов, обозначая принадлежность (солнечные панели эко-отеля -> the eco-lodge\'s solar panels -> whose solar panels).',
      ruleFormula: 'существительное + whose + существительное',
      hintRu: 'Принадлежность для предмета/места (солнечные панели которого).',
      russianTranslation:
        'Мы решили остановиться в эко-отеле, чьи солнечные панели вырабатывают всю электроэнергию, необходимую для отопления и освещения.',
    },
    {
      id: 'u20-ex-17',
      sentenceBefore: 'The remote alpine village ',
      sentenceAfter: ' the environmental researchers spent the winter was cut off from the main highway for six weeks.',
      promptWord: '(who / which / whose / where)',
      correctAnswer: 'where',
      acceptedAnswers: ['where'],
      ruleExplanationRu:
        'Слово "where" указывает на место, в котором исследователи провели зиму (in which they spent the winter).',
      ruleFormula: 'место + where + подлежащее + глагол',
      hintRu: 'Место действия (деревня, в которой исследователи провели зиму).',
      russianTranslation:
        'Отдаленная альпийская деревня, где ученые-экологи провели зиму, была отрезана от главной автомагистрали на шесть недель.',
    },
    {
      id: 'u20-ex-18',
      sentenceBefore: 'The international climate agreement, ',
      sentenceAfter: ' was ratified by 195 nations in Paris, established legally binding emissions targets.',
      promptWord: '(who / which / that / where)',
      correctAnswer: 'which',
      acceptedAnswers: ['which'],
      ruleExplanationRu:
        'Неопределительное придаточное (non-defining), выделенное запятыми, относится к документу/соглашению. Допустимо ТОЛЬКО "which", слово "that" исключено.',
      ruleFormula: 'вещь, + which + was + V3, ...',
      hintRu: 'Неодушевленный предмет между запятыми. Использовать that запрещено!',
      russianTranslation:
        'Международное соглашение по климату, которое было ратифицировано 195 странами в Париже, установило юридически обязывающие целевые показатели выбросов.',
    },
    {
      id: 'u20-ex-19',
      sentenceBefore: 'The young violinist ',
      sentenceAfter: ' won the international competition will perform as soloist with the London Symphony Orchestra.',
      promptWord: '(who / which / whose / where)',
      correctAnswer: 'who',
      acceptedAnswers: ['who', 'that'],
      ruleExplanationRu:
        'В определяющем придаточном предложении об одушевленном лице (the violinist) используется "who" или "that".',
      ruleFormula: 'лицо + who / that + глагол',
      hintRu: 'Одушевленное лицо (скрипач) без запятых.',
      russianTranslation:
        'Молодая скрипачка, выигравшая международный конкурс, выступит в качестве солистки с Лондонским симфоническим оркестром.',
    },
    {
      id: 'u20-ex-20',
      sentenceBefore: 'The project manager accepted full responsibility for the milestone delay, ',
      sentenceAfter: ' earned him deep respect among the senior stakeholders.',
      promptWord: '(which / that / what / whose)',
      correctAnswer: 'which',
      acceptedAnswers: ['which'],
      ruleExplanationRu:
        'Придаточное выражает отношение ко всему поступку руководителя проекта ("принял на себя ответственность"), поэтому оформляется через ", which".',
      ruleFormula: 'событие, + which + глагол',
      hintRu: 'Относится ко всей предыдущей мысли целиком (что и заслужило ему уважение).',
      russianTranslation:
        'Руководитель проекта взял на себя полную ответственность за задержку контрольного этапа, что принесло ему глубокое уважение среди ключевых заинтересованных сторон.',
    },
    {
      id: 'u20-ex-21',
      sentenceBefore: 'The family clinic ',
      sentenceAfter: ' my siblings and I were treated as children has recently expanded into a multi-specialty medical hub.',
      promptWord: '(who / which / whose / where)',
      correctAnswer: 'where',
      acceptedAnswers: ['where'],
      ruleExplanationRu:
        'Придаточное описывает место действия (клиника, где мы лечились в детстве = in which we were treated), поэтому используется "where".',
      ruleFormula: 'место + where + подлежащее + глагол',
      hintRu: 'Указание на место (где нас лечили в детстве).',
      russianTranslation:
        'Семейная поликлиника, где мы с братьями и сестрами лечились в детстве, недавно расширилась до многопрофильного медицинского центра.',
    },
    {
      id: 'u20-ex-22',
      sentenceBefore: 'The senior software developer ',
      sentenceAfter: ' laptop was stolen at the conference center immediately alerted corporate security to revoke access tokens.',
      promptWord: '(who / which / whose / where)',
      correctAnswer: 'whose',
      acceptedAnswers: ['whose'],
      ruleExplanationRu:
        'Используется притяжательное местоимение "whose" (разработчик, чей ноутбук был украден = whose laptop was stolen).',
      ruleFormula: 'лицо + whose + существительное',
      hintRu: 'Притяжательное значение (чей ноутбук был украден).',
      russianTranslation:
        'Ведущий программист, чей ноутбук был украден в конференц-центре, немедленно предупредил службу корпоративной безопасности для аннулирования токенов доступа.',
    },
  ],
};
