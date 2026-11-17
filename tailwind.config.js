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
                    bg: '#faf9f5',
                    light: '#fdfcf9',
                },
                surface: {
                    DEFAULT: '#ffffff',
                    border: '#e7e5df',
                    subtle: '#f3f2ee',
                },
                forest: {
                    DEFAULT: '#1f6347',
                    hover: '#184f38',
                    dark: '#143f2d',
                    light: '#eef5f1',
                    subtle: '#e2ede7',
                },
                sage: {
                    DEFAULT: '#dce7df',
                    light: '#edf3ef',
                    dark: '#b6ccbe',
                    subtle: '#c7dbcf',
                },
                charcoal: {
                    DEFAULT: '#18181b',
                    soft: '#27272a',
                    muted: '#6b7280',
                    light: '#9ca3af',
                },
            },
        },
    },

    plugins: [forms],
};
