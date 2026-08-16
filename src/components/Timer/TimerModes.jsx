export const TimerModes = ({ mode, handleModeChange }) => {
	return (
		<div className="flex justify-center mb-12">
			<div className="flex items-center bg-bg-secondary rounded-full p-1 w-fit max-w-full">
				<button
					onClick={() => handleModeChange("focus")}
					className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-200 ${
						mode === "focus" ? "bg-primary-800 text-primary-50" : "text-text-primary"
					}`}
				>
					Enfoque
				</button>

				<button
					onClick={() => handleModeChange("shortBreak")}
					className={`px-6 py-3 rounded-full text-base font-medium leading-tight transition-all duration-200 ${
						mode === "shortBreak" ? "bg-primary-800 text-primary-50" : "text-text-primary"
					}`}
				>
					Pausa
					<br />
					Corta
				</button>

				<button
					onClick={() => handleModeChange("longBreak")}
					className={`px-6 py-3 rounded-full text-base font-medium leading-tight transition-all duration-200 ${
						mode === "longBreak" ? "bg-primary-800 text-primary-50" : "text-text-primary"
					}`}
				>
					Pausa
					<br />
					Larga
				</button>
			</div>
		</div>
	);
};
