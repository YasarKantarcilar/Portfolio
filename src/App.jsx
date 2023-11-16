import React, { useState } from "react";
import HeroSection from "./Components/HeroSection";
import TechStackSection from "./Components/TechStackSection";
import ExperienceSection from "./Components/ExperienceSection";
import Navbar from "./Components/Navbar";
function App() {
	const [activePage, setActivePage] = useState("Home");

	return (
		<>
			<Navbar color={activePage === "Tech Stack" ? "white" : "black"} setActivePage={setActivePage} />
			{activePage === "Home" && <HeroSection />}
			{activePage === "Tech Stack" && <TechStackSection />}
			{activePage === "Experience" && <ExperienceSection />}
		</>
	);
}

export default App;
