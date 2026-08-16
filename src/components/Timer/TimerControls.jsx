import { FaArrowRotateLeft, FaPlay, FaPause } from "react-icons/fa6";
import { RxTrackNext } from "react-icons/rx";

export const TimerControls = ({ isOn, handleClick, handleReset, handleNext }) => {
	return (
		<div className="flex items-center justify-center gap-10 mt-10">
			<button
				onClick={handleReset}
				className="flex items-center justify-center w-14 h-14 rounded-full border border-primary-100 bg-bg-secondary text-text-primary transition-all duration-200 hover:border-primary-500 hover:scale-105"
			>
				<FaArrowRotateLeft className="text-lg" />
			</button>

			<button
				onClick={handleClick}
				className="flex items-center justify-center w-20 h-20 rounded-full bg-primary-800 text-primary-50 transition-all duration-200 hover:scale-105"
			>
				{isOn ? <FaPause className="text-xl" /> : <FaPlay className="text-xl ml-1" />}
			</button>

			<button
				onClick={handleNext}
				className="flex items-center justify-center w-14 h-14 rounded-full border border-primary-100 bg-bg-secondary text-text-primary transition-all duration-200 hover:border-primary-500 hover:scale-105"
			>
				<RxTrackNext className="text-xl" />
			</button>
		</div>
	);
};
