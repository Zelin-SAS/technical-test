import LogoLight from '../../assets/zbook-logo-1.svg'
import { PlusIcon, PowerIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import Drawer from '../drawer'
import { BookForm } from '../form'
import { useState } from 'react';
import { useData } from '../context';
import { Book, SidebarSection } from '../../services/interfaces';
import { createBook } from '../../services/models';
import { UserLogin } from '../../services/interfaces';
import { Toast } from '../toast';
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';

type SidebarProps = {
    sections: SidebarSection[];
    currentUser: UserLogin;
    onClickSection: (section: SidebarSection) => void;
    onLogout: () => void;
}

export default function Sidebar({ sections, currentUser, onClickSection, onLogout }: SidebarProps) {
    const { dispatch } = useData();
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>("Library");
    const [isToasAddOpen, setIsToastAddOpen] = useState<boolean>(false);
    const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const handleAddBook = (book: Book | null | undefined) => {
        if(book?.title && book?.author) {
            createBook(book).then(() => {
                dispatch({ type: "BOOKS_CLEAR"});
                setIsDrawerOpen(false);
                setIsToastAddOpen(true);
            }).catch(() => {
                setError(true);
            });
        } else {
            setError(true);
        }
    }

    return (
    <>
    <div className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-0"} z-2 absolute lg:relative flex flex-col h-full w-full border shadow-sm overflow-hidden bg-white border-stone-200 shadow-stone-950/5 max-w-[280px] transition-transform duration-300 ease-in-out`}>
        <div className="m-2 mx-4 mb-0 mt-3 h-max flex items-center justify-between">
            <a href="#" className="flex items-center">
                <img src={LogoLight} alt="ZBook Logo" className="h-8 w-auto" />
                <span className="ml-2 text-xl font-bold text-gray-900">ZeBook</span>
            </a>
            <button className="hidden lg-block p-2 hover:font-bold hover:cursor-pointer" onClick={() => setIsDrawerOpen(true)}>
                <PlusIcon aria-hidden="true" className="size-6" />
            </button>
        </div>
        <div className="flex-grow w-full h-max rounded p-3">
            <ul className="flex flex-col gap-0.5 min-w-60 mt-6">
                {sections.map((section) => (
                    <li
                        key={section.title}
                        className={`flex font-semibold hover:font-bold items-center py-1.5 px-2.5 rounded-md align-middle select-none hover:cursor-pointer transition-all duration-100 ease-out aria-disabled:opacity-50 aria-disabled:pointer-events-none text-[#435058] ${activeSection === section.title ? "bg-[#DCF763] border border-[#435058]" : ""}`}
                        onClick={() => { onClickSection(section); setActiveSection(section.title) }}
                    >
                        <span className="grid place-items-center shrink-0 me-2.5">
                            {section.icon}
                        </span>
                        <span className="flex-grow">
                            {section.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="mt-auto p-4 border-t border-stone-200 flex items-center justify-between">
            <div className="flex items-center">
            <UserCircleIcon aria-hidden="true"
                className="inline-block size-10 rounded-full ring-2 ring-white" />
            <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{currentUser.name}</p>
                <p className="text-xs text-gray-500">{currentUser.email}</p>
            </div>
            </div>
            <button className="p-2 hover:font-bold hover:cursor-pointer" onClick={onLogout}>
                <PowerIcon aria-hidden="true" className="size-6 text-red-700" />
            </button>
        </div>
    </div>
    <div className="z-1 lg:hidden absolute top-0 right-0 border-stone-200 shadow-stone-950/5">
        <div className="p-8 z-1">
            <a onClick={() => setSidebarOpen(!isSidebarOpen)}>
                { !isSidebarOpen ? <Bars3BottomLeftIcon aria-hidden="true" className="size-6 text-[#435058]" /> : <XMarkIcon aria-hidden="true" className="size-6 text-[#435058]" /> }
            </a>
        </div>
    </div>
    <div className="lg:hidden rounded-full bg-[#DCF763] border border-[#435058] w-15 h-15 fixed bottom-4 left-45 z-1 flex items-center justify-center">
        <button className="hover:cursor-pointer" onClick={() => setIsDrawerOpen(true)}>
            <PlusIcon aria-hidden="true" className="size-6 text-[#435058]" />
        </button>
    </div>


    <Drawer
        isOpen={isDrawerOpen}
        title="Add new book"
        description="Add a new book to the library. Fill in the details below and save to add the book to your collection."
        size="md"
        onClose={() => setIsDrawerOpen(false)}>
        <BookForm book={null} onCancel={() => setIsDrawerOpen(false)} onSave={(book) => handleAddBook(book)} />
    </Drawer>
    <Toast isOpen={isToasAddOpen} title="Successfully saved!" message="The book has been added successfully" type="success" onClose={() => setIsToastAddOpen(false)} />
    <Toast isOpen={error} title="Failed!" message="Something went wrong while adding the book." type="error" onClose={() => setError(false)} />
    </>
  )
}