import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing, Login, Pannel, NotFound } from "./pages";
import { DataProvider } from "./components/context";

export default function App() {
	return (
		<DataProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/login" element={<Login />} />
					<Route path="/admin" element={<Pannel />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</DataProvider>
	);
}
