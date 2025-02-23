import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

interface Props {
    children: React.ReactNode;
    title: string;
}

export default function HorizontalCarousel({ children, title }: Props) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
    <div className="flex flex-col w-full">
    <div className="flex justify-between items-center w-full">
        <h2 className="text-3xl font-semibold text-gray-900">{title}</h2>
        <div className="flex space-x-2">
            <button onClick={scrollLeft} className="hover:cursor-pointer p-2 rounded-full bg-white hover:bg-[#DCF763] border hover:border-[#435058] focus:outline-none">
                <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
            </button>
            <button onClick={scrollRight} className="hover:cursor-pointer p-2 rounded-full bg-white hover:bg-[#DCF763] border hover:border-[#435058] focus:outline-none">
                <ArrowRightIcon className="w-6 h-6 text-gray-700" />
            </button>
        </div>
    </div>
      <div className="flex w-full overflow-x-auto no-scrollbar" ref={scrollContainerRef}>
        {children}
      </div>
    </div>
  )
}