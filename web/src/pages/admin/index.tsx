import Sidebar from "../../components/sidebar"
import { BookOpenIcon, ChartPieIcon } from "@heroicons/react/24/solid"
import Library from "./sections/library";
import { useState } from "react";
import { SidebarSection } from "../../services/interfaces";

export default function Pannel() {
    const [currentPannel, setCurrentPannel] = useState<React.ReactNode>(<Library />);

    const sidebarSections = [
        { title: "Library", icon: <BookOpenIcon className="w-6 h-6" />, pannel: <Library /> },
        { title: "Dashbord", icon: <ChartPieIcon className="w-6 h-6" />, pannel: <div>Dashboard</div> },
    ];

    const handleSidebarSectionClick = (section: SidebarSection) => {
        section.pannel && setCurrentPannel(section.pannel);
    }

    return (
        <div className="flex w-full h-screen">
            <Sidebar sections={sidebarSections} onClickSection={(section) => handleSidebarSectionClick(section)}/>
            <div className="flex-grow">
                {currentPannel}
            </div>
        </div>
    )
}
