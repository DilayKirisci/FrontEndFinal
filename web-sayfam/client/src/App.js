import "./global.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
	const theme = useContext(ThemeContext);
	console.log(theme);

	return (
		<div className="App" id={theme.theme}>
			<Header />
			<Skills />
			<Profile />
			<Projects />
		</div>
	);
}

export default App;
