import { createFileRoute, Outlet } from '@tanstack/react-router'
import { unAuthorizedBeforeLoad } from '../configs/beforeLoad'

export const Route = createFileRoute('/_unAuth')({
    ...unAuthorizedBeforeLoad,
    component: () => <Outlet />
})