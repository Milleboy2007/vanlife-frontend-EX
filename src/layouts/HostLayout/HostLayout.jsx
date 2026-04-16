import { NavLink, Outlet } from "react-router-dom";
import "./HostLayout.css"

export default function HostLayout() {


  return (
    <>
      <nav className="host-nav">
        <Link to="/host/dashboard" className="nav-button">
          Dashboard
        </Link>
        <Link to="/host/income" className="nav-button">
          Income
        </Link>
        <Link to="/host/reviews" className="nav-button">
          Reviews
        </Link>
      </nav>

      <Outlet />
    </>

  )
}