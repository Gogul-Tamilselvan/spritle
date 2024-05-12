import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Metrics from './components/Metrics.jsx'
import Webhook from './components/Webhook.jsx';
import UseMonitor from './components/UseMonitor.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/metric",
    element: <Metrics/>
  },
  {
    path: "/webhooks",
    element: <Webhook/>
  },
  {
    path: "/sendwebhook",
    element: <UseMonitor/>
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
