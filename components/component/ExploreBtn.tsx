'use client'
import { Button } from '../ui/button'
import { CornerRightDown } from 'lucide-react'
const ExploreBtn = () => {
  return (
    <div className='flex justify-between '>
    <Button className={"mt-7 mx-auto rounded-full p-7"} onClick={()=>console.log("CLICK")} type='button'>
      <a href='#events'><div className='flex justify-between align-middle gap-3'>
        Explore Event<CornerRightDown width={24} height={24} /></div></a>
    </Button>
    </div>
  )
}

export default ExploreBtn
