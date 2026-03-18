import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

import NavItem from './NavItem/NavItem'

import iconYoga        from '../../assets/icons/icony.png'
import iconNatation    from '../../assets/icons/iconn.png'
import iconVelo        from '../../assets/icons/iconb.png'
import iconMusculation from '../../assets/icons/iconm.png'

import './NavLeft.css'

function NavLeft() {
  const { userId, useMock, toggleUser, toggleMock } = useAppContext()
  const navigate = useNavigate()

  const handleToggleUser = () => {
    toggleUser()
    const nextId = userId === 12 ? 18 : 12
    navigate(`/user/${nextId}`)
  }

  return (
    <aside className="nav-left">
      <div className="nav-left__dev-controls">
        <button
          className="nav-left__dev-btn"
          onClick={handleToggleUser}
          title="Changer d'utilisateur"
        >
          {userId === 12 ? '18' : '12'}
        </button>
        <button
          className={`nav-left__dev-btn ${useMock ? 'nav-left__dev-btn--mock' : 'nav-left__dev-btn--api'}`}
          onClick={toggleMock}
          title={useMock ? 'Passer en mode API' : 'Passer en mode Mock'}
        >
          {useMock ? 'M' : 'A'}
        </button>
      </div>

      <nav className="nav-left__icons">
        <NavItem src={iconYoga}        alt="Yoga"        />
        <NavItem src={iconNatation}    alt="Natation"    />
        <NavItem src={iconVelo}        alt="Cyclisme"    />
        <NavItem src={iconMusculation} alt="Musculation" />
      </nav>

      <p className="nav-left__copyright">Copyright, SportSee 2020</p>
    </aside>
  )
}

export default NavLeft
