import React, { useState } from "react";

const UpdatedComponent = (BaseComponent, increaseCount) => {
	function NewComponent(props) {
		const [counter, setCounter] = useState(10);
		return (
			<BaseComponent
				counter={counter}
				incrementCounter={() =>
					setCounter((coutner) => counter + increaseCount)
				}
			/>
		);
	}
	return NewComponent;
};

export default UpdatedComponent;
