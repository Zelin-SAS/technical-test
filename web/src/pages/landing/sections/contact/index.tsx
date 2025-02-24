import { BellIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import bookImage from "../../../../assets/book_contact.png";

type Props = {};

export default function Contact({}: Props) {
	return (
		<div className="flex flex-col lg:flex-row justify-center items-center p-5 lg:p-10 bg-[#F7F7F7] rounded-[52px] w-max">
			<img src={bookImage} alt="book" className="md:w-1/2" />
			<div className="flex flex-col justify-center items-center md:items-start md:w-1/2">
				<h1 className="text-3xl font-semibold text-gray-900">
					Join Our Newsletter
				</h1>
				<p className="text-gray-500 mt-2">
					Stay updated with the latest news and exclusive offers.
					Subscribe to our newsletter and never miss out!
				</p>
				<div className="flex mt-10">
					<div className="flex items-center rounded-full border-2 border-[#43505815] md:pr-4 pl-4 md:pl-0 bg-gradient-to-r from-[#E6E5D3] to-[#EAFAEF]">
						<EnvelopeIcon className="h-16 p-4 hidden md:block" />
						<input
							type="text"
							placeholder="Enter email"
							className="w-full p-2 font-medium focus:outline-none"
						/>
						<button className="hover:cursor-pointer p-2 font-bold bg-[#DCF763] border border-[#435058] md:px-10 rounded-full">
							<span className="hidden md:block">Subscrite</span>
							<BellIcon className="h-6 md:hidden" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
