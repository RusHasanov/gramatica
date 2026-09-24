import { CambridgeUnit } from '../cambridgeUnits';

export const unitDirectionsTransport: CambridgeUnit = {
  id: 'unit-37-directions-transport',
  unitNumber: 37,
  level: 'A1-A2',
  book: 'Real Life & Situational English',
  category: 'Real Life',
  titleEn: 'Directions & City Transport: Asking the Way, Subway, Bus & Taxi',
  titleRu: 'Как пройти и проехать: навигация в городе, метро, автобусы и такси',
  ruleSummaryRu:
    'Умение ориентироваться в незнакомом городе и пользоваться транспортом объединяет повелительное наклонение, предлоги движения и места, а также вежливые модальные обороты:\n\n' +
    '1. Как вежливо спросить дорогу (Asking for Directions):\n' +
    '   - "Excuse me, could you tell me how to get to [place]?" (самый естественный и вежливый оборот).\n' +
    '   - "Is there a subway station near here / nearby?"\n' +
    '   - "How far is the British Museum from here?"\n' +
    '   - "Am I going the right way for the cathedral?"\n\n' +
    '2. Как указать путь (Giving Directions — Imperatives & Prepositions):\n' +
    '   - Повелительное наклонение для инструкций: "Go straight ahead", "Turn left / right", "Cross the street".\n' +
    '   - Порядковые числительные и перекрестки: "Take the second turning on your right", "At the roundabout, take the first exit".\n' +
    '   - Предлоги расположения: "opposite the bank" (напротив), "next to the chemist\'s" (рядом с), "between the cafe and the park" (между), "on the corner of Oxford Street" (на углу).\n\n' +
    '3. Метро и автобусы (Public Transport):\n' +
    '   - "Which bus goes to Trafalgar Square?"\n' +
    '   - "Do I need to change lines / trains?" (Нужно ли делать пересадку?).\n' +
    '   - "How many stops is it?" (Сколько остановок ехать?).\n' +
    '   - "You need to get on the red line and get off at Victoria."\n\n' +
    '4. Такси и поездки (Taking a Taxi / Uber):\n' +
    '   - "Could you take me to the airport, please?"\n' +
    '   - "Could you drop me off here / on the corner?" (Высадите меня здесь).\n' +
    '   - "Keep the change." (Сдачи не надо).',
  keyFormula:
    'Вопрос: Could you tell me how to get to... | Направление: Go straight / Turn left at... | Место: opposite / next to / on the corner | Транспорт: get on / get off / change lines',
  markerWords: [
    'how do I get to',
    'go straight ahead',
    'turn left / right',
    'take the second turning',
    'opposite / next to',
    'get on / get off',
    'change lines',
    'drop me off',
  ],
  pitfallsRu:
    '1. Не путайте "straight" и "right": "Go straight" означает "идите прямо", а "Turn right" — "поверните направо".\n' +
    '2. Предлог "opposite": в английском говорят "opposite the museum" БЕЗ предлогов "to" или "of" (НЕ "opposite to").\n' +
    '3. Посадка и высадка: в автобус, поезд и метро садятся с "get ON" и выходят с "get OFF", а в легковое такси и машину — "get IN" и "get OUT of".\n' +
    '4. Слово "turn": поворот на перекрестке — "take the second turning on the left" (НЕ "turn of left").',
  exercises: [
    {
      id: 'u37-ex-1',
      sentenceBefore: 'Excuse me, could you tell me how to ',
      sentenceAfter: ' to the central railway station?',
      promptWord: '(get: get / got / getting)',
      correctAnswer: 'get',
      acceptedAnswers: ['get'],
      ruleExplanationRu:
        'Формула вежливого вопроса о дороге: "how to get to + место" (как добраться до...). После инфинитивной частицы "to" используется начальная форма глагола get.',
      ruleFormula: 'could you tell me how to get to + Place',
      hintRu: 'Инфинитив глагола "добираться": get.',
      russianTranslation: 'Простите, вы не подскажете, как добраться до центрального железнодорожного вокзала?',
    },
    {
      id: 'u37-ex-2',
      sentenceBefore: 'Go ',
      sentenceAfter: ' ahead for about two blocks, and you will see the tower.',
      promptWord: '(straight: straight / direct / right)',
      correctAnswer: 'straight',
      acceptedAnswers: ['straight'],
      ruleExplanationRu:
        'Устойчивое наречие направления: "go straight ahead" (идите прямо вперед). "Straight" указывает направление движения без поворотов.',
      ruleFormula: 'Go straight ahead',
      hintRu: 'Наречие "прямо": straight.',
      russianTranslation: 'Идите прямо вперед примерно два квартала, и вы увидите башню.',
    },
    {
      id: 'u37-ex-3',
      sentenceBefore: 'At the traffic lights, ',
      sentenceAfter: ' right onto Baker Street.',
      promptWord: '(turn: turn / turned / turning)',
      correctAnswer: 'turn',
      acceptedAnswers: ['turn'],
      ruleExplanationRu:
        'При указании направления движения используется форма повелительного наклонения (Imperative): "Turn left / right".',
      ruleFormula: 'Turn + left / right + onto + Street',
      hintRu: 'Повелительное наклонение: turn.',
      russianTranslation: 'На светофоре поверните направо на Бейкер-стрит.',
    },
    {
      id: 'u37-ex-4',
      sentenceBefore: 'Walk past the supermarket and ',
      sentenceAfter: ' the second turning on your left.',
      promptWord: '(take: take / took / taking)',
      correctAnswer: 'take',
      acceptedAnswers: ['take'],
      ruleExplanationRu:
        'Идиоматическое выражение для поворота в нужный переулок: "take the second / third turning on your left / right".',
      ruleFormula: 'Take the [first/second] turning on your left/right',
      hintRu: 'Используйте глагол take в повелительной форме.',
      russianTranslation: 'Пройдите мимо супермаркета и сверните во второй поворот налево.',
    },
    {
      id: 'u37-ex-5',
      sentenceBefore: 'The pharmacy is directly ',
      sentenceAfter: ' the post office, just across the street.',
      promptWord: '(opposite: opposite / behind / between)',
      correctAnswer: 'opposite',
      acceptedAnswers: ['opposite'],
      ruleExplanationRu:
        'Предлог "opposite" означает "напротив" (лицом к лицу, через дорогу). Он используется без дополнительных предлогов to или of.',
      ruleFormula: 'opposite + Place',
      hintRu: 'Предлог "напротив": opposite.',
      russianTranslation: 'Аптека находится прямо напротив почты, прямо через дорогу.',
    },
    {
      id: 'u37-ex-6',
      sentenceBefore: 'Excuse me, is there a public convenience or a toilet ',
      sentenceAfter: ' here?',
      promptWord: '(near: near / nearly / by)',
      correctAnswer: 'near',
      acceptedAnswers: ['near', 'nearby'],
      ruleExplanationRu:
        'Устойчивое сочетание "near here" (поблизости, рядом отсюда) применяется для вопроса о наличии объекта в шаговой доступности.',
      ruleFormula: 'Is there a ... near here?',
      hintRu: 'Предлог "рядом": near (или nearby).',
      russianTranslation: 'Простите, здесь поблизости есть общественный туалет?',
    },
    {
      id: 'u37-ex-7',
      sentenceBefore: 'How long does it ',
      sentenceAfter: ' to walk from here to the riverside?',
      promptWord: '(take: take / takes / took)',
      correctAnswer: 'take',
      acceptedAnswers: ['take'],
      ruleExplanationRu:
        'Вопрос о времени в пути строится по формуле: "How long does it take to + V1...?". Вспомогательный глагол does требует начальной формы take.',
      ruleFormula: 'How long does it take to + V1',
      hintRu: 'Глагол "занимать по времени": take.',
      russianTranslation: 'Сколько времени занимает дойти отсюда пешком до набережной реки?',
    },
    {
      id: 'u37-ex-8',
      sentenceBefore: 'Which bus goes to Trafalgar Square? Do I need to ',
      sentenceAfter: ' bus 15 or bus 23?',
      promptWord: '(take: take / make / catch)',
      correctAnswer: 'take',
      acceptedAnswers: ['take', 'catch'],
      ruleExplanationRu:
        'С общественным транспортом употребляется глагол "take a bus / take the subway" (или "catch a bus").',
      ruleFormula: 'take / catch + bus number',
      hintRu: 'Глагол "сесть на автобус": take.',
      russianTranslation: 'Какой автобус идет до Трафальгарской площади? Мне нужно сесть на 15-й или 23-й?',
    },
    {
      id: 'u37-ex-9',
      sentenceBefore: 'You do not need to change trains; it is a ',
      sentenceAfter: ' line all the way to Heathrow.',
      promptWord: '(direct: direct / directly / direction)',
      correctAnswer: 'direct',
      acceptedAnswers: ['direct'],
      ruleExplanationRu:
        'Прямой маршрут без пересадок называется "a direct line" или "a direct train" (прямой рейс/линия).',
      ruleFormula: 'a direct line / route',
      hintRu: 'Прилагательное "прямой": direct.',
      russianTranslation: 'Вам не нужно делать пересадку; это прямая ветка прямо до Хитроу.',
    },
    {
      id: 'u37-ex-10',
      sentenceBefore: 'You should ',
      sentenceAfter: ' on the Piccadilly line and ride five stops.',
      promptWord: '(get: get / got / getting)',
      correctAnswer: 'get',
      acceptedAnswers: ['get'],
      ruleExplanationRu:
        'После модального глагола "should" идет V1. Фразовый глагол "get on" означает "садиться (в поезд, метро, автобус)".',
      ruleFormula: 'should + get on (train / subway / bus)',
      hintRu: 'Глагол посадки: get.',
      russianTranslation: 'Вам следует сесть на ветку Пикадилли и проехать пять остановок.',
    },
    {
      id: 'u37-ex-11',
      sentenceBefore: 'Make sure you ',
      sentenceAfter: ' off at Westminster station if you want to see Big Ben.',
      promptWord: '(get: get / turn / go)',
      correctAnswer: 'get',
      acceptedAnswers: ['get'],
      ruleExplanationRu:
        'Фразовый глагол для выхода из поезда или автобуса — "get off" (сойти, выйти). Сочетается с предлогом at для станции.',
      ruleFormula: 'get off + at [station]',
      hintRu: 'Фразовый глагол с off: get.',
      russianTranslation: 'Обязательно сойдите на станции Вестминстер, если хотите увидеть Биг-Бен.',
    },
    {
      id: 'u37-ex-12',
      sentenceBefore: 'Excuse me, where do I ',
      sentenceAfter: ' lines to reach the airport?',
      promptWord: '(change: change / move / cross)',
      correctAnswer: 'change',
      acceptedAnswers: ['change', 'transfer'],
      ruleExplanationRu:
        'Делать пересадку с одной линии метро на другую — "change lines" (в британском английском) или "transfer" (в американском).',
      ruleFormula: 'change lines / change trains',
      hintRu: 'Глагол "пересесть / менять": change.',
      russianTranslation: 'Простите, где мне сделать пересадку на другую ветку, чтобы добраться до аэропорта?',
    },
    {
      id: 'u37-ex-13',
      sentenceBefore: 'How many ',
      sentenceAfter: ' is it from King\'s Cross to Camden Town?',
      promptWord: '(stops: stops / stations / breaks)',
      correctAnswer: 'stops',
      acceptedAnswers: ['stops'],
      ruleExplanationRu:
        'Когда спрашивают количество остановок между пунктами, употребляется существительное во множественном числе "stops".',
      ruleFormula: 'How many stops is it?',
      hintRu: 'Существительное: stops.',
      russianTranslation: 'Сколько остановок от Кингс-Кросс до Кэмден-Тауна?',
    },
    {
      id: 'u37-ex-14',
      sentenceBefore: 'Two return tickets to Oxford, please. Which ',
      sentenceAfter: ' does the next train leave from?',
      promptWord: '(platform: platform / way / line)',
      correctAnswer: 'platform',
      acceptedAnswers: ['platform'],
      ruleExplanationRu:
        'На железнодорожном вокзале поезд отправляется от платформы / путей: "Which platform does the train leave from?".',
      ruleFormula: 'Which platform does ... leave from?',
      hintRu: 'Слово "платформа / путь": platform.',
      russianTranslation: 'Два билета туда и обратно до Оксфорда, пожалуйста. С какой платформы отправляется следующий поезд?',
    },
    {
      id: 'u37-ex-15',
      sentenceBefore: 'The coffee shop is located right ',
      sentenceAfter: ' the corner of Elm Street and 5th Avenue.',
      promptWord: '(on: on / in / at)',
      correctAnswer: 'on',
      acceptedAnswers: ['on', 'at'],
      ruleExplanationRu:
        'Для обозначения расположения на углу улиц используется предлог "on the corner of" (или "at the corner of").',
      ruleFormula: 'on / at the corner of [Street A] and [Street B]',
      hintRu: 'Предлог: on (или at).',
      russianTranslation: 'Кофейня расположена прямо на углу Элм-стрит и 5-й авеню.',
    },
    {
      id: 'u37-ex-16',
      sentenceBefore: 'Could you please drop me ',
      sentenceAfter: ' near the main entrance to the hotel?',
      promptWord: '(off: off / out / down)',
      correctAnswer: 'off',
      acceptedAnswers: ['off'],
      ruleExplanationRu:
        'Фразовый глагол "drop someone off" означает высадить пассажира из такси или машины у нужного места.',
      ruleFormula: 'drop me off + at / near',
      hintRu: 'Послелог фразового глагола: off.',
      russianTranslation: 'Не могли бы вы высадить меня около главного входа в отель?',
    },
    {
      id: 'u37-ex-17',
      sentenceBefore: 'Here is twenty pounds for the fare. You can ',
      sentenceAfter: ' the change.',
      promptWord: '(keep: keep / save / leave)',
      correctAnswer: 'keep',
      acceptedAnswers: ['keep'],
      ruleExplanationRu:
        'Общепринятая фраза при чаевых таксисту: "Keep the change" (Сдачи не нужно / Оставьте сдачу себе).',
      ruleFormula: 'Keep the change',
      hintRu: 'Глагол "оставить себе": keep.',
      russianTranslation: 'Вот двадцать фунтов за поездку. Сдачи не надо (оставьте себе).',
    },
    {
      id: 'u37-ex-18',
      sentenceBefore: 'Cross the street at the pedestrian ',
      sentenceAfter: ' and you will be right in front of the museum.',
      promptWord: '(crossing: crossing / road / path)',
      correctAnswer: 'crossing',
      acceptedAnswers: ['crossing'],
      ruleExplanationRu:
        'Пешеходный переход по-английски называется "pedestrian crossing" (или "zebra crossing" в Британии).',
      ruleFormula: 'pedestrian crossing',
      hintRu: 'Слово "переход": crossing.',
      russianTranslation: 'Перейдите улицу по пешеходному переходу, и вы окажетесь прямо перед музеем.',
    },
    {
      id: 'u37-ex-19',
      sentenceBefore: 'Excuse me, am I walking in the right ',
      sentenceAfter: ' for the national gallery?',
      promptWord: '(direction: direction / side / way)',
      correctAnswer: 'direction',
      acceptedAnswers: ['direction', 'way'],
      ruleExplanationRu:
        'Устойчивое выражение "in the right direction" (в правильном направлении) или "the right way" для уточнения пути.',
      ruleFormula: 'in the right direction / going the right way',
      hintRu: 'Слово "направление": direction (или way).',
      russianTranslation: 'Простите, я иду в правильном направлении к национальной галерее?',
    },
    {
      id: 'u37-ex-20',
      sentenceBefore: 'You have gone too far. You need to ',
      sentenceAfter: ' back towards the bridge.',
      promptWord: '(turn: turn / go / walk)',
      correctAnswer: 'turn',
      acceptedAnswers: ['turn', 'go'],
      ruleExplanationRu:
        'Фразовый глагол "turn back" (или "go back") означает развернуться и пойти в обратную сторону.',
      ruleFormula: 'turn back / go back',
      hintRu: 'Глагол "развернуться": turn.',
      russianTranslation: 'Вы ушли слишком далеко. Вам нужно повернуть назад в сторону моста.',
    },
  ],
};
