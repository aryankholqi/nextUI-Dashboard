import { createFileRoute, Outlet } from '@tanstack/react-router'
import { authorizedBeforeLoad } from '../configs/beforeLoad'

export const Route = createFileRoute('/_auth')({
    ...authorizedBeforeLoad,
    component: () => <Outlet />
})