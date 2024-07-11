import { Card, CircularProgress } from '@nextui-org/react'
import formatPrice from '../../../utils/formatPrice'
import { incomeProps } from '../../../interfaces/income.interface'
import { useTheme } from 'next-themes'

export default function IncomeBox({ id, price, Icon, iconBgColor, percentage }: incomeProps) {
    const { theme } = useTheme()

    const iconbg = theme === "light" ? iconBgColor.light : iconBgColor.dark
    return (
        <Card className='p-6 bg-white dark:bg-black dark:text-white rounded-4xl shadow-none space-y-4 flex flex-col justify-between'>
            <div className='flex items-center justify-between gap-10'>
                <div className='space-y-4 mb-8'>
                    <span style={{ backgroundColor: iconbg }} className={`p-2 rounded-full flex items-center justify-center w-max`}>
                        <Icon />
                    </span>
                    <p className='font-poppinsMedium text-2xl'>Income</p>
                </div>
                <CircularProgress
                    classNames={{
                        svg: "w-36 h-36",
                        indicator: `${id === 1 ? "stroke-[#00FF6B] dark:stroke-[#1AFF79]" : "stroke-[#FF6756] dark:stroke-[#FF7E70]"}`,
                        track: "stroke-[#F3F4F7] dark:stroke-[#373737]",
                        value: "text-lg font-poppinsRegular text-primaryGray dark:text-[#B6B6B6]",
                    }}
                    value={percentage}
                    strokeWidth={5}
                    formatOptions={{ style: "percent" }}
                    showValueLabel={true}
                />
            </div>
            <p className='font-poppinsRegular text-4xl'>{formatPrice(price.toString())}</p>
        </Card>
    )
}
