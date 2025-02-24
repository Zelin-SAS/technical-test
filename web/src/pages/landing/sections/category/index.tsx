import HorizontalCarousel from "../../../../components/carousel";
import {
	AcademicCapIcon,
	BeakerIcon,
	BookOpenIcon,
	GlobeAltIcon,
	LightBulbIcon,
	SparklesIcon,
	UsersIcon,
	VariableIcon,
	ViewColumnsIcon,
} from "@heroicons/react/24/outline";

export default function Category() {
	const Categories = [
		{
			title: "Web Development",
			icon: <ViewColumnsIcon className="w-6 h-6 text-gray-800" />,
			nbItems: 10,
		},
		{
			title: "Data Science",
			icon: <VariableIcon className="w-6 h-6 text-gray-800" />,
			nbItems: 8,
		},
		{
			title: "Mathematics",
			icon: <AcademicCapIcon className="w-6 h-6 text-gray-800" />,
			nbItems: 12,
		},
		{
			title: "Physics",
			icon: <SparklesIcon className="w-6 h-6 text-gray-800" />,
			nbItems: 7,
		},
		{
			title: "Chemistry",
			icon: <BeakerIcon className="w-6 h-6 text-gray-800" />,
			nbItems: 9,
		},
		{
			title: "Biology",
			icon: <UsersIcon className="w-6 h-6 text-gray-800" />,
			nbItems: 11,
		},
		{
			title: "Astronomy",
			icon: <LightBulbIcon className="w-6 h-6 text-gray-800" />,
			nbItems: 5,
		},
		{
			title: "Geology",
			icon: <GlobeAltIcon className="w-6 h-6 text-gray-800" />,
			nbItems: 6,
		},
		{
			title: "Geography",
			icon: <GlobeAltIcon className="w-6 h-6 text-gray-800" />,
			nbItems: 4,
		},
		{
			title: "History",
			icon: <BookOpenIcon className="w-6 h-6 text-gray-800" />,
			nbItems: 15,
		},
	];

	return (
		<div className="relative z-1">
			<HorizontalCarousel title="See by Category">
				<div className="flex gap-6 p-4">
					{Categories.map((category, index) => (
						<div
							key={index}
							className="hover:cursor-pointer flex items-center w-max min-w-60 space-x-4 p-4 bg-white rounded-lg"
						>
							{category.icon}
							<div className="flex flex-col">
								<span className="text-lg font-semibold text-gray-800">
									{category.title}
								</span>
								<span className="text-sm text-gray-600">
									{category.nbItems} items
								</span>
							</div>
						</div>
					))}
				</div>
			</HorizontalCarousel>
		</div>
	);
}
