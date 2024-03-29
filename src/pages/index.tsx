import DashboardHome from './dashboard'
import Analytics from './analytics'
import Customers from './customers'
import Products from './products'
import Discount from './discount'
import Help from './help'
import Settings from './settings'
import Notifications from './notifications'
import Logout from './logout'
import Sidebar from '../components/dashboard/sidebar'
import Searchbar from '../components/dashboard/searchbar'

interface PropsType {
  Component: string
}

const MainBar = ({ Component }: PropsType) => {
  switch (Component.toLowerCase()) {
    case 'index':
      return <DashboardHome />

    case 'analytics':
      return <Analytics />

    case 'customers':
      return <Customers />

    case 'products':
      return <Products />

    case 'discount':
      return <Discount />

    case 'help':
      return <Help />

    case 'settings':
      return <Settings />

    case 'notifications':
      return <Notifications />

    case 'logout':
      return <Logout />

    default:
      return <></>
  }
}

function Dashboard({ Component }: PropsType) {
  return (
    <div className={`bg-[#F7F8FA] text-[#454951] dark:bg-gray-900 dark:text-white overflow-y-hidden h-screen grid lg:grid-cols-[100px_1fr]`}>
      <section className="overflow-y-scroll hidden lg:block small-scroll h-screen">
        <Sidebar />
      </section>
      <section className="overflow-y-scroll no-scroll h-screen">
        <div className={`min-h-screen bg-none`}>
          <Searchbar />
          <MainBar Component={Component} />
        </div>
      </section>
    </div>
  )
}

export default Dashboard