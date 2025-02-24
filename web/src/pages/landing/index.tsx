import { createRef, useEffect, useState } from "react";
import Light from "../../components/decoration/light";
import Category from "./sections/category";
import Header from "./sections/header";
import Hero from "./sections/hero";
import { fetchBooks } from "../../services/models";
import { useData } from "../../components/context";
import NewArrival from "./sections/newArrival";
import Shape from "../../components/decoration/shape";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import Drawer from "../../components/drawer";
import { Book } from "../../services/interfaces";
import Stars from "../../components/stars";

export default function Landing() {
	const { state, dispatch } = useData();
	const homeRef = createRef<HTMLDivElement>();
	const categoryRef = createRef<HTMLDivElement>();
	const newArrivalRef = createRef<HTMLDivElement>();
	const contactRef = createRef<HTMLDivElement>();
	const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
	const [selectedBook, setSelectedBook] = useState<Book | null>(null);

	const fetchData = () => {
		dispatch({ type: "BOOKS_PROCESS_REQUEST" });
		if (state.books.length > 0) {
			return;
		} else {
			fetchBooks().then((data) => {
				dispatch({ type: "BOOKS_FETCH", payload: data });
			});
		}
	};

	const handleSeeDetails = (book: Book) => {
		setIsDrawerOpen(true);
		setSelectedBook(book);
	};

	useEffect(() => {
		fetchData();
	}, [state.books]);

	return (
		<div>
			<Header
				sectionRefs={[homeRef, categoryRef, newArrivalRef, contactRef]}
			/>
			<div className="relative isolate px-6 pt-14 lg:px-8" ref={homeRef}>
				<Light colors={["#DCF763", "#BFB7B6"]} position="center" />
				<Hero onMoreInfo={(book) => handleSeeDetails(book)} />
			</div>
			<Shape position="left" rotation={15} />
			<div className="my-20 px-6 lg:px-20 w-full" ref={categoryRef}>
				<Category />
			</div>
			<Light colors={["#DCF763", "#BFB7B6"]} position="left" />
			<div className="my-20 px-6 lg:px-20 w-full" ref={newArrivalRef}>
				<NewArrival onMoreInfo={(book) => handleSeeDetails(book)} />
			</div>
			<div
				className="my-20 px-6 lg:px-20 w-full flex justify-center"
				ref={contactRef}
			>
				<Contact />
			</div>
			<Footer
				navigationRef={[
					homeRef,
					categoryRef,
					newArrivalRef,
					contactRef,
				]}
			/>
			<Drawer
				isOpen={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}
				title="Book Details"
				description="Here you can see the details of the selected book."
				size={"md"}
			>
				<div className="p-4">
					{selectedBook && (
						<div className="space-y-4">
							<h1 className="text-3xl font-bold text-center">
								{selectedBook.title}
							</h1>
							<p className="text-xl text-center text-gray-600">
								{selectedBook.author}
							</p>
							<div className="flex justify-center gap-2">
								<Stars note={selectedBook.note} />
								<span className="text-gray-600 text-md">
									{selectedBook.note}
								</span>
							</div>
							<div className="flex justify-center">
								<img
									src={selectedBook.img}
									alt={selectedBook.title}
									className="w-80 h-120 rounded-lg shadow-lg"
								/>
							</div>
							<p className="text-lg text-justify leading-relaxed">
								{selectedBook.description}
							</p>
						</div>
					)}
				</div>
			</Drawer>
		</div>
	);
}
