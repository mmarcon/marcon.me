(() => {
    'use strict'

    const storedTheme = localStorage.getItem('theme');

    const getPreferredTheme = () => {
        if (storedTheme) {
            return storedTheme;
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    const getCurrentTheme = () => {
        return document.querySelector('html').getAttribute('data-bs-theme');
    }

    const setTheme = function (theme) {
        if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme);
        }
    }

    setTheme(getPreferredTheme());

    const showActiveTheme = theme => {
        const activeThemeIcon = document.querySelector('.theme-selector i');
        activeThemeIcon.classList.remove('fa-moon', 'fa-sun');
        activeThemeIcon.classList.add(theme === 'dark' ? 'fa-sun' : 'fa-moon');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (storedTheme !== 'light' || storedTheme !== 'dark') {
            setTheme(getPreferredTheme());
        }
    })

    window.addEventListener('DOMContentLoaded', () => {
        showActiveTheme(getPreferredTheme());
        const activeThemeIcon = document.querySelector('.theme-selector');
        activeThemeIcon.addEventListener('click', (e) => {
            e.preventDefault();
            const theme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', theme);
            setTheme(theme);
            showActiveTheme(theme);
        });
    });
})();