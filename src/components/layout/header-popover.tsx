import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import Image from 'next/image'

const HeaderPopover = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex gap-2 p-1 border border-border rounded-xl">
          <Image src="/assets/user.svg" width={40} height={40} alt="user" />
          <Image src="/assets/solid-down.svg" width={16} height={16} alt="solid-down" />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        Rtest
      </PopoverContent>
    </Popover>
  );
}

export default HeaderPopover