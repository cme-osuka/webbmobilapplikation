import { createBrowserRouter, Outlet, RouterProvider, useNavigation } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Repositories from "./pages/Repositories";
import Profile from "./pages/Profile";

import { fetchMyRepositories, fetchMyLatestRepositories, fetchUserData } from "./api";

const router = createBrowserRouter([
  {
    path: "/",
    loader: fetchUserData,
    element: <Root />,
    id: "root",
    children: [
      {
        path: "/",
        loader: fetchMyLatestRepositories,
        element: <Home />,
      },
      {
        path: "/repos",
        loader: fetchMyRepositories,
        element: <Repositories />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

function Root() {
  const navigation = useNavigation();

  return (
    <>
      <h1>State: {navigation.state}</h1>
      <Outlet />
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
