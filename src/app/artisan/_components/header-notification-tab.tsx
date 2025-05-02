import { Bell } from 'lucide-react'
import React from 'react'

export const HeaderNotificationTab = () => {
  return (
    <div className='w-12 h-12 hover:bg-light-gray rounded-xl cursor-pointer flex items-center justify-center'>
        <Bell size={18} />
    </div>
  )
}
