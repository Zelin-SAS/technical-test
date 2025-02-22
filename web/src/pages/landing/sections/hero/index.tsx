import HeroImage from '../../../../assets/hero-image.png'
import Vector from '../../../../assets/vector.svg'
import Shape from '../../../../components/decoration/shape'
import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { useData } from '../../../../components/context'
import { Book } from '../../../../services/interfaces'

export default function Hero() {
    const { state, dispatch } = useData();
    const [books, setBooks] = useState<Book[]>([] as Book[]);

    useEffect(() => {
        dispatch({ type: "BOOKS_PROCESS_REQUEST"});
        setBooks(state.books);
        console.log(state.books);
    }, [state.books]);

    const [selectedBook, setSelectedBook] = useState<number>(1);

    const handleClickItem = (id: number) => {
        setSelectedBook(id);
    }

  return (
    <div className="mx-auto max-w-2xl py-5 sm:py-10 lg:py-20">
        <div className="hidden lg:block absolute left-50 top-0 z-[-1]">
            <img src={Vector} alt="Vector"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 md:gap-50">
            <div className="flex justify-center items-center px-50 md:order-first order-last">
                <img src={HeroImage} alt="Hero Image" className="absolute h-60 mr-30 md:h-100 md:mr-50" />
                <img src={books[selectedBook - 1]?.img} alt="Hero Book" className="absolute h-40 ml-30 md:h-70 md:ml-50" />
            </div>
            <Shape position="right" rotation={0} />
            <div className="flex flex-col justify-center items-center md:items-start space-y-4">
                <h1 className="font-[Montserrat] text-lg md:text-8xl font-extrabold text-gray-900">{books[selectedBook - 1]?.title}</h1>
                <p className="font-[Montserrat] text-sm md:text-lg text-gray-700">{books[selectedBook - 1]?.note}</p>
                <div className="flex space-x-4">
                <button className="px-4 py-2 bg-white rounded-full">More Info</button>
                <button className="px-4 py-2 bg-[#DCF763] border border-[#435058] rounded-full flex items-center">Buy Now
                    <ShoppingBagIcon className="h-4 w-4 ml-2" />
                </button>
                </div>
            </div>
        </div>
        <div className="rounded-[52px] bg-[#ffffff90] w-full lg:w-[calc(100%+300px)] lg:left-[-150px] h-max p-6 top-13 relative z-10">
            <div className="mx-auto max-w-2xl flex flex-col gap-8">
                <div className="flex items-center rounded-full border-2 border-[#43505815] pr-4 bg-gradient-to-r from-[#E6E5D3] to-[#EAFAEF]">
                    <MagnifyingGlassIcon className="h-16 p-4" />
                    <input type="text" placeholder="Search" className="w-full p-2 font-medium focus:outline-none" />
                    <button className="hover:cursor-pointer p-2 font-bold bg-[#435058] px-10 rounded-full text-white">Search</button>
                </div>
                <div className="pt-4 overflow-x-auto inline-flex justify-center gap-4 no-scrollbar">
                    {books.map((book: Book) => (
                        <div key={book.id} className={`hover:cursor-pointer relative ${selectedBook === book.id ? 'bottom-4' : ''}`}>
                            <div onClick={() => handleClickItem(book.id)} className="overflow-x-hidden flex items-end rounded-lg border bg-[#43505808] border-[#43505825] hover:border-[#43505850] h-40 min-w-40 w-40">
                                <img src={book.img} alt="Book" className="pb-0 px-10 pt-10" />
                            </div>
                            <div className="flex justify-center mt-2">
                                <div className={`w-3 h-3 ${selectedBook === book.id ? 'bg-[#DCF763] border border-[#435058]' : 'bg-[#43505815]'} rounded-full`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}