import { LuTimer } from "react-icons/lu";
import { IoCheckmarkCircle } from "react-icons/io5";
import { TaskMenu } from "./TaskMenu";

const TaskStatus = ({ completed, estimatedPomodoros }) => {
	if (completed) {
		return (
			<>
				<IoCheckmarkCircle />
				<span>Completado</span>
			</>
		);
	}

	return (
		<>
			<LuTimer />
			<span>{estimatedPomodoros} pomodoros estimados</span>
		</>
	);
};

export const TaskCard = ({ task, onToggle, onEdit, onDelete }) => {
	const titleClass = task.completed
		? "line-through text-text-tertiary"
		: "text-text-primary font-medium";

	const checkboxClass = task.completed
		? "bg-primary-700 border-primary-700"
		: "border-primary-200";

	return (
		<div className="flex items-center gap-3 px-4 py-4 rounded-2xl bg-bg-primary">
			<button
				onClick={() => onToggle(task.id)}
				className={`flex items-center justify-center w-6 h-6 rounded-lg border-2 shrink-0 transition-colors ${checkboxClass}`}
			>
				{task.completed && <span className="text-primary-50 text-xs">✓</span>}
			</button>

			<div className="flex-1">
				<p className={titleClass}>{task.title}</p>

				<div className="flex items-center gap-1 mt-1 text-sm text-text-tertiary">
					<TaskStatus completed={task.completed} estimatedPomodoros={task.estimatedPomodoros} />
				</div>
			</div>

			<TaskMenu onEdit={() => onEdit(task)} onDelete={() => onDelete(task.id)} />
		</div>
	);
};