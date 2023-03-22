import React from 'react'
import ReactDOM from 'react-dom/client'
// React router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import {LoadingSpinner} from "./components";
import ErrorPage from './ErrorPage';
import Search from "./Search";
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="search" element={<Search />}/>
    </Route>
  ),
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<LoadingSpinner />} />
  </React.StrictMode>,
)
