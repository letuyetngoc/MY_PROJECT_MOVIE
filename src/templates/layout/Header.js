/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div className='fixed w-full opacity-90 z-10 shadow-md'>
            <Popover className="relative bg-gray-200 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <NavLink to="/home">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt=""
                                />
                            </NavLink>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden md:flex space-x-10">
                            <NavLink to="/phim" className="text-base font-medium text-gray-900 hover:text-indigo-600">
                                Phim
                            </NavLink>
                            <NavLink to="/cumrap" className="text-base font-medium text-gray-900 hover:text-indigo-600">
                                Cụm rạp
                            </NavLink>

                            <NavLink to="/dangki" className="text-base font-medium text-gray-900 hover:text-indigo-600">
                                Đăng kí
                            </NavLink>
                            <NavLink to="/dangnhap" className="text-base font-medium text-gray-900 hover:text-indigo-600">
                                Đăng nhập
                            </NavLink>
                        </Popover.Group>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <NavLink to="/dangNhap" className="whitespace-nowrap text-base font-medium text-gray-900 hover:text-indigo-600">
                                Sign in
                            </NavLink>
                            <a
                                href="#"
                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>
                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <NavLink to="/home">
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt="Workflow"
                                        />
                                    </NavLink>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>

                            <div className="py-6 px-5 space-y-6">
                                <div className="grid grid-cols-1 gap-y-4 gap-x-8">

                                    <NavLink to="/phim" className=' hover:bg-gray-200'>
                                        <Popover.Button className="text-base font-medium text-gray-900 hover:text-indigo-600">
                                            Phim
                                        </Popover.Button>
                                    </NavLink>
                                    <NavLink to="/cumrap" className=' hover:bg-gray-200' >
                                        <Popover.Button className="text-base font-medium text-gray-900 hover:text-indigo-600">
                                            Cụm rạp
                                        </Popover.Button>
                                    </NavLink>

                                    <NavLink to="/dangki" className=' hover:bg-gray-200'>
                                        <Popover.Button className="text-base font-medium text-gray-900 hover:text-indigo-600">
                                            Đăng kí
                                        </Popover.Button>
                                    </NavLink>
                                    <NavLink to="/dangnhap" className=' hover:bg-gray-200'>
                                        <Popover.Button className="text-base font-medium text-gray-900 hover:text-indigo-600">
                                            Đăng nhập
                                        </Popover.Button>
                                    </NavLink>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                    >
                                        Sign up
                                    </a>
                                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                                        Existing customer?{' '}
                                        <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                            Sign in
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    )
}
