import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppLayout from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contactus",
        element: <Contact />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      }
    ]
  }

])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

