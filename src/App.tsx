import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./contexts/auth.context";
import { PageContextProvider } from "./contexts/page.context";
import RoutesNavigation from "./routes/routes_navigation";

function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<PageContextProvider>
					<RoutesNavigation />
				</PageContextProvider>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
