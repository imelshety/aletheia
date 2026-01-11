import { Link, useLocation } from 'react-router';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/Logo/Logo';
import { Home, Settings, Users } from 'lucide-react';

export function AppSidebar() {
  const location = useLocation();
  const sidebarNavItems = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: Home,
    },
    {
      title: 'Employees',
      href: '/employees',
      icon: Users,
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: Settings,
    },
  ];

  return (
    <Sidebar className={'flex flex-col items-center justify-between'}>
      <SidebarHeader>
        <div className='px-4 py-2'>
          <Logo width={40} height={40} />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarNavItems.map(item => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.href}>
                    <Link to={item.href} className='flex items-center gap-2'>
                      <item.icon className='h-4 w-4 text-muted transition-all duration-300 ease-out hover:text-brand-darker ' />
                      <span className='transition-all duration-300 ease-out hover:text-brand-darker'>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className='px-4 py-2 text-xs text-muted'>© 2026 Aletheia</div>
      </SidebarFooter>
    </Sidebar>
  );
}
