type Props = {
	colors: string[];
	position: "left" | "center" | "right";
	rotation?: number;
};

export default function Light({ colors, position, rotation }: Props) {
	const place = {
		left: {
			left: "left-[calc(50%-11rem)]",
			smLeft: "sm:left-[calc(50%-30rem)]",
		},
		center: {
			left: "left-1/2",
			smLeft: "sm:left-1/2",
		},
		right: {
			left: "right-0",
			smLeft: "sm:right-0",
		},
	};
	return (
		<div
			aria-hidden="true"
			className={`absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl`}
		>
			<div
				style={{
					clipPath: "ellipse(50% 50% at 50% 50%)",
					background: `radial-gradient(circle at center, ${colors[0]} 0%, ${colors[1]} 100%)`,
				}}
				className={`relative ${place[position].left} aspect-1155/678 h-[700px] w-[200px] sm:h-[980px] sm:w-[716px] -translate-x-1/2 opacity-40 ${rotation && `rotate-[${rotation}deg]`} ${place[position].smLeft}`}
			/>
		</div>
	);
}
