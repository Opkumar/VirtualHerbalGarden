import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from "./Components/main/Home.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Plants from './Components/main/Plants.jsx'
import Diseases from './Components/main/Diseases.jsx'
import Quizes from './Components/main/Quizes.jsx'
import Result from './Components/main/Result.jsx';
import Favourite from './Components/main/Favourite.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      
      {
        path:"",
        element:<Home />
      },
      {
        path:"/Plants",
        element:<Plants />
      },
      {
        path:"/Diseases",
        element:<Diseases />
      },
      {
        path:"/Results",
        element:<Result   />
      },
      {
        path:"/Quizes",
        element:<Quizes />
      },
      {
        path:"/favourite",
        element:<Favourite />
      }
      
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>
)
