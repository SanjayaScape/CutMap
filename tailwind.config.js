import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
            },
            colors: {
                warm: {
                    bg: '#faf9fe',
                    light: '#ffffff',
                },
                surface: {
                    DEFAULT: '#ffffff',
                    border: '#e5e2f0',
                    subtle: '#f5f4fb',
                },
                brand: {
                    DEFAULT: '#2B07BB',
                    hover: '#23059c',
                    dark: '#1b047a',
                    light: '#f3f0ff',
                    subtle: '#ede9fe',
                    accent: '#5425e8',
                    border: '#d5ccfa',
                },
                forest: {
                    DEFAULT: '#2B07BB',
                    hover: '#23059c',
                    dark: '#1b047a',
                    light: '#f3f0ff',
                    subtle: '#ede9fe',
                },
                sage: {
                    DEFAULT: '#e0dbf5',
                    light: '#f5f3ff',
                    dark: '#c4b8ee',
                    subtle: '#ede9fe',
                },
                charcoal: {
                    DEFAULT: '#11142d',
                    soft: '#1f2445',
                    muted: '#687182',
                    light: '#9da8b6',
                },
            },
        },
    },

    plugins: [forms],
};
