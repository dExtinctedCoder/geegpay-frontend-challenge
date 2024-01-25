import { NavLink, Link } from 'react-router-dom'
// import { useContext } from 'react'
// import { ThemeContext } from '../context/themeContext'
import BACK from '../../assets/icons/arrow-right.png'
import SETTINGS from '../../assets/icons/setting-2.png'
import LOGOUT from '../../assets/icons/logout.png'
import DASHBOARD from '../../assets/icons/dashboard.png'
import ANALYTICS from '../../assets/icons/trend-up.png'
import CUSTOMER from '../../assets/icons/profile-2user.png'
import PRODUCTS from '../../assets/icons/box.png'
import DISCOUNT from '../../assets/icons/discount-shape.png'
import INFO from '../../assets/icons/info-circle.png'
import LOGO from '../../assets/images/Vectorlogo.png'
import SUN from '../../assets/icons/sun.png'
import MOON from '../../assets/icons/moon.png'

interface PropsType {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

function Sidebar({ theme, setTheme }: PropsType) {

  return (
    <aside className={`${theme === 'light' ? 'bg-[#F7F8FA] text-[#26282C]' : 'bg-gray-900 text-white'} min-h-screen py-2 pb-12 flex flex-col items-center gap-y-32`}>
      <nav className="w-full flex flex-col items-center gap-y-2">
        <Link className="items-center nav-link w-full border-l-[8px] border-transparent flex justify-center py-3" to="/">
          <img width={40} height={40} src={LOGO} alt="IMG-LOGO" />
        </Link>
        <NavLink className="items-center nav-link w-full border-l-[8px] border-transparent flex justify-center py-3" to="/">
          <img className={`${theme === 'dark' ? 'invert' : 'invert-0'}`} width={32} height={32} src={DASHBOARD} alt="IMG-DASHBOARD" />
        </NavLink>
        <NavLink className="items-center nav-link w-full border-l-[8px] border-transparent flex justify-center py-3" to="/analytics">
          <img width={32} height={32} src={ANALYTICS} alt="IMG-ANALYTICS" />
        </NavLink>
        <NavLink className="items-center nav-link w-full border-l-[8px] border-transparent flex justify-center py-3" to="/customers">
          <img width={32} height={32} src={CUSTOMER} alt="IMG-CUSTOMER" />
        </NavLink>
        <NavLink className="items-center nav-link w-full border-l-[8px] border-transparent flex justify-center py-3" to="/products">
          <img width={32} height={32} src={PRODUCTS} alt="IMG-PRODUCTS" />
        </NavLink>
        <NavLink className="items-center nav-link w-full border-l-[8px] border-transparent flex justify-center py-3" to="/discount">
          <img width={32} height={32} src={DISCOUNT} alt="IMG-DISCOUNT" />
        </NavLink>
        <NavLink className="items-center nav-link w-full border-l-[8px] border-transparent flex justify-center py-3" to="/help">
          <img width={32} height={32} src={INFO} alt="IMG-HELP" />
        </NavLink>
        <div className="flex flex-col items-center gap-y-4 bg-white rounded-3xl px-2 py-2">
          <button onClick={() => setTheme("light")} className={`w-[40px] aspect-square flex items-center justify-center rounded-full ${theme === 'light' ? 'bg-[#34CAA5]' : 'bg-white'}`}>
            <img className={`${theme === 'light' ? 'w-[32px] height-[32px] invert-0' : 'w-[30px] h-[30px] invert'}`} width={30} height={30} src={SUN} alt="IMG-SUN" />
          </button>
          <button onClick={() => setTheme("dark")} className={`w-[40px] aspect-square flex items-center justify-center rounded-full ${theme === 'dark' ? 'bg-[#34CAA5]' : 'bg-white'}`}>
            <img className={`${theme === 'dark' ? 'w-[32px] height-[32px] invert' : 'w-[30px] h-[30px]'}`} width={30} height={30} src={MOON} alt="IMG-MOON" />
          </button>
        </div>
      </nav>
      <div className="w-full flex flex-col items-center gap-y-2">
        <div className="w-full border-l-[8px] border-transparent flex justify-center py-3">
          <img width={32} height={32} src={BACK} alt="IMG-BACK" className="cursor-pointer" />
        </div>
        <NavLink className="items-center nav-link w-full border-l-[8px] border-transparent flex justify-center py-3" to="/settings">
          <img width={32} height={32} src={SETTINGS} alt="IMG-SETTINGS" />
        </NavLink>
        <NavLink className="items-center nav-link w-full border-l-[8px] border-transparent flex justify-center py-3" to="/logout">
          <img width={32} height={32} src={LOGOUT} alt="IMG-LOGOUT" />
        </NavLink>
      </div>
    </aside>
  )
}

export default Sidebar