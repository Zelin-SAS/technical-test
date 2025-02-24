import { Input } from "@headlessui/react";
import { ReactNode } from "react";

interface IconedInputProps {
	children: ReactNode;
	id?: string;
	type?: string;
	placeholder?: string;
	inputChange?: (e: any) => void;
}

export function IconedInput({
	children,
	id,
	type,
	placeholder,
	inputChange,
}: IconedInputProps) {
	return (
		<div className="flex items-center rounded-md bg-white pl-3 pr-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
			<Input
				id={id ? id : "input"}
				name={id ? id : "input"}
				type={type ? type : "text"}
				placeholder={placeholder ? placeholder : ""}
				onChange={inputChange}
				className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
			/>
			<div className="grid shrink-0 grid-cols-1 focus-within:relative">
				{children}
			</div>
		</div>
	);
}
