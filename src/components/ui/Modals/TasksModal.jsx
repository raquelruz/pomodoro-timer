import { useState, useEffect } from "react";

export const TaskModal = ({ isOpen, onClose, onSave, initialData }) => {
	const [title, setTitle] = useState("");
	const [estimatedPomodoros, setEstimatedPomodoros] = useState(1);

	useEffect(() => {
		if (initialData) {
			setTitle(initialData.title);
			setEstimatedPomodoros(initialData.estimatedPomodoros);
		} else {
			setTitle("");
			setEstimatedPomodoros(1);
		}
	}, [initialData, isOpen]);

	if (!isOpen) return null;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!title.trim()) return;

		onSave({ title, estimatedPomodoros });
		onClose();
	};

	return (
		<div
			className="fixed inset-0 bg-bg-overlay flex items-center justify-center z-50 px-4"
			onClick={onClose}
		>
			<div
				className="bg-bg-primary rounded-3xl p-6 w-full max-w-sm"
				onClick={(e) => e.stopPropagation()}
			>
				<h3 className="mb-4">
					{initialData ? "Editar tarea" : "Nueva tarea"}
				</h3>

				<form onSubmit={handleSubmit} className="flex flex-col gap-4">
					<div>
						<label className="text-sm font-medium text-text-secondary block mb-1">
							Título
						</label>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							placeholder="¿Qué vas a estudiar?"
							autoFocus
							className="w-full px-4 py-2 rounded-full border border-primary-200 bg-bg-secondary outline-none focus:border-primary-500"
						/>
					</div>

					<div>
						<label className="text-sm font-medium text-text-secondary block mb-1">
							Pomodoros estimados
						</label>
						<input
							type="number"
							min="1"
							value={estimatedPomodoros}
							onChange={(e) => setEstimatedPomodoros(e.target.value)}
							className="w-full px-4 py-2 rounded-full border border-primary-200 bg-bg-secondary outline-none focus:border-primary-500"
						/>
					</div>

					<div className="flex gap-3 mt-2">
						<button
							type="button"
							onClick={onClose}
							className="flex-1 py-2 rounded-full border border-primary-200 text-text-primary"
						>
							Cancelar
						</button>
						<button
							type="submit"
							className="flex-1 py-2 rounded-full bg-primary-800 text-primary-50 font-medium"
						>
							Guardar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};