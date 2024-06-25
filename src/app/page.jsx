"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Countdown from '../components/Countdown';
import TodoList from '../components/todoList';


const inter = Inter({ subsets: ["latin"] });

const tasks = [
  { text: 'Puente de Junio', date: '2024-06-21T00:00:00' },
  { text: 'Vacaciones Verano', date: '2024-07-27T12:00:00' },
  { text: 'Vacaciones Navidad', date: '2024-12-21T18:00:00' },
];
export default function App() {
  const targetDate = '2024-07-27T00:00:00';
  return (
    <div>
      <Countdown targetDate={targetDate} />
      <TodoList tasks={tasks} />
    </div>
  );
}
