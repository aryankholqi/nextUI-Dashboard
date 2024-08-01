import { createFileRoute } from '@tanstack/react-router'
import Comments from '../pages/comments'
import { Helmet } from 'react-helmet'

export const Route = createFileRoute('/_auth/comments')({
    component: () =>
        <>
            <Comments />
            <Helmet>
                <title>comments</title>
            </Helmet>
        </>
})