import { SheetClose, SheetHeader } from '../ui/sheet';
import { NavLink } from 'react-router-dom';
import BACK from '../../assets/icons/arrow-right.png'
import SETTINGS from '../../assets/icons/setting-2.png'
import LOGOUT from '../../assets/icons/logout.png'
import DASHBOARD from '../../assets/icons/dashboard.png'
import ANALYTICS from '../../assets/icons/trend-up.png'
import CUSTOMER from '../../assets/icons/profile-2user.png'
import PRODUCTS from '../../assets/icons/box.png'
import DISCOUNT from '../../assets/icons/discount-shape.png'
import INFO from '../../assets/icons/info-circle.png'
import PROFILEIMAGE from '../../assets/images/profile.png'

const MenuSidebar = () => {
  return (
    <>
      <SheetHeader className='text-6xl'>
        <div className='items-center flex justify-center mb-8'>
          <img src={PROFILEIMAGE} alt="IMG-PROFILE-IMAGE" className='w-12 h-12' />
        </div>
      </SheetHeader>
      <nav className="w-full flex flex-col items-start justify-start">
        <SheetClose asChild>
          <NavLink className="nav-link-mobile flex gap-x-4 text-2xl font-semibold hover:bg-green-100 w-full border-l-[8px] border-transparent px-8 py-5" to="/">
            <img className={`dark:invert invert-0`} width={32} height={32} src={DASHBOARD} alt="IMG-DASHBOARD" />
            <p className="text-gray-600 dark:text-gray-300">Dashboard</p>
          </NavLink>
        </SheetClose>

        <SheetClose asChild>
          <NavLink className="nav-link-mobile flex gap-x-4 text-2xl font-semibold hover:bg-green-100 w-full border-l-[8px] border-transparent px-8 py-5" to="/analytics">
            <img width={32} height={32} src={ANALYTICS} alt="IMG-ANALYTICS" />
            <p className="text-gray-600 dark:text-gray-300">Analytics</p>
          </NavLink>
        </SheetClose>

        <SheetClose asChild>
          <NavLink className="nav-link-mobile flex gap-x-4 text-2xl font-semibold hover:bg-green-100 w-full border-l-[8px] border-transparent px-8 py-5" to="/customers">
            <img width={32} height={32} src={CUSTOMER} alt="IMG-CUSTOMER" />
            <p className="text-gray-600 dark:text-gray-300">Customers</p>
          </NavLink>
        </SheetClose>

        <SheetClose asChild>
          <NavLink className="nav-link-mobile flex gap-x-4 text-2xl font-semibold hover:bg-green-100 w-full border-l-[8px] border-transparent px-8 py-5" to="/products">
            <img width={32} height={32} src={PRODUCTS} alt="IMG-PRODUCTS" />
            <p className="text-gray-600 dark:text-gray-300">Products</p>
          </NavLink>
        </SheetClose>

        <SheetClose asChild>
          <NavLink className="nav-link-mobile flex gap-x-4 text-2xl font-semibold hover:bg-green-100 w-full border-l-[8px] border-transparent px-8 py-5" to="/discount">
            <img width={32} height={32} src={DISCOUNT} alt="IMG-DISCOUNT" />
            <p className="text-gray-600 dark:text-gray-300">Discount</p>
          </NavLink>
        </SheetClose>

        <SheetClose asChild>
          <NavLink className="nav-link-mobile flex gap-x-4 text-2xl font-semibold hover:bg-green-100 w-full border-l-[8px] border-transparent px-8 py-5" to="/help">
            <img width={32} height={32} src={INFO} alt="IMG-HELP" />
            <p className="text-gray-600 dark:text-gray-300">Help & Support</p>
          </NavLink>
        </SheetClose>
      </nav>
      <div className="w-full flex flex-col  gap-y-2">
        <div className="w-full flex gap-x-4 text-2xl font-semibold border-l-[8px] border-transparent px-8 py-5">
          <img width={32} height={32} src={BACK} alt="IMG-BACK" className="cursor-pointer" />
          <p className="text-gray-600 dark:text-gray-300">Back</p>
        </div>
        <SheetClose asChild>
          <NavLink className="nav-link-mobile flex gap-x-4 text-2xl font-semibold hover:bg-green-100 w-full border-l-[8px] border-transparent px-8 py-5" to="/settings">
            <img width={32} height={32} src={SETTINGS} alt="IMG-SETTINGS" />
            <p className="text-gray-600 dark:text-gray-300">Settings</p>
          </NavLink>
        </SheetClose>

        <SheetClose asChild>
          <NavLink className="nav-link-mobile flex gap-x-4 text-2xl font-semibold hover:bg-green-100 w-full border-l-[8px] border-transparent px-8 py-5" to="/logout">
            <img width={32} height={32} src={LOGOUT} alt="IMG-LOGOUT" />
            <p className="text-gray-600 dark:text-gray-300">Logout</p>
          </NavLink>
        </SheetClose>

      </div>
    </>
  )
}

export default MenuSidebar