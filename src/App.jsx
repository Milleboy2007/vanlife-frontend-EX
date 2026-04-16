import { useState } from "react"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

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

// Mock data
import { vansData, usersData } from "./assets/mock-data"
import MainLayout from './layouts/MainLayout/MainLayout'
import HostLayout from './layouts/HostLayout/HostLayout'
import vansLoader from "./loaders/vans.loader"
import vanDetailLoader from "./loaders/van-detail.loader"
import { loginAction } from "./action/login.action"
import loginLoader from "./loaders/login.loader"
import logoutAction from "./action/logout.action"
import mainLayoutLoader from "./loaders/main-layout.loader"

function App() {
  const [user] = useState(usersData[0])
  const [vans] = useState(vansData)
  const hostVans = vans.filter(van => van.hostId === user.id)

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />} loader={mainLayoutLoader} >
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} action={loginAction} loader={loginLoader}/>
      <Route path="logout" action={logoutAction}/>
      <Route path="register" element={<Register />}/>
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vansLoader}/>
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader}/>

      <Route path="/host" element={<HostLayout hostVans={hostVans} user={user}/>}>
        <Route index element={<Dashboard />}/>
        <Route path="income" element={<Income />}/>
        <Route path="reviews" element={<Reviews />}/>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route >
  ))

  return <RouterProvider router={router} />
}
export default App
