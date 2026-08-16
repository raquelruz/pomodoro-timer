import { useEffect, useState } from "react";

export const Counter = () => {
	const [counter, setCounter] = useState(1500);
	const [isOn, setIsOn] = useState(false);

	const minutes = Math.floor(counter / 60);
	const seconds = (counter % 60).toString().padStart(2, "0");

	const handleClick = () => {
		setIsOn(prev => !prev);
	};

	useEffect(() => {
		let intervalId;

		if (isOn) {
			intervalId = setInterval(() => {
				setCounter((prev) => prev > 0 ? prev - 1 : prev);
			}, 1000);
		}
		return () => {
			clearInterval(intervalId);
		};
	}, [isOn]);


    useEffect(() => {
        if (counter === 0) {
            setIsOn(false);
        }
    }, [counter])

    const handleReset = () => {
        setCounter(1500);
        setIsOn(false);
    }

	return (
		<div>
			<h1>Counter</h1>

			<h1>
				{minutes}:{seconds}
			</h1>

			<button onClick={handleClick}>{isOn ? "Pausa" : "Start"}</button>
            <button onClick={handleReset}>Reset</button>
		</div>
	);
};
