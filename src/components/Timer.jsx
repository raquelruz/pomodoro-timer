import { useEffect, useState } from "react";
import { TimerDisplay } from "./Timer/TimerDisplay";
import { TimerControls } from "./Timer/TimerControls";
import { TIMER_MODES } from "../constants/timer";
import { TimerModes } from "./Timer/TimerModes";

export const Timer = () => {
	const [time, setTime] = useState(TIMER_MODES.focus.duration);
	const [isOn, setIsOn] = useState(false);
	const [mode, setMode] = useState("focus");

	const currentMode = TIMER_MODES[mode];

	const handleClick = () => {
		setIsOn((prev) => !prev);
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
			setIsOn(false);
		}
	}, [time]);

	const handleReset = () => {
		setTime(currentMode.duration);
		setIsOn(false);
	};

	const handleNext = () => {
		const modes = Object.keys(TIMER_MODES);

		const currentIndex = modes.indexOf(mode);
		const nextIndex = (currentIndex + 1) % modes.length;

		const nextMode = modes[nextIndex];

		setMode(nextMode);
		setTime(TIMER_MODES[nextMode].duration);
		setIsOn(false);
	};

	const handleModeChange = (newMode) => {
		setMode(newMode);
		setTime(TIMER_MODES[newMode].duration);
		setIsOn(false);
	}

	const progress = ((currentMode.duration - time) / currentMode.duration) * 100;

	return (
		<div>
			<div>
				<TimerModes mode={mode} handleModeChange={handleModeChange}/>
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
						<TimerDisplay time={time} label={currentMode.label}/>
					</div>
				</div>
			</div>

			<div className="mt-10">
				<TimerControls isOn={isOn} handleClick={handleClick} handleReset={handleReset} handleNext={handleNext}/>
			</div>
		</div>
	);
};
