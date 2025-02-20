import LogoLight from '../../assets/zbook-logo-1.svg'
import { BookOpenIcon } from '@heroicons/react/24/outline'

export default function Sidebar() {
    // const [mobileSidebarClose, setMobileSidebarClose] = useState(false);

    return (
    <div className="h-full w-full border shadow-sm overflow-hidden bg-white border-stone-200 shadow-stone-950/5 max-w-[280px]">
        <div className="w-[calc(100%-16px)] rounded m-2 mx-4 mb-0 mt-3 h-max">
            <a href="#" className="flex items-center">
                <img src={LogoLight} alt="ZBook Logo" className="h-8 w-auto" />
                <span className="ml-2 text-xl font-bold text-gray-900">ZeBook</span>
            </a>
        </div>
        <div className="w-full h-max rounded p-3">
            <ul className="flex flex-col gap-0.5 min-w-60">
                <li className="flex font-semibold hover:font-bold items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-stone-600 hover:text-stone-800 dark:hover:text-white hover:bg-stone-200 focus:bg-stone-200 focus:text-stone-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
                    <span className="grid place-items-center shrink-0 me-2.5">
                    <BookOpenIcon aria-hidden="true" className="size-6" />
                    </span>Library
                    <span className="grid place-items-center shrink-0 ps-2.5 ms-auto">
                    <div className="relative inline-flex w-max items-center border font-sans font-medium rounded-md text-xs p-0.5 bg-stone-800/10 border-transparent text-stone-800 shadow-none">
                        <span className="font-sans text-current leading-none my-0.5 mx-1.5">14</span>
                    </div>
                    </span>
                </li>
                <li className="flex font-semibold hover:font-bold items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-stone-600 hover:text-stone-800 dark:hover:text-white hover:bg-stone-200 focus:bg-stone-200 focus:text-stone-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
                    <span className="grid place-items-center shrink-0 me-2.5"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="h-[18px] w-[18px]"><g clip-path="url(#clip0_2476_13290)"><path d="M22.1525 3.55321L11.1772 21.0044L9.50686 12.4078L2.00002 7.89795L22.1525 3.55321Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.45557 12.4436L22.1524 3.55321" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                    </span>Sent</li>
                <li className="flex font-semibold hover:font-bold items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-stone-600 hover:text-stone-800 dark:hover:text-white hover:bg-stone-200 focus:bg-stone-200 focus:text-stone-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
                    <span className="grid place-items-center shrink-0 me-2.5"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="h-[18px] w-[18px]"><path d="M4 21.4V2.6C4 2.26863 4.26863 2 4.6 2H16.2515C16.4106 2 16.5632 2.06321 16.6757 2.17574L19.8243 5.32426C19.9368 5.43679 20 5.5894 20 5.74853V21.4C20 21.7314 19.7314 22 19.4 22H4.6C4.26863 22 4 21.7314 4 21.4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 2V5.4C16 5.73137 16.2686 6 16.6 6H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </span>Drafts</li>
                <li className="flex font-semibold hover:font-bold items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-stone-600 hover:text-stone-800 dark:hover:text-white hover:bg-stone-200 focus:bg-stone-200 focus:text-stone-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
                    <span className="grid place-items-center shrink-0 me-2.5"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="h-[18px] w-[18px]"><path d="M9.5 14.5L3 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.00007 9.48528L14.1925 18.6777L15.8895 16.9806L15.4974 13.1944L21.0065 8.5211L15.1568 2.67141L10.4834 8.18034L6.69713 7.78823L5.00007 9.48528Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </span>Pins</li>
                <li className="flex font-semibold hover:font-bold items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-stone-600 hover:text-stone-800 dark:hover:text-white hover:bg-stone-200 focus:bg-stone-200 focus:text-stone-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
                    <span className="grid place-items-center shrink-0 me-2.5"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="h-[18px] w-[18px]"><path d="M7 6L17 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 9L17 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 17H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12H2.6C2.26863 12 2 12.2686 2 12.6V21.4C2 21.7314 2.26863 22 2.6 22H21.4C21.7314 22 22 21.7314 22 21.4V12.6C22 12.2686 21.7314 12 21.4 12H21M3 12V2.6C3 2.26863 3.26863 2 3.6 2H20.4C20.7314 2 21 2.26863 21 2.6V12M3 12H21" stroke="currentColor"></path></svg>
                    </span>Archive</li>
                <li className="flex font-semibold hover:font-bold items-center py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-stone-600 hover:text-stone-800 dark:hover:text-white hover:bg-stone-200 focus:bg-stone-200 focus:text-stone-800 dark:focus:text-white dark:data-[selected=true]:text-white dark:bg-opacity-70">
                    <span className="grid place-items-center shrink-0 me-2.5"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="h-[18px] w-[18px]"><path d="M3.03919 4.2939C3.01449 4.10866 3.0791 3.92338 3.23133 3.81499C3.9272 3.31953 6.3142 2 12 2C17.6858 2 20.0728 3.31952 20.7687 3.81499C20.9209 3.92338 20.9855 4.10866 20.9608 4.2939L19.2616 17.0378C19.0968 18.2744 18.3644 19.3632 17.2813 19.9821L16.9614 20.1649C13.8871 21.9217 10.1129 21.9217 7.03861 20.1649L6.71873 19.9821C5.6356 19.3632 4.90325 18.2744 4.73838 17.0378L3.03919 4.2939Z" stroke="currentColor"></path><path d="M3 5C5.57143 7.66666 18.4286 7.66662 21 5" stroke="currentColor"></path></svg>
                    </span>Trash</li>
            </ul>
        </div>
    </div>
  )
}