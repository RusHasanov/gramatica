import { ReadingSummary, ReadingItem } from '../../types/reading';

export const READINGS_INDEX: ReadingSummary[] = [
  {
    id: 'a-day-at-the-university',
    title: 'A Day at the University',
    author: 'Cambridge Drill Editorial',
    source: 'Original graded text',
    license: 'Own content',
    level: 'A1-A2',
    topic: 'Учёба',
    readingMinutes: 3,
    wordCount: 265,
    descriptionRu: 'Распорядок дня студента: лекции, библиотека, работа над заданиями и подготовка к экзаменам.',
  },
  {
    id: 'my-family',
    title: 'My Family',
    author: 'Cambridge Drill Editorial',
    source: 'Original graded text',
    license: 'Own content',
    level: 'A1-A2',
    topic: 'Семья',
    readingMinutes: 3,
    wordCount: 280,
    descriptionRu: 'Рассказ о дружной семье из Бристоля: профессии родителей, увлечения брата и совместные выходные.',
  },
  {
    id: 'shopping-for-food',
    title: 'Shopping for Food',
    author: 'Cambridge Drill Editorial',
    source: 'Original graded text',
    license: 'Own content',
    level: 'A1-A2',
    topic: 'Покупки',
    readingMinutes: 3,
    wordCount: 295,
    descriptionRu: 'Еженедельный поход за продуктами: список покупок, выбор свежих овощей и оплата на кассе.',
  },
  {
    id: 'at-the-doctors',
    title: 'At the Doctor’s',
    author: 'Cambridge Drill Editorial',
    source: 'Original graded text',
    license: 'Own content',
    level: 'A1-A2',
    topic: 'Здоровье',
    readingMinutes: 3,
    wordCount: 290,
    descriptionRu: 'Визит к участковому врачу: запись на приём, симптомы простуды, осмотр и получение рецепта.',
  },
  {
    id: 'at-the-conference',
    title: 'At the Conference',
    author: 'Cambridge Drill Editorial',
    source: 'Original graded text',
    license: 'Own content',
    level: 'B1-B2',
    topic: 'Работа',
    readingMinutes: 3,
    wordCount: 285,
    descriptionRu: 'Участие в международной конференции: регистрация, пленарный доклад, вопросы из зала и нетворкинг.',
  },
  {
    id: 'asking-for-directions-in-london',
    title: 'Asking for Directions in London',
    author: 'Cambridge Drill Editorial',
    source: 'Original graded text',
    license: 'Own content',
    level: 'B1-B2',
    topic: 'Путешествия',
    readingMinutes: 4,
    wordCount: 310,
    descriptionRu: 'Как ориентироваться в Лондоне: общение с прохожими, поездка на метро и поиск Британского музея.',
  },
  {
    id: 'a-trip-to-the-airport',
    title: 'A Trip to the Airport',
    author: 'Cambridge Drill Editorial',
    source: 'Original graded text',
    license: 'Own content',
    level: 'B1-B2',
    topic: 'Путешествия',
    readingMinutes: 4,
    wordCount: 345,
    descriptionRu: 'Опыт международного перелёта через Хитроу: прохождение автоматической сдачи багажа, контроль безопасности и посадка на трансатлантический рейс.',
  },
  {
    id: 'my-first-international-conference',
    title: 'My First International Conference',
    author: 'Cambridge Drill Editorial',
    source: 'Original graded text',
    license: 'Own content',
    level: 'B1-B2',
    topic: 'Работа',
    readingMinutes: 4,
    wordCount: 355,
    descriptionRu: 'Выступление с научным докладом перед зарубежными коллегами: презентация слайдов, ответы на сложные вопросы и вечерний обмен контактами.',
  },
  {
    id: 'working-in-a-laboratory',
    title: 'Working in a Laboratory',
    author: 'Cambridge Drill Editorial',
    source: 'Original graded text',
    license: 'Own content',
    level: 'B1-B2',
    topic: 'Наука',
    readingMinutes: 4,
    wordCount: 360,
    descriptionRu: 'Работа в биохимической лаборатории: техника безопасности, центрифугирование и спектрометрия.',
  },
  {
    id: 'the-red-headed-league',
    title: 'The Red-Headed League',
    author: 'Arthur Conan Doyle',
    source: 'Adapted from The Red-Headed League, Project Gutenberg',
    license: 'Public domain',
    level: 'B1-B2',
    topic: 'Литература',
    readingMinutes: 5,
    wordCount: 460,
    descriptionRu: 'Знаменитое расследование Шерлока Холмса: странный союз рыжеволосых мужчин и дерзкая попытка ограбления лондонского банка.',
  },
  {
    id: 'the-gift-of-the-magi',
    title: 'The Gift of the Magi',
    author: 'O. Henry',
    source: 'Adapted from The Gift of the Magi, Project Gutenberg',
    license: 'Public domain',
    level: 'B1-B2',
    topic: 'Литература',
    readingMinutes: 5,
    wordCount: 450,
    descriptionRu: 'Трогательная рождественская новелла О. Генри о бескорыстной любви, жертвенности и истинной ценности подарков.',
  },
  {
    id: 'the-happy-prince',
    title: 'The Happy Prince',
    author: 'Oscar Wilde',
    source: 'Adapted from The Happy Prince, Project Gutenberg',
    license: 'Public domain',
    level: 'B1-B2',
    topic: 'Литература',
    readingMinutes: 5,
    wordCount: 470,
    descriptionRu: 'Поэтичная притча Оскара Уайльда о сострадании золотой статуи Принца и самоотверженной ласточке, спасавших бедняков города.',
  },
  {
    id: 'three-men-in-a-boat-packing',
    title: 'Packing for the River (Three Men in a Boat)',
    author: 'Jerome K. Jerome',
    source: 'Adapted from Three Men in a Boat, Project Gutenberg',
    license: 'Public domain',
    level: 'B1-B2',
    topic: 'Юмор и классика',
    readingMinutes: 5,
    wordCount: 460,
    descriptionRu: 'Комичная сцена сборов в лодочный поход по Темзе: гордость рассказчика своим умением паковать чемоданы и тотальный хаос друзей и фокстерьера Монморанси.',
  },
  {
    id: 'five-fables-of-aesop',
    title: 'Five Classic Fables',
    author: 'Aesop',
    source: 'Adapted from Aesop’s Fables, Project Gutenberg',
    license: 'Public domain',
    level: 'B1-B2',
    topic: 'Басни и мудрость',
    readingMinutes: 5,
    wordCount: 465,
    descriptionRu: 'Пять бессмертных басен Эзопа: Лисица и виноград, Ворона и кувшин, Северный ветер и Солнце, Черепаха и Заяц, Пастушок и волки.',
  },
  {
    id: 'academic-abstract-eeg',
    title: 'Research Abstract: Cortical Oscillations in Working Memory',
    author: 'Cambridge Drill Editorial',
    source: 'Original academic-style text',
    license: 'Own content',
    level: 'C1-C2',
    topic: 'Нейронаука',
    readingMinutes: 4,
    wordCount: 380,
    descriptionRu: 'Абстракт научного исследования: модуляция тета- и альфа-ритмов ЭЭГ при удержании информации в рабочей памяти и фазово-амплитудное сопряжение.',
  },
  {
    id: 'academic-introduction-eeg',
    title: 'Introduction: Neural Oscillations and Working Memory (Literature Review & Hedging)',
    author: 'Cambridge Drill Editorial',
    source: 'Original academic-style text',
    license: 'Own content',
    level: 'C1-C2',
    topic: 'Нейронаука',
    readingMinutes: 4,
    wordCount: 420,
    descriptionRu: 'Академическое введение и обзор литературы: осторожные научные утверждения (hedging), анализ существующих моделей и формулирование гипотез исследования.',
  },
  {
    id: 'academic-methods-eeg',
    title: 'Methodology: High-Density EEG Acquisition and Signal Processing (Passive Voice & Participles)',
    author: 'Cambridge Drill Editorial',
    source: 'Original academic-style text',
    license: 'Own content',
    level: 'C1-C2',
    topic: 'Нейронаука',
    readingMinutes: 4,
    wordCount: 430,
    descriptionRu: 'Методологический раздел научной статьи: насыщенный пассивный залог, деепричастные и причастные обороты, строгий протокол регистрации и предварительной обработки ЭЭГ.',
  },
  {
    id: 'academic-results-discussion-eeg',
    title: 'Results & Discussion: Oscillatory Dynamics, Statistical Comparisons and Limitations',
    author: 'Cambridge Drill Editorial',
    source: 'Original academic-style text',
    license: 'Own content',
    level: 'C1-C2',
    topic: 'Нейронаука',
    readingMinutes: 5,
    wordCount: 440,
    descriptionRu: 'Раздел результатов и обсуждения: сравнительный статистический анализ спектральных данных, сопоставление с предшествующими теориями и признание ограничений работы.',
  },
  {
    id: 'academic-response-to-reviewers',
    title: 'Response to Reviewers: Methodological Revisions and Peer Review Rebuttal',
    author: 'Cambridge Drill Editorial',
    source: 'Original academic-style text',
    license: 'Own content',
    level: 'C1-C2',
    topic: 'Академическое письмо',
    readingMinutes: 5,
    wordCount: 460,
    descriptionRu: 'Официальное письмо-ответ рецензентам научного журнала: вежливая научная полемика, разбор критических замечаний, внесение правок в рукопись и контрольные анализы.',
  },
];

