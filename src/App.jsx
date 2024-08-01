import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./pages/MainLayout/MainLayOut";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import NotFound from "./pages/NotFound/NotFound";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
function App() {
  let routes = createHashRouter([
    {
      path: "",
      element: <MainLayOut />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "about",
          element: <About />,
        },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
