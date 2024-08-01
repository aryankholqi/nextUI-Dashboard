import { createFileRoute } from '@tanstack/react-router'
import Statistics from '../pages/statistics'
import { Helmet } from 'react-helmet'

export const Route = createFileRoute('/_auth/statistics')({
    component: () =>
        <>
            <Statistics />
            <Helmet>
                <title>statistics</title>
            </Helmet>
        </>
})