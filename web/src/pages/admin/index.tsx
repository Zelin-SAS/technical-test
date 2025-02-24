import Sidebar from "../../components/sidebar";
import { BookOpenIcon, ChartPieIcon } from "@heroicons/react/24/solid";
import Library from "./sections/library";
import { useEffect, useState } from "react";
import { SidebarSection } from "../../services/interfaces";
import { useData } from "../../components/context";

type UserLogin = {
	name?: string;
	email?: string;
};

export default function Pannel() {
	const { state, dispatch } = useData();
	const [currentPannel, setCurrentPannel] = useState<React.ReactNode>(
		<Library />,
	);
	const [user, setUser] = useState<UserLogin>({} as UserLogin);

	const sidebarSections = [
		{
			title: "Library",
			icon: <BookOpenIcon className="w-6 h-6" />,
			pannel: <Library />,
		},
		{
			title: "Dashbord",
			icon: <ChartPieIcon className="w-6 h-6" />,
			pannel: <div>Dashboard</div>,
		},
	];

	const handleSidebarSectionClick = (section: SidebarSection) => {
		section.pannel && setCurrentPannel(section.pannel);
	};

	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
		window.location.href = "/login";
	};

	useEffect(() => {
		const user = localStorage.getItem("zebook_logged_user");
		if (user) {
			dispatch({ type: "USER_FETCH", payload: JSON.parse(user) });
			setUser(JSON.parse(user));
		} else {
			window.location.href = "/login";
		}
	}, []);

	useEffect(() => {
		if (state.user) {
			setUser({
				name: state.user.username + " " + state.user.userlastname,
				email: state.user.email,
			});
		}
	}, [state.user]);

	useEffect(() => {
		if (!user && !state.user) {
			window.location.href = "/login";
		}
	}, [user]);

	return (
		<>
			{Object.keys(user).length > 0 ? (
				<div className="flex w-full h-screen">
					<Sidebar
						currentUser={user}
						sections={sidebarSections}
						onClickSection={(section) =>
							handleSidebarSectionClick(section)
						}
						onLogout={handleLogout}
					/>
					<div className="flex-grow">{currentPannel}</div>
				</div>
			) : (
				<div>Loading...</div>
			)}
		</>
	);
}
