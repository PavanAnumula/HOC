import React from "react";
import WithCounter from "./WithCounter";

const ClickIncrease = (props) => {
	const { counter, incrementCounter } = props;
	return (
		<div>
			<button onClick={() => incrementCounter()}>Click me</button>
			<p>click count:{counter}</p>
		</div>
	);
};

export default WithCounter(ClickIncrease, 20);
