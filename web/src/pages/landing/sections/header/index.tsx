import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LogoLight from '../../../../assets/zbook-logo-1.svg'

const navigation = [    
    { name: 'Home', href: '#', active: true },
    { name: 'Category', href: '#', active: false },
    { name: 'New Arrivals', href: '#', active: false },
    { name: 'Best Selling Book', href: '#', active: false },
    { name: 'Deal of the Day', href: '#', active: false },
    { name: 'Contact Us', href: '#', active: false },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="flex items-center">
                        <img src={LogoLight} alt="ZBook Logo" className="h-8 w-auto" />
                        <span className="ml-2 text-xl font-bold text-gray-900">ZeBook</span>
                    </a>
                </div>
                <div className="flex lg:hidden">
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="size-6" />
                </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                    <a key={item.name} href={item.href} className={`text-sm/6 font-semibold ${item.active ? 'px-3 rounded-full bg-[#435058] text-[#DCF763]' : ''}`}>
                    {item.name}
                    </a>
                ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button className="text-sm font-semibold text-gray-900 mr-4 bg-[#435058] rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#DCF763" className="h-4 w-4">
                            <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <button className="text-sm font-semibold text-gray-900 mr-4 rounded-full border border-[#F1F2EE] p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>
                </div>
                <a
					href="/login"
					className="hidden lg:flex text-sm/6 font-semibold"
					><span data-i18n="log_in">Log in</span>
					<span aria-hidden="true">&rarr;</span>
                </a>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                        alt=""
                        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        className="h-8 w-auto"
                    />
                    </a>
                    <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                        {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                            {item.name}
                        </a>
                        ))}
                    </div>
                    <div className="py-6">
                        <a
                        href="/login"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                        Log in
                        </a>
                    </div>
                    </div>
                </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}