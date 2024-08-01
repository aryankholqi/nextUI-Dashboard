import { createLazyFileRoute } from '@tanstack/react-router'
import Payments from '../pages/payments'
import { Helmet } from 'react-helmet'
import { t } from 'i18next'

export const Route = createLazyFileRoute('/_auth/payments')({
    component: () =>
        <>
            <Payments />
            <Helmet>
                <title>{t("payments")}</title>
            </Helmet>
        </>
})