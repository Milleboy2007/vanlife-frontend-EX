import {
  Form,
  Link,
  useActionData,
  useLoaderData
} from "react-router-dom"
import "./Login.css"




export default function Login() {
  const error = useActionData()

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {/* Affiche l'erreur renvoyée par loginAction si la connexion a échoué */}
      {error &&
        <span className="red" style={{ marginBottom: "20px" }}>
          {error}
        </span>
      }
      <Form
        className="login-form"
        method="POST"
        replace
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
        <button>Log in</button>
      </Form>

      <p className="auth-redirect">
        Don't have an account? <Link to="/register">Create one here</Link>
      </p>
    </div>
  )

}
