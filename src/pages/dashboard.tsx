import RecentOrders from '../components/dashboard/order-table'
import { AnalyticsCard } from '../components/dashboard/card'
import { TopPlatform } from '../components/dashboard/aside-content'
import TOTALORDERICON from '../assets/icons/box-tick.png'
import TOTALREFUNDICON from '../assets/icons/3d-rotate.png'
import TOTALINCOMEICON from '../assets/icons/coin.png'
import AVRSALESICON from '../assets/icons/shopping-cart.png'

function Dashboard() {
  return (
    <div className="px-8 grid lg:grid-cols-[3fr_2fr] gap-x-8">
      <div className="flex flex-col gap-y-10 pt-6 pb-10">
        <section className="w-full aspect-video bg-gray-300 rounded-2xl"></section>
        <section className={`rounded-2xl dark:bg-gray-800 bg-white px-8 py-4`}>
          <RecentOrders />
        </section>
      </div>
      <div className="flex flex-col gap-y-10 pt-6 pb-10">
        <section className='grid grid-cols-2 sm:grid-cols-1 items-center gap-4'>
          <AnalyticsCard title="total order" value={350} percent={23.5} type="profit" icon={TOTALORDERICON} isBg />
          <AnalyticsCard title="total refund" value={270} percent={23.5} type="loss" icon={TOTALREFUNDICON} />
          <AnalyticsCard title="average sales" value={1567} percent={23.5} type="loss" icon={AVRSALESICON} />
          <AnalyticsCard title="total income" value={`$${(350000).toLocaleString()}`} percent={23.5} type="profit" icon={TOTALINCOMEICON} />
        </section>
        <section>
          <TopPlatform />
        </section>
      </div>
    </div>
  )
}

export default Dashboard