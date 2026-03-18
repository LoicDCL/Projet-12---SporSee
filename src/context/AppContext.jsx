import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [userId, setUserId] = useState(12)
  const [useMock, setUseMock] = useState(true)

  const toggleUser = () => setUserId((prev) => (prev === 12 ? 18 : 12))
  const toggleMock = () => setUseMock((prev) => !prev)

  return (
    <AppContext.Provider value={{ userId, useMock, toggleUser, toggleMock }}>
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function useAppContext() {
  return useContext(AppContext)
}
