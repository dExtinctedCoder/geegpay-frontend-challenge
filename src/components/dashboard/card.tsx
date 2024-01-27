import TRENDUP from '../../assets/images/Group 3gain.png'
import TRENDDOWN from '../../assets/images/Group 3loss.png'

import TRENDARROWDOWN from '../../assets/icons/Grouptrend-down.png'
import TRENDARROWUP from '../../assets/icons/Grouptrend-up.png'

interface PropsType {
  title: string
  icon: string
  value: string | number
  percent: number
  type: 'profit' | 'loss'
  isBg?: boolean
}
export function AnalyticsCard({ title, value, icon, percent, type, isBg = false }: PropsType) {
  return (
    <div className={`flex flex-col gap-y-2 p-4 rounded-2xl dark:bg-gray-800 bg-white shadow-sm`}>
      <div className='flex items-center lg:gap-x-0 justify-between'>
        {
          !isBg ?
            (
              <div className={`rounded-full p-1 border border-gray-300`}>
                <img className='w-6 h-6' src={icon} alt={`TITLE-${icon}`} />
              </div>

            )
            : (
              <div className={`rounded-full dark:bg-gray-700 bg-gray-200  p-[5px]`}>
                <div className={`dark:bg-gray-800 bg-white -rotate-[45deg]`}>
                  <img className='w-6 h-6 rotate-[45deg]' src={icon} alt={`TITLE-${icon}`} />
                </div>
              </div>
            )
        }
        {
          type === 'profit' ?
            <img src={TRENDUP} alt="IMG-TRENDUP" /> :
            <img src={TRENDDOWN} alt="IMG-TRENDDOWN" />
        }
      </div>
      <h4 className='text-[#898989] font-medium capitalize text-lg'>{title}</h4>
      <p className={`font-semibold text-2xl dark:text-gray-200 text-[#3A3F51]`}>{value}</p>
      <div className='flex items-center gap-x-4 lg:gap-x-0 lg:justify-between'>
        <div className={`flex items-center text-xs font-medium rounded-3xl px-2 py-1 ${type === 'profit' ? 'text-[#34caa5] bg-[rgb(52,202,165,12%)]' : 'text-[#ED544E] bg-[rgb(237,84,78,12%)]'}`}>
          <span className='mr-1'>
            {
              type === 'profit' ?
                <img className='w-2 h-2' src={TRENDARROWUP} alt="IMG-ARROWUP" />
                :
                <img className='w-2 h-2' src={TRENDARROWDOWN} alt="IMG-ARROWDOWN" /> //TODO: change to icon
            }
          </span>
          <span>
            {percent}%
          </span>
        </div>
        <p className={`dark:text-gray-400 text-[#606060] text-sm`}>vs. previous month</p>
      </div>
    </div>
  )
}
