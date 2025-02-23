import { useEffect, useState } from "react";
import HorizontalCarousel from "../../../../components/carousel"
import { Book } from "../../../../services/interfaces";
import { useData } from "../../../../components/context";
import { BookCard } from "../../../../components/bookCard";

type Props = {}

export default function NewArrival({}: Props) {
    const { state, dispatch } = useData();
    const [books, setBooks] = useState<Book[]>([] as Book[]);

    useEffect(() => {
        dispatch({ type: "BOOKS_PROCESS_REQUEST"});
        if (state.books) {
            const sortedBooks = [...state.books].sort((a: Book, b: Book) => new Date(b.last_modification).getTime() - new Date(a.last_modification).getTime());
            setBooks(sortedBooks.slice(0, 10));
        }
    }, [state.books]);


    return (
        <div className="relative z-1">
            <HorizontalCarousel title="New Arrivals">
                <div className="flex gap-6 p-4">
                    {books.map((book: Book) => (
                        <BookCard key={book.id} title={book.title} author={book.author} note={book.note} img={book.img} />
                    ))}
                </div>
            </HorizontalCarousel>
        </div>
    )
}