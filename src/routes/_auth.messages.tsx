import { createFileRoute } from '@tanstack/react-router'
import Messages from '../pages/messages'
import { Helmet } from 'react-helmet'

export const Route = createFileRoute('/_auth/messages')({
    component: () =>
        <>
            <Messages />
            <Helmet>
                <title>messages</title>
            </Helmet>
        </>
})