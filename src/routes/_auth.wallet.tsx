import { createFileRoute } from '@tanstack/react-router'
import Wallet from '../pages/wallet'
import { Helmet } from 'react-helmet'

export const Route = createFileRoute('/_auth/wallet')({
    component: () =>
        <>
            <Wallet />
            <Helmet>
                <title>wallet</title>
            </Helmet>
        </>
})