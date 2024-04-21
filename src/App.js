import Home from "./components/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/pages/Login";
import SportEdit from "./components/pages/SportEdit";
import SportCreate from "./components/pages/SportsCreate";
import { Toaster } from "react-hot-toast";
import Provider from "./utils/context/Provider";
import Booking from "./components/pages/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sportedit",
    element: <SportEdit />,
  },
  {
    path: "/createsport",
    element: <SportCreate />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
]);

function App() {
  return (
    <div>
      <Provider>
        <RouterProvider router={router} />
        <Toaster />
      </Provider>
    </div>
  );
}

export default App;
