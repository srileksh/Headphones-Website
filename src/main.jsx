import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import TechPage from './pages/TechPage.jsx'
import Compare from './pages/Compare.jsx'


const router = createBrowserRouter(
  [{
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "techspecs",
        element: <TechPage />
      },
      {
        path: "compare",
        element:<Compare/>
      }



    ]
  }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
