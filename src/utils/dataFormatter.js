export function formatUserData(data) {
  return {
    id: data.id,
    firstName: data.userInfos.firstName,
    lastName: data.userInfos.lastName,
    age: data.userInfos.age,
    score: data.score ?? data.todayScore ?? 0,
    keyData: {
      calories: data.keyData.calorieCount,
      proteins: data.keyData.proteinCount,
      carbohydrates: data.keyData.carbohydrateCount,
      lipids: data.keyData.lipidCount,
    },
  }
}

export function formatActivityData(data) {
  return data.sessions.map((session, index) => ({
    day: index + 1,
    kilogram: session.kilogram,
    calories: session.calories,
  }))
}

export function formatAverageSessionsData(data) {
  const dayLabels = ['L', 'M', 'M ', 'J', 'V', 'S', 'D']
  return data.sessions.map((session) => ({
    day: dayLabels[session.day - 1],
    sessionLength: session.sessionLength,
  }))
}

export function formatPerformanceData(data) {
  const kindTranslations = {
    cardio: 'Cardio',
    energy: 'Energie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité',
  }

  return data.data.map((item) => ({
    value: item.value,
    kind: kindTranslations[data.kind[item.kind]] || data.kind[item.kind],
  }))
}
