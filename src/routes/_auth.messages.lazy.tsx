import { createLazyFileRoute } from '@tanstack/react-router'
import Messages from '../pages/messages'
import { Helmet } from 'react-helmet'
import { t } from 'i18next'

export const Route = createLazyFileRoute('/_auth/messages')({
    component: () =>
        <>
            <Messages />
            <Helmet>
                <title>{t("messages")}</title>
            </Helmet>
        </>
})