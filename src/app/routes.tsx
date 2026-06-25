import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Troubleshoot from "./components/Troubleshoot";
import Download from "./components/Download";
import Contact from "./components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "troubleshoot", element: <Troubleshoot /> },
      { path: "download", element: <Download /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
