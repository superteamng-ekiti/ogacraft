import React from 'react'
import { ClientName } from '../client-name'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { ChatMessages } from './chat-messages'

export const ChatWrapper = () => {
  return (
    <div className='w-full h-full rounded-xl border-none md:border border-border bg-white'>
        <div className='w-full px-4 py-6 flex items-center justify-between border-b border-border'>
            <ClientName />

            <Button size="sm">Accept Job</Button>
        </div>

        <div className='h-[calc(100%_-_10.5rem)] p-3 overflow-hidden'>
            <ChatMessages />
        </div>

        <div className='w-full p-3 bg-white border-t border-border'>
            <div className='bg-gray-100 px-3 py-2 rounded-lg flex items-center justify-between'>
                <div className='flex items-center gap-1 w-full h-full'>
                    <div className='w-10 h-10 flex-shrink-0 rounded-md bg-gray-200 flex items-center justify-center'></div>

                    <Input className='w-full h-10 bg-transparent border-none outline-0 shadow-none' placeholder='Type something' />
                </div>

                <Button variant="link">
                    <Image src="/icons/send.svg" width={24} height={24} alt="send icon" />
                </Button>
            </div>
        </div>
    </div>
  )
}
