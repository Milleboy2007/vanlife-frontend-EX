import "./MainLayout.css"
import { Outlet } from "react-router-dom"
import Header from "/src/components/ui/Header"
import Footer from "/src/components/ui/Footer"


export default function MainLayout({ user }) {

  return (
    <div className="site-wrapper">
      <Header user={user} />
      <main>
        <Outlet context={{user}} />
      </main>
      <Footer />
    </div>
  )
}