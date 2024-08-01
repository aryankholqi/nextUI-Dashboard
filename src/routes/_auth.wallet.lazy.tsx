import { createLazyFileRoute } from '@tanstack/react-router'
import Wallet from '../pages/wallet'
import { Helmet } from 'react-helmet'
import { t } from 'i18next'

export const Route = createLazyFileRoute('/_auth/wallet')({
    component: () =>
        <>
            <Wallet />
            <Helmet>
                <title>{t("wallet")}</title>
            </Helmet>
        </>
})