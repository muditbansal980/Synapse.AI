import Navbar from "./components/navbar"
import Home from "./components/home"
import Profile from "./components/profile"
import Contests from "./components/contests"
import Previous from "./components/previous-activity"
import Record from "./components/record"
import LandingPage from "./components/landing-page"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import './App.css'

function App() {
  const router  = createBrowserRouter([
    {
      path:"/home",
      element:<><Navbar /><Home/></>
    },
    {
      path:"/profile",
      element:<><Navbar/><Profile/></>
    },
    {
      path:"/contests",
      element:<><Navbar/><Contests/></>
    },
    {
      path:"/previous-activity",
      element:<><Navbar/><Previous/></>
    },
    {
      path:"/record",
      element:<><Navbar/><Record/></>
    },
    {
      path:"/",
      element:<><Navbar/><LandingPage/></>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
