import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import NotFound from "../../assets/notFoundImage.png"
import { Confirm } from "../modal";
import { useState } from "react";

interface Props {
  img: string;
  title: string;
  lastUpdate: Date;
  author: string;
  onEdit: () => void;
  onDelete: () => void;
}


export function AdminBookCard({img, title, lastUpdate, author, onEdit, onDelete } : Props) {
    const [open, setOpen] = useState<boolean>(false);
    
    const handleDelete = () => {
        setOpen(true);
    }

    return (
        <article className="rounded-lg shadow-lg w-max h-max bg-white">
            <a href="#">
                <img alt="Placeholder" className="block h-100 w-80 " src={img != "" ? img : NotFound}></img>
            </a>

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="#">
                        {title}
                    </a>
                </h1>
                <p className="text-grey-darker text-sm hidden">
                    {lastUpdate.toLocaleString()}
                </p>
            </header>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black" href="#">
                    {/* <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"></img> */}
                    <p className="ml-2 text-sm">
                        {author}
                    </p>
                </a>
                <div className="flex space-x-2">
                    <button className="hover:cursor-pointer text-grey-darker hover:text-blue-dark" onClick={onEdit}>
                        <span className="hidden">Edit</span>
                        <PencilIcon aria-hidden="true" className="size-4"></PencilIcon>
                    </button>
                    <button className="hover:cursor-pointer text-grey-darker hover:text-red-dark" onClick={handleDelete}>
                        <span className="hidden">Delete</span>
                        <TrashIcon aria-hidden="true" className="size-4"></TrashIcon>
                    </button>
                </div>
            </footer>

            <Confirm
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={() => { onDelete(); setOpen(false); }}
                title="Delete Book"
                message="Are you sure you want to delete this book?"
            />

        </article>
    )
}