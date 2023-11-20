import { pokeprops } from "../../utils/other/type";
import pokeball_nc from "../../assets/images/pokeball-nc.png";

function Modal({
	pokedata,
	onClick,
}: {
	pokedata: pokeprops;
	onClick: () => void;
}) {
	console.log("pokedata", pokedata);
	return (
		<div className="modal-container">
			<div className="modal-close-btn" onClick={onClick}>
				X
			</div>
			<div className="pokecard modal">
				<div className="pokecard-title-container modal">
					<div className="modal-subcontainer">
						<img
							className="pokecard-title-img"
							src={pokedata.image}
							alt={pokedata.name}
						/>
						<p className="pokecard-title-id">N° {pokedata.id}</p>
					</div>
					<div className="modal-subcontainer modal-title.end">
						<p className="pokecard-title-name">{pokedata.name}</p>
						<img
							className="pokeball invert modal"
							src={pokeball_nc}
							alt="pokeball"
						/>
					</div>
				</div>
				<div className="modalcard modal-subcontainer">
					<img
						className="pokecard-img modal"
						src={pokedata.image}
						alt={pokedata.name}
					/>
					<div className="pokecard-stats modal">
						<div className="pokecard-stat bottom-line">
							<p className="pokecard-stat-name">Type(s):</p>
							<p className="pokecard-stat-value">
								{pokedata.type.map((t: any) => (
									<span
										className={t.type.name}
										key={pokedata.name + t.type.name}
									>
										{t.type.name}
									</span>
								))}
							</p>
						</div>
						<div className="pokecard-stat bottom-line">
							<p className="pokecard-stat-name">Height:</p>
							<p className="pokecard-stat-value">{pokedata.height}0 cm</p>
						</div>
						<div className="pokecard-stat bottom-line">
							<p className="pokecard-stat-name">Weight:</p>
							<p className="pokecard-stat-value">{pokedata.weight} lbs</p>
						</div>
						{pokedata.stats.map((s: any, i: number) => (
							<div
								className={`pokecard-stat ${
									i !== pokedata.stats.length - 1 && "bottom-line"
								}`}
							>
								<p className="pokecard-stat-name">{s.stat.name}</p>
								<p className="pokecard-stat-value">{s.base_stat}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
