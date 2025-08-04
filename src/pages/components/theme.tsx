"use client";
import { useEffect, useState } from 'react';
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialMode = savedTheme ? savedTheme === 'dark' : systemPrefersDark;
    
    setIsDark(initialMode);
    document.documentElement.classList.toggle('dark', initialMode);
    document.documentElement.style.setProperty('--background', initialMode ? '#0a0a0a' : '#ffffff');
    document.documentElement.style.setProperty('--foreground', initialMode ? '#ededed' : '#171717');
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newMode);
    document.documentElement.style.setProperty('--background', newMode ? '#0a0a0a' : '#ffffff');
    document.documentElement.style.setProperty('--foreground', newMode ? '#ededed' : '#171717');
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
    >
      {isDark ? (
        <MdOutlineLightMode className="text-yellow-300 text-xl" />
      ) : (
        <MdOutlineDarkMode className="text-purple-900 text-xl" />
      )}
      <span className="text-sm">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
}