import { createLazyFileRoute } from '@tanstack/react-router'
import Comments from '../pages/comments'
import { Helmet } from 'react-helmet'
import { t } from 'i18next'

export const Route = createLazyFileRoute('/_auth/comments')({
    component: () =>
        <>
            <Comments />
            <Helmet>
                <title>{t("comments")}</title>
            </Helmet>
        </>
})