import userSrc from '@/assets/user-f-512.png';
import { ProtectedRoute } from '@/auth';
import { Outlet } from 'react-router';

export function DashboardLayout() {
  return (
    <ProtectedRoute>
      <div className='flex w-full min-h-screen transition ease-in duration-300'>
        <div className='flex flex-col w-full flex-5'>
          <header className='sticky top-0 z-10 bg-transparent'>
            <nav className='px-2 rounded-none bg-transparent py-4'>
              <div className='mx-auto flex flex-wrap items-center justify-between'>
                <div></div>
                <div>
                  <div className='flex items-center gap-2'>
                    <div className='relative'>
                      <div className='flex items-center gap-1 cursor-pointer'>
                        <span className='h-10 w-10 hover:text-primary rounded-full flex justify-center items-center group-hover/menu:bg-lightprimary group-hover/menu:text-primary'>
                          <img alt='User' height='35' width='35' className='rounded-full' src={userSrc} />
                          <button className='cursor-pointer absolute top-12 right-0 bg-white border border-gray-300 rounded-md shadow-lg py-2 px-4 text-sm text-gray-700 hover:bg-gray-100'>
                            Logout
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div className='bg-[#f4f7fb] h-full rounded-3xl'>
            <div className='container mx-auto p-8'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
