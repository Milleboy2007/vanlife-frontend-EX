import { Link } from "react-router-dom"


export default function Register() {

  return (
    <div className="login-container">
      <h1>Create your account</h1>
      <form
        method="post"
        className="login-form"
      >
        <input
          name="name"
          type="text"
          placeholder="Full name"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email address"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <button>Sign up</button>
      </form>

      <p className="auth-redirect">
        Already have an account? <Link to="/login">Sign in here</Link>
      </p>
    </div>
  )
}
