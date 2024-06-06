"use client";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import Countdown from '../components/Countdown';


export default function App() {
  const targetDate = '2024-06-21T00:00:00';
  return (
    <div>
      <Countdown targetDate={targetDate} />
    </div>
  );
}
