import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState(
    localStorage.theme ? localStorage.theme : 'dark'
  );
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    localStorage.setItem('theme', theme);
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