/**
 * Dynamically import full reading content only upon user selection
 * so that the initial bundle remains lightweight.
 */
export async function loadReadingById(id: string): Promise<ReadingItem> {
  switch (id) {
    case 'a-day-at-the-university': {
      const module = await import('./aDayAtTheUniversity');
      return module.default;
    }
    case 'my-family': {
      const module = await import('./myFamily');
      return module.default;
    }
    case 'shopping-for-food': {
      const module = await import('./shoppingForFood');
      return module.default;
    }
    case 'at-the-doctors': {
      const module = await import('./atTheDoctors');
      return module.default;
    }
    case 'at-the-conference': {
      const module = await import('./atTheConference');
      return module.default;
    }
    case 'asking-for-directions-in-london': {
      const module = await import('./askingForDirectionsInLondon');
      return module.default;
    }
    case 'a-trip-to-the-airport': {
      const module = await import('./aTripToTheAirport');
      return module.default;
    }
    case 'my-first-international-conference': {
      const module = await import('./myFirstInternationalConference');
      return module.default;
    }
    case 'working-in-a-laboratory': {
      const module = await import('./workingInALaboratory');
      return module.default;
    }
    case 'the-red-headed-league': {
      const module = await import('./theRedHeadedLeague');
      return module.default;
    }
    case 'the-gift-of-the-magi': {
      const module = await import('./theGiftOfTheMagi');
      return module.default;
    }
    case 'the-happy-prince': {
      const module = await import('./theHappyPrince');
      return module.default;
    }
    case 'three-men-in-a-boat-packing': {
      const module = await import('./threeMenInABoatPacking');
      return module.default;
    }
    case 'five-fables-of-aesop': {
      const module = await import('./fiveFablesOfAesop');
      return module.default;
    }
    case 'academic-abstract-eeg': {
      const module = await import('./academicAbstractEeg');
      return module.default;
    }
    case 'academic-introduction-eeg': {
      const module = await import('./academicIntroductionEeg');
      return module.default;
    }
    case 'academic-methods-eeg': {
      const module = await import('./academicMethodsEeg');
      return module.default;
    }
    case 'academic-results-discussion-eeg': {
      const module = await import('./academicResultsDiscussionEeg');
      return module.default;
    }
    case 'academic-response-to-reviewers': {
      const module = await import('./academicResponseToReviewers');
      return module.default;
    }
    default:
      throw new Error(`Reading not found with id: ${id}`);
  }
}
