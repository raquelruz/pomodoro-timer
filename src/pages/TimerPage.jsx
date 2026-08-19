import { useEffect, useState } from "react";
import { TimerDisplay } from "../components/Timer/TimerDisplay";
import { TimerControls } from "../components/Timer/TimerControls";
import { TIMER_MODES } from "../constants/timer";
import { TimerModes } from "../components/Timer/TimerModes";

export const TimerPage = () => {
	const [time, setTime] = useState(TIMER_MODES.focus.duration);
	const [isOn, setIsOn] = useState(false);
	const [mode, setMode] = useState("focus");
	const [cycles, setCycles] = useState(0);

	const currentMode = TIMER_MODES[mode];

	const handleClick = () => {
		setIsOn((prev) => !prev);
	};

	const handleModeChange = (newMode) => {
		setMode(newMode);
		setTime(TIMER_MODES[newMode].duration);
		setIsOn(false);
	};

	const handleAutoNext = (newMode) => {
		setMode(newMode);
		setTime(TIMER_MODES[newMode].duration);
		setIsOn(true);
	};

	const handleNext = () => {
		const modes = Object.keys(TIMER_MODES);

		const currentIndex = modes.indexOf(mode);
		const nextIndex = (currentIndex + 1) % modes.length;

		handleModeChange(modes[nextIndex]);
	};

	useEffect(() => {
		let intervalId;

		if (isOn) {
			intervalId = setInterval(() => {
				setTime((prev) => (prev > 0 ? prev - 1 : prev));
			}, 1000);
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [isOn]);

	useEffect(() => {
		if (time === 0) {
			if (mode === "focus") {
				setCycles((prev) => prev + 1);

				const nextCycle = cycles + 1;

				if (nextCycle === 4) {
					handleAutoNext("longBreak");
				} else {
					handleAutoNext("shortBreak");
				}
			} else {
				if (mode === "longBreak") {
					setCycles(0);
				}

				handleAutoNext("focus");
			}
		}
	}, [time]);

	const handleReset = () => {
		setTime(currentMode.duration);
		setIsOn(false);
		setCycles(0);
	};

	const progress = ((currentMode.duration - time) / currentMode.duration) * 100;

	return (
		<div>
			<div>
				<TimerModes mode={mode} handleModeChange={handleModeChange} />
			</div>

			<div className="flex justify-center">
				<div
					className="flex items-center justify-center rounded-full h-100 w-100"
					style={{
						background: `conic-gradient(
							#c9a99a ${progress}%,
							#eee4de ${progress}%
						)`,
					}}
				>
					<div className="flex items-center justify-center bg-[#fcf9f6] rounded-full h-[98%] w-[98%]">
						<TimerDisplay time={time} label={currentMode.label} />
					</div>
				</div>
			</div>

			<div className="mt-10">
				<TimerControls
					isOn={isOn}
					handleClick={handleClick}
					handleReset={handleReset}
					handleNext={handleNext}
				/>
			</div>
		</div>
	);
};
