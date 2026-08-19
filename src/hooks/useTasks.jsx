import { useEffect, useState } from "react";

const STORAGE_KEY = "pomodoro-tasks";

export const useTasks = () => {
	const [tasks, setTasks] = useState(() => {
		const stored = localStorage.getItem(STORAGE_KEY);
		return stored ? JSON.parse(stored) : [];
	});

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
	}, [tasks]);

	const addTask = (title, estimatedPomodoros) => {
		if (!title.trim()) return;

		const newTask = {
			id: crypto.randomUUID(),
			title: title.trim(),
			completed: false,
			pomodoros: 0,
			estimatedPomodoros: Number(estimatedPomodoros) || 1,
		};

		setTasks((prev) => [...prev, newTask]);
	};

	const updateTask = (id, updates) => {
		setTasks((prev) =>
			prev.map((task) => (task.id === id ? { ...task, ...updates } : task))
		);
	};

	const toggleTask = (id) => {
		setTasks((prev) =>
			prev.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const deleteTask = (id) => {
		setTasks((prev) => prev.filter((task) => task.id !== id));
	};

	return { tasks, addTask, updateTask, toggleTask, deleteTask };
};