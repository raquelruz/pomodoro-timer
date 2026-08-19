import { useState, useRef, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export const TaskMenu = ({ onEdit, onDelete }) => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div className="relative" ref={menuRef}>
			<button onClick={() => setIsOpen((prev) => !prev)}>
				<BsThreeDotsVertical className="text-text-tertiary" />
			</button>

			{isOpen && (
				<div className="absolute right-0 mt-1 w-32 bg-bg-primary rounded-xl shadow-lg border border-primary-100 overflow-hidden z-10">
					<button
						onClick={() => {
							onEdit();
							setIsOpen(false);
						}}
						className="w-full text-left px-4 py-2 text-sm text-text-primary hover:bg-bg-secondary"
					>
						Editar
					</button>
					<button
						onClick={() => {
							onDelete();
							setIsOpen(false);
						}}
						className="w-full text-left px-4 py-2 text-sm text-error-600 hover:bg-bg-secondary"
					>
						Eliminar
					</button>
				</div>
			)}
		</div>
	);
};