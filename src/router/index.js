import React, { Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from '@/App';
import PageOne from '@/pages/PageOne';

const PageTwo = React.lazy(() => import("@/pages/PageTwo"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "page",
        element: <PageOne />
      },
      {
        element: <div> down <Outlet /> </div>,
        children: [
          {
            path: "page-two",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <PageTwo />
              </Suspense>
            )
          }
        ]
      }
    ]
  }
])

export default router;