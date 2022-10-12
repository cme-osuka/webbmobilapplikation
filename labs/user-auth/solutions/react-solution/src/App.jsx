import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './App.css'

import Login from "./pages/Login";
import Home from "./pages/Home";

function Root() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

// Kom ihåg att du måste gå in på /login
// för att komma åt login-sidan! 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "home",
        element: <Home />
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
