import { IoBookOutline, IoStatsChart } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { FaTasks } from "react-icons/fa";

export const NAV_LINKS = [
    { path: "/", label: "Temporizador", icon: IoIosTimer },
    { path: "/stats", label: "Estadísticas", icon: IoStatsChart },
    { path: "/tasks", label: "Tareas", icon: FaTasks },
    { path: "/journal", label: "Journal", icon: IoBookOutline },
];