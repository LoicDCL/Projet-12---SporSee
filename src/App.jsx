import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import NavTop from './components/NavTop/NavTop'
import NavLeft from './components/NavLeft/NavLeft'
import Profile from './pages/Profile/Profile'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <NavTop />
        <NavLeft />
        <Routes>
          <Route path="/" element={<Navigate to="/user/12" replace />} />
          <Route path="/user/:id" element={<Profile />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
