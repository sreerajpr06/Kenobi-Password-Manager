
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentReportIcon,
  HomeIcon,
  MenuAlt1Icon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/react/outline'
import {
  CashIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  OfficeBuildingIcon,
  SearchIcon,
  GlobeAltIcon
} from '@heroicons/react/solid'
import whiteflame from "../assets/images/whiteflame.png";
import profileicon from "../assets/images/profile2.png";

const navigation = [
//   { name: 'Home', href: '#', icon: HomeIcon, current: true },
//   { name: 'History', href: '#', icon: ClockIcon, current: false },
//   { name: 'Balances', href: '#', icon: ScaleIcon, current: false },
  //{ name: 'Cards', href: '#', icon: CreditCardIcon, current: false },
//   { name: 'Recipients', href: '#', icon: UserGroupIcon, current: false },
//   { name: 'Reports', href: '#', icon: DocumentReportIcon, current: false },
]
const secondaryNavigation = [
  { name: 'Passwords', href: '#', icon: ShieldCheckIcon },  
  { name: 'Settings', href: '#', icon: CogIcon },

]
const cards = [
  { name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
  // More items...
]
const transactions = [
  {
    id: 1,
    name: 'www.google.com',
    href: '#',
    amount: 'uwjivji',
    
    status: 'success',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },
  {
    id: 2,
    name: 'www.facebook.com',
    href: '#',
    amount: 'djkvnalksnd',
  
    status: 'success',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },
  // More transactions...
]
const statusStyles = {
  success: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-gray-100 text-gray-800',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="h-screen flex overflow-hidden bg-orange">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 lg:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-2">
                <img
                  className="h-8 w-auto"
                  src={whiteflame}
                  alt="whiteflame logo"
                />
              </div>
              <nav className="mt-5 flex-shrink-0 h-full  overflow-y-auto" aria-label="Sidebar">
                {/* <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-red text-white' : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <item.icon className="mr-4 h-6 w-6 text-cyan-200" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div> */}
                <div className="mt-6 pt-6">
                  <div className="px-2 space-y-1">
                    {secondaryNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                      >
                        <item.icon className="mr-4 h-6 w-6 text-cyan-200" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop lg:border-2 lg:border-darkgrey */}
      <div className="hidden lg:flex p-2 lg:flex-shrink-0">
        <div className="flex flex-col w-72">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow bg-orange pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center bg-orange text-3xl flex-shrink-0 px-2 py-0 mr-4">
              <img
                className="h-20 w-auto"
                src={whiteflame}
                alt="Easywire logo"
              />Dashboard
            </div>
            <nav className="mt-5 flex-1 flex flex-col overflow-y-auto" aria-label="Sidebar">
              <div className="px-4 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-cyan-800 text-white' : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                      'group flex items-center px-4 py-2 text-sm leading-6 font-medium rounded-md'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <item.icon className="mr-4 h-6 w-6 text-cyan-200" aria-hidden="true" />
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-6 pt-6">
                <div className="px-2 space-y-1">
                  {secondaryNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                    >
                      <item.icon className="mr-4 h-6 w-6 text-cyan-200" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-lightgrey overflow-auto focus:outline-none">
       
        <main className="flex-1 relative pt-4 pb-4 z-0 overflow-y-auto ">
          {/* Page header */}
          <div className="bg-lightgrey border-b border-darkgrey">
            <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
              <div className="py-4 md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                  {/* Profile */}
                  <div className="flex items-center">
                    <img
                      className="hidden h-16 w-16 rounded-full sm:block"
                      src={profileicon}
                      alt="profileimage"
                    />
                    <div>
                      <div className="flex items-center">
                        
                        <h1 className="ml-3 text-2xl font-bold leading-7 text-white sm:leading-9 sm:truncate">
                          lazarantony@gmail.com
                        </h1>
                      </div>
                      
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          <div className="mt-8 bg-lightgrey">
           
                   
            <h2 className="max-w-6xl mx-auto mt-4 mb-6 px-4 text-2xl leading-6 font-medium text-white tracking-wider sm:px-6 lg:px-8 ">
              Passwords
            </h2>

            {/* Activity list (smallest breakpoint only) */}
            <div className="shadow sm:hidden ">
              <ul className="mt-2 divide-y divide-darkgrey border-red overflow-hidden sm:hidden">
                {transactions.map((transaction) => (
                  <li key={transaction.id}>
                    <a href={transaction.href} className="block px-4 py-4 bg-red hover:bg-gray-50">
                      <span className="flex items-center space-x-4">
                        <span className="flex-1 flex space-x-2 truncate">
                          <CashIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <span className="flex flex-col text-gray-500 text-sm truncate">
                            <span className="truncate">{transaction.name}</span>
                            <span>
                              <span className="text-gray-900 font-medium">{transaction.amount}</span>{' '}
                              {transaction.currency}
                            </span>
                            <time dateTime={transaction.datetime}>{transaction.date}</time>
                          </span>
                        </span>
                        <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <nav
                className="bg-white px-4 py-3 flex items-center justify-between border-t border-red"
                aria-label="Pagination"
              >
                <div className="flex-1 flex justify-between">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                  >
                    Next
                  </a>
                </div>
              </nav>
            </div>

            {/* Activity table (small breakpoint and up) */}
            <div className="hidden sm:block">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col mt-2">
                  <div className="align-middle min-w-full overflow-x-auto overflow-hidden border-2 border-black sm:rounded-sm">
                    <table className="min-w-full divide-y-2 divide-black bg-darkgrey">
                      <thead>
                        <tr>
                          <th className="px-6 py-5 text-left text-md font-xs text-white uppercase ">
                            Website
                          </th>
                          <th className="px-6 py-5 text-right text-md font-xs text-white uppercase ">
                            Password
                          </th>
                         
                          <th className="px-6 py-5  text-right text-md font-xs text-white uppercase">
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-black divide-y-2 divide-black">
                        {transactions.map((transaction) => (
                          <tr key={transaction.id} className="bg-white">
                            <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-md text-gray-900">
                              <div className="flex">
                                <a href={transaction.href} className="group inline-flex space-x-2 truncate text-md">
                                  <GlobeAltIcon
                                    className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                  <p className="text-gray-500 truncate group-hover:text-gray-900">{transaction.name}</p>
                                </a>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-left whitespace-nowrap text-md text-gray-500">
                              <span className="text-gray-900 font-medium">{transaction.amount} </span>
                              
                            </td>
                            
                            <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                              <time dateTime={transaction.datetime}>{transaction.date}</time>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {/* Pagination */}
                    <nav
                      className="bg-darkgrey px-4 py-3 flex items-center justify-between border-t border-black sm:px-6"
                      aria-label="Pagination"
                    >
                      <div className="hidden sm:block">
                        <p className="text-sm text-white">
                          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                          <span className="font-medium">20</span> results
                        </p>
                      </div>
                      <div className="flex-1 flex justify-between sm:justify-end">
                        <a
                          href="#"
                          className="relative inline-flex items-center px-4 py-2 border border-black text-sm font-medium rounded-md text-white bg-darkgrey hover:bg-gray-50"
                        >
                          Previous
                        </a>
                        <a
                          href="#"
                          className="ml-3 relative inline-flex items-center px-4 py-2 border border-black text-sm font-medium rounded-md text-white bg-darkgrey hover:bg-gray-50"
                        >
                          Next
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
