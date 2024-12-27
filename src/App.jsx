import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import ErrorElement from "./components/ErrorElement";
import Layout from "./components/Layout";
import Settings from "./components/Settings";
import History from "./components/History";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "history",
          element: <History />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorElement />,
    },
  ]);

  return (
    <div className="min-h-screen" data-theme="light">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
