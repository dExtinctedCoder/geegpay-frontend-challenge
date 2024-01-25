import DashboardHome from './dashboard'
import Analytics from './analytics'
import Customers from './customers'
import Products from './products'
import Discount from './discount'
import Help from './help'
import Settings from './settings'
import Logout from './logout'
import Sidebar from '../components/dashboard/sidebar'

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

    case 'logout':
      return <Logout />

    default:
      return <></>
  }
}

function Dashboard({ Component }: PropsType) {
  return (
    <div>
      <section>
        <Sidebar />
      </section>
      <section>
        <MainBar Component={Component} />
      </section>
    </div>
  )
}

export default Dashboard
