import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../constants/navigation";

export const Navbar = () => {
	return (
<nav className="fixed bottom-2 left-4 right-4 bg-bg-primary rounded-3xl shadow-lg">		<div className="flex items-center justify-around py-3 max-w-md mx-auto">
				{NAV_LINKS.map(({ path, label, icon: Icon }) => (
					<NavLink
						key={path}
						to={path}
						end={path === "/"}
						className="flex flex-col items-center gap-1"
					>
						{({ isActive }) => (
							<>
								<span
									className={`flex items-center justify-center w-11 h-11 rounded-full transition-colors duration-200 ${
										isActive ? "bg-primary-800 text-primary-50" : "text-text-tertiary"
									}`}
								>
									<Icon className="text-lg" />
								</span>
								<span
									className={`text-xs font-medium transition-colors duration-200 ${
										isActive ? "text-primary-800" : "text-text-tertiary"
									}`}
								>
									{label}
								</span>
							</>
						)}
					</NavLink>
				))}
			</div>
		</nav>
	);
};