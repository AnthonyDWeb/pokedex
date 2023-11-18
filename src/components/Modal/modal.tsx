import { pokeprops } from "../../utils/other/type";
import pokeball_nc from "../../assets/images/pokeball-nc.png";

function Modal({
	pokedata,
	onClick,
}: {
	pokedata: pokeprops;
	onClick: () => void;
}) {
	return (
		<div
			style={{
				display: "flex",
				position: "fixed",
				top: "0",
				left: "0",
				zIndex: "10",
				width: "100%",
				height: "100%",
				alignItems: "center",
				justifyContent: "space-around",
				background:
					"linear-gradient(115deg, #fff1ff 48%, #f3533b 48% 55%, #fb7248 55%)",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<div
				onClick={onClick}
				style={{
					position: "absolute",
					top: "50px",
					right: "50px",
					borderRadius: "50%",
					padding: "5px 10px",
					background: "black",
					color: "white",
					fontWeight: "900",
					cursor: "pointer",
				}}
			>
				X
			</div>
			<div>
				<img
					src={pokedata.image}
					alt={pokedata.name}
					style={{ filter: "drop-shadow(2px 4px 12px black)", marginRight: "20px" }}
				/>
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-around",
					flexDirection: "column",
					width: "450px",
					height: "500px",
				}}
			>
				<div className="stats-container-title">
					<p style={{ width: "180px" }}>N° {pokedata.id}</p>
					<p>{pokedata.name}</p>
					<img src={pokeball_nc} alt="pokeball" className="pokeball-title" />
				</div>
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
				<div className="base-stats">
					<div>
						{pokedata.stats.map((s: any, i: number) => (
							<p className="stats" key={`${s.stat.name}${i}`}>
								{s.stat.name}
							</p>
						))}
					</div>
					<div>
						{pokedata.stats.map((s: any) => (
							<p className="stats" key={s.base_stat}>
								{s.base_stat}
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
