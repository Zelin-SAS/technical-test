import Sidebar from "../../components/sidebar"
import bookSeeds from "../../services/bookSeeds"
import { AdminBookCard } from "../../components/bookCard"
import { IconedInput } from "../../components/input"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { Select } from "@headlessui/react"

export default function index() {
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
                {bookSeeds.map((book) => (
                <AdminBookCard key={book.id} title={book.title} img={book.image} lastUpdate={book.last_modification} author={book.author} />
                ))}
            </div>
        </div>
    </div>
  )
}