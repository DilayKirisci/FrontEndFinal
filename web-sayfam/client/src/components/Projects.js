import "../global.css";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

import deneme1 from "../imgs/projects/deneme1.png";
import deneme2 from "../imgs/projects/deneme2.png";

export default function Projects() {
	const theme = useContext(ThemeContext);
	console.log(theme.theme);
	return (
		<div className="projectsContainer">
			<div className="projectTitle">
				<h2>Projects</h2>
			</div>
			<div className="projectCards">
				<div className="projectCard1">
					<div className="cardTitle">
						<h3>Todo List</h3>
					</div>
					<div className="cardText">
						"To-Do App Project: Developed a task management application
						utilizing modern web technologies. Designed an interface allowing
						users to create, organize, and prioritize tasks
					</div>
					<div className="cardButtons">
						<div className="cardButton">react</div>
						<div className="cardButton">vercel</div>
						<div className="cardButton">axios</div>
						<div className="cardButton">router</div>
					</div>
					<div className="cardContact">
						<p>
							{" "}
							<a href="https://github.com/DilayKirisci?tab=repositories">
								View on Github
							</a>
						</p>
						<p>
							<a href="https://vercel.com/dashboard">Go to app</a>
							<i class="fa-solid fa-arrow-right"></i>
						</p>
					</div>
					<div className="cardPc cardPhoto">
						<img src={deneme1} alt="" />
						<div className="customComputer"></div>
					</div>
				</div>
				<div className="projectCard2">
					<div className="cardTitle">
						<h3>CRUD Films</h3>
					</div>
					<div className="cardText">
						CRUD Films Project: Built a film management application enabling
						users to perform basic CRUD operations on a film database.
					</div>
					<div className="cardButtons">
						<div className="cardButton">react</div>
						<div className="cardButton">vercel</div>
						<div className="cardButton">axios</div>
						<div className="cardButton">router</div>
					</div>
					<div className="cardContact">
						<p>
							{" "}
							<a href="https://github.com/DilayKirisci?tab=repositories">
								View on Github
							</a>
						</p>
						<p>
							<a href="https://vercel.com/dashboard">Go to app</a>
							<i class="fa-solid fa-arrow-right"></i>
						</p>
					</div>
					<div className="cardPc cardPhoto">
						<img src={deneme2} alt="" />
						<div className="customComputer"></div>
					</div>
				</div>
			</div>
			<div className="projectFooter">
				<div className="projectFooterTitle">
					<h1> Let’s work together on your next product. </h1>
					<p className="customFooter"></p>
				</div>
				<div className="projectFooterLinks">
					<a href="https://github.com/DilayKirisci" className="github">
						{" "}
						Github{" "}
					</a>
					<a
						href="https://www.linkedin.com/in/dilay-kirisci-65baa8152/"
						className="linkedIn"
					>
						{" "}
						LinkedIn{" "}
					</a>
					<a href="#" className="blog">
						{" "}
						Personal Blog{" "}
					</a>
					<a href="isik.kirisci@gmail.com" className="email">
						{" "}
						Email{" "}
					</a>
				</div>
			</div>
		</div>
	);
}
