import { Tooltip } from '@nextui-org/react'
import { ReactNode } from 'react'

export default function MainTooltip({ children, content, className }: { children: ReactNode, content: string, className?: string }) {
    return (
        <Tooltip
            content={<p className={`text-xs font-poppinsRegular ${className}`}>{content}</p>}
            className='rounded-md p-2'
            showArrow
        >
            {children}
        </Tooltip>
    )
}
