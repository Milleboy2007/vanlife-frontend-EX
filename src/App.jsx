import { useState } from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom"

// PAGES
import {
  Home,
  Login,
  Register,
  About,
  Vans,
  VanDetail,
  Income,
  Reviews,
  Dashboard,
  NotFound
} from "./pages"


// Components
import Header from "./components/ui/Header"
import Footer from "./components/ui/Footer"

// Mock data
import { vansData, usersData } from "./assets/mock-data"

function App() {
  const [user] = useState(usersData[0])
  const [vans] = useState(vansData)
  const hostVans = vans.filter(van => van.hostId === user.id)

  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Header user={user} />
        <main>
          <Routes>
            {/* ROUTE HOME */}
            <Route path="/" element={<Home />} />

            {/* ROUTE LOGIN */}
            <Route path="/login" element={<Login />} />

            {/* ROUTE REGISTER */}
            <Route path="/register" element={<Register />} />

            {/* ROUTE ABOUT */}
            <Route path="/about" element={<About />} />

            {/* ROUTE VANS */}
            <Route path="/vans" element={<Vans vans={vans} />} />

            {/* ROUTE VAN DETAIL */}
            <Route path="/vans/:id" element={<VanDetail />} />

            {/* ROUTE HOST DASHBOARD */}
            <Route
              path="/host/dashboard"
              element={<Dashboard hostVans={hostVans} user={user} />}
            />

            {/* ROUTE HOST INCOME */}
            <Route path="/host/income" element={<Income />} />

            {/* ROUTE HOST REVIEWS */}
            <Route path="/host/reviews" element={<Reviews />} />

            {/* ROUTE PAR DÉFAUT (SI AUCUNE ROUTE NE CORRESPOND) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
export default App
