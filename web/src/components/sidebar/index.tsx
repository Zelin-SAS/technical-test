import LogoLight from '../../assets/zbook-logo-1.svg'
import { PlusIcon, PowerIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import Drawer from '../drawer'
import { BookForm } from '../form'
import { useState } from 'react';
import { useData } from '../context';
import { Book, SidebarSection } from '../../services/interfaces';
import { createBook } from '../../services/fetcher';

interface SidebarProps {
    sections: SidebarSection[];
    onClickSection: (section: SidebarSection) => void;
}

export default function Sidebar({ sections, onClickSection }: SidebarProps) {
    const { dispatch } = useData();
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>("Library");

    const handleAddBook = (book: Book | null | undefined) => {
        if(book) {
            createBook(book).then(() => {
                dispatch({ type: "BOOKS_CLEAR"});
                setIsDrawerOpen(false);
            });
        }
    }

    const handleLogout = () => {
        dispatch({ type: "LOGOUT"});
        window.location.href = "/login";
    };

    return (
    <div className="flex flex-col h-full w-full border shadow-sm overflow-hidden bg-white border-stone-200 shadow-stone-950/5 max-w-[280px]">
        <div className="m-2 mx-4 mb-0 mt-3 h-max flex items-center justify-between">
            <a href="#" className="flex items-center">
                <img src={LogoLight} alt="ZBook Logo" className="h-8 w-auto" />
                <span className="ml-2 text-xl font-bold text-gray-900">ZeBook</span>
            </a>
            <button className="p-2 hover:font-bold hover:cursor-pointer" onClick={() => setIsDrawerOpen(true)}>
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
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">john.doe@example.com</p>
            </div>
            </div>
            <button className="p-2 hover:font-bold hover:cursor-pointer" onClick={handleLogout}>
                <PowerIcon aria-hidden="true" className="size-6 text-red-700" />
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
    </div>
  )
}