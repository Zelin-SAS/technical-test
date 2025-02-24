import HeroImage from "../../../../assets/hero-image.png";
import Vector from "../../../../assets/vector.svg";
import Shape from "../../../../components/decoration/shape";
import {
	ArrowLeftIcon,
	ArrowRightIcon,
	MagnifyingGlassIcon,
	ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState, useRef } from "react";
import { useData } from "../../../../components/context";
import { Book } from "../../../../services/interfaces";

export default function Hero({
	onMoreInfo,
}: {
	onMoreInfo: (book: Book) => void;
}) {
	const { state, dispatch } = useData();
	const [books, setBooks] = useState<Book[]>([] as Book[]);
	const [selectedBook, setSelectedBook] = useState<number>(1);
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const searchInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		dispatch({ type: "BOOKS_PROCESS_REQUEST" });
		setBooks(state.books);
		console.log(state.books);
	}, [state.books]);

	const handleClickItem = (id: number) => {
		setSelectedBook(id);
		scrollTo(id);
	};

	const scrollLeft = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({
				left: -300,
				behavior: "smooth",
			});
		}
	};

	const scrollRight = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({
				left: 300,
				behavior: "smooth",
			});
		}
	};

	const scrollTo = (id: number) => {
		if (scrollContainerRef.current) {
			const selectedElement = scrollContainerRef.current.querySelector(
				`[data-id='${id}']`,
			);
			if (selectedElement) {
				selectedElement.scrollIntoView({
					behavior: "smooth",
					block: "nearest",
					inline: "center",
				});
			}
		}
	};

	const handleSearch = () => {
		if (searchInputRef.current) {
			const search = searchInputRef.current.value;
			if (search.length > 0) {
				const filteredBooks = books.filter((book) =>
					book.title.toLowerCase().includes(search.toLowerCase()),
				);
				setSelectedBook(filteredBooks[0].id);
				scrollTo(filteredBooks[0].id);
			}
			searchInputRef.current.value = "";
		}
	};

	return (
		<div className="mx-auto max-w-2xl py-5 sm:py-10 lg:py-20">
			<div className="hidden lg:block absolute left-50 top-0 z-[-1]">
				<img src={Vector} alt="Vector" />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-32 md:gap-50">
				<div className="flex justify-center items-center px-50 md:order-first order-last">
					<img
						src={HeroImage}
						alt="Hero Image"
						className="absolute h-60 mr-30 md:h-100 md:mr-50"
					/>
					<img
						src={books[selectedBook - 1]?.img}
						alt="Hero Book"
						className="absolute h-40 ml-30 md:h-70 md:ml-50"
					/>
				</div>
				<Shape position="right" rotation={0} />
				<div className="flex flex-col justify-center items-center md:items-start space-y-4">
					<h1 className="font-[Montserrat] text-lg md:text-8xl font-extrabold text-gray-900 lg:h-[195px] lg:overflow-hidden">
						{books[selectedBook - 1]?.title}
					</h1>
					<p className="font-[Montserrat] text-sm md:text-lg text-gray-700 lg:whitespace-nowrap">
						{books[selectedBook - 1]?.description.length > 50
							? `${books[selectedBook - 1]?.description.substring(0, 50)}...`
							: books[selectedBook - 1]?.description}
					</p>
					<div className="flex space-x-4">
						<button
							className="px-4 py-2 bg-white rounded-full hover:cursor-pointer hover:border border-gray-400"
							onClick={() => onMoreInfo(books[selectedBook - 1])}
						>
							More Info
						</button>
						<button className="px-4 py-2 bg-[#DCF763] border border-[#435058] rounded-full flex items-center">
							Buy Now
							<ShoppingBagIcon className="h-4 w-4 ml-2" />
						</button>
					</div>
				</div>
			</div>
			<div className="rounded-[52px] bg-[#ffffff90] w-full lg:w-[calc(100%+300px)] lg:left-[-150px] h-max p-6 top-13 relative z-10">
				<div className="mx-auto max-w-2xl flex flex-col gap-8">
					<div className="flex items-center rounded-full border-2 border-[#43505815] md:pr-4 pl-4 md:pl-0 bg-gradient-to-r from-[#E6E5D3] to-[#EAFAEF]">
						<MagnifyingGlassIcon className="h-16 p-4 hidden md:block" />
						<input
							ref={searchInputRef}
							type="text"
							placeholder="Search"
							className="w-full p-2 font-medium focus:outline-none"
						/>
						<button
							onClick={handleSearch}
							className="hover:cursor-pointer p-2 font-bold bg-[#435058] md:px-10 rounded-full text-white"
						>
							<span className="hidden md:block">Search</span>
							<MagnifyingGlassIcon className="h-6 md:hidden" />
						</button>
					</div>

					<div
						className="pt-4 overflow-x-auto inline-flex justify-start gap-4 no-scrollbar"
						ref={scrollContainerRef}
					>
						<div
							onClick={scrollLeft}
							className="opacity-5 hover:opacity-100 hidden lg:block z-1 hover:cursor-pointer p-2 hover:bg-[#DCF763] border hover:border-[#435058] bg-[#DCF763] rounded-full absolute top-50 left-30"
						>
							<ArrowLeftIcon className="h-6 w-6 text-gray-700" />
						</div>
						<div
							onClick={scrollRight}
							className="opacity-5 hover:opacity-100 hidden lg:block z-1 hover:cursor-pointer p-2 hover:bg-[#DCF763] border hover:border-[#435058] bg-[#DCF763] rounded-full absolute top-50 right-30"
						>
							<ArrowRightIcon className="h-6 w-6 text-gray-700" />
						</div>
						{books.map((book: Book) => (
							<div
								key={book.id}
								data-id={book.id}
								className={`hover:cursor-pointer relative ${selectedBook === book.id ? "bottom-4" : ""}`}
							>
								<div
									onClick={() => handleClickItem(book.id)}
									className="overflow-x-hidden flex items-end rounded-lg border bg-[#43505808] border-[#43505825] hover:border-[#43505850] h-40 min-w-40 w-40"
								>
									<img
										src={book.img}
										alt="Book"
										className="pb-0 px-10 pt-10"
									/>
								</div>
								<div className="flex justify-center mt-2">
									<div
										className={`w-3 h-3 ${selectedBook === book.id ? "bg-[#DCF763] border border-[#435058]" : "bg-[#43505815]"} rounded-full`}
									></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
