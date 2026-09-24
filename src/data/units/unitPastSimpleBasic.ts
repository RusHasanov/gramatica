import { CambridgeUnit } from '../cambridgeUnits';

export const unitPastSimpleBasic: CambridgeUnit = {
  id: 'unit-27-past-simple-basic',
  unitNumber: 27,
  level: 'A1-A2',
  book: 'Murphy Essential (Red)',
  category: 'Tenses',
  titleEn: 'Past Simple: Regular & Irregular Verbs, did / didn’t',
  titleRu: 'Прошедшее простое время (Past Simple): правильные и неправильные глаголы, did и didn’t',
  ruleSummaryRu:
    'Past Simple используется для действий, которые произошли и полностью завершились в прошлом в определенный момент (yesterday, last week, two years ago, in 2021).\n\n' +
    '1. Правильные глаголы (Regular verbs):\n' +
    '   - К основе глагола добавляется окончание -ed: work -> worked, clean -> cleaned, watch -> watched, play -> played.\n' +
    '   - Если слово оканчивается на -e, добавляется только -d: live -> lived, arrive -> arrived.\n' +
    '   - Согласный + y меняется на -ied: study -> studied, try -> tried (но: play -> played).\n' +
    '   - Краткий гласный + согласный удваивает последнюю букву: stop -> stopped, plan -> planned.\n\n' +
    '2. Самые важные неправильные глаголы (Irregular verbs — вторая форма):\n' +
    '   - go -> went (пошел / поехал)\n' +
    '   - have -> had (имел / было)\n' +
    '   - make -> made (сделал / приготовил)\n' +
    '   - take -> took (взял / заняло по времени)\n' +
    '   - see -> saw (увидел)\n' +
    '   - come -> came (пришел / приехал)\n' +
    '   - give -> gave (дал / подарил)\n' +
    '   - get -> got (получил / добрался)\n' +
    '   - write -> wrote (написал)\n' +
    '   - meet -> met (встретил / познакомился)\n' +
    '   - buy -> bought (купил)\n' +
    '   - think -> thought (подумал)\n\n' +
    '3. Отрицание (didn’t + начальная форма глагола БЕЗ окончания -ed):\n' +
    '   - В отрицании появляется вспомогательный глагол didn\'t (did not), а смысловой глагол возвращается в 1-ю форму: I didn\'t see (НЕ: didn\'t saw), he didn\'t go (НЕ: didn\'t went).\n\n' +
    '4. Вопросы (Did + подлежащее + начальная форма глагола):\n' +
    '   - Did you have a good trip? — Yes, I did. / No, I didn\'t.\n' +
    '   - What did you buy yesterday? Where did she meet her husband?',
  keyFormula:
    'Утверждение: V-ed (правильные) / V2 (неправильные) | Отрицание: didn\'t + V1 (начальная форма!) | Вопрос: Did + подлежащее + V1?',
  markerWords: [
    'yesterday (вчера)',
    'yesterday morning (вчера утром)',
    'last night (прошлой ночью)',
    'last week / last year (на прошлой неделе / в прошлом году)',
    'three days ago (три дня назад)',
    'in 2022 (в 2022 году)',
    'when I was a child (когда я был ребенком)',
  ],
  pitfallsRu:
    '1. Самая частая ошибка: оставлять вторую форму после didn\'t или did. "I didn\'t went" — грубая ошибка! Правильно: "I didn\'t go". "Did you saw?" — ошибка; правильно: "Did you see?".\n' +
    '2. Форма прошедшего времени одинакова для всех лиц: I went, he went, we went, they went (никаких окончаний -s в прошедшем времени нет!).\n' +
    '3. Не путайте форму gave (дал) и give (дает), bought (купил) и buy (покупает).',
  exercises: [
    {
      id: 'u27-ex-1',
      sentenceBefore: 'Last Saturday, we ',
      sentenceAfter: ' to the seaside by train and spent the whole day on the beach.',
      promptWord: '(go)',
      correctAnswer: 'went',
      acceptedAnswers: ['went'],
      ruleExplanationRu:
        'Неправильный глагол "go" в прошедшем времени Past Simple имеет форму "went" (go -> went).',
      ruleFormula: 'go -> went (V2)',
      hintRu: 'Вторая форма неправильного глагола go (поехали): went.',
      russianTranslation: 'В прошлую субботу мы поехали на море на поезде и провели весь день на пляже.',
    },
    {
      id: 'u27-ex-2',
      sentenceBefore: 'I was very tired yesterday evening, so I ',
      sentenceAfter: ' an early dinner and went to bed at nine.',
      promptWord: '(have)',
      correctAnswer: 'had',
      acceptedAnswers: ['had'],
      ruleExplanationRu:
        'Неправильный глагол "have" в Past Simple имеет форму "had": had dinner (поужинал).',
      ruleFormula: 'have -> had',
      hintRu: 'Прошедшая форма глагола have (поужинал): had.',
      russianTranslation: 'Вчера вечером я очень устал, поэтому рано поужинал и лег спать в девять часов.',
    },
    {
      id: 'u27-ex-3',
      sentenceBefore: 'My grandmother ',
      sentenceAfter: ' a delicious strawberry cake for my birthday party.',
      promptWord: '(make)',
      correctAnswer: 'made',
      acceptedAnswers: ['made'],
      ruleExplanationRu:
        'Неправильный глагол "make" (делать, готовить) в Past Simple меняет букву "k" на "d": make -> made.',
      ruleFormula: 'make -> made',
      hintRu: 'Вторая форма глагола make: made (приготовила / испекла).',
      russianTranslation: 'Моя бабушка испекла восхитительный клубничный торт для моего праздника дня рождения.',
    },
    {
      id: 'u27-ex-4',
      sentenceBefore: 'We missed the morning bus, so we ',
      sentenceAfter: ' a taxi to get to the airport on time.',
      promptWord: '(take)',
      correctAnswer: 'took',
      acceptedAnswers: ['took'],
      ruleExplanationRu:
        'Неправильный глагол "take" в Past Simple имеет форму "took": took a taxi (взяли такси).',
      ruleFormula: 'take -> took',
      hintRu: 'Вторая форма глагола take: took.',
      russianTranslation: 'Мы опоздали на утренний автобус, поэтому взяли такси, чтобы добраться в аэропорт вовремя.',
    },
    {
      id: 'u27-ex-5',
      sentenceBefore: 'I walked through the park this morning and ',
      sentenceAfter: ' our former English teacher walking his golden retriever.',
      promptWord: '(see)',
      correctAnswer: 'saw',
      acceptedAnswers: ['saw'],
      ruleExplanationRu:
        'Неправильный глагол "see" (видеть) в Past Simple меняется на "saw": see -> saw.',
      ruleFormula: 'see -> saw',
      hintRu: 'Прошедшая форма глагола see (увидел): saw.',
      russianTranslation: 'Сегодня утром я шел по парку и увидел нашего бывшего учителя английского, выгуливающего золотистого ретривера.',
    },
    {
      id: 'u27-ex-6',
      sentenceBefore: 'Tom was stuck in traffic, so he ',
      sentenceAfter: ' to the meeting twenty minutes late.',
      promptWord: '(come)',
      correctAnswer: 'came',
      acceptedAnswers: ['came'],
      ruleExplanationRu:
        'Неправильный глагол "come" в прошедшем времени меняет букву "o" на "a": come -> came.',
      ruleFormula: 'come -> came',
      hintRu: 'Вторая форма глагола come (пришел / приехал): came.',
      russianTranslation: 'Том застрял в пробке, поэтому пришел на собрание с опозданием на двадцать минут.',
    },
    {
      id: 'u27-ex-7',
      sentenceBefore: 'For my graduation, my parents ',
      sentenceAfter: ' me a beautiful leather watch.',
      promptWord: '(give)',
      correctAnswer: 'gave',
      acceptedAnswers: ['gave'],
      ruleExplanationRu:
        'Неправильный глагол "give" (давать, дарить) в Past Simple имеет форму "gave": give -> gave.',
      ruleFormula: 'give -> gave',
      hintRu: 'Вторая форма глагола give (подарили): gave.',
      russianTranslation: 'На мой выпускной родители подарили мне красивые кожаные часы.',
    },
    {
      id: 'u27-ex-8',
      sentenceBefore: 'I applied for the marketing position, and yesterday I ',
      sentenceAfter: ' a phone call offering me the job.',
      promptWord: '(get)',
      correctAnswer: 'got',
      acceptedAnswers: ['got'],
      ruleExplanationRu:
        'Неправильный глагол "get" (получать) в Past Simple меняет гласную на "o": get -> got.',
      ruleFormula: 'get -> got',
      hintRu: 'Вторая форма глагола get (получил): got.',
      russianTranslation: 'Я подал заявку на должность маркетолога, и вчера мне позвонили и предложили работу.',
    },
    {
      id: 'u27-ex-9',
      sentenceBefore: 'While staying in Venice, Emily ',
      sentenceAfter: ' postcards to all her close friends and relatives.',
      promptWord: '(write)',
      correctAnswer: 'wrote',
      acceptedAnswers: ['wrote'],
      ruleExplanationRu:
        'Неправильный глагол "write" (писать) в прошедшем времени имеет форму "wrote": write -> wrote.',
      ruleFormula: 'write -> wrote',
      hintRu: 'Вторая форма глагола write (написала): wrote.',
      russianTranslation: 'Во время пребывания в Венеции Эмили написала открытки всем своим близким друзьям и родственникам.',
    },
    {
      id: 'u27-ex-10',
      sentenceBefore: 'We arrived at the cafe at noon and ',
      sentenceAfter: ' our colleagues for lunch.',
      promptWord: '(meet)',
      correctAnswer: 'met',
      acceptedAnswers: ['met'],
      ruleExplanationRu:
        'Неправильный глагол "meet" (встречать) в Past Simple теряет одну букву "e": meet -> met.',
      ruleFormula: 'meet -> met',
      hintRu: 'Вторая форма глагола meet (встретили): met.',
      russianTranslation: 'Мы пришли в кафе в полдень и встретили наших коллег на обед.',
    },
    {
      id: 'u27-ex-11',
      sentenceBefore: 'My brother needed a new laptop for university, so he ',
      sentenceAfter: ' one on sale yesterday.',
      promptWord: '(buy)',
      correctAnswer: 'bought',
      acceptedAnswers: ['bought'],
      ruleExplanationRu:
        'Неправильный глагол "buy" (покупать) в прошедшем времени имеет форму "bought": buy -> bought.',
      ruleFormula: 'buy -> bought',
      hintRu: 'Вторая форма глагола buy (купил): bought.',
      russianTranslation: 'Моему брату понадобился новый ноутбук для университета, поэтому вчера он купил его на распродаже.',
    },
    {
      id: 'u27-ex-12',
      sentenceBefore: 'At first, the exam questions looked difficult, but I ',
      sentenceAfter: ' carefully and solved all of them.',
      promptWord: '(think)',
      correctAnswer: 'thought',
      acceptedAnswers: ['thought'],
      ruleExplanationRu:
        'Неправильный глагол "think" (думать) в Past Simple имеет форму "thought": think -> thought.',
      ruleFormula: 'think -> thought',
      hintRu: 'Вторая форма глагола think (подумал): thought.',
      russianTranslation: 'Сначала вопросы экзамена казались сложными, но я внимательно подумал и решил их все.',
    },
    {
      id: 'u27-ex-13',
      sentenceBefore: 'I was not feeling well on Sunday, so I ',
      sentenceAfter: ' go to the cinema with my friends.',
      promptWord: '(not / go)',
      correctAnswer: "didn't go",
      acceptedAnswers: ["didn't go", 'did not go'],
      ruleExplanationRu:
        'Отрицание в Past Simple образуется при помощи "didn\'t" + начальная форма глагола: didn\'t go (НЕ: didn\'t went).',
      ruleFormula: 'didn\'t + V1 (базовая форма)',
      hintRu: 'Отрицание в прошедшем времени: вспомогательный didn\'t + базовая форма go.',
      russianTranslation: 'Я плохо себя чувствовал в воскресенье, поэтому не пошел в кино с друзьями.',
    },
    {
      id: 'u27-ex-14',
      sentenceBefore: 'Sarah was very busy yesterday; she ',
      sentenceAfter: ' have time for lunch.',
      promptWord: '(not / have)',
      correctAnswer: "didn't have",
      acceptedAnswers: ["didn't have", 'did not have'],
      ruleExplanationRu:
        'Отрицание с глаголом have в Past Simple строится через "didn\'t have" (НЕ: didn\'t had).',
      ruleFormula: 'didn\'t + have',
      hintRu: 'Отрицание в прошедшем времени: didn\'t have (у нее не было времени).',
      russianTranslation: 'Сара была очень занята вчера; у нее не было времени пообедать.',
    },
    {
      id: 'u27-ex-15',
      sentenceBefore: '',
      sentenceAfter: ' you buy that warm winter jacket at the shopping centre yesterday?',
      promptWord: '(did / you / buy)',
      correctAnswer: 'Did you buy',
      acceptedAnswers: ['Did you buy', 'did you buy'],
      ruleExplanationRu:
        'Вопрос в Past Simple начинается со вспомогательного глагола "Did" + подлежащее + начальная форма глагола: Did you buy...?',
      ruleFormula: 'Did + subject + V1...?',
      hintRu: 'Вопрос в прошедшем времени: Did you buy...?',
      russianTranslation: 'Ты купил ту теплую зимнюю куртку в торговом центре вчера?',
    },
    {
      id: 'u27-ex-16',
      sentenceBefore: 'What time ',
      sentenceAfter: ' back home from your office yesterday evening?',
      promptWord: '(you / come)',
      correctAnswer: 'did you come',
      acceptedAnswers: ['did you come'],
      ruleExplanationRu:
        'В специальном вопросе со словом "What time" порядок слов: What time + did + you + come (начальная форма)?',
      ruleFormula: 'What time + did + subject + V1...?',
      hintRu: 'Вопрос в прошедшем времени: did you come.',
      russianTranslation: 'В какое время ты вернулся домой из офиса вчера вечером?',
    },
    {
      id: 'u27-ex-17',
      sentenceBefore: 'Where ',
      sentenceAfter: ' your best friend for the first time?',
      promptWord: '(you / meet)',
      correctAnswer: 'did you meet',
      acceptedAnswers: ['did you meet'],
      ruleExplanationRu:
        'Специальный вопрос в прошедшем времени со словом "Where": Where + did + you + meet (начальная форма)?',
      ruleFormula: 'Where + did + subject + V1...?',
      hintRu: 'Где ты познакомился / встретил: did you meet.',
      russianTranslation: 'Где ты впервые встретил своего лучшего друга?',
    },
    {
      id: 'u27-ex-18',
      sentenceBefore: 'Yesterday afternoon, we ',
      sentenceAfter: ' in the garden for three hours and cleaned all the pathways.',
      promptWord: '(work)',
      correctAnswer: 'worked',
      acceptedAnswers: ['worked'],
      ruleExplanationRu:
        'Правильный глагол "work" образует форму Past Simple добавлением окончания -ed: work -> worked.',
      ruleFormula: 'regular verb + -ed (worked)',
      hintRu: 'Правильный глагол work в прошедшем времени принимает окончание -ed: worked.',
      russianTranslation: 'Вчера днем мы работали в саду три часа и почистили все дорожки.',
    },
    {
      id: 'u27-ex-19',
      sentenceBefore: 'I looked out of the window, but I ',
      sentenceAfter: ' see anyone standing near the front gate.',
      promptWord: '(not / see)',
      correctAnswer: "didn't see",
      acceptedAnswers: ["didn't see", 'did not see'],
      ruleExplanationRu:
        'Отрицание в прошедшем времени: "didn\'t" + базовая форма "see" (didn\'t see).',
      ruleFormula: 'didn\'t + see (НЕ didn\'t saw!)',
      hintRu: 'Отрицание в прошедшем: didn\'t see (не увидел).',
      russianTranslation: 'Я выглянул из окна, но не увидел никого у входных ворот.',
    },
    {
      id: 'u27-ex-20',
      sentenceBefore: 'The children ',
      sentenceAfter: ' football in the school playground until it started to rain.',
      promptWord: '(play)',
      correctAnswer: 'played',
      acceptedAnswers: ['played'],
      ruleExplanationRu:
        'Правильный глагол "play" в Past Simple принимает окончание -ed: play -> played.',
      ruleFormula: 'play + -ed = played',
      hintRu: 'Правильный глагол play в прошедшем времени: played.',
      russianTranslation: 'Дети играли в футбол на школьной площадке, пока не пошел дождь.',
    },
    {
      id: 'u27-ex-21',
      sentenceBefore: '',
      sentenceAfter: ' she take any photographs during her walking tour of the old castle?',
      promptWord: '(did)',
      correctAnswer: 'Did',
      acceptedAnswers: ['Did', 'did'],
      ruleExplanationRu:
        'Общий вопрос в Past Simple начинается со вспомогательного глагола "Did": Did she take...?',
      ruleFormula: 'Did + she + V1...?',
      hintRu: 'Вопрос в прошедшем времени начинается с Did.',
      russianTranslation: 'Она сделала какие-нибудь фотографии во время пешеходной экскурсии по старому замку?',
    },
    {
      id: 'u27-ex-22',
      sentenceBefore: 'We were in a hurry, so we ',
      sentenceAfter: ' wait for the rain to stop.',
      promptWord: '(not / wait)',
      correctAnswer: "didn't wait",
      acceptedAnswers: ["didn't wait", 'did not wait'],
      ruleExplanationRu:
        'Отрицание в Past Simple для правильного глагола wait: "didn\'t wait" (глагол остается в 1-й форме).',
      ruleFormula: 'didn\'t + wait',
      hintRu: 'Отрицание в прошедшем времени: didn\'t wait (не стали ждать).',
      russianTranslation: 'Мы спешили, поэтому не стали ждать окончания дождя.',
    },
  ],
};
