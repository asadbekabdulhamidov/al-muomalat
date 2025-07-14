// react router dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import react
import { Suspense } from 'react';

//import pages
import { HomePage, LoginPage, RegisterPage } from '../pages';
import MainLayout from '../layouts/mainLayout';

function Root() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },

    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
  ]);
  return (
    <Suspense fallback={<div>Yuklanmoqda...</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default Root;
