import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import NotFound from "../../assets/notFoundImage.png"

interface Props {
  img: string;
  title: string;
  lastUpdate: Date;
  author: string;
}


export function AdminBookCard({img, title, lastUpdate, author} : Props) {
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
                <a className="no-underline text-grey-darker hover:text-blue-dark" href="#">
                    <span className="hidden">Edit</span>
                    <PencilIcon aria-hidden="true" className="size-4"></PencilIcon>
                </a>
                <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                    <span className="hidden">Delete</span>
                    <TrashIcon aria-hidden="true" className="size-4"></TrashIcon>
                </a>
            </div>
        </footer>

    </article>
  )
}