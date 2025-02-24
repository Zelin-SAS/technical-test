import { useRef, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LogoLight from '../../../../assets/zbook-logo-1.svg'
import { useEffect } from 'react';

type Props = {
    sectionRefs: React.RefObject<HTMLDivElement | null>[];
}

export default function Header({ sectionRefs } : Props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [navigation, setNavigation] = useState([    
        { id: 1, name: 'Home', active: true },
        { id:2, name: 'See by Category', active: false },
        { id:3, name: 'New Arrivals', active: false },
        { id:4, name: 'Contact Us', active: false },
    ]);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
            headerRef.current?.classList.add('backdrop-blur-md');
            } else {
            headerRef.current?.classList.remove('backdrop-blur-md');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const index = e.currentTarget.getAttribute('data-id');
        setNavigation(navigation.map((item) => ({ ...item, active: item.id - 1 === Number(index) })));

        if (index !== null && !isNaN(Number(index))) {
            const offset = index === '0' ? 0 : -100;
            const element = sectionRefs[Number(index)]?.current;
            if (element) {
                const top = element.getBoundingClientRect().top + window.scrollY + offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50" ref={headerRef}>
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <a href="#" className="flex items-center">
                    <img src={LogoLight} alt="ZBook Logo" className="h-8 w-auto" />
                    <span className="ml-2 text-xl font-bold text-gray-900">ZeBook</span>
                </a>
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
                <div className="hidden lg:flex lg:gap-x-12 lg:flex-grow lg:justify-center">
                    {navigation.map((item) => (
                        <a onClick={handleNavigation} key={item.name} data-id={item.id - 1} className={`hover:cursor-pointer text-sm/6 font-semibold ${item.active ? 'px-3 rounded-full bg-[#435058] text-[#DCF763]' : ''}`}>
                        {item.name}
                        </a>
                    ))}
                </div>
                <a
					href="/login"
					className="hidden lg:flex gap-2 text-sm/6 font-semibold px-4 py-2 bg-[#DCF763] border border-[#435058] rounded-full items-center"
                >
                    <span data-i18n="log_in">Go to Admin panel</span>
					<span aria-hidden="true">&rarr;</span>
                </a>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <a href="#" className="flex items-center">
                        <img src={LogoLight} alt="ZBook Logo" className="h-8 w-auto" />
                        <span className="ml-2 text-xl font-bold text-gray-900">ZeBook</span>
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
                        Go to Admin panel
                        </a>
                    </div>
                    </div>
                </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}