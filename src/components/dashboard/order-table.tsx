import { useRef } from 'react'
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Link } from "react-router-dom"
import VIEW from '../../assets/icons/document-download.png'
import MARCUSBERGSON from '../../assets/images/marcus-bergson.png'
import JAYDONVACCARO from '../../assets/images/jaydon-vaccaro.png'
import PHILLIPLUBIN from '../../assets/images/phillip-lubin.png'
import COOPERPRESS from '../../assets/images/cooper-press.png'
import COREYSCHELEIFER from '../../assets/images/corey-schleifer.png'
import { convertToPdf } from '../../utils/convertToPdf'
import PdfConverter from '../../utils/pdf-converter'


const orders = [
  {
    name: "Marcus Bergson",
    date: "Nov 15, 2023",
    amount: "80000",
    status: "Paid",
    logo: MARCUSBERGSON,
  },
  {
    name: "Jaydon Vaaccaro",
    date: "Nov 15, 2023",
    amount: "150000",
    status: "Refund",
    logo: JAYDONVACCARO,
  },
  {
    name: "Phillip Lubin",
    date: "Nov 15, 2023",
    amount: "78000",
    status: "Paid",
    logo: PHILLIPLUBIN,
  },
  {
    name: "Cooper Press",
    date: "Nov 15, 2023",
    amount: "100000",
    status: "Refund",
    logo: COOPERPRESS,
  },
  {
    name: "Corey Schleifer",
    date: "Nov 15, 2023",
    amount: "87000",
    status: "Paid",
    logo: COREYSCHELEIFER,
  },
]

function RecentOrder() {
  const contentRef = useRef({} as HTMLDivElement)

  const handleInvoiceClick = (order: typeof orders[0]) => {
    if (order.status.toLowerCase() === 'paid') {
      return convertToPdf(contentRef.current, `${order.name}-invoice`)
    } else {
      return alert(`Could not retreive invoice details (order payment status failed)`)
    }
  }
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }
  const formatDate = (date: string) => {
    const currentDate = new Date(date)
    const dateFormat = currentDate.toLocaleDateString('en-us', options).split(",")[1]
    return dateFormat
  }
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-lg">Last Orders</h4>
        <Link to="" className="text-[#34CAA5] text-lg font-medium hover:underline hover:text-green-500">See All</Link>
      </div>
      <Table className={`dark:text-white text-[#9CA4AB] font-medium`}>
        {/* <TableCaption>Recent orders.</TableCaption> */}
        <TableHeader>
          <TableRow className={`hover:bg-inherit`}>
            <TableHead className="px-0">Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="">Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right px-0" >Invoice</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow className={`dark:text-gray-100 sm:text-sm text-[#0D062D] hover:bg-inherit`} key={order.name + order.date}>
              <TableCell className={`px-0 dark:text-gray-200 text-[#3A3F51] flex items-center`}><img src={order.logo} alt={`${order.name} PROFILE-IMAGE`} width={24} height={24} className="mr-1 hidden lg:block" /> {order.name}</TableCell>
              <TableCell className={`font-medium dark:text-gray-100 text-[#737373]`}><span className="hidden lg:inline">{order.date}</span><span className="lg:hidden">{`${formatDate(order.date)}`}</span></TableCell>
              <TableCell className={``}>${(Intl.NumberFormat('en-us').format(order.amount))}</TableCell>
              <TableCell className={`${order.status.toLowerCase() === 'paid' ? 'text-[#34CAA5]' : 'text-[#ED544E]'} `}>{order.status}</TableCell>
              <TableCell className="text-right px-0 text-sm"><button onClick={() => handleInvoiceClick(order)} className="flex items-center justify-end w-full gap-x-1"><img src={VIEW} alt="IMG-DOWNLOAD" className={`dark:invert invert-0`} /><span className="hidden lg:inline">View</span></button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PdfConverter>
        <div className="bg-black text-white font-bold text-2xl" ref={contentRef}>
          Hello World!
        </div>
      </PdfConverter>
    </div>
  )
}

export default RecentOrder