import React from "react";
import WithCounter from "./WithCounter";

const HoveIncrease = (props) => {
	const { counter, incrementCounter } = props;
	return (
		<div>
			<button onMouseOver={() => incrementCounter()}>Hover on me</button>
			<p>hover count:{counter}</p>
		</div>
	);
};

export default WithCounter(HoveIncrease, 10);
