export const USER_MAIN_DATA = [
  {
    id: 12,
    userInfos: {
      firstName: 'User/12',
      lastName: 'Username',
      age: 40,
    },
    score: 0.5,
    keyData: {
      calorieCount: 100,
      proteinCount: 100,
      carbohydrateCount: 100,
      lipidCount: 100,
    },
  },
  {
    id: 18,
    userInfos: {
      firstName: 'User/18',
      lastName: 'Username',
      age: 30,
    },
    score: 0.5,
    keyData: {
      calorieCount: 50,
      proteinCount: 50,
      carbohydrateCount: 50,
      lipidCount: 50,
    },
  },
]

export const USER_ACTIVITY = [
  {
    userId: 12,
    sessions: [
      { day: '2026-01-01', kilogram: 100, calories: 150 },
      { day: '2026-01-02', kilogram: 99,  calories: 50  },
      { day: '2026-01-03', kilogram: 98,  calories: 150 },
      { day: '2026-01-04', kilogram: 97,  calories: 50  },
      { day: '2026-01-05', kilogram: 96,  calories: 150 },
      { day: '2026-01-06', kilogram: 95,  calories: 50  },
      { day: '2026-01-07', kilogram: 94,  calories: 150 },
      { day: '2026-01-08', kilogram: 93,  calories: 50  },
      { day: '2026-01-09', kilogram: 92,  calories: 150 },
      { day: '2026-01-10', kilogram: 91,  calories: 50  },
    ],
  },
  {
    userId: 18,
    sessions: [
      { day: '2026-01-01', kilogram: 80, calories: 150 },
      { day: '2026-01-02', kilogram: 79, calories: 50  },
      { day: '2026-01-03', kilogram: 79, calories: 150 },
      { day: '2026-01-04', kilogram: 79, calories: 50  },
      { day: '2026-01-05', kilogram: 78, calories: 150 },
      { day: '2026-01-06', kilogram: 78, calories: 50  },
      { day: '2026-01-07', kilogram: 78, calories: 150 },
      { day: '2026-01-08', kilogram: 77, calories: 50  },
      { day: '2026-01-09', kilogram: 77, calories: 150 },
      { day: '2026-01-10', kilogram: 77, calories: 50  },
    ],
  },
]

export const USER_AVERAGE_SESSIONS = [
  {
    userId: 12,
    sessions: [
      { day: 1, sessionLength: 80 },
      { day: 2, sessionLength: 30 },
      { day: 3, sessionLength: 50 },
      { day: 4, sessionLength: 40 },
      { day: 5, sessionLength: 30 },
      { day: 6, sessionLength: 80 },
      { day: 7, sessionLength: 50 },
    ],
  },
  {
    userId: 18,
    sessions: [
      { day: 1, sessionLength: 50 },
      { day: 2, sessionLength: 0  },
      { day: 3, sessionLength: 20 },
      { day: 4, sessionLength: 40 },
      { day: 5, sessionLength: 0  },
      { day: 6, sessionLength: 80 },
      { day: 7, sessionLength: 20 },
    ],
  },
]

export const USER_PERFORMANCE = [
  {
    userId: 12,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      { value: 4, kind: 1 },
      { value: 3, kind: 2 },
      { value: 2, kind: 3 },
      { value: 1, kind: 4 },
      { value: 4, kind: 5 },
      { value: 3, kind: 6 },
    ],
  },
  {
    userId: 18,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      { value: 4, kind: 5 },
      { value: 3, kind: 2 },
      { value: 2, kind: 3 },
      { value: 1, kind: 1 },
      { value: 4, kind: 1 },
      { value: 3, kind: 3 },
    ],
  },
]
