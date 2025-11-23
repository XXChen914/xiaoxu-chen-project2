import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/rules',
    element: <Rules />
  },
  {
    path: '/',
    element: <BoggleProvider>
      <BoggleGame />
    </BoggleProvider>
  },
  {
    path: '/credits',
    element: <div>To do, as well</div>
  },
  {
    path: '/tik',
    element: <TicTacToeProviver>
      <TikTakToe />
      </TicTacToeProviver>
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
