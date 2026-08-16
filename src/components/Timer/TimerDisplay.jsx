export const TimerDisplay = ({ counter }) => {
	const minutes = Math.floor(counter / 60);
	const seconds = (counter % 60).toString().padStart(2, "0");
	
	return (
		<div>
			<h1 className="font-title">{minutes}:{seconds}</h1>
		</div>
	)
};
