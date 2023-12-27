import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import AppLayout from "./AppLayout";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <h1>Page Not Found</h1>,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/dashboard/:fullname",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
