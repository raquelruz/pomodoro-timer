import { Header } from "./components/Header/Header";
import { Timer } from "./components/Timer";

export const App = () => {
	return (
		<div className="min-h-screen bg-bg-secondary">
			<div className="px-6 py-6">
				<Header />
			</div>
			
			<div className="px-4 sm:py-10">
				<Timer />
			</div>
		</div>
	);
};
