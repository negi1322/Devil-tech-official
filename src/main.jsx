import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fontsource/poppins"; // Default weight 400
import "@fontsource/poppins/700.css"; // Optional bold
import "@fontsource/open-sans"; // Default weight 400
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Routes from "./Components/Routes.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";

// import "bootstrap-icons/font/bootstrap-icons.css";py-2
createRoot(document.getElementById("root")).render(
  <RouterProvider router={Routes} />
);
