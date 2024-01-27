import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { FaAngleDown } from "react-icons/fa";
import CALENDAR from '../../assets/icons/calendar.png'
import NOTIFICATION from '../../assets/icons/solar_bell-outline.png'
import PROFILEIMAGE from '../../assets/images/profile.png'
import SEARCH from '../../assets/icons/search.png'
import { SheetTrigger, SheetContent, Sheet } from '../ui/sheet';
import MenuSidebar from './menubar';
import SUN from '../../assets/icons/sun.png'
import MOON from '../../assets/icons/moon.png'
import useDarkMode from '@/utils/hooks'

function Searchbar() {
  const [toggleDarkMode] = useDarkMode()
  const [showSearchbar, setSearchbar] = useState(false)
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  } as const

  const currentDate = new Date()
  const dateFormat = currentDate.toLocaleDateString('en-us', options).split(",")

  return (
    <Sheet>
      <header className={`z-50 bg-[#FAFAFA] border-[#E5EAEF] dark:bg-gray-900 dark:border-gray-700 sticky top-0 left-0 right-0 w-full flex items-center justify-between py-4 px-8 border-b-2`}>
        <div>
          <h2 className="text-[28px] font-semibold">Dashboard</h2>
        </div>
        <div className="lg:hidden flex items-center gap-x-4">
          <div onClick={() => setSearchbar(!showSearchbar)} className="">
            <img src={SEARCH} alt="IMG-SEARCH-ICON" className="w-6 h-6 cursor-pointer" />
          </div>
          <div>
            <img src={PROFILEIMAGE} alt="IMG-PROFILE-IMAGE" />
          </div>
          <div className="flex items-center gap-y-4 bg-white rounded-3xl px-0 py-0">
            <button onClick={() => toggleDarkMode(false)} className={`w-[40px] aspect-square flex items-center justify-center rounded-full bg-[#34CAA5] dark:bg-white`}>
              <img className={`w-[24px] height-[24px] invert-0 dark:w-[22px] dark:h-[22px] dark:invert`} width={30} height={30} src={SUN} alt="IMG-SUN" />
            </button>
            <button onClick={() => toggleDarkMode(true)} className={`w-[40px] aspect-square flex items-center justify-center rounded-full dark:bg-[#34CAA5] bg-white`}>
              <img className={`dark:w-[24px] dark:height-[24px] dark:invert w-[22px] h-[22px]`} width={30} height={30} src={MOON} alt="IMG-MOON" />
            </button>
          </div>
          <SheetTrigger asChild>
            <div onClick={() => { }}>
              <HiOutlineMenuAlt3 fontSize={32} className='cursor-pointer ml-2' />
            </div>
          </SheetTrigger>
        </div>
        <div className="basis-[25%] hidden lg:block">
          <input style={{ backgroundImage: `url(${SEARCH})`, backgroundRepeat: 'no-repeat', backgroundPosition: '10px 50%', backgroundSize: '16px' }} type="search" name="search" id="search" placeholder="Search..." className="rounded-3xl py-2 pl-10 pr-4 border-2 border-gray-300 bg-inherit w-full focus:border-0" />
        </div>
        <div className="hidden lg:flex items-center gap-x-4">
          <div className="flex items-center">
            <img src={CALENDAR} alt="IMG-CALENDAR" className={`dark:invert : 'invert-0 mr-2`} />
            <p className="font-['Inter'] font-medium">{dateFormat[0]} {dateFormat[1]}, {dateFormat[2]}</p>
          </div>
          <Link to="/notifications" className="w-fulll block">
            <img className={`dark:invert invert-0 rounded-full border border-gray-300 p-1 mx-3`} src={NOTIFICATION} alt="IMG-NOTIFICATION" />
          </Link>
          <button className="flex items-center border border-gray-300 rounded-full px-2 py-1">
            <img src={PROFILEIMAGE} alt="IMG-PROFILE-IMAGE" className="mr-2" />
            <div className="font-['Inter'] text-left">
              <p>Justin Bergson</p>
              <p className="text-sm text-[#787486]">justin@gmail.com</p>
            </div>
            <FaAngleDown fontSize={24} className="ml-2 text-[#b4b2bb] dark:text-[#0D062D]" />
          </button>
        </div>
      </header>
      {
        showSearchbar ?
          <div className="lg:hidden border-b border-gray-300">
            <input style={{ backgroundImage: `url(${SEARCH})`, backgroundRepeat: 'no-repeat', backgroundPosition: '16px 50%', backgroundSize: '20px' }} type="search" name="search" id="search" placeholder="Search..." className="py-3 pl-12 pr-4 bg-inherit w-full focus:outline-0" />
          </div> : ""
      }
      <SheetContent className='px-0 overflow-y-scroll no-scroll'>
        <MenuSidebar />
      </SheetContent>
    </Sheet>
  )
}

export default Searchbar