// import s from "./Style.module.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../global.css";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function Header() {
	const theme = useContext(ThemeContext);
	console.log(theme.theme);

	function langRequest() {
		fetch("/download-cv", {
			method: "POST",
		})
			.then((response) => response.json())
			.then((data) => {
				// Assuming the response includes the file URL
				const { fileUrl } = data;
				window.open(fileUrl);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
	return (
		<div className="headerContainer">
			<span className="customTop"></span>
			<div className="headerButtons">
				<div className="darkButton">
					<label className="switch">
						<input type="checkbox" onChange={theme.toggleTheme} />
						<span className="slider"></span>
					</label>
					<span className="headerTheme">{theme.theme.toUpperCase()}</span>
				</div>
				<div className="langButton">
					<span className="langText" onClick={langRequest}>
						<span className="turkce">TURKCE</span> 'YE
					</span>
					GEC
				</div>
			</div>
			<div className="headerBanner">
				<div className="headerText">
					<div className="headerTitle">
						<p className="headerUpper">
							<span>Hi!</span>
							<i className="fa-solid fa-hand-spock"></i>
						</p>
						<h2>
							I'm Dilay.
							<span className="nameCustom"></span>
							I'm a frontend developer. I can craft solid and scalable frontend
							products. <br /> Let's meet!{" "}
						</h2>
					</div>
					<div className="headerIcon">
						<i className="fa-brands fa-linkedin"></i>
						<i className="fa-brands fa-github"></i>
					</div>
					<div className="headerFooter">
						<p>
							Currently <span>open</span> to work for{" "}
							<span>Web Design projects</span>.
						</p>
						<p>
							Invite me to join your team{" "}
							<i class="fa-solid fa-arrow-right"></i>{" "}
							<a href="mailto:isik.kirisci@gmail.com">
								isik.kirisci@gmail.com{" "}
							</a>
						</p>
					</div>
				</div>
				<div className="headerFoto">
					<p className="fotoCustom"></p>
				</div>
			</div>
		</div>
	);
}
