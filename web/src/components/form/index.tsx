import { useEffect, useState } from "react"
import { Book } from "../../services/interfaces"
import Stars from "../stars"

type Props = {
    book?: Book | null
    onCancel: () => void
    onSave: (book: Book | null | undefined) => void
}

export const BookForm = ({ book, onCancel, onSave } : Props) => {
    const [formBook, setFormBook] = useState<Book | null | undefined>({
        id: 0,
        title: "",
        author: "",
        note: 0,
        description: "",
        last_modification: new Date(),
        img: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if(!formBook) {
            setFormBook({
                id: 0,
                title: "",
                author: "",
                note: 0,
                description: "",
                last_modification: new Date(),
                img: ""
            });
        }
        setFormBook({
            ...formBook,
            [e.target.name]: e.target.value
        } as Book);
    }

    useEffect(() => {
        if(book) {
            setFormBook(book);
        }
    }, [book]);

    return (
    <div className="flex flex-col h-full justify-between">
        <div className=" px-4 sm:px-6 mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
                <label htmlFor="title" className="block text-sm/8 font-bold text-gray-700">
                    Title
                </label>
                <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                        id="title"
                        name="title"
                        type="text"
                        value={formBook?.title}
                        onChange={handleInputChange}
                        placeholder="The Hobbit"
                        required
                        className="block w-full py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/8"
                    />
                    </div>
                </div>
            </div>
            <div className="sm:col-span-6">
                <label htmlFor="author" className="block text-sm/8 font-bold text-gray-700">
                    Author
                </label>
                <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                        id="author"
                        name="author"
                        type="text"
                        value={formBook?.author}
                        onChange={handleInputChange}
                        placeholder="J.R.R. Tolkien"
                        required
                        className="block w-full py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/8"
                    />
                    </div>
                </div>
            </div>
            <div className="sm:col-span-6">
                <label htmlFor="note" className="block text-sm/8 font-bold text-gray-700">
                    Note
                </label>
                <div className="mt-2">
                    <Stars note={formBook?.note} interactive onChange={(note) => setFormBook({...formBook, note, id: formBook?.id || 0, title: formBook?.title || "", author: formBook?.author || "", description: formBook?.description || "", last_modification: formBook?.last_modification || new Date(), img: formBook?.img || ""})} />
                </div>
            </div>
            <div className="sm:col-span-6">
                <label htmlFor="description" className="block text-sm/8 font-bold text-gray-700">
                    Description
                </label>
                <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <textarea
                        id="description"
                        name="description"
                        value={formBook?.description}
                        onChange={handleInputChange}
                        placeholder="A classic fantasy novel"
                        rows={3}
                        className="block w-full py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/8"
                    />
                    </div>
                </div>
            </div>
            <div className="sm:col-span-6">
                <label htmlFor="img" className="block text-sm/8 font-bold text-gray-700">
                    Image URL
                </label>
                <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                        id="img"
                        name="img"
                        type="text"
                        value={formBook?.img}
                        onChange={handleInputChange}
                        placeholder="https://example.com/image.jpg"
                        className="block w-full py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/8"
                    />
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8 flex justify-end gap-4  px-4 sm:px-6 border-t border-gray-200 py-4">
            <button type="button" onClick={onCancel} className="hover:cursor-pointer inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Cancel
            </button>
            <button type="button" onClick={() => onSave(formBook)} className="hover:cursor-pointer inline-flex justify-center py-2 px-4 bg-[#DCF763] border border-[#435058] shadow-sm text-sm font-medium rounded-md text-whit hover:font-bold focus:outline-none focus:ring-2 focus:ring-offset-2">
                Save
            </button>
        </div>
    </div>
  )
}