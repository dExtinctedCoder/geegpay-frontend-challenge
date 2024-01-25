import { Link } from 'react-router-dom'
import CALENDAR from '../../assets/icons/calendar.png'
import NOTIFICATION from '../../assets/icons/solar_bell-outline.png'
import PROFILEIMAGE from '../../assets/images/profile.png'
import SEARCH from '../../assets/icons/search.png'
import { FaAngleDown } from "react-icons/fa";

interface PropsType {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

function Searchbar({ theme }: PropsType) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }

  const currentDate = new Date()
  const dateFormat = currentDate.toLocaleDateString('en-us', options).split(",")

  return (
    <header className="sticky top-0 w-full flex items-center justify-between py-4 px-8 border-b-2 border-[#E5EAEF]">
      <div>
        <h2 className="text-[28px] font-semibold">Dashboard</h2>
      </div>
      <div className="basis-[30%]">
        <input style={{ backgroundImage: `url(${SEARCH})`, backgroundRepeat: 'no-repeat', backgroundPosition: '10px 50%', backgroundSize: '16px' }} type="text" name="search" id="search" placeholder="Search..." className="rounded-3xl py-2 pl-10 pr-4 border-2 border-gray-300 bg-inherit w-full" />
      </div>
      <div className="flex items-center gap-x-4">
        <div className="flex items-center">
          <img src={CALENDAR} alt="IMG-CALENDAR" className={`${theme === 'dark' ? 'invert' : 'invert-0'} mr-2`} />
          <p className="font-['Inter'] font-medium">{dateFormat[0]} {dateFormat[1]}, {dateFormat[2]}</p>
        </div>
        <Link to="/notifications" className="w-fulll block">
          <img className={`${theme === 'dark' ? 'invert' : 'invert-0'} rounded-full border border-gray-300 p-1 mx-3`} src={NOTIFICATION} alt="IMG-NOTIFICATION" />
        </Link>
        <button className="flex items-center border border-gray-300 rounded-full px-2 py-1">
          <img src={PROFILEIMAGE} alt="IMG-PROFILE-IMAGE" className="mr-2" />
          <div className="font-['Inter'] text-left">
            <p>Justin Bergson</p>
            <p className="text-sm text-[#787486]">justin@gmail.com</p>
          </div>
          <FaAngleDown fontSize={24} color={`${theme === 'dark' ? '#b4b2bb' : '#0D062D'}`} className="ml-2" />
        </button>
      </div>
    </header>
  )
}

export default Searchbar