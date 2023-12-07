import React, { useState, useEffect } from 'react';

export default function ToggleThem() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark';
  });

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('theme');
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button>
      {/* Dark mode button */}
      <abbr title="Change Mode">
        <label className="">
          <input
            onClick={toggleDarkMode} // Use toggleDarkMode here
            type="checkbox"
            className="sr-only peer"
            checked={isDarkMode} // Ensure the checkbox reflects the isDarkMode state
          />
          <span className="peer dark:bg-green-300 cursor-pointer relative inline-block w-[3.2em] h-[1.8em] transition-all duration-300 ease-in-out bg-gray-300 rounded-full before:absolute before:content-inside before:top-[0.25rem] before:left-[0.3rem] dark:before:left-[1.6rem] before:w-[1.3em] before:h-[1.3em] before:bg-white before:rounded-full before:transform before:transition-transform before:duration-300 before:ease-in-out"></span>
        </label>
      </abbr>
    </button>
  );
}
