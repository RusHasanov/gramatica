import { CambridgeUnit } from '../cambridgeUnits';

export const unitTravelHospitality: CambridgeUnit = {
  id: 'unit-38-travel-hospitality',
  unitNumber: 38,
  level: 'B1-B2',
  book: 'Real Life & Situational English',
  category: 'Real Life',
  titleEn: 'Travel & Hospitality: Airport Check-in, Hotel Stays, Complaints & Dining Out',
  titleRu: 'Путешествия и сервис: аэропорт, отель, вежливые жалобы и заказ в ресторане',
  ruleSummaryRu:
    'Путешествия требуют владения формулами вежливой коммуникации (polite requests), выражениями в сфере гостеприимства и грамматикой для урегулирования бытовых неудобств:\n\n' +
    '1. В аэропорту (Airport Check-in & Security):\n' +
    '   - Регистрация и багаж: "May I see your passport and boarding pass?", "Did you pack these bags yourself?", "Do you have any liquids in your carry-on baggage?"\n' +
    '   - Изменения рейсов (Пассивный залог / Present Perfect Passive): "Our flight has been delayed / cancelled due to adverse weather conditions."\n' +
    '   - Посадка: "Flight 402 is now boarding at Gate 14."\n\n' +
    '2. В гостинице (Hotel Check-in & Requests):\n' +
    '   - Подтверждение брони: "I have a reservation under the name of Smith for three nights."\n' +
    '   - Уточнение условий: "Is continental breakfast included in the room rate?", "What time do we need to check out?"\n' +
    '   - Хранение багажа: "Could you store our luggage after check-out until our train departs?"\n\n' +
    '3. Вежливое выражение претензий (Dealing with Complaints):\n' +
    '   - Смягчающие формулы вежливости: "I am afraid that...", "There seems to be an issue with...", "Excuse me, but the heater isn’t working."\n' +
    '   - Пассивное описание нерешенной проблемы: "Our room hasn’t been made up yet." / "The towels haven’t been replaced."\n' +
    '   - Просьба исправить: "Could someone please send a technician up to check it?"\n\n' +
    '4. В ресторане (Ordering Food & Settling the Bill):\n' +
    '   - Столик: "Could we have a table for two by the window, please?"\n' +
    '   - Заказ еды (Future with will / would like): "I will have the grilled salmon, please." / "I would like the steak medium rare."\n' +
    '   - Диетические ограничения: "Does this sauce contain nuts or gluten? I am allergic."\n' +
    '   - Раздельный счет: "Could we have the bill, please? Could we split the bill?"',
  keyFormula:
    'Бронь: reservation under the name of | Вежливая жалоба: I am afraid ... isn\'t working | Заказ: I\'ll have the... / Could I get... | Счет: Could we have the bill? / split the bill',
  markerWords: [
    'boarding pass',
    'carry-on luggage',
    'has been delayed',
    'reservation under the name of',
    'included in the rate',
    'I am afraid that',
    'there seems to be an issue',
    'I will have the',
    'split the bill',
  ],
  pitfallsRu:
    '1. "Luggage" и "baggage" — ВСЕГДА неисчисляемые существительные в английском языке! Нельзя говорить "two luggages" или "a baggage". Говорят: "two pieces of luggage" или "my bags".\n' +
    '2. При заказе блюд не используют форму Present Simple "I want" или "I take" — это звучит невежливо и грубо. Естественно сказать: "I will have..." (I\'ll have) или "Could I please get...".\n' +
    '3. Смягчение жалобы: англоговорящие избегают резкого "You made a mistake" или "Your AC is broken". Вместо этого начинают с вежливого "I am afraid there is an issue with..." или "It seems that...".',
  exercises: [
    {
      id: 'u38-ex-1',
      sentenceBefore: 'Good morning. May I please see your passport and ',
      sentenceAfter: ' pass?',
      promptWord: '(boarding: boarding / flying / airplane)',
      correctAnswer: 'boarding',
      acceptedAnswers: ['boarding'],
      ruleExplanationRu:
        'Посадочный талон на самолет называется устойчивым термином "boarding pass". Слово "board" здесь обозначает посадку на борт судна.',
      ruleFormula: 'boarding pass',
      hintRu: 'Талон на посадку: boarding.',
      russianTranslation: 'Доброе утро. Могу я взглянуть на ваш паспорт и посадочный талон?',
    },
    {
      id: 'u38-ex-2',
      sentenceBefore: 'I am afraid your suitcase exceeds the weight limit, so you have to pay for excess ',
      sentenceAfter: '.',
      promptWord: '(luggage: luggage / luggages / baggages)',
      correctAnswer: 'luggage',
      acceptedAnswers: ['luggage', 'baggage'],
      ruleExplanationRu:
        'Слово "luggage" (или "baggage") — неисчисляемое (Uncountable) и не имеет формы множественного числа с окончанием -s. Перевес багажа — "excess luggage".',
      ruleFormula: 'excess luggage / baggage (uncountable)',
      hintRu: 'Неисчисляемое существительное багаж: luggage.',
      russianTranslation: 'К сожалению, ваш чемодан превышает лимит по весу, поэтому вам придется оплатить перевес багажа.',
    },
    {
      id: 'u38-ex-3',
      sentenceBefore: 'Passengers are only allowed to bring one piece of ',
      sentenceAfter: ' luggage into the aircraft cabin.',
      promptWord: '(carry-on: carry-on / hand-on / hold)',
      correctAnswer: 'carry-on',
      acceptedAnswers: ['carry-on', 'hand'],
      ruleExplanationRu:
        'Ручная кладь в авиаперелетах называется "carry-on luggage" (или "hand luggage" в британском английском).',
      ruleFormula: 'carry-on luggage / hand luggage',
      hintRu: 'Ручная кладь: carry-on (или hand).',
      russianTranslation: 'Пассажирам разрешается пронести в салон самолета только одно место ручной клади.',
    },
    {
      id: 'u38-ex-4',
      sentenceBefore: 'We regret to announce that flight BA450 to London ',
      sentenceAfter: ' delayed by two hours due to dense fog.',
      promptWord: '(has been: has been / is been / was being)',
      correctAnswer: 'has been',
      acceptedAnswers: ['has been'],
      ruleExplanationRu:
        'Present Perfect Passive ("has been delayed") используется для объявления актуальной новости/события, результат которого непосредственно влияет на текущее расписание.',
      ruleFormula: 'has been + V3 (delayed / cancelled)',
      hintRu: 'Пассивный Present Perfect: has been.',
      russianTranslation: 'С сожалением сообщаем, что рейс BA450 в Лондон был задержан на два часа из-за густого тумана.',
    },
    {
      id: 'u38-ex-5',
      sentenceBefore: 'Hello, I have a hotel room ',
      sentenceAfter: ' for three nights under the name of Petrov.',
      promptWord: '(reservation: reservation / reserve / book)',
      correctAnswer: 'reservation',
      acceptedAnswers: ['reservation', 'booking'],
      ruleExplanationRu:
        'Бронь в гостинице формулируется как "have a reservation" (или "have a booking") under the name of [Фамилия].',
      ruleFormula: 'have a reservation under the name of...',
      hintRu: 'Существительное бронь: reservation.',
      russianTranslation: 'Здравствуйте, у меня бронь номера на три ночи на имя Петров.',
    },
    {
      id: 'u38-ex-6',
      sentenceBefore: 'Could we please request a late check-',
      sentenceAfter: ' tomorrow? Our flight departs at 8 PM.',
      promptWord: '(out: out / in / off)',
      correctAnswer: 'out',
      acceptedAnswers: ['out'],
      ruleExplanationRu:
        'Поздний выезд из отеля обозначается сложным существительным "late check-out" (в противоположность раннему заезду — "early check-in").',
      ruleFormula: 'late check-out',
      hintRu: 'Послелог выезда из отеля: out.',
      russianTranslation: 'Можем ли мы попросить о позднем выезде завтра? Наш рейс вылетает в 8 вечера.',
    },
    {
      id: 'u38-ex-7',
      sentenceBefore: 'Excuse me, is breakfast ',
      sentenceAfter: ' in the room rate, or do we have to pay extra for it?',
      promptWord: '(included: included / including / inclusive)',
      correctAnswer: 'included',
      acceptedAnswers: ['included'],
      ruleExplanationRu:
        'Пассивная форма "is included in the price / rate" (включен ли в стоимость) — стандартный вопрос при заселении в отель.',
      ruleFormula: 'Is breakfast included in the rate?',
      hintRu: 'Причастие прошедшего времени: included.',
      russianTranslation: 'Простите, завтрак включен в стоимость номера, или нам нужно доплачивать за него отдельно?',
    },
    {
      id: 'u38-ex-8',
      sentenceBefore: 'I am afraid that the air conditioning in our room is ',
      sentenceAfter: ' working properly; it blows only hot air.',
      promptWord: '(not: not / no / never)',
      correctAnswer: 'not',
      acceptedAnswers: ['not'],
      ruleExplanationRu:
        'Форма Present Continuous в отрицании: "is not working" (не работает прямо сейчас). Вежливая формула жалобы начинается со смягчающего "I am afraid that...".',
      ruleFormula: 'I am afraid that [device] is not working properly',
      hintRu: 'Отрицательная частица: not.',
      russianTranslation: 'Боюсь, что кондиционер в нашем номере не работает должным образом; он дует только горячим воздухом.',
    },
    {
      id: 'u38-ex-9',
      sentenceBefore: 'There seems to ',
      sentenceAfter: ' a problem with the electronic key card; the door will not unlock.',
      promptWord: '(be: be / being / been)',
      correctAnswer: 'be',
      acceptedAnswers: ['be'],
      ruleExplanationRu:
        'Устойчивый оборот вежливого сообщения о проблеме: "There seems to be a problem / an issue with..." (Похоже, возникла проблема с...). Инфинитив be после "seems to".',
      ruleFormula: 'There seems to be + a problem with...',
      hintRu: 'Инфинитив глагола to be: be.',
      russianTranslation: 'Похоже, возникла проблема с электронной картой-ключом; дверь не открывается.',
    },
    {
      id: 'u38-ex-10',
      sentenceBefore: 'Could someone please send a technician up? The sink in the bathroom is completely ',
      sentenceAfter: '.',
      promptWord: '(clogged: clogged / clogs / clogging)',
      correctAnswer: 'clogged',
      acceptedAnswers: ['clogged', 'blocked'],
      ruleExplanationRu:
        'Засор в раковине или трубе описывается прилагательным/причастием "clogged" (или "blocked").',
      ruleFormula: 'The sink is clogged / blocked',
      hintRu: 'Причастие "засоренный": clogged.',
      russianTranslation: 'Не мог бы кто-нибудь прислать мастера наверх? Раковина в ванной комнате полностью засорилась.',
    },
    {
      id: 'u38-ex-11',
      sentenceBefore: 'We have been out all day, but our room still has not ',
      sentenceAfter: ' cleaned.',
      promptWord: '(been: been / being / be)',
      correctAnswer: 'been',
      acceptedAnswers: ['been'],
      ruleExplanationRu:
        'Present Perfect Passive в отрицании: "has not been cleaned" (комнату до сих пор не убрали). Формула: has not + been + V3.',
      ruleFormula: 'has not been + V3',
      hintRu: 'Третья форма вспомогательного глагола be: been.',
      russianTranslation: 'Мы отсутствовали весь день, но наш номер до сих пор не был убран.',
    },
    {
      id: 'u38-ex-12',
      sentenceBefore: 'Good evening. Could we please have a table ',
      sentenceAfter: ' two by the window?',
      promptWord: '(for: for / to / of)',
      correctAnswer: 'for',
      acceptedAnswers: ['for'],
      ruleExplanationRu:
        'При бронировании или просьбе о столике в ресторане используется предлог for с указанием количества персон: "a table for two / four".',
      ruleFormula: 'a table for [number] people',
      hintRu: 'Предлог для количества персон: for.',
      russianTranslation: 'Добрый вечер. Не могли бы мы получить столик на двоих у окна?',
    },
    {
      id: 'u38-ex-13',
      sentenceBefore: 'Are you ready to order, or do you need a ',
      sentenceAfter: ' more minutes to look over the menu?',
      promptWord: '(few: few / little / bit)',
      correctAnswer: 'few',
      acceptedAnswers: ['few'],
      ruleExplanationRu:
        'С исчисляемыми существительными во множественном числе (minutes) употребляется "a few" (несколько), в отличие от "a little" для неисчисляемых.',
      ruleFormula: 'a few + countable plural noun (minutes)',
      hintRu: 'Местоимение с исчисляемыми минутами: few.',
      russianTranslation: 'Вы готовы сделать заказ, или вам нужно еще несколько минут, чтобы просмотреть меню?',
    },
    {
      id: 'u38-ex-14',
      sentenceBefore: 'For the main course, I ',
      sentenceAfter: ' have the grilled sea bass with roast vegetables, please.',
      promptWord: '(will: will / would / am)',
      correctAnswer: 'will',
      acceptedAnswers: ['will', "'ll"],
      ruleExplanationRu:
        'Для спонтанного решения или вежливого заказа блюда в ресторане используют Future Simple: "I will have..." (или сокращенно "I\'ll have").',
      ruleFormula: 'I will have + Dish, please',
      hintRu: 'Вспомогательный глагол будущего времени: will.',
      russianTranslation: 'На основное блюдо я буду жареного сибаса с запеченными овощами, пожалуйста.',
    },
    {
      id: 'u38-ex-15',
      sentenceBefore: 'Excuse me, could I get the dressing on the ',
      sentenceAfter: ', rather than mixed into the salad?',
      promptWord: '(side: side / part / edge)',
      correctAnswer: 'side',
      acceptedAnswers: ['side'],
      ruleExplanationRu:
        'Устойчивое гастрономическое выражение: "on the side" означает отдельно (в соуснике рядом, а не смешанным в салате).',
      ruleFormula: 'on the side',
      hintRu: 'Слово "сбоку / отдельно": side.',
      russianTranslation: 'Простите, не могли бы вы подать заправку отдельно (в соуснике), а не вмешивать ее в салат?',
    },
    {
      id: 'u38-ex-16',
      sentenceBefore: 'Does this dessert contain peanuts? I am severely ',
      sentenceAfter: ' to nuts.',
      promptWord: '(allergic: allergic / allergy / allergical)',
      correctAnswer: 'allergic',
      acceptedAnswers: ['allergic'],
      ruleExplanationRu:
        'Прилагательное "allergic" сочетается с предлогом "to": "be allergic to nuts / dairy / gluten" (иметь аллергию на что-то).',
      ruleFormula: 'be allergic to + Allergen',
      hintRu: 'Прилагательное "аллергичный": allergic.',
      russianTranslation: 'Этот десерт содержит арахис? У меня сильная аллергия на орехи.',
    },
    {
      id: 'u38-ex-17',
      sentenceBefore: 'Excuse me, but this soup is cold. Could you please ',
      sentenceAfter: ' it up for me?',
      promptWord: '(heat: heat / hot / warm)',
      correctAnswer: 'heat',
      acceptedAnswers: ['heat', 'warm'],
      ruleExplanationRu:
        'Фразовый глагол "heat up" (или "warm up") означает подогреть остывшую еду. Модальный оборот: "Could you please heat it up?".',
      ruleFormula: 'Could you please heat / warm [food] up?',
      hintRu: 'Глагол "подогреть": heat.',
      russianTranslation: 'Простите, но этот суп остыл. Не могли бы вы подогреть его для меня?',
    },
    {
      id: 'u38-ex-18',
      sentenceBefore: 'Excuse me, waiter, could we please have the ',
      sentenceAfter: '? We are in a bit of a hurry.',
      promptWord: '(bill: bill / check / receipt)',
      correctAnswer: 'bill',
      acceptedAnswers: ['bill', 'check'],
      ruleExplanationRu:
        'В британском английском счет в ресторане — "the bill", в американском — "the check". Просьба: "Could we have the bill, please?".',
      ruleFormula: 'Could we have the bill / check, please?',
      hintRu: 'Слово "счет": bill (или check).',
      russianTranslation: 'Извините, официант, можно нам счет, пожалуйста? Мы немного торопимся.',
    },
    {
      id: 'u38-ex-19',
      sentenceBefore: 'Can we ',
      sentenceAfter: ' the bill in half, or do we need to pay all together?',
      promptWord: '(split: split / divide / share)',
      correctAnswer: 'split',
      acceptedAnswers: ['split', 'divide'],
      ruleExplanationRu:
        'Идиома "split the bill" означает разделить счет поровну или оплатить каждый за себя.',
      ruleFormula: 'split the bill',
      hintRu: 'Глагол "разделить счет": split.',
      russianTranslation: 'Можем ли мы разделить счет пополам, или нам нужно оплачивать все вместе?',
    },
    {
      id: 'u38-ex-20',
      sentenceBefore: 'Is service charge already included in this total, or should we leave a ',
      sentenceAfter: ' in cash?',
      promptWord: '(tip: tip / gift / bonus)',
      correctAnswer: 'tip',
      acceptedAnswers: ['tip'],
      ruleExplanationRu:
        'Чаевые в ресторанах называются "a tip", а глагол "leave a tip" означает оставить чаевые официанту.',
      ruleFormula: 'leave a tip',
      hintRu: 'Слово "чаевые": tip.',
      russianTranslation: 'Плата за обслуживание уже включена в общую сумму, или нам следует оставить чаевые наличными?',
    },
  ],
};
