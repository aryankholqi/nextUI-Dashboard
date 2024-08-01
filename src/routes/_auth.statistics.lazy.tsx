import { createLazyFileRoute } from '@tanstack/react-router'
import Statistics from '../pages/statistics'
import { Helmet } from 'react-helmet'
import { t } from 'i18next'

export const Route = createLazyFileRoute('/_auth/statistics')({
    component: () =>
        <>
            <Statistics />
            <Helmet>
                <title>{t("statistics")}</title>
            </Helmet>
        </>
})