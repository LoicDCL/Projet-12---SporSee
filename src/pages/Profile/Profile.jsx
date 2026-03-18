import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import {
  getUserData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from '../../services/api'

import KeyDataList from '../../components/Dashboard/KeyData/KeyDataList'
import ActivityChart from '../../components/Dashboard/ActivityChart/ActivityChart'
import SessionsChart from '../../components/Dashboard/SessionsChart/SessionsChart'
import PerformanceChart from '../../components/Dashboard/PerformanceChart/PerformanceChart'
import ScoreChart from '../../components/Dashboard/ScoreChart/ScoreChart'

import './Profile.css'

function Profile() {
  const { id } = useParams()
  const { useMock } = useAppContext()

  const parsedId = parseInt(id, 10)
  const isValidId = !isNaN(parsedId) && String(parsedId) === id

  const [userData, setUserData] = useState(null)
  const [activityData, setActivityData] = useState([])
  const [sessionsData, setSessionsData] = useState([])
  const [performanceData, setPerformanceData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!isValidId) {
      setLoading(false)
      return
    }

    const fetchAll = async () => {
      try {
        setLoading(true)
        setError(null)
        const [user, activity, sessions, performance] = await Promise.all([
          getUserData(parsedId, useMock),
          getUserActivity(parsedId, useMock),
          getUserAverageSessions(parsedId, useMock),
          getUserPerformance(parsedId, useMock),
        ])
        setUserData(user)
        setActivityData(activity)
        setSessionsData(sessions)
        setPerformanceData(performance)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchAll()
  }, [parsedId, isValidId, useMock])

  if (loading) return <div className="profile__loading">Chargement...</div>

  if (!isValidId || error) return (
    <div className="profile__error">
      <h2>Utilisateur introuvable</h2>
      <p>L'identifiant <strong>{id}</strong> ne correspond à aucun utilisateur.</p>
    </div>
  )

  if (!userData) return null

  const { firstName, score, keyData } = userData

  return (
    <main className="profile">
      <div className="profile__header">
        <h1 className="profile__greeting">
          Bonjour <span className="profile__name">{firstName}</span>
        </h1>
        <p className="profile__subtitle">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>

      <div className="profile__dashboard">
        <div className="profile__charts">
          <ActivityChart data={activityData} />

          <div className="profile__charts-row">
            <SessionsChart data={sessionsData} />
            <PerformanceChart data={performanceData} />
            <ScoreChart score={score} />
          </div>
        </div>

        <div className="profile__keydata">
          <KeyDataList keyData={keyData} />
        </div>
      </div>
    </main>
  )
}

export default Profile
