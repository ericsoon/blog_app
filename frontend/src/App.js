import React from 'react';
import {createBrowserRouter,RouterProvider,Route,Outlet} from 'react-router-dom';

import {Footer, Navbar} from './components';
import {Register,Login, Write, Home, Single} from './pages';

const Display = () => {
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Display />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/post/:id',
          element: <Single />,
        },
        {
          path: '/write',
          element: <Write />,
        }
      ]
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/write",
      element: <Write />,
    },
    {
      path: "/single",
      element: <Single />,
    },
  ]);
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
