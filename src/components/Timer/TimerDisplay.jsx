export const TimerDisplay = ({ time, label }) => {
	const minutes = Math.floor(time / 60);
	const seconds = (time % 60).toString().padStart(2, "0");

	return (
		<div className="text-center">
			<p className="font-title font-bold text-8xl text-primary-800">
				{minutes}:{seconds}
			</p>

			<p className="mt-2 text-sm font-medium tracking-[0.2em] text-primary-500">
				{label.toUpperCase()}
			</p>
		</div>
	);
};