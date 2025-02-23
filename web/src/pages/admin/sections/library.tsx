import { AdminBookCard } from "../../../components/bookCard"
import { IconedInput } from "../../../components/input"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { Select } from "@headlessui/react"
import { useEffect, useState } from "react"
import { deleteBook, fetchBooks, updateBook } from "../../../services/fetcher"
import Drawer from "../../../components/drawer"
import { useData } from "../../../components/context"
import { Book } from "../../../services/interfaces"
import { BookForm } from "../../../components/form"
import { Toast } from "../../../components/toast"

export default function Library() {
    const { state, dispatch } = useData();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [books, setBooks] = useState<Book[]>([] as Book[]);
    const [isToasDeleteOpen, setIsToastDeleteOpen] = useState<boolean>(false);
    const [isToasEditOpen, setIsToastEditOpen] = useState<boolean>(false);

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

    const handleDelete = (id: number) => {
        deleteBook(id.toString()).then(() => {
            setIsOpen(false);
            dispatch({ type: "BOOKS_CLEAR" });
            setIsToastDeleteOpen(true);
        });
    }

    const handleEdit = (book : Book | null | undefined) => {
        if(book) {
            updateBook(book.id.toString(), book).then(() => {
                setIsOpen(false);
                dispatch({ type: "BOOKS_CLEAR" });
                setIsToastEditOpen(true);
            });
        }
    }

    const handleSearchBook = (e: React.ChangeEvent<HTMLInputElement>) => {
        const search = e.target.value;
        if(search.length > 0) {
            const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()));
            setBooks(filteredBooks);
        } else {
            setBooks(state.books);
        }
    }

    const handleFillterBook = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const filter = e.target.value;
        switch(filter) {
            case "all":
                setBooks(state.books);
                break;
            case "recent":
                const recentBooks = [...state.books].sort((a: Book, b: Book) => new Date(b.last_modification).getTime() - new Date(a.last_modification).getTime());
                setBooks(recentBooks);
                break;
            case "increasing":
                const increasingBooks = [...state.books].sort((a: Book, b: Book) => a.title.localeCompare(b.title));
                setBooks(increasingBooks);
                break;
            case "decreasing":
                const decreasingBooks = [...state.books].sort((a: Book, b: Book) => b.title.localeCompare(a.title));
                setBooks(decreasingBooks);
                break;
        }
    }


    return (
    <> 
        <div className="flex flex-col w-full  h-screen p-4">
            <div className="w-full rounded-lg shadow-sm p-4 mb-4 bg-white">
                <div className="flex flex-wrap gap-2 justify-between items-center">
                    <div className="flex items-center">
                        <div className="flex items-center rounded-md bg-white pl-3 pr-3 outline-1 -outline-offset-1 outline-gray-300">
                            <Select 
                                name="filter"
                                aria-label="Filter"
                                className="w-32 h-8 focus:outline-none hover:cursor-pointer"
                                onChange={handleFillterBook}
                            >
                                <option value="all">All</option>
                                <option value="recent">Recent</option>
                                <option value="increasing">A~Z</option>
                                <option value="decreasing">Z~A</option>
                            </Select>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <IconedInput placeholder="Search for a book by title" inputChange={handleSearchBook}>
                            <MagnifyingGlassIcon className="w-4 h-4 text-gray-500"></MagnifyingGlassIcon>
                        </IconedInput>
                    </div>
                </div>
            </div>
            { books.length == 0 && <div className="flex justify-center items-center h-screen">No books found</div> }
            { books.length > 0 &&
                <div className="h-full p-4 flex flex-wrap rounded-lg shadow-sm gap-7 bg-white overflow-y-scroll no-scrollbar">
                    {books.map((book) => (
                    <AdminBookCard 
                        key={book.id}
                        title={book.title}
                        img={book.img}
                        lastUpdate={new Date(book.last_modification)}
                        author={book.author}
                        onEdit={() => { setSelectedBook(book); setIsOpen(!isOpen)}}
                        onDelete={() => handleDelete(book.id)}
                    />
                    ))}
                </div>
            }
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
        <Toast isOpen={isToasDeleteOpen} title="Deleted!" message="The book has been deleted successfully" type="success" onClose={() => setIsToastDeleteOpen(false)} />
        <Toast isOpen={isToasEditOpen} title="Successfully saved!" message="The book has been updated successfully" type="success" onClose={() => setIsToastEditOpen(false)} />
    </>
  )
}