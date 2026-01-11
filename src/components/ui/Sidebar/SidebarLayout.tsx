import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';
import type { ReactNode } from 'react';

interface SidebarLayoutProps {
  children: ReactNode;
}

export function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <SidebarProvider>
      <div className='flex min-h-screen w-full'>
        <AppSidebar />
        <main className='flex-1'>
          <div className='border-b border-gray-200'>
            <div className='flex h-16 items-center px-4'>
              <SidebarTrigger />
              <div> header component</div>
            </div>
          </div>
          <div className='flex-1 space-y-4 p-8 pt-6'>{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
