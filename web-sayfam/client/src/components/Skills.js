import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import "../global.css";

import react from "../imgs/icons/react.png";
import js from "../imgs/icons/js.png";
import node from "../imgs/icons/node.png";
import redux from "../imgs/icons/redux.png";
import vscode from "../imgs/icons/vscode.png";
import figma from "../imgs/icons/figma.png";

export default function Skills() {
	const theme = useContext(ThemeContext);
	console.log(theme.theme);
	return (
		<div className="skillsContainer">
			<span className="skillsCustom3"></span>
			<div className="skillsTitle">
				<h1>Skills</h1>
				<img src="" alt="" />
				<span className="skillsCustom1"></span>
				<span className="skillsCustom2"></span>
			</div>
			<div className="skillsIcons">
				<div className="skillsIcon">
					<img src={js} alt="javascript" />
					JAVASCRIPT
				</div>
				<div className="skillsIcon">
					<img src={react} alt="react" />
					REACT
				</div>
				<div className="skillsIcon">
					<img src={redux} alt="redux" />
					REDUX
				</div>
				<div className="skillsIcon">
					<img src={node} alt="node" />
					NODE
				</div>
				<div className="skillsIcon">
					<img src={vscode} alt="vsco" />
					VS CODE
				</div>
				<div className="skillsIcon">
					<img src={figma} alt="figma" />
					FIGMA
				</div>
			</div>
		</div>
	);
}
