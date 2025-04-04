'use client';
import React, { useEffect } from 'react';
import useDarkModeStore from '@/state/useDarkMode';
import Image from 'next/image';

const ThemeToggle = () => {
  const { theme, setTheme } = useDarkModeStore();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme);
    }
  }, [setTheme]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center justify-center gap-3">
      <Image
        alt='theme icon'
        src={'/assets/desktop/icon-sun.svg'}
        width={24}
        height={24}
      />
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          className="sr-only peer"
          onChange={toggleTheme}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
      </label>
      <Image
        alt='theme icon'
        src={'/assets/desktop/icon-moon.svg'}
        width={24}
        height={24}
      />
    </div>
  );
};

export default ThemeToggle;