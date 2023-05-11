import "../global.css";

export default function Profile() {
	return (
		<div className="profileContainer">
			<div className="profileTitle">
				<h2>Profile</h2>
			</div>
			<div className="profileText">
				<div className="basicInfo">
					<h3>Basic Information</h3>
					<div className="basicInfoForm">
						<div className="row">
							<p>Birth Date:</p>
							<p>City:</p>
							<p>Education:</p>
							<p>Position:</p>
						</div>
						<div className="row">
							<p>17.04.1994</p>
							<p>Istanbul</p>
							<p>Bogazici Universitesi Foreign Language Edu. 2017</p>

							<p>Frontend Dev.</p>
						</div>
					</div>
				</div>
				<div className="aboutMe">
					<h3>About Me</h3>
					<span className="aboutMeCustom">hello</span>
					<p>
						Highly motivated to work as a Frontend Developer, where Ican
						demonstrate my analytical, technical and programming skills.
					</p>{" "}
					<p>
						I am eager to use my knowledge and experience to contribute to the
						company and clients to achieve their goals.
					</p>
				</div>
			</div>
		</div>
	);
}
