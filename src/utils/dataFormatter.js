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
  const sessions = data.sessions.map((session) => ({
    day: dayLabels[session.day - 1],
    sessionLength: session.sessionLength,
  }))

  return [
  { day: '', sessionLength: sessions[0].sessionLength },
  { day: '', sessionLength: sessions[0].sessionLength },
  ...sessions,
  { day: '', sessionLength: sessions[sessions.length - 1].sessionLength },
  ]
}

export function formatPerformanceData(data) {
  const kindTranslations = {
    intensity:  'Intensité',
    speed:      'Vitesse',
    strength:   'Force',
    endurance:  'Endurance',
    energy:     'Energie',
    cardio:     'Cardio',
  }

  const order = ['intensity', 'speed', 'strength', 'endurance', 'energy', 'cardio']

  const formatted = data.data.map((item) => ({
    value: item.value,
    kind:  kindTranslations[data.kind[item.kind]],
  }))

  return order.map((key) =>
    formatted.find((item) => item.kind === kindTranslations[key])
  )
}
