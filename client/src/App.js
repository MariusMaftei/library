import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.js";
import Write from "./pages/Write.js";
import Register from "./pages/Register.js";
import Login from "./pages/Login.js";
import { useContext } from "react";
import { Context } from "./context/auth-context.js";
import SinglePage from "./pages/SinglePage.js";

const App = () => {
  const { user } = useContext(Context);

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/single/:postId", element: <SinglePage /> },
    { path: "/my-books", element: user ? <Home /> : <Login /> },
    { path: "/write", element: user ? <Write /> : <Login /> },
    { path: "/edit/:postId", element: user ? <Write /> : <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: !user ? <Login /> : <Home /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
