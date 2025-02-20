import HeroImage from '../../assets/hero-image.png'
import HeroBook from '../../assets/hero-book.png'

export default function Hero() {
  return (
    <div className="mx-auto max-w-2xl py-5 sm:py-10 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 md:gap-50">
            <div className="flex justify-center items-center px-50 md:order-first order-last">
                <img src={HeroImage} alt="Hero Image" className="absolute h-60 mr-30 md:h-100 md:mr-50" />
                <img src={HeroBook} alt="Hero Book" className="absolute h-40 ml-30 md:h-70 md:ml-50" />
            </div>
            <div className="flex flex-col justify-center items-center md:items-start space-y-4">
                <h1 className="font-[Montserrat] text-lg md:text-8xl font-extrabold text-gray-900">Clive Cussler</h1>
                <p className="font-[Montserrat] text-sm md:text-lg text-gray-700">And Boyd Morrison</p>
                <div className="flex space-x-4">
                <button className="px-4 py-2 bg-white rounded-full">More Info</button>
                <button className="px-4 py-2 bg-[#DCF763] border border-[#435058] rounded-full flex items-center">Buy Now
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}