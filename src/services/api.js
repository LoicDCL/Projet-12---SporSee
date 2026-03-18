import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data/mockData'

import {
  formatUserData,
  formatActivityData,
  formatAverageSessionsData,
  formatPerformanceData,
} from '../utils/dataFormatter'

const BASE_URL = 'http://localhost:3000'

const getMock = (arr, userId) => {
  const entry = arr.find((item) => item.userId === userId || item.id === userId)
  if (!entry) throw new Error(`No mock data found for user ${userId}`)
  return entry
}

export async function getUserData(userId, useMock = true) {
  if (useMock) {
    return formatUserData(getMock(USER_MAIN_DATA, userId))
  }
  const res = await fetch(`${BASE_URL}/user/${userId}`)
  if (!res.ok) throw new Error(`HTTP error ${res.status}`)
  const { data } = await res.json()
  return formatUserData(data)
}

export async function getUserActivity(userId, useMock = true) {
  if (useMock) {
    return formatActivityData(getMock(USER_ACTIVITY, userId))
  }
  const res = await fetch(`${BASE_URL}/user/${userId}/activity`)
  if (!res.ok) throw new Error(`HTTP error ${res.status}`)
  const { data } = await res.json()
  return formatActivityData(data)
}

export async function getUserAverageSessions(userId, useMock = true) {
  if (useMock) {
    return formatAverageSessionsData(getMock(USER_AVERAGE_SESSIONS, userId))
  }
  const res = await fetch(`${BASE_URL}/user/${userId}/average-sessions`)
  if (!res.ok) throw new Error(`HTTP error ${res.status}`)
  const { data } = await res.json()
  return formatAverageSessionsData(data)
}

export async function getUserPerformance(userId, useMock = true) {
  if (useMock) {
    return formatPerformanceData(getMock(USER_PERFORMANCE, userId))
  }
  const res = await fetch(`${BASE_URL}/user/${userId}/performance`)
  if (!res.ok) throw new Error(`HTTP error ${res.status}`)
  const { data } = await res.json()
  return formatPerformanceData(data)
}
