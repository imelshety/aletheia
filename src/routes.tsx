import { DashboardLayout } from '@/pages/DashboardLayout.tsx';
import { DashboardPage } from '@/pages/DashboardPage.tsx';
import { LoginPage } from '@/pages/LoginPage.tsx';
import { createBrowserRouter, Outlet } from 'react-router';
import { SidebarLayout } from '@/components/ui';

export const router = createBrowserRouter([
  {
    element: (
      <SidebarLayout>
        <Outlet />
      </SidebarLayout>
    ),
    children: [
      {
        path: '/',
        Component: DashboardLayout,
        children: [
          {
            index: true,
            Component: DashboardPage,
          },
        ],
      },
      {
        path: '/auth',
        children: [
          {
            path: 'login',
            Component: LoginPage,
          },
        ],
      },
    ],
  },
]);
