import {
  Form,
  Link
} from "react-router-dom"
import "./Login.css"




export default function Login() {

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>

      <form
        className="login-form"
      >
        <input
          name="email"
          type="email"
          placeholder="Email address"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
        />
        <button disabled={navigation.state === "submitting"}>Log in
        </button>
      </form>

      <p className="auth-redirect">
        Don't have an account? <Link to="/register">Create one here</Link>
      </p>
    </div>
  )

}
