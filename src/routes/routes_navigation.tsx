import { Routes, Route } from "react-router-dom";
import Index from "../views";
import Auth from "../views/auth";

export default function RoutesNavigation() {
	return (
		<Routes>
			<Route path="/pokedex" element={<Index />} />
			<Route path="/auth" element={<Auth />} />
		</Routes>
	);
}
