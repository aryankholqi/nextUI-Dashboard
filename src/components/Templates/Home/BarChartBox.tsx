import { Card, Chip } from '@nextui-org/react'
import TinyBarChart from '../../Modules/Charts/TinyBarChart'

export default function BarChartBox() {
    return (
        <Card className="p-8 bg-white dark:bg-black dark:text-white rounded-4xl shadow-none space-y-5 flex flex-col justify-between">
            <div className='flex items-center justify-between'>
                <h3 className="text-3xl">Expenses</h3>
                <Chip className="bg-[#CCFFCD] dark:text-black">Month</Chip>
            </div>
            <TinyBarChart />
        </Card>
    )
}
