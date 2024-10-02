import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Assigment3 from "./Assigment3.jsx";
import Blog from "./Blog.jsx";
import Profile from "./Profile.jsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Assigment3",
        element: <Assigment3 />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
