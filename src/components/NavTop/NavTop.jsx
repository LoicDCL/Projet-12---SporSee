import { NavLink } from 'react-router-dom'
import logoText from '../../assets/Logo/logo.png'
import './NavTop.css'

function NavTop() {
  return (
    <header className="nav-top">
      <div className="nav-top__logo">
        <img src={logoText} alt="SportSee" className="nav-top__logo-text" />
      </div>
      <nav className="nav-top__links">
        <NavLink to="/"          className={({ isActive }) => isActive ? 'active' : ''}>Accueil</NavLink>
        <NavLink to="/user/12"   className={({ isActive }) => isActive ? 'active' : ''}>Profil</NavLink>
        <NavLink to="/settings"  className={({ isActive }) => isActive ? 'active' : ''}>Réglage</NavLink>
        <NavLink to="/community" className={({ isActive }) => isActive ? 'active' : ''}>Communauté</NavLink>
      </nav>
    </header>
  )
}

export default NavTop
