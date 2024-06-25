import { ReactNode } from '@tanstack/react-router'
import Sidebar from '../components/Modules/Sidebar/Sidebar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className='bg-primaryBg dark:bg-darkPrimaryBg h-[100dvh] p-5'>
            <Sidebar />
            {children}
        </div>
    )
}
