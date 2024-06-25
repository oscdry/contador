"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import styled from 'styled-components';
import Countdown from '../components/Countdown';
import TodoList from '../components/todoList';
import { Hourglass } from 'react95';


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  background-color: #f0f0f0;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  margin-top: 2rem;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const inter = Inter({ subsets: ["latin"] });

const tasks = [
  { text: 'Puente de Junio', date: '2024-06-21T00:00:00' },
  { text: 'Vacaciones Verano', date: '2024-07-27T12:00:00' },
  { text: 'Vacaciones Navidad', date: '2024-12-21T18:00:00' },
];
export default function App() {
  const targetDate = '2024-07-27T00:00:00';
  const target = new Date(targetDate);
  const now = new Date('2024-06-20T00:00:00');
  const difference = target - now;

  console.log(difference);

  const secondsLeft = Math.floor(difference / 1000); 
  const duration = secondsLeft;
  return (
    <div> 
      <Countdown targetDate={targetDate} />
      <TodoList tasks={tasks} />  
    </div>     
  );

}
