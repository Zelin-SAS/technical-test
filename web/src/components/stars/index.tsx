import { useState } from "react";

type Props = {
	note: number | undefined;
	interactive?: boolean;
	color?: string;
	onChange?: (note: number) => void;
};

export default function Stars({
	note = 0,
	interactive,
	color,
	onChange,
}: Props) {
	const [score, setScore] = useState(note);

	const handleClick = (newScore: number) => {
		if (!interactive) return;
		setScore(newScore);
		if (onChange) onChange(newScore);
	};

	return (
		<div className="flex gap-1">
			{interactive && (
				<span
					className="hover:cursor-pointer w-2 h-6"
					onClick={() => handleClick(0)}
				></span>
			)}
			{[...Array(5)].map((_, index) => (
				<span
					key={index}
					className={`hover:cursor-pointer ${color && `text-[${color}]`}`}
					onClick={() => handleClick(index + 1)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill={index + 0.5 <= score ? "currentColor" : "none"}
						stroke="currentColor"
						className="size-6"
					>
						<defs>
							<linearGradient id={`half-fill-${index}`}>
								<stop offset="50%" stopColor="currentColor" />
								<stop offset="50%" stopColor="none" />
							</linearGradient>
						</defs>
						<path
							fill={
								index === score + 0.5
									? `url(#half-fill-${index})`
									: index + 0.5 < score
										? "currentColor"
										: "none"
							}
							d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
						/>
					</svg>
				</span>
			))}
			{interactive && (
				<span
					className="hover:cursor-pointer w-2 h-6"
					onClick={() => handleClick(5)}
				></span>
			)}
		</div>
	);
}
