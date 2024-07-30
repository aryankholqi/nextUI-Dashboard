import { Card, Chip } from '@nextui-org/react'
import TinyBarChart from '../../Modules/Charts/TinyBarChart'
import { useTranslation } from 'react-i18next'

export default function BarChartBox() {
    const { t } = useTranslation()
    return (
        <Card className="p-8 bg-white dark:bg-black dark:text-white rounded-4xl shadow-none space-y-5 !mt-0 flex flex-col justify-between">
            <div className='flex items-center justify-between flex-wrap gap-2'>
                <h3 className="text-3xl 2xl:text-2xl">{t("expenses")}</h3>
                <Chip className="bg-[#CCFFCD] dark:text-black">{t("month")}</Chip>
            </div>
            <TinyBarChart />
        </Card>
    )
}
