import Sidebar from "../../components/sidebar"
import { AdminBookCard } from "../../components/bookCard"
import { IconedInput } from "../../components/input"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { Select } from "@headlessui/react"
import { useEffect, useState } from "react"
import { deleteBook, fetchBooks, updateBook } from "../../services/fetcher"
import Drawer from "../../components/drawer"
import { useData } from "../../components/context"
import { Book } from "../../services/interfaces"
import { BookForm } from "../../components/form"


export default function Dashbord() {
    const { state, dispatch } = useData();
    const [books, setBooks] = useState<Book[]>([] as Book[]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    const handleDelete = (id: number) => {
        deleteBook(id.toString()).then(() => {
            setIsOpen(false);
            dispatch({ type: "BOOKS_CLEAR" });
        });
    }

    const handleEdit = (book : Book | null | undefined) => {
        if(book) {
            updateBook(book.id.toString(), book).then(() => {
                setIsOpen(false);
                dispatch({ type: "BOOKS_CLEAR" });

            });
        }
    }

    const fetchData = () => {
        dispatch({ type: "BOOKS_PROCESS_REQUEST"});
        if(state.books.length == books.length && state.books.length > 0) {
            return;
        } else {
            fetchBooks().then((data) => {
                dispatch({ type: "BOOKS_FETCH", payload: data });
                setBooks(state.books);
            });
        }
    }

    useEffect(() => {
        fetchData();
    }, [state.books]);

    return (
        <div className="flex w-full h-screen">
            <Sidebar />
            <div className="flex flex-col h-screen p-4">
                <div className="w-full rounded-lg shadow-sm p-4 mb-4 bg-white">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="flex items-center rounded-md bg-white pl-3 pr-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                <Select name="filter" aria-label="Filter" className="w-32 h-8">
                                    <option value="all">All</option>
                                    <option value="recent">Recent</option>
                                    <option value="popular">Popular</option>
                                </Select>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <IconedInput placeholder="Search for a book">
                                <MagnifyingGlassIcon className="w-4 h-4 text-gray-500"></MagnifyingGlassIcon>
                            </IconedInput>
                        </div>
                    </div>
                </div>
                <div className="h-full p-4 flex flex-wrap rounded-lg shadow-sm gap-7 bg-white overflow-y-scroll">
                    {books.map((book) => (
                    <AdminBookCard 
                        key={book.id}
                        title={book.title}
                        img={book.img}
                        lastUpdate={new Date(book.lastModificationDate)}
                        author={book.author}
                        onEdit={() => { setSelectedBook(book); setIsOpen(!isOpen)}}
                        onDelete={() => handleDelete(book.id)}
                    />
                    ))}
                </div>
            </div>
            <Drawer 
                size="md" 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)} 
                title="Edit book" 
                description="Edit the book details such as title, author, and note. Make sure to provide accurate information to keep the library updated."
            >
                <BookForm book={selectedBook} onCancel={() => setIsOpen(false)} onSave={(book) => handleEdit(book)} />
            </Drawer>
        </div>
    )
}