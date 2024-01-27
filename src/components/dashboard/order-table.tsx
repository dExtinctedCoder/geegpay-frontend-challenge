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
    quantity: 1,
    status: "Paid",
    logo: MARCUSBERGSON,
  },
  {
    name: "Jaydon Vaaccaro",
    date: "Nov 15, 2023",
    amount: "150000",
    quantity: 1,
    status: "Refund",
    logo: JAYDONVACCARO,
  },
  {
    name: "Phillip Lubin",
    date: "Nov 15, 2023",
    amount: "78000",
    quantity: 1,
    status: "Paid",
    logo: PHILLIPLUBIN,
  },
  {
    name: "Cooper Press",
    date: "Nov 15, 2023",
    amount: "100000",
    quantity: 1,
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
  } as const
  const formatDate = (date: string) => {
    const currentDate = new Date(date)
    const dateFormat = currentDate.toLocaleDateString('en-us', options).split(",")[1]
    return dateFormat
  }
  return (
    <div>
      <section></section>
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-lg">Last Orders</h4>
        <Link to="" className="text-[#34CAA5] text-lg font-medium hover:underline hover:text-green-500">See All</Link>
      </div>
      <Table className={`dark:text-white text-[#9CA4AB] font-medium max-w-full`}>
        {/* <TableCaption>Recent orders.</TableCaption> */}
        <TableHeader>
          <TableRow className={`hover:bg-inherit`}>
            <TableHead className="px-0">Name</TableHead>
            <TableHead className="hidden lg:block">Date</TableHead>
            <TableHead className="">Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right px-0" >Invoice</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <>
              <PdfConverter>
                <div ref={contentRef}>
                  <div>
                    <div className="py-4 pb-0">
                      <div className="px-14 py-6">
                        <table className="w-full border-collapse border-spacing-0">
                          <tbody>
                            <tr>
                              <td className="w-full align-top">
                                <div>
                                  <img src="" className="h-12" />
                                </div>
                              </td>

                              <td className="align-top">
                                <div className="text-sm">
                                  <table className="border-collapse border-spacing-0">
                                    <tbody>
                                      <tr>
                                        <td className="border-r pr-4">
                                          <div>
                                            <p className="whitespace-nowrap text-slate-400 text-right">Date</p>
                                            <p className="whitespace-nowrap font-bold text-main text-right">{order.date}</p>
                                          </div>
                                        </td>
                                        <td className="pl-4">
                                          <div>
                                            <p className="whitespace-nowrap text-slate-400 text-right">Invoice #</p>
                                            <p className="whitespace-nowrap font-bold text-main text-right">BRA-00335</p>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-slate-100 px-14 py-6 text-sm">
                        <table className="w-full border-collapse border-spacing-0">
                          <tbody>
                            <tr>
                              <td className="w-1/2 align-top">
                                <div className="text-sm text-neutral-600">
                                  <p className="font-bold">Dashboard Company INC</p>
                                  <p>Number: 23456789</p>
                                  <p>6622 Lorem Ipsum</p>
                                  <p>Random text, 0000</p>
                                  <p>Nigeria</p>
                                </div>
                              </td>
                              <td className="w-1/2 align-top text-right">
                                <div className="text-sm text-neutral-600">
                                  <p className="font-bold">Customer Details</p>
                                  <p>Name: {order.name}</p>
                                  <p>9552, Lorem Ipsum</p>
                                  <p>Nigeria</p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="px-14 py-10 text-sm text-neutral-700">
                        <table className="w-full border-collapse border-spacing-0">
                          <thead>
                            <tr>
                              <td className="border-b-2 border-main pb-3 pl-3 font-bold text-main">#</td>
                              <td className="border-b-2 border-main pb-3 pl-2 font-bold text-main">Product details</td>
                              <td className="border-b-2 border-main pb-3 pl-2 text-right font-bold text-main">Price</td>
                              <td className="border-b-2 border-main pb-3 pl-2 text-center font-bold text-main">Qty.</td>
                              <td className="border-b-2 border-main pb-3 pl-2 text-right font-bold text-main">Total</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border-b py-3 pl-3">1.</td>
                              <td className="border-b py-3 pl-2">Lorem Ipsum product</td>
                              <td className="border-b py-3 pl-2 text-right">${(Intl.NumberFormat('en-us').format(Number(order.amount)))}</td>
                              <td className="border-b py-3 pl-2 text-center">{order.quantity}</td>
                              <td className="border-b py-3 pl-2 text-right">${(Intl.NumberFormat('en-us').format(Number(order.amount) * order.quantity!))}</td>
                            </tr>
                            <tr>
                              <td colSpan={7}>
                                <table className="w-full border-collapse border-spacing-0">
                                  <tbody>
                                    <tr>
                                      <td className="w-full"></td>
                                      <td>
                                        <table className="w-full border-collapse border-spacing-0">
                                          <tbody>
                                            <tr>
                                              <td className="border-b p-3">
                                                <div className="whitespace-nowrap text-slate-400">Net total:</div>
                                              </td>
                                              <td className="border-b p-3 text-right">
                                                <div className="whitespace-nowrap font-bold text-main">${(Intl.NumberFormat('en-us').format(Number(order.amount) * order.quantity!))}</div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="bg-main p-3">
                                                <div className="whitespace-nowrap font-bold text-white">Total:</div>
                                              </td>
                                              <td className="bg-main p-3 text-right">
                                                <div className="whitespace-nowrap font-bold text-white">${(Intl.NumberFormat('en-us').format(Number(order.amount) * order.quantity!))}</div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="px-14 text-sm text-neutral-700">
                        <p className="text-main font-bold">PAYMENT DETAILS</p>
                        <p>Banks of Banks</p>
                        <p>Bank/Sort Code: 1234567</p>
                        <p>Account Number: 123456678</p>
                        <p>Payment Reference: BRA-00335</p>
                      </div>

                      <div className="px-14 py-10 text-sm text-neutral-700">
                        <p className="text-main font-bold">Notes</p>
                        <p className="italic">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries
                          for previewing layouts and visual mockups.</p>
                      </div>

                      <footer className="bg-slate-100 w-full text-neutral-600 text-center text-xs py-3">
                        dExtinctedCoder
                        <span className="text-slate-300 px-2">|</span>
                        jamiumuhammed011@gmail.com
                        <span className="text-slate-300 px-2">|</span>
                        +234-708-41-959-33
                      </footer>
                    </div>
                  </div>
                </div>
              </PdfConverter>
              <TableRow className={`dark:text-gray-100 w-fit text-sm text-[#0D062D] hover:bg-inherit`} key={order.name + order.date}>
                <TableCell className={`w-fit px-0 dark:text-gray-200 text-[#3A3F51] flex items-center`}><img src={order.logo} alt={`${order.name} PROFILE-IMAGE`} width={24} height={24} className="mr-1 hidden lg:block" /> {order.name}</TableCell>
                <TableCell className={`w-fit font-medium dark:text-gray-100 text-[#737373] hidden lg:block`}><span className="hidden lg:inline">{order.date}</span><span className="lg:hidden">{`${formatDate(order.date)}`}</span></TableCell>
                <TableCell className={`w-fit `}>${(Intl.NumberFormat('en-us').format(Number(order.amount)))}</TableCell>
                <TableCell className={`w-fit ${order.status.toLowerCase() === 'paid' ? 'text-[#34CAA5]' : 'text-[#ED544E]'} `}>{order.status}</TableCell>
                <TableCell className="w-fit text-right px-0 text-sm"><button onClick={() => handleInvoiceClick(order)} className="flex items-center justify-end w-full gap-x-1"><img src={VIEW} alt="IMG-DOWNLOAD" className={`dark:invert invert-0`} /><span className="hidden lg:inline">View</span></button></TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default RecentOrder