import { Link, Form } from "react-router-dom"
import "./Header.css"

export default function Header({ user }) {

  return (
    <header>
      <Link className="site-logo" to="/">#VanLife</Link>
      <nav>
        <Link to="/about" className="nav-button" >About</Link>
        <Link to="/vans" className="nav-button">Vans</Link>

        <Link className="nav-button" to={user ? "/host": "/login"}>
          {user ? user.name: "login"}
        </Link>
        {user &&        
        <Form method="POST" action="/logout">
          <button className="nav-button">Logout</button>
        </Form>}

      </nav>
    </header>
  )
}
