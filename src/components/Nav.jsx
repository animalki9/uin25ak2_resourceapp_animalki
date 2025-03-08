import { NavLink } from "react-router-dom";
import '../styles/nav.scss';

// Definerer og eksporterer en funksjonell komponent kalt Nav
export default function Nav() {
  return (
    // Lager en navigasjonsmeny med klassen "tabs"
    <nav className="tabs">
      <ul> {/* Oppretter en liste med navigasjonslenker */}
        <li>
          <NavLink
            to="/html" // Navigerer til "/html" når man klikker på lenken
            className={({ isActive }) => isActive ? 'category-btn active' : 'category-btn'}
          >
            HTML
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/css" // Navigerer til "/css"
            className={({ isActive }) => isActive ? 'category-btn active' : 'category-btn'}
          >
            CSS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/javascript" // Navigerer til "/javascript"
            className={({ isActive }) => isActive ? 'category-btn active' : 'category-btn'}
          >
            JavaScript
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/react" // Navigerer til "/react"
            className={({ isActive }) => isActive ? 'category-btn active' : 'category-btn'}
          >
            React
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/headless-cms" // Navigerer til "/headless-cms" (Sanity CMS)
            className={({ isActive }) => isActive ? 'category-btn active' : 'category-btn'}
          >
            Sanity
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
