import { CustomBreadCrumb } from '@/components/dashboard/custom-breadcrumb'
import { Search } from '@/components/dashboard/search'
import { DatePickerWithRange } from '@/components/ui/date-range'
import React from 'react'
import { History } from './_components/history'

const breadcrumbs = [
    {
        title: "Home",
        link: "/artisan"
    },
    {
        title: "Payment History"
    }
]

const PaymentPage = () => {
  return (
    <div className='py-4 container mx-auto px-4 md:px-0'>

        <CustomBreadCrumb breadcrumbs={breadcrumbs} />

        <div className='max-w-[882px] mx-auto flex items-center justify-between mt-8'>
            <DatePickerWithRange />

            <Search />
        </div>

        <History />
    </div>
  )
}

export default PaymentPage