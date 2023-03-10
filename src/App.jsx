import { useState } from 'react'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard, { dashboardLoader } from './pages/Dashboard';
import Error from './pages/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: dashboardLoader,
    //errorElement:<Error />
      },
      {
        path: "*",
        element: <Error />,
      }
    ],

);
function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
