import { useState } from "react";
import { pokeprops } from "../../utils/other/type";
import "./pokemoncard.css";
import Modal from "../Modal/modal";
import pokeballNC from "../../assets/images/pokeball-nc.png";

function PokemonCard({ pokedata }: { pokedata: pokeprops }) {
	const [isShown, setIsShown] = useState(false);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const mondalHandler = () => setModalIsOpen(true);
	const closeMondalHandler = () => setModalIsOpen(false);

	return (
		<div className="container">
			{isShown && (
				<div className="show">
					<div className="stats-container-title">
						<img
							src={pokedata.image}
							alt={pokedata.name}
							className="image-title"
						/>
						<p style={{ width: "180px" }}>N° {pokedata.id}</p>
						<p>{pokedata.name}</p>
						<img src={pokeballNC} alt="pokeball" className="pokeball-title" />
					</div>
					<img src={pokedata.image} alt={pokedata.name} />
					<div style={{ display: "flex", width: "100%" }}>
						<div
							style={{ background: "#dbdbd9", textAlign: "center" }}
							className="stats-left"
						>
							<p>Type:</p>
							<p>Height:</p>
							<p>Weight:</p>
						</div>
						<div style={{ background: "#ffffff" }} className="stats-right">
							<p>{pokedata.type ? pokedata.type : "-no data-"}</p>
							<p>{pokedata.height}0 cm</p>
							<p>{pokedata.weight} lbs</p>
						</div>
					</div>
				</div>
			)}
			<div
				className="right"
				onMouseEnter={() => setIsShown(true)}
				onMouseLeave={() => setIsShown(false)}
				onClick={() => mondalHandler()}
			>
				<img
					src={pokedata.image}
					alt={pokedata.name}
					style={{ maxHeight: "50px", marginRight: "10px", width: "50px" }}
				/>
				<p style={{ width: "270px" }}>N° {pokedata.id}</p>
				<p>{pokedata.name}</p>
				<img
					src={pokeballNC}
					alt="pokeball"
					style={{ width: "40px", marginLeft: "10px" }}
				/>
			</div>
			{modalIsOpen && (
				<Modal pokedata={pokedata} onClick={closeMondalHandler} />
			)}
		</div>
	);
}

export default PokemonCard;
