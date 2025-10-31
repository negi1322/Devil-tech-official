import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import User from "./User";

export const PublicRoute = () => {};
export const PrivateRoute = () => {};

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/user",
    element: <User />,
  },
]);
export default Routes;
