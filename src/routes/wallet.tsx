import { createFileRoute } from '@tanstack/react-router'
import { unAuthorizedBeforeLoad } from '../configs/beforeLoad'
import Wallet from '../pages/wallet'
import { Helmet } from 'react-helmet'

export const Route = createFileRoute('/wallet')({
    ...unAuthorizedBeforeLoad,
    component: () =>
        <>
            <Wallet />
            <Helmet>
                <title>Wallet</title>
            </Helmet>
        </>
})