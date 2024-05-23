import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HoverCounter from "./components/HoveIncrease.jsx";
import ClickCouter from "./components/ClickIncrease.jsx";

function App() {
	return (
		<div>
			<HoverCounter />
			<ClickCouter />
		</div>
	);
}

export default App;
