import { PencilIcon, StarIcon, TrashIcon } from "@heroicons/react/24/solid";
import NotFound from "../../assets/notFoundImage.png";
import { Confirm } from "../modal";
import { useState } from "react";
import { Book } from "../../services/interfaces";

type AdminProps = {
	img: string;
	title: string;
	author: string;
	onEdit: () => void;
	onDelete: () => void;
};

export function AdminBookCard({
	img,
	title,
	author,
	onEdit,
	onDelete,
}: AdminProps) {
	const [open, setOpen] = useState<boolean>(false);

	const handleDelete = () => {
		setOpen(true);
	};

	return (
		<>
			<div className="flex flex-col">
				<div className="flex justify-center rounded-[24px] shadow-lg w-60 h-96 overflow-hidden">
					<div className="relative">
						<img
							src={img != "" ? img : NotFound}
							alt="book cover"
							className="h-full w-full"
						/>
						<div className="absolute top-2 right-2 flex items-center justify-start gap-1 shadow-md">
							<button
								className="hover:cursor-pointer bg-[#DCF763] border border-[#435058] rounded-full p-1 px-2"
								onClick={onEdit}
							>
								<span className="hidden">Edit</span>
								<PencilIcon
									aria-hidden="true"
									className="size-4"
								></PencilIcon>
							</button>
							<button
								className="hover:cursor-pointer bg-[#DCF763] hover:bg-red-600 hover:text-white border border-[#435058] rounded-full p-1 px-2"
								onClick={handleDelete}
							>
								<span className="hidden">Delete</span>
								<TrashIcon
									aria-hidden="true"
									className="size-4"
								></TrashIcon>
							</button>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center mt-2">
					<h1 className="text-lg font-semibold">{title}</h1>
					<p className="text-sm text-gray-500">{author}</p>
				</div>
			</div>

			<Confirm
				isOpen={open}
				onClose={() => setOpen(false)}
				onConfirm={() => {
					onDelete();
					setOpen(false);
				}}
				title="Delete Book"
				message="Are you sure you want to delete this book?"
			/>
		</>
	);
}

type Props = {
	book: Book;
	onMoreInfo: (book: Book) => void;
};

export function BookCard({ book, onMoreInfo }: Props) {
	return (
		<div
			className="flex flex-col hover:cursor-pointer"
			onClick={() => onMoreInfo(book)}
		>
			<div className="flex justify-center rounded-[24px] shadow-lg w-60 h-96 overflow-hidden">
				<div className="relative">
					<img
						src={book.img != "" ? book.img : NotFound}
						alt="book cover"
						className="h-full w-full"
					/>
					<div className="absolute top-2 left-2 bg-[#DCF763] border border-[#435058] rounded-full flex items-center justify-start p-1 px-2 gap-1 shadow-md">
						<StarIcon className="size-4" />
						<div className="size-4 text-sm font-semibold">
							{book.note}
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center mt-2">
				<h1 className="text-lg font-semibold">{book.title}</h1>
				<p className="text-sm text-gray-500">{book.author}</p>
			</div>
		</div>
	);
}
