import { NavLink, Outlet } from "react-router-dom";
import "./HostLayout.css"

export default function HostLayout() {

  const linkClassName = ({ isActive }) => isActive ? "nav-button active" : "nav-button"

  return (
    <>
      <nav className="host-nav">
        <NavLink to="/host/dashboard" className={linkClassName}>
          Dashboard
        </NavLink>
        <NavLink to="/host/income" className={linkClassName}>
          Income
        </NavLink>
        <NavLink to="/host/reviews" className={linkClassName}>
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </>

  )
}