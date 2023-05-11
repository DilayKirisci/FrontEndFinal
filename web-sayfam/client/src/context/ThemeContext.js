import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
	const storedTheme = localStorage.getItem("theme");
	const [theme, setTheme] = useState(storedTheme || "light");

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	function toggleTheme() {
		setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
	}

	const value = {
		theme: theme,
		toggleTheme: toggleTheme,
	};

	return (
		<ThemeContext.Provider value={value}>
			{props.children}
		</ThemeContext.Provider>
	);
}

export { ThemeContext, ThemeProvider };
