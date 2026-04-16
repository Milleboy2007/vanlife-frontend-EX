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
import MainLayout from './layouts/MainLayout/MainLayout'
import HostLayout from './layouts/HostLayout/HostLayout'
import vansLoader from "./loaders/vans.loader"
import vanDetailLoader from "./loaders/van-detail.loader"
import { loginAction } from "./action/login.action"
import loginLoader from "./loaders/login.loader"
import logoutAction from "./action/logout.action"
import mainLayoutLoader from "./loaders/main-layout.loader"
import hostDashboardLoader from "./loaders/host-dashboard.loader"
import authLoader from "./loaders/auth.loader"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />} loader={mainLayoutLoader} >
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} action={loginAction} loader={loginLoader}/>
      <Route path="logout" action={logoutAction}/>
      <Route path="register" element={<Register />}/>
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vansLoader}/>
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader}/>

      <Route path="/host" element={<HostLayout/>} >
        <Route index element={<Dashboard />} loader={hostDashboardLoader}/>
        <Route path="income" element={<Income />} loader={authLoader}/>
        <Route path="reviews" element={<Reviews />} loader={authLoader}/>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route >
  ))

  return <RouterProvider router={router} />
}
export default App
