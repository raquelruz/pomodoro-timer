import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import { TaskCard } from "../components/Tasks/TaskCard";
import { TaskModal } from "../components/ui/Modals/TasksModal";
import { FaPlus } from "react-icons/fa6";

export const TasksPage = () => {
	const { tasks, addTask, updateTask, toggleTask, deleteTask } = useTasks();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [editingTask, setEditingTask] = useState(null);

	const handleOpenCreate = () => {
		setEditingTask(null);
		setIsModalOpen(true);
	};

	const handleOpenEdit = (task) => {
		setEditingTask(task);
		setIsModalOpen(true);
	};

	const handleSave = (data) => {
		if (editingTask) {
			updateTask(editingTask.id, data);
		} else {
			addTask(data.title, data.estimatedPomodoros);
		}
	};

	return (
		<div className="relative pb-20">
			<h2 className="mb-1">Tareas Pendientes</h2>
			<p className="text-text-tertiary mb-6">Organiza tu sesión de estudio de hoy.</p>

			<div className="flex flex-col gap-3">
				{tasks.map((task) => (
					<TaskCard
						key={task.id}
						task={task}
						onToggle={toggleTask}
						onEdit={handleOpenEdit}
						onDelete={deleteTask}
					/>
				))}
			</div>

			{tasks.length === 0 && (
				<p className="text-center text-text-tertiary mt-8">
					No tienes tareas todavía
				</p>
			)}

			<button
				onClick={handleOpenCreate}
				className="fixed bottom-24 right-6 flex items-center justify-center w-14 h-14 rounded-full bg-primary-900 text-primary-50 shadow-lg"
			>
				<FaPlus className="text-lg" />
			</button>

			<TaskModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onSave={handleSave}
				initialData={editingTask}
			/>
		</div>
	);
};