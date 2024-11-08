import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componentes/Root/Root';
import Statistics from './Componentes/Statistics/Statistics';
import AppliedJobs from './Componentes/AppliedJobs/AppliedJobs';
import Blogs from './Componentes/Blogs/Blogs';
import ErrorePage from './Componentes/ErrorePage/ErrorePage';
import JobDetails from './Componentes/JobDetails/JobDetails';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorePage></ErrorePage>,
    children: [
      {
        path: '/',
        element: <Statistics></Statistics>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json') // warning: only load the data you need. do not load all the data
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/jobs.json') // warning: only load the data you need. do not load all the data
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
