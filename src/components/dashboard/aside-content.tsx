import { Link } from 'react-router-dom'

import { Progress } from "@/components/ui/progress"

export function TopPlatform() {
  const topPlatforms = {
    aisle: 45.2, bazaar: 54.2, store: 27.02, troop: 27.02
  }

  return (
    <aside className='bg-white dark:bg-gray-800 text-[#22242C] dark:text-gray-100 px-8 py-4 rounded-2xl'>
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-lg">Top Platform</h4>
        <Link to="" className="text-[#34CAA5] text-lg font-medium hover:underline hover:text-green-500">See All</Link>
      </div>
      <div className='flex flex-col gap-y-4'>
        <div className='flex flex-col gap-y-2'>
          <p className='font-semibold text-lg capitalize'>Book Bazaar</p>
          <Progress color="bg-[#6160DC]" value={topPlatforms.bazaar} className="w-full h-3" />
          <p className='flex items-center justify-between text-[#525252] dark:text-gray-500 text-lg'>${(2500000).toLocaleString()}<span>+15%</span></p>
        </div>
        <div className='flex flex-col gap-y-4'>
          <p className='font-semibold text-lg capitalize'>Artisan Aisle</p>
          <Progress color="bg-[#54C5EB]" value={topPlatforms.aisle} className="w-full h-3" />
          <p className='flex items-center justify-between text-[#525252] dark:text-gray-500 text-lg'>${(1800000).toLocaleString()}<span>+15%</span></p>
        </div>
        <div className='flex flex-col gap-y-4'>
          <p className='font-semibold text-lg capitalize'>Toy Troop</p>
          <Progress color="bg-[#FFB74A]" value={topPlatforms.troop} className="w-full h-3" />
          <p className='flex items-center justify-between text-[#525252] dark:text-gray-500 text-lg'>${(1200000).toLocaleString()}<span>+15%</span></p>
        </div>
        <div>
          <p className='font-semibold text-lg capitalize'>XStore</p>
          <Progress color="bg-[#FF4A55]" value={topPlatforms.store} className="w-full h-3" />
          <p className='flex items-center justify-between text-[#525252] dark:text-gray-500 text-lg'>${(850000).toLocaleString()}<span>+15%</span></p>
        </div>
      </div>
    </aside>
  )
}
