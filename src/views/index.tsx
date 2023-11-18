import "../App.css";
import Topbar from "../components/TopBar/topbar";
import Bottombar from "../components/BottomBar/bottombar";
import PokeList from "../components/PokeList/pokelist";

function Index() {
	return (
		<>
			<Topbar />
			<PokeList />
			<Bottombar />
		</>
	);
}

export default Index;
